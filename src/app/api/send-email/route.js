import { NextResponse } from 'next/server';
import { getTransporter } from '@/lib/nodemailer';
import { generateEmailHTML, generatePlainTextEmail } from '@/lib/email-template';
import { generateCustomerConfirmationHTML, generateCustomerConfirmationPlainText } from '@/lib/customer-confirmation-template';
import { site } from '@/lib/site';

export async function POST(request) {
  try {
    // Parse request body
    const formData = await request.json();

    // Validate required fields
    const { name, company, email, phone, requirements } = formData;

    if (!name || !company || !email || !phone || !requirements) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate phone (10 digits)
    if (!/^[0-9]{10}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Generate admin notification email
    const adminHtmlContent = generateEmailHTML(formData);
    const adminTextContent = generatePlainTextEmail(formData);

    // Admin email options
    const adminMailOptions = {
      from: {
        name: 'Royal Electricals & Hardware Website',
        address: process.env.EMAIL_FROM,
      },
      to: site.email,
      subject: `New Enquiry from ${name} - ${company}`,
      text: adminTextContent,
      html: adminHtmlContent,
      replyTo: email, // Allow direct reply to customer
      attachments: [{ filename: 'royal-crown-transparent.png', path: `${process.cwd()}/public/royal-crown-transparent.png`, cid: 'royal-logo' }],
    };

    // Generate customer confirmation email
    const customerHtmlContent = generateCustomerConfirmationHTML(formData);
    const customerTextContent = generateCustomerConfirmationPlainText(formData);

    // Customer confirmation email options
    const customerMailOptions = {
      from: {
        name: 'Royal Electricals & Hardware',
        address: process.env.EMAIL_FROM,
      },
      to: email, // Send to customer's email
      subject: 'Thank you for your enquiry - Royal Electricals & Hardware',
      text: customerTextContent,
      html: customerHtmlContent,
      replyTo: site.email,
      attachments: [{ filename: 'royal-crown-transparent.png', path: `${process.cwd()}/public/royal-crown-transparent.png`, cid: 'royal-logo' }],
    };

    const transporter = getTransporter();

    // Helper function to reliably await email sending in serverless environments
    const sendMailPromise = (mailOptions) => 
      new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            reject(error);
          } else {
            resolve(info);
          }
        });
      });

    // Send both emails
    await Promise.all([
      sendMailPromise(adminMailOptions),
      sendMailPromise(customerMailOptions)
    ]);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Enquiry submitted successfully. Check your email for confirmation.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);

    // Return detailed error in development, generic in production
    const isDevelopment = process.env.NODE_ENV === 'development';

    return NextResponse.json(
      {
        error: isDevelopment
          ? error.message
          : 'Failed to send email. Please try again or contact us directly.',
        details: isDevelopment ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
