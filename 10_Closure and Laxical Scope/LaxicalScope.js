function Outer() {
  let username = "manish";
  function display() {
    console.log("Inner Variable :", username);
  }
  display();
}
console.log(Outer()); //Inner Variable : manish

/* Lexical scope means a function can access variables from the scope where it was created, including its parent scopes, but parent scopes cannot access variables inside the child function. */
