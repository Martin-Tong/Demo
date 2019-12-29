import React from 'react'
import style from '../styles/countdown.module.css'
import * as PIXI from 'pixi.js-legacy'

let Sprite = PIXI.Sprite,
    Application = PIXI.Application,
    Text = PIXI.Text,
    container

export var pixiObject = {
    app: new Application({width: 560, height: 100, transparent: true}),
    sprites: [],
    initial() {
        let type = 'WebGL',       
        code = this.sprites,
        countdownTime = '000-00-00'
         
        container = document.querySelector("#countdown")
        //this.app = new Application({width: 560, height: 100, transparent: true})

        if (!PIXI.utils.isWebGLSupported()) {
            type = 'canvas'
        }
        PIXI.utils.sayHello(type)
        Object.assign(this.app.renderer.view.style, {
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)'
        })
        container.appendChild(this.app.view)
        let text1 = new Text(':'),
            text2 = new Text(':')
        text1.style = {fill: 'white'}
        text2.style = {fill: 'white'}
        text1.position.set(220,50)
        text2.position.set(390,50)
        this.app.stage.addChild(text1, text2)
        //y:112
        return new Promise((resolve, reject) => {
        this.app.loader.add(['number-six.png', 'number-ten.png']).load((loader, resource) => {
            let list = countdownTime.split('-').join('').split(''),
                length = list.length
            for (let i = 0; i < length; i++) {
                if (i === (length - 2) || i === (length - 4)) {
                    code.push(new Sprite(this.app.loader.resources['number-six.png'].texture))
                } else {
                    code.push(new Sprite(this.app.loader.resources['number-ten.png'].texture))
                }               
                code[i].x = i*80
                code[i].y = 0 //-112*list[i]
                this.app.stage.addChild(code[i])              
            }
            resolve(code)                                   
        })
        })     
    },
    update() {
        let {h, m, s} = this.calcTime(2020, 1, 1, 0, 0, 0)
        let a = this.sprites
        let b = a.length
        let c = h.concat(m, s)
        let d = c.length
        //console.log(h,m,s)
        a[b-1].y = -110*c[d-1]
        a[b-2].y = -110*c[d-2]
        a[b-3].y = -110*c[d-3]
        a[b-4].y = -110*c[d-4]
        a[b-5].y = -110*c[d-5]
        a[b-6].y = -110*c[d-6]
    },
    calcTime(y, M, d, h=0, m=0, s=0) {
        let now, target, timeDiff, hv, mv, sv
        if (y && M && d) {
            target = new Date(y, M-1, d, h, m, s)
            now = Date.now()
            timeDiff = Math.round((target - now)/1000)
            hv = Math.floor(timeDiff / 3600).toString().split('')
            mv = Math.floor(timeDiff / 60 % 60).toString().split('')
            sv = Math.floor(timeDiff % 60).toString().split('')
            //console.log('h:'+hv+'  m:'+mv+'  s:'+sv)
            return {
                h: hv,
                m: mv.length ===2 ? mv : ['0'].concat(mv),
                s: sv.length === 2 ? sv : ['0'].concat(sv)
            }
        } else {
            console.warn('请输入正确的目标时间')
        }
    },
    startMoving() {
        this.update()
    }
}
export default class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            show: 1
        };
    }
    componentDidMount() {
        pixiObject.initial().then(() => {
            window.lol = pixiObject.sprites
            this.timerID = setInterval(() => {
                pixiObject.update()
                }, 1000);
            }              
        )               
    }
    componentDidUpdate(){
        //alert('ComponentDidUpdate')
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
        //container.removeChild(container.lastChild)
        //alert('componentWillUnmount')
    }
    toggle() {
       this.state.show === 0 ? this.setState({show: 1}) : this.setState({show: 0})
       console.log(this.state)
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
                        <div style={{fontSize: 'x-large'}}>距离2020年：</div>
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
