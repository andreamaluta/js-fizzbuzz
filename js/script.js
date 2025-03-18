// scrivo il ciclo per stampare tutti i numeri da 1 a 100
for(let i=1; i<=100; i++){
    
    // metto le condizioni per controllare se divisibile
    // controllo se è divisibile sia per 3 che per 5
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    // controllo se è divisibile per 5
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    // controllo se è divisibile per 3
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    // se non è divisibile ne per 3 ne per 5
    else{
        console.log(i);
    }

}