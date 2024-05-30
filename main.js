function readText () {
    const equation = document.getElementById('equation');
    const values = equation.value;
    const valuesArr = values.split(" ");
    let ans = 0;

    if (valuesArr.length !== 3) {
        console.log("Enter a correct expression");
    }
    else {
        if (valuesArr[1] === '+') {
            ans = parseInt(valuesArr[0]) + parseInt(valuesArr[2]);
            display(ans);
        }
        else if (valuesArr[1] === '-') {
            ans = parseInt(valuesArr[0]) - parseInt(valuesArr[2]);
            display(ans);
        }
        else if (valuesArr[1] === '*') {
            ans = parseInt(valuesArr[0]) * parseInt(valuesArr[2]);
            display(ans);
        }
        else {
            ans = parseInt(valuesArr[0]) / parseInt(valuesArr[2]);
            display(ans);
        }
    }
}
 
function display(ans) {
    ans_string = String(ans)
    alert("The answer is: " + ans_string);
}

