// Now populate the DOM
const heroMainTitle = document.querySelector(".hero-main-title");
const heroMainDesce = document.querySelector(".hero-main-description");
const hero2ndSHdng = document.querySelector(".hero-second-subheading");

heroMainTitle.innerHTML = hero.name;
heroMainDesce.innerHTML = hero.title;
hero2ndSHdng.innerHTML = hero.name.replace(/\s/g, "");

const aboutHeading = document.querySelector("#about-me .section-heading");

aboutHeading.innerHTML = about.title;
// In the description, we need to loop through the --- and create a new section-text for each
var desc = about.description.split("---");
// Make it in reverse order so that we can insert the new nodes before the original one
desc.reverse();
desc.forEach((d) => {
	const aboutDesc = document.createElement("p");
	aboutDesc.classList.add("section-text");
	aboutDesc.innerHTML = d.trim();

	aboutHeading.parentNode.insertBefore(
		aboutDesc,
		aboutHeading.nextSibling
	);
});

const projectsContainer = document.querySelector("#my-work");
projects.forEach((p) => {
	const link = document.createElement("a");
	link.href = p.link;
	link.target = "_blank";
	link.rel = "noopener noreferrer";
	link.classList.add("section-heading");
	link.textContent = p.name;

	const desc = document.createElement("p");
	desc.classList.add("section-text");
	desc.textContent = p.description;

	const project = document.createElement("div");
	project.appendChild(link);
	project.appendChild(desc);

	projectsContainer.appendChild(project);
});

// const skillsContainer = document.querySelector("#my-skills");
// skills.forEach((s) => {
//   const skillName = document.createElement("p");
//   skillName.classList.add("section-text");
//   skillName.textContent = s.name;

//   const skillLevel = document.createElement("div");
//   skillLevel.classList.add("skill-level");
//   skillLevel.style.width = s.level + "%";

//   const skill = document.createElement("div");
//   skill.classList.add("skill");
//   skill.appendChild(skillName);
//   skill.appendChild(skillLevel);

//   skillsContainer.appendChild(skill);
// });

const contactHeading = document.querySelector("#contact-me h1");
const contactDesc = document.querySelector("#contact-me .section-text");

contactHeading.innerHTML = contact.title;
contactDesc.innerHTML = contact.description;

const socialsContainer = document.querySelector("#socials");

contact.socials.forEach((s) => {
	const link = document.createElement("a");
	link.href = s.link;
	link.target = "_blank";
	link.rel = "noopener noreferrer";
	link.classList.add("section-heading");
	link.textContent = s.name;

	const desc = document.createElement("p");
	desc.classList.add("section-text");
	desc.textContent = s.description;

	const social = document.createElement("div");
	social.appendChild(link);
	social.appendChild(desc);

	socialsContainer.appendChild(social);
});