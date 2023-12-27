# **beesy**

### *a wonderful package meant to simplify backend programming.*

---

## features

- **easy file operations**: simplify file reading, writing, and editing with ease.
- **effortless email delivery**: send emails seamlessly with just a few lines of code.

---

## installation

```bash
npm install beesy
```
## usage
## `read(filelocation, filename, encodingtype)`

this function reads the content of a file synchronously.

### parameters

- `filelocation`: the directory where the file is located.
- `filename`: the name of the file to be read.
- `encodingtype`: the encoding type to be used for reading the file (e.g., 'utf8').

### returns

- if successful, the function returns the content of the file.
- if an error occurs during file reading, the function logs the error to the console, prints an error message, and returns `null`.

### example

```javascript
const filecontent = read('/path/to/directory', 'example.txt', 'utf8');
console.log(filecontent);
```

## `write(filelocation, filename, content)`

this function writes content to a file asynchronously.

### parameters

- `filelocation`: the directory where the file should be written.
- `filename`: the name of the file to be created or overwritten.
- `content`: the content to be written to the file.

### process

1. the function appends an empty string to the specified file to create it if it doesn't exist.
2. it then writes the provided content to the file.

### throws

- if an error occurs during file writing, an error is thrown.

### example

```javascript
write('/path/to/directory', 'newfile.txt', 'hello, beesy!');
```

## `edit(filelocation, filename, content)`

this function appends content to an existing file asynchronously.

### parameters

- `filelocation`: the directory where the file is located.
- `filename`: the name of the file to which content will be appended.
- `content`: the content to append to the file.

### process

1. the function constructs the full path to the file using the provided `filelocation` and `filename`.
2. it then appends the specified `content` to the file.
3. if an error occurs during the operation, it is logged to the console, and an error is thrown.

### throws

- if an error occurs during file appending, an error is thrown.

### example

```javascript
edit('/path/to/directory', 'existingfile.txt', 'new content appended.');
```

## `email(senderemailservice, senderemail, senderpassword, sendername, recipientemail, emailsubject, emailhtmllocation)`

this function sends an email using the provided email configuration.

### parameters

- `senderemailservice`: the email service provider (e.g., 'gmail').
- `senderemail`: the email address of the sender.
- `senderpassword`: the password for the sender's email account.
- `sendername`: the name of the sender.
- `recipientemail`: the email address of the recipient.
- `emailsubject`: the subject of the email.
- `emailhtmllocation`: the file location of the html content for the email.

### process

1. the function creates a mail transporter using the specified `senderemailservice`, `senderemail`, and `senderpassword`.
2. it constructs an email configuration object with the sender's information, recipient's information, subject, and html content.
3. the function then sends the email using the created transporter.
4. if the email is sent successfully, a success message is logged to the console along with the message id.
5. if an error occurs during the email sending process, an error message is logged to the console.

### throws

- if an error occurs during the email sending process, an error is logged.

### example

```javascript
email('outlook', 'sender@outlook.com', 'password', 'sender name', 'recipient@gmail.com', 'subject', 'email_template.html');
```

#### fyi
- it is heavily advised that you do not explicitly put your passwords onto any javascript files. instead, please utilize the [dot env](https://www.npmjs.com/package/dotenv) package.

##### credit
package by: [lola raji](https://www.github.com/lolaraji)

created on: 26 december 2023