import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const schema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
})

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const data = schema.parse(body)

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        })

        const subject = `📩 Nouveau message portfolio — ${data.firstName} ${data.lastName}`
        const html = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>Nouveau message - Portfolio</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellspacing="0" cellpadding="0" bgcolor="#f4f4f4">
    <tr>
      <td align="center" style="padding:40px 15px;">
        <!-- Card -->
        <table width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" 
               style="border-radius:12px;overflow:hidden;box-shadow:0 4px 10px rgba(0,0,0,.1);">
          <!-- Header -->
          <tr>
            <td align="center" bgcolor="#204575" style="padding:20px;">
              <h1 style="margin:0;color:#fff;font-size:22px;">📩 Nouveau message via Portfolio</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px 40px;color:#333;font-size:15px;line-height:1.6;">
              <p style="margin:0 0 12px;"><b>Nom :</b> ${data.firstName} ${data.lastName}</p>
              <p style="margin:0 0 12px;"><b>Email :</b> <a href="mailto:${data.email}" style="color:#2563eb;">${data.email}</a></p>
              <p style="margin:0 0 12px;"><b>Message :</b></p>
              <p style="margin:0;background:#f9f9f9;padding:12px 16px;border-radius:8px;
                        border:1px solid #eee;white-space:pre-line;">
                ${data.message.replace(/\n/g, '<br/>')}
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" bgcolor="#f9fafb" style="padding:20px;color:#666;font-size:12px;">
              <p style="margin:0;">Cet email a été généré depuis 
                 <a href="https://ghaleb-portfolio.vercel.app/" 
                    style="color:#ff5b00;text-decoration:none;">mon portfolio</a>.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
        await transporter.sendMail({
            from: `"Portfolio" <${process.env.GMAIL_USER}>`,
            to: process.env.CONTACT_TO ?? process.env.GMAIL_USER,
            replyTo: data.email,
            subject,
            html,
            text: `Nom: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\n\n${data.message}`,
        })

        return NextResponse.json({ ok: true })
    } catch (err: any) {
        console.error('CONTACT_ERROR', err)
        const msg = err?.message ?? 'Erreur inconnue'
        return NextResponse.json({ ok: false, error: msg }, { status: 400 })
    }
}