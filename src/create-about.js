import pic1 from "./ahamburger.jpg";
import pic3 from "./drool-burger.jpg";
const createAboutHero = () => {
	//Create all necessary elements
	const contentContainer = document.querySelector("#content");
	const aboutContainer = document.createElement("section");
	const aboutHeroTextContainer = document.createElement("div");
	const aboutHeroText = document.createElement("div");
	const aboutMiniHeading = document.createElement("p");
	const aboutHeading = document.createElement("h1");
	const aboutParagraph = document.createElement("p");
	const aboutHeroImageContainer = document.createElement("div");
	const aboutHeroImage = document.createElement("img");
	const aboutHeroImageAddress = pic3;

	//Append important containers elements to DOM
	contentContainer.append(aboutContainer);
	aboutContainer.append(aboutHeroTextContainer);
	aboutHeroTextContainer.append(aboutHeroText);
	aboutHeroTextContainer.append(aboutHeroImageContainer);
	aboutHeroText.append(aboutMiniHeading);
	aboutHeroText.append(aboutHeading);
	aboutHeroText.append(aboutParagraph);
	aboutHeroImageContainer.append(aboutHeroImage);

	//Add document generic classes
	aboutContainer.classList.add("about-page");
	aboutContainer.setAttribute("id", "page-container");
	aboutHeroTextContainer.classList.add("about-hero");
	aboutHeroText.classList.add("about-hero-text");
	aboutHeroImageContainer.classList.add("about-hero-image");

	//Build AboutHeroText Area
	aboutMiniHeading.setAttribute("id", "mini-heading");
	aboutMiniHeading.innerText = "About Lick-Ur-Lips";
	aboutHeading.innerHTML =
		"<h1>Our story started just <span>10 years</span> ago</h1>";
	aboutParagraph.innerText =
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam impedit ut nulla culpa commodi odit architecto at, repellat nobis cupiditate iure labore dolore, nemo non, vel error vero recusandae perferendis. Amet consectetur adipisicing elit. Nam impedit ut nulla culpa commodi odit architecto at, repellat nobis cupiditate iure labore dolore, nemo non";

	//Build AboutHeroImage Area
	aboutHeroImage.setAttribute("src", aboutHeroImageAddress);
	aboutHeroImage.setAttribute("alt", "delicious burger");

	//Set Page Name
	const pageName = "About";
};

const createAboutStats = () => {
	//Create base elements
	const contentContainer = document.querySelector("#content");
	const aboutPageContainer = document.querySelector("#page-container");
	const aboutStatsContainer = document.createElement("div");
	const divider = document.createElement("div");

	//Append base elements to DOM
	aboutPageContainer.append(aboutStatsContainer, divider);

	//Add document generic classes
	aboutStatsContainer.classList.add("about-stats");
	divider.classList.add("divider");

	//Loop to create repeating div-h3-p blocks
	for (let i = 0; i < 4; i++) {
		let statsBoxContainer = document.createElement("div");
		let statsBoxH3 = document.createElement("h3");
		let statsBoxP = document.createElement("p");

		statsBoxContainer.append(statsBoxH3, statsBoxP);
		statsBoxContainer.classList.add("stats-box");

		aboutStatsContainer.append(statsBoxContainer);
	}

	//Fill div-h3-p blocks with info
	const statsBoxContainer1 = document.querySelectorAll(".stats-box")[0];
	const statsBoxContainer2 = document.querySelectorAll(".stats-box")[1];
	const statsBoxContainer3 = document.querySelectorAll(".stats-box")[2];
	const statsBoxContainer4 = document.querySelectorAll(".stats-box")[3];

	statsBoxContainer1.querySelector("h3").innerHTML = "50K<span>+</span>";
	statsBoxContainer2.querySelector("h3").innerHTML = "100<span>+</span>";
	statsBoxContainer3.querySelector("h3").innerHTML = "90K<span>+</span>";
	statsBoxContainer4.querySelector("h3").innerHTML = "99.5<span>%</span>";

	statsBoxContainer1.querySelector("p").innerText = "Happy customers";
	statsBoxContainer2.querySelector("p").innerText = "Retail Locations";
	statsBoxContainer3.querySelector("p").innerText = "Successful deliveries";
	statsBoxContainer4.querySelector("p").innerText = "Customer satisfaction";
};

const createAboutSubjectOne = () => {
	//Create base elements
	const contentContainer = document.querySelector("#content");
	const aboutPageContainer = document.querySelector("#page-container");
	const aboutSubjectContainer = document.createElement("div");
	const aboutTextArea = document.createElement("div");
	const aboutMiniHeading = document.createElement("p");
	const aboutHeading = document.createElement("h2");
	const aboutParagraph = document.createElement("p");
	const aboutImageContainer = document.createElement("div");
	const aboutImage = document.createElement("img");
	const aboutImageAddress = pic1;
	const divider = document.createElement("div");

	//Append base elements to DOM
	aboutPageContainer.append(aboutSubjectContainer, divider);
	aboutSubjectContainer.append(aboutTextArea, aboutImageContainer);
	aboutTextArea.append(aboutMiniHeading, aboutHeading, aboutParagraph);
	aboutImageContainer.append(aboutImage);

	//Add document generic classes
	aboutSubjectContainer.classList.add("about-subject");
	divider.classList.add("divider");
	aboutTextArea.classList.add("about-text-area");
	aboutImageContainer.classList.add("about-image-area");

	//Build Content
	aboutMiniHeading.setAttribute("id", "mini-heading");
	aboutMiniHeading.innerText = "Our mission";
	aboutHeading.innerText = "Seducing every single taste bud";
	aboutParagraph.innerText =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at eaque rerum praesentium,	ducimus doloribus officia? Delectus necessitatibus a veritatis omnis. Saepe et soluta	repudiandae deserunt delectus aperiam, recusandae architecto. Lorem ipsum dolor sit amet	consectetur adipisicing elit. Blanditiis cum veritatis vitae. Reiciendis dicta ipsum quod	officiis similique voluptatum sed dolor cupiditate? Ratione iure rerum explicabo veritatis	placeat, ipsa quasi.";
	aboutImage.setAttribute("src", aboutImageAddress);
	aboutImage.setAttribute("alt", "a burger and fries");
};

const createAboutSubjectTwo = () => {
	//Create base elements
	const contentContainer = document.querySelector("#content");
	const aboutPageContainer = document.querySelector("#page-container");
	const aboutSubjectContainer = document.createElement("div");
	const aboutTextArea = document.createElement("div");
	const aboutMiniHeading = document.createElement("p");
	const aboutHeading = document.createElement("h2");
	const aboutParagraph = document.createElement("p");
	const aboutImageContainer = document.createElement("div");
	const aboutImage = document.createElement("img");
	const aboutImageAddress = "/src/ahamburger.jpg";
	const divider = document.createElement("div");

	//Append base elements to DOM
	aboutPageContainer.append(aboutSubjectContainer, divider);
	aboutSubjectContainer.append(aboutImageContainer, aboutTextArea);
	aboutImageContainer.append(aboutImage);
	aboutTextArea.append(aboutMiniHeading, aboutHeading, aboutParagraph);

	//Add document generic classes
	aboutSubjectContainer.classList.add("about-subject");
	divider.classList.add("divider");
	aboutImageContainer.classList.add("about-image-area");
	aboutTextArea.classList.add("about-text-area");

	//Build Content
	aboutImage.setAttribute("src", aboutImageAddress);
	aboutImage.setAttribute("alt", "a burger");
	aboutMiniHeading.setAttribute("id", "mini-heading");
	aboutMiniHeading.innerText = "Our vision";
	aboutHeading.innerText = "10 steps ahead of the competition";
	aboutParagraph.innerText =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at eaque rerum praesentium,	ducimus doloribus officia? Delectus necessitatibus a veritatis omnis. Saepe et soluta	repudiandae deserunt delectus aperiam, recusandae architecto. Lorem ipsum dolor sit amet	consectetur adipisicing elit. Blanditiis cum veritatis vitae. Reiciendis dicta ipsum quod	officiis similique voluptatum sed dolor cupiditate? Ratione iure rerum explicabo veritatis	placeat, ipsa quasi.";
};

export {
	createAboutHero,
	createAboutStats,
	createAboutSubjectOne,
	createAboutSubjectTwo,
};
