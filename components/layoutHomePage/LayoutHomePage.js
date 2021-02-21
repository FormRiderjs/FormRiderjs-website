import styles from "./LayoutHomePgae.module.scss"


export default function LayoutHomePage ({children}){
    return (
        <div className={styles.layoutHomePgae}>
        {children}
        </div>
    );
}