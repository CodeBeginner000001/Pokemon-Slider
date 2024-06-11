let nextdom=document.querySelector("#next");
let prevdom=document.querySelector("#prev");
let container=document.querySelector(".container");
let containerList=document.querySelector(".container .list");
let thumbnail=document.querySelector(".container .thumbnail");

// let timeauto=5000;
// let autoout=setTimeout(()=>{
//     nextdom.click();
// },timeauto);

let time=3000;
let timeout;

prevdom.onclick = function(){
    show('prev');
}
nextdom.onclick = function(){
    show('next');
}
function show(t){
    let itemcontainer=document.querySelectorAll(".container .list .item");
    let itemsthumbnail=document.querySelectorAll(".container .thumbnail .item ");
    if(t==='next'){
        containerList.appendChild(itemcontainer[0]);
        thumbnail.appendChild(itemsthumbnail[0]);
        container.classList.add("next");
    }else{
        let pos=itemcontainer.length-1;
        containerList.prepend(itemcontainer[pos]);
        thumbnail.prepend(itemsthumbnail[pos]);
        container.classList.add("prev");
    }

    clearTimeout(timeout);
    timeout =setTimeout(()=>{
        container.classList.remove('next');
        container.classList.remove('prev');
    },time)

    // clearTimeout(autoout);
    // autoout=setTimeout(()=>{
    //     nextdom.click();
    // },timeauto);
}
