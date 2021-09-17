const PlaceButton = ({ image, text, className }) => {
    const onClick = () => {
        const modal = document.querySelector('.modal');
        let modalHeaderText = document.querySelector('.modal-header-text');

        modal.style.display = 'block';
        modalHeaderText.textContent = text
    };

    return (
        <div>
            <div className={"place-btn " + className} onClick={onClick}>
                <p>{text}</p>
                <img src={image} alt={text} />
            </div>
        </div>           
    );
};

export default PlaceButton;