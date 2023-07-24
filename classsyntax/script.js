const btn = document.querySelector('.btn');
const factlist =  document.querySelector('.factlist');

class listitems {
    constructor(url) {
        this.url =  url;
    }
    async getdata() {
        try{
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);
            const catfacts = data.map(d=>d.text);
            console.log(catfacts);
            adddata(catfacts);
            return catfacts;
         }catch(err){
             console.log(err);
         }
    } 
    adddata(data) {
        data.forEach((d) => {
            console.log(d);
            const li =  document.createElement('li');
            li.innerText = d;
            factlist.appendChild(li);
        });
    }
}



btn.addEventListener('click',()=>{
    let a = new listitems('http://cat-fact.herokuapp.com/facts');
    let data  = a.getdata();
    console.log(data);
    
})