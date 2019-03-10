//Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = "ACf7bdc4d8848c3dccef58a11b65ab348b";
const authToken = "2ff3bc8b376af29b7ddc1f073dd3a698";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Your plants need help!",
    from: "+12049005963",
    to: "+16474686077"
  })
  .then(message => console.log(message.sid));
