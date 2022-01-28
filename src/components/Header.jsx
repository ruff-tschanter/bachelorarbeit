import pin from "../images/pin.svg";
import sun from "../images/sun.svg";
import drop from "../images/waterdrop.svg";
import settings from "../images/settings.svg";

const Header = () => {
    return (
        <div class="container navigation">
            <div class="row py-2 d-flex align-items-center">
                <div class="col-3 d-flex">
                    <div class="w-100 d-flex">
                        <img src={pin} class="w-100"/>
                    </div>
                    <div class="w-100">
                        <p class="text-center w-100"> | </p>
                    </div>
                    <div class="w-100 d-flex">
                        <img src={drop} class="w-100"/>
                    </div>
                    <div class="w-100">
                        <p class="text-center w-100"> | </p>
                    </div>
                    <div class="w-100 d-flex">
                        <img src={sun} class="w-100"/>
                    </div>
                </div>
                <div class="col-7">
                    <h1>Choose your crops for field 1 <span class="text-field">(F1)</span></h1>
                    <div id="root"></div>
                </div>
                <div class="col-1 d-flex">
                    <div class="w-100 d-flex">
                        <a href="pages/settings.html"><img src={settings} class="w-50"/></a>
                    </div>              
                </div>
            </div>
        </div>
    );
};

export default Header;