let buttons = document.querySelectorAll('.input-row-child');
let history = document.getElementById('history');
let result = document.getElementById('result');

let expression = '';

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.dataset.value == '=') {
            document.getElementById('history').innerHTML = expression; 
            expression = eval(expression).toString();
            document.getElementById('result').innerHTML = expression;
            
        }
        else if (e.target.dataset.value == "C"){
            expression = '';
            document.getElementById('result').innerHTML = '0';
            document.getElementById('history').innerHTML = expression;
        }
        else if ( e.target.dataset.value == 'delete' ){
            if( expression.length == 1){
                expression = " ";
                document.getElementById('history').innerHTML = expression;
                document.getElementById('result').innerHTML = '0';
            }
            else{
                expression = expression.slice(0, -1);
                document.getElementById('result').innerHTML = expression
            }
            
        }
        else{
            expression = expression + e.target.dataset.value;
            document.getElementById('result').innerHTML = expression;   
        }
             
        
        
    })
})
