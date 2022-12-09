const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { body, validationResult } = require("express-validator");
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

const corsOption = {
  origin: process.env.ALLOWED_ORIGINS,
};

app.use(cors(corsOption));


const sendMail = async (data) => {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "easyrent.carservice@gmail.com",
      pass: "rkmnwtqjesdvjruc",
    },
  });

  let result = await transporter.sendMail({
    from: "\"Easy Rent Cars Service\" <easyrent.carservice@gmail.com>",
    to: "easyrent.carservice@gmail.com",
    subject: "Message from Easy Rent Cars Service",
    text: `This message was sent from Easy Rent Cars Service.`,
    html:
      `
You got a new <i>message</i> from <strong>Easy Rent Cars Service</strong>.<br><br>
<br>
1. <strong>Pick up location:</strong> ${data.locationUp.label}.<br><br>
2. <strong>Pick up date:</strong> ${data.fromDate}.<br><br>
3. <strong>Drop off location:</strong> ${data.locationOff.label}.<br><br>
4. <strong>Return date:</strong> ${data.toDate}.<br><br>
5. <strong>Age:</strong> ${data.age}.<br><br>
6. <strong>WhatsApp phone number:</strong> ${data.phone}.<br><br>
7. <strong>Telegram username:</strong> ${data.name}.<br><br>
`,
  });
  if (result) return result;
};

app.post("/api/form",
  body(["locationUp", "locationOff", "fromDate", "toDate", "age", "phone", "name"]).exists(),
  async (req, res, next) => {

    const data = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const result = await sendMail(data);

    if (result) {
      return res.status(200).json({ status: true });
    }
    return res.status(500).json({ status: false });
  });


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));