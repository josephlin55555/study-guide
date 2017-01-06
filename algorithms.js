'use strict';

// Radix Sort
let radixSort = (array, maximumValue = Math.max.apply(null, array)) => {
    // Alternate default param: maximumValue = Math.max(...array)

    let result = [],
        valuesToIndices = [];

    for (let i = 0; i <= maximumValue; i++)
        valuesToIndices.push(0);

    array.forEach(number => {
        valuesToIndices[number]++;
    });

    valuesToIndices.forEach((count, number) => {
        while (count--)
            result.push(number);
    });

    return result;
};

// Quicksort
let quickSort = array => {
    if (array.length <= 1)
        return array;

    let pivotValue = array[0],
        leftArray = [],
        rightArray = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivotValue) {
            leftArray.push(array[i]);
        } else {
            rightArray.push(array[i]);
        }
    }

    return quickSort(leftArray).concat(pivotValue, quickSort(rightArray));
};

// Merge Sort
let mergeSort = array => {
    if (array.length <= 1)
        return array;

    let middleIndex = Math.floor(array.length / 2),
        leftArray = array.slice(0, middleIndex),
        rightArray = array.slice(middleIndex);

    return mergeArrays(mergeSort(leftArray), mergeSort(rightArray));
};

let mergeArrays = (leftArray, rightArray) => {
    let result = [];

    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0]) {
            result.push(leftArray.shift());
        } else {
            result.push(rightArray.shift());
        }
    }

    return result.concat(leftArray, rightArray);
};

// Bubble Sort
let bubbleSort = array => {
    let oneMoreLoop = true;

    while (oneMoreLoop) {
        oneMoreLoop = false;

        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                oneMoreLoop = true;

                let temporaryValue = array[i - 1];
                array[i - 1] = array[i];
                array[i] = temporaryValue;
            }
        }
    }

    return array;
};

// Binary Search
let binarySearch = (array, value) => {
    let lowIndex = 0,
        middleIndex,
        highIndex = array.length - 1;

    while (lowIndex <= highIndex) {
        middleIndex = Math.floor((lowIndex + highIndex) / 2);

        if (array[middleIndex] > value) {
            highIndex = middleIndex - 1;
        } else if (array[middleIndex] < value) {
            lowIndex = middleIndex + 1;
        } else {
            return middleIndex;
        }
    }

    return null;
};

// Normal Search
let normalSearch = (array, value) => {
    let index = array.indexOf(value);
    return index !== -1 ? index : null;
};

// Permutations With Repetition
let permutationsWithRepetition = (stringInput, outputLength = stringInput.length, stringAccumulator = '') => {
    if (stringAccumulator.length === outputLength)
        return [stringAccumulator];

    let result = [];

    Array.prototype.forEach.call(stringInput, (character, index) => {
        stringAccumulator += character;
        result = result.concat(permutationsWithRepetition(stringInput, outputLength, stringAccumulator));
        stringAccumulator = stringAccumulator.slice(0, stringAccumulator.length - 1);
    });

    return result;
};

// Permutations Without Repetition
let permutationsWithoutRepetition = (stringInput, outputLength = stringInput.length, stringAccumulator = '') => {
    if (stringAccumulator.length === outputLength)
        return [stringAccumulator];

    let result = [];

    Array.prototype.forEach.call(stringInput, (character, index) => {
        stringAccumulator += character;
        result.push(...permutationsWithoutRepetition(stringInput.slice(0, index) + stringInput.slice(index + 1), outputLength, stringAccumulator));
        stringAccumulator = stringAccumulator.slice(0, stringAccumulator.length - 1);
    });

    return result;
};

// Combinations With Repetition
let combinationsWithRepetition = (stringInput, outputLength = stringInput.length, stringAccumulator = '') => {
    if (stringAccumulator.length === outputLength)
        return [stringAccumulator];

    let result = [];

    Array.prototype.forEach.call(stringInput, (character, index) => {
        stringAccumulator += character;
        result = result.concat(combinationsWithRepetition(stringInput.slice(index), outputLength, stringAccumulator));
        stringAccumulator = stringAccumulator.slice(0, stringAccumulator.length - 1);
    });

    return result;
};

// Combinations Without Repetition
let combinationsWithoutRepetition = (stringInput, outputLength = stringInput.length, stringAccumulator = '') => {
    if (stringAccumulator.length === outputLength)
        return [stringAccumulator];

    let result = [];

    Array.prototype.forEach.call(stringInput, (character, index) => {
        stringAccumulator += character;
        result.push(...combinationsWithoutRepetition(stringInput.slice(index + 1), outputLength, stringAccumulator));
        stringAccumulator = stringAccumulator.slice(0, stringAccumulator.length - 1);
    });

    return result;
};













