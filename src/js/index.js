import { initFooter } from "./components/footer.js";
import { initNavigation } from "./components/navigation.js";
import { initCalculator } from "./components/calculator.js";

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initCalculator();
    initFooter();
});
