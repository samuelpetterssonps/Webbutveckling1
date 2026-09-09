const LINKS = [
	{
		title: "Bra sajter",
		items: [
			{
				title: "Classroom",
				href: "https://classroom.google.com/c/MTYyNjM0OTk3MzQ0",
				icon:
					'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>',
			},
			{
				title: "Outlook",
				href: "https://outlook.com",
				icon:
					'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>',
			},
			{
				title: "GitHub",
				href: "https://github.com/samuelpetterssonps",
				icon:
					'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-branch"><path d="M15 6a9 9 0 0 0-9 9V3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/></svg>',
			},
		],
	},
	{
		title: "Webbutveckling 1",
		items: [
			{
				title: "Intro",
				href: "https://samuelpetterssonps.github.io/Webbutveckling1/intro",
			},
			{
				title: "En dikt om dagen",
				href:
					"https://samuelpetterssonps.github.io/Webbutveckling1/endiktomdagen",
			},
			{
				title: "Z-index",
				href:
					"https://samuelpetterssonps.github.io/Webbutveckling1/z-index/z-index.html",
			},
		],
	},
	{
		title: "Programmering 1",
		items: [
			{
				title: "Variabler",
				href: "https://github.com/samuelpetterssonps/Variabler",
			},
			{
				title: "Parkeringsautomaten",
				href: "https://github.com/samuelpetterssonps/Parkeringsautomaten",
			},
		],
	},
];

const linksElement = document.querySelector("#links");

for (const category of LINKS) {
	const heading = document.createElement("h2");
	heading.innerHTML = category.title;
	linksElement.appendChild(heading);

	const unorderedList = document.createElement("ul");
	unorderedList.classList.add("rutnät");
	linksElement.appendChild(unorderedList);

	for (const item of category.items) {
		const listItem = document.createElement("li");
		const anchor = document.createElement("a");
		listItem.appendChild(anchor);

		if (item.icon) {
			anchor.innerHTML = item.title + item.icon;
		} else {
			anchor.innerText = item.title;
		}

		anchor.href = item.href;
		anchor.target = "_blank";
		anchor.rel = "noopener noreferrer";
		unorderedList.appendChild(listItem);
	}
}
