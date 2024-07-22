import "./styles.css";

function Button(props) {
    return (
        <button
            className="button"
            style={{
                color: props.color,
                background: props.background,
            }}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            <img src={props.src} style={{ width: props.width }} alt="icon" />
            {props.label && <p>{props.label}</p>}
            <span />
        </button>
    );
}

export default Button;
