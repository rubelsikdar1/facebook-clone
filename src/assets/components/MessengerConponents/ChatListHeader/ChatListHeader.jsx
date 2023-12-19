
import SearchBar from './../../rootComponents/SearchBar/SearchBar';
import Style from "./ChatListHeader.module.css";
import MessengerChatHeaderNagevate from './../../rootComponents/MessengerChatHeaderNagevate/MessengerChatHeaderNagevate';

const ChatListHeader = () => {
    return (
        <div>
            <div className={Style.inner}>
                <h1>Chat</h1>
                <SearchBar placeholderText="Search Messenger"/>
                <MessengerChatHeaderNagevate/>
            </div>
        </div>
    );
};

export default ChatListHeader;