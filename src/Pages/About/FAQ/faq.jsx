import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Style from './faq.module.css';

function Faq() {
    const faq_ = [
        {
            id: uuidv4(),
            question: 'What is virtual reality?',
            answer: 'Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more.'
        },
        {
            id: uuidv4(),
            question: 'What types of VR services do you offer?',
            answer: 'Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more.'
        },
        {
            id: uuidv4(),
            question: 'How much does your VR services cost?',
            answer: 'Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more.'
        },
        {
            id: uuidv4(),
            question: 'What equipment do I need to use your VR services?',
            answer: 'Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more.'
        },
        {
            id: uuidv4(),
            question: 'Can I try out your VR services before I commit?',
            answer: 'Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more.'
        }
    ];

    const [faqs, set_faqs] = useState(faq_);
    const [activeId, setActiveId] = useState(null);

    const handleClick = (id) => {
        setActiveId(prevId => prevId === id ? null : id); // Toggle the clicked ID
    };

    return (
        <section className={Style.container}>
            <h5>FAQ</h5>
            <h2>Frequently Asked Questions</h2>
            <p>At VRNas, we want to make sure that you have all the information you need to make informed decisions about our VR services. Here are some of the most common questions we receive:</p>
            <div className={Style.boxs}>
                {faqs.map(faq => (
                    <div key={faq.id} onClick={() => handleClick(faq.id)} className={Style.box}>
                        <h2>{faq.question}</h2>
                        <p className={`${Style.answer} ${activeId === faq.id ? Style.active : ''}`}>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Faq;
