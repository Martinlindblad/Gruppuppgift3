function factorial(tal){                // Funktion som tar in ett värde
    if (tal === 1){
        return 1;
    }
    else{
        return (tal * factorial(--tal));
    }
}
let tal = prompt("Ange ett tal mellan 1-1000: ")
document.write(factorial(tal))