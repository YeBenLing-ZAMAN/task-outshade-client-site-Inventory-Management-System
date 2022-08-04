import React, { useState } from 'react';
import Loading from '../Loading';
import AddCatagoryOnModal from './AddCatagoryOnModal';
import CatagoryRow from './CatagoryRow';

const Catagory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchItem, setSearchItem] = useState('');


    /* store system */
    const [catagoryList, setCatagoryList] = useState([]);

    /* for modal information */
    const [forModalPopUp, setForModalPopUp] = useState(null);
    const [addmodalPopUpSuccesMessage, setaddmodalPopUpSuccesMessage] = useState(true);



    const clicksModalPopUpSuccesMessagehandle = () => {
        setForModalPopUp(true);
        setaddmodalPopUpSuccesMessage(true);

    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            <div className='mt-1'>
                <div className="navbar bg-base-300 max-w-7xl mx-auto">
                    <div className="flex-1">
                        <p className="text-primary text-xl font-bold mr-5 uppercase">catagory Search: </p>
                        <div className="form-control w-full max-w-xs">
                            <input type="text" placeholder="Search . . ." onChange={(event) => setSearchItem(event.target.value)} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="flex-none gap-2">
                        <label htmlFor="add_catagory_modal" onClick={() => clicksModalPopUpSuccesMessagehandle()} className="btn btn-primary modal-button">Add Catagory</label>
                    </div>
                </div>
            </div>


            {
                forModalPopUp && <AddCatagoryOnModal
                    setForModalPopUp={setForModalPopUp}
                    forModalPopUp={forModalPopUp}
                    setaddmodalPopUpSuccesMessage={setaddmodalPopUpSuccesMessage}
                    addmodalPopUpSuccesMessage={addmodalPopUpSuccesMessage}
                ></AddCatagoryOnModal>
            }



            {/* all product information stored and showing on list */}
            <div className="overflow-x-auto max-w-7xl mx-auto mt-6 table-container">
                <table className="table table-compact w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Pruduct Catagory</th>
                            <th>Numebr of Product</th>
                            <th>Total Product</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            catagoryList?.map((product, index) => <CatagoryRow
                                key={product._id}
                                product={product}
                                index={index}
                            ></CatagoryRow>)
                        }

                    </tbody>
                </table>
            </div>

        </>
    );
};

export default Catagory;