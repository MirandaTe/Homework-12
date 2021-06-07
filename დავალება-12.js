
// homework - 1

function inEven(x) {
	if (x%2 === 0)
		return true;
    
	else 
		return false;
}

console.log (inEven(3)) // false
console.log (inEven(4)) // true


// homework - 2

function S(a, b) {
    return a*b;
}

console.log(S(2, 3)) // 6


// homework - 3

function S(x) {
    return x*x;
};

console.log(S(5)) // 25


// homework - 4

function getRandom() {
    return Math.random()* 100;
};

console.log(getRandom()) // 73.03186691488592; 52.57174599534324; 60.66923920069356 ...


// homework - 5

function getRandom(a, b) {
      if (a<b) {
      return Math.random()* b;
    }
    else if (a>b) return Math.random()* a; 
    else return a || b;
}

         //   ასევე კეთდება ამ კოდითაც

function number(a, b){
    return Math.floor(Math.random() * (b - a)) + a; 
}


// homework - 6

function Pupils(a){
    let Boys = ['Nika', 'Giorgi', 'Luka', 'Dato', 'Temo', 'Levani', 'Vano', 'Misha', 'Paata', 'Tornike'];
    let Girls = ['Nino', 'Mari', 'Lika', 'Teo', 'Anna', 'Qeti', 'Nana', 'Nato', 'Nona', 'Liza'];
    if(a === 'Boys'){
        return Boys[Math.round(Math.random()*10)];
    } if(a === 'Girls'){
        return Girls[Math.round(Math.random()*10)];
    }
    else return 'Pupils';
}

console.log(Pupils('Boys')) // Luka; Dato; ...
console.log(Pupils('Girls')) // Nato; Anna; ...
console.log(Pupils()) // Pupils;


// homework - 7

function Year(x) {
    if ((0 == x % 4) && (0 != x % 100) || (0 == x % 400)) {
        return true;
    } else {
        return false;
    }
}

console.log(Year(2021)) // false
console.log (Year(2024)) // true


// homework - 8

function V(a, b, c) {
    return a*b*c;
}

console.log(S(2, 3, 4)) // 24


