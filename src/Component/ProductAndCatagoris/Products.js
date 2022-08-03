import React, { useState } from 'react';
import Loading from '../Loading';
import AddProductOnModal from './AddProductOnModal';
import DeleteProductOnModal from './DeleteProductOnModal';
import EditProductOnModal from './EditProductOnModal';
import ProductRow from './ProductRow';
const Products = () => {
    const [searchItem, setSearchItem] = useState('');
    const [addmodalPopUpSuccesMessage, setaddmodalPopUpSuccesMessage] = useState(true);
    const [reLoadchecked, setReLoadChecked] = useState(false);

    /* store all the product information for API calling */
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    /* modal tiggle for activaty and store product information*/
    const [forModalPopUp, setForModalPopUp] = useState(null);
    const [deleteProduct, setDeleteProduct] = useState(null);
    const [editProduct, setEditProduct] = useState(null);




    const clicksModalPopUpSuccesMessagehandle = () => {
        setForModalPopUp(true);
        setaddmodalPopUpSuccesMessage(true);
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    /*  data fetch korte hobe ei khane */

    /*  */


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
                    setReLoadChecked={setReLoadChecked}
                    addmodalPopUpSuccesMessage={addmodalPopUpSuccesMessage}
                    setaddmodalPopUpSuccesMessage={setaddmodalPopUpSuccesMessage}
                ></AddProductOnModal>
            }

            {/* delete one Product item button click on BillsRow handle and getting with a modal */}
            {
                deleteProduct && <DeleteProductOnModal
                    setDeleteProduct={setDeleteProduct}
                    deleteProduct={deleteProduct}
                    setReLoadChecked={setReLoadChecked}
                ></DeleteProductOnModal>
            }


            {/* edit one product item button click on BillsRow handle and getting with a modal */}
            {
                editProduct && <EditProductOnModal
                    setEditProduct={setEditProduct}
                    editProduct={editProduct}
                    setReLoadChecked={setReLoadChecked}
                ></EditProductOnModal>
            }




            {/* all product information stored and showing on list */}
            <div className="overflow-x-auto max-w-7xl mx-auto mt-6 table-container">
                <table className="table table-compact w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Porduct price</th>
                            <th>Product Quantity</th>
                            <th>Pruduct Catagory</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productList?.map((product, index) => <ProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                setEditProduct={setEditProduct}
                            ></ProductRow>)
                        }

                    </tbody>
                </table>
            </div>

        </>
    );
};

export default Products;