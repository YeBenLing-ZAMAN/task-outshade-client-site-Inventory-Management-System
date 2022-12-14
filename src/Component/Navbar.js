import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/* navbar */}
            <div className="bg-base-300">
                <div className='navbar max-w-7xl mx-auto'>
                    <div className="flex-1">
                        <p className="normal-case text-xl" >Logo</p>
                    </div>
                    <div className="flex-none">
                        <p className="font-bold">User Name<span></span> </p>

                        <div className="dropdown dropdown-end mt-1">
                            <label tabIndex="0" className="">
                                <div className="avatar mx-2">
                                    <div className="w-10 rounded-full ring ring-offset-base-100 ring-offset-2">
                                        <img src="https://source.unsplash.com/mEZ3PoFGs_k" />
                                    </div>
                                </div>
                            </label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/dashboard/profile'>My Profile</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;