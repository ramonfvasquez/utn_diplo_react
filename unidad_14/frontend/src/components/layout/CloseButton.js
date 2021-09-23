const CloseButton = ({ onModalClose }) => {
    const handleButtonClickClose = e => {
        e.preventDefault();
        if (onModalClose) onModalClose();
    };

    return (
        <div>
            <span className="close-btn" onClick={handleButtonClickClose}>x</span>
        </div>           
    );
};

export default CloseButton;