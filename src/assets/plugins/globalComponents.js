// This is where components are declared and used throughout the website
import Projects from "../../components/Projects";
import Dropdown from "../../components/Dropdown";

const GlobalComponents = {
    install(app) {
        app.component("projects", Projects);
        app.component("dropdown", Dropdown);
    }
}

export default GlobalComponents;