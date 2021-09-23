const Title = ({ image, className }) => {
    return (
        <div>
            <div className={className}>
                <img src={image} alt='' />
            </div>
        </div>           
    );
};

export default Title;