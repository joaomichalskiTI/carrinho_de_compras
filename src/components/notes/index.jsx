import "./styles.css";

function notes(props) {
    return (
        <div className="money_note_content">
            <div>
                <img src={props.src} alt="Nota" />
            </div>
            <div className="text_money_note">
                {props.label1 && <p>{props.label1}</p>}
                {props.label2 && <h2>{props.label2}</h2>}
            </div>
        </div>
    );
}

export default notes;
