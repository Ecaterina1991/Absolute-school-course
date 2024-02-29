/*console.log("Ana are mere");

let a = 4;
console.log(`Variabila mea are valoarea ${a}`);
*/
//alert("Woooow ce tare...!");

// comentariile le scriem cu //

/*
sau daca avem comentarii 
pe mai multe randuri
folosim acest model
de comentariu
*/

/*if(conditie) {
  instructiune 1;
} 
else 
{
  instructiune 2;
}

*/
/*
let parola = "abcdxdshsd";

if (parola.length >= 6) {
  if (parola.indexOf(" ") === -1) {
    console.log("Parola este una valida");
  } else {
    console.log("Parola contine spatii");
  }
} else {
  console.log("Parola nu are suficiente caractere ");
}
*/
/*
Structura conditionala verifica o conditie iar daca rezultatul verificarii este true atunci intra pe prima ramura -> primele acolade
Daca rezultatul verificarii este fals atunci intra pe a doua ramura
*/

//sa se afiseze daca este minor sau major in functie de varsta

// let varsta = 32;

// if (varsta >= 18) {
//   console.log("Persoana este majora");
// } else {
//   console.log("Persoana este minora");
// }

//Operatorul ternar

// conditie ? expresie daca este adevarata : expresie daca este falsa
/*
let varsta = 20;

const cond = varsta >= 18 ? "Persoana este majora" : "Persoana este minora";
console.log(cond);

//sa se afiseze in consola ziua din saptamana in functie de indicele acesteia 1=>luni 2 marti etc

let zi = 3;
*/
// if (zi === 1) {
//   console.log("Luni");
// } else if (zi === 2) {
//   console.log("Marti");
// } else if (zi === 3) {
//   console.log("Miercuri");
// } else if (zi === 4) {
//   console.log("Joi");
// } else if (zi === 5) {
//   console.log("Vineri");
// } else if (zi === 6) {
//   console.log("Sambata");
// } else if (zi === 7) {
//   console.log("Duminica");
// } else {
//   console.log("Nu exista");
// }
/*
switch (zi) {
  case 1:
    console.log("luni");
  //break;
  case 2:
    console.log("marti");
  //break;
  case 3:
    console.log("miercuri");
  //break;
  case 4:
    console.log("joi");
  //break;
  case 5:
    console.log("vineri");
  //break;
  case 6:
    console.log("sambata");
  //break;
  case 7:
    console.log("duminica");
    break;
  default:
    console.log("nu exista");
}

let b = " ";
//"" este fals
//0 este fals
// false este fals
// null este fals
//undefined este fals
// NaN este fals

if (b) {
  console.log("adevarat");
} else {
  console.log("false");
}

"ana".length === 3 && 2 + 1 === 10;

let c = 1;
let d = 3;
let e = 0;

e = c++ + d;
console.log(
  `Valoarea lui c este ${c}, Valoarea lui d este ${d}, Valoarea lui e este ${e}`
);

//1. tema
//sa se realizeze operatia in javascript ce genereaza in consola urmatorul text
//Am dat cu cele doua zaruri si rezultatul afost 6 3
//sau
//Am dat cu cele doua zaruri si am dat o dubla de 2

//2.sa se ghiceasca numarul
//daca e mai mare sa zica ca e mare
//daca e mai mic sa zica ca e mai mic

//1.

function zaruri() {
  let zar1 = Math.floor(Math.random() * 6 + 1);
  let zar2 = Math.floor(Math.random() * 6 + 1);

  if (zar1 !== zar2) {
    console.log(
      `Am dat cu cele doua zaruri si rezultatul a fost ${zar1} si ${zar2}`
    );
  } else if (zar1 === zar2) {
    console.log(`Am dat cu cele doua zaruri si am dat o dubla de ${zar1}`);
  }
}

//const aruncare =
zaruri();
//console.log(aruncare);

///////////////////////////////////////////////////
//2.

let zar3 = localStorage.getItem("zar3");

if (zar3 === null) {
  let zar3 = Math.floor(Math.random() * 6 + 1);
  localStorage.setItem("zar3", zar3);
}
console.log(zar3);
let zarulCazut = zar3;

let ghiceste = prompt("Ghiceste cifra intre 1 si 6");
ghiceste = parseInt(ghiceste);

if (ghiceste === Number(zarulCazut)) {
  console.log(`Felicitari! Ati ghicit cifra zarului, care este ${ghiceste}!👓`);
} else if (Math.abs(ghiceste - Number(zarulCazut)) == 1) {
  console.log(
    `Zona fierbinte! Cifra tintita este cu o unitate mai mica sau mai mare`
  );
} else if (ghiceste > Number(zarulCazut)) {
  console.log(`Alegeti un numar mai mic`);
} else if (ghiceste < Number(zarulCazut)) {
  console.log(`Alegeti un numar mai mare`);
} else {
  console.log("Eroare. Va rugam sa alegeti o cifra intre 1 si 6");
}
*/
// let a = 1;
// let b = 3;
// let c = 0;

// a = a++ + --b; //1+2 = 3
// b = --b + ++c; //1+1=2
// c = ++c - --a; //2-2 = 0

//a=2

// a = ++a + b++;
// b = ++b + a++;
// c = ++a + ++b;

//a=7
//b=11
//c=18

/*
a = a++ + ++a;
b = a++ + ++b;
c = c++ + ++c + ++a + a++;*/

// a = b++ + ++a + c++ + ++c; // 4+2+1+1 =8
// b = a++ + ++c + ++b + ++a; // 3 + 3+5+3=14
// c = c++ + ++a + b++ + ++a + ++c + ++b; // 4+5+6+4+4+7=30

// console.log(
//   `Valoarea lui a este ${a}, Valoarea lui b este ${b}, Valoarea lui c este ${c}`
// );

// let v = [];
// console.log(v);

// let pozitii = ["ADC", "support", "mid", "top", "jungle"];
// let culori = ["rosu", "verde", "albastru", "galben"];
// let loto = [3, 5, 35, 41, 33, 26];

// let test = [1, "ana", true, NaN, null, undefined, ""];

// let sir = "ana are mere";
// console.log(sir[1]);
// let sir1 = ["a", "n", "a", " ", "a", "r", "e", " ", "m", "e", "r", "e"];

//tema
//sa se creeze o functie ce imi muta sirul de caractere in array

//pasii pentru rezolvarea urmatoarei
//cat este valoarea urmatoarelor variabile la fiecare pas
// let a = 1;
// let b = 3;
// let c = 0;

// a = --a + b++ + ++c;
// b = b++ + b + c++ + ++c;
// c = a++ + ++b - a-- - --b;

//1.

// let myString = "douazeci si unu de zile";

// function strToArr(param) {
//   return param.split(" ");
// }
// const result = strToArr(myString);
// console.log(result);

// //2.

// let a = 1;
// let b = 3;
// let c = 0;

// a = --a + b++ + ++c;
// //a = 0 + 3 + 1 => a = 4 la primul pas
// b = b++ + ++b + c++ + ++c;
// // b = 4+6+1+3=14 => b = 14 la al doilea pas
// c = a++ + ++b - a-- - --b;
//c= 4 + 15 - 4 - 15 = 0 => c = 0 la al treilea pas

//a=4+1-1=4 final
//b=14 la final
// c = 0 la final

// console.log(
//   `Valoarea lui a este ${a}, Valoarea lui b este ${b}, Valoarea lui c este ${c}`
// );

//4, 13, 0

// console.log("ana are mere");
// console.log("ana are mere");
// console.log("ana are mere");
// let t = [];
// let i = 1;
// for (i = 100; i >= 0; i--) {
//   console.log(`dana are ${i} pere`);
// }

// let loto = [5, 8, 6, 2, 4];

// for (let i = 0; i < loto.length; i++) {
//   console.log(`loto[${i}]=${loto[i]}`);
// }
// let sir = "ana are mere";

// for (let j = 0; j < sir.length; j++) {
//   t[j] = sir[j];
//   console.log(sir[j]);
// }

// console.log(t);

// let text = "mere";
// for (let i = 0; i < text.length; i++) {
//   console.log(`primul loop: ${i}`);
//   for (let j = 0; j < text.length; j++) {
//     console.log(text[j]);
//   }
// }

// let matrice = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 8, 7, 6],
//   [5, 4, 3, 2],
// ];

// console.log(matrice);

// for (let i = 0; i < matrice.length; i++) {
//   for (j = 0; j < matrice[i].length; j++) {
//     console.log(`matrice[${i}][${j}]=${matrice[i][j]}]`);
//   }
// }

//1.se da un sir de caractere
//folosind strunctura repetitiva for
//sa se afiseze sirul de caractere inversat
//ana are mere -> erem era ana
//radar

// let r = "ana are mere";
// //let r = "radar";
// let gol = [];

// for (let j = r.length - 1; j >= 0; j--) {
//   //console.log(r[j]);
//   gol[j] = r[j];
// }

// const result3 = gol.reverse().join("");
// console.log(result3);

//2.
//folosind exercitiul de mai sus sa se afiseze cu true sau false  daca un cuvant este palindrom

// console.log(r[j]);
// console.log(r[i]);
// let i;
// for (let i = 0; i < r.length; i++) {
//   console.log(r[i]);
// }

// const result4 = gol.reverse().join("");
// console.log(result4);

// if (result3 == result4) {
//   console.log(`Sirul de date "${r}" este palindrom.`);
// } else {
//   console.log(`Sirul de date "${r}" nu este palindrom`);
// }

//alta rezolvare

// let sir1 = "ana are mere";
// let sirinversat = "";

// for (i = sir1.length - 1; i >= 0; i--) {
//   sirinversat = sirinversat + sir1[i];
// }

// console.log(sirinversat);

//for(starting point; ending pont; incrementare/decrementare)
//{instructiuni}

//starting point
//while(ending point)
//{instructiuni
//incrementare/decrementare
//}

//sa se afiseze de 10 ori "ana are mere"
// let sir = "ana are mere";
// let i = 0;
// while (i < 10) {
//   i++;
//   console.log(sir);
// }

// for (i = 0; i < 10; ++i) {
//   console.log("ana are mere");
// }

// const numar = Math.floor(Math.random() * 10);
// let incercare = Math.floor(Math.random() * 10);

// let i = 0;
// while (incercare != numar) {
//   console.log(`${incercare} -> ${i}`);
//   i++;
//   incercare = Math.floor(Math.random() * 10);
// }

// console.log(
//   `Numarul de ghicit este: ${numar} si incercarea este ${incercare} dupa ${i} incercari`
// );

// let i;
// for (i = 1; incercare != numar; i++) {
//   console.log(`${incercare} -> ${i}`);
//   incercare = Math.floor(Math.random() * 10);
// }
// console.log(
//   `Numarul de ghicit este: ${numar} si incercarea este ${incercare} dupa ${i} incercari`
// );

// let i;
// for (i = 1; i > 0; i++) {
//   if (incercare != numar) {
//     console.log(`${incercare} -> ${i}`);
//     incercare = Math.floor(Math.random() * 10);
//   } else {
//     break;
//   }
// }
// console.log(
//   `Numarul de ghicit este: ${numar} si incercarea este ${incercare} dupa ${i} incercari`
// );

// const numar = Math.floor(Math.random() * 10);
// let incercare = Math.floor(Math.random() * 10);

// let i = 1;

// while (i > 0) {
//   i++;
//   if (incercare != numar) {
//     console.log(`${incercare} -> ${i}`);
//     incercare = Math.floor(Math.random() * 10);
//   } else {
//     break;
//   }
// }

// console.log(
//   `Numarul de ghicit este: ${numar} si incercarea este ${incercare} dupa ${i} incercari`
// );

// let culori = ["albastru", "galben", "rosu", "roz", "verde"];
// //sa se afiseze fiecare culoare din vector

// for (let i = 0; i < culori.length; i++) {
//   console.log(i, culori[i]);
// }

// for (let culoare of culori) {
//   console.log(culoare);
// }

// let matrice = [
//   [1, 2, 3, 4],
//   [5, 96, 7, 8],
//   [9, 8, 15, 6],
//   [4, 2, 1, 2],
// ];

//suma[0] = 1, suma[1] = 2, suma[2]=3, suma[3]=4

//suma[0]=6, suma[1]= 8, suma[2] = 10, suma[3]=12

//sa se afiseze suma pe linie, (suma pe coloane si suma pe diagonale)

// let i, j;
// for (let i = 0; i < matrice.length; i++) {
//   let suma = 0;
//   for (j = 0; j < matrice[i].length; j++) {
//     suma += matrice[i][j];
//   }
//   console.log(suma);
// }

// let i, j, c;
// c = matrice[0].length;
// let sumaC = Array(c).fill(0);

// for (i = 0; i < matrice.length; i++) {
//
//   for (j = 0; j < c; j++) {
//
//     sumaC[j] += matrice[i][j];
//   }
// }

// for (i = 0; i < sumaC.length; i++) {
//   console.log(sumaC[i]);
// }

//tema sume pe diagonala

// let matrice = [
//   [1, 2, 3, 4],
//   [5, 96, 7, 8],
//   [9, 8, 15, 6],
//   [4, 2, 1, 2],
// ];

// let linii = matrice.length;
// let stanga = 0;
// let dreapta = 0;
// let i;

// for (i = 0; i < linii; i++) {
//   stanga += matrice[i][i];
//   dreapta += matrice[i][linii - 1 - i];
// }

// console.log(stanga);
// console.log(dreapta);

/*
let i, j;
let sum = 0;

for (i = 0; i < matrice.length; i++) {
  for (j = 0; j < matrice[i].length; j++) {
    if (i == j) {
      sum += matrice[i][j];
    }
  }
}
console.log(sum);
*/

// const limbaj = ["php", "js", "c#"];
// const prop = ["back", "front", "front"];

// let i;

// for (i = 0; i < limbaj.length; i++) {
//   let result = `${limbaj[i]} - ${prop[i]}`;
//   console.log(result);
// }

// for(let i = 0; i < limbaj.length; i++) {
//   for(let j = 0; j < prop.length; j++) {
//     if(i==j){
//       console.log(limbaj[i] + ' '+ prop[j])
//     }

//   }
// }
// for (let i = 1; i <= 5; i++) {
//   test(i);
// }

// function test(numarul) {
//   console.log(`ana are ${numarul} mere`);
//   console.log(`dana are ${numarul} pere`);
// }

// function patrat(numar) {
//   console.log(`Patratul numarului ${numar} este ${numar * numar}`);
// }

// patrat(3);

//sa se creeze o functie ce returneaza la fiecare apelare aruncarea a doua zaruri

// function arunca() {
//   let zar1 = Math.ceil(Math.random() * 6);
//   let zar2 = Math.ceil(Math.random() * 6);

//   if (zar1 == zar2) {
//     console.log(`Am dat dubla de ${zar1} si ${zar2}`);
//   } else {
//     console.log(`Zarul unu este ${zar1} si zarul doi este ${zar2}`);
//   }
// }

// arunca();

//let culori = ["rosu", "verde", "albastru", "galben"];

// function testare(culoare) {
//   for (let i = 0; i < culori.length; i++)
//     if (culori[i] === culoare) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
// }

// testare("verde");

// function test(culoare) {
//   if (culori.includes(culoare)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// test("verde");

// function test(culoare) {
//   if (culori.includes(culoare)) {
//     return true;
//     //console.log(`${culoare}`);
//   } else {
//     return false;
//   }
// }
// console.log(test("verde"));

//media numerelor primite ca parametru

// function media(a) {
//   let sum = 0;
//   for (let x of a) {
//     sum += x;
//   }
//   return sum / a.length;
// }
// let arr = [1, 5, 6, 9];

// function media(a) {
//   let prod = 1;
//   for (let x of a) {
//     prod *= x;
//   }
//   return prod;
// }

// console.log(media(arr));

//o functie ce returneaza extragerea unei carti de joc

// let carti = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
// let culori = ["rosu", "negru", "trefla", "romb"];
// function randomNumar(a) {
//   let x = Math.floor(Math.random() * a.length);
//   return x;
// }

// function extrageCarte() {
//   let carteIndice = randomNumar(carti);
//   let culoareIndice = randomNumar(culori);
//   console.log(
//     `Ai tras cartea ${carti[carteIndice]} de culoarea ${culori[culoareIndice]}.`
//   );
// }

// extrageCarte();

//let si const tine cont de scop
//var nu tine cont de scop, doar in if si for

//function var-ul isi pastreaza scopul
//if for var-ul isi schimba valoarea

// var nume = "Gicu";
// function student() {
//   var nume = "Popescu";
//   console.log(nume);
//   const clasa = "9G";

//   var repetent = true;
// }
// student();
// console.log(nume);

// if (true) {
//   var nume = "Ionica";
//   console.log(nume);
// }
// console.log(nume);

// for (i = 0; i < 2; i++) {
//   var nume = "Vasilica";
//   console.log(nume);
// }
// console.log(nume);

// let culori = ["rosu", "negru", "trefla", "romb"];
// var i = 10;
// for (var i = 0; i < culori.length; i++) {
//   console.log(i, culori[i]);
// }
// console.log(i);

//tema:
//sa extragem carti din pachet si niciodata nu se extrage aceeasi carte pana cand ajungem sa nu mai avem carti in pachet

//shuffleArray(arr)

// let carti = [
//   "2 rosu",
//   "3 rosu",
//   "4 rosu",
//   "5 rosu",
//   "6 rosu",
//   "7 rosu",
//   "8 rosu",
//   "9 rosu",
//   "10 rosu",
//   "J rosu",
//   "Q rosu",
//   "K rosu",
//   "A rosu",
//   "2 negru",
//   "3 negru",
//   "4 negru",
//   "5 negru",
//   "6 negru",
//   "7 negru",
//   "8 negru",
//   "9 negru",
//   "10 negru",
//   "J negru",
//   "Q negru",
//   "K negru",
//   "A negru",
//   "2 trefla",
//   "3 trefla",
//   "4 trefla",
//   "5 trefla",
//   "6 trefla",
//   "7 trefla",
//   "8 trefla",
//   "9 trefla",
//   "10 trefla",
//   "J trefla",
//   "Q trefla",
//   "K trefla",
//   "A trefla",
//   "2 romb",
//   "3 romb",
//   "4 romb",
//   "5 romb",
//   "6 romb",
//   "7 romb",
//   "8 romb",
//   "9 romb",
//   "10 romb",
//   "J romb",
//   "Q romb",
//   "K romb",
//   "A romb",
// ];

// let copieCarti = [
//   "2 rosu",
//   "3 rosu",
//   "4 rosu",
//   "5 rosu",
//   "6 rosu",
//   "7 rosu",
//   "8 rosu",
//   "9 rosu",
//   "10 rosu",
//   "J rosu",
//   "Q rosu",
//   "K rosu",
//   "A rosu",
//   "2 negru",
//   "3 negru",
//   "4 negru",
//   "5 negru",
//   "6 negru",
//   "7 negru",
//   "8 negru",
//   "9 negru",
//   "10 negru",
//   "J negru",
//   "Q negru",
//   "K negru",
//   "A negru",
//   "2 trefla",
//   "3 trefla",
//   "4 trefla",
//   "5 trefla",
//   "6 trefla",
//   "7 trefla",
//   "8 trefla",
//   "9 trefla",
//   "10 trefla",
//   "J trefla",
//   "Q trefla",
//   "K trefla",
//   "A trefla",
//   "2 romb",
//   "3 romb",
//   "4 romb",
//   "5 romb",
//   "6 romb",
//   "7 romb",
//   "8 romb",
//   "9 romb",
//   "10 romb",
//   "J romb",
//   "Q romb",
//   "K romb",
//   "A romb",
// ];

// let noulCalup = [];

// function amesteca(array) {
//   let s = array.sort(() => Math.random() - 0.5);
//   return s;
// }
// const cartiAmestecate = amesteca(carti);
// console.log(cartiAmestecate);

// //function go() {
// for (let i = 0; i < copieCarti.length; i++) {
//   let y = cartiAmestecate.slice(-1);
//   console.log(y);
//   noulCalup.push(y);

//   cartiAmestecate.pop();
//   amesteca(cartiAmestecate);
//   console.log(cartiAmestecate);
// }
// console.log(`Cartile extrase sunt ${noulCalup.join(", ")}, in aceasta ordine`);
// //}

// // const result = go();
// // console.log(result);
// console.log(cartiAmestecate);
// console.log(carti);

// let carti = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
// let culori = ["rosu", "negru", "trefla", "romb"];
// function randomNumar(a) {
//   let x = Math.floor(Math.random() * a.length);
//   return x;
// }

// function extrageCarte(conditie) {
//   if (conditie) {
//     let carteIndice = randomNumar(carti);
//     let culoareIndice = randomNumar(culori);
//     console.log(
//       `ai tras cartea ${carti[carteIndice]} de ${culori[culoareIndice]}`
//     );
//     let indiceCC = [carteIndice, culoareIndice];
//     return indiceCC;
//   } else return;
// }

// let x = carti.length;
// let y = culori.length;

// initializam matricea cu elementul 0
// let matrice = [];
// // Populează matricea cu zero-uri
// for (let i = 0; i < carti.length; i++) {
//   // Inițializează un rând gol
//   let rand = [];
//   for (let j = 0; j < culori.length; j++) {
//     // Adaugă 0 în fiecare coloană
//     rand.push(0);
//   }
//   // Adaugă rândul în matrice
//   matrice.push(rand);
// }

// while (carti.length > 0) {
//   let indice = extrageCarte(true);
//   // extrageCarte();
//   if (matrice[indice[0]][indice[1]] == 0) {
//     matrice[indice[0]][indice[1]] = 1;
//   } else {
//     if (
//       matrice[indice[0]][0] == 1 &&
//       matrice[indice[0]][1] == 1 &&
//       matrice[indice[0]][2] == 1 &&
//       matrice[indice[0]][3] == 1
//     ) {
//       // carti[indice[0]] = "";
//       carti.splice(indice[0], 1);
//     } else {
//       if (carti.length > 0) {
//         extrageCarte(true);
//       } else extrageCarte(false);
//     }
//   }

//   console.log(matrice);
//   console.log(carti);
// }
// console.log(carti);
// console.log(culori);

// let carti = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,  "J", "Q", "K", "A"];
// let culori=["inima rosie", "inima neagra", "trefla", "romb"];
// function randomNumar(a){

//     let x = Math.floor(Math.random()*a.length);
//     return x;
// }

//  function extrageCarte(){

//     if (carti.length === 0) {
//         console.log("Nu mai sunt carti in pachet!");
//         return;
//     }

//     let carteIndice = randomNumar(carti);
//     let culoareIndice = randomNumar(culori);

//     let carteExtrasa = carti.splice(carteIndice, 1)[0]; // splice() este folosită pentru a modifica conținutul unui array prin eliminarea sau înlocuirea elementelor existente și/sau adăugarea de noi elemente în locul lor.
//     // Folosim metoda splice pentru a elimina un element din array-ul carti la indexul carteIndice
//     // Totodata returneaza si elementul eliminat din array sub forma unui element prin [0]
//     let culoareCarte = culori[culoareIndice];

//     console.log(`Ai tras cartea ${carteExtrasa} de ${culoareCarte}`);
// }

// // Extrage carti pana cand nu mai sunt disponibile
//   while (carti.length > 0) {
//     extrageCarte();
// }

// function apel1() {
//   let nume = "Gicu";

//   function apel() {
//     let prenume = "Ion";
//     console.log(nume);
//   }
//   apel();
//   console.log(nume);
//   console.log(prenume);
// }

// apel1();

// const sum = function (x, y) {
//   return x + y;
// };

// const prod = function (x, y) {
//   return x * y;
// };

// const impartire = function (x, y) {
//   return x / y;
// };
// const scadere = function (x, y) {
//   return x - y;
// };
// //console.log(sum(2, 3));

// const operatie = [sum, prod, impartire, scadere];
// console.log(operatie[1](3, 4));
// console.log(operatie[2](3, 4));
// console.log(operatie[3](3, 4));

// function ope(x, y) {
//   // for (i = 0; i < operatie.length; i++)
//   for (let func of operatie) {
//     // console.log(operatie[i](x, y));
//     console.log(func(x, y));
//   }
// }

// console.log(ope(5, 3));

// function ana() {
//   console.log("ana are mere");
// }

// let j;
// function apel(f, j) {
//   for (let i = 0; i < j; i++) {
//     f();
//   }
// }

// console.log(apel(ana, 5));

//returnare functii

// function intre(min, max) {
//   return function (valoare) {
//     return valoare >= min && valoare <= max;
//   };
// }

// const testul = intre(10, 100);
// console.log(testul(20));

// function verif(n) {
//   console.log(n);
//   return function (g) {
//     console.log(`Salut ${g}`);
//   };
// }

// const v = verif("dana");
// v("ana");

//sa se creeze o functie ce primeste ca parametru elementul de ridicare la putere

// function putere(numar) {
//   return function (x) {
//     let rez = 1;
//     for (let i = 0; i < numar; i++) {
//       rez = rez * x;
//     }
//     return rez;
//   };
// }

// const treia = putere(3);
// const patra = putere(4);
// const cincia = putere(5);
// const dublu = putere(2);
// console.log(treia(5));

//sa se realizeze o functie ce calculeaza factorialul unui numar
//n! 1*2*3...*n

// let h = "maria";
// function y(h) {
//   console.log(h);
// }

// y();
//y("maria");

//tema
//sa se creeze o functie generatoare de functii ce imi calculeaza combinari de n luate cate k
// n!/(n-k)!*k!

// function calcul(k) {
//   return function (n) {
//     let prod = 1;
//     let prodK = 1;
//     let prodFactDif = 1;
//     let factDif = n - k;

//     for (let i = 1; i <= n; i++) {
//       prod = prod * i;
//     }
//     for (let j = 1; j <= k; j++) {
//       prodK = prodK * j;
//     }
//     for (let t = 1; t <= factDif; t++) {
//       prodFactDif = prodFactDif * t;
//     }

//     return prod / (prodFactDif * prodK);
//   };
// }
// const result = calcul(2);

// console.log(result(5));

//let v = [1, 2, 3, 4, 5];
// v.forEach(function (n, i) {
//   console.log(n, i);
// });

// function triplu(n) {
//   console.log(`Triplul numarului ${n} este ${3 * n}`);
// }
// triplu(4);

// const three = v.map(function (n) {
//   return n * 3;
// });

// let sir = "ana are mere";
// let arr = ["ana", "are", "mere"];

// const test = arr.map(function (cuv) {
//   return cuv.split("").join(".").toUpperCase();
// });

// console.log(test);

// function patrat(n) {
//   return n * n;
// }

// const patrat = (n) => {
//   return n * n;
// };

// const sum = (x, y) => {
//   return x + y;
// };

// const pat2 = (n) => {
//   return n * n;
// };

// const pat3 = (n) => (if (n < 0) {return false} else {n * n});

// const pat4 = v.map((n) => n * 4);
// console.log(pat4);

// const par = v.map(function (n) {
//   if (n % 2 == 0) {
//     return "par";
//   } else {
//     return "impar";
//   }
// });
//console.log(par);

// let nume = ["Ion Harabor", "Ion Popescu", "Ion Ion Stefanescu"];
// const gasit = nume.find((num) => {
//   return num.includes("Ion");
// });
// console.log(gasit);

// const gasit2 = nume.find((num) => {
//   return num.indexOf("Ion") == 0;
// });
// const gasit3 = nume.filter((num) => {
//   return num.includes("Ion");
// });

// const persoane = [
//   { nume: "Ion", varsta: 25 },
//   {
//     nume: "Maria",
//     varsta: 30,
//   },
//   {
//     nume: "Elena",
//     varsta: 22,
//   },
//   {
//     nume: "Alex",
//     varsta: 35,
//   },
// ];

// const gasit = (varsta_cautata) => {
//   const gasita = persoane.find((persoana) => persoana.varsta == varsta_cautata);
//   if (gasita) {
//     console.log(`Persoana cu varsta ${varsta_cautata} este ${gasita.nume}`);
//   } else {
//     console.log(`Nu am gasit persoana`);
//   }
// };

// console.log(gasit(30));

//folosind filter sa gasim toate persoanele cu varsta mai mare de 30

// const gasit = (varsta_cautata) => {
//   const gasita = persoane.filter(
//     (persoana) => persoana.varsta > varsta_cautata
//   );

//   if (gasita.length > 0) {
//     console.log(`Persoanele cu varsta mai mare decat ${varsta_cautata} sunt: `);
//     gasita.forEach((persoana) => {
//       console.log(JSON.stringify(persoana));
//     });
//   } else {
//     console.log(`Nu s-a gasit nicio persoana`);
//   }
// };

// gasit(25);

// const persoane = [
//   { nume: "Ion", varsta: 25 },
//   {
//     nume: "Maria",
//     varsta: 30,
//   },
//   {
//     nume: "Elena",
//     varsta: 22,
//   },
//   {
//     nume: "Alex",
//     varsta: 35,
//   },
// ];

// const gasit = (nume_cautat) => {
//   const g = persoane.filter((persoana) => persoana.nume == "Ion");
//   if (g.length > 0) {
//     console.log(`Persoana cu ${nume_cautat} este:`);
//     g.forEach((persoana) => {
//       console.log(JSON.stringify(persoana));
//     });
//   } else {
//     console.log(`Nu am gasit persoana`);
//   }
// };

// let arr = [30.25, 2500, 99.99, 12.0, 17, 8300];

// arr.sort(function (a, b) {
//   return a - b;
// });

// console.log(arr);

// const persoane = [
//   { nume: "Ion", varsta: 30 },
//   {
//     nume: "Maria",
//     varsta: 30,
//   },
//   {
//     nume: "Elena",
//     varsta: 22,
//   },
//   {
//     nume: "Alex",
//     varsta: 30,
//   },
// ];

// const sortata = persoane.sort(function (a, b) {
//   if (a.varsta !== b.varsta) {
//     return a.varsta - b.varsta;
//   }
//   return a.nume.localeCompare(b.nume);
// });

// console.log(sortata);

// const str1 = "abc";
// const str2 = "abcd";
// const rez = str1.localeCompare(str2);
// console.log(rez);

//tema
//1.avem un array de produse cu nume pret stoc
//2.sa se scrie o functie ce are ca parametru pret minim
//3.sa utilizam filtre sa se afiseze produsele cu pretul mai mare decat pretul minim
//4.sa se scrie o functie ce sorteaza produsele in functie de stoc
//5.sa se scrie o functie ce afiseaza toate produsele dupa un nume cautat
//6.sa se scrie o functie ce sorteaza produsele dupa nume
//7.sa se scrie o functie ce returneaza produsele ce sunt sub un stoc minim
/*
//1,2,3
const inventarProduse = [
  { nume: "Laptop", pret: 2500, stoc: 15 },
  { nume: "Telefon", pret: 1200, stoc: 25 },
  { nume: "Tabletă", pret: 800, stoc: 20 },
  { nume: "Smart TV", pret: 1500, stoc: 10 },
  { nume: "Cameră Foto", pret: 1800, stoc: 8 },
];

const sortata = inventarProduse.sort(function (a, b) {
  return a.pret - b.pret;
});

console.log(sortata);

const pretMin = sortata[0].pret;
console.log(pretMin);

const filtru = (pret_cautat) => {
  const gasit = inventarProduse.filter((item) => item.pret > pretMin);

  if (gasit.length > 0) {
    console.log(`Produsele care respecta conditia sunt:`);
    gasit.forEach((item) => {
      console.log(JSON.stringify(item));
    });
  } else {
    console.log(`Nu exista produse care sa respecte conditia`);
  }
};

filtru();

//4. sa se scrie o functie ce sorteaza produsele in functie de stoc

const sortareStoc = inventarProduse.sort(function (a, b) {
  return a.stoc - b.stoc;
});

console.log(sortareStoc);

////5.sa se scrie o functie ce afiseaza toate produsele dupa un nume cautat

const numeCautat = (nume_cautat) => {
  const numeGasit = inventarProduse.find((item) => item.nume == nume_cautat);
  if (numeGasit) {
    console.log(`Numele cautat este ${nume_cautat} `);
  } else {
    console.log(`Nu am gasit numele`);
  }
};

numeCautat("Telefon");

//6.sa se scrie o functie ce sorteaza produsele dupa nume

const sortareNume = inventarProduse.sort(function (a, b) {
  return a.nume.localeCompare(b.nume);
});

console.log(sortareNume);

//7.sa se scrie o functie ce returneaza produsele ce sunt sub un stoc minim

const stocMin = 10;

const deComandat = (stoc_cautat) => {
  const gasitStoc = inventarProduse.filter((item) => item.stoc < stocMin);

  if (gasitStoc.length > 0) {
    console.log(`Produsele cu stoc sub minim, care trebuie comandate sunt:`);
    gasitStoc.forEach((item) => console.log(JSON.stringify(item)));
  } else {
    console.log(`Nu exista produse cu stoc sub minim`);
  }
};

deComandat();
*/
/*
const numere = [9, 4, 7, 2, 8, 99, 19, 33, 86];
const numere2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function patru(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const culori = ["rosu", "verde", "albastru", "galben"];

const sir3 = "mari";

patru(...sir3);
patru("m", "a", "r", "i");

const numere3 = [...numere, ...numere2];
console.log(numere3);
const numere4 = [numere, ...numere2];
console.log(numere4);
const numere5 = [...numere, ...numere2];
const numere6 = [...numere2, "10", 11, "12", 13];
console.log(numere6);
const numere7 = numere.concat(numere2);
console.log(numere7);

const numere8 = [1, 2, 3];
const numere9 = [1, 2, 3];
console.log(numere8 == numere9);

const sir4 = "maria";
const sir5 = ["m", "a", "r", "i", "a"];

const sir6 = sir4.split("");
const sir7 = [...sir4];

const licee = {
  nume: "Fratii buzesti",
  olimpici: 7,
};

const clase = {
  clasa: "generala",
  clasa2: "liceu",
};

const materii = {
  materie1: "matematica",
  materie2: "info",
  materie3: "bio",
};

const craiova = {
  ...licee,
  ...clase,
  ...materii,
};

const materii2 = { ...materii };

test2 = { ...[numere9], ...[numere8] };
console.log(test2);
//face spread la ultimul array
test3 = { ...numere, ...numere9 };
console.log(test3);

//cu spread operator putem transforma un array in obiect cheie valoare unde cheia este indicele fiecarei valori
*/

/*
const numere8 = [1, 5, 4, 6];
const sir5 = "andrei";
const test4 = {
  arraynumere: [...numere8],
  arraysir: sir5.split(""),
};

console.log(test4);
*/

//sa se creeze o functie ce imi aduna suma numerelor
//date ca si parametru indiferent de numarul
//de parametri

// const functieAdunare = (...arguments) => {
//   const parametrii = [...arguments];
//   return parametrii.reduce((total, valCur) => {
//     return total + valCur;
//   });
// };

// console.log(functieAdunare(1, 2, 3, 4));
/*
function afisare(first, last, ...rest) {
  console.log("primul", first);
  console.log("ultimul", last);
  console.log(rest);
}
afisare(1, 2, 3, 4, 5, 6, 7, 8);
*/

//sa se creeze o functie ce returneaza maximul, minimul, suma si media elementelor date ca si parametru indiferent de numarul lor

/*
const functieOperatii = (...arguments) => {
  const max = Math.max(...arguments);
  const min = Math.min(...arguments);
  const sum = arguments.reduce((sum, val) => sum + val);
  const average = sum / arguments.length;
  return { max: max, min: min, sum: sum, average: average };
};
*/

// const aduna = function (x, y) {
//   return x + y;
// };

// const mate = {
//   var: 3.14527,
//   aduna: function (x, y) {
//     return x + y;
//   },
//   inmulteste: function (x, y) {
//     return x * y;
//   },
// };
// console.log(mate.aduna(2, 3));
// console.log(mate.inmulteste(2, 3));

// const auth = {
//   username: "Ion",
//   login() {
//     return `salut ${this.username} te-ai logat`;
//   },
//   logout() {
//     return `La revedere ${this.username}`;
//   },
// };

// console.log(auth.login());
// console.log(auth.logout());

// function salut() {
//   //return "Hey";
//   return this;
// }

// console.log(salut);

// const obex = {
//   metodasalut: salut,
// };

// console.log(obex.metodasalut());

// const persoana = {
//   nume: "Ana",
//   prenume: "Maria",
//   varsta: 25,
//   prezinta: function () {
//     return `Salut, sunt ${this.nume} ${this.prenume} si am ${this.varsta} ani`;
//   },
// };

// console.log(persoana.prezinta());

// const metodaPrezinta = persoana.prezinta;
// console.log(metodaPrezinta());

// function Pers(nume, prenume, varsta) {
//   this.nume = nume;
//   this.prenume = prenume;
//   this.varsta = varsta;
//   this.prezinta = function () {
//     return `Salut, sunt ${this.nume} ${this.prenume} si am ${this.varsta} ani`;
//   };
// }

// const persoana1 = new Pers("Popescu", "Ion", 30);
// console.log(persoana1.prezinta());

// const prez = persoana1.prezinta;
// console.log(prez());

//tema:
//1.sa se creeze obiectul student cu proprietati nume, prenume si varsta si o metoda prezinta ce afiseaza mesajul despre student
//similar cream si pentru profesor
//sa se afiseze inform despre student si profesor folosind metodele prezinta

//2.sa se creeze un constructor curs ce primeste numele cursului si lista de studenti
// sa se adauge o metoda la curs ce afiseaza studentii inscrisi si sa se calculeze media varstei acestora

//3. se da urmatorul array
//const numere = [9,4,7,2,8,99,19,33,86]
//sa se utilizeze: map filter, reduce pentru a obtine un array cu dublul numerelor, un array cu numerele mai mari de 10
//sa se afiseze suma tuturor numerelor
/*
const student = {
  nume: "Drumeag",
  prenume: "Andrei",
  varsta: 27,
  mesaj: function () {
    return `Studentul ${this.nume} ${this.prenume} are varsta de ${this.varsta} ani`;
  },
};

console.log(student.mesaj());

const profesor = {
  nume: "Frunza",
  prenume: "Victor",
  varsta: 45,
  mesaj: function () {
    return `Profesorul ${this.nume} ${this.prenume} are varsta de ${this.varsta} ani`;
  },
};
console.log(profesor.mesaj());

function Curs(numeCurs, listaStudenti) {
  this.numeCurs = numeCurs;
  this.listaStudenti = listaStudenti;
  this.varstaMedie = function () {
    return `Studentii inscrisi sunt: ${listaStudenti.nume} ${listaStudenti.prenume} cu varsta de ${this.listaStudenti.varsta} ani`;
  };
}

const student1 = new Curs("Biologie", student);
console.log(student1.varstaMedie());

//3. se da urmatorul array

//sa se utilizeze: map, filter, reduce pentru a obtine un array cu dublul numerelor, un array cu numerele mai mari de 10
//sa se afiseze suma tuturor numerelor

const numere = [9, 4, 7, 2, 8, 99, 19, 33, 86];

const dublu = numere.map((item) => item * 2);

console.log(dublu);

const filtru = numere.filter((item) => item > 10);
console.log(filtru);

const suma = numere.reduce((acc, val) => acc + val);
console.log(suma);
*/

// const student = {
//   nume: "Ion Ionescu",
//   varsta: 33,
//   info: function () {
//     return `Buna ziua ! Sunt studentul ${this.nume} si am ${this.varsta} de ani`;
//   },
// };
// console.log(student.info());
// const profesor = {
//   nume: "Georgescu George",
//   varsta: 50,
//   info: function () {
//     return `Buna ziua ! Sunt profesorul ${this.nume} si am ${this.varsta} de ani`;
//   },
// };
// console.log(profesor.info());
/*
2. sa se creeze un constructor curs ce primeste numele cursului si lista de studenti
sa se adauge o metoda la curs  ce afiseaza studentii inscrisi si sa se calculeze media varstei acestora
*/
// function constr(numeCurs, listaStudenti) {
//   this.numeCurs = numeCurs;
//   this.listaStudenti = listaStudenti;
//   this.met = function () {
//     console.log(`Studentii sunt:`);
//     this.listaStudenti.forEach((student) => {
//       console.log(student.info());
//     });
//   };
//   this.medie = function () {
//     let suma = 0;
//     let totalVarsta = this.listaStudenti.reduce(
//       (suma, student) => suma + student.varsta,
//       0
//     );
//     return totalVarsta / this.listaStudenti.length;
//   };
// }
// let ceva = new constr("javascript", [student, profesor]);
// ceva.met();
// console.log(ceva.medie());

//sa definim un obiect aplicatie care va alege aleatoriu un dezvoltator din lista

// const aplicatie = {
//   dezvoltator: ["Microsoft", "Ubi", "Apple", "Amazon", "Google"],
//   alegeDezv: function () {
//     const { dezvoltator } = this; //destructiram obiectul pentru a extrage proprietatea dezvoltator din obiectul curent
//     const id = Math.floor(Math.random() * dezvoltator.length);
//     return dezvoltator[id];
//   },
//   periodic: function () {
//     setInterval(() => {
//       const dezvAles = this.alegeDezv();
//       console.log(dezvAles);
//     }, 1000);
//   },
// };
//aplicatie.periodic();

// function Afisare() {
//   var x = document.getElementById("furnizor").value;
//   document.getElementById("var1").innerHTML = `Furnizorul selectat este ${x}`;
// }

// const element = document.getElementById("butonulmeu");

// element.addEventListener("mouseover", clickul);

// function clickul() {
//   document.getElementById("var1").innerHTML = `S-a trecut cu mouseul`;
// }

// function copiere() {
//   document.getElementById("var1").innerHTML = `copiere`;
// }
// function taiere() {
//   document.getElementById("var1").innerHTML = `cut text`;
// }

// function apasare(e) {
//   var keynum;
//   if (window.event) {
//     keynum = e.keyCode;
//   } else "";
//   document.getElementById(
//     "var1"
//   ).innerHTML = `S-a apasat tasta ${String.fromCharCode(keynum)}`;
// }

// function schimba2() {
//   var paragraf = document.createElement("li");
//   paragraf.textContent = "text";
//   var container = document.getElementById("container");
//   container.appendChild(paragraf);
// }

// const adaugaProdus = document.getElementById("adauga");
// const listaCumparaturi = document.getElementById("produse");

// let counter = 0;

// adaugaProdus.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     if (!this.value) return;

//     const noulProdus = document.createElement("li");
//     noulProdus.setAttribute("class", "li-element");
//     const noulButon = document.createElement("button");
//     noulButon.textContent = "Delete";
//     noulButon.setAttribute("class", "delete-button");
//     noulProdus.setAttribute("class", "newElement");
//     const noulProdusText = this.value;
//     listaCumparaturi.appendChild(noulProdus);
//     listaCumparaturi.appendChild(noulButon);
//     noulButon.addEventListener("click", stergeLI);
//     noulProdus.innerHTML = noulProdusText;
//     //adaugaProdus.value = 0;
//     counter = counter + 1;
//     this.value = "";
//     console.log(counter);
//     for (let i = 0; i < listaCumparaturi.children.length; i++) {
//       const mesajAfisat = document.getElementById("mesaj-counter");
//       const mesaj = `In lista s-au adaugat ${counter} elemente`;
//       mesajAfisat.innerHTML = mesaj;
//     }
//   }
// });

// //sa adaugam un element de stergere pentru fiecare element li
// //buton pt a numara cate elemente au fost adaugate in lista

// function stergeLI() {
//   let listaOrdonata = document.getElementById("produse");
//   let x = this.previousElementSibling;

//   listaOrdonata.removeChild(x);
//   listaOrdonata.removeChild(this);

//   for (let i = 0; i < listaCumparaturi.children.length; i++) {
//     const mesajAfisat = document.getElementById("mesaj-counter");
//     const mesaj = "Placeholder pentru counter";
//     mesajAfisat.innerHTML = mesaj;
//   }
// }

// function sterge() {
//   let listaOrdonata = document.getElementById("produse");

//   if (listaOrdonata && listaOrdonata.children.length > 0) {
//     let ultimulElement = listaOrdonata.lastElementChild;
//     listaOrdonata.removeChild(ultimulElement);
//   } else {
//     console.log("Elementul de sters nu exista");
//   }
// }

// const butonNumara = document.getElementById("numaraProduse");
// butonNumara.addEventListener("click", function () {
//   const numaraProduse = listaCumparaturi.getElementsByTagName("li").length;
//   alert(`Numar de produse: ${numaraProduse}`);
// });

//se da un array de culori. sa creem patrate cu  fiecare culoare trecuta in array

// const culori = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "purple",
//   "indigo",
//   "violet",
// ];

// const container = document.getElementById("cutii");

// for (let Culoare of culori) {
//   const box = document.createElement("div");

//   box.style.background = Culoare;
//   box.classList.add("box");
//   container.appendChild(box);

//   box.addEventListener("click", schimbaCuloare);

//   const numeCuloare = document.createElement("span");

//   numeCuloare.classList.add("numeCuloare");
//   numeCuloare.innerText = Culoare;

//   // box.appendChild(numeCuloare);
//   container.appendChild(numeCuloare);
// }
// function schimbaCuloare() {
//   const text = document.getElementById("text");
//   text.style.color = this.style.backgroundColor;
// }

//sa se adauge numele culorii sub fiecare patrat

//sa se permita utilizatoruluisa aleaga o noua culoare din paleta de culori

const text = document.getElementById("text");

function schimbaCuloare(culoare) {
  text.style.color = culoare;
}

const paletaCulori = document.getElementById("paletaCulori");
paletaCulori.addEventListener("change", function () {
  schimbaCuloare(paletaCulori.value);
  text.innerHTML = paletaCulori.value;
});

const culoare = document.getElementById("culoare");

// culoare.addEventListener("change", (e) => {
//   const culoare = e.target.value;
//   const rosu = parseInt(culoare.substring(1, 3), 16);
//   const verde = parseInt(culoare.substring(3, 5), 16);
//   const albastru = parseInt(culoare.substring(5, 7), 16);
//   const rgb = [rosu, verde, albastru];
//   console.log(rgb);
// });

//sa se schimbe culoarea aleatoriu la un anumit interval

//#123456

//sa se genereze 10 culori aleatorii

function genereazaCuloare() {
  const culoareAleatorie1 = Math.floor(Math.random() * 255);
  const culoareAleatorie2 = Math.floor(Math.random() * 255);
  const culoareAleatorie3 = Math.floor(Math.random() * 255);
  const rgb = [culoareAleatorie1, culoareAleatorie2, culoareAleatorie3];
  return `rgb(${rgb.join(",")})`;
}

genereazaCuloare();

function afiseazaCuloareAleatorie() {
  const paletaAleatorie = document.getElementById("paletaAleatorie");
  paletaAleatorie.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    const culoareAleatorie = genereazaCuloare();
    const elemCuloare = document.createElement("div");
    elemCuloare.innerText = `Ai ales culoarea ${culoareAleatorie}`;
    elemCuloare.style.backgroundColor = culoareAleatorie;
    paletaAleatorie.appendChild(elemCuloare);
  }
}

afiseazaCuloareAleatorie();

//tema
//sa se creeze un calculator simplu cu functii de adunare scadere inmultire si impartire

//sa se genereze culoare aleatorie la interval de 5 secunde

//setInterval(afiseazaCuloareAleatorie, 5000);
