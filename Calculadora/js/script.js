const form = document.getElementById('form');


form.addEventListener('submit', function(event){
    event.preventDefault();
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight/(height * height)).toFixed(2);
    const value = document.getElementById('value');
    let description = '';

    document.getElementById('info').classList.remove('hidden');
    if(bmi<16){
        description = 'Cuidado! Você está muito abaixo do peso!'
        value.classList.add('takecare');
    }
    else if (bmi > 16 && bmi < 18.5){
        description = 'Cuidado! Você está abaixo do peso!'
        value.classList.add('attention');

    } else if (bmi >= 18.5 && bmi <= 25){
        description = 'Você está na faixa de peso ideal!'
        value.classList.add('yourefine');

    }else if (bmi > 25 && bmi <= 30){
        description = 'Você está com sobre peso!'
        value.classList.add('attention');
    
    }else if (bmi < 30 && bmi <= 35){
        description = 'Cuidado! Você está com Obesidade!'
        value.classList.add('takecare');
    }else if (bmi < 35){
        description = 'Cuidado! Você está com Obesidade morbida!'
        value.classList.add('takecare');
    }

    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;




})

