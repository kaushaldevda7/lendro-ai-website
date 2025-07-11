export const getAdminNotificationEmail = ({
  name,
  email,
  company,
  subject,
  message,
  phone,
  formType
}: {
  name: string;
  email: string;
  company?: string;
  subject?: string;
  message: string;
  phone?: string;
  formType?: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission - Lendro.AI</title>
  <style>
    body {
      font-family: Arial, sans-serif;
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
    .form-info {
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
    }
    .message-content {
      background-color: #f8fafc;
      padding: 15px;
      border-radius: 4px;
      border: 1px solid #e2e8f0;
      white-space: pre-wrap;
      font-family: inherit;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="form-info">
        <h3 style="margin: 0 0 10px 0; color: #1E51DB;">Form Details</h3>
        <p style="margin: 0;"><strong>Form Type:</strong> ${formType || 'Contact Form'}</p>
        <p style="margin: 5px 0 0 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      </div>
      
      <div class="field">
        <div class="field-label">Name</div>
        <div class="field-value">${name}</div>
      </div>
      
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value">${email}</div>
      </div>
      
      ${company ? `
      <div class="field">
        <div class="field-label">Company</div>
        <div class="field-value">${company}</div>
      </div>
      ` : ''}
      
      ${phone ? `
      <div class="field">
        <div class="field-label">Phone</div>
        <div class="field-value">${phone}</div>
      </div>
      ` : ''}
      
      ${subject ? `
      <div class="field">
        <div class="field-label">Subject</div>
        <div class="field-value">${subject}</div>
      </div>
      ` : ''}
      
      <div class="field">
        <div class="field-label">Message</div>
        <div class="message-content">${message}</div>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0; color: #64748b; font-size: 14px;">
          This email was sent from the Lendro.AI contact form. Reply directly to this email to respond to the inquiry.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
`;

export const getUserConfirmationEmail = ({
  name,
  company
}: {
  name: string;
  company?: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <title>Welcome to the Future of AI Lending</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
      margin: 0;
      padding: 0;
      background-color: #ffffff;
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
      color: #ffffff !important;
      margin: 0;
      font-size: 28px;
      font-weight: 600;
      letter-spacing: -0.5px;
    }
    .content {
      padding: 40px 30px;
      background-color: #ffffff;
      color: #333333;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    .content p, .content ul {
      color: inherit;
    }
    .footer {
      background-color: #f8fafc;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #666666;
      border-radius: 0 0 8px 8px;
    }
    .button-container {
      margin: 35px 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center;
    }
    .button {
      display: inline-block;
      padding: 14px 28px;
      background: linear-gradient(135deg, #1E51DB, #65A8F3);
      color: #ffffff !important;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 500;
      transition: all 0.2s ease;
      min-width: 200px;
      text-align: center;
    }
    .button:hover {
      transform: translateY(-1px);
      opacity: 0.9;
    }
    .button.demo {
      background: linear-gradient(135deg, #1E51DB, #65A8F3);
      box-shadow: 0 4px 6px rgba(30, 81, 219, 0.2);
    }
    .social-links {
      margin-top: 20px;
    }
    .social-links a {
      color: #666666;
      text-decoration: none;
      margin: 0 10px;
    }
    .highlight-box {
      background: linear-gradient(135deg, #9BD7FB20, #65A8F320);
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      border-left: 4px solid #1E51DB;
    }
    @media (prefers-color-scheme: dark) {
      body {
        color: #ffffff;
        background-color: #1a1a1a;
      }
      .content {
        background-color: #2d2d2d;
        color: #ffffff;
      }
      .content p, .content ul {
        color: #ffffff;
      }
      .footer {
        background-color: #1a1a1a;
        color: #cccccc;
      }
      .social-links a {
        color: #cccccc;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 Welcome to Lendro.AI</h1>
    </div>
    <div class="content">
      <p>Hello ${name},</p>
      <p>Thank you for reaching out to us${company ? ` from ${company}` : ''}. We have received your message and appreciate your interest in Lendro.AI's autonomous AI agents for lending.</p>
      
      <div class="highlight-box">
        <h3 style="margin: 0 0 10px 0; color: #1E51DB;">🎯 What's Next?</h3>
        <p style="margin: 0;">Our team will review your inquiry and get back to you within 24 hours with personalized insights on how our AI agents can transform your lending operations.</p>
      </div>
      
      <p>Ready to see our AI agents in action? Book a personalized demo session with our team and discover how Lendro.AI can revolutionize your lending process with:</p>
      <ul>
        <li><strong>Autonomous Decision Making:</strong> AI agents that think, learn, and act independently</li>
        <li><strong>End-to-End Automation:</strong> From origination to collections</li>
        <li><strong>Unprecedented Intelligence:</strong> Advanced risk assessment and fraud detection</li>
        <li><strong>Seamless Integration:</strong> Works with your existing systems</li>
      </ul>
      
      <div class="button-container">
        <a href="https://calendly.com/lendro-ai" class="button demo">Schedule Your AI Demo →</a>
      </div>
      
      <p>In the meantime, you might be interested in:</p>
      <ul>
        <li>Exploring our 7 specialized AI agents</li>
        <li>Reading our industry insights and case studies</li>
        <li>Understanding how we can help streamline your lending operations</li>
      </ul>
      
      <div class="button-container">
        <a href="https://lendro.ai" class="button">Visit Our Website</a>
      </div>
      
      <p>Best regards,<br><strong>The Lendro.AI Team</strong><br><em>Autonomous AI for Intelligent Lending</em></p>
    </div>
    <div class="footer">
      <p><strong>Lendro.AI - Agentic AI for Lending</strong></p>
      <p>Autonomous AI agents that think, learn, and act—transforming lending operations with unprecedented intelligence.</p>
      <div class="social-links">
        <a href="https://linkedin.com/company/lendro-ai">LinkedIn</a> |
        <a href="https://twitter.com/LendroAI">Twitter</a>
      </div>
      <p style="margin-top: 20px; font-size: 12px;">This email was sent to you because you contacted us through our website. If you didn't submit this request, please ignore this email.</p>
    </div>
  </div>
</body>
</html>
`; 