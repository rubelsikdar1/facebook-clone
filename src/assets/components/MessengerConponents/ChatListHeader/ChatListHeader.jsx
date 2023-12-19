
import SearchBar from './../../rootComponents/SearchBar/SearchBar';
import Style from "./ChatListHeader.module.css";
import MessengerChatHeaderNagevate from './../../rootComponents/MessengerChatHeaderNagevate/MessengerChatHeaderNagevate';
import { BsThreeDots } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

const ChatListHeader = () => {
    return (
        <div>
            <div className={Style.inner}>
                <div className={Style.chatHead}>
                    <div className={Style.name}><b>Chat</b></div>
                    <div className={Style.icon}>
                        <div className={Style.icons}>
                            <BsThreeDots color='black' />
                        </div>
                        <div className={Style.icons}>
                           <FaEdit color='black' />
                        </div>
                    </div>
                </div>
                <SearchBar placeholderText="SearchMessenger"/>
                <div className={Style.inbox}>
                    <MessengerChatHeaderNagevate name="Inbox"/>
                    <MessengerChatHeaderNagevate name="Cominication"/>
                </div>
            </div>
        </div>
    );
};

export default ChatListHeader;