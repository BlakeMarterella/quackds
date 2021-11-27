// This is where components are declared and used throughout the website
import Projects from "../../components/Projects";

const GlobalComponents = {
    install(app) {
        app.component("projects", Projects);
    }
}

export default GlobalComponents;