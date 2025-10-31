//hw4.js


/*=================== Homework 4 JavaScript Foundations ===================*/

/***************************************************************
* exerciseOne
* Fix spacing, semicolons, and variable naming to follow style.
*======================================
* Input: none
* Output: logs the value of thisIsANewVariable
***************************************************************/
function exerciseOne() {
	var thisIsANewVariable = 10;
	if (thisIsANewVariable == 10) {
	   console.log("thisIsANewVariable = " + thisIsANewVariable);
	}
}


/***************************************************************
* exerciseTwo
* Create three variables: a template string, a decimal number, and a boolean.
*======================================
* Input: none
* Output: logs all three variable values
***************************************************************/
function exerciseTwo() {
    let stringVariable = `Here is some text`;
    let floatVariable = 6.9;
    let booleanVariable = true;

    console.log("stringVariable = " + stringVariable + " " + typeof stringVariable);
	console.log("floatVariable = " + floatVariable + " " + typeof floatVariable);
	console.log("booleanVariable = " + booleanVariable + " " + typeof booleanVariable)
}


/***************************************************************
* exerciseThree
* Show a variable named currentScore and explain its meaning using a comment.
*======================================
* Input: none
* Output: logs the currentScore value
***************************************************************/
function exerciseThree() {
    //currentScore represents the player's current total points in the game
    let currentScore = 95;

    console.log("The currentScore value is:", currentScore);
}


/***************************************************************
* exerciseFour
* Compare the string '100' and the number 100 using loose (==) and strict (===) equality.
*======================================
* Input: none
* Output: logs results of == and === comparisons
***************************************************************/
function exerciseFour() {
    let stringOneHundred = '100';
    let numericOneHundred = 100;

    let valueEquality = (stringOneHundred == numericOneHundred);
    let absoluteStrictEquality = (stringOneHundred === numericOneHundred);

    console.log("Value equality (==) result:", valueEquality);
    console.log("Absolute strict equality (===) result:", absoluteStrictEquality);
}


/***************************************************************
* exerciseFive
* Use a ternary operator to set 'schedule' to 'Day off' if isWeekend is true, otherwise 'Work day'.
*======================================
* Input: none (uses isWeekend inside function)
* Output: logs the calculated schedule
***************************************************************/
function exerciseFive() {
    let isWeekend = true;
    let schedule = isWeekend ? "Day off" : "Work day";

    console.log("Calculated schedule based on isWeekend:", schedule);
}


/***************************************************************
* exerciseSix
* Check if userAge is 18 or older. If yes, print "Access Granted", else "Access Denied".
*======================================
* Input: none (uses userAge inside function)
* Output: logs access status
***************************************************************/
function exerciseSix() {
    let userAge = 16;

    if (userAge >= 18) {
        console.log("Access Granted");
    } else {
        console.log("Access Denied");
    }
}


/***************************************************************
* exerciseSeven
* Check two conditions with logical AND:
* hasPermission must be true AND itemCount must be less than 5.
*======================================
* Input: none (uses hasPermissionToProcess and currentItemCount inside function)
* Output: logs "Ready to process" or "Not ready to process"
***************************************************************/
function exerciseSeven() {
    let hasPermissionToProcess = true;
    let currentItemCount = 3;

    if (hasPermissionToProcess === true && currentItemCount < 5) {
        console.log("Ready to process");
    } else {
        console.log("Not ready to process");
    }
}


/***************************************************************
* exerciseEight
* Loop exactly five times and log the loop counter starting at 1 and ending at 5.
*======================================
* Input: none
* Output: logs the current loop number each iteration
***************************************************************/
function exerciseEight() {
    for (let loopCounterStartingAtOne = 1; loopCounterStartingAtOne <= 5; loopCounterStartingAtOne++) {
        console.log("Current loop number:", loopCounterStartingAtOne);
    }
}


/***************************************************************
* exerciseNine
* Count upward starting at 0. Stop the loop completely when the counter reaches 7.
*======================================
* Input: none
* Output: logs each step until reaching 7, then logs the stop point
***************************************************************/
function exerciseNine() {
    for (let loopCounter = 0; loopCounter < 10; loopCounter++) {

        if (loopCounter === 7) {
            console.log("Reached stopping point at:", loopCounter);
            break;
        }

        console.log("Loop is still running at:", loopCounter);
    }
}


/***************************************************************
* exerciseTen
* Demonstrate a do...while loop that always runs its body at least once.
*======================================
* Input: none
* Output: logs "Running once" exactly one time
***************************************************************/
function exerciseTen() {
   let counter = 10;

	do{
	    console.log("running once");
	}while(counter > 10);
}



/***************************************************************
* calculateArea
* Return the area given width and height by multiplying them.
*======================================
* Input: widthValue (number), heightValue (number)
* Output: number (the calculated area)
***************************************************************/
function calculateArea(width, height) {
    return width * height;
}


/***************************************************************
* exerciseEleven
* Call calculateArea(5, 10), store the result, and log it.
*======================================
* Input: none
* Output: logs "The calculated area is: <value>"
***************************************************************/
function exerciseEleven() {
    let width = 5;
    let height = 10;

    let resultArea = calculateArea(width, height);

    console.log("The calculated area is:", resultArea);
}


/***************************************************************
* exerciseTwelve
* Work with an array:
*   1. Start with ['Apple', 'Banana']
*   2. Add 'Grape' to the end
*   3. Remove the first item
*   4. Find the index of 'Banana'
*======================================
* Input: none
* Output: logs the updated array, the removed item, and Banana's index
***************************************************************/
function exerciseTwelve() {
    let fruitList = ['Apple', 'Banana'];
    console.log("Original fruitList:", fruitList);


    fruitList.push('Grape');
    console.log("Updated fruitList:", fruitList);

    fruitList.shift();
    console.log(fruitList[0]); 
    console.log("Index position of 'Banana':", fruitList.indexOf("Banana"));
}


/***************************************************************
* exerciseThirteen
* Make a shallow copy of an array using slice().
* Also explain that nested objects are still shared references.
*======================================
* Input: none
* Output: logs the original array, the cloned array, and a note about shallow copy
***************************************************************/
function exerciseThirteen() {
    let originalData = [13, "apple", false];

    let clonedData = originalData.slice();
    //Note: This is a shallow copy. Changing the elements of clonedData will NOT change the elements of originalData

    console.log("Original data array:", originalData);
    console.log("Cloned data array:", clonedData);
}


/***************************************************************
* Animal
* Constructor function that creates an object with species and sound.
*======================================
* Input: speciesType (string), soundMadeByAnimal (string)
* Output: an object with { species: <string>, sound: <string> }
***************************************************************/
function Animal(speciesType, soundMadeByAnimal) {
    this.species = speciesType;
    this.sound = soundMadeByAnimal;
}


/***************************************************************
* exerciseFifteen_createAnimalObjectsAndStoreInArray
* Create two Animal objects (dog and cat) and store them in animalArray.
*======================================
* Input: none
* Output: logs the animalArray containing both created Animal objects
***************************************************************/
function exerciseFifteen_createAnimalObjectsAndStoreInArray() {
    let dogAnimalObject = new Animal("Canine", "Woof");
    let catAnimalObject = new Animal("Feline", "Meow");

    let animalArray = [dogAnimalObject, catAnimalObject];

    console.log("Animal array containing dog and cat objects:", animalArray);
}


/***************************************************************
* runAllExercisesInOrder
* Convenience helper to run all exercises in sequence for testing.
*======================================
* Input: none
* Output: runs each exercise function
***************************************************************/
function runAllExercisesInOrder() {
    exerciseOne();
    exerciseTwo();
    exerciseThree();
    exerciseFour();
    exerciseFive();
    exerciseSix();
    exerciseSeven();
    exerciseEight();
    exerciseNine();
    exerciseTen();
    exerciseEleven();
    exerciseTwelve();
    exerciseThirteen();
    exerciseFifteen_createAnimalObjectsAndStoreInArray();
}

runAllExercisesInOrder();