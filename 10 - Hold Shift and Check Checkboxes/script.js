const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

function setCheck(e){
    let inBetween = false;

    if(e.shiftKey && this.checked==true){
        checkboxes.forEach(box=>{
            if(box===lastChecked || box===this){
                inBetween=!inBetween;
            }

            if(inBetween){
                box.checked = true;
            }
        })    
    }

    lastChecked = this; 
}

checkboxes.forEach(box=>box.addEventListener('click',setCheck));



