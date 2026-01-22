import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
    {
        question: "How does this posture corrector work?",
        answer:
            "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders."
    },
    {
        question: "Is it suitable for all ages and body types?",
        answer:
            "Yes. Our parcel service is designed to be simple and accessible for users of all ages and business sizes. Whether you’re an individual sender, a small business owner, or a large enterprise, the platform adapts to your shipping needs with an easy-to-use interface and flexible delivery options."
    },
    {
        question: "Does it really help with back pain and posture improvement?",
        answer:
            "This platform focuses on parcel delivery and logistics services, so it does not provide health or medical benefits. However, it helps reduce operational stress by simplifying order tracking, delivery management, and communication—allowing you to focus on what matters most."
    },
    {
        question: "Does it have smart features like vibration alerts?",
        answer:
            "Instead of vibration alerts, our platform offers smart digital notifications such as real-time tracking updates, SMS/email alerts, and in-app status changes, ensuring you are always informed about your parcel’s progress."
    },
    {
        question: "How will I be notified when the product is back in stock?",
        answer:
            "When services, delivery slots, or special offers become available again, you’ll be notified through email, SMS, or in-app notifications—based on your selected preferences—so you never miss an update."
    }
];

const FrequentlyAskQuestion = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='max-w-5xl mx-auto  mt-4 '>
            <div className='text-center pb-12'>
                <h1 className="text-3xl font-bold py-2 text-secondary">
                    Frequently Asked Question (FAQ)
                </h1>
                <p className='text-gray-700 py-2 text-lg'>
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-5 cursor-pointer bg-white"
                        onClick={() => toggleFAQ(index)}
                    >
                        {/* Question Row */}
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">
                                {faq.question}
                            </h3>

                            {activeIndex === index ? (
                                <FaChevronUp className="text-gray-600" />
                            ) : (
                                <FaChevronDown className="text-gray-600" />
                            )}
                        </div>

                        {/* Answer */}
                        {activeIndex === index && (
                            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            <div className='flex items-center justify-center mt-4'>
                <button className='btn btn-primary rounded-4xl text-black font-bold'>See More FAQ's</button>
            </div>

        </div>
    );
};

export default FrequentlyAskQuestion;