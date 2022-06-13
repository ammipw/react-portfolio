import Head from 'next/head'
import { useState } from 'react'
import styles from './notflix.module.scss'

export default function Notflix(){
    const [active, setActive] = useState(null)

    function handleHover(e){
        e.target.className += ' ' + styles.active
    }

    return (
        <div className={styles.document}>
            <Head>
                <title>Notflix - Gif library</title>
            </Head>
            <div className={styles.body}>
                <div className={styles.box} style={{background: 'lightgreen'}} onMouseOver={handleHover}></div>
                <div className={styles.box} style={{background: 'lightblue'}} onMouseOver={handleHover}></div>
            </div>
        </div>
    )
}