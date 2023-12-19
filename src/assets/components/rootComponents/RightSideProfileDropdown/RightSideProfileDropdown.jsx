import Style from "./RightSideProfileDropdown.module.css";
import { FaAngleDown } from "react-icons/fa";

const RightSideProfileDropdown = ({left}) => {
    return (
        <div >
            <div className={Style.mainBox}>
                <div className={Style.left}>
                    <h4>{left} </h4>
                </div>
                <div className={Style.right}>
                    <div className={Style.icon}>
                        <FaAngleDown />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideProfileDropdown;