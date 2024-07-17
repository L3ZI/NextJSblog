import styles from "./comment.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
    const status = "authenticated";
    return(
       <div className={styles.container}>
           <h1 className={styles.title}>Comments</h1>
           {status === "authenticated" ? (
               <div className={styles.write}>
                   <textarea placeholder='write a comment...' className={styles.input}></textarea>
                   <button className={styles.button}>Send</button>
               </div>
           ) : (
               <Link href='/login'>Login to write a comment</Link>
           )}
           <div className={styles.comments}>
               <div className={styles.comment}>
                   <div className={styles.user}>
                       <Image src='/p1.jpeg' alt="user" width={50} height={50} className={styles.image}/>
                       <div className={styles.userInfo}>
                           <span className={styles.username}>John Doe</span>
                           <span className={styles.date}>01.01.2024</span>
                       </div>
                   </div>
                   <p className={styles.desc}>
                       Before we get started, it’s important to understand that Node.js is a server-side technology, which means that it’s not designed to be used directly in mobile applications. However, by leveraging the power of Node.js through APIs and web services, we can create robust backends that can be used by mobile applications built using Flutter.
                   </p>
               </div>
           </div>
        </div>
    )
}

export default Comments;