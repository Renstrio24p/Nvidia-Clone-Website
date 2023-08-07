import styles from '../sass/modules/app.module.scss'
export default function WebpageContent(DOM){

    DOM.innerHTML = (`
        <nav class='${styles.navbar}'>
            <div class='${styles['logo-container']}'>
                <img class='${styles.logo}' src='nvidia.png' alt='nvidia logo' />
                <h1>Gaming Store</h1>
            </div>
            <p>Login / Register</p>
        </nav>
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
            <div class='${styles.rowlist}'>
                <div class='${styles.row} ${styles.box}'>
                    Box 1
                    <button type='button' class='${styles.button}'>Learn more</button>
                </div>
                <div class='${styles.row} ${styles.box}'>
                    Box 2
                    <button type='button' class='${styles.button}'>Learn more</button>
                </div>
                <div class='${styles.row} ${styles.box}'>
                    Box 3
                    <button type='button' class='${styles.button}'>Learn more</button>
                </div>
                <div class='${styles.row} ${styles.box}'>
                    Box 4
                    <button type='button' class='${styles.button}'>Learn more</button>
                </div>
                <div class='${styles.row} ${styles.box}'>
                    Box 5
                    <button type='button' class='${styles.button}'>Learn more</button>
                </div>
                <div class='${styles.row} ${styles.box}'>
                    Box 6
                    <button type='button' class='${styles.button}'>Learn more</button>
                </div>
                <div class='${styles.row} ${styles.box}'>
                    Box 7
                    <button type='button' class='${styles.button}'>Learn more</button>
                </div>
                <div class='${styles.row} ${styles.box}'>
                    Box 8
                    <button type='button' class='${styles.button}'>Learn more</button>
                </div>
                <div class='${styles.row}'>
                <img class='${styles.game}' src='resident.png' alt='game logo' />
                    <h2>Nvidia Games</h2>
                    <p>NVIDIA RTX™ and NVIDIA Omniverse™ deliver the performance 
                    to help professionals, creators, developers, and students worldwide
                     enhance creative workflows and build, operate, and connect metaverse
                      applications.</p>
                </div>
                <div class='${styles.row} ${styles.box}'>Box 10</div>
            </div>
         
        </main>
        <footer class='${styles.footer}'>
            <p>&copy; copyright 2023 | Waren Gador</p>
        </footer>
    `)

}