import { useState } from 'react';
import Modal from './Modal';

const NavButton = ({ image, title, className, content }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleButtonClick = (content) => {
        setModalContent(content);
        setModalVisible(true);
    };

    return (
        <div>
            <div className={`nav-btn ${className}`} onClick={() => handleButtonClick(content)}>
                <p>{title}</p>
                <img src={image} alt={title} />
            </div>
            {modalVisible ? <Modal title={title} content={modalContent} onModalClose={() => setModalVisible(false)} /> : null}
        </div>           
    );
};

export default NavButton;