import menupic1 from "./menu-pic1.jpeg";
import menupic2 from "./menu-pic2.jpeg";
import menupic3 from "./menu-pic3.jpeg";
import menupic4 from "./menu-pic4.jpeg";
import menupic5 from "./menu-pic5.jpeg";
import menupic6 from "./menu-pic6.jpeg";
import menupic7 from "./menu-pic7.jpeg";
import menupic8 from "./menu-pic8.jpeg";

const createMenu = () => {
	//Create all necessary elements
	const contentContainer = document.querySelector("#content");

	const menuContainer = document.createElement("section");

	const heroTextContainer = document.createElement("div");
	const heroTextHeading = document.createElement("h1");
	const heroTextParagraph = document.createElement("p");

	const menuGroupButtonContainer = document.createElement("div");
	const menuGroupButton1 = document.createElement("p");
	const menuGroupButton2 = document.createElement("p");
	const menuGroupButton3 = document.createElement("p");
	const menuGroupButton4 = document.createElement("p");
	const menuGroupButton5 = document.createElement("p");

	const menuImageAreaContainer = document.createElement("div");

	const divider = document.createElement("div");

	//Append important containers elements to DOM
	contentContainer.append(menuContainer);
	menuContainer.append(
		heroTextContainer,
		menuGroupButtonContainer,
		menuImageAreaContainer,
		divider
	);
	heroTextContainer.append(heroTextHeading, heroTextParagraph);
	menuGroupButtonContainer.append(
		menuGroupButton1,
		menuGroupButton2,
		menuGroupButton3,
		menuGroupButton4,
		menuGroupButton5
	);

	//Build classes and ids
	menuContainer.setAttribute("id", "page-container");
	menuContainer.classList.add("menu-page-container");
	heroTextContainer.classList.add("hero-text-container");
	menuGroupButtonContainer.classList.add("group-button-container");
	menuImageAreaContainer.classList.add("image-area-container");
	divider.classList.add("divider");

	//Build content of containers
	heroTextHeading.innerText = "Flavorful Fireworks";
	heroTextParagraph.innerText =
		"Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum dolor.";
	menuGroupButton1.innerText = "All";
	menuGroupButton2.innerText = "Breakfast";
	menuGroupButton3.innerText = "Main Dishes";
	menuGroupButton4.innerText = "Drinks";
	menuGroupButton5.innerText = "Desserts";

	//Build function to append image area efficiently
	const imageDataArray = [
		["GHC 10.99", "Classic Burger", menupic1],
		["GHC 6.99", "Chocolate Milkshake", menupic2],
		["GHC 5.99", "Classic Fries", menupic3],
		["GHC 8.99", "Pancakes", menupic4],
		["GHC 3.99", "Ice Cream", menupic5],
		["GHC 9.99", "Chicken Burger", menupic6],
		["GHC 6.99", "Egg toast", menupic7],
		["GHC 1.99", "Regular Soda", menupic8],
	];

	const createMenuImages = () => {
		imageDataArray.forEach((item) => {
			const menuImageGroupContainer = document.createElement("div");
			const menuImagePrice = document.createElement("p");
			const menuImage = document.createElement("img");
			const menuImageCaption = document.createElement("h3");
			const menuImageSubCaption = document.createElement("P");

			menuImageGroupContainer.classList.add("image-group-container");
			menuImagePrice.classList.add("menu-image-price");
			menuImage.classList.add("menu-image");
			menuImageCaption.classList.add("menu-image-caption");
			menuImageSubCaption.classList.add("menu-image-sub-caption");

			menuImageAreaContainer.append(menuImageGroupContainer);
			menuImageGroupContainer.append(
				menuImagePrice,
				menuImage,
				menuImageCaption,
				menuImageSubCaption
			);

			menuImagePrice.innerText = item[0];
			menuImageCaption.innerText = item[1];
			menuImage.setAttribute("src", item[2]);
			menuImageSubCaption.innerText =
				"Lorem ipsum dolor sit amet dolor consectetur adipiscing elit";
		});
	};

	createMenuImages();
};

export default createMenu;
