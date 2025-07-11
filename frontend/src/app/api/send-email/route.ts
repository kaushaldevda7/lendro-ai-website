import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getAdminNotificationEmail, getUserConfirmationEmail } from '@/utils/emailTemplates';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message, phone, formType } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send notification email to admin (you)
    const adminEmailResult = await resend.emails.send({
      from: 'Lendro.AI Contact Form <noreply@lendro.ai>',
      to: 'kaushal@lendro.ai',
      subject: `New ${formType || 'Contact Form'} Submission: ${company || name}`,
      html: getAdminNotificationEmail({ 
        name, 
        email, 
        company, 
        subject, 
        message, 
        phone, 
        formType 
      }),
      replyTo: email
    });

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: 'Lendro.AI Team <noreply@lendro.ai>',
      to: email,
      subject: 'Welcome to the Future of AI Lending - Lendro.AI',
      html: getUserConfirmationEmail({ name, company }),
      replyTo: 'kaushal@lendro.ai'
    });

    return NextResponse.json({
      success: true,
      message: 'Emails sent successfully',
      adminEmail: adminEmailResult,
      userEmail: userEmailResult
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
} 