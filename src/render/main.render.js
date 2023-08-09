import WebpageContent from '../js/webpage';
import UniqueHash from '../security/HashCode';

export default function Render() {
	// Get Render's ID
	const ContainerDOM = document.getElementById('container');
	const Webpage = document.getElementById('webpage');

	// Hash Applied
	window.addEventListener('DOMContentLoaded', () => {
		ContainerDOM.id = UniqueHash();
	});

	// Render's the JS Component
	WebpageContent(Webpage);
}
