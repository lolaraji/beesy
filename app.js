// Reading Files
const fs = require('node:fs');
const path = require('path');
const nodeMailer = require('nodemailer');

// Reading Files
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

// Sending Emails
function email(senderEmail, senderPassword, senderName, recipientEmail, emailSubject, emailHtmlLocation) {
  let emailConfig = {};

  // Known Email Servers (Gmail, Outlook, AOL, Yahoo, etc.)
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
  // Unknown Email Servers (Your own, your domain service's, etc.)
  function customServer(hostname, port, secure) {
    emailConfig = {
      host: hostname,
      port: port,
      secure: secure,
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

module.exports = {
    read,
    write,
    edit,
    email
}