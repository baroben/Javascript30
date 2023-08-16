const keys = document.querySelectorAll('.key')

keys.forEach((button) => {
    button.addEventListener('click', (e) => {
        const dataKey = e.currentTarget.dataset.key
        playSound(dataKey);
        switchOnLightKey(dataKey);
    })
})

document.addEventListener("keydown",(e)=>{
    const keyCode = e.key.toUpperCase();
    playSound(keyCode);
    switchOnLightKey(keyCode);
});

function playSound(soundCode){
    let audio = document.querySelector(`audio[data-key="${soundCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function switchOnLightKey(soundCode){
    let key = document.querySelector(`div[data-key="${soundCode}"]`);
    if(!key) return;
    key.classList.add("clicked");
    setTimeout(() => {
        key.classList.remove("clicked");
    },100);
}
