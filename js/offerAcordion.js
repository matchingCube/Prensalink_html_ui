$(document).ready(function () {
	var offerAccordionElement = document.getElementById("offerAccordion");
	var offerAccordion =
		offerAccordionElement.getElementsByClassName("collapse-btn");
	for (let i = 0; i < offerAccordion.length; i++) {
		offerAccordion[i].addEventListener("click", function () {
			this.classList.toggle("active");
			for (let j = 0; j < offerAccordion.length; j++) {
				if (i === j) {
					continue;
				} else if (offerAccordion[j].classList.contains("active")) {
					offerAccordion[j].classList.remove("active");
					break;
				}
			}
		});
	}
	window.onresize = function () {
		console.log($(document).width());
		var collapseBodies =
			offerAccordionElement.getElementsByClassName("offer-card-body");
		if (window.innerWidth < 768) {
			for (let i = 0; i < collapseBodies.length; i++) {
				collapseBodies[i].classList.add("collapse");
			}
		} else {
			for (let i = 0; i < collapseBodies.length; i++) {
				if (collapseBodies[i].classList.contains("collapse")) {
					collapseBodies[i].classList.remove("collapse");
				}
			}
		}
	};
});
