import styles from '../../styles/Logo.module.css'

export default function LinkedInLogo(){
    return (
        <svg
            className={styles.linkedin_svg_style}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                className={styles.linkedin_svg_style}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6v0zM6 9H2v12h4V9zM4 6a2 2 0 100-4 2 2 0 000 4z"
            ></path>
        </svg>
    );
}