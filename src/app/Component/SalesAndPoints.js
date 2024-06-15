"use client";
import { useState } from 'react';
import Image from 'next/image';

function SalesAndPoints() {
    const [showPoints, setShowPoints] = useState(false);

    const handleToggle = () => {
        setShowPoints(!showPoints);
    };

    return (
        <>
            <div className="flex justify-between p-4 rounded-lg">
                <div
                    className={`flex flex-col items-center p-4 pb-2 rounded-3xl shadow-md border-b-2 border-white cursor-pointer ${showPoints ? 'bg-white/30' : 'bg-white/60'}`}
                    onClick={() => setShowPoints(false)}
                >
                    <span className="text-headsupPurple font-semibold">TOTAL SALES</span>
                    <span className="text-xl m-1 font-semibold">₹ 56,61,993</span>
                </div>
                <div
                    className={`flex flex-col items-center p-4 pb-2 rounded-3xl shadow-md border-b-2 border-white cursor-pointer ${showPoints ? 'bg-white/60' : 'bg-white/30'}`}
                    onClick={() => setShowPoints(true)}
                >
                    <span className="text-headsupPurple font-semibold">TOTAL POINTS</span>
                    <span className="text-xl m-1 font-semibold">88468</span>
                </div>
            </div>
            {showPoints ? (
                <Image
                    src="/Points.png" // Replace with actual path to the points image
                    width={500}
                    height={500}
                    alt="Total Points"
                    priority={true}
                />
            ) : (
                <Image
                    src="/salesChart.png" // Replace with actual path to the sales chart image
                    width={500}
                    height={500}
                    alt="Sales Chart"
                    priority={true}
                />
            )}
        </>
    );
}

export default SalesAndPoints;
