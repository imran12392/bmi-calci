let form=document.querySelector("form");




form.addEventListener('submit', function(e){
    e.preventDefault();
    let height=document.querySelector("#height").value;
    let weight=document.querySelector("#weight").value;
    
    let blank=document.querySelector(".blank");
     if(weight==='' || weight<0 ||isNaN(weight)){
        blank.innerHTML=`enter valid details ${weight}`
     }else if(height==='' || height<0 ||isNaN(height)){
            blank.innerHTML=`enter valid details ${height}`;
        }else{
         let result=(weight / ((height*height)/1000).toFixed(2));
         blank.innerHTML=`<span>${result}</span>`;
        }
});

