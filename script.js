//function
//get values
//calculate
//output

//formula for BMI - weight/height * 703

function calculateBMI() {
    if (weight.value == '' || height.value == '') {
        alert(`You must enter the value of height and weight`)
    } else {
        let weight = document.getElementById('weight').value
        let height = document.getElementById('height').value

        let bmi = (weight / ((height * height)/100))

        document.getElementById('heading').innerHTML = 'Your BMI is: '
        document.getElementById('bmi-output').innerHTML = bmi.toFixed(2)

        if (bmi <= 18.5) {
            document.getElementById('message').innerHTML = 'You are underweight. Try eating more nutrient-rich foods.'
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            document.getElementById('message').innerHTML = 'Your weight is healthy. Keep up your good habits.'
        } else if(bmi >= 25 && bmi <= 29.9){
            document.getElementById('message').innerHTML = 'You are overweight. Exercise more and watch your diet.'
        }else {
            document.getElementById('message').innerHTML = 'You are obese. Seek medical advice for weight management.'
        }
    }
}


function resetBMI() {
    window.location.reload()
}