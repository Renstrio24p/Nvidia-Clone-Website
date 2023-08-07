import styles from '../sass/modules/app.module.scss'

export default function Navbar(DOM) {

    DOM.innerHTML = (`
        <div class='${styles['logo-container']}'>
            <img class='${styles.logo}' src='nvidia.png' alt='nvidia logo' />
            <h1>Gaming Store</h1>
        </div>
        <button type='button' class='${styles.button}'>Login / Register</button>
    `)

}