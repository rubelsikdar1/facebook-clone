import Style from "./MessengerChatHeaderNagevate.module.css"

const MessengerChatHeaderNagevate = ({name}) => {
    return (
        <div>
            <div className={Style.main}>
                {name}
            </div>
        </div>
    );
};

export default MessengerChatHeaderNagevate;