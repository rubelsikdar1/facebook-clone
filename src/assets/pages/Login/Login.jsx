import Style from "./Login.module.css";

const Login = () => {
    return (
        <div className={Style.bg}>
            <div className={Style.fullPage}>
                <div className={Style.left}>
                    <h1 className={Style.heading}>
                        facebook
                    </h1>
                    <p className={Style.para}>
                    Facebook helps you connect and share with the people in your life.
                    </p>
                </div>
                <div className={Style.right}>
                    <div className={Style.loginBOx}>
                        <form action="">
                            <div className={Style.inputAria}>
                                <input type="text" name="" id="" placeholder="Email address or phone number"
                                className={Style.inputBox}
                                />
                                <input type="password" name="" id="" placeholder="password"
                                className={Style.inputBox}
                                />
                                <input type="submit"
                                 value="Log in"
                                className={`${Style.inputBox} ${Style.submit}`} />
                                <button
                                className={`${Style.inputBox} ${Style.forgotBtn}`}
                                >Forgotten password?</button>
                                <button
                                className={Style.accountBtn}
                                >Crate Account</button>
                            </div>
                        </form>
                    </div>
                    <div className={Style.boxDown}>
                        <p><span className={Style.spanText}> Create a Page</span> for a celebrity, brand or business.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;