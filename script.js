let input = document.querySelector(".text_area")
let optionButton = document.querySelectorAll(".btn")
let alignButton = document.querySelectorAll(".alignbtn")
let stylebtn = document.querySelectorAll(".stylebtn")
let formatebtn = document.querySelectorAll(".formatebtn")
const fontSize = document.querySelector(".font_size_container")
const fontName = document.querySelector("#font_type")



const initilizer = ()=>{

    
   
    fontSize.addEventListener('change', function(){
        
        let value = this.value + 'px'
        input.style.fontSize = value
    })


    fontName.addEventListener('change', function() {
        let value = this.value;
        input.style.fontFamily = value;
    });

    highlighter(alignButton, true);
    highlighter(stylebtn, false)
    
    optionButton.forEach(button =>{
        button.addEventListener("click", ()=>{
            document.execCommand(button.id, false, null)

            if(button.classList.contains("formatebtn")){
                button.classList.add("scaled")
                setTimeout(()=>{
                    button.classList.remove('scaled')
                }, 150)
            }

          
        })
    
    })


   
}

const highlighter = (className, isRemovable)=>{
    className.forEach(button => {
        button.addEventListener('click', ()=>{
           if(isRemovable){
            let alreadyActive = false;
            if(button.classList.contains("active")){
            alreadyActive = true;
            console.log("already acitve")
             }

             removeActive(className)
             if(!alreadyActive){
                button.classList.add("active")
                console.log("active added")
             }
           }else{
            button.classList.toggle("active")
           }
        })

        

        
    });

}

function removeActive(className){
   className.forEach((button)=>{
    button.classList.remove("active")
   })
}
   
window.onload = initilizer();