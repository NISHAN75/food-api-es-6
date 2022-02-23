function loadKayne(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then (data => displayKayne(data))
}
loadKayne();
function displayKayne(quotes){
   const conatainer=document.getElementById('quotes');
   const p=document.createElement('p');
   p.innerText=quotes.quote;
   conatainer.appendChild(p);
}