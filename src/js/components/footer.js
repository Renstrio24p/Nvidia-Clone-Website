import styles from '../../sass/modules/app.module.scss';

export default function Footer(DOM) {
	DOM.innerHTML = `
        <div>
            <p>&copy; copyright 2023 | Waren Gador</p> 
            <img class='${styles.nvidia}' src='nvidia-footer.svg' alt='nvidia' />
        </div>
    `;
}
