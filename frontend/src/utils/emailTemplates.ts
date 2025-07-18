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
  company,
  email
}: {
  name: string;
  company?: string;
  email: string;
}) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Lendro.AI</title>
    <style>
        /* Reset styles for email clients */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f8fafc;
            padding: 20px;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .email-header {
            background: linear-gradient(135deg, #1E51DB 0%, #65A8F3 50%, #9BD7FB 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }
        
        .logo {
            width: 60px;
            height: 60px;
            margin: 0 auto 20px;
            background: white;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px;
        }
        
        .logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        
        .email-header h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .email-header p {
            font-size: 16px;
            opacity: 0.9;
            margin: 0;
        }
        
        .email-body {
            padding: 40px 30px;
        }
        
        .welcome-message {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .welcome-message h2 {
            font-size: 24px;
            color: #1E51DB;
            margin-bottom: 12px;
            font-weight: 600;
        }
        
        .welcome-message p {
            font-size: 16px;
            color: #64748b;
            line-height: 1.6;
        }
        
        .features-section {
            margin: 40px 0;
        }
        
        .features-section h3 {
            color: #1E51DB;
            font-size: 22px;
            margin-bottom: 30px;
            text-align: center;
            font-weight: 600;
        }
        
        .features-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .feature-item {
            padding: 20px 0;
            border-bottom: 1px solid #e2e8f0;
            display: flex;
            align-items: flex-start;
            gap: 16px;
        }
        
        .feature-item:last-child {
            border-bottom: none;
        }
        
        .feature-icon {
            width: 8px;
            height: 8px;
            background: linear-gradient(135deg, #1E51DB 0%, #65A8F3 100%);
            border-radius: 50%;
            margin-top: 8px;
            flex-shrink: 0;
        }
        
        .feature-content h4 {
            color: #1E51DB;
            font-size: 16px;
            margin-bottom: 6px;
            font-weight: 600;
        }
        
        .feature-content p {
            color: #64748b;
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
        }
        
        .cta-section {
            text-align: center;
            margin: 30px 0;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #1E51DB 0%, #65A8F3 100%);
            color: white;
            text-decoration: none;
            padding: 16px 32px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(30, 81, 219, 0.3);
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(30, 81, 219, 0.4);
        }
        
        .next-steps {
            background: #f8fafc;
            border-radius: 12px;
            padding: 25px;
            margin: 30px 0;
        }
        
        .next-steps h3 {
            color: #1E51DB;
            font-size: 18px;
            margin-bottom: 15px;
            font-weight: 600;
        }
        
        .next-steps ul {
            list-style: none;
            padding: 0;
        }
        
        .next-steps li {
            padding: 8px 0;
            color: #64748b;
            position: relative;
            padding-left: 25px;
        }
        
        .next-steps li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #65A8F3;
            font-weight: bold;
        }
        
        .email-footer {
            background: linear-gradient(135deg, #1E51DB 0%, #65A8F3 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        .footer-content {
            margin-bottom: 20px;
        }
        
        .footer-content h4 {
            color: white;
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: 600;
        }
        
        .footer-content p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            line-height: 1.5;
        }
        
        .social-links {
            margin: 20px 0;
        }
        
        .social-links a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            font-size: 14px;
            opacity: 0.9;
            transition: opacity 0.3s ease;
        }
        
        .social-links a:hover {
            opacity: 1;
        }
        
        .footer-legal {
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            padding-top: 20px;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.8);
        }
        
        .footer-legal a {
            color: white;
            text-decoration: none;
            opacity: 0.9;
        }
        
        .footer-legal a:hover {
            opacity: 1;
        }
        
        /* Responsive design */
        @media (max-width: 600px) {
            .email-container {
                margin: 10px;
                border-radius: 8px;
            }
            
            .email-header {
                padding: 30px 20px;
            }
            
            .email-body {
                padding: 30px 20px;
            }
            
            .features-list {
                margin: 0;
            }
            
            .cta-button {
                padding: 14px 28px;
                font-size: 15px;
            }
            
            .email-footer {
                padding: 25px 15px;
            }
            
            .social-links {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 10px;
                justify-items: center;
                margin: 20px 0;
                max-width: 200px;
                margin-left: auto;
                margin-right: auto;
            }
            
            .social-links a {
                margin: 0;
                display: block;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="email-header">
            <div class="logo">
                <img src="https://lendro.ai/favicon.svg" alt="Lendro.AI Logo" />
            </div>
            <h1>Welcome to Lendro.AI</h1>
            <p>The Future of Intelligent Lending</p>
        </div>
        
        <!-- Body -->
        <div class="email-body">
            <div class="welcome-message">
                <h2>Thank you for your interest${name ? `, ${name}` : ''}!</h2>
                <p>We're excited to connect with you${company ? ` from ${company}` : ''} and show you how Lendro.AI can transform your lending operations with cutting-edge AI technology.</p>
            </div>
            
            <div class="features-section">
                <h3>What Makes Lendro.AI Different</h3>
                <ul class="features-list">
                    <li class="feature-item">
                        <div class="feature-icon"></div>
                        <div class="feature-content">
                            <h4>AI-Powered Decisions</h4>
                            <p>Advanced machine learning models that make smarter lending decisions in real-time.</p>
                        </div>
                    </li>
                    <li class="feature-item">
                        <div class="feature-icon"></div>
                        <div class="feature-content">
                            <h4>Lightning Fast Processing</h4>
                            <p>Process applications in seconds, not days. Reduce approval times by up to 90%.</p>
                        </div>
                    </li>
                    <li class="feature-item">
                        <div class="feature-icon"></div>
                        <div class="feature-content">
                            <h4>Enterprise Security</h4>
                            <p>Bank-grade security with compliance built-in. Your data is always protected.</p>
                        </div>
                    </li>
                    <li class="feature-item">
                        <div class="feature-icon"></div>
                        <div class="feature-content">
                            <h4>Real-time Analytics</h4>
                            <p>Get insights into your lending portfolio with advanced analytics and reporting.</p>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div class="cta-section">
                <a href="https://calendly.com/lendro-ai" class="cta-button">Schedule Your Demo</a>
                <p style="margin-top: 15px; color: #64748b; font-size: 14px;">
                    Book a personalized demo and see Lendro.AI in action
                </p>
            </div>
            
            <div class="next-steps">
                <h3>What Happens Next?</h3>
                <ul>
                    <li>Our team will review your inquiry within 24 hours</li>
                    <li>We'll schedule a personalized demo at your convenience</li>
                    <li>You'll see how Lendro.AI can transform your lending process</li>
                    <li>We'll create a custom implementation plan for your needs</li>
                </ul>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="email-footer">
            <div class="footer-content">
                <h4>Lendro.AI</h4>
                <p>Transforming lending through artificial intelligence</p>
                <p>Making credit accessible, efficient, and intelligent</p>
            </div>
            
            <div class="social-links">
                <a href="https://lendro.ai">Website</a>
                <a href="https://lendro.ai/platform">Platform</a>
                <a href="https://lendro.ai/solutions">Solutions</a>
                <a href="https://lendro.ai/contact">Contact</a>
            </div>
            
            <div class="footer-legal">
                <p>© 2025 Lendro.AI. All rights reserved.</p>
                <p>
                    <a href="https://lendro.ai/privacy-policy">Privacy Policy</a> | 
                    <a href="https://lendro.ai/terms-of-service">Terms of Service</a>
                </p>
                <p style="margin-top: 10px; font-size: 11px;">
                    You received this email because you expressed interest in Lendro.AI.
                </p>
                <p style="margin-top: 8px; font-size: 11px;">
                    <a href="https://lendro.ai/unsubscribe?email=${encodeURIComponent(email)}" style="color: white; opacity: 0.9; text-decoration: underline;">Unsubscribe</a> | 
                    <a href="https://lendro.ai/preferences?email=${encodeURIComponent(email)}" style="color: white; opacity: 0.9; text-decoration: underline;">Update Preferences</a>
                </p>
            </div>
        </div>
    </div>
</body>
</html>
`; 