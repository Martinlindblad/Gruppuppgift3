// Konstruktor hjälper till att skapa två objekt som är två personer. 

// Funktionen beskriver en personens information/uppgifter.  

function Person(namn, email, mobil) {
    this.namn = namn;
    this.email = email;
    this.mobil = mobil;
    this.adress = {};
    this.print = function(){
        return this.namn + '\n' + this.adress.gatuadress + '\n' + this.adress.postnummer + ' ' + this.adress.ort;
    }
}
let martin = new Person('Martin Lindblad', 'martin@gmail.com', 10293701273); 
martin.adress = {
    gatuadress: 'Hejvägen 3',
    postnummer: 14324,
    ort: 'Orten',
} 
let sebbe = new Person('sebbe', 'martin@gmail.com', 11293121273);
sebbe.adress = {
    gatuadress: 'Hejvägen 4',
    postnummer: 14324,
    ort: 'Förorten',
} 

// Skriver ut de två objekten med hjälp av funktionen
console.log(martin.print()); 
console.log(sebbe.print());