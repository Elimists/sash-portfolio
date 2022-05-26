import styles from '../../styles/Logo.module.css'

export default function ThemeToggle(){

    return (
        <svg
            className={styles.theme_toggle_border}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 50 50"
        >
            <mask id="path-1-inside-1_339_847" fill="#fff">
                <path d="M50 25c0 13.807-11.193 25-25 25S0 38.807 0 25 11.193 0 25 0s25 11.193 25 25z"></path>
                <path d="M25 0C11.193 0 0 11.193 0 25s11.193 25 25 25V0z"></path>
            </mask>
            <path
                fill="#fff"
                d="M50 25c0 13.807-11.193 25-25 25S0 38.807 0 25 11.193 0 25 0s25 11.193 25 25z"
            ></path>
            <path
                fill="#000"
                d="M25 0C11.193 0 0 11.193 0 25s11.193 25 25 25V0z"
            ></path>
            <path
                className={styles.theme_toggle_border}
                fill="#000"
                d="M25 49C11.745 49 1 38.255 1 25h-2c0 14.36 11.64 26 26 26v-2zM1 25C1 11.745 11.745 1 25 1v-2C10.64-1-1 10.64-1 25h2zm24 25h-2v2h2v-2zm0-50v-2h-2v2h2zm23 25c0 12.703-10.297 23-23 23v4c14.912 0 27-12.088 27-27h-4zM25 2c12.703 0 23 10.297 23 23h4C52 10.088 39.912-2 25-2v4zm2 48V0h-4v50h4z"
                mask="url(#path-1-inside-1_339_847)"
            ></path>
        </svg>
    );
}