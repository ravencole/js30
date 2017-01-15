require('./styles/app.scss')

document
    .querySelectorAll('.controls input')
    .forEach(i => {
        i.addEventListener('change', handleUpdate)
        i.addEventListener('mousemove', handleUpdate)
    })

function handleUpdate() {
    document
        .documentElement
        .style
        .setProperty(
            `--${this.name}`, 
            `${this.value}${this.dataset.sizing || ''}`
        )
}