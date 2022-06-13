import Head from 'next/head'
import styles from './notflix.module.css'

export default function Notflix(){
    return (
        <div className={styles.document}>
            <Head>
                <title>Notflix - Gif library</title>
            </Head>
            <div className={styles.body}>

            </div>
        </div>
    )
}