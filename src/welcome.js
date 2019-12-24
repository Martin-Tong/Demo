import React, {useEffect, useState} from 'react'
import style from '../styles/countdown.module.css'

import numberSix from '../../public/number-six.png'

console.log(numberSix)

export default function Welcome() {
    const [show, setShow] = useState(1)
    let styles = {
        opacity: show,
        transform: 'scale('+show+')'
    }
    function toggle() {
       show == 0 ? setShow(1) : setShow(0)
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
