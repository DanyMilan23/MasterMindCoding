import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
const SENDGRID_API_KEY = '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'

const sendEmail = async ({ name, email }) => {
    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email
                }
              ],
              subject: 'Demo success :)'
            }
          ],
          from: {
            email: 'noreply@demo.com',
            name: 'Test SendGrid'
          },
          content: [
            {
              type: 'text/html',
              value: `Congratulations <b>${name}</b>, you just sent an email with sendGrid`
            }
          ]
        })
    });
}

export { sendEmail };