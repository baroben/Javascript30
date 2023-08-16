const audios = document.querySelectorAll('audio')
const keys = document.querySelectorAll('.key')
keys.forEach((button) => {
    button.addEventListener('click', (e) => {
        const keyPressed = e.currentTarget;
        const dataKey = keyPressed.dataset.key;
        for(const audio of audios){
            if(audio.dataset.key === dataKey){
                audio.currentTime = 0;
                audio.play();
            }
        }
        keyPressed.classList.add("clicked");
        setTimeout(() => {
            keyPressed.classList.remove("clicked");
        },100);
        
    })
})