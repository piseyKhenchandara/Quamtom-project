'use client';
import { useState } from "react";
import { FaFacebook, FaGoogle, FaDiscord, FaTelegram,FaInstagram } from "react-icons/fa";
const LoginCard = ({brandName}) =>{
    const [inputValue, setInputValue] = useState("");
    const [ifFalse,setIfFalse] = useState(false);
    const handleClick = () => {
        setIfFalse(pre => !pre);
    }

    const handleInput = (event) => {
        setInputValue(event.target.value);
    };

    const LoginButtons = [
        { icon: <FaGoogle />, label: "Log In With Google" },
        { icon: <FaFacebook className="text-blue-500" />, label: "Log In With Facebook" },
        { icon: <FaDiscord className="text-blue-700"/>, label: "Log In With Discord" },
        { icon: <FaTelegram className="text-blue-500" />, label: "Log In With Telegram" },
       
    ];
    return(
        <>
             <div className="flex flex-col p-10 px-5 md:px-20 lg:px-30 bg-white md:max-w-[650px] xs:w-4/5 gap-5 ">
                <div className=" flex flex-col text-center ">
                    <h2 className=" text-gray-800">Your {brandName} Account</h2>
                    <p className=" mt-3">
                        Enter your email to log in or create an account.
                    </p>
                </div>
                <form className="flex flex-col mt-10">
                    <label htmlFor="input" >Email</label>
                    <input
                        type="text"
                        id="input"
                        className="border-[1px] px-1 py-0.5 w-full focus:outline-none"
                        value={inputValue}
                        onChange={handleInput}
                    />
                </form>
                
                <button className={`mt-4 px-4 py-2 text-white mx-auto ${inputValue ? "bg-black" : "bg-gray-300"}`}>
                    Continue
                </button>
                
                <div className=" flex items-center w-full my-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-2 text-gray-500 text-sm">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>


                <div className="mt-4 flex flex-col gap-2 item">
                    {LoginButtons.map((button, index) => (
                        <button key={index} className="flex flex-row justify-center items-center gap-2 px-4 py-2 border-[1px] ">
                            {button.icon} {button.label}
                        </button>
                    ))}
                    
                    <button className={`${ifFalse ? 'block' : 'hidden'} flex flex-row justify-center items-center gap-2 px-4 py-2 border-[1px] `}>{ifFalse && (<><FaInstagram className="text-pink-500"/>Login With Instagram</>)}</button>
                    <button onClick={handleClick} className={`border-[1px] mx-auto p-2 border-gray-400 hover:border-black font-bold mt-5`}>{ifFalse? 'Show less':'Show more'}</button>

                </div>
                <p className="text-center">by proceedng, I gree to the <span className="border-b-[2px] border-b-gray-500 text-gray-500">{brandName} Account Terms of Use</span> and  <span className="border-b-[2px] border-b-gray-500 text-gray-500">Privacy Policy</span></p>

            </div>

        </>
    )
}
export default LoginCard;