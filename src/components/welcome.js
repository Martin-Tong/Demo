import React from 'react'
import '../styles/countdown.css'

let numberSix = document.createElement('img')
numberSix.src='/number-six.png'

console.log(numberSix)

export default function Welcome() {
    return (
        <div className='welcome-canvas'>
            <canvas id='countdown-canvas' width="450" height="100"></canvas>
        </div>
    )
}
