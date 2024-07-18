import "./styles.css";

function Input(props) {
    return (
        <div className="input">
            <p>{props.label}</p>
            <div className="conteudo">
                <input type={props.type} style={{ textAlign: props.textAlign, margin: props.margin }} />
            </div>
        </div>
    )
}

export default Input;
