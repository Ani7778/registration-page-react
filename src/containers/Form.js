import React from "react";
import classes from '../containers/Form.module.css';
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Password from "../components/Password";
import DateInput from "../components/DateInput";
import Dropdown from "../components/Dropdown";
import Checkbox from "../components/Checkbox";
import RegisterButton from "../components/RegisterButton";
import ErrorMessage from "../components/ErrorMessage";

function Form() {
    const {register, handleSubmit, formState: {errors}, getValues} = useForm();

    const validateEmail = (value) => {
        const emailRegex = /\w+@\w+\.\w+/;
        return emailRegex.test(value);
    }

    const confirmPassword = (value) => {
        return (value === getValues().password);
    }

    return (
        <form
            onSubmit={handleSubmit((data) => {
                console.log(JSON.stringify(data));
            })}
            className={classes.container}
        >
            <div>
                <Input
                    label="First Name"
                    name={"firstname"}
                    options={
                        {
                            required: true
                        }
                    }
                    register={register}
                    errors={errors.firstname}
                />
                {errors.firstname && errors.firstname.type === "required" &&
                    <ErrorMessage message="First Name is required" />
                }
            </div>
            <div>
                <Input
                    label="Last Name"
                    name="lastname"
                    options={
                        {
                            required: true
                        }
                    }
                    register={register}
                    errors={errors.lastname}
                />
                {errors.lastname && errors.lastname.type === "required" &&
                    <ErrorMessage message="Last Name is required" />
                }
            </div>
            <div>
                <Input
                    label="Email"
                    name="email"
                    options={
                        {
                            required: true,
                            validate: validateEmail
                        }
                    }
                    register={register}
                    errors={errors.email}
                />
                {errors.email && errors.email.type === "required" &&
                    <ErrorMessage message="Email is required" />
                }
                {errors.email && errors.email.type === "validate" &&
                    <ErrorMessage message="Email is not valid"/>
                }
            </div>
            <div>
                <Input
                    label="Phone Number"
                    name="phoneNumber"
                    options={
                        {
                            required: true,
                            pattern: /[0-9]{9}/
                        }
                    }
                    register={register}
                    errors={errors.phoneNumber}
                />
                {errors.phoneNumber && errors.phoneNumber.type === "required" &&
                    <ErrorMessage message="Phone Number is required" />
                }
                {errors.phoneNumber && errors.phoneNumber.type === "pattern" &&
                    <ErrorMessage message="Phone Number is not valid"/>
                }
            </div>
            <div>
                <Password
                    label="Password"
                    name="password"
                    options={
                        {
                            required: true,
                            minLength: 6
                        }
                    }
                    register={register}
                    errors={errors.password}
                />
                {errors.password && errors.password.type === "required" &&
                    <ErrorMessage message="Password is required" />
                }
                {errors.password && errors.password.type === "minLength" &&
                    <ErrorMessage message="Password must contain at least 6 characters" />
                }
            </div>
            <div>
                <Password
                    label="Repeat Password"
                    name="repeatPassword"
                    options={
                        {
                            required: true,
                            validate: confirmPassword
                        }
                    }
                    register={register}
                    errors={errors.repeatPassword}
                />
                {errors.repeatPassword && errors.repeatPassword.type === "required" &&
                    <ErrorMessage message="Repeat Password is required" />
                }
                {errors.repeatPassword && errors.repeatPassword.type === "validate" &&
                    <ErrorMessage message="Password' and 'Repeat password' must have the same values" />
                }
            </div>
            <div>
                <DateInput
                    label="Date Of Birth"
                    min="1900-01-01"
                    name="dateOfBirth"
                    options={
                        {
                            required: true,
                        }
                    }
                    register={register}
                    errors={errors.dateOfBirth}
                />
                {errors.dateOfBirth && errors.dateOfBirth.type === "required" &&
                    <ErrorMessage message="Date Of Birth is required"/>
                }
            </div>
            <Dropdown
                label="Gender"
                value1="Male"
                value2="Female"
                name="gender"
                register={register}
            />
            <Checkbox
                label="Driving License"
                name="drivingLicense"
                register={register}
            />
            <RegisterButton/>
        </form>
    )
}

export default Form;
