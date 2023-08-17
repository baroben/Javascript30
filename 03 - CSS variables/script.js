const root = document.documentElement;
const inputs = document.querySelectorAll("input");

function refreshImg(){
    const sizing = this.dataset.sizing != undefined ? this.dataset.sizing : "";
    root.style.setProperty(`--${this.name}`, `${this.value}` + sizing);
}

inputs.forEach(input => input.addEventListener('input',(refreshImg)));