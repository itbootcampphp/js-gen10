let blog1 = {
    title: "IF naredba grananja", 
    likes: 50,
    dislikes: 21
};
let blog2 = {
    title: "While petlja",
    likes: 25,
    dislikes: 36
};
let blog3 = {
    title: "For petlja",
    likes: 100,
    dislikes: 12
};

////////////////////////////

let user1 = {
    username: "JelenaMatejic",
    age: 29,
    blogs: [blog1, blog3],
    logBlogs: function() {
        this.blogs.forEach(elem => {
            console.log(elem.title);
        })
    }
};
let user2 = {
    username: "StefanStanimirovic",
    age: 34,
    blogs: [blog2],
    logBlogs: function() {
        this.blogs.forEach(elem => {
            console.log(elem.title);
        })
    }
};

////////////////////////////

console.log(user1.blogs[0].title);
console.log(user1.blogs[0]["title"]);
console.log(user1["blogs"][0]["title"]);

user1.logBlogs();
user2.logBlogs();

// 1. ZADATAK
// Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.
let users = [user1, user2];

// Ispis username polja iz users niza
users.forEach(u => {
    console.log(u.username);
});

// Ispis svih naslova blogova koje su korisnici kreirali
users.forEach(u => {
    u.logBlogs();
});

// Da nisam imala metodu logBlogs()
users.forEach(u => {
    let userBlogs = u.blogs; // niz blogova korisnika
    // Iteriram nizom objelata, gde je svaki objekat po jedan blog. Iz tog objekta blog mogu uzeti naslov
    userBlogs.forEach(b => {
       console.log(b.title); 
    });
});

////////////////////////////

// 2. ZADATAK
// Ispisati imena onih autora koji imaju ispod 18 godina.
users.forEach((user) => {
    if (user.age < 18) {
      console.log(user.username);
    }
  });

////////////////////////////

// 3. ZADATAK
// Ispisati naslove onih blogova koji imaju više od 50 lajkova
users.forEach(u => {
    let userBlogs = u.blogs; // niz blogova korisnika
    userBlogs.forEach(b => {
        if(b.likes > 50) {
            console.log(b.title);
        }
    });
});

////////////////////////////

// 4. ZADATAK
// Ispisati sve blogove autora čiji je username ’JohnDoe’.
users.forEach((user) => {
    if (user.username === "JohnDoe") {
        user.logBlogs();
    }
});

////////////////////////////

// 5. ZADATAK
// Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
users.forEach(u => {
    let sumLikes = 0;
    u.blogs.forEach(b => {
        sumLikes += b.likes;
    });
    if(sumLikes > 100) {
        console.log(u.username);
    }
});

////////////////////////////

// 6. ZADATAK
// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
let sum = 0;
let br = 0;
users.forEach((u) => {
  u.blogs.forEach((b) => {
    sum += b.likes;
    br++;
  });
});
let prosek = sum / br;
users.forEach((u) => {
  u.blogs.forEach((b) => {
    if (b.likes > prosek) {
      console.log(b.title);
    }
  });
});

////////////////////////////

// 7. ZADATAK
// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena
let sumPoz = 0;
let br1 = 0;
let sumNeg = 0;
users.forEach(el => {
    el.blogs.forEach(b => {
        sumPoz += b.likes;
        sumNeg += b.dislikes;
        br1++;
    });
});
let prosekPoz = sumPoz / br1;
let prosekNeg = sumNeg / br1;
users.forEach(el => {
    el.blogs.forEach(b =>{
        if(b.likes > prosekPoz && b.dislikes < prosekNeg){
            console.log(b.title);
        }
    });
});