// TODO: add your solutions here!

//1. Build your own concatenation

function combineWords(word1, word2) {
    // TODO: Place your code here
    return word1 + word2;
}

var result = combineWords('dog', 'house');
console.log(result);
// displays 'doghouse'


//2. Repeat a phrase
function repeatPhrase(phrase, n) {
    // TODO: Place your code here
    for(var i = 0; i < n; i++) {
        console.log(phrase);
    }
}

repeatPhrase("Hello", 5);
// displays
// Hello
// Hello
// Hello
// Hello
// Hello

//3. Build your own Power function

function toTheNthPower(number, power) {
    // TODO: Place your code here
    var  r = 1;
    for (var i = 0; i < power; i++) {
     r *= number;
}
 return r;
}

var result = toTheNthPower(4, 5);
console.log(result);
// displays 1024

//4. Area of a circle: π r2

function areaOfACircle(radius) {
    // TODO: Place your code here
    var r = radius * radius;
    var pi = Math.PI * r;
    return pi;
}

var result = areaOfACircle(2);
console.log(result);
// displays approximately 12.57

//5. Pythagorean Theorem: a2 + b2 = c2
function pythagoreanTheorem(a, b) {
    // TODO: Place your code here
    var square = (a * a) + (b * b);
     var root = Math.sqrt(square);
         return (root);
}

var result = pythagoreanTheorem(3, 4);
console.log(result);
// should display 5;

//6. Is X Evenly Divisible by Y ?

function isXEvenlyDivisibleByY(x, y) {
    // TODO: Place your code here
    if (x % y){
       return true;
    } else{
        return false;
    }


}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);
// displays true

//7. Vowel Count:
function countVowels(word) {
    // TODO: Place your code here
    var i = 0;
    for (var i = 0; i < word.length; i++) {
    if( word[i] === "a"|| word[i] === "e" || (word[i] === "i" || word[i] === "o" || word[i] === "u" || word[i] === "y"){
        i++;
    }

}
return i;
}

var result = countVowels("stealing");
console.log(result);
// displays 3


//8. Does the array contain "wdi"

    function findWdi(arr){
        // TODO: Place your code here
      for(var i = 0; i < arr.length; i++) {
          if (arr[i] === 'wdi'){
              return true;
          }

      }
       return false;

    }

   findWdi([9,'Bart Simpson', true, 'wdi']) // returns true

//9. Build an ASCII Triangle!
function printTriangle(length) {
    // TODO: Place your code here

    for(var i = 0; i < length; i++){
        console.log("*") ;
    }
}

printTriangle(3);
// displays
// *
// **
// ***

//10. Stretch Challenge: Can you alter the printTriangle function to create a Pyramid?
function printPyramid(length) {
	for(var i = 1; i <= length; i++) {
		var tier = '';

		for(var j = length - i; j > 0; j--) {
			tier += ' ';
		}
		for(var k = 0; k < i; k++) {
			tier += '* ';
		}
		console.log(tier);
	}
}
printPyramid(10);
