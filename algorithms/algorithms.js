const swap = (array, index, index2) => {
    const temporaryValue = array[index];
    array[index] = array[index2];
    array[index2] = temporaryValue;
};

const randomGenerator = (minimumInteger, maximumInteger) => Math.floor(Math.random() * (maximumInteger - minimumInteger + 1) + minimumInteger);

const fisherYatesShuffle = array => {
    return array
        .slice()
        .map((element, index, list) => {
            const randomIndex = randomGenerator(index, list.length - 1);
            swap(list, index, randomIndex);
            return list[index];
        });
};

const normalSearch = (array, targetValue) => {
    const index = array.indexOf(targetValue);
    return index > -1 ? index : null;
};

const binarySearch = (array, targetValue) => {
    let lowIndex = 0,
        highIndex = array.length - 1;

    while (lowIndex <= highIndex) {
        const middleIndex = Math.floor(lowIndex + (highIndex - lowIndex) / 2);

        if (array[middleIndex] < targetValue) {
            lowIndex = middleIndex + 1;
        } else if (array[middleIndex] > targetValue) {
            highIndex = middleIndex - 1;
        } else {
            return middleIndex;
        }
    }

    return null;
};

const permutationsWithRepetition = (stringInput, outputLength = stringInput.length, stringAccumulator = '') => {
    if (stringAccumulator.length === outputLength) {
        return [stringAccumulator];
    }

    let result = [];

    Array.prototype.forEach.call(stringInput, (character, index) => {
        stringAccumulator += character;
        result = result.concat(permutationsWithRepetition(stringInput, outputLength, stringAccumulator));
        stringAccumulator = stringAccumulator.slice(0, stringAccumulator.length - 1);
    });

    return result;
};

const permutationsWithoutRepetition = (stringInput, outputLength = stringInput.length, stringAccumulator = '') => {
    if (stringAccumulator.length === outputLength) {
        return [stringAccumulator];
    }

    let result = [];

    Array.prototype.forEach.call(stringInput, (character, index) => {
        stringAccumulator += character;
        result = result.concat(permutationsWithoutRepetition(stringInput.slice(0, index) + stringInput.slice(index + 1), outputLength, stringAccumulator));
        stringAccumulator = stringAccumulator.slice(0, stringAccumulator.length - 1);
    });

    return result;
};

const combinationsWithRepetition = (stringInput, outputLength = stringInput.length, stringAccumulator = '') => {
    if (stringAccumulator.length === outputLength) {
        return [stringAccumulator];
    }

    let result = [];

    Array.prototype.forEach.call(stringInput, (character, index) => {
        stringAccumulator += character;
        result = result.concat(combinationsWithRepetition(stringInput.slice(index), outputLength, stringAccumulator));
        stringAccumulator = stringAccumulator.slice(0, stringAccumulator.length - 1);
    });

    return result;
};

const combinationsWithoutRepetition = (stringInput, outputLength = stringInput.length, stringAccumulator = '') => {
    if (stringAccumulator.length === outputLength) {
        return [stringAccumulator];
    }

    let result = [];

    Array.prototype.forEach.call(stringInput, (character, index) => {
        stringAccumulator += character;
        result = result.concat(combinationsWithoutRepetition(stringInput.slice(index + 1), outputLength, stringAccumulator));
        stringAccumulator = stringAccumulator.slice(0, stringAccumulator.length - 1);
    });

    return result;
};

const bubbleSort = array => {
    let oneMoreLoop = true;

    while (oneMoreLoop) {
        oneMoreLoop = false;

        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                oneMoreLoop = true;
                swap(array, i, i - 1);
            }
        }
    }

    return array;
};

const radixSort = (array, maximumInteger = Math.max.apply(null, array)) => {
    // Can also be maximumInteger = Math.max(...array)
    const result = [],
        temporary = [];

    for (let i = 0; i <= maximumInteger; i++) {
        temporary.push(0);
    }

    array.forEach(integer => temporary[integer]++);
    temporary.forEach((count, integer) => {
        for (let i = 0; i < count; i++) {
            result.push(integer);
        }
        // Can also be while (count--) result.push(integer);
    });

    return result;
};

const mergeSort = array => {
    if (array.length <= 1) {
        return array;
    }

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

const quickSort = array => {
    if (array.length <= 1) {
        return array;
    }

    const pivotValue = array[0],
        leftArray = [],
        rightArray = [];

    array
        .slice(1)
        .forEach(element => {
            if (element < pivotValue) {
                leftArray.push(element);
            } else {
                rightArray.push(element);
            }
        });

    return quickSort(leftArray).concat(pivotValue, quickSort(rightArray));
};

