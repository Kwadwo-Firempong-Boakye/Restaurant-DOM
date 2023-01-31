const transitionOut = () => {
	const container = document.querySelector("#page-container");
	container.style.opacity = 0;
};

const transitionIn = () => {
	const container = document.querySelector("#page-container");
	container.style.opacity = 1;
};

const HeroImageSlideIn = () => {
	const element = document.querySelector(".hero-images").firstChild;
	element.style.opacity = 1;
	element.style.right = "70px";
};

const HeroTextSlideIn = () => {
	const element = document.querySelector(".hero-text");
	element.style.opacity = 1;
	element.style.right = 0;
};

export { transitionOut, transitionIn, HeroImageSlideIn, HeroTextSlideIn };
