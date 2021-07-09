console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let favoriteFood = [ 'chicken', 'onion', 'mushrooms', 'potato' ];

// 1.b. TODO: Log your array of foods to the console with a message, similar
//      to the example above
console.log('Favorite food:', favoriteFood);

// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---', favoriteFood.length);


// Example: How many animals are in the array?
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('Number of foods items are', favoriteFood.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array
console.log('Secone animal is', animalArray[1]);
console.log('Third animal is', animalArray[2]);


// 3.b. TODO: Log the last animal in the array using it's array index
console.log('Fourth animal is', animalArray[3]);


// 3.c. (STRETCH) TODO: Log the last animal by using the array length,
//      instead of the exact index number of the last item
console.log('Fourth animal is', animalArray[animalArray.length - 1]);



// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
favoriteFood.push('tacos');
console.log('Added a new food item', favoriteFood);


// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array &
//      log both the food removed and the updated array
let removedFood = favoriteFood.pop();
console.log('Removed the last favorite food', removedFood);
console.log('The favorite foods are now', favoriteFood);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array

favoriteFood.unshift('burrito');
console.log(`Added an food item to beginning: ${favoriteFood}`);


// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array &
//     log both the food removed and the updated array
removedFood = favoriteFood.shift();
console.log('removed the first food', removedFood);
console.log('The Food item are now', favoriteFood);
