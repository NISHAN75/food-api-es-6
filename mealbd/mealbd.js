const errorMessage=document.getElementById('error-area');
const searchFood=()=>{
    const searchFiled=document.getElementById('search-filed');
    const searchFiledValue=searchFiled.value;
    searchFiled.value='';
    const errorMessage=document.getElementById('error-area');
    if(searchFiledValue ==''){
        const div=document.createElement('div');
        div.innerHTML=`<h4>Please give a food name</h4>`;
        errorMessage.appendChild(div);
    }
    else{
    errorMessage.innerHTML='';
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFiledValue}`;
    fetch(url)
   .then(res => res.json())
   .then(data => displayResult(data))
    }
}
// show details
const displayResult= searchResut =>{
    const meals=searchResut.meals;
    const mainCard=document.getElementById('card-info');
    mainCard.textContent='';
    console.log(meals)
    if(meals == null){
        const div=document.createElement('div');
        div.innerHTML=`<h4>Sorry,No Found You Want Food,Try Again..</h4>`;
        errorMessage.appendChild(div);
    }
    else{
        for(const meal of meals){

            const div=document.createElement('div');
            div.innerHTML=`
            <div onclick="loadDetails('${meal.idMeal}')" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                </div>
              </div>
            `;
            div.classList.add('col');
            mainCard.appendChild(div)
        } 
    } 
}
const loadDetails=mealId=>{
   
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
     fetch(url)
    .then(res => res.json())
    .then(data => dispalyMealDetails(data.meals[0]))
}
const dispalyMealDetails= meal =>{
    const cardDetails=document.getElementById('card-details');
    const div=document.createElement('div');
    div.innerHTML=`
    <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p>Contray:${meal.strArea}</p>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">See More</a>
        </div>
      </div>
    `;
    div.classList.add('col')
    cardDetails.appendChild(div);
}
