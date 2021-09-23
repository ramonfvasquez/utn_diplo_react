import '../styles/components/pages/ContactPage.css';
import Button from '../components/layout/Button.js';
import TextArea from '../components/layout/TextArea.js';
import TextInput from '../components/layout/TextInput.js';

const ContactPage = () => {
    const handleButtonClick = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form className='contact-form'>
                <TextInput labelText='Name' name='name' placeholder='Bart Simpson' />
                <TextInput labelText='Email' name='email' placeholder='bart@the-simpsons.com' />
                <TextArea labelText='Message' name='message' placeholder='Ay Caramba!' />
                <Button text='Send' onClick={handleButtonClick}/>
            </form>
        </div>
    );
};

export default ContactPage;
