import Image from 'next/image';
import Link from 'next/link';

const catalogueData = [
    { id: 1, category: 'Steel', payoutPercent: '12.5%', background: '#EFFBFE' },
    { id: 2, category: 'Road Safety Equipments', payoutPercent: '12.5%' },
    { id: 3, category: 'Construction Material', payoutPercent: '12.5%', background: '#EFFBFE' },
    { id: 4, category: 'Plumbing and Fitting', payoutPercent: '12.5%' },
    { id: 5, category: 'Electricals', payoutPercent: '12.5%', background: '#EFFBFE' },
    { id: 6, category: 'Tools and Accessories', payoutPercent: '12.5%' },
    { id: 7, category: 'Tool Room Machines', payoutPercent: '12.5%', background: '#EFFBFE' },
    { id: 8, category: 'Non Ferrous Products', payoutPercent: '12.5%' },
    { id: 9, category: 'Renewable Energy', payoutPercent: '12.5%', background: '#EFFBFE' },
    { id: 10, category: 'Welding Machines', payoutPercent: '12.5%' },
];

const Catalogue = () => {
    return (
        <div className="flex flex-col mx-auto">
            <div className='flex flex-row mb-8'>
                <Link href="/">
                    <Image
                        src="/back.png"
                        width={30}
                        height={25}
                        alt="Back"
                    />
                </Link>
                <h1 className="w-full text-headsupPurple font-bold text-xl text-center">Product Catalogue</h1>
            </div>
            <table className="max-w-lg bg-white rounded-2xl">
                <thead>
                    <tr>
                        <th className="px-1 py-3 text-left text-xs font-medium text-headsupPurple uppercase tracking-wider">#</th>
                        <th className="px-1 py-3 text-left text-xs font-medium text-headsupPurple uppercase tracking-wider">Category</th>
                        <th className="px-1 py-3 text-left text-xs font-medium text-headsupPurple uppercase tracking-wider">PayoutPercent</th>
                    </tr>
                </thead>
                <tbody>
                    {catalogueData.map((item, i) => (
                        <tr key={item.id} >
                            <td style={{ backgroundColor: item.background || 'white' }} className={`px-1 py-3 whitespace-nowrap text-xs font-medium text-gray-900 ${catalogueData?.length - 1 === i ? 'rounded-bl-2xl' : ''}`}>{item.id}</td>
                            <td style={{ backgroundColor: item.background || 'white' }} className="px-1 py-3 whitespace-nowrap text-xs text-gray-900">{item.category}</td>
                            <td style={{ backgroundColor: item.background || 'white' }} className={`px-1 py-3 whitespace-nowrap font-bold text-base text-headsupPurple flex items-center ${catalogueData?.length - 1 === i ? 'rounded-br-2xl' : ''}`}>
                                {item.payoutPercent}
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 38 38"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-10"
                                >
                                    <circle cx="19" cy="19" r="19" fill="#6049CF" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M27.0951 18.0961L7.98422 17.9282L7.96707 19.8797L27.0779 20.0476L22.4941 24.5516C22.1097 24.9293 22.1043 25.5471 22.482 25.9315C22.8597 26.3159 23.4775 26.3214 23.8619 25.9437L30.1261 19.7886C30.5105 19.4109 30.5159 18.793 30.1382 18.4086L23.9831 12.1444C23.6054 11.76 22.9876 11.7546 22.6032 12.1323C22.2188 12.51 22.2134 13.1278 22.5911 13.5122L27.0951 18.0961Z"
                                        fill="white"
                                        stroke="white"
                                        strokeWidth="0.5"
                                    />
                                </svg>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Catalogue;

