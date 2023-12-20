// 1.Utilizzare ciclo for per creare una serie di numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    // 2. Calcolare i multipli di 3, di 5 e di entrambi usando "if" e il resto della divisione
    if (i % 3 === 0) {
        // 3. Stampare la parola Fizz al posto dei multipli di 3
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        // 3. Stampare la parola Buzz al posto dei multipli di 5
        console.log("Buzz");
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        // 3. Stampare la parola FizzBuzz al posto dei multipli di 3 e 5
        console.log("FizzBuzz");
    }
    else {
        console.log(i);
    }
}

