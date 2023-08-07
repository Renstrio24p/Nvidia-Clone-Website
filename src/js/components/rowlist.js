import styles from '../../sass/modules/app.module.scss';

export default function RowList(DOM){

    DOM.innerHTML = (`
        <div class='${styles.row} ${styles.box}'>
            <img class='${styles.rtx30}' src='rtx-30.jpeg' alt='rtx 30' />
            <button type='button' class='${styles.button}'>Learn more</button>
        </div>
        <div class='${styles.row} ${styles.box}'>
            <img class='${styles.rtx30}' src='rtx-40.jpeg' alt='rtx 30' />
            <button type='button' class='${styles.button}'>Learn more</button>
        </div>
        <div class='${styles.row} ${styles.box}'>
            <img class='${styles.rtx30}' src='rtx-30.jpeg' alt='rtx 30' />
            <button type='button' class='${styles.button}'>Learn more</button>
        </div>
        <div class='${styles.row} ${styles.box}'>
            <img class='${styles.rtx30}' src='gtx-16.jpeg' alt='rtx 30' />
            <button type='button' class='${styles.button}'>Learn more</button>
        </div>
        <div class='${styles.row} ${styles.box}'>
            <img class='${styles.rtx30}' src='rtx-30.jpeg' alt='rtx 30' />
            <button type='button' class='${styles.button}'>Learn more</button>
        </div>
        <div class='${styles.row} ${styles.box}'>
            <img class='${styles.rtx30}' src='rtx-30.jpeg' alt='rtx 30' />
            <button type='button' class='${styles.button}'>Learn more</button>
        </div>
        <div class='${styles.row} ${styles.box}'>
            <img class='${styles.rtx30}' src='rtx-40.jpeg' alt='rtx 30' />
            <button type='button' class='${styles.button}'>Learn more</button>
        </div>
        <div class='${styles.row} ${styles.box}'>
            <img class='${styles.rtx30}' src='rtx-40.jpeg' alt='rtx 30' />
            <button type='button' class='${styles.button}'>Learn more</button>
        </div>
        <div class='${styles.row}'>
            <h2>Introducing NVIDIA Jetson AGX Orin Industrial </h2>
            <p>
                Embedded edge AI is transforming industrial environments by introducing intelligence
                and real-time processing to even the most challenging settings. Edge AI is increasingly 
                being used in agriculture, construction, energy, aerospace, satellites, the public sector, 
                and more. With the NVIDIA Jetson edge AI and robotics platform, you can deploy AI and compute
                for sensor fusion in these complex environments.
                At COMPUTEX 2023, NVIDIA announced the new Jetson AGX Orin Industrial module,
                which brings the next level of computing to harsh environments. This new module
                extends the capabilities of the previous-generation NVIDIA Jetson AGX Xavier
                Industrial and the commercial Jetson AGX Orin modules, by bringing server-class
                performance to ruggedized systems.
            </p>
            <i class="fa-solid fa-angle-down"></i> <p>Quick Links</p>
        </div>
        <div class='${styles.row} ${styles.box}'>
            <img class='${styles.game}' src='resident.png' alt='game logo' />
            <h2>Nvidia Games</h2>
            <p>
                NVIDIA RTX™ and NVIDIA Omniverse™ deliver the performance 
                to help professionals, creators, developers, and students worldwide
                enhance creative workflows and build, operate, and connect metaverse
                applications.
            </p>
        </div>
`)

}