import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import { ImProfile,ImTicket,ImUser,ImFlag,ImEqualizer} from "react-icons/im";
const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile  ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>


                    <ul className="menu p-4 w-80 bg-[#343A40] text-white border-t-2 border-gray-300">
                        <div className='flex justify-start items-center m-2'>
                            <ImEqualizer></ImEqualizer>
                            <div><Link className='text-xl font-semibold p-3 mt-10'>Dashboard</Link></div>
                        </div>
                        <div className='flex justify-start items-center m-2'>
                            <ImProfile></ImProfile>
                            <div><Link className='text-xl font-semibold p-3 mt-10'>My Profile</Link></div>
                        </div>
                        <div className='flex justify-start items-center m-2'>
                            <ImTicket></ImTicket>
                            <div><Link className='text-xl font-semibold p-3 mt-10'>My Ticket</Link></div>
                        </div>
                        <div className='flex justify-start items-center m-2'>
                            <ImUser></ImUser>
                            <div><Link className='text-xl font-semibold p-3 mt-10'>User</Link></div>
                        </div>
                        <div className='flex justify-start items-center m-2'>
                            <ImFlag></ImFlag>
                            <div><Link className='text-xl font-semibold p-3 mt-10'>Ticket Type</Link></div>
                        </div>
                        
                       

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;