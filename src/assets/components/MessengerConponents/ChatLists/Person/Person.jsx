import Style from "./Person.module.css"

const Person = () => {
    return (
        <div>
            <div className={Style.mainBox}>
                <div className={Style.dp}>
                    <img src="https://images.unsplash.com/photo-1594751543129-6701ad444259?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt=""
                    className={Style.pic} />
                </div>
                <div className={Style.name}>
                    <h4>Tanvir hossin</h4>
                    <p><small>hello world</small></p>
                </div>
            </div>
        </div>
    );
};

export default Person;