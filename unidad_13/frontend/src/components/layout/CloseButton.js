const CloseButton = (props) => {
    const onClick = () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
    };

    return (
        <div>
            <span class="close-btn" onClick={onClick}>&times;</span>
        </div>           
    );
};

export default CloseButton;