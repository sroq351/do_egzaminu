// Przykład tablicy z danymi
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const people = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 18 },
    { name: 'David', age: 30 }
];
// 1. forEach() - Iteracja po tablicy
console.log(' forEach() - Iteracja po tablicy:');
numbers.forEach(num => {
    console.log(num);  // Wypisuje każdą liczbę
});

// 2. map() - Przekształcenie elementów w tablicy
console.log( 'map() - Przekształcanie i zwrocenie nowej tablicy ');
const incrementedNumbers = numbers.map(num => num + 1);
console.log(incrementedNumbers);  // Wypisuje [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// 3. filter() - Filtrowanie elementów w tablicy
console.log( 'filter() - Liczby większe niż 5:');
const largeNumbers = numbers.filter(num => num > 5);
console.log(largeNumbers);  // Wypisuje [6, 7, 8, 9, 10]

// 4. reduce() - Suma wszystkich liczb w tablicy
console.log('. reduce() - Suma liczb:');
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Wypisuje 55

// 5. find() - Znalezienie pierwszego elementu, który spełnia warunek
console.log(' find() - Pierwsza pełnoletnia osoba:');
const firstAdult = people.find(person => person.age >= 18);
console.log(firstAdult);  // Wypisuje { name: 'Alice', age: 22 }

// 6. indexOf() - Znajdowanie indeksu elementu
console.log(' indexOf() - Indeks liczby 6:');
const index = numbers.indexOf(6);
console.log(index);  // Wypisuje 5 (indeks liczby 6)

// 7. slice() - Wyciąganie części tablicy (wycinanie tablicy)
console.log(' slice() - Pierwsze 5 elementów:');
const firstFiveNumbers = numbers.slice(0, 5);
console.log(firstFiveNumbers);  // Wypisuje [1, 2, 3, 4, 5]

// 8. sort() - Sortowanie tablicy liczb
console.log(' sort() - Sortowanie liczb rosnąco:');
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log(sortedNumbers);  // Wypisuje [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 9. splice() - Usuwanie elementów z tablicy
console.log(' splice() - Usuwanie 2 elementów od indeksu 2:');
const removedNumbers = numbers.splice(2, 2);  // Usuwamy 2 elementy zaczynając od indeksu 2
console.log(removedNumbers);  // Wypisuje [3, 4]
console.log(numbers);  // Wypisuje [1, 2, 5, 6, 7, 8, 9, 10] (tablica po usunięciu elementów)

// 10. includes() - Sprawdzanie, czy tablica zawiera dany element
console.log('includes() - Czy tablica zawiera liczbę 5?');
const containsFive = numbers.includes(5);
console.log(containsFive);  // Wypisuje true

// 11. join() - Łączenie elementów tablicy w jeden string
console.log(' join() - Łączenie liczb w jeden ciąg:');
const numbersString = numbers.join(', ');
console.log(numbersString);  // Wypisuje '1, 2, 5, 6, 7, 8, 9, 10'

// 12. reverse() - Odwracanie tablicy
console.log(' reverse() - Odwrócenie tablicy:');
const reversedNumbers = [...numbers].reverse();
console.log(reversedNumbers);  // Wypisuje [10, 9, 8, 7, 6, 5, 2, 1]

// 13. find() - Znalezienie pierwszego elementu w tablicy obiektów
console.log(' find() - Pierwsza osoba, która jest pełnoletnia:');
const firstAdultPerson = people.find(person => person.age >= 18);
console.log(firstAdultPerson);  // Wypisuje { name: 'Alice', age: 22 }

/*forEach(): Iteruje po tablicy i wykonuje podaną funkcję dla każdego elementu.
map(): Przekształca każdy element w tablicy, tworząc nową tablicę z wynikami transformacji.
filter(): Filtrowanie elementów w tablicy na podstawie warunku (np. wybieranie tylko liczb większych niż 5).
reduce(): Używane do wykonania operacji na wszystkich elementach tablicy (np. suma wszystkich liczb).
find(): Znajduje pierwszy element, który spełnia określony warunek.
indexOf(): Zwraca indeks pierwszego wystąpienia elementu w tablicy (lub -1, jeśli element nie istnieje).
slice(): Tworzy nową tablicę zawierającą część oryginalnej tablicy (np. pierwsze 5 elementów).
sort(): Sortuje elementy tablicy (w tym przypadku rosnąco).
splice(): Używane do usuwania lub dodawania elementów w określonym miejscu tablicy.
includes(): Sprawdza, czy tablica zawiera określony element.
join(): Łączy elementy tablicy w jeden ciąg znaków.
reverse(): Odwraca kolejność elementów w tablicy*/