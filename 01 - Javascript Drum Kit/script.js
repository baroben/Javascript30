const keys = document.querySelectorAll('.key')

keys.forEach((button) => {
    button.addEventListener('click', (e) => {
        const dataKey = e.currentTarget.dataset.key
        playSound(dataKey);
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
