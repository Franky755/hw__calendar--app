
//Create a modal- add tasks


// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// // Add categories

// //Get categories container
// let cate = document.getElementById ('myModalContent');

// //Get the categories selected
// let cateSelected = document.querySelector ('.category-list')


// // When the category selected, the add Task will change color respectively
// cateSelected.addEventListener ("change", myFunction);

// //Get the index of the category
// let value = cateSelected.options[cateSelected.selectedIndex].value;

// function myFunction (){ // define
// 	cate.styles.backgroundColor:"red";
// }

// if(value ==="1"){
// 	myFunction(); // implement
// }
// console.log('category', cateSelected);

// console.log('value', value);




// function myFunction() {
//   define
//   cate.style.backgroundColor = "#22a6b3";

//Get the index of the category
let value = cateSelected.options[cateSelected.selectedIndex].value;




// //Get color object list
// var color = {blue:"#1e3799", green:"#1dd1a1", red:"#e55039", yellow:"#f6b93b", orange:"#fa983a", gray:"#8395a7", pink: "#ff9ff3"};





