function randomDice(){ // Funktion som skapar 1000 slumpmässiga tal. 
    let array = [];
    for(let i = 1 ; i <= 1000 ; i++){
        array.push((Math.floor(Math.random() * 6) + 1 )   );
    }
    return array;     // Returnerar arrayen med talen 
}

function print(){     // Funktionen skriver ut antal av varje tal. 
    let arr = randomDice();  // kallar på funktion 1 och lagrar de slumpmässiga talen i en ny variabel.
    let number = {one: 0, two: 0, three: 0, four: 0, five: 0, six: 0}; // Objekt tar emot antalet som deklareras nedanför.
  
    for(let i = 0; i < arr.length; i++) {   // Switch caset tar emot ett värde och matchar med rätt tal för att öka rätt object property. 
        switch(arr[i]){
        case 1: number.one += 1 ; break;
        case 2: number.two += 1 ; break;
        case 3: number.three += 1 ; break;
        case 4: number.four += 1 ; break;
        case 5: number.five += 1 ; break;
        case 6: number.six += 1 ; break;
    }
    }
    return ` 
      1: ${number.one}
      2: ${number.two}
      3: ${number.three}
      4: ${number.four}
      5: ${number.five}
      6: ${number.six}
    `;  
}   
console.log(print());

