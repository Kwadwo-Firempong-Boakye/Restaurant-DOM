import "./index.css";

const homePageDOM = (() => {
	const hamburger = document.querySelector(".hamburger");
	const mobileMenu = document.querySelector(".new-menu");
	return { hamburger, mobileMenu };
})();

const homePageEvents = (() => {
	homePageDOM.hamburger.addEventListener("click", (e) => {
		showMobileMenu(e);
	});
	window.addEventListener("click", hideMobileMenu);
})();

function showMobileMenu(e) {
	e.stopPropagation();
	if (homePageDOM.mobileMenu.style.top == "-500px") {
		homePageDOM.mobileMenu.style.top = "96px";
	} else {
		homePageDOM.mobileMenu.style.top = "-500px";
	}
}

function hideMobileMenu() {
	if (homePageDOM.mobileMenu.style.top != "-500px") {
		homePageDOM.mobileMenu.style.top = "-500px";
	}
}
