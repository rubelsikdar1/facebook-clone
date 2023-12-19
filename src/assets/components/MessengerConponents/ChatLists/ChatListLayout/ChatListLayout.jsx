import Style from "./ChatListLayout.module.css";
import Person from './../Person/Person';
const ChatListLayout = () => {
     const personData = 50;
     const personDataArray = Array.from({length:personData}, (v,i)=> i+1);
     console.log(personDataArray);

    return (
        <div>
            <div className={Style.mainBox}>
                {
                    personDataArray.map((person,i)=> <Person key={i.toString()}/>)
                }
            </div>
        </div>
    );
};

export default ChatListLayout;