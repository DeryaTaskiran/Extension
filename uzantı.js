 let myUrl=[]

 const inputEl=document.getElementById("input-el")
 const buton=document.getElementById("input-btn")
 const ulEl=document.getElementById("ul-el")
const tab=document.getElementById("tab-btn")
 const deleteBtn=document.getElementById("delete-btn")

 let leadsFromLocalStorage= JSON.parse(localStorage.getItem("myUrl"))

 deleteBtn.addEventListener("click",function(){
let alert=confirm("Are you sure")

if(alert){
   localStorage.clear()
   myUrl=[]  
   render(myUrl) 
}
 }) 

 tab.addEventListener("click",function(){

   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
     myUrl.push(tabs[0].url)
     localStorage.setItem("myUrl",JSON.stringify(myUrl))
     render(myUrl)

   })


 })





 if(leadsFromLocalStorage){

   myUrl=leadsFromLocalStorage

   render(myUrl)
 }


  



buton.addEventListener("click",function(){

myUrl.push(inputEl.value)

inputEl.value=" "

localStorage.setItem("myUrl",JSON.stringify(myUrl))
console.log(localStorage.getItem("myUrl"))

render(myUrl)


 })

function render(url){

    let listİtems=""
 for(let i=0;i<url.length;i++){

   
    // listİtems+='<li><a target="_blank" href=" ">' + myLeads[i] +" </a></li>"
    listİtems+=`<li><a target="_blank" href=${url[i]} >${url[i]}  </a>
    
    <span class="delete-icon" data-index="${i}"><i class="delete fa-regular fa-circle-xmark"></i></span>
    
    </li>`

    
     }
    ulEl.innerHTML=listİtems



    const deleteIcons = document.querySelectorAll(".delete-icon");
    deleteIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            const index = icon.getAttribute("data-index");
            myUrl.splice(index, 1);
            localStorage.setItem("myUrl", JSON.stringify(myUrl));
            render(myUrl); 
        });
    });



    }


  

     