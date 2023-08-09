import classNames from 'classnames/bind';
import styles from './sass/modules/app.module.scss';
import Render from './render/main.render';

export const cx = classNames.bind(styles);

export default function Start(DOM) {
	const FontAwesome = document.createElement('script');
	FontAwesome.src = 'https://kit.fontawesome.com/6b203b1712.js';
	FontAwesome.crossOrigin = 'anonymous';
	document.head.append(FontAwesome);

	DOM.innerHTML = `
        <div id='container'> 
            <div id='webpage'></div>
        </div>

        `;

	Render();
}
