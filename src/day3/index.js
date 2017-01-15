require('./styles/app.scss')

const inputs = document.querySelectorAll('.controls input'),
      INPUTS = [...Array(inputs.length)]
                    .map((_,i) => {
                        inputs[i].addEventListener('change', handleUpdate)
                        inputs[i].addEventListener('mousemove', handleUpdate)
                        return inputs[i]
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