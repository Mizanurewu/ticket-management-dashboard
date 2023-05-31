import React, { useState, useEffect } from 'react';
import Ticket from './Ticket/Ticket';
import BookingModal from './BookingModal/BookingModal';
import { addToDb, removeFromDb, updateInDb } from '../../storage/fakedb';
import toast, { Toaster } from 'react-hot-toast';

const Dashboard = () => {
    const [tickets, setTickets] = useState([]);
    const [modal, setModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    // const handleAddTicket = () => {
    //     setModal(true);
    // };


    const handleBooking = (booking) => {
        addToDb(booking.id, booking); 

        setTickets((prevTickets) => [...prevTickets, booking]);

        console.log('Booking:', booking);
        toast.success('Successfully Added')
    };
    const handleUpdate = (updateTicket) => {
      if(window.confirm('Are you sure to Update?')){
        const id = updateTicket.id;
        setIsModalOpen(true);
        console.log(updateTicket);
        updateInDb(updateTicket);

        const updatedTickets = tickets.map((ticket) => {
            if (ticket.id === id) {
                return updateTicket;
            }
            return ticket;
        });

        setTickets(updatedTickets);
        toast.success('Successfully Updated')
      }
    };
    const handleDelete = (id) => {
       if(window.confirm('Are you sure to delete')){
        console.log(id);
        removeFromDb(id);

        const remaining = tickets.filter((ticket) => ticket.id !== id);
        console.log(remaining);
        setTickets(remaining);
        toast.error('Successfully Deleted')

       }
    };

    useEffect(() => {
        const storedBookings = localStorage.getItem('shopping-cart');

        if (storedBookings) {
            const parsedBookings = JSON.parse(storedBookings);
            setTickets(parsedBookings);
        }
    }, []);

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Ticket Type</th>
                            <th>Description</th>
                            <th>Action</th>
                            <th>
                                <label
                                    htmlFor="my-modal"
                                    onClick={() => setModal(true)}
                                    className="btn btn-primary text-white"
                                >
                                    Add ticket
                                </label>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket, index) => (
                            <Ticket
                                key={index}
                                ticket={ticket}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                                setIsModalOpen={setIsModalOpen}// for auto close modal after submit
                                isModalOpen={isModalOpen}
                            />

                        ))}
                    </tbody>
                </table>
                {modal && <BookingModal
                    handleBooking={handleBooking}
                    setModal={setModal} //to close the modal
                />}
                <Toaster />
            </div>
            
        </div>
    );
};

export default Dashboard;
