'use strict'

document.addEventListener('DOMContentLoaded', function () {
    console.log('CONTENT LOADED');
    // ---------------------
    // Define a function that takes a string and an integer of i and creates a new array of 
    // length i where each value is equal to the string passed in
    // myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
    // ---------------------

    // Put your answer below -------------------------
    function makeArr(string, i) {
        let arr = [];
        while (i>0) {
            arr.push(string);
            i--;
        }
        return arr;
    };

    console.log(makeArr("dog", 5));
    
    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array and reverses all the values in an array
    // The function should not mutate the original array
    // ---------------------

    // Put your answer below -------------------------
    function reverseArr(a) {
        let revArr = [];
        a.forEach((e) => revArr.unshift(e));
        return revArr;
    };

    console.log(reverseArr([1, 2, 3, 4, 5]));
    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array and removes all falsy values from the array
    // ---------------------

    // Put your answer below -------------------------
    function removeFalse(a) {
        let newArr = a.filter((e) => e);
        return newArr;
    };

    console.log(removeFalse([true, 0, true, false, null, undefined, 6, 7]));

    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array of nested arrays and returns an object composed 
    // of propeties equal to each nested array
    // const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
    // returns { name: 'Charlie', color: 'brown', age: 10 };
    // ---------------------

    // Put your answer below -------------------------
    function convertToObject(a) {
        let obj = {};
        for (let i=0; i<a.length; i++) {
            for (let j=0; j<a[i].length-1; j++) {
                obj[a[i][j]] = a[i][j+1];
            };
        };
        return obj;
    };

    console.log(convertToObject([['name', 'Charlie'], ['color', 'brown'], ['age', 10]]));
    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array and removes duplicate values
    // [1,2,3,4,5,4,3] should return [1,2,3,4,5]
    // ---------------------

    // Put your answer below -------------------------
    function removeDuplicates(a) {
        let test;
        for (let i=0; i<a.length; i++) {
            test = a[i];
            a.forEach((e, index) => {
                if (e === test) {
                    a.splice(index, 1);
                }
            });
            a.splice(i, 0, test);
        };
        return a.sort();
    };

    console.log(removeDuplicates([1,2,3,4,5,4,3]));
    // -----------------------------------------------

    // ---------------------
    // Define a function that takes two arrays and returns true if they have identical values (order does not matter), 
    // it should return false otherwise
    // [1,2,3,4] and [1,2,3,4] should return true
    // [1,2,3,4,5] and [1,2,3,4] should return false
    // [1,2,3,4] and [1,2,3,4,4] should return false
    // [1,2,3,4] and [1,4,3,2] should return true
    // ---------------------

    // Put your answer below -------------------------
    function testIdenticalValues(array1, array2) {
        array1.sort();
        array2.sort();
        if (array1.length !== array2.length) {
            return false;
        };
        for (let i=0; i<array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        };
        return true;
    };

    console.log(testIdenticalValues([2,1,4,3],[1,2,3,4]));
    // -----------------------------------------------

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //            ___  ____  _  ____  ______        //
    //           / _ )/ __ \/ |/ / / / / __/        //
    //          / _  / /_/ /    / /_/ /\ \          //
    //         /____/\____/_/|_/\____/___/          //
    //                                              //
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////

    // ---------------------
    // Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
    // [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
    // [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
    // DO NOT USE Array.prototype.flat()
    // ---------------------

    // Put your answer below -------------------------
    // function oneArray(a) {
    //     let newArr = [];
    //     for (let i=0; i<a.length; i++) {
    //         if (Array.isArray(a[i])) {
    //             for (let j=0; j<a[i].length; j++) {
    //                 newArr.push(a[j]);
    //         } else {
    //             newArr.push(a[i]);
    //         };
    //     };
    //     return newArr;
    // };
    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array and splits it into parts of size i
    // ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
    // ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
    // ---------------------

    // Put your answer below -------------------------
    // function splitArray(a, i) {
    //     let numArrays = Math.ceil(a.length/i);
    //     for (let j=0; j<numArrays; j++) {
            
    //     }

    // };
    // const fruits2 = new Array("Apple", "Banana");
    // -----------------------------------------------
});