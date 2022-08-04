import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            {/* navbar */}
            <div className="bg-base-300">
                <div className='navbar max-w-7xl mx-auto'>
                    <div className="flex-1">
                        <p className="normal-case text-xl" >Logo</p>
                    </div>
                    <div className="flex-none">
                        <p className="font-bold">user name<span></span> </p>

                        <div class="dropdown dropdown-end mt-1">
                            <label tabindex="0" class="">
                                <div class="avatar mx-2">
                                    <div class="w-10 rounded-full ring ring-offset-base-100 ring-offset-2">
                                        <img src="https://source.unsplash.com/mEZ3PoFGs_k" />
                                    </div>
                                </div>
                            </label>
                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/dashboard/profile'>My Profile</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;