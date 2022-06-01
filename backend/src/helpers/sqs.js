const AWS = require('aws-sdk');
const { AWS_SQS_USER_ACCESS_KEY, AWS_SQS_USER_ACCESS_SECRET_KEY,AWS_REGION,MAIL_QUEUE_URL} = process.env;


const SQS = new AWS.SQS({
    region:AWS_REGION,
    accessKeyId:AWS_SQS_USER_ACCESS_KEY,
    secretAccessKey:AWS_SQS_USER_ACCESS_SECRET_KEY
})

async function sendMessage(queueUrl, messageData){

    const SQSParams = {
        QueueUrl:queueUrl,
        MessageBody:JSON.stringify(messageData),
    }
    await SQS.sendMessage(SQSParams).promise()

}


module.exports = sendMessage