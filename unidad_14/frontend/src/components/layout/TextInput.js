const TextInput = ({ labelText, name, className, placeholder }) => {
    return (
        <>
            <label for={name}>{labelText}</label>
            <br />
            <input type='text' name={name} id={name} className={`text ${className}`} placeholder={placeholder} />
        </>           
    );
};

export default TextInput;