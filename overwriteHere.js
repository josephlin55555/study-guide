'use strict';

// Write and overwrite stuff here (algorithms, etc) for memorization purposes
const radixSort = (array, maximumValue = Math.max(...array)) => {
    const result = [],
        temporary = [];

    for (let i = 0; i <= maximumValue; i++)
        temporary.push(0);

    array.forEach(number => {
        temporary[number]++;
    });

    temporary.forEach((count, number) => {
        while (count--)
            result.push(number);
    });

    return result;
};

const quickSort = array => {
    if (array.length <= 1)
        return array;

    const pivotValue = array[0],
        leftArray = [],
        rightArray = [];

    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        current < pivotValue ? leftArray.push(current) : rightArray.push(current);
    }

    return quickSort(leftArray).concat(pivotValue, quickSort(rightArray));
};

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
        leftArray[0] < rightArray[0] ? result.push(leftArray.shift()) : result.push(rightArray.shift());
    }

    return result.concat(leftArray, rightArray);
};

const bubbleSort = array => {
    let oneMoreLoop = true;

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

const binarySearch = (array, targetVal) => {
    let lowIndex = 0,
        highIndex = array.length - 1;

    while (lowIndex <= highIndex) {
        const middleIndex = Math.floor((lowIndex + highIndex) / 2);

        if (array[middleIndex] < targetVal) {
            lowIndex = middleIndex + 1;
        } else if (array[middleIndex] > targetVal) {
            highIndex = middleIndex - 1;
        } else {
            return middleIndex;
        }
    }

    return null;
};

const normalSearch = (array, targetVal) => {
    const index = array.indexOf(targetVal);
    return index !== -1 ? index : null;
};

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


