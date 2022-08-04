import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const UpdateCatagoryOnModal = ({ setCatagoryReLoader, catagoryUpdate }) => {

    const { register, formState: { errors }, handleSubmit, control, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [storeCatagory, setStoreCatagory] = useState([]);
    const [allcatagory, setAllCatagory] = useState([]);
    const id = catagoryUpdate;


    useEffect(() => {
        setIsLoading(true);
        // console.log(id);
        const loadData = async () => {
            await fetch(`https://outshado.herokuapp.com/catagory_list/${id}`, {
                method: "GET",
                headers: {
                    // authorization: `Bearer ${localStorage.getItem('accesstoken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setStoreCatagory(data);
                    setIsLoading(false);
                })
        }
        loadData();
    }, [id])


    const { catagory, details, _id } = storeCatagory;

    const handleChangeDetails = (event) => {
        const items = { catagory: catagory, _id: _id }
        items.details = event.target.value;
        setStoreCatagory(items);
    }


    const onSubmit = async (data, event) => {
        // storeCatagory.catagory = data.catagory;
        console.log(storeCatagory);

        await fetch(`https://outshado.herokuapp.com/update_catagory/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            },
            body: JSON.stringify(storeCatagory)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('update', data)
                setCatagoryReLoader(true);

                /* jinista handle korete hobe */
                // setEditmodalPopUpSuccesMessage(false);
            })


    }

    return (

        <>
            <div>
                <input type="checkbox" id="catagory-update-model-popup" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        {/* modal head Line */}
                        <div className='flex justify-between items-center'>
                            <h3 className="font-bold text-xl text-primary text-center capitalize">Update storeCatagory information!</h3>
                            {/* modal close section */}
                            <div className="modal-action mt-[-3px]">
                                <label htmlFor="catagory-update-model-popup" className="btn btn-primary btn-circle btn-outline text-bold">X</label>
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
                                        <h3 className="font-bold text-xl text-center capitalize">Catagory <span className='text-red-500 '> {catagory}</span></h3>

                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text">Details Of Catagory</span>
                                                </label>
                                                <input type="text" className="input input-bordered w-full max-w-xs"
                                                    onChange={handleChangeDetails} value={details} required />
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

export default UpdateCatagoryOnModal;