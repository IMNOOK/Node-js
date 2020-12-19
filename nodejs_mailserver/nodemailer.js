const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
        user:"f6c5bb4a29ac47",
        pass: "382734d77a5983"
    }
};

const send = async(option) =>{
    nodemailer.createTransport(email).sendMail(option, (error, info) =>{
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: "leeminwok0405@gmail.com",
    to: "leeminwok0405@gmail.com",
    subject:"mail for test",
    text:"nodejs for 1hour"
}

send(email_data);