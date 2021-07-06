//! calculating the cutoff mark


let button=document.getElementById("btn")
button.addEventListener("click",()=>{
    let mathsmark= parseInt(document.getElementById("mMark").value);
    let chemmark=parseInt( document.getElementById("cMark").value);
    let phymark=parseInt( document.getElementById("pMark").value);
    let add=document.getElementById("add");
    let name=document.getElementById('name').value
    
    if(mathsmark>100||chemmark>100||phymark>100)return alert("User,please enter the valid mark")
    cal=mathsmark+(chemmark/2)+(phymark/2);

let newElement=document.createElement("div");
newElement.innerHTML=`hello ${name}, your cutoff mark is ${cal}`;
add.appendChild(newElement)
newElement.classList.add("btnclick")
})



