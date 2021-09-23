import '../../styles/components/layout/CloseButton.css';
import CloseButton from './CloseButton';

const ModalHeader = ({ title, onModalClose }) => {
    return (
        <>
            <div className='modal-header'>
                <img src={require('../../images/misc/the-simpsons-logo.svg').default} alt='' />
                <span className='modal-header-title'>{title}</span>
            </div>
            <CloseButton onModalClose={onModalClose} />
        </>
    );
};

export default ModalHeader;