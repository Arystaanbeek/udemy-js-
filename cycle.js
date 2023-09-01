// Task for us
for ( let i = 5; i <= 10; i++) {
    console.log(i)
}

for ( let i = 20; i >= 10; i--) {
    if (i === 13) break
    console.log(i)
}

for ( let i = 2; i <= 10; i++) {
    if ( i % 2 != 0) continue
    console.log(i)
}

let i = 2;
while (i <= 16) {
    if (i % 2 === 0) {
        ++i;
        continue;
    } else {
        console.log(i);
        ++i;
    }
}

const arrayOfNumbers = [];

for (let i = 5; i <= 10; i++) {
    arrayOfNumbers[i-5] = i;
}
console.log(arrayOfNumbers)


return arrayOfNumbers;
// end task 

// Work for us

let symbol = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for(let j = 0; j < i; j++) {
        symbol += '#';
    }

    symbol += '\n';
}

console.log(symbol);


first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}
// end work

// task for cycle level 2

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    for ( let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    console.log(result)

    // Пишем решение вот тут
    
    
    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === typeof(i)) {
            data[i] = data[i] * 2;
        } else {
            data[i] = data[i] + '-done'
        }
    }
    
    console.log(data)
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i-1] = data[data.length - i];
    }

    console.log(result)
    // Пишем решение вот тут
    
    
    // Не трогаем
    return result;
}