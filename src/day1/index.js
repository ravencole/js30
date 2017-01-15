require('./styles/app.scss')

const KEYS = [
            65,
            83,
            68,
            70,
            71,
            72,
            74,
            75,
            76
        ].reduce((a,_key) => {
            a[_key] = {
                audio: document.querySelector(`audio[data-key='${_key}']`),
                key: document.querySelector(`.key[data-key='${_key}']`)
            }

            a[_key].key.addEventListener('transitionend', (e) => {
                if (e.propertyName === 'transform') 
                    e.target.classList.remove('key__playing')
            })

            return a
        }, {})

window.addEventListener('keydown', (e) => {
    if (KEYS.hasOwnProperty(e.keyCode)) {

        KEYS[e.keyCode].audio.currentTime = 0
        KEYS[e.keyCode].audio.play()
        KEYS[e.keyCode].key.classList.add('key__playing')

    }
})