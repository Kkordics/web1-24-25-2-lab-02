import {userList} from "./db.js"

console.log("Helló js");

console.log(userList[0].name);

//primitív típusok
const active = true;
const number = 22;
const string = "asd";

const nothing = null;
let price;//undifinde


//kollekciók
const items = [1,2,['Helló', true], "Message"];
console.log(items[2][1]);
console.log(items.length);

const settings = {
    url: 'https://localhost:3000',
    devMode: true
}

console.log(settings.url);
const key = "devMode";

console.log(settings[key]);

console.log(number.toFixed(1));


Number.prototype.hello = function(){
    console.log('this is the function from the hello method');
    console.log(this);
    
}

number.hello();