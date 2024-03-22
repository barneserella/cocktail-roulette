//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    
    // const drink = document.querySelector('input').value
    const drinkName = document.getElementById('name');
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    // if(drink){
    //     apiUrl += `search.php?s=${drink}`
    // }else{
    //     apiUrl += 'random.php'
    // }

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
          
        console.log(data.drinks )
        drinkName.innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
        document.querySelector('#one').innerText = data.drinks[0].strIngredient1
        document.querySelector('#two').innerText = data.drinks[0].strIngredient2
        document.querySelector('#three').innerText = data.drinks[0].strIngredient3
        document.querySelector('#four').innerText = data.drinks[0].strIngredient4
        document.querySelector('#five').innerText = data.drinks[0].strIngredient5
        document.querySelector('#six').innerText = data.drinks[0].strIngredient6
        document.querySelector('#seven').innerText = data.drinks[0].strIngredient7
        document.querySelector('#eight').innerText = data.drinks[0].strIngredient8
        })
        .catch(err => {
        console.log(`error ${err}`)
        });
}