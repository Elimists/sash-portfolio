import CoreProjectImage from '../public/projects/core/core.webp'

import WorldJournalProjectImage from '../public/projects/worldjournal/worldjournal.webp'

/** LISN Imports */
import LisnProjectImage from '../public/projects/lisn/lisn.webp'

/** HOMIE Imports */
import HomieProjectImage from '../public/projects/homie/homie.webp'

/** MemoryCache Imports */
import MemoryCacheImage from '../public/projects/memorycache/memorycache.webp'

export const allProjects = [

    {
        id: 5,
        image: MemoryCacheImage,//MemoryCacheImage,//
        title: "The MemoryCache",
        title_url_safe: "MemoryCache",
        name: "The MemoryCache - Holographic Sharing Device",
        description: "An assistive storytelling device that uses holograms to share memories and memorabilia",
        tags: "Extended Reality - Interaction Design - User Research - User Experience - Emerging Technology",
        duration: "8 Months",
        type: "Individual Project, Capstone Project",
        role: "Product Designer",
        tools: "Primary &#38 Secondary Research, User Tests, 3D Printing, Figma, Fusion360, Keyshot",
        link: "/project/memorycache",
        alt_text: "The MemoryCache is an explorative device uncovering the new ways of how people can save and share memories through holograms."
    },
    {
        id: 1, //Requried
        image: HomieProjectImage,//HomieProjectImage, //
        title: "Homie",
        title_url_safe: "Homie",
        name: "Rental Housing Search - Homie",
        description: "Web application that simplifies and assists the housing rental search process.",
        tags: "UX/UI - User Research - Visual Design - Usability Testing",
        duration: "3 Months",
        type: "Personal",
        role: "UX Researcher & Designer",
        tools: "Interviews, Surveys, Market Research, Competitive Analysis, Figma",
        link: "/project/homie",
        overview: "This senior project focsued on researching, designing, and validating a digital service that could help improve the user journey in a chosen problem space. Our group chose to tackle the rental housing experience and develop a solution that could streamline the process for beginners and experienced renters.",
        problem: "Overall, the process of finding and securing a housing rental can be a daunting, overwhelming, and cumbersome journey. Most of the process is learned by word of mouth and through trial and error, making it difficult for inexperienced renters to know where to begin and confidently carry out the entire process. There is also a need for more semi-formal education or resources concerning the renting process as a whole, including knowledge around renter rights. Even more experienced renters encounter a slew of issues relating to poor information across rental ads, usability and experience of rental platforms and listings, communication with landlords and roommates, decision making, and legal matters.",
        alt_text: "Homie assists user in housing rental search process",
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
        alt_text: "Lisn assists users in curating podcasts using A.I technologies"
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
        alt_text: "Core app supports athletes to maintain their health by providing quick and accurate blood pressure results"
    },

    {
        id: 4,
        image: WorldJournalProjectImage,//WorldJournalProjectImage,//
        title: "World Journal",
        title_url_safe: "WorldJournal",
        name: "NASA Design Sprint - World Journal",
        description: "Web application that aims to utilize the satellite imagery and live video feeds from the International Space Station for educational purposes.",
        tags: "Web Design - Interaction Design - UX/UI",
        duration: "3 Months",
        type: "Personal",
        role: "Lead Designer",
        tools: "Figma, Webflow",
        link: "/project/worldjournal",
        alt_text: "World Journal aims to connect people through the use of live satelitte imagery"
    },
]