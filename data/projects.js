import CoreProjectImage from '../public/projects/core/core.webp'

import WorldJournalProjectImage from '../public/projects/world-journal/world-journal.webp'

/** LISN Imports */
import LisnProjectImage from '../public/projects/lisn/lisn.webp'

/** HOMIE Imports */
import HomieProjectImage from '../public/projects/homie/homie.webp'
import ConceptCompAnalysis from '../public/projects/homie/concept_comp_analysis.webp'
import ConceptDevInfoArch from '../public/projects/homie/concept_dev_info_arch.webp'
import ConceptLandlordUi from '../public/projects/homie/concept_dev_landlord_ui.webp'
import ConceptScheduling from '../public/projects/homie/concept_dev_scheduling_ui.webp'
import ConceptSearching from '../public/projects/homie/concept_dev_searching_ui.webp'
import FinalDesignBooking from '../public/projects/homie/final_design_booking.webp'
import FinalDesignComparison from '../public/projects/homie/final_design_comparison.webp'
import FinalDesignHousing from '../public/projects/homie/final_design_housing.webp'
import FinalDesignLanding from '../public/projects/homie/final_design_landing.webp'
import FinalDesignListing from '../public/projects/homie/final_design_listing.webp'
import FinalDesignMessaging from '../public/projects/homie/final_design_messaging.webp'
import FinalDesignMood from '../public/projects/homie/final_design_mood.webp'
import Iterations from '../public/projects/homie/iterations.webp'
import KeyInsights1 from '../public/projects/homie/key_insights1.webp'
import PersonasAiden from '../public/projects/homie/personas_aiden.webp'
import PersonasCarly from '../public/projects/homie/personas_carly.webp'
import PersonasSamu from '../public/projects/homie/personas_samu.webp'
import PersonasTamira from '../public/projects/homie/personas_tamira.webp'
import Process from '../public/projects/homie/process.svg'
import UserGroupLandlord from '../public/projects/homie/user_group_landlords.svg'
import UserGroupTenants from '../public/projects/homie/user_group_tenants.svg'
import UserJourneyMap from '../public/projects/homie/user_journey.webp'

const randomPic = "https://picsum.photos/600/400"

export const allProjects = [
    {
        id: 1, //Requried
        image: HomieProjectImage,//HomieProjectImage, //
        title: "Homie",
        title_url_safe: "Homie",
        name: "Rental Housing Search - Homie",
        description: "Web application that simplifies and assists the housing rental search process.",
        tags: "UX/UI - User Research - Visual Design - Behavioural Design",
        duration: "3 Months",
        type: "Personal",
        role: "UX Researcher & Designer",
        tools: "Interviews, Surveys, Market Research, Competitive Analysis, Figma",
        link: "/project/homie",
        overview: "This senior project focsued on researching, designing, and validating a digital service that could help improve the user journey in a chosen problem space. Our group chose to tackle the rental housing experience and develop a solution that could streamline the process for beginners and experienced renters.",
        problem: "Overall, the process of finding and securing a housing rental can be a daunting, overwhelming, and cumbersome journey. Most of the process is learned by word of mouth and through trial and error, making it difficult for inexperienced renters to know where to begin and confidently carry out the entire process. There is also a need for more semi-formal education or resources concerning the renting process as a whole, including knowledge around renter rights. Even more experienced renters encounter a slew of issues relating to poor information across rental ads, usability and experience of rental platforms and listings, communication with landlords and roommates, decision making, and legal matters.",
        process: {
            image: Process,
            width: 640,
            height: 250
        },
        research_goals:[
            "Understand the tools and services that renters are currently using during their house hunt to find areas of improvement within existing tools.",
            "Identify key criteria renters look for when searching for housing to empower them to make better housing decisions.",
            "Understand users’ knowledge regarding renting legalities to educate and build confidence in the renting process.",
            "Gain insight into the end-to-end process of renting a property to uncover pain points and challenges to improve and streamline the experience for the renter."
        ],
        recruitment_method: "Our methods involved reaching out to friends and family (and their wider network) to find users that would fit our recruitment criteria (see below). Posting in Carleton University student groups on social media (ie: Reddit and Facebook) requesting volunteers.",
        user_groups: {
            description: "We divided our recruitment to 75-80% of interviewees from User Group 1, and 20-25% interviewees from User Group 2 since the service is targeted towards tenants.",
            images: [
                {
                    image: UserGroupTenants,
                    title: "User Group Tenants",
                    width: 77,
                    height: 142
                },
                {
                    image: UserGroupLandlord,
                    title: "User Group Landlords",
                    width: 93,
                    height: 142
                }
            ]
        },
        recruitment_criterias: [
            {
                title: "Age Range: 18-19, 20-22, 23-26, 27+ ",
                description: "We divided age ranges to track relationships between users’ age and housing criteria, previous experience, budget, and occupation. Considering people’s motivations/life goals/habits to help make informed roommate matching decisions."
            },
            {
                title: "Occupation: (recent high school grad, university/college students, international students, working professional)",
                description: "We divided occupations to gain insight into the relationship between budget, relocation, as well as possible housing situation preferences and any barriers."
            },
            {
                title: "Budget (>$500, $500-900, $900-1200, $1200+)",
                description: "We divided budget into ranges to identify how broad users’ options can be, get a better understanding of renters’ budgets match with the market, as well as to understand how budget influences characteristics users look for when looking into housing."
            },
            {
                title: "Preferred Living Situation: (single living alone, couple moving in together, group  of friends looking to move together, or single moving into existing housing situation)",
                description: "To see how preferred living situations influence how users go about the housing hunt. For example, how they interact with landlords and other potential roommates. Identify different touchpoints from the standpoint of different types of users."
            },
            {
                title: "Renting Experience/Knowledge (First-time renter, 2-4 times renting experience, 5+ times renting experience)",
                description: "To help determine if users are new or experienced renters and to understand their current knowledge/confidence  and process for finding rental housing."
            }
        ],
        key_insights: {
            details: "The results of our user research highlight many pain-points and oppurtunities for improvement. Using data coding methods (see below) we identified key insights revolved around the lack of standardization of listings, communication methods, lease agreements, and the rental platforms themselves. There was a need for more consistency and streamlining in these areas to ensure users have more pleasant experiences at different touchpoints and make the most informed housing decisions. There was also a need for more personal, accurate, centralized and verified information regarding landlords and their properties (including roommates where applicable). The issue here is that tenants often desire a better sense of their potential living conditions and interactions with thelandlord, and landlords feel the same way about tenants. Addressing these challenges will ultimately lead to more trust between users and confidence in the housing rental journey.",
            images:[
                {
                    img: KeyInsights1,
                    title: "Data Incoding",
                    width: 715,
                    height: 200
                },
            ]
        },
        problem_statement: "Our challenge is to improve the rental experience from end to end by standardizing and enhancing key touchpoints along the process—considering tools, listings, documents, and communication methods. The housing rental process is something that many young adults will have to go through at some point in their lives. Therefore, facilitating a smoother entry and experience along the rental journey would bring more confidence and enjoyment to an otherwise stressful task.",
        design_briefs: [
            {
                title: "Goal & Objectives",
                goals: [
                    "Educate and build confidence in the renting process for users of all experience levels",
                    "Streamline the process of renting from the initial housing search to move in",
                    "Increase transparency and facilitate effective communication, to build trust between users",
                    "Facilitate safe and secure interactions between users"
                ]
            },
            {
                title: "Design Requirements & Features",
                goals:[
                    {
                        title: "Chat Feature",
                        description: "Read receipts, scheduling feature."
                    },
                    {
                        title: "Document Management (for applications and leases)",
                        description: "Standardized forms, highlighting changes made by landlords, centralize document signing and transfers.",
                    },
                    {
                        title: "Resource packages",
                        description: "Housing search 101, terminology, legal matters, etc.",
                    },
                    {
                        title: "Holistic Map",
                        description: "Crime hotspots, amenities, proximity, transportation, attractions, etc.",
                    },
                    {
                        title: "Unifying and Standardizing Listings",
                        description: "Fill-in-blank listings, preset filters, AI-generated descriptions, photo tips, renewal prompts, “Hot listings” tag.",
                    },
                    {
                        title: "Tenant & landlord accounts",
                        description: "Tenants profile, save filters, favourite listings, discussion forums, reviews, document hub, Landlord profile, reviews & ratings, verification, payment preferences.",
                    },
                    {
                        title: "Favourite Listings",
                        description: "Creating different lists & folders, pros & cons, comparison charts",
                    },
                    {
                        title: "Verification & Virtual Tours",
                        description: "Booking a tour, in-app video calling, two-step verification",
                    },
                    {
                        title: "Moving tips & tricks",
                        description: "Checklists, 3rd party moving resources"
                    }
                ]
            }
        ],
        personas: {
            description: "After determining our design brief we created four personas from our backgorund research which captured the breadth of users we wanted to cater to.",
            images: [
                {
                    title: "Aiden: Freshmen Student",
                    image: PersonasAiden,
                    width: 370,
                    height: 263
                },
                {
                    title: "Carly: Long Distance Mover",
                    image: PersonasCarly,
                    width: 370,
                    height: 263
                },
                {
                    title: "Tamira: New Parent",
                    image: PersonasTamira,
                    width: 370,
                    height: 263
                },
                {
                    title: "Samu: Young Professional",
                    image: PersonasSamu,
                    width: 370,
                    height: 263
                }
            ]
        },
        user_journey_map:{
            description: "Having uncovered many of the pain-points and oppurtunites from our research we put together a user journey map that showed the rental housing process from start to finish. This journey map allowed us to visualize where the problem areas where and highlight key touch points that could be improved.",
            images: [
                {
                    image: UserJourneyMap,
                    title: "Use Journey Map",
                    width: 1000,
                    height: 273
                }
            ]
        },
        concept_development:[
            {
                title: "Competitive Analysis",
                description: "We began our concept development by doing some market research on existing products and understanding their approach, functionality, and layout.",
                images: [
                    {
                        image: ConceptCompAnalysis,
                        title: "Competitive Analysis",
                        width: 433,
                        height: 300
                    }
                ]
            },
            {
                title: "Application Architecture",
                description: "The design solution involved creating an information architecture, comprised of all the possible pages, content, features, and user actions for Homie. Each of these assets were then grouped into named catergories and organized in a hierarchical structure.",
                images: [
                    {
                        image: ConceptDevInfoArch,
                        title: "Information Architecture",
                        width: 519,
                        height: 346
                    }
                ]
            },
            {
                title: "UI Development",
                description: "We focused our concept development into three key areas of the application that we identified from our research which needed the most imporvement.",
                images:[
                    {
                        image: ConceptLandlordUi,
                        title: "Landlord Portal - Creating and Managing Listings ",
                        width: 1061,
                        height: 351
                    },
                    {
                        image: ConceptSearching,
                        title: "Browsing and comparing listings",
                        width: 1061,
                        height: 351
                    },
                    {
                        image: ConceptScheduling,
                        title: "Booking Viewings",
                        width: 1061,
                        height: 352
                    }
                ]
            }
        ],
        user_testing: {
            description: "The usability testing was an eye opening moment for the group to update and improve our design. We asked each participant to complete a certain task and we were not allowed to intervene. We also timed each participant to understand how efficient each user task was. At the end we interviewed each participant on their experience. Through our user testers, we gained key insights into what features functioned smoothly and what needed tweaking.",
            insights: [
                {
                    title: "Task: Conduct a search for a 2 bedroom house in the local area",
                    time: "26 seconds",
                    results: "Easy to understand and navigate. No issue."
                },
                {
                    title: "Task: Compare 2 listings from your favourites",
                    time: "2:25 minutes",
                    results: "Mixed reviews, users had trouble understanding where their fourite listings go and how to select them for comparison. Needs improvement."
                },
                {
                    title: "Task: Book a virtual meeting with a landlord",
                    time: "1:30 minutes",
                    results: "Difficult to find at first but once started it was easy to understand and schedule. Needs slight improvement."
                },
                {
                    title: "Task: Create and fill out a listing",
                    time: "8:16 minutes",
                    results: "User had difficulty uploading multiple images, image navigation was hard to understand. Listing score confused users and no ability to tag photos. Needs improvement."
                }
            ]
        },
        iterations: {
            description: "After getting the results from our user testing we iterated on the problem areas that confused users. We redesigned certain user flows to have more clarity and organization from the feedback we gained from our testing.",
            image: Iterations,
            title: "Iterations",
            width: 786,
            height: 368
        },
        final_design:{
            description: "After addressing the concerns from our user testing we began the finalization of the design by creating a branding guideline and developing a high-fidelity version of the application.",
            images:[
                {
                    image: FinalDesignMood,
                    title: "Mood Board",
                    width: 424,
                    height: 300,
                },
                
                {
                    image: FinalDesignHousing,
                    title: "Housing Search",
                    width: 403,
                    height: 287,
                },
                {
                    image: FinalDesignLanding,
                    title: "Landing Page",
                    width: 403,
                    height: 287,
                },
                {
                    image: FinalDesignComparison,
                    title: "Comparison Page",
                    width: 403,
                    height: 287,
                },
                {
                    image: FinalDesignListing,
                    title: "Listing View",
                    width: 403,
                    height: 287,
                },
                
                
                {
                    image: FinalDesignBooking,
                    title: "Booking Page",
                    width: 403,
                    height: 287,
                },

                {
                    image: FinalDesignMessaging,
                    title: "Messaging",
                    width: 403,
                    height: 287,
                },

            ]
        },
        figma_prototype:{
            src: "https://www.figma.com/proto/1XnqrlsKWKXYud37ZUmkJJ/Homie-Project?embed_host=share&kind=&node-id=537%3A1562&page-id=531%3A1143&scaling=min-zoom&starting-point-node-id=537%3A1562&viewport=414%2C532%2C0.06"
        }

    },

    {
        id: 2,
        image: LisnProjectImage,//LisnProjectImage,//
        title: "Lisn",
        title_url_safe: "Lisn",
        name: "User Research and Onboarding - LISN",
        description: "Improving new user onboarding for a mobile application and UI redesign.",
        tags: "UX/UI - User Research - Prototyping - Branding",
        duration: "3 Months",
        type: "Company Initiative",
        role: "UX/UI Designer",
        tools: "User Research, Co-design workshops, Figma",
        link: "/project/lisn",
        overview: "LISN is a startup podcast company developing A.I technologies that help users discover new podcasts and also alow users to create curated playlists using clips from different podcasts. The company is growing its user base and wanted to create an easy to understand onboarding flow for new users. Additionally, they also wanted to design a new home page for their mobile app that facilitated a simplified user-experience. As their new UX/UI designer I lead the research and design of their new onboarding flows and mobile app.",
        problem: "New users were having a hard time understanding the mobile app as there was no introduction provided on how to use the features and how to create podcast clips which was the main service at the time. The organization of the app also left users confused as their content was scattered in different pages and menus.",
        research: {
            description: "As a new company, LISN did not have previous user experience research or analysis. I began by creating a research plan and working with the team to identify key areas of the service that we needed to understand better. Our main objective was to understand user goals within the app and their satisfaction with the current platform.",
            images: [
                {
                    image: randomPic,
                    title: "Brainstorming session with team"
                },
                {
                    image: randomPic,
                    title: "Research Questions"
                }
            ],
            category_insights:{
                description:"Through interviews and outreach to current users we were able to uncover insights into users’ pain-points and goals when navigating the app.",
                insights: [
                    {
                        title: "Insight 1:",
                        description: "Users wanted to have their frequently listened to content easily avavailable and have the ability to organize them in the order they preferred (i.e chronological, first to last, most popular, etc)"
                    },
                    {
                        title: "Insight 2:",
                        description: "Users wanted to reduce the time searching for a podcast and have their curated content managed for them."
                    }
                ]
            },
            category_objectives:{
                description: "Our team also wanted to highlight key features of the app to new users on our onboarding flows. With some internal discussions we narrowed down our scope into 3 key features that were most important for new users to know.",
                objectives: [
                    {
                        title: "Objective 1",
                        description: "Educate users on “conversations”. Conversations is an in-app feature that groups related podcast clips together into a curated playlist for easy and quick listening.",
                    },
                    {
                        title: "Objective 2",
                        description: "Educate users on “Clips”. Clips is an in-app feature that allows users to snip a podcast’s audio into just the section they are interested in and easily save, share, or use it to create their own conversations.",
                    },
                    {
                        title: "Objective 3",
                        description: "Welcome user feedback. As the app was new we really wanted to invite users to be apart of the growing community and voice their concerns/suggestions to help the service improve."
                    }
                ]
            }
        },
        ideation: {
            concept_development: {
                description: "I began the concept development by working on the onbaording screens first. I created some wireframes and focused on keeping the content short and sweet. We wanted to avoid created a long onboarding flow with lots of test. Instead I decided to use small gifs that could highlight key features and make the onboarding experience more enjoyable.",
                images:[
                    {
                        image: randomPic,
                        title: "Initial wireframes",
                        width: 525,
                        height: 289
                    },
                    {
                        image: randomPic,
                        title: "Lo-Fi Mockup",
                        width: 715,
                        height: 291
                    }
                ],
            },
            objectives:{
                description: "For each objective I created a small animation that could represent the feature we wanted to highlight. This also helped create a more visually appealing onboarding flow and good first impression of the app for new users.",
                categories: [
                    {
                        title: "Objective 1",
                        description: "Educate users on 'conversations'.",
                        image: randomPic,
                        width: 267,
                        height: 267,
                    },
                    {
                        title: "Objective 2",
                        description: "Educate users on 'Clips'. ",
                        image: randomPic,
                        width: 267,
                        height: 267
                    },
                    {
                        title: "Objective 3",
                        description: "Welcome user feedback.",
                        image: randomPic,
                        width: 188,
                        height: 327
                    },
                    
                ]
            },

        },
        final_onboarding_pages: {
            src: "https://www.figma.com/proto/wvyskMpJxXJ6c2rejTf0yz/LISN---Onboarding-Screens?embed_host=share&kind=&node-id=310%3A675&page-id=310%3A191&scaling=min-zoom&starting-point-node-id=310%3A227&viewport=1425%2C493%2C0.32"
        },
        new_home_page_ideation:{
            flowA:{
                description: "In addition to the new onboarding pages, we wanted to create a new home page within the app that better organized content and created easy access to the most used features. I started concept development with some competitive analysis and then moved on to create blockframes and wireframes. I was continually testing with the team throughout this process to ensure cohesion and a feasible development scope.",
                images: [
                    {
                        image: randomPic,
                        title: "Ideation Flow A",
                        width: 606,
                        height: 558
                    }
                ]
            },
            flowB:{
                description:"As a good UX principle, we wanted to create a home page that felt familar for new users. We did not want to overwhelm new users with a completely novel home page that required lots of learning, instead we opted to create a familiar flow to other apps in the podcast/music market space as many of our users also used these services.",
                images:[
                    {
                        image: randomPic,
                        title: "Brainstorming with similar apps in the market",
                        width: 567,
                        height: 360
                    },
                    {
                        image: randomPic,
                        title: "Blockframing",
                        width: 505,
                        height: 321
                    }
                ]
            },
            flowC:{
                description: "One of the challenges we faced was designing a new layout card for our conversations feature. Conversations included multiple short clips of various podcasts that were put together into a ‘Conversation’. We wanted to create a card system that showed users which podcasts were contained within each conversation along with a description, duration, original poster, and interaction buttons. The challenge was to do this without creating something too busy and complicated for mobile screens.",
                images: [
                    {
                        image: randomPic,
                        title: "Old conversation layout card",
                        width: 252,
                        height: 121
                    }
                ]
            }
        },
        new_home_page_concepts:{
            description: "",
            images: [
                {
                    image: randomPic,
                    title: "Concept 1 ",
                    description: "Podcasts clips in a carousel menu, with additional information on the bottom.",
                    width: 183,
                    height: 351,
                },
                {
                    image: randomPic,
                    title: "Concept 2",
                    description: "An audio waveform that timestamped each podcast clip in the conversation.",
                    width: 175,
                    height: 351,
                },
                {
                    image: randomPic,
                    title: "Concept 3",
                    description: "A vertical timeline that showed each podcast clip in chronological order",
                    width: 280,
                    height: 351,
                }
            ]
        },
        final_home_page:{
            description:"After testing the concepts within the team concept 1 was most favourable due to its easy readability, clean layout, and simple development turnaround. ",
            images:[
                {
                    image: randomPic,
                    title: "",
                    width: 726,
                    height: 514
                }
            ],
            iframe_src: "https://www.figma.com/proto/KSj63BgYfeq6OHsA6yPAjV/LISN-Home-Screen-Redesign?embed_host=share&kind=&node-id=12%3A1368&page-id=0%3A1&scaling=min-zoom&show-proto-sidebar=1&starting-point-node-id=12%3A1368&viewport=325%2C921%2C0.63"
        },

    },

    {
        id: 3,
        image: CoreProjectImage,//CoreProjectImage,//
        title: "Core",
        title_url_safe: "Core",
        name: "Blood Pressure Monitor - Core.",
        description: "Product redesign of a blood pressure monitor with mobile application geared towards athletes.",
        tags: "Industrial Design - User Research - UX/UI - Prototyping - 3D CAD",
        duration: "3 Months",
        type: "Personal",
        role: "Lead Designer",
        tools: "Figma, Webflow",
        link: "/project/core",
    },

    {
        id: 4,
        image: WorldJournalProjectImage,//WorldJournalProjectImage,//
        title: "World Journal",
        title_url_safe: "WorldJournal",
        name: "NASA Design Sprint - World Journal",
        description: "Web application that aims to utilize the satellite imagery and live video feeds from the Internation Space Station for educational purposes.",
        tags: "Web Design - Interaction Design - UX/UI",
        duration: "3 Months",
        type: "Personal",
        role: "Lead Designer",
        tools: "Figma, Webflow",
        link: "/project/world-journal",
    },

]