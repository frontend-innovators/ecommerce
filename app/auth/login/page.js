"use client";

import Layout from '@/components/layout/Layout'
import CheckOtp from '@/components/module/CheckOtp';
import SendOtp from '@/components/module/SendOtp';
import { useUser } from '@/context/AuthContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Login() {
    const [step, setStep] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");

    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (user !== null) {
            const redirectPath = localStorage.getItem("redirectAfterLogin");
            router.push("/");
            localStorage.removeItem("redirectAfterLogin");
        }
    }, [user, loading, router]);


    return (
        <Layout>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:mb-22 p-2'>
                {/* Background Image Container */}
                <div className="bg-amber-100 h-[200px] lg:min-h-screen relative flex justify-between max-md:items-center">
                    <Image
                        className='lg:absolute w-40 lg:w-[80%] h-full lg:top-22 lg:left-0 object-cover z-0 lg:z-50'
                        src="/images/ad2.png"
                        width={1920}
                        height={1080}
                        alt='image'
                    />
                    <div>
                        <h1 className='font-bold text-2xl lg:mt-36'>ورود به حساب کاربری</h1>
                    </div>
                </div>

                <div className='lg:mt-60 mt-4'>
                    {step === 1 && <SendOtp setOtp={setOtp} setStep={setStep} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />}
                    {step === 2 && <CheckOtp otp={otp} setOtp={setOtp} phoneNumber={phoneNumber} setStep={setStep} />}
                </div>
            </div>
        </Layout>
    )
}

export default Login;
