// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var results = 0;
  _.each(numbers, function(num) {
    if (num % 5 === 0) {
      results++;
    }
  });
  return results;

};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(fruit) {
    if (targetFruit === fruit) {
      return fruit;
    }
  });

};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter (fruits, function(fruit) {
    if (letter === fruit[0]) {
      // console.log(fruit);
      return fruit;
    }
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(dessert) {
    if (dessert === 'cookie') {
      return dessert;
    }
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce (products, function(total, element) {
    console.log(element.price);
    // element.price = parseFloat(element.price.replace('$', ''));
    return total + parseFloat(element.price.substring(1));
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  //I - object
  //O - object
  //C - none
  //E - none

  // pseudocode
  // use reduce and access desserts object, function to have memo and dessert, no starting value
    // if memo[dessert] is unedfined
      // add memo dessert plus one
    // else
      // add one to the memo dessert

  dessertTypeList = {};
  _.reduce(desserts, function(allTheDesserts, dessert) {
    console.log(dessert.type);
    if (dessertTypeList[dessert.type] === undefined) {
      dessertTypeList[dessert.type] = 1;
    } else {
      dessertTypeList[dessert.type]++;
    }
  }, {});
  return dessertTypeList;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  listOfMovies = [];
  _.reduce(movies, function(list, movie) {
    // console.log(movie);
    // console.log(movie.releaseYear);
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      // console.log(movie.title);
      listOfMovies.push(movie.title);
    }
  }, []);
  // console.log(listOfMovies);
  return listOfMovies;

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  console.log(movies);
  return _.reduce(movies, function(movieOptions, movie) {
    console.log(movie.runtime);
    if (movie.runtime < timeLimit) {
      return true;
    }
    console.log(movieOptions);
    return movieOptions;
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  console.log(desserts);
  return _.map(desserts, function (dessert) {
    if (!dessert.ingredients.includes('flour')) {
      dessert.glutenFree = true;
      return dessert;
    } else {
      dessert.glutenFree = false;
      return dessert;
    }
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
// I - array of objects
// O - array of objects with salePrice added
// C - salePrice to be rounded to 2 decimal places.
// E - none

// pseudocode
// return .reduce with groceries as list and product as iteratee
  // create currentsalePrice var with price multiplied by coupon. round to two decimal places
  // add currentsalePrice as value to salePrice key in current product

var applyCoupon = function(groceries, coupon) {
  console.log(groceries);
  console.log(coupon);
  return _.map(groceries, function(product) {
    var currentPrice = parseFloat(product.price.substring(1));
    var currentsalePrice = (currentPrice - (currentPrice * coupon)).toFixed(2);
    console.log(currentsalePrice);
    product.salePrice = '$' + currentsalePrice;
    return product;
  });
};
