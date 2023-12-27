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

# `email(senderemail, senderpassword, sendername, recipientemail, emailsubject, emailhtmllocation);`

```javascript
email("email@example.com", "examplepassword", "jane doe", "john doe", "subject line", path.join(__dirname, "/index.html"));
```
this function facilitates the sending of emails using the specified email configuration.

## parameters

- `senderemail`: the email address of the sender.
- `senderpassword`: the password for the sender's email account.
- `sendername`: the name of the sender.
- `recipientemail`: the email address of the recipient.
- `emailsubject`: the subject of the email.
- `emailhtmllocation`: the file location of the html content for the email.

## process

1. the function constructs an email configuration object based on the provided sender's information, recipient's information, and email content.

### email configuration

#### known email servers (gmail, outlook, aol, yahoo, etc.)

- `simpleserver(senderemailservice)`

  ```javascript
  simpleserver('outlook');
  sendemail();
  ```
### example
``` javascript
// declare the mail variable
const mail = beesy.email(
  "janedoe@outlook.com",
  "password123",
  "jane doe",
  "johndoe@example.com",
  "this is an email sent with beesy!",
  path.join(__dirname, "/index.html")
);
// set custom server configuration
mail.simpleserver('outlook');

// send the email
mail.sendemail();
```

#### unknown email servers (personally hosted servers, personal domain servers, etc.)

- `customserver(hostname, port, secure)`

  ```javascript
  customserver(smtp.myserver.com, 465, true);
  ```

### sending the email
- `sendemail();`

  ```javascript
  sendemail();
  ```

### example
``` javascript
// declare the mail variable
const mail = beesy.email(
  "janedoe@example.com",
  "password123",
  "jane doe",
  "johndoe@example.com",
  "this is an email sent with beesy!",
  path.join(__dirname, "/index.html")
);
// set custom server configuration
mail.customserver('smtp.myserver.com', 465, true);

// send the email
mail.sendemail();
```

  
#### fyi
- it is heavily advised that you do not explicitly put your passwords onto any javascript files. instead, please utilize the [dot env](https://www.npmjs.com/package/dotenv) package.

##### credit
package by: [lola raji](https://www.github.com/lolaraji)

created on: 26 december 2023
