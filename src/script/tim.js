import TIM from 'tim-js-sdk'
//import COS from 'cos-js-sdk-v5'

console.log('from tim.js')

let options = {
    SDKAppID: 1400297802
}

let tim = TIM.create(options)
tim.setLogLevel(1)
//tim.registerPlugin({'cos-js-sdk': COS})

tim.on(TIM.EVENT.MESSAGE_RECEIVED, function(e){
    console.log(e)
    console.log(e.data[0].payload.text)
})

let promise = tim.login({userID: '测试号', userSig: 'eJwtzc0OgjAQBOB36dngUmgXTTxIQjSBgxG9GC5ii64-WCoQjfHdJcBxv5nMftkuSZ1WWzZn3AE26W9SuqypoJ6zRio-z5ogVyJrhFfg2Hqp29EYUmzu*gB8hgHwIdFvQ1Z3LoTgADBoTY-eECHg6Ipxhc7dk2rpbdrTZXulSIaWMDJYIa69Yp-aw6cOZZnG8Sq5Z1P5XLDfHwI8NVU_'})
promise.then(function(result){
    console.log(result)
}).catch(function(err){
    console.log(err)
})

export default tim