import Style from "./MessegerMainLayout.module.css";
import ChatHeader from './../../components/MessengerConponents/ChatHeader/ChatHeader';

const MessengerMainLayout = () => {
  return (
    <div>
      <div className={Style.mainBox}>
            <div className={Style.left}>
                <h1>check</h1>
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
