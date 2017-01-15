require('./styles/app.scss')

const SECOND_HAND = document.getElementById('second-hand'),
      MINUTE_HAND = document.getElementById('minute-hand'),
      HOUR_HAND   = document.getElementById('hour-hand')

function setDate() {
    const NOW             = new Date(),
          SECONDS_DEGREES = ((NOW.getSeconds() / 60) * 360) + 90,
          MINUTES_DEGREES = ((NOW.getMinutes() / 60) * 360) + 90,
          HOURS_DEGREES   = ((NOW.getHours()   / 12) * 360) + 90

    SECOND_HAND.style.transform = `rotate(${SECONDS_DEGREES}deg)`
    MINUTE_HAND.style.transform = `rotate(${MINUTES_DEGREES}deg)`
    HOUR_HAND.style.transform   = `rotate(${HOURS_DEGREES}deg)`
}

setInterval(setDate, 1000)

