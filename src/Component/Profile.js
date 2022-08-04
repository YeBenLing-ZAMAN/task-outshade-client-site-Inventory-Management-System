import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { register, formState: { errors }, handleSubmit, control, reset } = useForm();
    const [user, setUser] = useState([]);
    /* data fetch kore ekhan theke user details niye asmo mane eikhan ekta name, email, update image url and pasword update system thakbe */
    const { name, email, _id } = user;

    console.log(user);
    /* form handle with update API */

    const handleChangeName = (event) => {
        const updateUser = { name: name, email: email, _id: _id }
        updateUser.name = event.target.value;
        setUser(updateUser);
    }
    const handleChangeEmail = (event) => {
        const updateUser = { name: name, email: email, _id: _id }
        updateUser.email = event.target.value;
        setUser(updateUser);
    }


    const onSubmit = async (event) => {
        console.log(user);

        await fetch(``, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('update', data)

                /* reload checker ta kinto lagbe // maybe ekhane ekta hanld korte redux use kora lagte pare */
                // setReLoadChecked(true);

            })


    }

    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className="bg-base-100 w-1/3 shadow-xl p-5">
                    <div className="mx-auto">
                        <h1 className="text-center text-4xl  mx-auto font-bold text-red-500">User Information</h1>

                        <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs mx-auto">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" className="input input-bordered w-full max-w-xs"
                                    onChange={handleChangeName} value={name} required />
                            </div>

                            <div className="form-control w-full max-w-xs mx-auto">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" className="input input-bordered w-full max-w-xs"
                                    onChange={handleChangeEmail} value={email} required />
                            </div>

                            <div className='text-center'>
                                <input className='btn btn-primary w-full max-w-xs mt-10 text-white text-center' type="submit" value="update" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;