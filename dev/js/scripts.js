import {Carousel} from "@fancyapps/ui";
import {scrollPage } from "./pageScroll"

window.addEventListener('load', function(){

    const myCarousel = new Carousel(document.querySelector(".carousel"), {
        // Options
        // 'center' : false
      });

});

let navButtons = document.querySelectorAll(".nav-btns");

for(const button of navButtons){
    button.addEventListener("click", checkScrolling);
    con
}


function checkScrolling(e) {
    const indexValue = [].indexOf.call(navButtons, e.target)
    
    if (indexValue != 0){
        scrollPage(indexValue);
        console.log(thisworks)
    }
}



