import {userValidation} from './1_userValidation.js';
import {longestWord} from './2_longestWord.js';
import {firstFactorial} from './3_FirstFactorial.js';
import {firstReverse} from './4_firstReverse.js';
import {findIntersection} from './5_findIntersection.js';
import {questionMarks} from './6_questionMark.js';

console.log(userValidation('u__helloworld123')); // true
console.log(longestWord('func$? art')); // 'there,'
console.log(firstFactorial(4)); // 24
console.log(firstReverse("merhaba")); // abahrem
console.log(findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])); // 1,4,13
console.log(questionMarks("acc?7??sss?3rr1??????5")); // true