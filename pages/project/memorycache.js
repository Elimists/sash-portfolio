import Image from 'next/image'
import Link from 'next/link'
import useScrolledDown from '../../hooks/useScrolledDown'

/** Assets realted to the project Core.  */
import styles from '../../styles/Homie.module.css'
import mcStyles from '../../styles/ProjectStyles.module.css'


import LisnProjectImage from '../../public/projects/lisn/lisn.webp'
import HomieProjectImage from '../../public/projects/homie/homie.webp'

/**
 * Imports all images in the public/projects/memorycache folder to a dictorionary called 'images'
 * */
 function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

/**Object containing all images in the public/projects/memorycache folder */
const images = importAll(require.context('../../public/projects/memorycache', false, /\.(webp|jpe?g|svg)$/));


export default function CoreBP(){

    const isScrolled = useScrolledDown()
    function scrollToTheTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return(
        <>
            <div className={styles.container}>
                
                {topSection()}
                {synopsis()}
                {overviewSection()}
                {areaOfFocusSection()}
                {projectTimelineSection()}
                {researchPlanningSection()}
                {dataAnalysisSection()}
                {resultFromAnalysisSection()}
                {designBriefSection()}
                {conceptDevelopmentSection()}
                {finalDesignSection()}
                {looksLikeModelSection()}
                {finalPosterSection()}
                {resultsAndTakeawaysSection()}
                {otherProjectSection()}
            </div>
            {(isScrolled) ? <div tabIndex="0" role="button" className={styles.go_top_button} onClick={() => scrollToTheTop()} onKeyDown={(e) => handleOnEnterPressToTop(e)}>&uarr;</div> : null}
        </>
    )
}


const topSection = () => {
    return(
        <section className={styles.top_section}>
            <div>
                <div className={styles.core_title_div}>
                    <p>The MemoryCache</p>
                </div>
                <p>
                    An assistive storytelling device that uses holograms to share memories and memorabilia.
                </p>
                <p>Extended Reality - Interaction Design - User Research - User Experience - Emerging Technology</p>
                <a href="https://acido.info/MemoryCache" target="__blank">
                    <div className={mcStyles.acido_award_div}>
                        <Image
                            src={images['acido_award.webp']}
                            height={80}
                            width={320}
                            alt="Acido Award Link"
                            placeholder="blur"
                            blurDataUrl={images['acido_award.webp']}
                        />
                    </div>
                </a>
            </div>

            <Image 
            src={images['Hero.webp']} 
            height={430}
            width={650} 
            alt="MemoryCache Image"
            placeholder="blur" 
            blurDataURL={images['Hero.webp']}/>
        </section>
    )
}

const synopsis = () => {
    return(
        <section className={styles.synopsis}>
            <div>
                <h3>Duration</h3>
                <p>8 Months</p>
            </div>
            <div>
                <h3>Role</h3>
                <p>Product Designer</p>
            </div>
            <div>
                <h3>Type</h3>
                <p>Individual Project, Capstone Project</p>
            </div>
            <div>
                <h3>Methods &#38; Tools</h3>
                <p>Primary &#38; Secondary Research, User Tests, 3D Printing, Figma, Fusion360, Keyshot</p>
            </div>
        </section>
    )
}

const overviewSection = () => {
    return(
        <section className={styles.overview_section}>
            <div className={styles.heading_bar}></div>
            <h1>Overview</h1>
            <p>
                This 4th year capstone project was centered around the idea of social connectedness and personal informatics.
                The  challenge was to investigate a problem at the intersection between social interaction and personal data and to create a physical and/or digital solution to address these issues.
                <b> I chose to focus on the issues of bereavement and mourning caused by the loss of a loved one as this issue was rooted in social connectedness as well as personal informatics.</b>
            </p>
        </section>
    )
}

const areaOfFocusSection = () => {
    return(
        <section className={styles.process_section}>
            <div className={styles.heading_bar}></div>
            <h1>Area of Focus</h1>
            <p>
            Researching into the issues of grief and how they are connected with social connectedness led me to discover new insights.
            Through my research evolution I discovered that <b>storytelling and the sharing of memories and memorabilia were extremely enriching and beneficial for people who were mourning.</b>
            </p>
            <div className={mcStyles.image_div_style}>
                <h4>Research Evolution</h4>
                <Image 
                src={images['areaoffocus.webp']} 
                height={398}
                width={620} 
                alt="Area of Focus Image"
                placeholder="blur" 
                blurDataURL={images['areaoffocus.webp']}/>
                
            </div>
        </section>
    )
}

const projectTimelineSection = () => {
    return(
        <section className={styles.problem_section}>
            <div className={styles.heading_bar}></div>
            <h1>Project Timeline</h1>
            <div className={mcStyles.image_div_style}>
                <Image 
                src={images['timeline.webp']} 
                height={560}
                width={1416} 
                alt="Project Timeline"
                placeholder="blur" 
                blurDataURL={images['timeline.webp']}/>
            </div>
        </section>
    )
}

const researchPlanningSection = () => {
    return(
        <section className={styles.research_section}>
            <div className={styles.heading_bar}></div>
            <h1>Research Planning</h1>
            <p>
            To understand more deeply the process of storytelling and it’s pain-points I would need to conduct user research.
            To being this process I began by creating a research plan outlining the overview of what I wanted to understand from the user.
            I broke down the research plan from problem to goal, and then to research questions.
            After creating the research questions I divided them into interview questions and survey questions as some were more qualitative and others were more quantitative.
            </p>
            <div className={mcStyles.image_div_style}>
                <h4>Research Planning</h4>
                <Image 
                    src={images['researchplanning.webp']} 
                    height={539}
                    width={735} 
                    alt="User Research Planning Image"
                    placeholder="blur" 
                    blurDataURL={images['researchplanning.webp']}/>
                    
            </div>
        </section>
    )
}

const dataAnalysisSection = () => {
    return(
        <section className={styles.research_section}>
            <div className={styles.heading_bar}></div>
            <h1>Data Analysis</h1>
            <p>
                I utilized a variety of data analysis methods to synthesize the interview and survey data into clear and understandable themes.
                I used affinity diagrams to organize and group the data collected from user research, this allowed me to identify key themes and insights.
                Next I transcribed the interviews and used data coding to further analyze and identify patterns in the data.
            </p>
            <div>
                <div>
                <Image 
                    src={images['affinitydiagram.webp']} 
                    height={408}
                    width={630} 
                    alt="Affinity Diagram From Survey Results"
                    placeholder="blur" 
                    blurDataURL={images['affinitydiagram.webp']}/>
                    <p>Affinity Diagram From Survey Results</p>
                </div>
                <div>
                <Image 
                    src={images['datacoding.webp']} 
                    height={408}
                    width={630} 
                    alt="Data Coding"
                    placeholder="blur" 
                    blurDataURL={images['datacoding.webp']}/>
                    <p>Data Coding</p>
                </div>
            </div>
        </section>
    )
}

const resultFromAnalysisSection = () => {
    return(
        <section className={styles.ideation_section}>
            <div className={styles.heading_bar}></div>
            <h1>Results From Data Analysis - Data Visualization</h1>
            <p>
                After synthesizing the data into key themes and insights the results were very informative.
                Using diagrams and journey maps I was able to highlight how the data correlated and what the main learning outcomes were.
                The Journey map also helped showcased what area of the user journey could be improved and where the most amount of effort should be focused.
                The data was shown to stakeholders and profs who were able to understand the problem through these visuals.
            </p>
            <div>
                <div>
                    <Image 
                        src={images['datavisual_1.webp']} 
                        height={461}
                        width={778} 
                        alt="Data Visualization"
                        placeholder="blur" 
                        blurDataURL={images['datavisual_1.webp']}/>
                        <p>Visual Diagram Showing the Key Themes From User Data</p>
                </div>
                <div>
                    <Image 
                        src={images['datavisual_2.webp']} 
                        height={461}
                        width={778}  
                        alt="Journey Map"
                        placeholder="blur" 
                        blurDataURL={images['datavisual_2.webp']}/>
                        <p>User Journey Map and Area of Opportunity</p>
                </div>
            </div>
        </section>
    )
}

const designBriefSection = () => {
    return(
        <section className={styles.ideation_core_section}>
            <div className={styles.heading_bar}></div>
            <h1>Design Brief</h1>
            <p>
                The research phase helped uncover many areas of improvement and key considerations that should be made when tackling this problem.
                Utilizing the research gained I put together a design brief to serve as a roadmap for future development.
            </p> 
            <div className={mcStyles.design_brief_visual}>
                <div className={mcStyles.design_brief_individual_div}>
                    <div>{usersIcon()}</div>
                    <p><b>Who: </b> Universal</p>
                </div>
                <div className={mcStyles.design_brief_individual_div}>
                    <div>{boxIcon()}</div>
                    <p><b>What: </b> Physical Product With Digital Component</p>
                </div>
                <div className={mcStyles.design_brief_individual_div}>
                    <div>{calendarIcon()}</div>
                    <p><b>When: </b> 1 year of more post death</p>
                </div>
                <div className={mcStyles.design_brief_individual_div}>
                    <div>{locationIcon()}</div>
                    <p><b>Where: </b> Home Environment</p>
                </div>
                <div className={mcStyles.design_brief_individual_div}>
                    <div>
                        <div>{targetIcon()}</div>
                        <p> <b>Design Objectives: </b></p>
                    </div>
                    <ul>
                        <li>
                           Facilitate close friends and family to connect through an interactve medium. 
                        </li>
                        <li>
                           Allow users to add stories and memorabilia. 
                        </li>
                        <li>
                           Decrease teh emotional barrier to reach out by creating a non-alarming indicator of interset. 
                        </li>
                        <li>
                           Increase frequency of social interactions and sharing among users.
                        </li>
                        <li>
                           Help users feel more supported during bereavement by increasing the people involved.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )

    function usersIcon() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="none"
            viewBox="0 0 50 50"
          >
            <g
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              clipPath="url(#clip0_1211_1001)"
            >
              <path d="M35.417 43.75v-4.167a8.333 8.333 0 00-8.334-8.333H10.417a8.333 8.333 0 00-8.334 8.333v4.167M18.75 22.917a8.333 8.333 0 100-16.667 8.333 8.333 0 000 16.667zM47.917 43.75v-4.167a8.334 8.334 0 00-6.25-8.062M33.333 6.52a8.333 8.333 0 010 16.147"></path>
            </g>
            <defs>
              <clipPath id="clip0_1211_1001">
                <path fill="#fff" d="M0 0H50V50H0z"></path>
              </clipPath>
            </defs>
          </svg>
        );
    }

    function boxIcon() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="none"
            viewBox="0 0 50 50"
          >
            <g
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              clipPath="url(#clip0_1211_1004)"
            >
              <path d="M43.75 33.333V16.667a4.167 4.167 0 00-2.083-3.605L27.083 4.73a4.166 4.166 0 00-4.166 0L8.333 13.063a4.166 4.166 0 00-2.083 3.604v16.666a4.167 4.167 0 002.083 3.605l14.584 8.333a4.167 4.167 0 004.166 0l14.584-8.334a4.167 4.167 0 002.083-3.604z"></path>
              <path d="M6.813 14.5L25 25.02 43.188 14.5M25 46V25"></path>
            </g>
            <defs>
              <clipPath id="clip0_1211_1004">
                <path fill="#fff" d="M0 0H50V50H0z"></path>
              </clipPath>
            </defs>
          </svg>
        );
    }
    
    function calendarIcon() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="44"
            fill="none"
            viewBox="0 0 40 44"
          >
            <g
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              clipPath="url(#clip0_1288_553)"
            >
              <path d="M34.583 5.333H5.417A4.167 4.167 0 001.25 9.5v29.167a4.167 4.167 0 004.167 4.166h29.166a4.167 4.167 0 004.167-4.166V9.5a4.167 4.167 0 00-4.167-4.167zM28.333 1.167V9.5M11.667 1.167V9.5M1.25 17.833h37.5"></path>
            </g>
            <defs>
              <clipPath id="clip0_1288_553">
                <path fill="#fff" d="M0 0H40V44H0z"></path>
              </clipPath>
            </defs>
          </svg>
        );
      }

    function targetIcon() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="none"
            viewBox="0 0 50 50"
          >
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M25 45.833c11.506 0 20.833-9.327 20.833-20.833 0-11.506-9.327-20.833-20.833-20.833C13.494 4.167 4.167 13.494 4.167 25c0 11.506 9.327 20.833 20.833 20.833z"
            ></path>
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M25 37.5c6.904 0 12.5-5.596 12.5-12.5S31.904 12.5 25 12.5 12.5 18.096 12.5 25 18.096 37.5 25 37.5z"
            ></path>
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M25 29.167a4.167 4.167 0 100-8.334 4.167 4.167 0 000 8.334z"
            ></path>
          </svg>
        );
    }

    function locationIcon() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="none"
            viewBox="0 0 50 50"
          >
            <g
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              clipPath="url(#clip0_1211_1012)"
            >
              <path d="M43.75 20.833C43.75 35.417 25 47.917 25 47.917S6.25 35.417 6.25 20.833a18.75 18.75 0 1137.5 0z"></path>
              <path d="M25 27.083a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5z"></path>
            </g>
            <defs>
              <clipPath id="clip0_1211_1012">
                <path fill="#fff" d="M0 0H50V50H0z"></path>
              </clipPath>
            </defs>
          </svg>
        );
    }
    
}

const conceptDevelopmentSection = () => {
    return(
        <section className={styles.ideation_section}>
            <div className={styles.heading_bar}></div>
            <h1>Concept Development</h1>
            <div>
                    <Image 
                        src={images['conceptdevelopment.webp']} 
                        height={3933}
                        width={723} 
                        alt="Concept Development Journey"
                        placeholder="blur" 
                        blurDataURL={images['conceptdevelopment.webp']}/>
            </div>
        </section>
    )
}

const finalDesignSection = () => {
    return(
        <section className={styles.ideation_section}>
            <div className={styles.heading_bar}></div>
            <h1>Final Design</h1>
            <p>
                Check out this short video (1m40s) to see how the device works!
            </p>
            <div className={mcStyles.final_design_video_div}>
                <iframe 
                    src="https://player.vimeo.com/video/698033014?h=6eb6ceadea" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                    display="block"/>
                <p><a href="https://vimeo.com/698033014">MemoryCache</a> from <a href="https://vimeo.com/user167769784">Sash Mahara</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
            </div>
        </section>
    )
}

const looksLikeModelSection = () => {
    return(
        <section className={styles.final_design_section}>
            <div className={styles.heading_bar} />
            <h1>Looks Like Model</h1>
            <div className={mcStyles.looks_like_model_image_div}>
                <div>
                    <Image 
                        src={images['model1.jpg']} 
                        height={359}
                        width={298} 
                        alt="Looks like model"
                        placeholder="blur" 
                        blurDataURL={images['model1.jpg']}/>
                </div>
                <div>
                    <Image 
                        src={images['model2.jpg']} 
                        height={359}
                        width={298} 
                        alt="Looks like model"
                        placeholder="blur" 
                        blurDataURL={images['model2.jpg']}/>
                </div>
                <div>
                    <Image 
                        src={images['model3.jpg']} 
                        height={359}
                        width={298}
                        alt="Looks like model"
                        placeholder="blur" 
                        blurDataURL={images['model3.jpg']}/>
                </div>
                <div>
                    <Image 
                        src={images['model4.jpg']} 
                        height={359}
                        width={298} 
                        alt="Looks like model"
                        placeholder="blur" 
                        blurDataURL={images['model4.jpg']}/>
                </div>
            </div>
        </section>
    )
}

const finalPosterSection = () => {
    return(
        <section className={styles.final_poster}>
            <div className={styles.heading_bar}></div>
            <h1>Final Poster</h1>
            <div>
                <Image 
                        src={images['finalposter.jpg']} 
                        height={1443}
                        width={1113} 
                        alt="Final Presentatino Poster"
                        placeholder="blur" 
                        blurDataURL={images['finalposter.jpg']}/>
            </div>
        </section>
    )
}

const resultsAndTakeawaysSection = () => {
    return(
        <section className={styles.final_poster}>
            <div className={styles.heading_bar}></div>
            <h1>Results &#38; Take-aways</h1>
            <div>
                <Image 
                        src={images['results_takeaways.svg']} 
                        height={569}
                        width={1113} 
                        alt="Results and Take-Aways"
                        placeholder="blur" 
                        blurDataURL={images['results_takeaways.svg']}/>
            </div>
        </section>
    )
}

const otherProjectSection = () => {
    return(
        <section className={styles.other_projects}>
            <div className={styles.heading_bar} />
            <h1>My Other Projects</h1>
            <div>
                <Link href="/project/homie">
                    <div>
                        <Image
                            src={HomieProjectImage}
                            height={280}
                            width={400}
                            placeholder="blur"
                            blurDataURL={HomieProjectImage}
                            alt="Homie Project"
                        />
                        <p>Homie</p>
                    </div>
                </Link>

                <Link href="/project/lisn">
                    <div>
                        <Image
                            src={LisnProjectImage}
                            height={300}
                            width={400}
                            placeholder="blur"
                            blurDataURL={LisnProjectImage}
                            alt="Lisn Project Image"
                        />
                        <p>Lisn</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}