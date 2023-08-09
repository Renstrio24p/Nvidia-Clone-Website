import styles from '../../sass/modules/app.module.scss';

export default function Footer(DOM) {
	DOM.innerHTML = `
        <div>
            <img class='${styles.nvidia}' src='nvidia-footer.svg' alt='nvidia' />
            <p>&copy; copyright 2023 | <b>Waren Gador<b></p> 
        </div>
    `;
}
