import styles from '../../../styles/components/UserTestingComponent.module.css'

function Frown() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="none"
        viewBox="0 0 50 50"
      >
        <path
          stroke="red"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M25 45.833c11.505 0 20.833-9.327 20.833-20.833 0-11.506-9.328-20.834-20.834-20.834S4.166 13.494 4.166 25s9.327 20.833 20.833 20.833z"
        ></path>
        <path
          stroke="red"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M33.333 33.333s-3.125-4.166-8.334-4.166c-5.208 0-8.333 4.166-8.333 4.166M18.75 18.75h.02M31.25 18.75h.02"
        ></path>
      </svg>
    );
  }

function Meh() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="none"
        viewBox="0 0 50 50"
      >
        <path
          stroke="#F5BD4F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M25 45.833c11.505 0 20.833-9.327 20.833-20.833 0-11.506-9.328-20.834-20.834-20.834S4.166 13.494 4.166 25s9.327 20.833 20.833 20.833zM16.666 31.25h16.667M18.75 18.75h.02M31.25 18.75h.02"
        ></path>
      </svg>
    );
}


function Smile() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="none"
        viewBox="0 0 50 50"
      >
        <path
          stroke="#61C454"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M25 45.833c11.505 0 20.833-9.327 20.833-20.833 0-11.506-9.328-20.834-20.834-20.834S4.166 13.494 4.166 25s9.327 20.833 20.833 20.833z"
        ></path>
        <path
          stroke="#61C454"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M16.666 29.166s3.125 4.167 8.333 4.167c5.209 0 8.334-4.166 8.334-4.166M18.75 18.75h.02M31.25 18.75h.02"
        ></path>
      </svg>
    );
}


export default function UserTestingComponent(){

    return(
        <div className={styles.container}>
           <div className={styles.user_testing_points_div}>
                <div className={styles.face_icon}>
                    {Smile()}
                </div>
                <div className={styles.details}>
                        <h3>Task: Conduct a search for a 2 bedroom house in the local area</h3>
                        <p>Average Time: 26 seconds</p>
                        <p>Results: Easy to understand and navigate. No issues.</p>
                </div>
           </div>

           <div className={styles.user_testing_points_div}>
                <div className={styles.face_icon}>
                    {Meh()}
                </div>
                <div className={styles.details}>
                    <h3>Task: Compare 2 listings from your favourites</h3>
                    <p>Average Time: 2:25 minutes</p>
                    <p>Results: Mixed reviews, users had trouble understanding where their favourite listings go and how to select them for comparison. Needs improvement.</p>
                </div>
           </div>

           <div className={styles.user_testing_points_div}>
                <div className={styles.face_icon}>
                    {Meh()}
                </div>
                <div className={styles.details}>
                    <h3>Task: Book a virtual meeting with a landlord</h3>
                    <p>Average Time: 1:30 minutes</p>
                    <p>Results: Difficult to find at first but once started it was easy to understand and schedule. Needs slight improvement.</p>
                </div>
           </div>

           <div className={styles.user_testing_points_div}>
                <div className={styles.face_icon}>
                    {Frown()}
                </div>
                <div className={styles.details}>
                    <h3>Task: Create and fill out a listing</h3>
                    <p>Average Time: 8:16 minutes </p>
                    <p>Results: Users had difficulty uploading multiple images, image navigation was hard to understand. Listing score confused users and no ability to tag photos. Needs improvement.</p>
                </div>
           </div>
        </div>
    )
}