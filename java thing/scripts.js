function addItem() {
    const value = document.querySelector('#form').value;  //form
    const list = document.querySelector('#items');   //list, the parent that its going to append it to 
  
    const li = document.createElement('li');  //creates a list
    li.innerHTML = value;  //inserts the value that came from the form as a text in the middle of the element
  
    list.appendChild(li); //append the li that has content in it to the list (the ul)
    document.querySelector('#form').value = ''; //clears the box after item is added. access the forms value/whatever is inside it, and replace it with '' (aka nothing)
  }
  