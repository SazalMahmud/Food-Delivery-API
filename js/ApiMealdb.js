const searchFood= () =>{
    const searchFild = document.getElementById('search-field');
    const searchText =searchFild.value;
    searchFild.value ='';
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    //console.log(url);
    fetch(url)
    .then(Response =>Response.json())
    .then(data => disPlayresult(data.meals));
}
const disPlayresult = data2 =>{
    const searchResult = document.getElementById('search-result');
    searchResult.textContent ='';
    data2.forEach(meal =>{
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML =`<div class="card h-100">
                 <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                 <div class="card-body">
                 <h5 class="card-title">${meal.strMeal}</h5>
                 <p class="card-text">Sazal Restaurant </p>
        </div>
      </div>`;
      searchResult.appendChild(div);
        
    });
}