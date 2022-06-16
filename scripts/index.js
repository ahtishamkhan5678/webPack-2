// url: https://api.unsplash.com//search/photos/?query=${value}&per_page=20client_id=YOUR_ACCESS_KEY
// https://api.unsplash.com//search/photos/?query=car&per_page=20&client_id=y7-T_w7M2qk7qRzZVldDAcOHw8eQGbkVika5xobsTOM

// const apikey="y7-T_w7M2qk7qRzZVldDAcOHw8eQGbkVika5xobsTOM";
// const api ="hMs_d1xN3c09DTri6kMZtd2yL82D7yNq1bRH4XZ0AcI"
// const url =`https://api.unsplash.com//search/photos/?query=${type}&per_page=20&client_id=hMs_d1xN3c09DTri6kMZtd2yL82D7yNq1bRH4XZ0AcI`


const api="hMs_d1xN3c09DTri6kMZtd2yL82D7yNq1bRH4XZ0AcI"

import  navbar from "../components/navbar.js";
let x = document.getElementById('navbar')
x.innerHTML=navbar()

import {find,append} from "./fetch.js"

//======================================================================
//     appending data to body & featching data using Import Export
//========================================================================

let searchfun =(e)=>{
    if(e.key==="Enter"){
        let type = document.getElementById('query').value;
    find(api,type).then((data)=>{
        

        console.log(data)
        let container=document.getElementById('container')
        container.innerHTML=""
        append(data.results,container)
    });

    }
};
document.getElementById("query").addEventListener("keydown",searchfun);

//========================================================================
//       search funcionaliy accourding to conditions provided
//==========================================================================
let categories = document.getElementById("category").children;
// console.log(categories)


function catsearch(){
    console.log(this.id);
     find(api,this.id).then((data)=>{
        

        console.log(data)
        let container=document.getElementById('container')
        container.innerHTML=""
        append(data.results,container)
    });
}
for(let el of categories){
    el.addEventListener("click",catsearch);
}







