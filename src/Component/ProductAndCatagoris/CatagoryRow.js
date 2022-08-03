import React from 'react';

const CatagoryRow = ({product, index}) => {
    const {name, price, quantity, catagory, _id } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>
                <label htmlFor="bill-edit-model-popup" className='btn btn-xs btn-info mr-2'>edit</label>
                <label htmlFor="bill-delete-model-popup" className='btn btn-xs btn-warning'>delete</label>
            </td>
        </tr>
    );
};

export default CatagoryRow;