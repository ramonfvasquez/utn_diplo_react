import CloseButton from './CloseButton';
import logo from '../../images/misc/the-simpsons-logo.svg'

const ModalHeader = (props) => {
    return (
        <>
            <div className='modal-header'>
                <img src={logo} alt='' />
                <span className='modal-header-text'></span>
            </div>
            <CloseButton />
        </>
    );
};

export default ModalHeader;