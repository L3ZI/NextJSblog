import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/Pagination/Pagination";

const Card = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt='post' fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2024 - </span>
                    <span className={styles.category}>Culture</span>
                </div>
                <Link href='/'>
                    <h1>How to Integrate Node.js with Flutter</h1>
                </Link>
                <p className={styles.desc}>
                    Before we get started, it’s important to understand
                    that Node.js is a server-side technology, which means
                    that it’s not designed to be used directly in mobile
                    applications. However, by leveraging the power of Node.js
                    through APIs and web services, we can create robust backends
                    that can be used by mobile applications built using Flutter.
                </p>
                <Link href='/' className={styles.link}>Read More</Link>
            </div>
        </div>
)
}

export default Card;