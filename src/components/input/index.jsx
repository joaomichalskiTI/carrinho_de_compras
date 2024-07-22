import "./styles.css";

function Input(props) {
    return (
        <div className="input_container">
            <p>{props.label}</p>
            <div className="content">
                {props.type === "currence" ? (
                    <div className="currence">
                        <input
                            type="text"
                            style={{ textAlign: props.textAlign }}
                            value={props.value}
                            onChange={props.onChange}
                            placeholder={props.placeholder}
                        />
                    </div>
                ) : (
                    <input
                        type={props.type}
                        style={{ textAlign: props.textAlign }}
                        maxLength={30}
                        value={props.value}
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                    />
                )}
            </div>
        </div>
    );
}

export default Input;
