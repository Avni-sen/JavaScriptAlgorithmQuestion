export const firstReverse = (str) => {
    const arr = str.split("");
    const reverseArr = arr.reverse();
    const newStr = reverseArr.join("");
    return newStr;
    //kısa hali 
    //return str.split("").reverse().join(""); şeklindedir.

}

//reverse(): Dizinin elemanlarını tersine çevirir.
//split(): Diziyi belirtilen karaktere göre böler.
//join(): Dizinin elemanlarını birleştirir. 

// let reverse = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reverse += str[i];
    // }
    // return reverse;