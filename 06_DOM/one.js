

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