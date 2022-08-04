import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const EditProductOnModal = ({ setReLoadChecked, editProduct }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const [allcatagory, setAllCatagory] = useState([]);
    const id = editProduct;


    useEffect(() => {
        setIsLoading(true);
        // console.log(id);
        const loadData = async () => {
            await fetch(`https://outshado.herokuapp.com/product_list/${id}`, {
                method: "GET",
                headers: {
                    // authorization: `Bearer ${localStorage.getItem('accesstoken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setProduct(data);
                    setIsLoading(false);
                })
        }
        loadData();
    }, [id])

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
    }, [id])

    const { name, price, quantity, catagory, _id } = product;

    const handleChangeName = (event) => {
        const items = { name: name, quantity: quantity, price: price, catagory: catagory, _id: _id }
        items.name = event.target.value;
        setProduct(items);
    }
    const handleChangeQuantity = (event) => {
        const items = { name: name, quantity: quantity, price: price, catagory: catagory, _id: _id }
        items.quantity = event.target.value;
        setProduct(items);
    }

    const handleChangePrice = (event) => {
        const items = { name: name, quantity: quantity, price: price, catagory: catagory, _id: _id }
        items.price = event.target.value;
        setProduct(items);
    }

    const onSubmit = async (data, event) => {
        product.catagory = data.catagory;
        // console.log(product);

        await fetch(`https://outshado.herokuapp.com/update_product/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('update', data)
                setReLoadChecked(true);

                /* jinista handle korete hobe */
                // setEditmodalPopUpSuccesMessage(false);
            })


    }
    return (
        <>
            <div>
                <input type="checkbox" id="bill-edit-model-popup" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        {/* modal head Line */}
                        <div className='flex justify-between items-center'>
                            <h3 className="font-bold text-xl text-primary text-center capitalize">Edit product information!</h3>
                            {/* modal close section */}
                            <div className="modal-action mt-[-3px]">
                                <label htmlFor="bill-edit-model-popup" className="btn btn-primary btn-circle btn-outline text-bold">X</label>
                            </div>
                        </div>


                        {/*Billing infomation form section*/}
                        {
                            isLoading
                                ?
                                <progress className="progress h-6 w-56 progress-error mx-auto"></progress>
                                :
                                <div className="card w-96 bg-base-100 p-5 mx-auto">
                                    <div className="card-body">

                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text">Product Name</span>
                                                </label>
                                                <input type="text" className="input input-bordered w-full max-w-xs"
                                                    onChange={handleChangeName} value={name} required />
                                            </div>

                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text">Quantity</span>
                                                </label>
                                                <input type="number" className="input input-bordered w-full max-w-xs"
                                                    onChange={handleChangeQuantity} value={quantity} required />
                                            </div>


                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text">Price</span>
                                                </label>
                                                <input type="number" className="input input-bordered w-full max-w-xs"
                                                    onChange={handleChangePrice} value={price} required />
                                            </div>

                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text">Catagory</span>
                                               
                                                </label>
                                                <select
                                                    className="input input-bordered w-full max-w-xs"
                                                    {...register("catagory", {
                                                        required: {
                                                            value: true,
                                                            message: 'Your are not select any catagory'
                                                        }
                                                    })}>
                                                    <option value={catagory}>{catagory}</option>
                                                    {
                                                        allcatagory?.map(item=> <option key={item._id} value={item.catagory}>{item.catagory}</option> )
                                                    }
                                                </select>
                                            </div>

                                            <input className='btn w-full max-w-xs text-white mt-10' type="submit" value="edit" />
                                        </form>
                                    </div>
                                </div>
                        }

                    </div>
                </div>
            </div>

        </>
    );
};

export default EditProductOnModal;