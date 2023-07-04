export function createKeysEvents(){
    document.addEventListener("keydown", event => {
        event.preventDefault();
        if (event.key == "ArrowUp") {
            passThisToApp(event.key)
        }
        if (event.key == "ArrowDown") {
        }
        if (event.key == "ArrowRight") {
        }
        if (event.key == "ArrowLeft") {
        }
        
        
    
        console.log(event.key);
    });
}

export function passThisToApp(value){
    return value;
}