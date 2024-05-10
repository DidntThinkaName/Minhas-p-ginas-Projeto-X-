const themeMap = {
    dark: "light",
    light: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;
  
  
  form.addEventListener('submit', function(event){
    event.preventDefault();
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight/(height * height)).toFixed(2);
    const value = document.getElementById('value');
    let description = '';

    document.getElementById('info').classList.remove('hidden');
    if(bmi<16){
        description = document.getElementById('description').textContent = 'Cuidado! Você está muito abaixo do peso!';
        value.classList.add('takecare');
    }
    else if (bmi >= 16 && bmi < 18.5){
        description = document.getElementById('description').textContent = 'Cuidado! Você está abaixo do peso!'
        value.classList.add('attention');

    } else if (bmi >= 18.5 && bmi <= 25){
        description = document.getElementById('description').textContent = 'Você está na faixa de peso ideal!'
        value.classList.add('yourefine');

    }else if (bmi > 25 && bmi <= 30){
        description = document.getElementById('description').textContent = 'Você está com sobre peso!'
        value.classList.add('attention');
    
    }else if (bmi > 30 && bmi <= 40){
        description = document.getElementById('description').textContent = 'Cuidado! Você está Obeso!'
        value.classList.add('takecare');
    }else if (bmi > 40){
        description = document.getElementById('description').textContent = 'Cuidado! Você está com Obesidade morbida!'
        value.classList.add('takecare');
    }

    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;




})