function factorial(tal){                // Funktion som tar in ett värde från användaren och retrunerar 
    if (tal === 0){
        return 1;
    }else if(tal > 170){
        return "JS bug! Inmatning över 170 blir Infinity"; // Snabb lösning för Infinity
    } else{
        return tal * factorial(--tal);   
    }
}
let tal = prompt("Ange ett heltal mellan 1-1000: ")
document.write(factorial(tal))
