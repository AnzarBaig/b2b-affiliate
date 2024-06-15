const bestSellingProducts = [
    {
        id: 1,
        name: "Safety Products",
        priceChange: "11%",
        imageUrl: "/BestSellingImages/Overlay.png", // Replace with actual image path
        arrowDirection: "up",
    },
    {
        id: 2,
        name: "Tools and Accessories",
        priceChange: "9%",
        imageUrl: "BestSellingImages/Overlay.png", // Replace with actual image path
        arrowDirection: "up",
    },
    {
        id: 3,
        name: "Road safety equipment",
        priceChange: "12.5%",
        imageUrl: "BestSellingImages/Overlay.png", // Replace with actual image path
        arrowDirection: "up",
    },
    {
        id: 4,
        name: "Steel",
        priceChange: "11%",
        imageUrl: "BestSellingImages/Overlay.png", // Replace with actual image path
        arrowDirection: "up",
    },
];

const BestSelling = () => {
    return (
        <div className="rounded-lg">
            <h2 className="text-lg font-bold mt-2 mb-4">BEST SELLING</h2>
            <div className="flex justify-around">
                {bestSellingProducts.map((product) => (
                    <div key={product.id} className="flex flex-col items-center">
                        <div className="flex items-center justify-center bg-headsupPurple text-white rounded-full px-2 py-1 w-16">
                            <span className="text-xs font-normal">{product.priceChange}</span>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.41783 1.92681L1 8.34464L1.65536 9L8.07319 2.58217L8.07319 5.63407C8.07319 5.89 8.28066 6.09747 8.53659 6.09747C8.79253 6.09747 9 5.89 9 5.63407L9 1.46341C9 1.20747 8.79253 1 8.53659 1L4.36593 1C4.11 1 3.90253 1.20747 3.90253 1.46341C3.90253 1.71934 4.11 1.92681 4.36593 1.92681L7.41783 1.92681Z" fill="white" stroke="white" stroke-width="0.5" />
                            </svg>
                        </div>


                        <div className="flex flex-col items-center bg-white rounded-lg shadow-md">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-16 h-16 object-cover rounded-md"
                            />
                        </div>
                        <span className="text-center font-semibold mt-1 text-[8px] w-16">
                            {product.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSelling;
