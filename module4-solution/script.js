// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function () {
    const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// STEP 10:
// Loop over the names array and say either 'Hello' or "Good Bye"
// using either the helloSpeaker's or byeSpeaker's 'speak' method.
// See Lecture 50, part 1
    for (let i = 0; i < names.length; i++) {
        const name = names[i];

        // STEP 11:
        // Retrieve the first letter of the current name in the loop.
        // Use the string object's 'charAt' function. Since we are looking for
        // names that start with either upper case or lower case 'J'/'j', call
        // string object's 'toLowerCase' method on the result so we can compare
        // to lower case character 'j' afterwards.
        // Look up these methods on Mozilla Developer Network web site if needed.
        const firstLetter = name.charAt(0)

        // STEP 12:
        // Compare the 'firstLetter' retrieved in STEP 11 to lower case
        // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
        // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
        // name in the loop.
        if (firstLetter.toLowerCase() === 'j') {
            byeSpeaker.speak(name)
        } else {
            helloSpeaker.speak(name)
        }
    }

    //Extra requirement #2
    /**
     * Takes a name and returns a greeting for that name
     * @param name - the name to get greeting for
     * @returns {string}
     */
    function mapNames(name) {
        const firstLetter = name.charAt(0)
        if (firstLetter.toLowerCase() === 'j') {
            return byeSpeaker.speakSimple(name)
        } else {
            return helloSpeaker.speakSimple(name)
        }
    }

    console.log('\n***** Extra Requirement #2 ****\n')
    const greetings = names.map(mapNames)
    greetings.forEach(greeting => console.log(greeting))

    //Extra requirement #3
    /**
     * Reduces the names array into a separate array for the hello and goodbye greetings
     * @param acc - the accumulator
     * @param name - the current name
     * @returns {*}
     */
    function reduceNames(acc, name) {
        const firstLetter = name.charAt(0)
        if (firstLetter.toLowerCase() === 'j') {
            acc.bye = acc.bye.concat(byeSpeaker.speakSimple(name))
        } else {
            acc.hello = acc.hello.concat(helloSpeaker.speakSimple(name))
        }
        return acc;
    }

    console.log('\n***** Extra Requirement #3 ****\n')
    const reducedGreedings = names.reduce(reduceNames, {hello: [], bye: []})

    reducedGreedings.hello.forEach(greeting => console.log(greeting))
    reducedGreedings.bye.forEach(greeting => console.log(greeting))


})()