'use strict';

// Radix Sort
const radixSort = (array, maximumValue = Math.max.apply(null, array)) => {
    // Alternate default param: maximumValue = Math.max(...array)

    const result = [],
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
const quickSort = array => {
    if (array.length <= 1)
        return array;

    const pivotValue = array[0],
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
const mergeSort = array => {
    if (array.length <= 1)
        return array;

    const middleIndex = Math.floor(array.length / 2),
        leftArray = array.slice(0, middleIndex),
        rightArray = array.slice(middleIndex);

    return mergeArrays(mergeSort(leftArray), mergeSort(rightArray));
};

const mergeArrays = (leftArray, rightArray) => {
    const result = [];

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
const bubbleSort = array => {
    const oneMoreLoop = true;

    while (oneMoreLoop) {
        oneMoreLoop = false;

        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                oneMoreLoop = true;

                const temporaryValue = array[i - 1];
                array[i - 1] = array[i];
                array[i] = temporaryValue;
            }
        }
    }

    return array;
};

// Binary Search
const binarySearch = (array, value) => {
    const lowIndex = 0,
        highIndex = array.length - 1;
    let middleIndex;

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
const normalSearch = (array, value) => {
    const index = array.indexOf(value);
    return index !== -1 ? index : null;
};

// Permutations With Repetition
const permutationsWithRepetition = (stringInput, outputLength = stringInput.length, stringAccumulator = '') => {
    if (stringAccumulator.length === outputLength)
        return [stringAccumulator];

    const result = [];

    Array.prototype.forEach.call(stringInput, (character, index) => {
        stringAccumulator += character;
        result = result.concat(permutationsWithRepetition(stringInput, outputLength, stringAccumulator));
        stringAccumulator = stringAccumulator.slice(0, stringAccumulator.length - 1);
    });

    return result;
};

// Permutations Without Repetition
const permutationsWithoutRepetition = (stringInput, outputLength = stringInput.length, stringAccumulator = '') => {
    if (stringAccumulator.length === outputLength)
        return [stringAccumulator];

    const result = [];

    Array.prototype.forEach.call(stringInput, (character, index) => {
        stringAccumulator += character;
        result.push(...permutationsWithoutRepetition(stringInput.slice(0, index) + stringInput.slice(index + 1), outputLength, stringAccumulator));
        stringAccumulator = stringAccumulator.slice(0, stringAccumulator.length - 1);
    });

    return result;
};

// Combinations With Repetition
const combinationsWithRepetition = (stringInput, outputLength = stringInput.length, stringAccumulator = '') => {
    if (stringAccumulator.length === outputLength)
        return [stringAccumulator];

    const result = [];

    Array.prototype.forEach.call(stringInput, (character, index) => {
        stringAccumulator += character;
        result = result.concat(combinationsWithRepetition(stringInput.slice(index), outputLength, stringAccumulator));
        stringAccumulator = stringAccumulator.slice(0, stringAccumulator.length - 1);
    });

    return result;
};

// Combinations Without Repetition
const combinationsWithoutRepetition = (stringInput, outputLength = stringInput.length, stringAccumulator = '') => {
    if (stringAccumulator.length === outputLength)
        return [stringAccumulator];

    const result = [];

    Array.prototype.forEach.call(stringInput, (character, index) => {
        stringAccumulator += character;
        result.push(...combinationsWithoutRepetition(stringInput.slice(index + 1), outputLength, stringAccumulator));
        stringAccumulator = stringAccumulator.slice(0, stringAccumulator.length - 1);
    });

    return result;
};













