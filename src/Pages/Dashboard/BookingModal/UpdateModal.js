import React, { useState, useEffect } from 'react';
import { updateInDb } from '../../../storage/fakedb';

const UpdateModal = ({ ticket, setIsModalOpen, handleUpdate, selectedTicketId }) => {
    const { id, ticketType: initialTicketType, description: initialDescription } = ticket;
    const [ticketType, setTicketType] = useState(initialTicketType);
    const [description, setDescription] = useState(initialDescription);

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedTicket = {
            id: selectedTicketId,
            ticketType,
            description,
        };

        handleUpdate(updatedTicket);
        setIsModalOpen(false);
    };

    useEffect(() => {
        setTicketType(initialTicketType);
        setDescription(initialDescription);
    }, [ticket]);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <input type="checkbox" id="update-modal" className="modal-toggle" checked={true} />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={closeModal}>
                        ✕
                    </label>
                    <h2 className='text-xl font-bold text-center'>Update</h2>
                    <form onSubmit={handleSubmit} className="grid gap-7 grid-cols-1 mt-10">
                    <label className='text-lg font-semibold' placeholder='Ticket Type:'><span className='text-red-600'>* </span>Ticket Type:</label>
                        <input
                            name="ticketType"
                            value={ticketType}
                            onChange={(event) => setTicketType(event.target.value)}
                            type="text"
                            placeholder="Ticket Type"
                            required
                            className="input input-bordered w-full"
                        />
                        <label className='text-lg font-semibold' placeholder='Description'><span className='text-red-600'>* </span>Description:</label>
                     
                        <textarea
                            name="description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            type="text"
                            placeholder="Description"
                            required
                            className="input input-bordered w-full">

                        </textarea>

                        <input name="id" defaultValue={id} hidden type="text" />

                        <input className="btn btn-accent w-full" type="submit" value="Update" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateModal;
