import sendGrid from "@sendgrid/mail"
import { ContactFormValues } from "../../feature/web-agency/components/core/ContactForm"

sendGrid.setApiKey(process.env.GATSBY_SENDGRID_API_KEY as string)

const messageForUs: sendGrid.MailDataRequired = {
  from: process.env.GATSBY_SENDGRID_AUTH_SENDER as string,
  to: process.env.GATSBY_SENDGRID_AUTH_SENDER,
  subject: `Richiesta di Preventivo`,
  html: ``,
}

const messageForCustomer: sendGrid.MailDataRequired = {
  from: process.env.GATSBY_SENDGRID_AUTH_SENDER as string,
  personalizations: [
    {
      to: [],
    },
  ],
  templateId: process.env
    .GATSBY_SENDGRID_DYNAMIC_TEMPLATE_ID_PREVENTIVO_RICEVUTO as string,
}

type Request = {
  method: "GET" | "POST" | "PUT" | "DELETE"
  body: string
}

const handler = (req: Request, res: any) => {
  try {
    if (req.method !== `POST`) {
      throw new Error(`Metodo sbagliato`)
    }
    if (req.body) {
      const body = JSON.parse(req.body) as ContactFormValues
      const { email, name, cognome, message: req_message } = body
      messageForUs.html = `
      <h4> Da ${name} ${cognome} </h4>
      <p> mail from: ${email} </p>
      ${
        req_message
          ? `<p> ${req_message} </p>`
          : `<p> Non ha lasciato nessun messaggio </p>`
      }
      `

      messageForCustomer!.personalizations![0].dynamicTemplateData = {
        name: `${name} ${cognome}`,
        email,
      }
      messageForCustomer!.personalizations![0].to = [{ email }]
    }

    return sendGrid.send([messageForUs, messageForCustomer]).then(
      () => {
        res.status(200).json({
          success: true,
          message: `Messaggio Inviato`,
        })
      },
      (error: any) => {
        if (error.response) {
          return res.status(500).json({ error: error.response.body.errors })
        }
      }
    )
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error`,
      error,
    })
  }
}

export default handler
