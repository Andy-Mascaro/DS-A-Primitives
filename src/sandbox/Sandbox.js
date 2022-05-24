
const line = 'alchmey rocks gold';
function reverseWords(sentence) {
    return sentence [ ymehcla skcor dlog ] | [ 'ymehcla', 'skcor ', 'dlog' ] | alchmey rocks gold 
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

reverseWords('alchemy rocks gold'); ymehcla skcor dlog


function titleCase(sentence) {
    return sentence [ 'Alchemy' 'Rocks' 'Gold' ] | [ 'aLcHeMy', 'RoCks', 'gOlD' ]
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
console.log(oddishOrEvenish(122));
}

function at(arr, index) {

}

function fizzBuzz(n) { 
    let array = [];
    for (let i= 1; i <= 16; i++)  
    {let num =''; 
        if ( i % 3 === 0) {
        num + 'Fizz';
    } else if ( i % 5 === 0) { num + 'Buzz';
}     else{ num =i;
    array.push(num);
}
    return array;
    console.log(fizzBuzz);
}
}
  

