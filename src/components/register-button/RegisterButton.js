import classes from "./RegisterButton.module.css";

function RegisterButton() {
    return (
        <div className={classes.container}>
            <button className={classes.button} type="submit">Register</button>
        </div>
    )
}

export default RegisterButton;
