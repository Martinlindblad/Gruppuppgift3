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
    gatuadress: 'Samirvägen 3',
    postnummer: 14324,
    ort: 'Orten',
} 
let sebbe = new Person('sebbe', 'martin@gmail.com', 10293701273);
sebbe.adress = {
    gatuadress: 'Samirvägen 4',
    postnummer: 14324,
    ort: 'Förorten',
} 
console.log(martin.print()); 
console.log(sebbe.print());a