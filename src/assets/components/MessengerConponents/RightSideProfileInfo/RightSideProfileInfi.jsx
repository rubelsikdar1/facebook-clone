import Style from "./RightSideProfileInfi.module.css";
import { GoBellFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import RightSideProfileDropdown from './../../rootComponents/RightSideProfileDropdown/RightSideProfileDropdown';


const RightSideProfileInfi = () => {
    const items = ["Chat info","Customize chat", "Media, files and links", "Privacy & support"];
    return (
        <div>
            <div className={Style.mainBox}>
                <div className={Style.profilePhoto}>
                    <img src="https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1618641986557-1ecd230959aa%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dprofile%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHx8fDE3MDI5Njk4MDh8MA%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60" alt="" className={Style.photo} />
                </div>
                <div className={Style.name}>
                    <h2> Name is not definde  </h2>
                </div>
                <div className={Style.icons}>
                    <div className={Style.icon}> <IoSearch size={20} color="black"/> </div>
                    <div className={Style.icon}> <GoBellFill size={20} color="black"/> </div>
                    <div className={Style.icon}> <CgProfile size={20} color="black" /> </div>
                </div>
                    {
                        items.map((item, i)=> <RightSideProfileDropdown key={i.toString()} left={item} />)
                    }
            </div>
        </div>
    );
};

export default RightSideProfileInfi;