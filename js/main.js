let btn = document.querySelectorAll("#btn");
let lift = document.querySelector("#lift");
btn.forEach((el) => {
	el.addEventListener("click", () => {
		let floor2 = parseInt(el.textContent);
		Lift(floor2);
	});
});

function Lift(floor2) {
	let position = document.getElementById(`floor${floor2}`);
	let top = position.offsetTop;
	lift.style.transition = "top 0.5s ease-in-out";
	lift.style.top = `${top}px`;
}
btn.forEach((el) => {
	el.addEventListener("mousemove", () => {
		el.style.border = "2px solid red";
		el.style.color = "red";
	});
});
btn.forEach((el) => {
	el.addEventListener("mouseout", () => {
		el.style.border = "none";
		el.style.color = "black";
	});
});
