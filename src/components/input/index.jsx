import "./styles.css";

function Input(props) {
    function formatNumber(value) {
        value = value.replace(/[^0-9]/g, "");

        const options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
        const formatter = new Intl.NumberFormat("pt-BR", options);
        value = (value / 100).toFixed(2);
        value = formatter.format(value);

        return value;
    }

    const handleChange = (e) => {
        let value = e.target.value;
        if (props.type === "currence") {
            value = formatNumber(value);
        }

        props.onChange({ target: { value } });
    };

    return (
        <div className="input_container">
            <p>{props.label}</p>
            <div className="content">
                {props.type === "currence" ? (
                    <div className="currence">
                        <input
                            type="text"
                            value={props.value}
                            onChange={handleChange}
                            placeholder={props.placeholder}
                            maxLength={8}
                        />
                    </div>
                ) : (
                    <input
                        type={props.type}
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
