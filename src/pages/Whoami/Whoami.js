import React from 'react'
import styles from './Whoami.module.css'

function Whoami() {
    return (
        <main className={`${styles.container}`}>
            <div className={`${styles.whoamiImage}`}>
                <img src={process.env.PUBLIC_URL + '/images/whoami.png'} alt="" />
            </div>
            <div className={`${styles.whoamiContent} contentStyle`}>
                <div className="titleStyle">Lorem ipsum dolor sit.</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus voluptatem ipsam eveniet. Quod, cupiditate. Quibusdam id quos voluptatibus quidem error nemo, sunt tenetur maxime pariatur officiis assumenda optio hic deleniti vero? Harum eveniet nobis fugit numquam. Doloremque sed, nulla animi dolorum amet ipsa quia at velit quae. Delectus quam est amet totam quod, optio ipsum iste eaque ut ea laborum cumque adipisci officia impedit maiores in placeat numquam repellat sapiente magni? Expedita doloremque ipsa laboriosam voluptate iusto a eligendi cum non neque earum, accusamus accusantium, molestiae eius alias, dolores eaque ratione est odio. Nemo nesciunt distinctio assumenda exercitationem facilis?
            </div>
        </main>
    )
}

export default Whoami
