import React from 'react'
import style from '../styles/countdown.module.css'
import * as PIXI from 'pixi.js-legacy'

let Sprite = PIXI.Sprite,
    Application = PIXI.Application,
    Text = PIXI.Text,
    container,
    keyup = keybordMove('ArrowRight')

function keybordMove(keycode) {
    let key = {}
    key.value = keycode
    key.isUp = true
    key.isDown = false
    key.press = undefined
    key.release = undefined
    key.downHandler = event => {
        if (event.key === key.value) {
            if (key.isUp && key.press) key.press()
            key.isDown = true
            key.isUp = false
            event.preventDefault()
        }
    }
    key.upHandler = event => {
        if (event.key === key.value) {
            if (key.isDown && key.release) key.release()
            key.isUp = true
            key.isDown = false
            event.preventDefault()
        }
    }
    const downListener = key.downHandler.bind(key)
    const upListener = key.upHandler.bind(key)
    window.addEventListener('keydown', downListener, false)
    window.addEventListener("keyup", upListener, false)
    key.unSubscribe = function() {
        window.removeEventListener("keyup", upListener, false)
        window.removeEventListener("keydown", downListener, false)
    }
    return key
}
function countdownInitial(time) {
    let type = 'WebGL',
        app = new Application({width: 560, height: 100, transparent: true}),
        code = {},
        countdownTime = time ? time : '000-00-00' //开始倒计时的时间，后端返回
         
    container = document.querySelector("#countdown")

    if (!PIXI.utils.isWebGLSupported()) {
        type = 'canvas'
    }
    PIXI.utils.sayHello(type)
    Object.assign(app.renderer.view.style, {
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)'
    })
    container.appendChild(app.view)
    let text1 = new Text(':'),
        text2 = new Text(':')
    text1.style = {fill: 'white'}
    text2.style = {fill: 'white'}
    text1.position.set(220,50)
    text2.position.set(390,50)
    app.stage.addChild(text1, text2)
    //y:112
    app.loader.add(['number-six.png', 'number-ten.png']).load((loader, resource) => {
        let list = countdownTime.split('-').join('').split(''),
            length = list.length
        for (let i = 0; i < length; i++) {
            if (i === (length - 2) || i === (length - 4)) {
                code[i] = new Sprite(app.loader.resources['number-six.png'].texture)
            } else {
                code[i] = new Sprite(app.loader.resources['number-ten.png'].texture)
            }               
            code[i].x = i*80
            code[i].y = -112*list[i]
            app.stage.addChild(code[i])
                
        }                                   
    })
    setInterval(() => {
        code[6].y -= 111
    }, 1000);
}

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this)
        this.state = {
            show: 1
        };
    }
    componentDidMount() {
        countdownInitial()
    }
    componentDidUpdate(){
        alert('ComponentDidUpdate')
    }
    componentWillUnmount() {
        container.removeChild(container.lastChild)
        alert('componentWillUnmount')
    }
    toggle() {
       this.state.show === 0 ? this.setState({show: 1}) : this.setState({show: 0})
    }
    render() {
        const styles={
            opacity: this.state.show,
            transform: 'scale('+this.state.show+')'
        }
        return (
            <div>         
                <div id="countdown" className={style.welcomeCanvas} style={styles}>
                    <div className={style.description}>
                        <div style={{fontSize: 'x-large'}}>countdown for what</div>
                        <div className={style.hms}>
                            <span className={style.h}>Hours</span>
                            <span className={style.m}>Minutes</span>
                            <span className={style.s}>Seconds</span>
                        </div>
                    </div>
                    <div className={style.close} onClick={this.toggle}></div>
                </div>
                <div className={style.showControl} onClick={this.toggle}></div>
            </div>
        )
    }  
}
