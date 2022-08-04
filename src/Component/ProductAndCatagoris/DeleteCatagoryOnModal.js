import React from 'react';

const DeleteCatagoryOnModal = ({ catagoryDelete, setCatagoryDelete, setCatagoryReLoader }) => {
    // console.log(catagoryDelete);
    const { catagory, _id } = catagoryDelete;
    const handleDelete = (_id) => {
        console.log(_id);

        fetch(`http://localhost:5000/delete_catagory/${_id}`, {
            method: 'DELETE',
            headers: {
                // authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                //  // console.log(data);
                if (data.deletedCount) {
                    // console.log(`bill items is deleted`);
                    // refetch();
                    setCatagoryReLoader(true);
                }
            })

        setCatagoryDelete(null);

    }
    return (
        <>
            <div>
                <input type="checkbox" id="catagory-delete-model-popup" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-xl text-red-500 capitalize text-center mb-8">Are you sure to delete this catagory</h3>
                        {/* table  */}
                        <table className="table w-full table-compact">
                            {/* <!-- head --> */}
                            <thead>
                                <tr className='text-blue-600'>
                                    <th>Headding</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Catagory Type</th>
                                    <td className='uppercase'>{catagory}</td>
                                </tr>
                                <tr>
                                    <th>Product Listed on the Catagory</th>
                                    <td>3000/items</td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="py-4 text-primary mt-10 capitalize">if your confirm then press delete button otherwise press cancel</p>
                        <div className="modal-action mt-[-5px]">
                            <button onClick={() => handleDelete(_id)} className='btn btn-warning'>Confirm Delete</button>
                            <label onClick={() => setCatagoryDelete(null)} htmlFor="catagory-delete-model-popup" className="btn btn-error">Canecl</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteCatagoryOnModal;