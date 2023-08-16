const audios = document.querySelectorAll('audio')
const keys = document.querySelectorAll('.key')

keys.forEach((button) => {
    button.addEventListener('click', (e) => {
        const keyPressed = e.currentTarget;
        const dataKey = keyPressed.dataset.key;
        playSound(dataKey);
        keyPressed.classList.add("clicked");
        setTimeout(() => {
            keyPressed.classList.remove("clicked");
        },100);
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
});

function playSound(key){
    for(const audio of audios){
        if(audio.dataset.key == key){
            audio.currentTime = 0;
            audio.play();
            break;
        }
    }
}
