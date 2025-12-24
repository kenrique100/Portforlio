"use client";

import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactMe() {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:ngwakenri2016@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

    return (
        <div className="h-screen flex flex-col justify-start pt-24 px-4 md:px-10 max-w-7xl mx-auto">
            {/* SECTION TITLE */}
            <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl text-center mb-10">
                Contact
            </h3>

            {/* CONTENT */}
            <div className="flex flex-col space-y-6 md:space-y-10 items-center">
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
                    I have just what you need.{" "}
                    <span className="decoration-[#F7AB0A]/50 underline">
                        Lets Talk.
                    </span>
                </h4>

                <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-6 w-6 md:h-7 md:w-7 animate-pulse" />
                        <p className="text-lg md:text-xl lg:text-2xl">
                            +237670466987
                        </p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-6 w-6 md:h-7 md:w-7 animate-pulse" />
                        <p className="text-lg md:text-xl lg:text-2xl break-all">
                            ngwakenri2016@gmail.com
                        </p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h-6 w-6 md:h-7 md:w-7 animate-pulse" />
                        <p className="text-lg md:text-xl lg:text-2xl text-center">
                            1012 Bonaberi Douala, Cameroon
                        </p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-3 w-full max-w-md mx-auto mt-4"
                >
                    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-2">
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className="contactInput"
                            type="text"
                        />
                        <input
                            {...register("email")}
                            placeholder="Email"
                            className="contactInput"
                            type="email"
                        />
                    </div>

                    <input
                        {...register("subject")}
                        placeholder="Subject"
                        className="contactInput"
                        type="text"
                    />

                    <textarea
                        {...register("message")}
                        placeholder="Message"
                        className="contactInput min-h-[120px]"
                    />

                    <button
                        type="submit"
                        className="bg-[#F7AB0A] py-3 md:py-4 px-6 md:px-10 rounded-md text-black font-bold text-base md:text-lg w-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
