import pic2 from "./cropanimburg.gif";

const createNav = () => {
	//Create all necessary elements
	const contentContainer = document.querySelector("#content");
	const navContainer = document.createElement("nav");
	const logoArea = document.createElement("section");
	const navMenu = document.createElement("section");
	const logoImage = document.createElement("img");
	const logoAddress = pic2;
	const logoName = document.createElement("p");
	const homeMenu = document.createElement("p");
	const aboutMenu = document.createElement("p");
	const menuMenu = document.createElement("p");
	const contactMenu = document.createElement("p");
	const orderButton = document.createElement("button");
	const gitButton = document.createElement("button");
	const svgHamburger =
		'<svg class="hamburger" fill="currentColor" viewBox="0 0 100 80" width="40" height="40"><rect width="100" height="12"></rect><rect y="30" width="100" height="12"></rect><rect y="60" width="100" height="12"></rect></svg>';
	const newMenu = document.createElement("div");
	const newHomeMenu = document.createElement("p");
	const newAboutMenu = document.createElement("p");
	const newMenuMenu = document.createElement("p");
	const newContactMenu = document.createElement("p");

	//Append important containers elements to DOM
	contentContainer.append(navContainer, newMenu);
	navContainer.append(logoArea, navMenu);

	//Add document generic classes
	logoArea.classList.add("logo-area");
	navMenu.classList.add("menu");
	newMenu.classList.add("new-menu");

	//Build logoArea
	logoArea.append(logoImage, logoName);
	logoImage.setAttribute("src", logoAddress);
	logoImage.setAttribute("alt", "burger-logo");
	logoName.innerText = "Lick-Ur-Lips";

	// Build Menu
	navMenu.append(
		homeMenu,
		aboutMenu,
		menuMenu,
		contactMenu,
		orderButton,
		gitButton
	);
	homeMenu.innerText = "Home";
	homeMenu.setAttribute("id", "home-link");
	aboutMenu.innerText = "About";
	aboutMenu.setAttribute("id", "about-link");
	menuMenu.innerText = "Menu";
	menuMenu.setAttribute("id", "menu-link");
	contactMenu.innerText = "Contact";
	contactMenu.setAttribute("id", "contact-link");
	orderButton.innerText = "Order Now";
	orderButton.classList.add("order-button");
	gitButton.innerText = "See Code";
	gitButton.classList.add("git-button");
	navMenu.innerHTML += svgHamburger;

	// Build Mobile Menu
	newMenu.append(newHomeMenu, newAboutMenu, newMenuMenu, newContactMenu);
	newHomeMenu.innerText = "Home";
	newHomeMenu.setAttribute("id", "mobile-home-link");
	newAboutMenu.innerText = "About";
	newAboutMenu.setAttribute("id", "mobile-about-link");
	newMenuMenu.innerText = "Menu";
	newMenuMenu.setAttribute("id", "mobile-menu-link");
	newContactMenu.innerText = "Contact";
	newContactMenu.setAttribute("id", "mobile-contact-link");

	//Build Mobile Menu Logic
	const hamburger = document.querySelector(".hamburger");

	hamburger.addEventListener("click", (e) => {
		e.stopPropagation();
		toggleMobileMenu(e);
	});

	const toggleMobileMenu = (e) => {
		if (newMenu.style.top == "-500px") {
			newMenu.style.top = "96px";
		} else {
			newMenu.style.top = "-500px";
		}
	};

	const hideMobileMenu = () => {
		if (newMenu.style.top != "-500px") {
			newMenu.style.top = "-500px";
		}
	};

	window.addEventListener("click", hideMobileMenu);
};

export default createNav;
