import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send notification email to admin
    const adminEmailResult = await resend.emails.send({
      from: 'Lendro.AI Whitepaper <noreply@lendro.ai>',
      to: 'kaushal@lendro.ai',
      subject: `New Whitepaper Access Request`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Whitepaper Access Request</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333333;
              margin: 0;
              padding: 0;
              background-color: #f8fafc;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #1E51DB, #65A8F3, #9BD7FB);
              padding: 30px 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .header h1 {
              color: #ffffff;
              margin: 0;
              font-size: 24px;
              font-weight: 600;
            }
            .content {
              padding: 30px;
              background-color: #ffffff;
              border-radius: 0 0 8px 8px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .request-info {
              background-color: #f1f5f9;
              padding: 20px;
              border-radius: 8px;
              margin-bottom: 20px;
              border-left: 4px solid #1E51DB;
            }
            .field {
              margin-bottom: 15px;
            }
            .field-label {
              font-weight: 600;
              color: #1E51DB;
              margin-bottom: 5px;
            }
            .field-value {
              background-color: #f8fafc;
              padding: 10px;
              border-radius: 4px;
              border: 1px solid #e2e8f0;
              font-family: monospace;
            }
            .whitepaper-info {
              background-color: #fef3c7;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #f59e0b;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📄 New Whitepaper Access Request</h1>
            </div>
            <div class="content">
              <div class="request-info">
                <h3 style="margin: 0 0 10px 0; color: #1E51DB;">Access Request Details</h3>
                <p style="margin: 0;"><strong>Document:</strong> The Future of Agentic AI in Financial Services</p>
                <p style="margin: 5px 0 0 0;"><strong>Requested:</strong> ${new Date().toLocaleString()}</p>
              </div>
              
              <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value">${email}</div>
              </div>
              
              <div class="whitepaper-info">
                <h4 style="margin: 0 0 10px 0; color: #92400e;">📋 Whitepaper Details</h4>
                <p style="margin: 0; color: #92400e; font-size: 14px;">
                  <strong>Title:</strong> The Future of Agentic AI in Financial Services<br>
                  <strong>Pages:</strong> 47 pages<br>
                  <strong>Content:</strong> Case studies, implementation frameworks, and ROI projections
                </p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0; color: #64748b; font-size: 14px;">
                  This email was sent from the Lendro.AI whitepaper access request. 
                  The user has been granted access to the whitepaper. You can reply to this email to reach out to them.
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: email
    });

    return NextResponse.json({
      success: true,
      message: 'Whitepaper access granted',
      adminEmail: adminEmailResult
    });
  } catch (error) {
    console.error('Error processing whitepaper access request:', error);
    
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to process whitepaper access request', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
} 