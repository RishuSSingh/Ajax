const url = 'http://cat-fact.herokuapp.com/facts';
const btn = document.querySelector('.btn');
const factlist = document.querySelector('.factlist');

function getdata(url) {
    return new Promise((resolve ,reject)=>{
        fetch(url)
        .then((res=>{
            return res.json();
        }))
        .then((data)=>{
            resolve(data);
            });
        })
        .catch((err)=>{
            reject(err);
        })
    
    }




function adddata(data) {
    data.forEach((d) => {
        // console.log(d);
        const li =  document.createElement('li');
        li.innerText = d;
        factlist.appendChild(li);
    });


}

function solve() {
    getdata(url) 
        .then((data) =>{
            console.log(data);
            const catfacts = data.map(d=>d.text);
            // console.log(catfacts);
            adddata(catfacts);
        })
        .catch(err = console.log(err));
    }


btn.addEventListener('click',(ev)=>{
    solve();
})