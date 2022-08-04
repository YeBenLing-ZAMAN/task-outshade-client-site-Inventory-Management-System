import React from 'react';

const CatagoryRow = ({type, index, setCatagoryReLoader,setCatagoryDelete}) => {
    const {catagory,_id } = type;
    
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{catagory}</td>
            <td>{}</td>
            <td>
                <label htmlFor="catagory-delete-model-popup"  onClick={() => setCatagoryDelete(type)} className='btn btn-xs btn-warning'>delete</label>
            </td>
        </tr>
    );
};

export default CatagoryRow;