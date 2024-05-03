const bodyBg = document.getElementsByTagName('body')[0];
//const boyBtn = document.getElementById('boyBtn');
const girlBtn = document.getElementById('girlBtn');
const genderDiv = document.getElementById('genderDiv');
const nextBtn = document.getElementById('nextBtn');
const gameArea = document.getElementById('gameArea');
// boy
function boy() {
    genderDiv.classList.add('d-none');
    bodyBg.style.backgroundImage = "url('../images/conversation-boy-bg.svg')";
    nextBtn.classList.remove('d-none');
}
//girl
function girl() {
    genderDiv.classList.add('d-none');
    bodyBg.style.backgroundImage = "url('../images/conversation-boy-bg.svg')";
    nextBtn.classList.remove('d-none');
}

//next function
function next(){
    bodyBg.style.backgroundImage = "url('../images/classroom.svg')";
    nextBtn.classList.add('d-none');
    gameArea.classList.remove('d-none')
}
