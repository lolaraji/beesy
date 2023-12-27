// Reading Files
const fs = require('node:fs');
const path = require('path');
const nodeMailer = require('nodemailer');
const { send } = require('node:process');
const { readFileSync } = fs;

function read(fileLocation, fileName, encodingType) {
    try {
      const data = fs.readFileSync(path.join(fileLocation, fileName), encodingType);
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
}

// Creating Files
function write(fileLocation, fileName, content){
    fs.appendFile(path.join(fileLocation, fileName), '', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });      
    fs.writeFile(path.join(fileLocation, fileName), content, function (err) {
        if (err) throw err;
        console.log('Created ' + fileName + '!');
      });
}

// Editing Files
function edit(fileLocation, fileName, content) {
    const filePath = path.join(fileLocation, fileName);
    fs.appendFile(filePath, content, function (err) {
      if (err) {
        console.error(err);
        throw err;
      }
      console.log('Appended content to ' + fileName + '!');
    });
  }


const emailConfig = {
  host: "smtp.ionos.com",
  port: 465,
  secure: true, // Set to true if your server requires SSL
  auth: {
    user: "lolaraji@lola-raji.com",
    pass: "ABC",
  },
};

// Create a transporter with the custom email server configuration


// email starts here

// Create a transporter with the custom email server configuration

// email ends here

// Delivering Emails
function email(senderEmail, senderPassword, senderName, recipientEmail, emailSubject, emailHtmlLocation) {
  let emailConfig = {}; // Define emailConfig outside the functions

  function simpleServer(senderEmailService) {
    emailConfig = {
      service: senderEmailService,
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
    };
    return emailConfig;
  }

  function customServer(hostname, port, secure) {
    emailConfig = {
      host: hostname,
      port: port,
      secure: secure, // Set to true if your server requires SSL
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
    };
    return emailConfig;
  }

  function sendEmail() {
    const mailOptions = {
      from: senderName + ' <' + senderEmail + '>',
      to: recipientEmail,
      subject: emailSubject,
      html: read('', emailHtmlLocation, 'utf8')
    };

    const transporter = nodeMailer.createTransport(emailConfig);
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  }

  return {
    simpleServer: simpleServer,
    customServer: customServer,
    sendEmail: sendEmail,
  };
}

// Example usage
const mail = email(
  "lola@bobabutter.com",
  "Lolaraji1$",
  "lola",
  "lolaraji15@icloud.com",
  "TESTINGG email.",
  path.join(__dirname, "/index.html")
);
// Set custom server configuration
mail.customServer('mail.webador.com', 587, true);

// Send the email
mail.sendEmail();
