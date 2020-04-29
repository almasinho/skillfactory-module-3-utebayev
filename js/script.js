let membersName = document.querySelector('.member-photo');

membersName.addEventListener('mouseover', showNames);

function showNames() {
	let ggg = document.querySelector('.sokina');
	ggg.classList.add('visible');
}

membersName.addEventListener('mouseout', hideNames);

function hideNames() {
	let ggg = document.querySelector('.sokina');
	ggg.classList.remove('visible');
}