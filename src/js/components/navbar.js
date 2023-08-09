import styles from '../../sass/modules/app.module.scss';
import { NavToggles } from './functions/navbar.toggle';

export default function Navbar(DOM) {
	DOM.innerHTML = `
        <div class='${styles.top}'>
            <!-- Logo and title -->
            <div class='${styles['logo-container']}'>
                <img class='${styles.logo}' src='nvidia.png' alt='nvidia logo' />
                <h1>Gaming Store</h1>
            </div>
            <button type='button' id='bar' class='${styles.button} ${styles.bar}'><i id='icons' class='fa-solid fa-bars'></i></button>

        </div>
            <!-- Collapsible section -->
        <div class='${styles.show}' id='collapsibleSection'>
                <button type='button' id='reg' class='${styles.button} ${styles.reg}'>Login / Register</button>
        </div>
    `;

	NavToggles();
}
