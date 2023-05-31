import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import UpdateModal from '../BookingModal/UpdateModal';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai";
const Ticket = ({ ticket, handleDelete, handleUpdate, index }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { id, ticketType, description } = ticket;

    const handleClickUpdate = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <tr>
                <th className="text-black">{index + 1}</th> {/* Add text-black class */}
                <td>
                    <h1>{ticketType}</h1>
                </td>
                <td>
                    <h1>{description}</h1>
                </td>
                <td>
                    <button onClick={() => handleDelete(id)} className="btn btn-outline text-red-500 m-4 text-2xl"><AiFillDelete className=''></AiFillDelete></button>
                    <button onClick={handleClickUpdate} className="btn btn-outline text-blue-600 m-4 text-2xl">
                        <FaEdit />
                    </button>
                </td>
            </tr>
            {isModalOpen && (
                <UpdateModal
                    ticket={ticket}
                    setIsModalOpen={setIsModalOpen}
                    handleUpdate={handleUpdate}
                    selectedTicketId={id}
                />
            )}
        </>
    );
};

export default Ticket;
