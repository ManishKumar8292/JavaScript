// document.querySelector('#owl').onclick = function(){
//   alert("Owl Cliked")
// }

document.querySelector("#owl").addEventListener("click", function (e) {
  console.log(e);
});

//Type ,timestamp, defaultPrevented
//target,toElement,srcElement,currentTarget
//clientX,clientY,screenX,screenY
//altKey,ctrlKey,shiftKey,keyCode

//Event Bubbling => if we add event in child element And Parent element too. then event triggerd child to parrent that is colled event bubbling or Propagation.
document.querySelector("#images").addEventListener(
  "click",
  () => {
    console.log("Clicked on Ul");
  },
  false,
);

document.querySelector("#owl").addEventListener(
  "click",
  () => {
    console.log("Clicked on owl Image"); //Clicked on owl Image //Clicked on Ul
  },
  false,
);

//Event Capturing => if we add event in child element And Parent element too. then event triggerd parent to child whith the help of third parameter 'true' that is called event Capturing.
// document.querySelector("#images").addEventListener(
//   "click",
//   () => {
//     console.log("Clicked Inside the UL");
//   },
//   false,
// );

// document.querySelector("#river").addEventListener(
//   "click",
//   () => {
//     console.log("Clicked on River Image"); //Clicked on River Image //Clicked on Ul
//   },
//   false,
// );

//If we want to stop
document.querySelector("#images").addEventListener(
  "click",
  () => {
    console.log("Clicked Inside the UL");
  },
  false,
);

document.querySelector("#river").addEventListener(
  "click",
  (e) => {
    console.log("Clicked on River Image"); //clicked on River Image
    e.stopPropagation();
  },
  false,
);

//we are cancelling default behavier

document.querySelector("#google").addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("Google Clicked");
});

//we want to remove item where we clicked

// document.querySelector("#images").addEventListener("click", function (e) {
//   console.log(e.target);
//   removeElement = e.target.parentNode;
//   removeElement.remove();
// },false);
//removeElement.parentNode.removeChild(removeElement)

document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target);
  removeElement = e.target.parentNode;
  if (e.target.tagName === "IMG") {
    removeElement.parentNode.removeChild(removeElement);
  }
});
