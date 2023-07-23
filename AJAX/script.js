const xhr = new XMLHttpRequest();
const ul = document.querySelector('.list');


xhr.onload = function(data){
    console.log(data);
    const facts = JSON.parse(data.currentTarget.response);
    facts.forEach(element => {
        console.log(data);
        ul.innerText = '';
        const li = document.createElement('li');
        li.innerText = element.text;
        ul.appendChild(li);
        // console.log(element.text); 
    });
    // cosnole.log("data",facts);
}


xhr.onerror = function() {
    console.log("galat code");
}


xhr.open('GET',"http://cat-fact.herokuapp.com/facts");

const btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    xhr.send();
})