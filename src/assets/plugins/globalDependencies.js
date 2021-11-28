import GlobalComponents from "./globalComponents";
import GlobalInteractions from "./globalInteractions";

// Add stylesheets to the website
import "../css/main.css";
import "../main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    install(app) {
        app.use(GlobalComponents);
        app.use(GlobalInteractions);
    },
};