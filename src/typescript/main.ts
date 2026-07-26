// @ts-ignore
import "../scss/style.scss";
// @ts-ignore
import "../scss/components/_home.scss";
//@ts-ignore
import "../scss/components/_settings.scss";
//@ts-ignore
import "../scss/components/_game.scss";
//@ts-ignore
import "../scss/components/_cards.scss";
//@ts-ignore
import "../scss/components/_gameover.scss";
//@ts-ignore
import "../scss/components/_winner.scss";




import { renderHome } from "./components/_home";

const app = document.getElementById("app")!;

renderHome(app);


