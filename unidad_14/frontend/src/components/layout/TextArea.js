const TextArea = ({ labelText, name, className, placeholder }) => {
    return (
        <>
            <label for={name}>{labelText}</label>
            <br />
            <textarea name={name} id={name} className={`${className}`} placeholder={placeholder} />
        </>           
    );
};

export default TextArea;