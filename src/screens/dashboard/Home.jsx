import React, { useReducer } from 'react'
import { LineChart, Line } from 'recharts'

import { CustomButton } from '../../components'
import { DashboardArt, IconBlood, IconStar } from '../../assets'


const Home = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className='h-full w-full flex flex-col justify-between overflow-y-auto font-poppins scrollbar-1 px-6 pt-4'>
            {/* <div className="h-full overflow-y-auto mt-5 w-full">
                <HomeMap />
            </div> */}

            <div className="w-full flex flex-col justify-between items-start ">
                <div className="w-[50%] flex justify-start flex-col space-y-4">
                    <div className="flex justify-between items-center">
                        <p className='text-[12px] font-semibold'>Blood Donation History</p>
                        <p className='text-[12px] text-gray-500'>last 30days</p>
                    </div>

                    <LineChart width={600} height={200} data={data}>
                        <Line type="monotone" dataKey="uv" stroke="#d88a84" strokeWidth={2} />
                    </LineChart>

                    <div className="flex flex-col space-y-5">
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-4 justify-between items-center">
                                <div className="p-2 rounded-md bg-slate-100">
                                    <img src={IconStar} alt="icon" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[14px] font-semibold">Top Donors</p>
                                    <p className="text-[14px] ">John Doe</p>
                                </div>
                            </div>
                            <div className="p-2 rounded-md bg-slate-100 text-[12px]">
                                +100%
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-4 justify-between items-center">
                                <div className="p-2 rounded-md bg-slate-100">
                                    <img src={IconBlood} alt="icon" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[14px] font-semibold">Most available Blood Donors</p>
                                    <p className="text-[14px] ">O+ (Positive)</p>
                                </div>
                            </div>
                            <div className="p-2 rounded-md bg-slate-100 text-[12px]">
                                +30%
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full rounded-xl mb-4 md:h-[300px] flex flex-wrap justify-between items-center bg-sky-400 space-y-4 mt-4">
                    <div className='flex flex-col space-y-2 justify-center w-[50%] pl-6'>
                        <p className='text-[30px] font-bold text-slate-800'>We are working to constantly improve our service</p>

                        <CustomButton
                            type={'button'}
                            title={'Visit our website'}
                            textColor={'text-purple-500'}
                            width={'w-[150px] md:w-[150px]'}
                            handleClick={() => {
                                const link = document.createElement('a')
                                link.href = "https://medexer.com.ng"
                                link.target = "_blank"

                                link.click()
                            }}
                            classes={'py-4 text-[14px] font-medium rounded-md bg-white border-2 border-purple-500'}
                        />
                    </div>
                    <div className=''>
                        <img
                            alt=""
                            src={DashboardArt}
                            className='w-full'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home