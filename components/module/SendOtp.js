import { useState } from 'react';
import { useSendOtp } from '@/utils/auth';
import { isValidMobile } from '@/utils/phoneValidation';
import Image from 'next/image';

function SendOtp({ setStep, phoneNumber, setPhoneNumber, setOtp }) {
    const [error, setError] = useState("");

    // Use the custom hook
    const { mutate: sendOtp, isLoading } = useSendOtp();

    // Define the submitHandler function outside the sendOtp invocation
    const submitHandler = (e) => {
        e.preventDefault();

        // Validate the mobile number
        if (!isValidMobile(phoneNumber)) {
            setError('شماره وارد شده معتبر نمیباشد');
            return;
        }

        setError("");

        // Trigger the OTP sending
        sendOtp(
            { phoneNumber },
            {
                onSuccess: (response) => {
                    console.log("API response:", response.data);

                    if (response?.data?.success) { // Only check for success flag
                        console.log("OTP sent successfully:", response.data);
                        setOtp(response.data.otp);
                        setStep(2); // Move to next step
                    } else {
                        console.error("Unexpected response:", response.data);
                        setError("خطایی در ارسال کد رخ داده است");
                    }
                },
                onError: (error) => {
                    if (error.response) {
                        // Error response from the server
                        console.error('Server error response:', error.response.data);
                        setError("خطایی در ارسال کد رخ داده است");
                    } else if (error.request) {
                        // No response from server (e.g., network issues)
                        console.error('No response received:', error.request);
                        setError("مشکلی در اتصال به سرور رخ داده است");
                    } else {
                        // Other errors (unexpected ones)
                        console.error('Error message:', error.message);
                        setError("خطایی در ارسال کد رخ داده است");
                    }
                }
            }
        );
    };

    return (
        <div className="max-h-[400px] flex justify-center">
            <div className="w-[400px] min-h-[200px] border border-zinc-400 rounded-xl p-4">
                <div className='mb-20 mt-14 text-center'>
                    <h1 className='text-bold text-2xl mb-4'>ورود به حساب کاربری</h1>
                    <p>خوش آمدید، لطفا شماره خود را جهت ورود به حساب کاربری وارد نمایید</p>
                </div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="number">شماره تلفن همراه خود را وارد کنید</label>
                        <input
                            style={{ direction: "ltr", backgroundColor: "var(--background-color)" }}
                            className="mt-2 border border-zinc-400 w-full rounded-md p-1 focus:outline-none"
                            id="number"
                            type="text"
                            placeholder="09121234567"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 w-full bg-zinc-500 rounded-md text-white hover:bg-white hover:text-zinc-900 hover:border hover:border-zinc-600 cursor-pointer"
                    >
                        {isLoading ? 'در حال ارسال...' : 'ارسال'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SendOtp;
