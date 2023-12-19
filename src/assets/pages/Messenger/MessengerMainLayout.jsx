import Style from "./MessegerMainLayout.module.css";
import ChatHeader from './../../components/MessengerConponents/ChatHeader/ChatHeader';
import ChatListHeader from './../../components/MessengerConponents/ChatListHeader/ChatListHeader';

const MessengerMainLayout = () => {
  return (
    <div>
      <div className={Style.mainBox}>
            <div className={Style.left}>
                <ChatListHeader/>
            </div>
            <div className={Style.medile}>
                <ChatHeader/>
            </div>
            <div className={Style.right}>
                <h1>check</h1>
            </div>
      </div>
    </div>
  );
};

export default MessengerMainLayout;
