import React, { useReducer } from 'react'
import { BsStar } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import { LineChart, Line } from 'recharts';
import { DashboardArt, IconBlood, IconStar } from '../../assets';
import { CustomButton } from '../../components';


const Home = () => {
    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        email: '', password: '',
    })

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

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
        <div className='h-full w-full flex flex-col overflow-y-auto font-poppins scrollbar-1 px-6 pt-4'>
            <div className="w-full flex justify-between items-center">
                <div className="w-[40%] flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                        <p className='text-[12px] font-semibold'>Blood Donation History</p>
                        <p className='text-[12px] text-gray-500'>last 30days</p>
                    </div>

                    <LineChart width={400} height={80} data={data}>
                        <Line type="monotone" dataKey="pv" stroke="#d88a84" strokeWidth={2} />
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

                <div className="w-[58%] rounded-xl h-[300px] flex justify-between items-center bg-sky-400 space-y-4">
                    <div className='flex flex-col space-y-2 justify-center w-[50%] pl-6'>
                        <p className='text-[30px] font-bold text-slate-800'>We are working to constantly improve our service</p>

                        <CustomButton
                            type={'button'}
                            title={'Visit our website'}
                            textColor={'text-purple-500'}
                            width={'w-[150px] md:w-[150px]'}
                            classes={'py-4 text-[14px] font-medium rounded-md bg-white border-2 border-purple-500'}
                        />
                    </div>
                    <div className='w-[50%]'>
                        <img
                            alt=""
                            src={DashboardArt}
                            className='w-full'
                        />
                    </div>
                </div>
            </div>

            <div className="h-[100vh] overflow-y-auto mt-5">
                <iframe
                    className='w-full h-full'
                    // width="600"
                    height="800"
                    style={{ border: '0' }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.4495615151304!2d8.8562067143908!3d9.89646419292219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105373019cc3237b%3A0x5491611e7ca4de00!2sRayfield%20Medical%20Centre%2C%20Jos!5e0!3m2!1sen!2sng!4v1681137494860!5m2!1sen!2sng"
                ></iframe>
            </div>

        </div>
    )
}

export default Home