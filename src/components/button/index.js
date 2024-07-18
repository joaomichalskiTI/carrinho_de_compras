import "./styles.css";

function Button(props) {
    return (
        <div class="button" style={{ background: props.background, color: props.color, width: props.width, height: props.height, margin: props.margin, fontFamily: props.fontFamily, fontSize: props.fontSize, fontWeight: props.fontWeight, gap: props.gap, }}>
            <img src={props.src} style={{ width: props.width }} alt="icon" />
            <p>{props.label}</p>
        </div >
    );
}

export default Button;
