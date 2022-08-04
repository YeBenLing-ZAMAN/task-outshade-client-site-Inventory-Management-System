import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import AddCatagoryOnModal from './AddCatagoryOnModal';
import CatagoryRow from './CatagoryRow';
import DeleteCatagoryOnModal from './DeleteCatagoryOnModal';

const Catagory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchItem, setSearchItem] = useState('');
    const [allcatagory, setAllCatagory] = useState([]);
    const [catagoryReLoader, setCatagoryReLoader] = useState(false);


    /* store system */
    const [catagoryDelete, setCatagoryDelete] = useState(null);

    /* for modal information */
    const [forModalPopUp, setForModalPopUp] = useState(null);
    const [addmodalPopUpSuccesMessage, setaddmodalPopUpSuccesMessage] = useState(true);



    const clicksModalPopUpSuccesMessagehandle = () => {
        setForModalPopUp(true);
        setaddmodalPopUpSuccesMessage(true);

    }

    useEffect(() => {
        setIsLoading(true);
        const loadData = async () => {
            await fetch(`http://localhost:5000/catagory_list`, {
                method: "GET",
                headers: {
                    // authorization: `Bearer ${localStorage.getItem('accesstoken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAllCatagory(data);
                    setIsLoading(false);
                    setCatagoryReLoader(false);
                })
        }
        loadData();
    }, [catagoryReLoader])

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


            {/* delete a catagory on modal */}

            {
                catagoryDelete && <DeleteCatagoryOnModal
                    setCatagoryDelete={setCatagoryDelete}
                    catagoryDelete={catagoryDelete}
                    setCatagoryReLoader={setCatagoryReLoader}
                ></DeleteCatagoryOnModal>
            }


            {/* add catagory modal on the list */}
            {
                forModalPopUp && <AddCatagoryOnModal
                    setForModalPopUp={setForModalPopUp}
                    forModalPopUp={forModalPopUp}
                    setaddmodalPopUpSuccesMessage={setaddmodalPopUpSuccesMessage}
                    addmodalPopUpSuccesMessage={addmodalPopUpSuccesMessage}
                    setCatagoryReLoader={setCatagoryReLoader}
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
                            <th>Items Listed On This Catagory</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allcatagory?.map((type, index) => <CatagoryRow
                                key={type._id}
                                type={type}
                                index={index}
                                setCatagoryReLoader={setCatagoryReLoader}
                                setCatagoryDelete={setCatagoryDelete}
                            ></CatagoryRow>)
                        }

                    </tbody>
                </table>
            </div>

        </>
    );
};

export default Catagory;