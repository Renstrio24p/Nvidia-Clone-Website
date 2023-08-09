import styles from '../../../sass/modules/app.module.scss';

export const NavToggles = () => {
	const NavToggle = document.getElementById('bar');
	const ShowReg = document.getElementById('icons');
	const CollapsibleSection = document.getElementById('collapsibleSection');

	NavToggle.addEventListener('click', Toggle);

	function Toggle() {
		CollapsibleSection.classList.toggle(`${styles.show}`);
		ShowReg.classList.toggle('fa-xmark');
	}
};
