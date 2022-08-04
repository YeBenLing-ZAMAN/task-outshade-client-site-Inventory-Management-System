import React from 'react';

const CatagoryRow = ({ type, index, setCatagoryReLoader, setCatagoryDelete , setCatagoryUpdate}) => {
    const { catagory, details, _id } = type;
    const handleEditbutton = (_id) => {
        setCatagoryUpdate(_id);
        // setEditmodalPopUpSuccesMessage(true);
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td className='uppercase'>{catagory}</td>
            <td>{details}</td>
            <td>
                <label htmlFor="catagory-update-model-popup" onClick={() => handleEditbutton(_id)} className='btn btn-xs btn-info mr-2'>edit</label>
                <label htmlFor="catagory-delete-model-popup" onClick={() => setCatagoryDelete(type)} className='btn btn-xs btn-warning'>delete</label>
            </td>
        </tr>
    );
};

export default CatagoryRow;