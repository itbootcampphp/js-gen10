console.log("Nizovi objekata");

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
let arrBlogs = [blog1, blog2, blog3];

// Ispis niza objekata
console.log(arrBlogs);

// Ispis jednog elementa iz niza objekata
console.log(arrBlogs[1]);

// Ispis jednog propertija iz niza objekata
console.log(arrBlogs[1].title);
console.log(arrBlogs[1]["title"]);

// Ispis naslova svih elemenata iz niza - korišćenjem for petlje
for(let i=0; i<arrBlogs.length; i++) {
    console.log(arrBlogs[i].title);
}

arrBlogs[1].title = "While ciklus";
// Ispis naslova svih elemenata iz niza - korišćenjem forEach petlje
arrBlogs.forEach(obj => {
    console.log(obj.title, obj.likes);
});

// 1. ZADATAK
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
let sumLikes = arr => {
    let sum = 0;
    arr.forEach(obj => {
        sum += obj.likes;
    });
    return sum;
}
console.log(`Suma lajkova je: ${sumLikes(arrBlogs)}`);

// 2. ZADATAK
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
let avgLikes = arr => {
    // let s = sumLikes(arr);
    // let n = arr.length;
    // let avg = s/n;
    // return avg;

    return sumLikes(arr)/arr.length;
}
console.log(`Prosečan broj lajkova je: ${avgLikes(arrBlogs)}`);

// 3. ZADATAK
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
let ispisNaslova = arr => {
    arr.forEach( obj => {
     if(obj.likes > obj.dislikes) {
          console.log(obj.title);
     }
    });
}
ispisNaslova(arrBlogs);

// 4. ZADATAK
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let ispis = arr => {
    for(i=0; i< arr.length; i++) {
        if(arr[i].likes >= arr[i].dislikes * 2){
            console.log(arr[i].title);
        }
    }
}
ispis(arrBlogs);

// 5. ZADATAK
// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let blogTitles3 = (arr) => {
    arr.forEach((blog) => {
      // if (blog.title.endsWith("!")) {
      //   console.log(blog.title);
      // }
      if (blog.title[blog.title.length - 1] == "!") {
        console.log(blog.title);
      }
    });
};
blogTitles3(arrBlogs);