import React from "react";
import rider from "../../../src/assets/rider/rider1.avif";

const BeARider = () => {
    return (
        <div className=" py-16">
            <div className=" bg-white rounded-2xl shadow-lg p-10">

                <div className="mb-10 border-b border-dashed border-gray-400 pb-12">
                    <h1 className="text-5xl font-bold text-secondary mb-3">
                        Be a Rider
                    </h1>
                    <p className="text-gray-600 max-w-2xl">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl text-secondary  font-bold mb-6">
                            Tell us about yourself
                        </h2>

                        <form className="space-y-5">

                            <div>
                                <label className="font-semibold">Your Name</label>
                                <input type="text" placeholder="Enter Your Name" className="input-style" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="font-semibold">Your Age</label>
                                    <input type="number" placeholder="Enter Your Age" className="input-style" />
                                </div>

                                <div>
                                    <label className="font-semibold">Your District</label>
                                    <select className="input-style">
                                        <option>Dhaka</option>
                                        <option>Chittagong</option>
                                        <option>Rajshahi</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="font-semibold">Your Email</label>
                                <input type="email" placeholder="Enter Your Email" className="input-style" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="font-semibold">NID No</label>
                                    <input type="text" placeholder="Enter Your NID No" className="input-style" />
                                </div>

                                <div>
                                    <label className="font-semibold">Contact</label>
                                    <input type="text" placeholder="Enter Your Contact Number" className="input-style" />
                                </div>
                            </div>

                            <div>
                                <label className="font-semibold">
                                    Which warehouse you want to work?
                                </label>
                                <select className="input-style">
                                    <option>Dhaka Hub</option>
                                    <option>Gulshan Hub</option>
                                    <option>Mirpur Hub</option>
                                    <option>utthora Hub</option>
                                </select>
                            </div>

                            <button
                                className="w-full bg-primary hover:bg-lime-500 text-black 
                font-semibold py-3 rounded-lg transition-all duration-300
                hover:shadow-lg hover:-translate-y-[2px]"
                            >
                                Submit
                            </button>

                        </form>
                    </div>

                    <div className="flex justify-center">
                        <img src={rider} alt="Rider" className="max-w-sm  rounded-2xl h-[500px] mt-16" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BeARider;
