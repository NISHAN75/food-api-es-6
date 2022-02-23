const loadCountries=()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then (data => displayCountries(data))
}

loadCountries();
const displayCountries=(countries)=>{
    const divContainer= document.getElementById('counteries');
    countries.forEach(country => {
    const div =document.createElement('div');
    div.innerHTML=`<h3>${country.name}</h3>
    <p>${country.capital}</p>
    <button onclick="loadCountryByName('${country.name}')">detalis</button>`;
    div.classList.add('design')
    divContainer.appendChild(div);
});
}

const loadCountryByName = name =>{
    const url=`https://restcountries.com/v2/name/${name}`;
   fetch(url)
   .then(res => res.json())
   .then(data =>dispalyName(data[0]));
   const dispalyName=countray =>{
       console.log(countray)
       const dContainer=document.getElementById('c-details');
       const div=document.createElement('div');
       div.innerHTML=`
       <h4>Country Details</h4>
       <p>name:${countray.name} area:${countray.area} capital:${countray.capital} borders:${countray.borders}</p>
        <img height="200px" width="200px" src="${countray.flag}">`;
       dContainer.appendChild(div)

   }
}