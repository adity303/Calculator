let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);   //Creating new array
arr.forEach(button => {         //Using arrow button
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {  
            string = eval(string);   //here eval is an inbuilt functions used to calculate the values.
            input.value = string;    //resulted answer is printed in this string.
        }

        else if (e.target.innerHTML == 'AC') {   //for targeting all clear button 
            string = "";     // shows empty string while pressing AC
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);  //returns substring printing from starting to n-1.
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})