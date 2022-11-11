const form = document.querySelector('form')
const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const passWord = document.querySelector('#password')
const confirmPassWord = document.querySelector('#confirm__pw')




function showError(input, message) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}



function showSuccess(input) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}



function checkEmptyError(listInput) {

        let isEmptyError = false
        listInput.forEach(input => {
            input.value = input.value.trim()

            if(!input.value) {
                isEmptyError = true
                showError(input, `${input.placeholder} is required`)
            } else {
                showSuccess(input)
            }
        });

        return isEmptyError
    }; 

    function checkEmailError(input) {
           

           const regexEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            
            let isEmailError = !regexEmail.test(input.value);

            input.value = input.value.trim()

            if(regexEmail.test(input.value)) {
                showSuccess(input)        
            } else {
                showError(input, 'Email Invalid')
            }
            return isEmailError
    }

    function checkPassWordAlikeError(passWordInput,cfPassWordInput) {

            passWordInput.value = passWordInput.value.trim()
            cfPassWordInput.value = cfPassWordInput.value.trim()

            if(passWordInput.value !== cfPassWordInput.value) {
                showError(cfPassWordInput, 'password do not match')
                return true
            }
            return false
    }; 

    function checkLengthError(input, min, max) { 

        input.value = input.value.trim()

        if(input.value.length > max) {
            showError(input, `must not eceed than ${max} characters`)
        } else if(input.value.length < min) {
            showError(input, `must not be less than ${min} characters`)
        } else {
            showSuccess(input)
        }
    }
 


form.addEventListener('submit', function(e) {
     e.preventDefault()
     
     let isEmptyError = checkEmptyError([userName, email, passWord, confirmPassWord])
     let isEmailError = checkEmailError(email)
     let isLengthUserNameError = checkLengthError(userName,6,11)
     let isLengthPassWordError = checkLengthError(passWord,6,11)
     let isLengthConfirmPassWordError = checkLengthError(confirmPassWord,6,11)
     let isPassWordAlikeError = checkPassWordAlikeError(passWord, confirmPassWord)
    
} )


