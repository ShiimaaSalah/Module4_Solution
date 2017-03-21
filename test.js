/*global console*/
var myNames = [
    'ahmed',
    'jon',
    'jamela',
    'Asmaa',
    'Jody',
    'jehad',
    'mohamed'
];

console.log(myNames);

var i;

for (i = 0; i < myNames.length; i = i + 1) {
        
    var myName = myNames[i],
        
        result = myName.match(/(\bj\S+\b)/ig);
    
    if (result) {
        
        console.log("Goodbye" + " " + myName);
    
    } else {
        
        console.log("Hello" + " " + myName);
    }
}