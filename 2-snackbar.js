import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as s}from"./assets/vendor-BbbuE1sJ.js";const c=document.querySelector(".form-button"),f=document.querySelectorAll('input[type="radio"]'),l=document.querySelector(".fieldset-state"),m=document.querySelector(".input-delay");let r=null,o=0;m.addEventListener("input",e=>{o=parseInt(e.target.value,10),isNaN(o)&&(o=0)});f.forEach(e=>{e.addEventListener("change",()=>{e.value==="fulfilled"?(r=!0,l.classList.add("active")):e.value==="rejected"?(r=!1,l.classList.add("active")):s.show({title:"Caution",titleColor:"#fff",titleSize:"16px",messageColor:"#fff",messageSize:"16px",message:"You forgot important data",backgroundColor:"#ffa000",iconUrl:"/src/img/caution.png",position:"topRight"})})});c.addEventListener("click",e=>{const i=o,a=r;new Promise((t,n)=>{setTimeout(()=>{a?t(`Fulfilled promise in ${i}ms`):n(`Rejected promise in ${i}ms`)},i)}).then(t=>{s.show({title:"OK",titleColor:"#fff",titleSize:"16px",messageColor:"#fff",messageSize:"16px",message:t,backgroundColor:"#59a10d",iconUrl:"/src/img/ok.png",position:"topRight"})}).catch(t=>{s.show({title:"Error",titleColor:"#fff",titleSize:"16px",messageColor:"#fff",messageSize:"16px",message:t,backgroundColor:"#ef4040",iconUrl:"/src/img/error.png",position:"topRight"})}),e.preventDefault()});
//# sourceMappingURL=2-snackbar.js.map
