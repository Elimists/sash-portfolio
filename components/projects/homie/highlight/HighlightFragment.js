import ProjectHighlight from "@project-highlight";
import HomieImage from './homie.webp'

export default function HighlightFragment(){

    return(
            <ProjectHighlight data={homieData}/>
    )

}


var homieData = {
    "title": "Homie",
    "synopsis": "Web application that simplifies and assists the rental housing search process.",
    "tags": "UX/UI - User Research - Visual Design - Behavioral Design",
    "project_image": HomieImage,
    "duration": "4 months",
    "role": "UX Researcher & Designer",
    "type": "Group Project",
    "research_methods": "Interviews, Surveys, Market Research, Competitive Analysis, Figma",
    "overview": "This senior project focused on researching, designing, and validating a digital service that could help improve the user journey in a chosen problem space. Our group chose to tackle the rental housing experience and develop a solution that could streamline the process for beginners and experienced renters."
}
