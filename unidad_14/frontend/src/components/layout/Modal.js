import '../../styles/components/layout/ModalHeader.css';
import ModalHeader from './ModalHeader';

const Modal = ({ title, content, onModalClose }) => {
    return (
        <div className='overlay'>
            <div className='modal'>
                <ModalHeader title={title} onModalClose={onModalClose} />
                <div className='modal-body'>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Modal;