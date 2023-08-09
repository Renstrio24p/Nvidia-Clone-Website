import Webpage_Render from '../render/webpage.render';
import styles from '../sass/modules/app.module.scss';

export default function WebpageContent(DOM) {
	DOM.innerHTML = `
        <nav id='navbar' class='${styles.navbar}'></nav>
        <main>
            <div class='${styles.banner}'>
                <div class='${styles.overlay}'>
                    <h2>GeForce RTX 40 Series</h2>
                    <h3>Beyond Fast</h3>
                    <p class='${styles['rtx-info']}'>
                        NVIDIA® GeForce RTX™ 40 Series GPUs are beyond fast 
                        for gamers and creators. They're powered by the ultra-efficient 
                        NVIDIA Ada Lovelace architecture which delivers a quantum leap in 
                        both performance and AI-powered graphics. Experience lifelike virtual 
                        worlds with ray tracing and ultra-high FPS gaming with the lowest latency. 
                        Discover revolutionary new ways to create and unprecedented workflow acceleration.
                    </p>
                    <button class='${styles.button2}'>See more details</button>
                </div>
            </div>
            <div id='rowlist' class='${styles.rowlist}'></div>
         
        </main>
        <footer id='footer' class='${styles.footer}'></footer>
    `;

	Webpage_Render();
}
