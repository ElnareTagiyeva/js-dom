const input= document.querySelector("input");
const list=document.getElementById("list");
let ad=[];
function button() {
    if(input.value.trim() !=""){
        if(ad.includes(input.value.trim())==false){
            ad.push(input.value.trim());
            input.value="";
            fillList();
        }
        else{
            alert("Bu adda istifadeci var")
        }
    }
    else{
        alert("Ad daxil et")
    }
}

function fillList() {
    let result=ad.reduce(
        (result, value)=>result+=`<h3>${value}</h3>`,''
    );
    list.innerHTML=result;
}

