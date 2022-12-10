//Changing Menu's Icon
let btn = document.querySelector(".navbar-toggler");
let icon = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");
btn.onclick= ()=>{

    if(icon.classList.contains("fa-bars")){
        icon.classList.replace("fa-bars","fa-xmark");
        navbar.style.backgroundColor ="#1E1E1E";
    }else{
        icon.classList.replace("fa-xmark","fa-bars");
        navbar.style.backgroundColor ="transparent";
    }
}


//Text Area Changing height
let txtArea = document.querySelector(".txtArea");
txtArea.onkeyup = ()=>{
    txtArea.style.height = txtArea.scrollHeight+"px";
}
txtArea.onkeydown = ()=>{
    txtArea.style.height = txtArea.scrollHeight+"px";
}


// Active Submit Button After Filling Inputs 
const inputs = document.querySelectorAll(".form-control");
const btnSubmit = document.querySelector(".submit-btn");
inputs.forEach((input)=>{
    let checkInputs = true;
    input.onkeyup = ()=>{
        
        for (let innerInput of inputs) {
            if(innerInput.value.length < 5){
                checkInputs = true;
                break;
            }else{
                checkInputs = false;
            }
        }
        btnSubmit.disabled = checkInputs;
        checkInputs? btnSubmit.classList.remove("active") : btnSubmit.classList.add("active");
    }
})




//Form Submit Check
const form = document.querySelector('#contact-form');
const message = document.querySelector('.successMessage');
                
form.onsubmit =(e)=>{
    if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
    }
     message.style.display="flex"; 
     setTimeout(()=>{
        message.style.display="none";
        inputs.forEach((input)=>{
            input.value ="";
        });
        btnSubmit.disabled = true;
        btnSubmit.classList.remove("active");
    }, 10000)
}























































// let accordionBtn = document.querySelectorAll(".accordion-button");
// let plusIcon = document.querySelectorAll(".fa-plus");
// accordionBtn.forEach((btn,index) =>{
//     btn.onclick = ()=>{
//         if(btn.classList.contains("collapsed")){
//         plusIcon[index].style.transform ="rotate(0deg)";        
//         }else{
//         plusIcon[index].style.transform ="rotate(45deg)";
//         }
//     }
    
// })