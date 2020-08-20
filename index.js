

var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++) {


    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        
       var buttonInnerHTML=this.innerHTML;


    makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);



    });
    
}




    document.addEventListener("keypress", function(event) {

      //  makeSound(event.key);


       // buttonAnimation(event.key);
    });

    function makeSound(key){

        switch (key) {
            case "S":
                var tom1 = new Audio("tom-1.mp3");
                tom1.play(); 
                break;
    
                case "A":
                var tom2 = new Audio("he.mpeg");
                tom2.play(); 
                break;
        
    
                case "N":
                var tom3 = new Audio("tom-3.mp3");
                tom3.play(); 
                break;
        
    
                case "C":
                var tom4 = new Audio("he1.mpeg");
                tom4.play(); 
                break;
        
    
                case "H":
                var snare1 = new Audio("snare.mp3");
                snare1.play(); 
                break;
        
    
                case "I":
                var crash1 = new Audio("crash.mp3");
                crash1.play(); 
                break;
        
    
    
                case "T":
                var kick1 = new Audio("she.mpeg");
                kick1.play(); 
                break;
        
    
            default: console.log(buttonInnerHTML);
                
        }
    
    }

    function buttonAnimation(currentkey) {
        var activeButton = document.querySelector("."+ currentkey);
        activeButton.classList.add("pressed");

       setTimeout(() => {
        activeButton.classList.remove("pressed");
       }, 100);

        
    }
    



