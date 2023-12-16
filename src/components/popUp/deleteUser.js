// Author  : Adriana Anggita Daeli, Daniel Salim
// Version : 1.1.3 (3 Oktober 2023)
// Description : This component is used for user delete confirmation pop up when user clicks on delete button in user list page

import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncDeleteUser } from '../../../states/users/action';
import { Button, Modal } from '../../index';
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { setIsActionSuccess } from '../../../states/global/action';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteUser = ({ handleClose, details, setUserContainer }) => {
    const [showDeleteSuccess, setShowDeleteSuccess] = useState('');
    const isDeleteSuccess = useSelector((state) => state.crudState.isActionSuccess);
    const errorMessage = useSelector((state) => state.crudState.errorMessage);
    const dispatch = useDispatch();

    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClose]);

    useEffect(() => {
        // Listen for changes in isEditSuccess and update showEditSuccess accordingly
        if (isDeleteSuccess === 'failed') {
            setShowDeleteSuccess('failed');
            dispatch(setIsActionSuccess(""));
        }
    }, [isDeleteSuccess]);

    const handleDeleteConfirm = () => {
        try {
            if (Array.isArray(details)) {
                dispatch(asyncDeleteUser(details));
            } else {
                dispatch(asyncDeleteUser(details.id));
            }
            setUserContainer([])
            handleClose();
        } catch (error) {
            console.log("error dispatching delete user", error);
        }
    }

    if (showDeleteSuccess === 'failed') {
        return (
            <Modal
                label="Close"
                className="dark-error hover:bg-error-hover"
                handleClose={handleClose}
            >
                <div className="flex gap-2 text-center items-center justify-center">
                    <BsFillXCircleFill className="text-dark-error w-6 h-6" />
                    <h1 className="text-3xl font-bold">
                        Delete Failed!
                    </h1>
                </div>
                <div className="py-2 flex justify-center text-center items-center">
                    <div className="w-80 font-bold text-center">
                        {errorMessage}
                    </div>
                </div>
            </Modal>
        );
    }

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                <div ref={modalRef} className={`relative my-6 mx-auto`}>
                    {/*content*/}
                    <div className="px-20 py-8 rounded-2xl shadow-2xl flex flex-col bg-high-container">
                        {/*header*/}
                        <div className="flex text-center items-center justify-center">
                            <h1 className="text-3xl font-bold text-dark-error">
                                {
                                    Array.isArray(details) // Check if details is an array
                                        ? `Delete ${details.length} user(s)?` // If it's an array
                                        : `Delete "${details.fullname}" ?` // If it's an object
                                }
                            </h1>
                        </div>
                        {/*body*/}
                        <div className="py-2 flex justify-center text-center items-center">
                            <div className="w-80 font-bold text-center text-gray-200">
                                Selected user(s) will be permanently deleted from this list
                            </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-center gap-6">
                            <Button
                                label="Cancel"
                                clickHandler={handleClose}
                                className="bg-dark-secondary hover:bg-secondary-hover shadow-2xl"
                            />
                            <Button
                                label="Delete"
                                clickHandler={handleDeleteConfirm}
                                className="bg-dark-error hover:bg-error-hover shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-80 fixed z-10 inset-0 bg-gray-800"></div>
        </>
    );
};

export default DeleteUser;
