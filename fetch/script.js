const url = 'http://cat-fact.herokuapp.com/facts';
const btn = document.querySelector('.btn');
const factlist = document.querySelector('.factlist');

btn.addEventListener('click',(ev)=>{


fetch(url) 
    .then((res=>{
        return res.json();
    }))
    .then((data)=>{
        console.log(data);
        
        data.forEach((d) => {
            // console.log(d.text);
            const li = document.createElement('li');
            
            li.innerText = d.text;
            factlist.appendChild(li);
        });
    })
    .catch((err)=>{
        console.log(err);
    })


})
