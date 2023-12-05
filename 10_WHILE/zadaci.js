// Zadatak 1b.
let i = 1;
while (i <= 20)
{
    console.log(i);
    i++;
}

// Zadatak 1a.
i = 1;
let poruka = "";
while (i <= 20)
{
    poruka = poruka + i + " ";
    i++;
}
console.log(poruka);

/*
#  |  i  |   poruka
--------------------------
0  |  1  |     ""
1  |  2  |     "1 "
2  |  3  |     "1 2 "
3  |  4  |     "1 2 3 "
...| ... |     .......
20 |  21 |     "1 2 ... 20 "
*/

// Zadatak 2.
// 1. nacin:
i = 20;
while (i >= 1)
{
    console.log(i);
    i--;
}

// 2. nacin:
i = 1;
while (i <= 20)
{
    console.log(21 - i);
    i++;
}

/*
i = 1  =>  20 = 21 - i
i = 2  =>  19 = 21 - i
i = 3  =>  18 = 21 - i
.............
i = 19 =>  2 = 21 - 19
i = 20 =>  1 = 21 - 20
*/

// Zadatak 3.
// 1. nacin:
i = 1;
while (i <= 20)
{
    if (i % 2 == 0)
    {
        console.log(i);
    }
    i++;
}

// 2. nacin:
i = 2;
while (i <= 20)
{
    console.log(i);
    i = i + 2;  // i += 2;
}