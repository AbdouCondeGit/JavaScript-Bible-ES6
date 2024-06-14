/**
 * CHALLENGE 1-2 SOLUTION
 *
 * Find all menu elements by selector ".nav-link"
 * or by className "nav-link".
 *
 *  Use "for" loop to iterate through all menu items
 * Inside of the loop add "onclick" event handler to
 * each menu item.
 *
 * In the "onclick" event handler:
 * 1. Remove first "active" class from all
 * menu elements
 * 2. Add "active" class to the clicked menu element
 * 3. Log to the console message with the name
 * of the clicked menu item
 */


const navBarItems = document.querySelectorAll(".nav-link");
const LEN = navBarItems.length;

console.log(navBarItems);

for(let i=0;i<LEN;i++){
  const currentItem=navBarItems[i];

  currentItem.onclick=function(){
    
    for(let j=0;j<LEN;j++){
      navBarItems[j].classList.remove("active");
    }

    navBarItems[i].classList.add("active");

  
  }

}
