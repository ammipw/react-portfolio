import Link from 'next/link'
import styles from './wrapper.module.css'

export default function Wrapper({children}){
    return (
        <div>
            <div className={styles.toolbar}>
                <Link href='/'>&larr; Go back</Link>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}