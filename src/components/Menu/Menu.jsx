import styles from "./menu.module.css";
import Link from "next/link";
import MenuPosts from "@/components/menuPosts/MenuPosts";
import MenuCategories from "@/components/menuCategories/MenuCategories";

const Menu = () => {
    return(
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"Whats hot"}</h2>
            <h1>Most Popular</h1>
            <MenuPosts withImage={false}/>
            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <MenuCategories/>
            <h2 className={styles.subtitle}>Chosen By editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>
            <MenuPosts withImage={true}/>
        </div>
    )
}

export default Menu;