import styles from "./menuPosts.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({withImage}) => {
    return (
        <div className={styles.items}>
            <Link href='/' className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src='/p1.jpeg' alt='post' fill className={styles.image}/>
                </div>}
                <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                    <h3 className={styles.postTitle}>How to Integrate Node.js with Flutter</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 11.02.2024</span>
                    </div>
                </div>
            </Link>
            <Link href='/' className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src='/p1.jpeg' alt='post' fill className={styles.image}/>
                </div>}
                <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.fashion}`}>
                            Fashion
                        </span>
                    <h3 className={styles.postTitle}>How to Integrate Node.js with Flutter</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 11.02.2024</span>
                    </div>
                </div>
            </Link>
            <Link href='/' className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src='/p1.jpeg' alt='post' fill className={styles.image}/>
                </div>}
                <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>
                            Culture
                        </span>
                    <h3 className={styles.postTitle}>How to Integrate Node.js with Flutter</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 11.02.2024</span>
                    </div>
                </div>
            </Link>
            <Link href='/' className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src='/p1.jpeg' alt='post' fill className={styles.image}/>
                </div>}
                <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>
                            Food
                        </span>
                    <h3 className={styles.postTitle}>How to Integrate Node.js with Flutter</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 11.02.2024</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MenuPosts;