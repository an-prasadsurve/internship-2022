console.log('Hi everyone');
const str = 'hello dear';
const idOdd = str => str.length % 2 === 1;
const reverseOddWords = (str = '') => {
   const strArr = str.split(' ');
   return strArr.reduce((acc, val) => {
      if(idOdd(val)){
         acc.push(val.split('').reverse().join(''));
      return acc;
   };
   acc.push(val);
   return acc;
   }, []).join(' ');
};
console.log(reverseOddWords(str));




