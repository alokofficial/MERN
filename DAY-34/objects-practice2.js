// given an object {message:'good job', status:'complete'}, use de-structuring to create two variable message and status.


const obj = {
    message: 'good job',
    status: 'complete'
}

let { message:msg, status:stt } = obj //de-structuring with variable aliasing 

console.log(msg, stt)