import ProjectHighlight from "@project-highlight";
import HomieProjectImage from "@homie-main-image"

export default function Playground(){

    var projectHighlightData = {
        "title": "Homie",
        "synopsis": "Web application that simplifies and assists the rental housing search process.",
        "tags": "Tag1 - Tag2",
        "project_image": HomieProjectImage,
        "duration": "4 months",
        "role": "Lead Designer",
        "type": "Project Type",
        "research_methods": "Research method 1, Research method 2,  Research method 2,  Research method 2",
        "overview": "This senior project focused on researching, designing, and validating a digital service that could help improve the user journey in a chosen problem space. Our group chose to tackle the rental housing experience and develop a solution that could streamline the process for beginners and experienced renters."
    }
    return(
        <div>
        <ProjectHighlight data={projectHighlightData}/>
        </div>
    )
}