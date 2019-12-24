import React, {useEffect, useState} from 'react'
import style from '../styles/countdown.module.css'

import numberSix from '../number-six.png'
import numberTen from '../number-ten.png'

let imageOne = document.createElement('img')
imageOne.src = numberSix
let imageTwo = document.createElement('img')
imageTwo.src = numberTen

function drawImage(ctx, h, m, s) {
    if (s > 0) {
        let sta = s.toString().split('')//秒数数组
        let s1 = +sta[1]
        let s2 = +sta[0]
        ctx.drawImage(imageTwo, 0, 115*s1, 90, 90, 400, 0, 90, 90)
        ctx.drawImage(imageOne, 0, 115*s2, 90, 90, 350, 0, 90, 90)
        let va = setInterval(() => {
            --s
            drawImage(ctx, h, m, s)
        }, 1000)
    }

}

export default function Welcome() {
    const [show, setShow] = useState(1)
    useEffect(() => {
        let canvas = document.getElementById('countdown-canvas');
        let context = canvas.getContext('2d')
        //115
        //drawImage(context, 60, 60, 25)
    })
    let styles = {
        opacity: show,
        transform: 'scale('+show+')'
    }
    function toggle() {
       show === 0 ? setShow(1) : setShow(0)
    }
    return (
        <div>
            <img src='/number-six.png' style={{display:'none'}} />
            <div id="countdown" className={style.welcomeCanvas} style={styles}>
                <canvas id="countdown-canvas" className={style.countdownCanvas} width="450" height="100"></canvas>
                <div className={style.close} onClick={toggle}></div>
            </div>
            <div className={style.showControl} onClick={toggle}></div>
        </div>
    )
}
