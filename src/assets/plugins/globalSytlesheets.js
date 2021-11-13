import GlobalComponents from "./globalComponents";
import GlobalInteractions from "./globalInteractions";

//Add more css files if necessary
import "../css/main.css";
import "../main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    install(app) {
        app.use(GlobalComponents);
        app.use(GlobalInteractions);
    },
};