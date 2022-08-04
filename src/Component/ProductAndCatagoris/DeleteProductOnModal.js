import React from 'react';

const DeleteProductOnModal = ({ deleteProduct,setReLoadChecked ,setDeleteProduct}) => {
    const { name, price, quantity, catagory, _id } = deleteProduct;
    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`https://outshado.herokuapp.com/delete_product/${_id}`, {
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
                    setReLoadChecked(true);
                }
            })

            setDeleteProduct(null);
        // console.log(deleteBill);
    }
    return (
        <>
            <div>
                <input type="checkbox" id="bill-delete-model-popup" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-xl text-red-500 capitalize text-center mb-8">Are you sure to delete this Product</h3>
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
                                    <th>Product Name</th>
                                    <td className='uppercase'>{name}</td>
                                </tr>
                                <tr>
                                    <th>Product Price</th>
                                    <td>{price}</td>
                                </tr>
                                <tr>
                                    <th>Product Quantity</th>
                                    <td>{quantity}</td>
                                </tr>
                                <tr>
                                    <th className='text-red-500'>Pruduct Catagory</th>
                                    <td className='uppercase'>{catagory}</td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="py-4 text-primary mt-10 capitalize">if your confirm then press delete button otherwise press cancel</p>
                        <div className="modal-action mt-[-5px]">
                            <button onClick={() => handleDelete(_id)} className='btn btn-warning'>Confirm Delete</button>
                            <label onClick={() => setDeleteProduct(null)} htmlFor="bill-delete-model-popup" className="btn btn-error">Canecl</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteProductOnModal;