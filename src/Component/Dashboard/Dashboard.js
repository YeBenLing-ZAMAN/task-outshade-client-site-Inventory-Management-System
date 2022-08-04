import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <div className="drawer drawer-mobile">
                <input id="dashBoard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-base-100 p-3">
                    {/* <!-- Page content here --> */}
                    <div className='flex items-center justify-around	'>
                        <h2 className='text-purple-500 text-2xl  p-3 text-left lg:text-right'>Dash Board</h2>

                        {/* dashboad sidebar button */}
                        <label for="dashBoard-sidebar" className="btn btn-primary drawer-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashBoard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content ">
                        {/* <!-- Sidebar content here --> */}
                        <li className='mb-2'><Link to='/dashboard'>Products</Link></li>
                        <li className='mb-2'><Link to='/dashboard/catagory'>Category</Link></li>
                        <li className='mb-2'><Link to='/dashboard/profile'>My Profile</Link></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;