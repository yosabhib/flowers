onload = () =>{
    document.body.classList.remove("container");
};

function playSound(audioName) {
    let audio = new Audio(audioName);
    audio.play();
}
playSound("Flower - Johnny Stimson.m4a")