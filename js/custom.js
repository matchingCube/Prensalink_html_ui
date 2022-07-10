$(document).ready(function () {
	window.onscroll = function () {
		if (
			document.body.scrollTop > 0.1 ||
			document.documentElement.scrollTop > 0.1
		) {
			$(".navbar-container").addClass("active");
		} else {
			$(".navbar-container").removeClass("active");
		}
	};
	$(".custom-toggler").click(function () {
		$(".toggleBtnImg").toggleClass("closed");
		$(".backdrop").toggleClass("show");
		$(".navbar-deco-hline").toggleClass("show");
		$(".navbar-deco-vline").toggleClass("show");
		if ($(".toggleBtnImg").hasClass("closed")) {
			$(".toggleBtnImg").attr("src", "./asset/icon/close.svg");
		} else {
			$(".toggleBtnImg").attr("src", "./asset/icon/collapseToggleMenu.svg");
		}
	});
	$(".custom-toggler").dblclick(function () {
		$(".toggleBtnImg").toggleClass("expanded");
		$(".backdrop").toggleClass("show");
		$(".navbar-deco-hline").toggleClass("show");
		$(".navbar-deco-vline").toggleClass("show");
		if ($(".toggleBtnImg").hasClass("expanded")) {
			$(".toggleBtnImg").attr("src", "./asset/icon/close.svg");
		} else {
			$(".toggleBtnImg").attr("src", "./asset/icon/collapseToggleMenu.svg");
		}
	});
});
