
import { RxCross2 } from "react-icons/rx";
import Style from "./Registation.module.css";


const Registation = () => {
    const days = 31;
    const months = [ 'Jan', 'Fab', 'Mar', 'Apl', 'May','Jun','Jul','Agu','Sep','Oct','Nov','Dec'];
    const monthInDays = Array.from({length:days}, (v,i)=> i+1);
    const yearStart = 1900; 
    const currentYear = new Date().getFullYear();
    const yearLoop = Array.from({ length: currentYear - yearStart + 1 }, (_, index) => yearStart + index);
   

    return (
        <div className={Style.bg}>
            <div className={Style.box}>
                <form action="">
                <div className={Style.boxPadding}>
                    <div className={Style.singUp}>
                        <div className={Style.left}>
                            <h1 className={Style.heading}>Sing Up</h1>
                            <p className={Style.para}> Its quick and easy.</p>
                        </div>
                        <div className={Style.right}>
                            <div className={Style.cross}>
                               <RxCross2 />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={Style.inputAria}>
                        <div className={Style.inputName}>
                            <input type="text" 
                            name="" id="" 
                            placeholder="First name"
                            className={Style.name} />

                            <input type="text" 
                            name="" id="" 
                            placeholder="Surname"
                            className={Style.name} />
                        </div>
                        <div className={Style.mobileOrEmail}>
                            <input type="text" 
                            name="" id="" 
                            placeholder="Mobile number or email address"
                            className={Style.em} />
                        </div>
                        <div className={Style.password}>
                            <input type="password" 
                            name="" id="" 
                            placeholder="New password"
                            className={Style.em} />
                        </div>
                    </div>
                    <div className={Style.dateOrGender}>
                        <label name="" id="" className={Style.db}> Date of birth</label>
                        <div className={Style.birthFlx}>
                            <select name="" id="" className={Style.select}>
                            {monthInDays.map((opt, i)=> <option key={i.toString()}>{opt}</option>)}
                            </select>
                            <select name="" id="" className={Style.select}>
                            {months.map((opt, i)=> <option key={i.toString()}>{opt}</option>)}
                            </select>
                            <select name="" id="" className={Style.select}>
                            {yearLoop.reverse().map((opt, i)=> <option key={i.toString()}>{opt}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className={Style.genderB}>
                    <label name="" id="" className={Style.db}> Gender</label>
                        <div className={Style.gender}>
                            <div className={Style.genderBox}>
                                <div className={Style.gen}>
                                    <p className={Style.gpa}> Male</p>
                                    <input type="radio" name="" id="" />
                                </div>
                            </div>
                            <div className={Style.genderBox}>
                            <div className={Style.gen}>
                                    <p className={Style.gpa}> Female</p>
                                    <input type="radio" name="" id="" />
                                </div>
                            </div>
                            <div className={Style.genderBox}>
                            <div className={Style.gen}>
                                    <p className={Style.gpa}> Custom</p>
                                    <input type="radio" name="" id="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Style.trms}>
                        <p className={Style.trms}>
                        People who use our service may have uploaded your contact information to Facebook. Learn more.
                        </p>
                        
                        <p className={Style.trms}>
                        By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.
                        </p>
                    </div>
                    <div className={Style.SingUpBtn}>
                        <input type="submit" className={Style.singUpB} value="Sing Up" />
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Registation;