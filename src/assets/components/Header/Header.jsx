import { FaFacebook } from "react-icons/fa";
import Style from "./Header.module.css";
import { LuHome } from "react-icons/lu";
import { PiVideoThin } from "react-icons/pi";
import { CiShop } from "react-icons/ci";
import { HiUserGroup } from "react-icons/hi2";
import { LuGamepad } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { GoBellFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";


const Header = () => {
    return (
        <div>
           <div className={Style.mainSection}>
                <div className={Style.left}>
                    <div className={Style.logoAnSearchBar}>
                        <FaFacebook color="#0866FF"/>
                        <div className={Style.searchBox}>
                            <IoSearch color="#D8DADF" size={22} />
                            <input className={Style.sfx} type="search" name="" id="" 
                            placeholder="Search Facebook" />
                        </div>
                    </div>
                </div>
                <div className={Style.NavigateMenu}>
                    <ul className={Style.menu}>
                        <li className={Style.menuItem}> <LuHome /> </li>
                        <li className={Style.menuItem}><PiVideoThin /></li>
                        <li className={Style.menuItem}><CiShop /></li>
                        <li className={Style.menuItem}><HiUserGroup/></li>
                        <li className={Style.menuItem}><LuGamepad /></li>
                    </ul>
                </div>
                <div className={Style.rightIcon}>
                    <div className={Style.right}>
                        <div className={Style.rightBtn}><CgMenuGridO /></div>
                        <div className={Style.rightBtn}><GoBellFill /></div>
                        <div className={Style.rightBtn}><CgProfile /></div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Header;