import classes from "../containers/Form.module.css";

function Dropdown({ label, value1, value2, name, register, errors }) {
    return (
        <div>
            <label>
                {label}<br />
                <select className={`${classes.params} ${errors ? classes.invalid : ''}`} {...register(name)}>
                    <option>{value1}</option>
                    <option>{value2}</option>
                </select>
            </label>
        </div>
    )
}

export default Dropdown;
