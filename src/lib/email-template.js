export function generateEmailHTML(formData) {
  const { name, company, email, phone, requirements } = formData;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 8px 24px rgba(0,0,0,0.12); border-radius: 12px; overflow: hidden;">

          <!-- Logo Section -->
          <tr>
            <td style="padding: 30px; text-align: center; background-color: #ffffff;">
              <img src="cid:royal-logo"
                   alt="Royal Electricals & Hardware Logo"
                   style="max-width: 180px; height: auto; display: block; margin: 0 auto;" />
            </td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding: 40px 30px; background: linear-gradient(135deg, #B68B22 0%, #C8423D 100%); text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                🔔 New Customer Enquiry
              </h1>
              <p style="margin: 10px 0 0; color: #f0f0f0; font-size: 15px; letter-spacing: 0.5px;">
                Received from Contact Form
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">

              <!-- Customer Details -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 32px; background: linear-gradient(to bottom, #FBF8EC 0%, #ffffff 100%); border-radius: 8px; overflow: hidden;">
                <tr>
                  <td colspan="2" style="padding: 20px 24px; border-bottom: 3px solid #B68B22; background-color: #FBF8EC;">
                    <h2 style="margin: 0; color: #292524; font-size: 20px; font-weight: 700;">
                      👤 Customer Details
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 24px; width: 140px; color: #57534E; font-weight: 600; vertical-align: top; font-size: 14px;">
                    Full Name:
                  </td>
                  <td style="padding: 16px 24px; color: #292524; font-size: 16px; font-weight: 500;">
                    ${name}
                  </td>
                </tr>
                <tr style="background-color: #fafbfc;">
                  <td style="padding: 16px 24px; color: #57534E; font-weight: 600; vertical-align: top; font-size: 14px;">
                    Company:
                  </td>
                  <td style="padding: 16px 24px; color: #292524; font-size: 16px; font-weight: 500;">
                    ${company}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 24px; color: #57534E; font-weight: 600; vertical-align: top; font-size: 14px;">
                    📧 Email:
                  </td>
                  <td style="padding: 16px 24px;">
                    <a href="mailto:${email}" style="color: #B68B22; text-decoration: none; font-size: 16px; font-weight: 500; border-bottom: 2px solid #B68B22; padding-bottom: 2px;">
                      ${email}
                    </a>
                  </td>
                </tr>
                <tr style="background-color: #fafbfc;">
                  <td style="padding: 16px 24px; color: #57534E; font-weight: 600; vertical-align: top; font-size: 14px;">
                    📱 Phone:
                  </td>
                  <td style="padding: 16px 24px;">
                    <a href="tel:+91${phone}" style="color: #B68B22; text-decoration: none; font-size: 16px; font-weight: 500; border-bottom: 2px solid #B68B22; padding-bottom: 2px;">
                      +91 ${phone}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Requirements -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 20px 24px; border-bottom: 3px solid #B68B22; background-color: #FBF8EC; border-radius: 8px 8px 0 0;">
                    <h2 style="margin: 0; color: #292524; font-size: 20px; font-weight: 700;">
                      📋 Requirements
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 24px; background: linear-gradient(to bottom right, #FBF8EC 0%, #ffffff 100%); border-left: 5px solid #B68B22; border-radius: 0 0 8px 8px; box-shadow: inset 0 2px 4px rgba(182, 139, 34, 0.1);">
                    <p style="margin: 0; color: #292524; line-height: 1.8; white-space: pre-wrap; font-size: 15px;">
                      ${requirements}
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 30px; background: linear-gradient(to bottom, #FBF8EC 0%, #F8F1D8 100%); text-align: center; border-top: 3px solid #B68B22;">
              <p style="margin: 0 0 12px; color: #57534E; font-size: 14px; font-weight: 500;">
                📬 This email was sent from the Royal Electricals & Hardware website contact form
              </p>
              <p style="margin: 0 0 16px; color: #78716C; font-size: 13px;">
                ⏰ Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
              </p>
              <div style="margin: 20px 0; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <p style="margin: 0 0 8px; color: #292524; font-size: 15px; font-weight: 700;">
                  Royal Electricals & Hardware
                </p>
                <p style="margin: 0 0 4px; color: #57534E; font-size: 13px;">
                  📍 Plot No. PAP 57, Opposite M.I.D.C. Water Tank, Taloja MIDC, Raigad - 410208
                </p>
                <p style="margin: 0 0 4px; color: #57534E; font-size: 13px;">
                  📞 +91 85911 69113 | ☎️ 022 2741 0775
                </p>
                <p style="margin: 0; color: #57534E; font-size: 13px;">
                  ✉️ royalelectrical_taloja@rediffmail.com
                </p>
              </div>
              <p style="margin: 16px 0 0; color: #9ca3af; font-size: 12px;">
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

export function generatePlainTextEmail(formData) {
  const { name, company, email, phone, requirements } = formData;

  return `
NEW CUSTOMER ENQUIRY - Royal Electricals & Hardware
======================================

CUSTOMER DETAILS:
-----------------
Full Name:     ${name}
Company Name:  ${company}
Email:         ${email}
Phone:         +91 ${phone}

REQUIREMENTS:
-------------
${requirements}

======================================
Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
This email was sent from the Royal Electricals & Hardware website contact form
  `;
}
