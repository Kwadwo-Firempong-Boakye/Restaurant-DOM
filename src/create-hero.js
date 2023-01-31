import pic4 from "./hero-burger.jpeg"
const createHero = () => {
	//Create all necessary elements
	const contentContainer = document.querySelector("#content");
	const mainContainer = document.createElement("main");
	const mainBackground = document.createElement("div");
	const heroArea = document.createElement("div");
	const heroText = document.createElement("section");
	const heroHeading = document.createElement("h1");
	const heroSubtext = document.createElement("p");
	const heroButtonArea = document.createElement("div");
	const orderNowButton = document.createElement("button");
	const seeMenuButton = document.createElement("button");
	const heroImageArea = document.createElement("section");
	const heroImage = document.createElement("img");
	const heroImageAddress = pic4;

	//Append important containers elements to DOM
	contentContainer.append(mainContainer);
	mainContainer.append(mainBackground, heroArea);
	mainContainer.setAttribute("id", "page-container");
	heroArea.append(heroText, heroImageArea);
	heroText.append(heroHeading, heroSubtext, heroButtonArea);
	heroImageArea.append(heroImage);
	heroButtonArea.append(orderNowButton, seeMenuButton);

	//Add document generic classes
	mainBackground.classList.add("main-background");
	heroArea.classList.add("hero-area");
	heroText.classList.add("hero-text");
	heroHeading.classList.add("hero-heading");
	heroSubtext.classList.add("hero-subtext");
	heroButtonArea.classList.add("hero-button-area");
	orderNowButton.classList.add("hero-button", "order-now");
	seeMenuButton.classList.add("hero-button", "see-menu");
	heroImageArea.classList.add("hero-images");

	//Build HeroText Area
	heroHeading.innerHTML = "The juiciest cheeseburgers <span>in Accra</span>";
	heroSubtext.innerText =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum aliquamminima sit enim cumque ab, praesentium at officia tempora aspernatur natus!";
	orderNowButton.innerText = "Order Now";
	seeMenuButton.innerText = "See Menu";

	//Build HeroImage Area
	heroImage.setAttribute("src", heroImageAddress);
	heroImage.setAttribute("alt", "picture of juicy burger");

	//Set Page Name
	const pageName = "Home";
};

export default createHero;
