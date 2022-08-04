import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { register, formState: { errors }, handleSubmit, control, reset } = useForm();
    const [imageURL, setImageURL] = useState("");
    const [user, setUser] = useState([]);
    const [Loading, setLoading] = useState(false);
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

    
    /* image upload handle */
    const handleUploadImage = event => {
        setLoading(true);
         // console.log(event.target.files[0]);
        const image = event.target.files[0];
        const formData = new FormData();

        formData.set("image", image);

        // const url = `https://api.imgbb.com/1/upload?key=537637e3061760d1ac5879c84a4a06d9`;
        const url='#';
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // // console.log(data);
                 // console.log('hardcodeurl', data.data.display_url);
                setImageURL(data.data.display_url);
                setLoading(false);

            }).catch((error) => {
                 // console.log(error);
                // toast.error(`some thing is wrong, so image isn't store is DB`)
            })
    }

    

    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className="bg-base-300 w-1/3 shadow-xl p-5">
                    <div className="mx-auto">
                        <h1 className="text-center text-4xl  mx-auto font-bold text-primary">User Information</h1>

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

                            {/* add image section */}
                            <div className="form-control w-full max-w-xs mt-5 mx-auto">
                                <p className='text-sm text-red-500'>upload image most me less than 100kb</p>
                                <label htmlFor='photo' className="label">
                                    <span className=" w-full max-w-xs mx-auto btn btn-outline btn-info label-text">update your Photo</span>
                                </label>

                                <input
                                    type="file"
                                    id='photo'
                                    className="input input-bordered w-full max-w-xs hidden"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Image is Required'
                                        }
                                    })}
                                    onChange={handleUploadImage}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span
                                        className="label-text-alt text-red-500">
                                        {errors.name.message}
                                    </span>}
                                </label>
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