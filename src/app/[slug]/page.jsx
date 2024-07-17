import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Before we get started, it’s important applications. </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="user" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src='/p1.jpeg' alt="image" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>Before we get started, it’s important to understand that Node.js
                            is a server-side technology, which means that it’s not designed
                            to be used directly in mobile applications. However, by leveraging
                            the power of Node.js through APIs and web services, we can create robust
                            backends that can be used by mobile applications built using Flutter.</p>
                        <p>Before we get started, it’s important to understand that Node.js
                            is a server-side technology, which means that it’s not designed
                            to be used directly in mobile applications. However, by leveraging
                            the power of Node.js through APIs and web services, we can create robust
                            backends that can be used by mobile applications built using Flutter.</p>
                        <p>Before we get started, it’s important to understand that Node.js
                            is a server-side technology, which means that it’s not designed
                            to be used directly in mobile applications. However, by leveraging
                            the power of Node.js through APIs and web services, we can create robust
                            backends that can be used by mobile applications built using Flutter.</p>
                    </div>
                    <div className={styles.comments}>
                        <Comments/>
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    )
}

export default SinglePage;