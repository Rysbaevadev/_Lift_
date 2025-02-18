let btn = document.querySelectorAll("#btn");
let lift = document.querySelector("#lift");
let floor = document.querySelectorAll(".floor");

btn.forEach((el) => {
	el.addEventListener("click", () => {
		el.style.border = "2px solid red";
		el.style.color = "red";
	});
});
