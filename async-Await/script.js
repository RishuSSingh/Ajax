const url = 'http://cat-fact.herokuapp.com/facts';
const btn = document.querySelector('.btn');
const factlist = document.querySelector('.factlist');



function adddata(data) {
    data.forEach((d) => {
        // console.log(d);
        const li =  document.createElement('li');
        li.innerText = d;
        factlist.appendChild(li);
    });
}


async function getdata(url) {
    try{
       let res = await fetch(url);
       let data = await res.json();
       console.log(data);
       const catfacts = data.map(d=>d.text);
       console.log(catfacts);
       adddata(catfacts);
    }catch(err){
        console.log(err);
    }
    }

function solve() {
    getdata(url);
}


btn.addEventListener('click',(ev)=>{
    solve();
})

console.log('heloo');