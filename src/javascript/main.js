document.addEventListener("DOMContentLoaded", () => {
	// main settings
	const Settings = {
		accentColor: "#c1a57b",
		easing: "easeInOut",
		duration: 4000,
	};

	const RenderProgressBar = () => {
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
	RenderProgressBar();

	const Animate = (selector, cssClass) => {
		const nodes = document.querySelectorAll(selector);
		nodes.forEach((elm) => {
			let watcher = scrollMonitor.create(elm);
			watcher.enterViewport(() => {
				elm.classList.add(cssClass, -300);
			});
			watcher.exitViewport(() => {
				elm.classList.remove(cssClass, -300);
			});
		});
	};
	Animate("[data-animated-headers]", "animated-in");
	Animate(".animated-hidden", "animated-visible");
	Animate(".animated-hidden-left", "animated-visible-left");
});
