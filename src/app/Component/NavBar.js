import React from 'react';

function NavBar() {
    return (
        <nav className="">
            <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-120 h-10 mr-4 ring-2 ring-black text-white rounded-full flex items-center justify-center">
                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9917 15.4083C15.9897 16.5006 16.3119 17.569 16.9174 18.478C17.523 19.3871 18.3848 20.096 19.3935 20.5149C20.4023 20.9338 21.5127 21.044 22.5841 20.8314C23.6555 20.6188 24.6397 20.093 25.4121 19.3206C26.1845 18.5483 26.7102 17.564 26.9228 16.4926C27.1354 15.4212 27.0253 14.3108 26.6063 13.3021C26.1874 12.2933 25.4785 11.4316 24.5695 10.826C23.6604 10.2204 22.5921 9.89822 21.4998 9.90025C20.0406 9.90564 18.6428 10.4877 17.611 11.5195C16.5792 12.5513 15.9971 13.9492 15.9917 15.4083ZM24.6122 15.4083C24.6122 16.0158 24.432 16.6096 24.0946 17.1147C23.7571 17.6198 23.2774 18.0135 22.7161 18.246C22.1549 18.4784 21.5373 18.5393 20.9416 18.4208C20.3458 18.3022 19.7985 18.0097 19.3689 17.5802C18.9394 17.1506 18.6469 16.6033 18.5283 16.0075C18.4098 15.4117 18.4707 14.7942 18.7031 14.233C18.9356 13.6717 19.3293 13.192 19.8344 12.8545C20.3395 12.5171 20.9333 12.3369 21.5408 12.3369C22.3554 12.3369 23.1366 12.6605 23.7126 13.2365C24.2886 13.8125 24.6122 14.5937 24.6122 15.4083Z" fill="#1F192E" />
                            <path d="M25.8102 22.8412H17.1897C15.469 22.8439 13.8196 23.5286 12.6029 24.7453C11.3862 25.962 10.7014 27.6115 10.6987 29.3321V29.9567C10.7014 30.7912 11.0349 31.5906 11.6259 32.1798C12.217 32.7689 13.0175 33.0998 13.8521 33.0998H29.1478C29.9823 33.0998 30.7828 32.7689 31.3739 32.1798C31.965 31.5906 32.2984 30.7912 32.3011 29.9567V29.3321C32.2984 27.6115 31.6137 25.962 30.397 24.7453C29.1803 23.5286 27.5308 22.8439 25.8102 22.8412ZM29.9054 30.0079C29.9054 30.2061 29.8267 30.3962 29.6865 30.5363C29.5463 30.6765 29.3562 30.7552 29.158 30.7552H13.8521C13.6538 30.7552 13.4637 30.6765 13.3236 30.5363C13.1834 30.3962 13.1047 30.2061 13.1047 30.0079V29.3833C13.1047 28.2972 13.5361 27.2556 14.3042 26.4876C15.0722 25.7196 16.1138 25.2881 17.1999 25.2881H25.8204C26.9065 25.2881 27.9482 25.7196 28.7162 26.4876C29.4842 27.2556 29.9156 28.2972 29.9156 29.3833L29.9054 30.0079Z" fill="#1F192E" />
                        </svg>

                    </div>
                    <span className="ml-2 text-headsupPurple font-bold text-xl">Welcome, Manoj</span>
                </div>
                <div className="flex items-center">
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="43" height="43" rx="19" stroke="#110B30" stroke-width="2" />
                        <g clip-path="url(#clip0_11_2003)">
                            <path d="M35.5828 29.6658C35.4238 28.01 33.9458 26.7096 32.2244 26.7096C32.0186 26.7096 31.8549 26.5459 31.8549 26.3401V20.8301C31.8549 16.7373 29.2356 13.1685 25.6292 11.8354C25.6713 11.6249 25.6947 11.4098 25.6947 11.1946C25.6948 9.43132 24.2635 8 22.5001 8C20.7366 8 19.3054 9.43132 19.3054 11.1947C19.3054 11.4052 19.3287 11.6156 19.3661 11.8168C18.1267 12.2565 16.9807 12.9534 16.0031 13.8982C14.1602 15.6757 13.1453 18.0658 13.1453 20.629V26.3402C13.1453 26.5413 12.9815 26.7097 12.7757 26.7097C11.0497 26.7097 9.57633 28.01 9.41729 29.6659C9.3284 30.5873 9.63249 31.5041 10.2546 32.187C10.872 32.8652 11.756 33.2581 12.6774 33.2581H18.3184C18.5523 35.3583 20.3391 37.0001 22.5001 37.0001C24.661 37.0001 26.4478 35.3583 26.6817 33.2581H32.3227C33.2442 33.2581 34.1282 32.8652 34.7456 32.187C35.363 31.504 35.6717 30.5873 35.5828 29.6658ZM22.5001 9.87093C23.2297 9.87093 23.8238 10.465 23.8238 11.1946C23.8238 11.2554 23.8144 11.3115 23.805 11.3723C23.4869 11.3255 23.1642 11.2928 22.8414 11.2834C22.2848 11.2647 21.7375 11.3022 21.195 11.377C21.1856 11.3162 21.1762 11.2601 21.1762 11.1993C21.1764 10.465 21.7704 9.87093 22.5001 9.87093ZM22.5001 35.129C21.3728 35.129 20.428 34.3244 20.2081 33.2581H24.7919C24.5722 34.3245 23.6274 35.129 22.5001 35.129ZM33.361 30.9287C33.0898 31.2234 32.7249 31.387 32.3226 31.387H12.6775C12.2752 31.387 11.9105 31.2233 11.6391 30.9287C11.3678 30.634 11.2415 30.2458 11.2836 29.8436C11.3491 29.1373 12.0086 28.5806 12.7804 28.5806C14.0153 28.5806 15.0209 27.575 15.0209 26.3402V20.629C15.0209 18.5803 15.8347 16.6673 17.3081 15.2453C18.7113 13.8842 20.5449 13.1451 22.5001 13.1451C22.5936 13.1451 22.6825 13.1451 22.776 13.1498C26.7472 13.2901 29.984 16.7374 29.984 20.8302V26.3402C29.984 27.575 30.9896 28.5806 32.2244 28.5806C32.9962 28.5806 33.6558 29.1373 33.7212 29.8436C33.7586 30.2458 33.6323 30.6294 33.361 30.9287Z" fill="black" />
                            <path d="M10.3855 19.2258C10.8159 19.2258 11.2041 18.9265 11.2977 18.4915C11.7513 16.4381 12.7757 14.5672 14.2725 13.0797C14.6373 12.7149 14.6373 12.1208 14.2725 11.7561C13.9076 11.3912 13.3136 11.3912 12.9488 11.7561C11.1995 13.4959 9.99732 15.6897 9.46882 18.0938C9.35657 18.599 9.67464 19.0994 10.1798 19.2071C10.2546 19.2211 10.3201 19.2258 10.3855 19.2258Z" fill="black" />
                            <path d="M34.6147 19.2258C34.6801 19.2258 34.7504 19.2164 34.8158 19.2025C35.321 19.0902 35.639 18.5944 35.5268 18.0892C34.9982 15.685 33.7961 13.496 32.0468 11.7513C31.6819 11.3864 31.0879 11.3864 30.7231 11.7513C30.3583 12.1162 30.3582 12.7102 30.7231 13.075C32.2152 14.5624 33.2442 16.4334 33.6979 18.4867C33.7961 18.9264 34.1844 19.2258 34.6147 19.2258Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_11_2003">
                                <rect width="29" height="29" fill="white" transform="translate(8 8)" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;
