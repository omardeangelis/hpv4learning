const sendGrid = require(`@sendgrid/mail`);
sendGrid.setApiKey(process.env.GATSBY_SENDGRID_API_KEY);

const message = {
  from: process.env.GATSBY_SENDGRID_AUTH_SENDER,
};

const handler = (req, res) => {
  try {
    if (req.method !== `POST`) {
      throw new Error(`Metodo sbagliato`);
    }
    if (req.body) {
      message.to = req.body.email;
      message.subject = `Il tuo coupon per udemy`;
      // message.text = `Grazie ${req.body.email}! Ecco il tuo coupon ${req.body.couponCorso} \n Riscattalo al link \n${req.body.couponLink}`;
      message.html = `
      <h4> Grazie ${req.body.email} per aver scelto hpv4Learning! </h4>
      <p> Ecco il tuo <strong>codice sconto udemy </strong> ${req.body.couponCorso} </p>
      <p>Riscattalo automaticamente <a href='${req.body.couponLink}'> premendo qui </p>

      `;
    }

    return sendGrid.send(message).then(
      () => {
        res.status(200).json({
          message: `Messaggio Inviato`,
        });
      },
      (error) => {
        console.error(error);
        if (error.response) {
          return res.status(500).json({ error: error.response });
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Error`,
      error,
    });
  }
};

export default handler;
