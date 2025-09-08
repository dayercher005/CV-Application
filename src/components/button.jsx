function Button({text, color}){

    const buttonStyle = {
        color: color
    };

    return (
        <button style={buttonStyle}>
            {text}
        </button>
    )
}

export default Button