/* eslint-disable react/prop-types */
import { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from './StripePayment/CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = ({ camp, refetch, closeModal, isOpen, }) => {
    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                    <Dialog.Title
                                        as='h3'
                                        className='text-lg font-medium text-center leading-6 text-gray-900'
                                    >
                                        Payment for 
                                        <p className='text-orange-400'>{camp.campName}</p>
                                    </Dialog.Title>

                                    <Elements stripe={stripePromise}>
                                        <CheckOutForm
                                            camp={camp}
                                            closeModal={closeModal}
                                            refetch={refetch}
                                        />
                                    </Elements>

                                    <hr className='mt-5 ' />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default Payment;
