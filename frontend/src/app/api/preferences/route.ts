import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, preferences, frequency } = body;

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
      from: 'Lendro.AI Newsletter <noreply@lendro.ai>',
      to: 'kaushal@lendro.ai',
      subject: `Newsletter Preferences Updated`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Newsletter Preferences Updated</title>
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
            .preferences-info {
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
            .preferences-box {
              background-color: #f0f9ff;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #0ea5e9;
              margin-top: 20px;
            }
            .preference-item {
              display: flex;
              align-items: center;
              margin-bottom: 8px;
            }
            .preference-item:last-child {
              margin-bottom: 0;
            }
            .checkmark {
              color: #10b981;
              margin-right: 8px;
            }
            .cross {
              color: #ef4444;
              margin-right: 8px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>⚙️ Newsletter Preferences Updated</h1>
            </div>
            <div class="content">
              <div class="preferences-info">
                <h3 style="margin: 0 0 10px 0; color: #1E51DB;">Update Details</h3>
                <p style="margin: 0;"><strong>Action:</strong> Preferences Updated</p>
                <p style="margin: 5px 0 0 0;"><strong>Date:</strong> ${new Date().toLocaleString()}</p>
              </div>
              
              <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value">${email}</div>
              </div>
              
              ${frequency ? `
                <div class="field">
                  <div class="field-label">Email Frequency</div>
                  <div class="field-value">${frequency}</div>
                </div>
              ` : ''}
              
              ${preferences && preferences.length > 0 ? `
                <div class="preferences-box">
                  <h4 style="margin: 0 0 15px 0; color: #0c4a6e;">📋 Content Preferences</h4>
                  <div class="preference-item">
                    <span class="${preferences.includes('industry-insights') ? 'checkmark' : 'cross'}">
                      ${preferences.includes('industry-insights') ? '✓' : '✗'}
                    </span>
                    <span>Industry Insights & Trends</span>
                  </div>
                  <div class="preference-item">
                    <span class="${preferences.includes('product-updates') ? 'checkmark' : 'cross'}">
                      ${preferences.includes('product-updates') ? '✓' : '✗'}
                    </span>
                    <span>Product Updates & Features</span>
                  </div>
                  <div class="preference-item">
                    <span class="${preferences.includes('case-studies') ? 'checkmark' : 'cross'}">
                      ${preferences.includes('case-studies') ? '✓' : '✗'}
                    </span>
                    <span>Case Studies & Success Stories</span>
                  </div>
                  <div class="preference-item">
                    <span class="${preferences.includes('webinars') ? 'checkmark' : 'cross'}">
                      ${preferences.includes('webinars') ? '✓' : '✗'}
                    </span>
                    <span>Webinars & Events</span>
                  </div>
                  <div class="preference-item">
                    <span class="${preferences.includes('research') ? 'checkmark' : 'cross'}">
                      ${preferences.includes('research') ? '✓' : '✗'}
                    </span>
                    <span>Research & Whitepapers</span>
                  </div>
                </div>
              ` : ''}
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0; color: #64748b; font-size: 14px;">
                  This email was sent from the Lendro.AI newsletter preferences update form. 
                  The user's preferences have been updated accordingly.
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
      message: 'Preferences updated successfully',
      adminEmail: adminEmailResult
    });
  } catch (error) {
    console.error('Error processing preferences update:', error);
    
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to update preferences', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
} 