import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddCatagoryOnModal = ({ forModalPopUp, addmodalPopUpSuccesMessage, setaddmodalPopUpSuccesMessage }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [addtoggle, setToggle] = useState(true);

    /* for developement process handle this  */
    // need a reloader for the reload this page
    /*  */

    const onSubmit = async data => {
        // console.log(data);
        const catagoryInfo = {
            catagory: data.name.toLowerCase(),
        }
        console.log(catagoryInfo);
        await fetch(`http://localhost:5000/add_catagory`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(catagoryInfo)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    console.log('successfully added in db');
                    // setReLoadChecked(true);
                    reset();
                    setToggle(false);
                    setaddmodalPopUpSuccesMessage(false);
                } else {
                    console.log("failed to added in db");
                }
                // console.log("reuslt line 31 : ", inserted)
            })
    }

    return (
        <>
            <div>
                <input type="checkbox" id="add_catagory_modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        {/* modal head Line */}
                        <div className='flex justify-between items-center'>
                            <h3 className="font-bold text-xl text-primary text-center capitalize">Add New Catagory! {forModalPopUp}</h3>
                            {/* modal close section */}
                            <div className="modal-action mt-[-3px]">
                                <label htmlFor="add_catagory_modal" className="btn btn-primary btn-circle btn-outline text-bold">X</label>
                            </div>
                        </div>


                        {/*Billing infomation form section*/}

                        {
                            addmodalPopUpSuccesMessage ? <div className="card w-96 bg-base-100 p-1 mx-auto">
                                <div className="card-body">

                                    <form onSubmit={handleSubmit(onSubmit)}>


                                        {/* Product name enter */}
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Catagory Name</span>
                                            </label>

                                            <input
                                                type="name"
                                                placeholder="Enter Catagory Name"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: 'Catagory Type is Required'
                                                    }
                                                })}
                                            />

                                            <label className="label">
                                                {errors.name?.type === 'required' && <span
                                                    className="label-text-alt text-red-500">
                                                    {errors.name.message}
                                                </span>}
                                            </label>
                                        </div>

                                        <input className='btn w-full max-w-xs text-white mt-10' type="submit" value="add" />
                                    </form>
                                </div>
                            </div> : <h1 className='text-xl text-red-500'>Catagory successfully Add</h1>

                        }

                    </div>
                </div>
            </div>

        </>
    );
};

export default AddCatagoryOnModal;