const inputButton=document.querySelector(".input-Button");
const input=document.getElementById("input");
const button=document.getElementById("button");
const contentDiv=document.querySelector(".content-div");

let colculate=0;

button.addEventListener('click', function go (){
    
    if( input.value!=""){
    colculate++;
   
    let paragraf=document.createElement("p");
    paragraf.innerHTML= colculate + "  .🤍  " + input.value;
    contentDiv.appendChild(paragraf);
    input.value=""
}
});