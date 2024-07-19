import "./styles.css";

function Button(props) {
    return (
        <div
            className="button"
            style={{
                background: props.background,
            }}
            onClick={props.onClick}
        >
            <img src={props.src} style={{ width: props.width }} alt="icon" />
            {props.label && <p>{props.label}</p>}
        </div>
    );
}

export default Button;
