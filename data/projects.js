import CoreProjectImage from '/public/core.png'
import HomieProjectImage from '/public/homie.png'
import LisnProjectImage from '/public/lisn.png'
import WorldJournalProjectImage from '/public/world-journal.png'

const randomPic = "https://picsum.photos/600/400"

export const allProjects = [
    {
        'id': 1,
        'image': HomieProjectImage, //randomPic,//
        'title': "Homie",
        'title_url_safe': "Homie",
        'name': "Rental Housing Search - Homie",
        'description': "Web application that simplifies and assists the housing rental search process.",
        'tags': "UX/UI - User Research - Visual Design - Behavioural Design",
        'duration': "3 Months",
        'type': "Personal",
        'role': "Lead Designer",
        'tools': "Figma, Webflow"
    },

    {
        'id': 2,
        'image': LisnProjectImage,//randomPic,//
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
        'image': CoreProjectImage,//randomPic,//CoreProjectImage,
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
        'image': WorldJournalProjectImage,//randomPic,//WorldJournalProjectImage,
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