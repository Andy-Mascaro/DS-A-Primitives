function reverseWords(sentence) {
    return sentence 
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

reverseWords('alchemy rocks gold'); 


function titleCase(sentence) {
    return sentence
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

titleCase('aLcHeMy RoCkS gOlD');

function oddishOrEvenish (num){ 
    const sum = num
    .toString()
    .split('')
    .reduce((total, n) => {total += Number(n); 
    return total;
}, 0);

return sum % 2 === 0 ? 'Evenish' : 'Oddish';

}
oddishOrEvenish(121);
oddishOrEvenish(45);


function at(arr, index) {

}

function fizzBuzz(n) { 16
    let array = [];

    for (let i = 1; i <= n; i++)  
    { if (i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz');
    } else if ( i % 3 === 0) 
    { array.push('Fizz');
    } else if ( i % 5 === 0)
    { array.push('Buzz');
    } else{ array.push(i);
    console.log(fizzBuzz);
}
   
}
return array;
}
fizzBuzz(16);
  

function anagrams(wordOne, wordTwo) {
    const sortLetters = (word) => word.split('').sort().join('');
        console.log(sortLetters)
    return sortLetters(wordOne) === sortLetters(wordTwo); 
    
}

anagrams('mad', 'dam');