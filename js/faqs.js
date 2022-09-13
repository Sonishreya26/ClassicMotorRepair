"use strict";
// var $ = function(id) { return document.getElementById(id); };
const $ = selector => document.querySelector(selector);

// the event handler for the click event of each h2 element
const toggle = evt => {
    const h2Elements = document.querySelectorAll("#faqs h2");

    for (let h2Element of h2Elements) {

        //get h2's sibling div
        const divElement = h2Element.nextElementSibling;

        //checks the h2Element is clicked
        if (h2Element == evt.currentTarget) {
            h2Element.classList.toggle("minus");
            divElement.classList.toggle("open");
        }
        //executes for h2Elements that are not clicked
        else {
            //remove the class attribute for all h2 elements and div siblings
            h2Element.removeAttribute("class");
            divElement.removeAttribute("class");
        }
    }

    evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
    // get the h2 tags
    const h2Elements = document.querySelectorAll("#faqs h2");

    // attach event handler for each h2 tag	    
    for (let h2Element of h2Elements) {
        h2Element.addEventListener("click", toggle);
    }

    // set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();
});
