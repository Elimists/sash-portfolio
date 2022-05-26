import styles from '../../styles/Logo.module.css'

export default function ThemeToggle(){

    return(
        <svg width="20" height="20" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_339_847" fill="white">
                <path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z" />
                <path d="M25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50V0Z" />
            </mask>
            <path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z" fill="white" />
            <path d="M25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50V0Z" fill="black" />
            <path d="M25 49C11.7452 49 1 38.2548 1 25H-1C-1 39.3594 10.6406 51 25 51V49ZM1 25C1 11.7452 11.7452 1 25 1V-1C10.6406 -1 -1 10.6406 -1 25H1ZM25 50H23V52H25V50ZM25 0V-2H23V0H25ZM48 25C48 37.7025 37.7025 48 25 48V52C39.9117 52 52 39.9117 52 25H48ZM25 2C37.7025 2 48 12.2975 48 25H52C52 10.0883 39.9117 -2 25 -2V2ZM27 50V0H23V50H27Z" fill={styles.theme_toggle_border} mask="url(#path-1-inside-1_339_847)" />
        </svg>
    )
}