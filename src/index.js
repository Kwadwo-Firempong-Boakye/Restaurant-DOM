import "./index.css";
import createNav from "./create-nav";
import createHero from "./create-hero";

const createHomePage = () => {
	createNav();
	createHero();
};

window.addEventListener("load", createHomePage);
