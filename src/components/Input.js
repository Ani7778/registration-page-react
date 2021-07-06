import React from "react";
import classes from "../containers/Form.module.css"

function Input({ label, name, register, options, errors }) {
    return (
        <div>
            <label>
                {label}<br />
                <input className={`${classes.params} ${errors ? classes.invalid : ''}`} type="text" {...register(name, options) } />
            </label>
        </div>
    )
};

export default Input;
