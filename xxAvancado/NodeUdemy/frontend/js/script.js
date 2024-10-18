const formulario = document.getElementsByTagName('form')[0]
const campoLabelText = document.getElementsByName('username')[0]
const campoInputText = document.getElementsByName('username')[1]

formulario.addEventListener('submit', (event) => {
    if (campoInputText.value === '') {
        event.preventDefault()
        campoInputText.classList.add('error')
        campoLabelText.innerHTML = 'Username <span style="color: red;">*</span>'
    } else {
        campoInputText.classList.remove('error')
        campoLabelText.innerHTML = 'Username'
    }
})

campoInputText.addEventListener('keydown', () => {
    if (campoInputText.classList.value === 'error') {
        campoInputText.classList.remove('error')
        campoLabelText.innerHTML = 'Username'
    }
})
