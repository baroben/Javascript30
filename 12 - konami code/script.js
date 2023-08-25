const keyCombination = [];
const cheatCode = 'danemark';
document.addEventListener('keyup', handleInput);

function handleInput(e){
    keyCombination.push(e.key);
    //On supprime en partant par la fin en utilisant un index négatif.
    //On supprime le nombre de caractères en plus du cheatcode
    keyCombination.splice(-cheatCode.length-1,keyCombination.length - cheatCode.length);
    console.log(keyCombination);
    if(cheatCode == keyCombination.join('')){
        console.log('Cheat code activated !');
    }
}