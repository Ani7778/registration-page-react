import classes from "../../containers/Form.module.css"
import React from "react";

function DateInput({ label, min, name, register, options, errors }) {
    return (
        <div>
            <label>
                {label}<br />
                <input className={`${classes.params} ${errors ? classes.invalid : ''}`} type="date" min={min} {...register(name, options )}/>
            </label>
        </div>
    )
}

export default DateInput;
