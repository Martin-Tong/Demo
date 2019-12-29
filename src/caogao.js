let keyup = keybordMove('ArrowRight')

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