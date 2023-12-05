let i = 1;
while (i <= 5)
{
    console.log(i);
    i++; // i = i + 1; // i += 1;
}

console.log("Kraj petlje");
console.log(i); 

/*

PRE PETLJE  : i = 1;
1. ITERACIJA: log(1), i = 2;
2. ITERACIJA: log(2), i = 3;
3. ITERACIJA: log(3), i = 4;
4. ITERACIJA: log(4), i = 5;
5. ITERACIJA: log(5), i = 6;

*/


// Isti zadatak, samo na drugi nacin
i = 1;
while (i <= 5)
{
    console.log(i++);
}

// Isti zadatak, samo na treci nacin
i = 0;
while(i < 5)
{
    i++;
    console.log(i);
}
