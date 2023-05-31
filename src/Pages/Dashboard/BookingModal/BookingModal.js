import React from 'react';
import { addToDb } from '../../../storage/localStorageDb';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-hot-toast';

const BookingModals = ({ setModal, handleBooking }) => {

    const handleAddTicket = (event) => {
        event.preventDefault();
        const form = event.target;
        const ticketType = form.ticketType.value;
        const description = form.description.value;
        const booking = {
            id: uuidv4(), // Generate a unique ID for the booking
            ticketType,
            description,
        }
        handleBooking(booking);
        setModal(false)

    }

    return (
        <>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h2 className='text-xl font-bold text-center'>Add Ticket</h2> {/* Add the header here */}
                    <form onSubmit={handleAddTicket}
                        className="grid gap-7 grid-cols-1 mt-10">
                        <label
                            className='text-lg font-semibold'
                            placeholder='Ticket Type:'><span className='text-red-600'>* </span>Ticket Type:</label>
                        <input
                            name="ticketType"
                            type="text"
                            placeholder="Ticket Type"
                            required
                            className="input input-bordered w-full"
                        />
                        <label
                            className='text-lg font-semibold'
                            placeholder='Description'><span className='text-red-600'>* </span>Description:</label>
                        <textarea
                            name="description"
                            required
                            type="text"
                            placeholder="Description"
                            className="input input-bordered w-full">

                        </textarea>

                        <input
                            className="btn btn-accent w-full"
                            type="submit"
                            value="Submit" />
                    </form>
                </div>
            </div>
        </>

    );
};

export default BookingModals;
