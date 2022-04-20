

let textArea=document.getElementById('textArea');
let button = document.querySelectorAll('button');
console.log(button);
let TextValue='';
for(let item of button){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText=='C'){
            TextValue="";
         textArea.value=TextValue;
        }
        else if(buttonText=='AC')
        {
           TextValue=TextValue.slice(0,-1);
           
        }
        else if(buttonText=='=')
        {
           try{
            TextValue=eval(TextValue);
            textArea.value=TextValue;
           }
           catch(error){
              alert("Invalid");

           }
            
        }
        else
        TextValue+=buttonText;
        textArea.value=TextValue;
    })
}