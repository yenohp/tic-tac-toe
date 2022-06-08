# tic-tac-toe
1. You are going to store the gameboard as an array inside of a Gameboard objet. Players are also stored in objects.
    a. Have as little global code as possible. Rule of thumb: If you only ever need one of something (gameBoard, displayController), use a module. If you need multiple of something (players) create them with factories.
    
====================================================================
        -Original object construction:
        
        function Object(arg, ...){
            this.arg = arg;
            // ...

            this.function1 = function(){
                console.log(arg);
            }
        }

        const obj1 = new Object(arg1);
        const obj2 = new Object(arg2);

====================================================================
        - Factory functions: Similar to constructors but instead of using new to create an object, the factory function sets up and returns the new object when you call the function
        
        const factory = (arg1, ...) =>{
            const function1 = () => console.log('this is a function');
            return {arg1, ..., function1, ...};
        };

        const obj1 = factory(x,y);
        obj1.function1();

====================================================================
        - Module: While this looks similar to a factory function, the main distinction is that the module wraps the factory in an IIFE (Immediately Invoked Function Expression).
        
        const module = (() =>{
            const function1 = (x,y) => a + b;
            //....

            return{function1, ....};
        })();


2. Set up the HTML and write a JS function that will render the contents of the gameboard array to the webpage (for now just manually fill the array with "X"s and "O"s)

3. Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. (Don't forget the logic that keeps players from playing in spots that are already taken).
    - Think about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects. 

4. Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.

5. Clean the interface to allow players to put their names, include a button to start/restart the game and add a display element that congratulates the winning player.

====================================================================
Optional: 

6. If you're feeling ambitious create an AI so that the player can play against the computer.

    - Start by getting the computer to make a random 'legal' move.
    - Work on making the computer smart. It is possible to create an unbeatable AI using the minmax algorithm (read the docs https://en.wikipedia.org/wiki/Minimax).
