import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Head = () => {
    return (
        <section className='bg-teal-500 text-white py-2.5'>
            <div className='flex justify-between'>
                <div className=''>
                    <FontAwesomeIcon className='mr-2' icon={faPhoneVolume} />
                    <label className='text-sm mr-6'>+000 111 999</label>
                    <FontAwesomeIcon className='mr-2' icon={faEnvelope} />
                    <label className='text-sm mr-6'>demo@email.com</label>
                </div>
                <div className=''>
                    <label className='text-sm mr-6'>Web Faq's</label>
                    <label className='text-sm mr-6'>Need Help</label>
                    <span>icon</span>
                    <label className='text-sm mr-6' htmlFor=''>EN</label>
                    <span>$</span>
                    <label className='text-sm mr-6' htmlFor=''>USD</label>
                </div>
            </div>
        </section>
    );
};

export default Head;