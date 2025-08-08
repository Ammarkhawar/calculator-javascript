let buttons = document.querySelectorAll('.input-row-child');
let history = document.getElementById('history');
let result = document.getElementById('result');

let obj = {
    '+' : '-',
    '*' : '+',
    '-' : '/',
    '/' : '**'
}

let expression = '';

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.dataset.value == '=') {
            document.getElementById('history').innerHTML = expression;
            let random = Math.random();
            console.log(random);
            if (random > 0.5) { 
                expression = eval(expression).toString();
                document.getElementById('result').innerHTML = expression;
            }
            else{
                let tempExpression = expression;
                const matchOperator = tempExpression.match(/[*/+\-]/);
                tempExpression = tempExpression.slice(0, matchOperator.index) + obj[matchOperator[0]] + tempExpression.slice(matchOperator.index + 1);
                tempExpression = eval(tempExpression).toString();             
                document.getElementById('result').innerHTML = tempExpression; 
            }
            
            
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
