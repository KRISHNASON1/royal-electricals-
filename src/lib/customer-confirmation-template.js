export function generateCustomerConfirmationHTML(formData) {
  const { name, company, email, phone, requirements } = formData;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for your enquiry - Royal Electricals & Hardware</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 8px 24px rgba(0,0,0,0.12); border-radius: 12px; overflow: hidden;">

          <!-- Logo Section -->
          <tr>
            <td style="padding: 40px 30px; text-align: center; background: linear-gradient(135deg, #B68B22 0%, #C8423D 100%);">
              <img src="cid:royal-logo"
                   alt="Royal Electricals & Hardware Logo"
                   style="max-width: 280px; width: 100%; height: auto; display: block; margin: 0 auto 20px; background: #ffffff; padding: 12px; border-radius: 8px;" />
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                ROYAL ELECTRICALS & HARDWARE
              </h1>
              <p style="margin: 8px 0 0; color: #f0f0f0; font-size: 16px; letter-spacing: 1px;">
                Electrical & Hardware Solutions Since 2000.
              </p>
            </td>
          </tr>

          <!-- Success Message -->
          <tr>
            <td style="padding: 40px 30px; text-align: center;">
              <table role="presentation" style="width: 80px; height: 80px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 50%; margin: 0 auto 24px; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);">
                <tr>
                  <td style="text-align: center; vertical-align: middle; font-size: 48px; color: white; line-height: 80px;">
                    ✓
                  </td>
                </tr>
              </table>
              <h2 style="margin: 0 0 16px; color: #292524; font-size: 28px; font-weight: 700;">
                Thank You, ${name}!
              </h2>
              <p style="margin: 0; color: #57534E; font-size: 16px; line-height: 1.6;">
                We have successfully received your enquiry and appreciate your interest in Royal Electricals & Hardware.
              </p>
            </td>
          </tr>

          <!-- Response Time Info -->
          <tr>
            <td style="padding: 0 30px 32px;">
              <div style="background: linear-gradient(to right, #FBF8EC 0%, #FBEAE8 100%); border-left: 4px solid #B68B22; border-radius: 8px; padding: 24px;">
                <p style="margin: 0 0 12px; color: #292524; font-size: 18px; font-weight: 600;">
                  ⏱️ What's Next?
                </p>
                <p style="margin: 0 0 8px; color: #57534E; font-size: 15px; line-height: 1.6;">
                  Our team will review your requirements and get back to you within <strong>24 hours</strong> (Monday-Saturday, 9 AM - 7 PM).
                </p>
                <p style="margin: 0; color: #57534E; font-size: 14px; line-height: 1.6;">
                  For urgent enquiries, please call us directly at <a href="tel:+918591169113" style="color: #B68B22; text-decoration: none; font-weight: 600;">+91 85911 69113</a>
                </p>
              </div>
            </td>
          </tr>

          <!-- Enquiry Summary -->
          <tr>
            <td style="padding: 0 30px 32px;">
              <h3 style="margin: 0 0 16px; color: #292524; font-size: 20px; font-weight: 700;">
                📋 Your Enquiry Details
              </h3>
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #fafbfc; border-radius: 8px; overflow: hidden;">
                <tr style="background-color: #FBF8EC;">
                  <td style="padding: 14px 20px; color: #57534E; font-weight: 600; font-size: 14px; width: 35%;">
                    Company:
                  </td>
                  <td style="padding: 14px 20px; color: #292524; font-size: 15px;">
                    ${company}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 20px; color: #57534E; font-weight: 600; font-size: 14px;">
                    Email:
                  </td>
                  <td style="padding: 14px 20px; color: #292524; font-size: 15px;">
                    ${email}
                  </td>
                </tr>
                <tr style="background-color: #FBF8EC;">
                  <td style="padding: 14px 20px; color: #57534E; font-weight: 600; font-size: 14px;">
                    Phone:
                  </td>
                  <td style="padding: 14px 20px; color: #292524; font-size: 15px;">
                    +91 ${phone}
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 20px; background-color: #ffffff;">
                    <p style="margin: 0 0 8px; color: #57534E; font-weight: 600; font-size: 14px;">
                      Requirements:
                    </p>
                    <p style="margin: 0; color: #292524; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
                      ${requirements}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Information -->
          <tr>
            <td style="padding: 32px 30px; background: linear-gradient(to bottom, #FBF8EC 0%, #F8F1D8 100%); border-top: 3px solid #B68B22;">
              <h3 style="margin: 0 0 20px; color: #292524; font-size: 18px; font-weight: 700; text-align: center;">
                📞 Need Immediate Assistance?
              </h3>
              <div style="background-color: #ffffff; border-radius: 8px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <p style="margin: 0 0 12px; color: #292524; font-size: 16px; font-weight: 700; text-align: center;">
                  Royal Electricals & Hardware
                </p>
                <p style="margin: 0 0 8px; color: #57534E; font-size: 14px; text-align: center;">
                  📍 Plot No. PAP 57, Opposite M.I.D.C. Water Tank<br>
                  Taloja MIDC, Raigad - 410208, Maharashtra, India
                </p>
                <div style="margin: 16px 0; padding: 16px; background: linear-gradient(to right, #FBF8EC 0%, #FBEAE8 100%); border-radius: 6px;">
                  <p style="margin: 0 0 6px; text-align: center;">
                    <a href="tel:+918591169113" style="color: #B68B22; text-decoration: none; font-size: 16px; font-weight: 600;">
                      📱 +91 85911 69113
                    </a>
                  </p>
                  <p style="margin: 0; text-align: center;">
                    <a href="tel:02227410775" style="color: #B68B22; text-decoration: none; font-size: 16px; font-weight: 600;">
                      ☎️ 022 2741 0775
                    </a>
                  </p>
                </div>
                <p style="margin: 0; text-align: center;">
                  <a href="mailto:royalelectrical_taloja@rediffmail.com" style="color: #B68B22; text-decoration: none; font-size: 14px;">
                    ✉️ royalelectrical_taloja@rediffmail.com
                  </a>
                </p>
                <p style="margin: 16px 0 0; color: #78716C; font-size: 13px; text-align: center;">
                  <strong>Business Hours:</strong> Monday - Saturday, 9 AM - 7 PM
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 30px; background-color: #292524; text-align: center;">
              <p style="margin: 0 0 8px; color: #e0e0e0; font-size: 13px;">
                This is an automated confirmation email. Please do not reply to this email.
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                © ${new Date().getFullYear()} Royal Electricals & Hardware. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export function generateCustomerConfirmationPlainText(formData) {
  const { name, company, email, phone, requirements } = formData;

  return `
ROYAL ELECTRICALS & HARDWARE
Electrical & Hardware Solutions Since 2000.
======================================

Dear ${name},

THANK YOU FOR YOUR ENQUIRY!
✓ We have successfully received your enquiry

WHAT'S NEXT?
Our team will review your requirements and get back to you within 24 hours (Monday-Saturday, 9 AM - 7 PM).

For urgent enquiries, please call us directly at +91 85911 69113

YOUR ENQUIRY DETAILS:
--------------------
Company:      ${company}
Email:        ${email}
Phone:        +91 ${phone}

Requirements:
${requirements}

CONTACT INFORMATION:
-------------------
Royal Electricals & Hardware
Plot No. PAP 57, Opposite M.I.D.C. Water Tank
Taloja MIDC, Raigad - 410208, Maharashtra, India

Phone: +91 85911 69113 | 022 2741 0775
Email: royalelectrical_taloja@rediffmail.com

Business Hours: Monday - Saturday, 9 AM - 7 PM

======================================
This is an automated confirmation email.
© ${new Date().getFullYear()} Royal Electricals & Hardware. All rights reserved.
  `;
}
