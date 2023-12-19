import Style from "./ChatHeader.module.css";
import { CgProfile } from "react-icons/cg";
import { IoInformationCircle } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaVideo } from "react-icons/fa6";
import { useState } from "react";


const ChatHeader = () => {
    const [buttonShow, SetbuttonShow]=useState(false)
    return (
        <div>
            <div className={Style.mainFlex}>
                <div className={Style.left}>
                  < CgProfile size={40} color="green" />
                  <h3>Love allah only allah </h3>
                </div>
                <div className={Style.right}>
                    {
                        buttonShow && <div className={Style.markIcon}><IoMdCheckmark color="white" size={35} /></div>
                        ||
                        <div className={Style.call}>
                        <BiSolidPhoneCall size={30} color="#007DF2" />
                        <FaVideo size={30} color="#007DF2" />
                    </div>
                    }
                    <IoInformationCircle size={40} color="#007DF2" />
                </div>
            </div>
        </div>
    );
};

export default ChatHeader;