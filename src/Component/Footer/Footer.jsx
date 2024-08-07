import React from 'react'
import style from './Footer.module.css'


import { MdOutlinePhoneInTalk } from "react-icons/md";
import { LiaCommentsSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className={`p-10  flex justify-around w-100% ${style.color}`}>
                <div className=' w-20%'>
                    <h1 className='text-white text-lg font-medium pb-5'>
                        We Help With
                    </h1>

                    <ul className='font-normal  text-base text-slate-100'>
                        <li>Relationship Counselling</li>
                        <li>Stress Anxiety Depression</li>
                        <li>Confidence</li>
                        <li>Trauma</li>
                        <li>LGBTQ+</li>
                        <li>Lifestyle Issues</li>
                        <li>Managing Workplace</li>
                        <li>Women Centric Challenges</li>
                        <li>Indians Living Abroad</li>
                    </ul>

                </div>

                <div className=' w-20%'>
                    <h1 className='text-white text-lg font-medium pb-5'>
                        Self Help
                    </h1>

                    <ul className='font-normal  text-base text-slate-100'>

                        <li>Articles</li>
                        <li>14 Days Program</li>
                    </ul>

                </div>

                <div className=' w-20%'>
                    <h1 className='text-white text-lg font-medium pb-5'>
                        For Business
                    </h1>

                    <ul className='font-normal  text-base text-slate-100'>
                        <li>Corporates</li>
                        <li>Institutions</li>
                        <li>Strategic Partners</li>
                    </ul>

                </div>


                <div className=' w-20%'>
                    <h1 className='text-white text-lg font-medium pb-5'>
                        Assessments
                    </h1>

                    <ul className='font-normal  text-base text-slate-100'>
                        <li>Am I stressed</li>
                        <li>Am I Sad Or Depressed?</li>
                        <li>How am I sleeping?</li>
                        <li>Am I Anxious?</li>
                    </ul>

                </div>


                <div className=' w-25% pl-10 border-l border-dotted'>
                    <h1 className=' text-white mb-3 text-lg font-medium pb-5 text-center '>
                        Contact
                    </h1>
                    <ul className='flex gap-3 justify-around'>
                        <li className={`bg-white p-3 rounded-xl text-4xl ${style.gradient}`}>
                            <MdOutlinePhoneInTalk />
                        </li>
                        <li className={`bg-white p-3 rounded-xl text-4xl ${style.gradient}`}>
                            <LiaCommentsSolid />
                        </li>
                        <li className={`bg-white p-3 rounded-xl text-4xl ${style.gradient}`}>
                            <FaWhatsapp />
                        </li>
                    </ul>


                    <div className='flex justify-center mb-4'>
                        <button className={style.btn}>
                            Book Session
                        </button>
                    </div>

                    <h2 className='text-white mb-3 text-lg font-medium pb-5 text-center'>
                        Customer Support Timing
                    </h2>

                    <h3 className='text-white  text-normal font-normal  text-center'>
                        Mon - Sat: 9:00AM - 1:00AM IST
                    </h3>
                    <h3 className='text-white  text-normal font-normal  text-center'>
                        Sun: 10:00AM - 7:00PM IST
                    </h3>
                </div>
            </div>

            <div className={`pr-20 p-2 pb-5 flex justify-end w-100% ${style.color}`}>

                <ul className="w-full flex justify-end  space-x-4">
                    <li className="bg-white  p-2 rounded-full">
                        <FaFacebookF className="text-blue-600" />
                    </li>
                    <li className="bg-white p-2 rounded-full">
                        <FaLinkedinIn className="text-blue-700" />
                    </li>
                    <li className="bg-white p-2 rounded-full">
                        <AiOutlineYoutube className="text-red-600" />
                    </li>
                    <li className="bg-white p-2 rounded-full">
                        <FaInstagram className="text-pink-500" />
                    </li>
                </ul>
            </div>


            <div className={`p-10 border-dotted  border-y-2 flex justify-around w-100% ${style.color}`}>

                <div className='text-white'>
                    Copyright © 2023 Virzen Wellness Private Limited
                </div>

                <ul className='flex  text-white gap-12'>
                    <li>
                        Privacy Policy
                    </li>
                    <li>
                        Terms & Conditions
                    </li>
                    <li>
                        Refund & Cancellation Policy
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>

            </div>

            <div className={`p-10  flex justify-around w-100% ${style.color}`}>
                <div className={`${style.color2} w-[65%] p-8 rounded-xl`}>
                    <p className='font-medium text-base text-center leading-loose text-slate-100'>
                        Disclaimer: Please note that we are not a crisis intervention helpline. Should you have severe symptoms or have thought about <br /> harming yourself, please seek immediate medical help or call suicide prevention helplines such as
                        <br /> Vandrevala Foundation 24x7 Helpline: +91-9999666555
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer