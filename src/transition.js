const transitionOut = () => {
	const container = document.querySelector("#page-container");
	container.style.opacity = 0;
};

const transitionIn = () => {
	const container = document.querySelector("#page-container");
	container.style.opacity = 1;
};

export { transitionOut, transitionIn };
