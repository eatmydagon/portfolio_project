
// Generate a random number
	// var number_1 = 5;
	// var number_2 = 10;

function random_number_generator(number_1, number_2) {
		if ( isNaN(number_1) || isNaN(number_2) ) {
				console.log("The values you have provided are not numbers");
		} else {
					var random_number =  Math.floor(Math.random() * ( number_2 - number_1 + 1) )
													 + number_1 ;
					console.log(random_number);
		}
}

random_number_generator( 10, 20 );
random_number_generator( "five", 20 );
random_number_generator( 1, 20 );
random_number_generator( 10, "two hundred" );


// Log the number in the console for testing purposes
// console.log(random_number);

/*
// Get an input from the user
var guess = false;
var user_response = parseInt(prompt("Enter any number between " + number_1 + " and " +
                    number_2));

//Check the value of the user input and accordingly prompt
if ( user_response === random_number) {
		guess = true;
} else if ( user_response < random_number ) {
	user_response = parseInt(prompt("The number I am looking for is higher"));
}

if ( user_response === random_number) {
		guess = true;
} else if ( user_response > random_number ) {
	user_response = parseInt(prompt("The number I am looking for is lower"));
}

if ( user_response === random_number ) {
			guess = true;
}

// Based on guess write outcome on page

if ( guess ) {
		document.write("Congrats you guessed the right number");
} else {
			document.write("Sorry you are stupid");
}
*/

/*
// Questions and answers

// Q1: What is my favorite color?
var answer_1 = "Grey";
// Q2: What is 9+1?
var answer_2 = 10;
// Q3: Who do you love?
var answer_3 = "Riri";

// Quiz Start
document.write("<h1>Lets start your quiz</h1>");

var correct_answers = 0;

var a1 = false;
var q1 = prompt("What is my favorite color?");
if ( q1.toUpperCase() === answer_1.toUpperCase() ) {
	a1 = true;
	alert("That is correct");
	document.write("Question 1: Correct");
	correct_answers += 1;
} else {
			alert("That is wrong");
			document.write("Question 1: Incorrect");
}

var a2 = false;
var q2 = prompt("What is 9 + 1");
if ( parseInt(q2) === answer_2 ) {
	a2 = true;
	alert("That is correct");
	document.write("Question 2: Correct");
	correct_answers += 1;
} else {
			alert("That is wrong");
			document.write("Question 2: Incorrect");
}

var a3 = false;
var q3 = prompt("Who do you love?");
if ( q3.toUpperCase() === answer_3.toUpperCase()) {
	a3 = true;
	alert("That is correct");
	document.write("Question 3: Correct");
	correct_answers += 1;
} else {
			alert("That is wrong");
			document.write("Question 3: Incorrect");
}

// Medals

if ( correct_answers === 3 ) {
		document.write("Congrats you have earned a gold medal");
		alert("Congrats you have earned a gold medal");
} else if ( correct_answers < 3 && correct_answers > 1 ) {
			document.write("Congrats you have earned a silver medal");
			alert("Congrats you have earned a silver medal");
} else if ( correct_answers = 1 ) {
			document.write("Congrats you have earned a bronze medal");
			alert("Congrats you have earned a bronze medal");
}
*/
