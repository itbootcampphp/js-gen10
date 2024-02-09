export class Chatroom{

    // Konstruktor
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
        this.unsub = false;
    }

    // Seteri
    set username(u){
        this._username = u;
    }
    set room(r){
        this._room = r;
        if(this.unsub) {
            this.unsub();
        }
    }

    // Geteri
    get username(){
        return this._username;
    }
    get room(){
        return this._room;
    }

    // Metod za dodavanje četova/dokumenata
    async addChat(mess) {
        try {
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
        catch {
            console.error("Došlo je do greške", err);
        }
    }

    // Metod za ispis dodatih četova/dokumenata
    getChats(callback) {
        this.unsub = this.chats
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                // console.log("---", change.type, "---");
                if(change.type == 'added') {
                    // console.log(change.doc.data());
                    callback(change.doc.data());
                }
            });
        });
    }
}