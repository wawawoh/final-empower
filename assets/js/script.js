const headerList = document.querySelectorAll(".accordian-header");

//for each pressed, add active to the next element, or inactive

headerList.forEach((header) => {
  header.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
    console.log(e.target);
  });
});
