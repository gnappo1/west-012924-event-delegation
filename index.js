// document.querySelectorAll('#myList li').forEach(li => {
//   li.addEventListener('click', () => alert(`${li.innerText} was clicked`))
// })




document.getElementById("myList").addEventListener("click", function (event) {
//   // Check if the clicked element is an <li> element
  if (event.target.tagName === "LI") {
    alert(event.target.textContent);
  }
});