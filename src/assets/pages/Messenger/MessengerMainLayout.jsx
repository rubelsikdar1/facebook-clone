import Style from "./MessegerMainLayout.module.css";
import ChatHeader from './../../components/MessengerConponents/ChatHeader/ChatHeader';
import ChatListHeader from './../../components/MessengerConponents/ChatListHeader/ChatListHeader';
import ChatListLayout from './../../components/MessengerConponents/ChatLists/ChatListLayout/ChatListLayout';
import RightSideProfileInfi from './../../components/MessengerConponents/RightSideProfileInfo/RightSideProfileInfi';

const MessengerMainLayout = () => {
  return (
    <div>
      <div className={Style.mainBox}>
            <div className={Style.left}>
                <ChatListHeader/>
                <ChatListLayout/>
            </div>
            <div className={Style.medile}>
                <ChatHeader/>
            </div>
            <div className={Style.right}>
                <RightSideProfileInfi/>
            </div>
      </div>
    </div>
  );
};

export default MessengerMainLayout;
