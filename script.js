const alphabets='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const numbers = '12345678910';

const symbols = '!@#$%^&*()_+';



let randomPassword="";




function generatePassword(){
    let maxLength = document.getElementById("password-length").value
    let isNumber=document.getElementById("include-numbers").checked;
    let isSymbol=document.getElementById("include-symbols").checked;
    let display = document.getElementById("generated-password")
    for(let i=0;i<maxLength;i++){
      
         const randomIndexAlpha = Math.floor(Math.random() * alphabets.length);
         randomPassword += alphabets.charAt(randomIndexAlpha) 
         
         if(isNumber===true){
            const randomIndexNumber = Math.floor(Math.random() * numbers.length);
            randomPassword += alphabets.charAt(randomIndexAlpha) + numbers.charAt(randomIndexNumber);
        
         }
         if(isSymbol===true){
            const randomIndexSymbol=Math.floor(Math.random()*symbols.length);
            randomPassword += alphabets.charAt(randomIndexAlpha) + symbols.charAt(randomIndexSymbol)
     
         }
         if(isNumber===true && isSymbol===true){
            const randomIndexNumber = Math.floor(Math.random() * numbers.length);
            const randomIndexSymbol=Math.floor(Math.random()*symbols.length);
            randomPassword += alphabets.charAt(randomIndexAlpha) + numbers.charAt(randomIndexNumber) + symbols.charAt(randomIndexSymbol)
         
         }
       
       
}
        let result = (randomPassword.slice(0,maxLength)) 
        
        display.textContent=result
        
        randomPassword=""
}

let button = document.getElementById("generate-button");

button.addEventListener("click",(e)=>{

    generatePassword()

})
       
       
