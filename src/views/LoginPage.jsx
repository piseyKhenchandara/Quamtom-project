'use client';
import { useState } from "react";
import { FaFacebook, FaGoogle, FaDiscord, FaTelegram,FaInstagram } from "react-icons/fa";
import BrandNameHeader from "../components/LoginComponents/BrandNameHeader";
import LoginCard from "../components/LoginComponents/LoginCard";
const Login = () => {
    const Brand = "Quantom";

    return (
        <article className="bg-gray-200 min-h-screen">
            <div>
                <BrandNameHeader brandName={Brand} />
            </div>
            <section className="flex justify-center items-center md:mt-10 ">
                
                <LoginCard brandName={Brand}/>
                
                   
            </section>
           
        </article>
    );
};

export default Login;
