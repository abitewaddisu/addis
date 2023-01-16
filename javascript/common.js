const helpScreen = document.getElementById('help_screen')
const bg_blur = document.querySelector('.bg-blur')

const helpHeader = document.createElement('h3')
helpHeader.innerHTML = 'Send us your question'

const nameContainer = document.createElement('div')
const nameLabel = document.createElement('label')
nameLabel.innerHTML = 'Full name: '
const nameInput = document.createElement('input')
nameInput.required = true
const invalidName = document.createElement('span')
nameContainer.appendChild(nameLabel)
nameContainer.appendChild(nameInput)
nameContainer.appendChild(invalidName)

const emailContainer = document.createElement('div')
const emailLabel = document.createElement('label')
emailLabel.innerHTML = 'Email: '
const emailInput = document.createElement('input')
emailInput.type = 'email'
emailInput.required = true
const invalidEmail = document.createElement('span')
emailContainer.appendChild(emailLabel)
emailContainer.appendChild(emailInput)
emailContainer.appendChild(invalidEmail)

const questionContainer = document.createElement('div')
questionContainer.classList.add('comment')
const questionLabel = document.createElement('label')
questionLabel.innerHTML = 'Question'
const questionInput = document.createElement('textarea')
questionInput.style.height = '15vh'
const invalidQuestion = document.createElement('span')
questionContainer.appendChild(questionLabel)
questionContainer.appendChild(questionInput)
questionContainer.appendChild(invalidQuestion)


const sendBtn = document.createElement('input')
sendBtn.type = 'submit'
sendBtn.value = 'Send'
sendBtn.classList.add('send-btn')
sendBtn.addEventListener('click', ()=>{
    nonEmptyName = false
    correctEmail = false
    nonEmptyQuestion = false
    // name validator
    invalidName.style.color = 'red'
    if (nameInput.value.length != 0){
        invalidName.textContent = ''
        nonEmptyName = true
    }else{
        if (invalidName.textContent.length === 0){
            invalidName.textContent = 'Your name is required.'
            nonEmptyQuestion = false
        }
    }
    // email validator
    validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    invalidEmail.style.color = 'red'
    if (emailInput.value.match(validRegex)){
        invalidEmail.textContent = ''
        correctEmail = true
    }else{
        if (emailInput.value.length === 0){
            invalidEmail.textContent = 'Your email is required.'
        }
        else{
            invalidEmail.textContent = 'Invalid email.'
        }
        correctEmail = false
    }
    // question validator
    invalidQuestion.style.color = 'red'
    if (questionInput.value.length != 0){
        invalidQuestion.textContent = ''
        nonEmptyQuestion = true
    }else{
        invalidQuestion.textContent = 'Enter your question.'
        nonEmptyQuestion = false
    }
    // valid input
    if (nonEmptyName && correctEmail && nonEmptyQuestion){
        helpScreen.style.display = 'none'
        bg_blur.style.display = 'none'
        nameInput.value = ''
        emailInput.value = ''
        questionInput.value = ''
        alert('You question is submited successfully. Thank you!')
    }
})

helpScreen.append(helpHeader)
helpScreen.append(nameContainer)
helpScreen.append(emailContainer)
helpScreen.append(questionContainer)
helpScreen.append(sendBtn)


function displayHelp(){
    bg_blur.style.display = 'block';
    helpScreen.style.display = 'flex'
}

function hideHelp(){
    bg_blur.style.display = 'none';
    helpScreen.style.display = 'none'
}