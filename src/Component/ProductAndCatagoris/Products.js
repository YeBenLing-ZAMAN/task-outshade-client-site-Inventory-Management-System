import React, { useState } from 'react';
import AddProductOnModal from './AddProductOnModal';
const Products = () => {
    const [searchItem, setSearchItem] = useState('');
    const [forModalPopUp, setForModalPopUp] = useState(null);
    const [addmodalPopUpSuccesMessage, setaddmodalPopUpSuccesMessage] = useState(true);


    const clicksModalPopUpSuccesMessagehandle = () => {
        setForModalPopUp(true);
        setaddmodalPopUpSuccesMessage(true);
    }


    return (
        <>
            <div className='mt-1'>
                <div className="navbar bg-base-300 max-w-7xl mx-auto">
                    <div className="flex-1">
                        <p className="text-primary text-xl font-bold mr-5 uppercase">product Search: </p>
                        <div className="form-control w-full max-w-xs">
                            <input type="text" placeholder="Search . . ." onChange={(event) => setSearchItem(event.target.value)} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="flex-none gap-2">
                        <label htmlFor="my-modal-6" onClick={() => clicksModalPopUpSuccesMessagehandle()} className="btn btn-primary modal-button">Add Product</label>
                    </div>
                </div>
            </div>

              {/* add new product item button click on BillsRow handle and getting with a modal */}
              {
                forModalPopUp && <AddProductOnModal
                    setForModalPopUp={setForModalPopUp}
                    forModalPopUp={forModalPopUp}
                    // setReLoadChecked={setReLoadChecked}
                    addmodalPopUpSuccesMessage={addmodalPopUpSuccesMessage}
                    setaddmodalPopUpSuccesMessage={setaddmodalPopUpSuccesMessage}
                ></AddProductOnModal>
            }

        </>
    );
};

export default Products;