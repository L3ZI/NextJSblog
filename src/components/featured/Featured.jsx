import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Path to Success!</b> Discover stories and ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src='/p1.jpeg' alt='post' fill/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                    How to Integrate Node.js with Flutter</h1>
                    <p className={styles.postDec}>
                    Before we get started, it’s important to understand that Node.js is a
                    server-side technology, which means that it’s not designed to be used
                    directly in mobile applications. However, by leveraging the power of
                    Node.js through APIs and web services, we can create robust backends
                    that can be used by mobile applications built using Flutter.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured;