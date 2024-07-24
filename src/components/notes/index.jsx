import "./styles.css";

function notes(props) {
    <div className="money_note_content">
        <div>
            <img src={props.src} alt="Hundred" />
        </div>
        <div className="text_money_note">
            {props.label1 && <p>{props.label1}</p>}
            {props.label2 && <h2>{props.label2}</h2>}
        </div>
    </div>;
}

export default notes;
