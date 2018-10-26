
//funktion som tar emot radien av en sphere och returnerar arean och volymen.
function Sphere(radie){ 
    return 'Volym: ' +  (4 * Math.PI *  Math.pow(radie, 3)/3).toFixed(0) + '\n' + 'Area: ' +  (4 * Math.PI * Math.pow(radie, 2)).toFixed(0)
}
    console.log(Sphere(4));
