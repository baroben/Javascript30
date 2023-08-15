const audios = document.querySelectorAll('audio')
const keys = document.querySelectorAll('.key')
keys.forEach((button) => {
    button.addEventListener('click', (e) => {
        const dataKey = e.currentTarget.dataset.key;
        for(const audio of audios){
            if(audio.dataset.key === dataKey){
                audio.currentTime = 0;
                audio.play();
            }
        }
    })
})