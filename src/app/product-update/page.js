import Link from "next/link"
import BestSelling from "../Component/BestSelling"
import Image from "next/image"
function page() {
    return (
        <>
            <div className="flex mb-8">
                <Link href="/">
                    <Image
                        src="/back.png" // Replace with actual path to the points image
                        width={30}
                        height={25}

                        alt="Total Points"
                        className="w-8 h-6"
                    />
                </Link>
                <h1 className="w-full text-headsupPurple font-bold text-xl text-center">Product Updates</h1>

            </div>

            <Image
                src="/ProductUpdates.png" // Replace with actual path to the points image
                width={500}
                height={500}
                alt="Total Points"
                className="mb-32"
            />

            <BestSelling />
        </>
    )
}

export default page