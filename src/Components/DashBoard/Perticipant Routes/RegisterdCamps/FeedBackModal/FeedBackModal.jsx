/* eslint-disable react/prop-types */
import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { Fragment } from 'react'

import FeedbackForm from './FeedbackForm/FeedbackForm';


const FeedBackModal = ({ isFeedbackOpen, data, refetch, closeFeedbackModal }) => {
    return (

        <Transition appear show={isFeedbackOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeFeedbackModal}>
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <DialogTitle
                                    as='h3'
                                    className='mb-5 text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Feedback Form
                                </DialogTitle>


                                <FeedbackForm 
                                data={data}
                                closeFeedbackModal={closeFeedbackModal}
                                />

                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>

    );
};

export default FeedBackModal;