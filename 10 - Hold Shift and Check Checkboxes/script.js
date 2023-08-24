let shift = false;

document.addEventListener("keydown",(e)=>{
    if(e.key == 'Shift')shift = true;
});

document.addEventListener("keyup",(e)=>{
    if(e.key == 'Shift')shift = false;
});

