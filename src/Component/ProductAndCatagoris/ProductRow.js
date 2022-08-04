import React from 'react';

const ProductRow = ({product,setEditProduct,setDeleteProduct,setEditmodalPopUpSuccesMessage}) => {
    const {name, price, quantity, catagory, _id } = product;
    // console.log(product);
    const handleEditbutton = (_id)=>{
        setEditProduct(_id);
        setEditmodalPopUpSuccesMessage(true);
    } 
    return (
        <tr>
            <th>{_id}</th>
            <td>{name}</td>
            <td>${price}</td>
            <td>{quantity}/pice</td>
            <td className='uppercase'>{catagory}</td>
            <td>
                <label htmlFor="bill-edit-model-popup" onClick={() => handleEditbutton(_id)} className='btn btn-xs btn-info mr-2'>edit</label>
                <label htmlFor="bill-delete-model-popup" onClick={() => setDeleteProduct(product)} className='btn btn-xs btn-warning'>delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;