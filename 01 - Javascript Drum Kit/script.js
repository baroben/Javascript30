const keys = document.querySelectorAll('.key')

keys.forEach((button) => {
    button.addEventListener('click', (e) => {
        const keyPressed = e.currentTarget;
        const dataKey = keyPressed.dataset.key;
        playSound(e.currentTarget.dataset.key);
        switchOnLightKey(dataKey);
    })
})

document.addEventListener("keydown",(e)=>{
    const keyCode = e.key.toLowerCase();
    let audioKey = undefined;
    switch (keyCode) {
        case 'a':
            audioKey = 65;
            break;
        case 'z':
            audioKey = 83;
            break;
        case 'e':
            audioKey = 68;
            break;
        case 'r':
            audioKey = 70;
            break;
        case 't':
            audioKey = 71;
            break;
        case 'y':
            audioKey = 72;
            break;
        case 'u':
            audioKey = 74;
            break;
        case 'i':
            audioKey = 75;
            break;
        case 'o':
            audioKey = 76;
            break;
        default:
            break;
    }
    playSound(audioKey);
    switchOnLightKey(audioKey);
});

function playSound(soundCode){
    console.log(soundCode);
    audio = document.querySelector(`audio[data-key="${soundCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function switchOnLightKey(soundCode){
    for(const key of keys){
        if(key.dataset.key == soundCode){
            key.classList.add("clicked");
            setTimeout(() => {
                key.classList.remove("clicked");
            },100);
        }
    }
}
