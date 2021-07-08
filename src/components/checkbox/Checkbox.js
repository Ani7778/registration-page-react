import classes from "./Checkbox.module.css";
import classOfInput from "../../containers/Form.module.css"

function Checkbox({ label, name, register, errors }) {
    return (
        <div className={classes.checkbox}>
            <label>
                {label}
                <input className={`${classOfInput.params} ${errors ? classOfInput.invalid : ''}`} type="checkbox" {...register(name)} />
            </label>
        </div>
    )
}

export default Checkbox;
