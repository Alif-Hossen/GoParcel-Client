import { useState } from "react";

const tabs = [
    {
        key: "story",
        title: "Story",
        content: (
            <>
                <p className="mb-4">
                    Go Parcel began with a simple vision — to eliminate the complexity and
                    uncertainty from parcel delivery. We identified a growing need for a
                    reliable, transparent, and technology-driven logistics solution that could
                    serve both individuals and businesses efficiently.
                </p>

                <p className="mb-4">
                    In the early stages, our focus was on understanding real customer pain
                    points such as delayed deliveries, lack of tracking visibility, and poor
                    communication. These insights shaped the foundation of Go Parcel’s service
                    model.
                </p>

                <p className="mb-4">
                    By leveraging modern logistics infrastructure and digital tracking systems,
                    we created a streamlined delivery process that prioritizes speed, safety,
                    and accuracy. Every parcel is monitored from pickup to final delivery.
                </p>

                <p className="mb-4">
                    Over time, Go Parcel expanded its operations to support personal, commercial,
                    and time-sensitive deliveries. Our adaptable solutions allow customers to
                    send parcels confidently, regardless of size or destination.
                </p>

                <p>
                    Today, Go Parcel stands as a trusted delivery partner, continuously evolving
                    to meet changing customer expectations and industry standards through
                    innovation and service excellence.
                </p>
            </>


        ),
    },
    {
        key: "mission",
        title: "Mission",
        content: (
            <>
                <p className="mb-4">
                    The mission of Go Parcel is to simplify logistics through innovation,
                    reliability, and customer-centric solutions. We aim to build a delivery
                    ecosystem that is efficient, transparent, and easy to use.
                </p>

                <p className="mb-4">
                    Our approach combines intelligent routing, real-time tracking, and automated
                    systems to reduce delays and increase delivery accuracy across all service
                    levels.
                </p>

                <p className="mb-4">
                    We are committed to supporting businesses by enabling faster order
                    fulfillment and dependable supply chain operations through scalable delivery
                    solutions.
                </p>

                <p className="mb-4">
                    For individual customers, our mission is to provide a stress-free experience
                    when sending personal parcels, gifts, or urgent documents.
                </p>

                <p>
                    Through continuous improvement and technological advancement, Go Parcel
                    strives to set new benchmarks for trust and performance in the logistics
                    industry.
                </p>
            </>

        ),
    },
    {
        key: "success",
        title: "Success",
        content: (
            <>
                <p className="mb-4">
                    Success at Go Parcel is defined by consistent performance and customer
                    satisfaction. Each completed delivery represents a commitment fulfilled and
                    a promise kept.
                </p>

                <p className="mb-4">
                    Our growing network of customers includes individuals, online sellers, and
                    businesses that rely on Go Parcel for their daily delivery operations.
                </p>

                <p className="mb-4">
                    By maintaining high delivery accuracy and operational efficiency, we have
                    built long-term partnerships based on reliability and trust.
                </p>

                <p className="mb-4">
                    Continuous system optimization and service evaluation allow us to adapt to
                    increasing delivery demands without compromising quality.
                </p>

                <p>
                    These achievements motivate us to further innovate and expand our services
                    while maintaining the highest standards of logistics excellence.
                </p>
            </>


        ),
    },
    {
        key: "team",
        title: "Team & Others",
        content: (
            <>
                <p className="mb-4">
                    Go Parcel is driven by a skilled and dedicated team with expertise in
                    logistics operations, software development, and customer support services.
                </p>

                <p className="mb-4">
                    Our team culture emphasizes accountability, collaboration, and continuous
                    learning to adapt to evolving industry challenges.
                </p>

                <p className="mb-4">
                    Each department works closely to ensure seamless coordination between
                    technology and logistics execution.
                </p>

                <p className="mb-4">
                    Beyond our core team, we collaborate with delivery partners, merchants, and
                    service providers to expand our operational capabilities.
                </p>

                <p>
                    Together, we are committed to building a reliable, sustainable, and scalable
                    delivery ecosystem that supports long-term growth and innovation.
                </p>
            </>

        ),
    },
];

const GoParcelTabs = () => {
    const [activeTab, setActiveTab] = useState("story");

    const activeContent = tabs.find((t) => t.key === activeTab);

    return (
        <div className="bg-white rounded-2xl mt-8 mb-26 px-30 py-10">


            <div className="border-b pb-4 mb-8 border-gray-400">
                <h1 className="font-bold text-3xl text-secondary py-4">
                    About Us
                </h1>
                <p className="py-4 text-gray-500">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>
            <div >
                <div className="flex gap-6 mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`pb-3 text-xl font-extra-bold transition ${activeTab === tab.key
                                ? "text-secondary font-bold"
                                : "text-gray-500 hover:text-secondary"
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                <div className="text-gray-600 leading-relaxed text-base">
                    {activeContent.content}
                </div>
            </div>
        </div>

    );
};

export default GoParcelTabs;
