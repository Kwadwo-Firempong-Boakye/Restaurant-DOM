import "./index.css";
import "./about-page.css";
import createNav from "./create-nav";
import createHero from "./create-hero";
import {
	createAboutHero,
	createAboutStats,
	createAboutSubjectOne,
	createAboutSubjectTwo,
} from "./create-about";
import { transitionOut, transitionIn } from "./transition";

const createHomePage = () => {
	createNav();
	createHero();
	rePopulatePage();
	setTimeout(() => {
		transitionIn();
	}, 10);
};

const createLandingPage = () => {
	createHero();
	rePopulatePage();
	setTimeout(() => {
		transitionIn();
	}, 10);
};

const createAboutPage = () => {
	createAboutHero();
	createAboutStats();
	createAboutSubjectOne();
	createAboutSubjectTwo();
	rePopulatePage();
	setTimeout(() => {
		transitionIn();
	}, 10);
};

const rePopulatePage = () => {
	const contentContainer = document.getElementById("content");
	const pageContainer = document.getElementById("page-container");
	const homeLink = document.getElementById("home-link");
	const aboutLink = document.getElementById("about-link");
	const menuLink = document.getElementById("menu-link");
	const contactLink = document.getElementById("contact-link");
	const mobileHomeLink = document.getElementById("mobile-home-link");
	const mobileAboutLink = document.getElementById("mobile-about-link");
	const mobileMenuLink = document.getElementById("mobile-menu-link");
	const mobileContactLink = document.getElementById("mobile-contact-link");
	const navLinks = [
		homeLink,
		aboutLink,
		menuLink,
		contactLink,
		mobileHomeLink,
		mobileAboutLink,
		mobileMenuLink,
		mobileContactLink,
	];
	navLinks.forEach((item) => {
		item.addEventListener("click", (e) => {
			transitionOut();
			setTimeout(() => {
				contentContainer.removeChild(pageContainer);
				if (item.innerText == "About") {
					createAboutPage();
				} else if (item.innerText == "Home") {
					createLandingPage();
				}
			}, 1300);
		});
	});
};

window.addEventListener("load", createHomePage);
