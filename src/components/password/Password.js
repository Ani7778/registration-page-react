import classes from "../../containers/Form.module.css";
import React from "react";

function Password({ label, name, register, options, errors }) {
    return (
        <div>
            <label>
                {label}<br />
                <input className={`${classes.params} ${errors ? classes.invalid : ''}`} type="password" {...register(name, options)}/>
            </label>
        </div>
    )
}

export default Password;