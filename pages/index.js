import Head from "next/head"
import Link from "next/link"

import styles from './homepage.module.css'

export default function HomePage(){
    return (
        <div className={styles.document}>
            <Head>
                <title>React Portfolio</title>
            </Head>
            <div className={styles.body}>
                <h1>React Portfolio</h1>
                <ul>
                    <li>
                        <Link href='/notflix'>Notflix &rarr;</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}