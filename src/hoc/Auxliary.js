
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
const aux = (props) => (
    <div>
        {props.children}
    <ScrollUpButton style={{backgroundColor: "#e8bf74", zIndex: "500", bottom: "10rem"}}  />
    </div>
    );

export default aux;