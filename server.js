var express = require("express");
require('dotenv').config();

var app = express();
const path = require('path');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3001;

// app.use(express.static("./client/public"));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

let mailOptions = {
    from: 'Micaiah20x6@gmail.com',
    to: 'saronnhong@gmail.com',
    subject: 'testing',
    text: 'it works'
};

app.get("/send-email", function(req, res) {
    
    console.log(req.body);
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("error occurs ", err);
        } else {
            console.log("email sent!");
        }
    });
})



app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./build/index.html"));
  });

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
