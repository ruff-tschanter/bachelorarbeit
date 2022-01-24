import "../styles/index.scss";
import Recipes from "./Recipes";
import wheat from "../images/wheat.svg";

const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>Oh hai, React</h1>
                </section>
                <img src={wheat} alt="wheat" width="250"/>
                <Recipes/>
            </main>
        </>
    );
};

export default App;