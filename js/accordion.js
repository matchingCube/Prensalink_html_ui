$(document).ready(function () {
	var accordionElement = document.getElementById("accordion");
	var accordion = accordionElement.getElementsByClassName("collapse-btn");
	var doubtCard = document.getElementsByClassName("doubt-card");
	for (let i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener("click", function () {
			doubtCard[i].classList.toggle("active");
			this.classList.toggle("active");
			for (let j = 0; j < accordion.length; j++) {
				if (i === j) {
					continue;
				} else if (doubtCard[j].classList.contains("active")) {
					doubtCard[j].classList.remove("active");
					accordion[j].classList.remove("active");
					break;
				}
			}
		});
	}
});
