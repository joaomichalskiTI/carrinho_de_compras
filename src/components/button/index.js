import "./styles.css";

function Button(props) {
    return (
        <div class="button" style={{ background: props.background }}>
            <img src={props.src} alt="icon" />
            <p>{props.label}</p>
        </div>
    );
}

export default Button;
