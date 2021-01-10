const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const Cpassword = document.getElementById('c-password')
const age = document.getElementById('age')

form.addEventListener('submit', function(e){
    e.preventDefault()
    checkElement([fname, lname, username, age, email, password])
    checkLength(username, 3, 10)
    checkLength(password, 8, 14)
  
})



// valid Email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// Check input 
function checkElement(inputArr){
    inputArr.forEach(function(input){
        
         if(input.value.trim() === ''){
        showErr(input, `${input.placeholder} is Required`)
        }else{
            showSuccess(input)
        }
        if(input === email){
            if(input.value.trim() === ''){
            showErr(input, 'Email is Required')
            }else if(!validateEmail(input.value.trim())){
                showErr(input, 'Email is not Valid')
            }else{
                showSuccess(input)
            }
        }

        if(input === password){
            if(password.value !== Cpassword.value){
                showErr(Cpassword, 'Password Do not match')
            }else if(input.value.trim() === ''){
                showErr(Cpassword, 'Confirm Password is Required')
            }else{
                showSuccess(Cpassword)
            }
            
        }

    })  
}
// Check Length
function checkLength(input, min, max){
        if(input.value.length < min){
            showErr(input, `${input.placeholder} need minimum ${min} charecter`)
        }else if(input.value.length > max){
            showErr(input, `${input.placeholder} less than ${max} charecter`)
        }else{
            showSuccess(input)
        }
}
// Show error Message
function showErr(input, message){
    const formControl = input.parentElement
    formControl.className = 'form-baba error'
    const span = input.nextElementSibling
    span.innerHTML = message
}
// Show Success Message
function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = 'form-baba success'
}
