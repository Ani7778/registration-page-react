import React from "react";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from "../containers/Form.module.css"

function ErrorMessage({message}) {
    return (
        <div>
            <FontAwesomeIcon className={classes.icon} icon={faExclamationTriangle} />
            <span className={classes.error_field}>{message}</span>
        </div>
    )
};

export default ErrorMessage;
