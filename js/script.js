let xp = 0;
let health = 100;
let gold = 50;
let currentWapon = 0;

let fighting;
let monsterHealth;
let inventory = ["stick", "dagger", "sword"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");


const text = document.querySelector("#text");


const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const locations = [
    {
        name: "town square",
        "button-text": ["Go to store", "Go to cave", "Fight Dragon"],
        "button functions": [goStore,goCave,fightDragon],

        text: "You are in the town square. You see a sign that says \"store.\""},
        {
            name: "town s(quare",
        "button-text": ["Buy 10 Health(10 gold)", "Buy Weppon(30 gold)", "Go to town square"],
        "button functions": [buyHealth,buyWeapon,goTown],

        text: "You entered the store"}
]
        















/*This is a comment
initialize buttons*/



button1.onclick =goStore;
button2.onclick =goCave;
button3.onclick =fightDragon;


function update(location){
    button1.innerText("Go to store ");
    button2.innerText("Go to cave");
    button3.innerText("Fight dragon");
    button1.onclick =  goStore;
    button2.onclick =  goCave;
    button3.onclick =  fightDragon;
    text.innerText="You are in the town square. you see a sighn that says \"store\".";
    
}

function goTown () {
    update(locations);
}



function goCave(){
    console.log("Going to cave.");
    
}




function fightDragon(){
    console.log("Fighting Dragon.");
    
}





