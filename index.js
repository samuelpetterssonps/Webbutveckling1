// Ikoner är från Lucide 20px <https://lucide.dev/icons/>

const LINKS = [
	{
		title: "Bra sajter",
		items: [
			{
				title: "Classroom",
				href: "https://classroom.google.com/c/MTYyNjM0OTk3MzQ0",
				icon:
					'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap preview-icon"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>'
			},
			{
				title: "Outlook",
				href: "https://outlook.com",
				icon:
					'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail preview-icon"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>'			},
			{
				title: "GitHub",
				href: "https://github.com/samuelpetterssonps",
				icon:
					'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-branch preview-icon"><path d="M15 6a9 9 0 0 0-9 9V3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/></svg>'
			},
		],
	},
	{
		title: "Webbutveckling 1",
		items: [
			{
				title: "Intro",
				href: "https://samuelpetterssonps.github.io/Webbutveckling1",
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code preview-icon"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>'
			},
			{
				title: "En dikt om dagen",
				href:
					"https://samuelpetterssonps.github.io/Webbutveckling1/endiktomdagen",
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-initial preview-icon"><path d="M15 5h6"/><path d="M15 12h6"/><path d="M3 19h18"/><path d="m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12"/><path d="M3.92 10h6.16"/></svg>'
			},
			{
				title: "Z-index",
				href:
					"https://samuelpetterssonps.github.io/Webbutveckling1/z-index/z-index.html",
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layer-arrow-up preview-icon"><path d="M12 14V4"/><path d="M7.674 10.774 2.58 13.09a1 1 0 000 1.822l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92 1 1 0 00-.59-.922l-5.078-2.308"/><path d="m9 7 3-3 3 3"/></svg>'
			},
			{
				title: "Internet-ordbok",
				href: "https://samuelpetterssonps.github.io/Webbutveckling1/internet-ordbok",
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-a preview-icon"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m8 13 4-7 4 7"/><path d="M9.1 11h5.7"/></svg>'
			}
		],
	},
	{
		title: "Programmering 1",
		items: [
			{
				title: "Variabler",
				href: "https://github.com/samuelpetterssonps/Variabler",
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-variable preview-icon"><path d="M8 21s-4-3-4-9 4-9 4-9"/><path d="M16 3s4 3 4 9-4 9-4 9"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>'
			},
			{
				title: "Parkeringsautomaten",
				href: "https://github.com/samuelpetterssonps/Parkeringsautomaten",
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-parking-meter preview-icon"><path d="M11 15h2"/><path d="M12 12v3"/><path d="M12 19v3"/><path d="M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"/><path d="M9 9a3 3 0 1 1 6 0"/></svg>'
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
