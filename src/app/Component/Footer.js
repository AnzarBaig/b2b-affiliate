'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Footer() {
    const pathname = usePathname();

    return (
        <footer className="bottom-0 w-full shadow-lg rounded-t-[40px] ring-1 ring-white">
            <div className="flex flex-row md:flex-row justify-around py-4 mt-2 rounded-t-[40px] bg-indigo-100">
                <div className="text-center flex-1 md:mb-0">
                    <Link className={`flex justify-center items-center w-12 h-12 mx-auto rounded-full ${pathname === '/' ? 'bg-headsupPurple text-white fill-current' : 'bg-indigo-100 ring-2 ring-headsupPurple text-headsupPurple fill-current '}`} href="/">
                        <svg width="20" height="21" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18 9.73901V16.4646C18 17.5692 17.1046 18.4646 16 18.4646H13.4649C13.8052 17.8763 14 17.1933 14 16.4648V14.7346C14 13.5674 13.4902 12.4584 12.6042 11.6985C11.1059 10.4133 8.89409 10.4133 7.39578 11.6985C6.50983 12.4584 6 13.5674 6 14.7346V16.4648C6 17.1933 6.19476 17.8763 6.53506 18.4646H4C2.89543 18.4646 2 17.5692 2 16.4646V9.73901C2 9.19316 2.2231 8.67103 2.61755 8.29372L8.61755 2.55459C9.39079 1.81497 10.6092 1.81497 11.3824 2.55459L17.3824 8.29372C17.7769 8.67103 18 9.19316 18 9.73901ZM9.97733 18.4646C8.8832 18.4525 8 17.5618 8 16.4648V14.7346C8 14.151 8.25491 13.5965 8.69789 13.2166C9.44705 12.574 10.553 12.574 11.3021 13.2166C11.7451 13.5965 12 14.151 12 14.7346V16.4648C12 17.5618 11.1168 18.4525 10.0227 18.4646H9.97733ZM9.96793 20.4646H4C1.79086 20.4646 0 18.6738 0 16.4646V9.73901C0 8.64731 0.446204 7.60305 1.23511 6.84844L7.23511 1.10931C8.78159 -0.369932 11.2184 -0.369934 12.7649 1.10931L18.7649 6.84844C19.5538 7.60304 20 8.64731 20 9.73901V16.4646C20 18.6738 18.2091 20.4646 16 20.4646H10.0321C10.0214 20.4647 10.0107 20.4648 10 20.4648C9.9893 20.4648 9.97861 20.4647 9.96793 20.4646Z" />
                        </svg>

                    </Link>
                    <p className={`mt-2 font-semibold text-sm ${pathname === '/' ? 'text-headsupPurple' : 'text-headsupPurple'}`}>Home</p>
                </div>

                <div className="text-center flex-1 md:mb-0">
                    <Link className={`flex justify-center items-center w-12 h-12 mx-auto rounded-full ${pathname === '/score-cards' ? 'bg-headsupPurple text-white' : 'bg-indigo-100 ring-2 ring-headsupPurple'}`} href="/score-cards">
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15 17C15 15.3431 16.3431 14 18 14H26C27.6569 14 29 15.3431 29 17V18.2036L26.8016 20.402C26.6192 20.158 26.3281 20 26 20H18C17.4477 20 17 20.4477 17 21C17 21.5523 17.4477 22 18 22H25.2036L23.1863 24.0173C23.1259 24.0059 23.0637 24 23 24H18C17.4477 24 17 24.4477 17 25C17 25.5523 17.4477 26 18 26H21.9996L21.7738 26.9517C21.4788 28.1952 22.3971 29.3313 23.5793 29.4106C23.7744 29.4238 23.9766 29.4081 24.1818 29.3594L25.6256 29.0169C25.9862 28.9313 26.316 28.7472 26.5781 28.4851L29 26.0632V27C29 28.6569 27.6569 30 26 30H18C16.3431 30 15 28.6569 15 27V17ZM31 24.0629V27C31 29.7614 28.7614 32 26 32H18C15.2386 32 13 29.7614 13 27V17C13 14.2386 15.2386 12 18 12H26C28.5773 12 30.6991 13.95 30.9706 16.455C31.693 16.162 32.5519 16.3084 33.1377 16.8943L34.239 17.9955C35.02 18.7766 35.02 20.0429 34.239 20.8239L31 24.0629ZM23.7201 27.4134L25.1636 27.0709L32.8247 19.4097L31.7235 18.3085L30.7225 19.3095C30.7174 19.3148 30.7123 19.3201 30.7071 19.3252L24.0627 25.9697L23.7201 27.4134ZM17 17C17 16.4477 17.4477 16 18 16H26C26.5523 16 27 16.4477 27 17C27 17.5523 26.5523 18 26 18H18C17.4477 18 17 17.5523 17 17Z" fill="#614AD3" />
                        </svg>
                    </Link>
                    <p className={`mt-2 font-semibold text-sm ${pathname === '/score-cards' ? 'text-headsupPurple' : 'text-headsupPurple'}`}>Score Cards</p>
                </div>

                <div className="text-center flex-1 md:mb-0">
                    <Link className={`flex justify-center items-center w-12 h-12 mx-auto rounded-full ${pathname === '/product-update' ? 'text-white ring-2 ring-headsupPurple fill-current ' : 'bg-indigo-100 ring-2 ring-headsupPurple text-white fill-current'}`} href="/product-update">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_5_534)">
                                <path d="M2.54841 11.021C2.54841 13.8474 3.95262 16.3457 6.10139 17.8565C6.48005 18.1229 6.50019 18.676 6.13647 18.9623L6.12623 18.9704C5.88873 19.1573 5.55572 19.1698 5.30832 18.996C2.79985 17.2343 1.16016 14.319 1.16016 11.021C1.16016 5.67155 5.58812 1.32886 10.9268 1.2832V2.6718C6.35433 2.71712 2.54841 6.43794 2.54841 11.021Z" fill="#614AD3" />
                                <path d="M11.1817 0.0414531L13.733 1.78655C13.8696 1.88004 13.8696 2.08163 13.733 2.17512L11.1817 3.92022C11.0255 4.02714 10.8135 3.91518 10.8135 3.72602V0.235819C10.8135 0.0464884 11.0255 -0.0652973 11.1817 0.0414531Z" fill="#6049CF" />
                                <path d="M19.4383 10.979C19.4383 8.1526 18.0339 5.6542 15.8852 4.14341C15.5065 3.87704 15.4864 3.32399 15.8501 3.03764L15.8603 3.02958C16.0978 2.8426 16.4308 2.83018 16.6782 3.0039C19.1869 4.76562 20.8264 7.68095 20.8264 10.979C20.8264 16.3284 16.406 20.6711 11.0671 20.7167V19.3282C15.6396 19.2828 19.4383 15.5622 19.4383 10.979Z" fill="#614AD3" />
                                <path d="M10.8049 21.9585L8.25359 20.2134C8.11697 20.1199 8.11697 19.9183 8.25359 19.8248L10.8049 18.0797C10.961 17.9728 11.1731 18.0848 11.1731 18.2739V21.7641C11.1731 21.9535 10.961 22.0654 10.8049 21.9585Z" fill="#6049CF" />
                                <path d="M15.324 9.91806L11.145 13.3838L10.0914 14.2576C9.84315 14.4632 9.52894 14.5748 9.20936 14.5748C9.15616 14.5748 9.10295 14.5718 9.04924 14.5656C8.67645 14.5217 8.33337 14.324 8.10829 14.0234L6.4832 11.8572C6.11629 11.3679 6.21549 10.6734 6.70493 10.3058C7.1947 9.93887 7.88925 10.0381 8.25633 10.5275L9.35338 11.9903L9.36227 11.9831L13.9096 8.2119C14.3807 7.82148 15.0793 7.88661 15.4699 8.35775C15.8605 8.8289 15.7952 9.52748 15.324 9.91806Z" fill="#614AD3" />
                                <path d="M15.3238 9.91806L11.1448 13.3837C10.4613 13.0425 9.86023 12.5709 9.36206 11.9831L13.9094 8.2119C14.3805 7.82148 15.0791 7.88661 15.4697 8.35775C15.8602 8.8289 15.7949 9.52748 15.3238 9.91806Z" fill="#6049CF" />
                            </g>
                            <defs>
                                <clipPath id="clip0_5_534">
                                    <rect width="22" height="22" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <p className={`mt-2 font-semibold text-sm ${pathname === '/product-update' ? 'text-headsupPurple' : 'text-headsupPurple'}`}>Product Update</p>
                </div>

                <div className="text-center flex-1 md:mb-0">
                    <Link className={`flex justify-center items-center w-12 h-12 mx-auto rounded-full ${pathname === '/headsup-invest' ? 'bg-headsupPurple text-white' : 'bg-indigo-100 ring-2 ring-headsupPurple'}`} href="/headsup-invest">
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.38265 7.47868L2.95918 11H1L5.04082 1.01376L7 1L4.38265 7.47868Z" fill="#614AD3" stroke="#614AD3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1L2.78131 15H1L6.21869 1.01354L8 1Z" fill="#614AD3" stroke="#614AD3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1L2.86408 20H1L8.13592 1.01407L10 1Z" fill="#614AD3" stroke="#614AD3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <p className={`mt-2 font-semibold text-sm ${pathname === '/headsup-invest' ? 'text-headsupPurple' : 'text-headsupPurple'}`}>Headsup Invest</p>
                </div>
            </div>
        </footer >
    );
}

export default Footer;
