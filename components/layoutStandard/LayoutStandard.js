import styles from "./layoutStandard.module.scss"


export default function LayoutStandard ({children}){
    return (
        <div className={styles.layoutStandard}>
        {children}
        </div>
    );
}