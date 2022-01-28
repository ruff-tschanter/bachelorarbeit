//use: can I use to see if css objects are supported and in which browsers
import{render} from "react-dom";
import App from "./components/App";

render(<App />, document.getElementsByClassName("header"));

