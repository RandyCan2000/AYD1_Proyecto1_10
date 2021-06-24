 "use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    var asunto,mensaje, correo
    var cont =0
    process.argv.forEach((val, index) => {
        cont++;
        if(cont==3){
            asunto = val
        }else if(cont ==4){
            mensaje=val
        }else if(cont ==5){
            correo=val
        }
      
      });
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'proyectomunimixco@gmail.com', // generated ethereal user
      pass: '12345678a@', // generated ethereal password
    },
  });



  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'Muni mixco" <proyectomunimixco@gmail.com>', // sender address
    to: correo, // list of receivers
    subject: asunto, // Subject line
    text: mensaje, // plain text body
    html: mensaje, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);