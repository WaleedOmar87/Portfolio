document.addEventListener("DOMContentLoaded", () => {
	// main settings
	const Settings = {
		accentColor: "#c1a57b",
		easing: "easeInOut",
		duration: 4000,
	};

	const renderProgressBar = () => {
		// Init progressBar when dom is loaded
		const ProgressSections = document.querySelectorAll(".animated-bar");
		ProgressSections.forEach((elm) => {
			let percentage = Number(elm.getAttribute("data-percentage"));
			elm.insertAdjacentHTML("afterbegin", `<span>${percentage}%</span>`);
			let svg = new ProgressBar.Circle(elm, {
				strokeWidth: 4,
				color: Settings.accentColor,
				duration: Settings.duration,
				easing: Settings.easing,
			});
			svg.animate(percentage / 100);
		});
	};

	const clickToScroll = () => {
		const menuItems = document.querySelectorAll("nav.menu ul li a , .goto");
		menuItems.forEach((elm) => {
			elm.addEventListener("click", (event) => {
				event.preventDefault();
				let container = elm.getAttribute('href');
				document.querySelector(container).scrollIntoView({
					behavior: "smooth"
				});
			});
		});
	};

	const animateSections = (selector, cssClass) => {
		const nodes = document.querySelectorAll(selector);
		nodes.forEach((elm) => {
			let watcher = scrollMonitor.create(elm);
			watcher.enterViewport(() => {
				elm.classList.add(cssClass, -300);
				if (
					elm.classList.contains("skills") &&
					!elm.classList.contains("rendered")
				) {
					renderProgressBar();
					elm.classList.add("rendered");
				}
			});
		});
	};
	animateSections("[data-animated-headers]", "animated-in");
	animateSections(".animated-hidden", "animated-visible");
	animateSections(".animated-hidden-left", "animated-visible-left");
	clickToScroll()
});
