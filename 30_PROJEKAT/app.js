import {Chatroom} from "./chat.js"
import {ChatUI} from "./ui.js"

let chatroom1 = new Chatroom("#js", "Stefan");
console.log(chatroom1.username, chatroom1.room); // Testiram getere
chatroom1.username = "Milena"; // Testiram seter za username
console.log(chatroom1.username);
chatroom1.room = "#general"; // Testiram seter za room
console.log(chatroom1.room);
console.log(chatroom1.chats);

// chatroom1.addChat("Dobro nam došli!");

let chatroom2 = new Chatroom("#homeworks", "Stefan");
// chatroom2.addChat("Rok za izradu je ponedeljak");

let ul = document.querySelector('ul');
let cui = new ChatUI(ul);

chatroom1.getChats(data => {
    cui.templateLI(data);
});