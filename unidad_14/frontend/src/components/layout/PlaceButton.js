import { useState } from 'react';
import Modal from './Modal';

const PlaceButton = ({ image, title, className, content }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleButtonClick = (content) => {
        setModalContent(content);
        setModalVisible(true);
    };

    return (
        <div>
            <div className={`place-btn ${className}`} onClick={() => handleButtonClick(content)}>
                <p>{title}</p>
                <img src={image} alt={title} />
            </div>
            {modalVisible ? <Modal title={title} content={modalContent} onModalClose={() => setModalVisible(false)} /> : null}
        </div>           
    );
};

export default PlaceButton;