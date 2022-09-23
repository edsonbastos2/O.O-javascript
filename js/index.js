let inputs = document.querySelectorAll('[data-input]')
let tbody = document.querySelector('table tbody')
let form = document.querySelector('.form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let tr = document.createElement('tr')
    
    inputs.forEach( item => {
        let td = document.createElement('td')
        td.textContent = item.value
        tr.appendChild(td)
    })

    let tdVolume = document.createElement('td')
    tdVolume.textContent = inputs[1].value * inputs[2].value
    tr.appendChild(tdVolume)
    
    tbody.appendChild(tr)

    inputs[0].value = ''
    inputs[1].value = 1
    inputs[2].value = 0
    inputs[0].focus()
})