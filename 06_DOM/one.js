

const heading = document.getElementById('title');
console.log(heading); //<h1 id="title" class="heading">Dom Learning on Chai aur Code</h1>

heading.getAttribute('class'); //heading


document.getElementById('title').className; //heading

heading.style.backgroundColor ='green';
heading.style.padding ='15px';
heading.style.borderRadius ='10px';


//innerHTML Vs InnerText Vs TextContent

heading.innerHTML; //'Dom Learning on Chai aur Code <span style="display: none;">Hello</span>'
//=> Returns the entire HTML content inside the element.
//=> Includes HTML tags and hidden elements.

heading.innerText; //'Dom Learning on Chai aur Code'
//=>Returns only the visible text.
//=>Ignores text inside elements hidden with CSS (like display: none).
//=>Takes CSS styling into account.

heading.textContent;  //'Dom Learning on Chai aur Code Hello'
//=>Returns all text content, whether it's visible or hidden.


document.querySelector('h2'); //it selects first h2 element
document.querySelector('#subtitle');
document.querySelectorAll('input')[0].style.padding='10px';
document.querySelectorAll('input')[1].style.padding='10px';
document.querySelector('input[type=password]'); //<input type="password" placeholder="Enter Your Password" style="padding: 10px;">

document.querySelectorAll('input').forEach((item)=>{
    item.style.border ='none';
    item.style.outline="none";
    item.style.fontSize="20px";
    item.style.backgroundColor='#f2f2f2';
})


document.querySelector('ul li').style.color = "red";

document.querySelectorAll('ul li')[2].style.color = 'green';

const myUl = document.querySelector('ul');
const myli = myUl.querySelector('li');
console.log(myli)
myli.style.backgroundColor="white";
myli.style.padding="10px";
myli.style.borderRadius="10px";

myli.innerText = "First";


const allLi = document.querySelectorAll('ul li');
console.log(allLi); //NodeList(4) [li, li, li, li]

const allListItems = document.getElementsByClassName('list-item');
console.log(allListItems); //HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

const myConvertedList = Array.from(allListItems);
console.log(myConvertedList); //(4) [li.list-item, li.list-item, li.list-item, li.list-item]

myConvertedList.forEach((list)=>{
    list.style.fontSize='20px';
})


