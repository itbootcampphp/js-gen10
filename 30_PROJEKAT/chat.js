class Chatroom{

    // Konstruktor
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
    }

    // Seteri
    set username(u){
        this._username = u;
    }
    set room(r){
        this._room = r;
    }

    // Geteri
    get username(){
        return this._username;
    }
    get room(){
        return this._room;
    }

    // Metod za dodavanje četova
    async addChat(mess) {
        // Kreiranje dokumenta koji želimo da upišemo u bazu
        let docChat = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: new Date()
        };
        let response = await this.chats.add(docChat); // pamti dokument u db
        return response; // Vraća promis, na koji može da se zakači .then i .catch
    }

}

let chatroom1 = new Chatroom("#js", "Stefan");
console.log(chatroom1.username, chatroom1.room); // Testiram getere
chatroom1.username = "Milena"; // Testiram seter za username
console.log(chatroom1.username);
chatroom1.room = "#general"; // Testiram seter za room
console.log(chatroom1.room);
console.log(chatroom1.chats);

chatroom1.addChat("Zdravo svima!")
    .then(() => {
        console.log("Uspešno dodata poruka");
    })
    .catch(err => {
        console.log("Došlo je do greške: ", err);
    });

