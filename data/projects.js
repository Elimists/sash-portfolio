import CoreProjectImage from '../public/projects/core/core.webp'
import HomieProjectImage from '../public/projects/homie/homie.png'
import LisnProjectImage from '../public/projects/lisn/lisn.png'
import WorldJournalProjectImage from '../public/projects/world-journal/world-journal.png'



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
        role: "Lead Designer",
        tools: "Interviews, Surveys, Market Research, Competitive Analysis, Figma",
        overview: "This senior project focsued on researching, designing, and validating a digital service that could help improve the user journey in a chosen problem space. Our group chose to tackle the rental housing experience and develop a solution that could streamline the process for beginners and experienced renters.",
        problem: "Overall, the process of finding and securing a housing rental can be a daunting, overwhelming, and cumbersome journey. Most of the process is learned by word of mouth and through trial and error, making it difficult for inexperienced renters to know where to begin and confidently carry out the entire process. There is also a need for more semi-formal education or resources concerning the renting process as a whole, including knowledge around renter rights. Even more experienced renters encounter a slew of issues relating to poor information across rental ads, usability and experience of rental platforms and listings, communication with landlords and roommates, decision making, and legal matters.",
        process: randomPic,
        research_goals:[
            "Understand the tools and services that renters are currently using during their house hunt to find areas of improvement within existing tools.",
            "Identify key criteria renters look for when searching for housing to empower them to make better housing decisions.",
            "Understand users’ knowledge regarding renting legalities to educate and build confidence in the renting process.",
            "Gain insight into the end-to-end process of renting a property to uncover pain points and challenges to improve and streamline the experience for the renter."
        ],
        recruitment_method: "Our methods involved reaching out to friends and family (and their wider network) to find users that would fit our recruitment criteria (see below). Posting in Carleton University student groups on social media (ie: Reddit and Facebook) requesting volunteers.",
        user_groups: {
            description: "We divided our recruitment to 75-80% of interviewees from User Group 1, and 20-25% interviewees from User Group 2 since the service is targeted towards tenants.",
            image: randomPic
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
            image: randomPic,
            image2: randomPic
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
                    image: randomPic
                },
                {
                    title: "Carly: Long Distance Mover",
                    image: randomPic
                },
                {
                    title: "Tamira: New Parent",
                    image: randomPic
                },
                {
                    title: "Samu: Young Professional",
                    image: randomPic
                }
            ]
        },
        user_journey_map:{
            description: "Having uncovered many of the pain-points and oppurtunites from our research we put together a user journey map that showed the rental housing process from start to finish. This journey map allowed us to visualize where the problem areas where and highlight key touch points that could be improved.",
            images: [
                {
                    image: randomPic,
                    title: "Use Journey Map"
                }
            ]
        },
        concept_development:[
            {
                title: "Competitive Analysis",
                description: "We began our concept development by doing some market research on existing products and understanding their approach, functionality, and layout.",
                images: [
                    {
                        image: randomPic,
                        title: "Competitive Analysis"
                    }
                ]
            },
            {
                title: "Application Architecture",
                description: "The design solution involved creating an information architecture, comprised of all the possible pages, content, features, and user actions for Homie. Each of these assets were then grouped into named catergories and organized in a hierarchical structure.",
                images: [
                    {
                        image: randomPic,
                        title: "Information Architecture"
                    }
                ]
            },
            {
                title: "UI Development",
                description: "We focused our concept development into three key areas of the application that we identified from our research which needed the most imporvement.",
                images:[
                    {
                        image: randomPic,
                        title: "Landlord Portal - Creating and Managing Listings "
                    },
                    {
                        image: randomPic,
                        title: "Searching, Organizing, and Saving Listings"
                    },
                    {
                        image: randomPic,
                        title: "Scheduling Viewings and Communication"
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
            image: randomPic,
            title: "Iterations"
        },
        final_desing:{
            description: "After addressing the concerns from our user testing we began the finalization of the design by creating a branding guideline and developing a high-fidelity version of the application.",
            images:[
                {
                    image: randomPic,
                    title: "Mood Board"
                },
                {
                    image: randomPic,
                    title: "Landing Page"
                },
                {
                    image: randomPic,
                    title: "Housing Search"
                },
                {
                    image: randomPic,
                    title: "Listing View"
                },
                {
                    image: randomPic,
                    title: "Comparison Page"
                },
                {
                    image: randomPic,
                    title: "Messaging"
                },
                {
                    image: randomPic,
                    title: "Booking Page"
                },

            ]
        }

    },

    {
        'id': 2,
        'image': LisnProjectImage,//LisnProjectImage,//
        'title': "Lisn",
        'title_url_safe': "Lisn",
        'name': "User Research and Onboarding - LISN",
        'description': "Expanding product market research and improving new user onboarding for a mobile application.",
        'tags': "UX / UI - User Research - Product Roadmapping - Prototyping - Branding",
        'duration': "3 Months",
        'type': "Personal",
        'role': "Lead Designer",
        'tools': "Figma, Webflow"
    },

    {
        'id': 3,
        'image': CoreProjectImage,//CoreProjectImage,//
        'title': "Core",
        'title_url_safe': "Core",
        'name': "Blood Pressure Monitor - Core.",
        'description': "Product redesign of a blood pressure monitor with mobile application geared towards athletes.",
        'tags': "Industrial Design - User Research - UX/UI - Prototyping - 3D CAD",
        'duration': "3 Months",
        'type': "Personal",
        'role': "Lead Designer",
        'tools': "Figma, Webflow"
    },

    {
        'id': 4,
        'image': WorldJournalProjectImage,//WorldJournalProjectImage,//
        'title': "World Journal",
        'title_url_safe': "WorldJournal",
        'name': "NASA Design Sprint - World Journal",
        'description': "Web application that aims to utilize the satellite imagery and live video feeds from the Internation Space Station for educational purposes.",
        'tags': "Web Design - Interaction Design - UX/UI",
        'duration': "3 Months",
        'type': "Personal",
        'role': "Lead Designer",
        'tools': "Figma, Webflow"
    },

]