import clickedOuside from "../../interactions/clickedOuside";

const GlobalInteractions = {
    install(Vue) {
        Vue.directive("clicked-outside", clickedOuside);
    },
};

export default GlobalInteractions;