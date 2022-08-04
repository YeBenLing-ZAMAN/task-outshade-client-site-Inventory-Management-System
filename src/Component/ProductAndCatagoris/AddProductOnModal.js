import React, { useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import Loading from '../Loading';

const AddProductOnModal = ({ forModalPopUp, setaddmodalPopUpSuccesMessage, addmodalPopUpSuccesMessage, setReLoadChecked }) => {
    const { register, formState: { errors }, handleSubmit, control, reset } = useForm();
    const [addtoggle, setToggle] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [allcatagory, setAllCatagory] = useState([]);

    /* for developement process handle this  */
    /*  */
    useEffect(() => {
        setIsLoading(true);
        // console.log(id);
        const loadData = async () => {
            await fetch(`https://outshado.herokuapp.com/catagory_list`, {
                method: "GET",
                headers: {
                    // authorization: `Bearer ${localStorage.getItem('accesstoken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAllCatagory(data);
                    setIsLoading(false);
                })
        }
        loadData();
    }, [])

    const onSubmit = async data => {
        // console.log(data);
        const productInfo = {
            name: data.name,
            price: parseInt(data.price),
            quantity: parseFloat(data.quantity),
            catagory: data.catagory
        }
        console.log(productInfo);

        await fetch(`https://outshado.herokuapp.com/add_product`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    // console.log('successfully added in db');
                    setReLoadChecked(true);
                    reset();
                    setToggle(false);
                    setaddmodalPopUpSuccesMessage(false);
                } else {
                    // console.log("failed to added in db");
                }
                // console.log("reuslt line 31 : ", inserted)
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            <div>
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        {/* modal head Line */}
                        <div className='flex justify-between items-center'>
                            <h3 className="font-bold text-xl text-primary text-center capitalize">Add product information! {forModalPopUp}</h3>
                            {/* modal close section */}
                            <div className="modal-action mt-[-3px]">
                                <label htmlFor="my-modal-6" className="btn btn-primary btn-circle btn-outline text-bold">X</label>
                            </div>
                        </div>


                        {/*Billing infomation form section*/}

                        {
                            addmodalPopUpSuccesMessage ? <div className="card w-96 bg-base-100 px-1 mx-auto">
                                <div className="card-body" style={{ "paddingTop": "20px", "paddingBottom": "10px" }}>

                                    <form onSubmit={handleSubmit(onSubmit)}>


                                        {/* Product name enter */}
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">product Name</span>
                                            </label>

                                            <input
                                                type="name"
                                                placeholder="Enter Your Name"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: 'Product Name is Required'
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

                                        {/* prouct Price  */}
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Price</span>
                                            </label>

                                            <input
                                                type="number"
                                                placeholder="Enter product Price"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("price", {
                                                    required: {
                                                        value: true,
                                                        message: 'product Price is Required'
                                                    },
                                                })}
                                            />

                                            <label className="label">
                                                {errors.price?.type === 'required' && <span
                                                    className="label-text-alt text-red-500">
                                                    {errors.price.message}
                                                </span>}
                                                {errors.price?.type === 'pattern' && <span
                                                    className="label-text-alt text-red-500">
                                                    {errors.price.message}
                                                </span>}

                                            </label>
                                        </div>


                                        {/* product quantity vaildation */}
                                        <div className="form-control w-full max-w-xs mt-2">
                                            <label className="label">
                                                <span className="label-text">Quantity</span>
                                            </label>

                                            <input
                                                type="number"
                                                placeholder="Enter Product Quantity"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("quantity", {
                                                    required: {
                                                        value: true,
                                                        message: 'Product Quantity is Required'
                                                    },
                                                })}
                                            />


                                            <label className="label">
                                                {errors.quantity?.type === 'required' && <span
                                                    className="label-text-alt text-red-500">
                                                    {errors.quantity.message}
                                                </span>}

                                            </label>
                                        </div>

                                        {/* product catagory */}
                                        <div className="form-control w-full max-w-xs mt-2">
                                            <label className="label">
                                                <span className="label-text">catagory</span>
                                            </label>

                                            <select
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("catagory", {
                                                    required: {
                                                        value: true,
                                                        message: 'Your are not select any catagory'
                                                    }
                                                })}>
                                                {
                                                    allcatagory?.map(item => <option key={item._id} value={item.catagory}>{item.catagory}</option>)
                                                }
                                            </select>


                                            <label className="label">
                                                {errors.catagory?.type === 'required' && <span
                                                    className="label-text-alt text-red-500">
                                                    {errors.catagory.message}
                                                </span>}

                                            </label>
                                        </div>




                                        <input className='btn w-full max-w-xs text-white mt-4' type="submit" value="add" />
                                    </form>
                                </div>
                            </div> : <h1 className='text-xl text-red-500'>product successfully Add</h1>

                        }



                    </div>
                </div>
            </div>

        </>
    );
};

export default AddProductOnModal;