import {Carousel} from "@fancyapps/ui";
import {scrollPage } from "./pageScroll"
import { burgerTL } from "./burgerAnimation";
import { displayWindowSize } from "./mobileResizing"
import { menuAnimator } from "./mobileMenu"

window.addEventListener('load', function(){

    const myCarousel = new Carousel(document.querySelector(".carousel"), {
        // Options
        // 'center' : false
      });

});



var burgerButton = document.querySelector("#burger");

let burgerClicked = false;

   
function openCloseMenu(){
   if(burgerClicked === false){
     burgerTL.play();
     menuAnimator.play();
     burgerClicked = true;
 }else{
     burgerTL.reverse();
     menuAnimator.reverse();
     burgerClicked = false;
   } 
}


burgerButton.addEventListener("click", openCloseMenu);

let navButtons = document.querySelectorAll(".nav-btns");

for(const button of navButtons){
    button.addEventListener("click", checkScrolling);
    button.addEventListener("click", openCloseMenu);
}


function checkScrolling(e) {
    const indexValue = [].indexOf.call(navButtons, e.target)
    
    if (indexValue != -1){
        scrollPage(indexValue -1);
    }
}

window.addEventListener("resize", function(){
    if(burgerClicked === true){
        console.log("fire");
        openCloseMenu();
    }
});


window.addEventListener("resize", displayWindowSize);

window.addEventListener('load', displayWindowSize);




