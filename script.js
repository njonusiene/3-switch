// 3. Ciklų užduotis:

// 1. Padaryk, kad kompiuteris 10 kartų paconsole'intų tavo vardą

for (i = 1; i < 11; i++) {
    console.log("Neringa")
}

// 2. Pakoreguok pirmą pratimą, kad tiek vardas, tiek kiek kartų kartos - būtų kintamieji.

var x = 11
const vardas = "Neringa"

for (i = 1; i < x; i++) {
    console.log(vardas)
}

// 3. Prie savo vardo atspaudink ir 'i' raidę, t.y. kelintas ciklas yra (pvz.: "0. Petras", "1. Petras", "2. Petras")...

var i = 0;

while (i < 10) {
  i++; 
  console.log(i + " Neringa");
};

// Parašyk for loopą, kuris atspaudins nuo 10 iki 1 countdown konsolėje.

for (i = 10; i > 0; i--) {
    console.log(i)
}

