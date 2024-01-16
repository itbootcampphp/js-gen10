let liZadaci = document.querySelectorAll('li');
liZadaci.forEach(li => {
    li.addEventListener("click", () => {
        // 1. način
        // if(li.style.textDecoration == "line-through") {
        //     li.style.textDecoration = "none";
        // } else {
        //     li.style.textDecoration = "line-through";
        // }

        // 2. način
        li.classList.toggle(`precrtaj`);
    });
});