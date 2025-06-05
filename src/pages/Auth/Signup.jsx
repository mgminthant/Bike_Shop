import React, {useEffect} from "react";
import {useState} from "react";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6";
import {useForm} from "react-hook-form";
import useValdate from "../../hooks/useValidate";

import '../../assets/style/auth/createaccount.css'

const CreateAccount = () => {
    const [showEye, setShowEye] = useState(false);
    const [checked, setChecked] = useState("mr");
    const [cls, setCls] = useState("");
    const [text, setText] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        trigger,
        formState: {errors, isSubmitted},
    } = useForm();

    const email = watch("email");
    const password = watch("password");
    const onSubmit = () => {
    };

    useEffect(() => {
        const strength = useValdate(password);
        if (strength === 1) {
            setCls("red");
            setText("Add another word or two. Uncommon words are better.");
        }
        if (strength === 2) {
            setCls("yellow");
        }
        if (strength === 3) {
            setCls("orange");
            setText("");
        }
        if (strength === 4) setCls("green");
    }, [password]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="create-account-parent">
                <h1>Create Account</h1>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                </p>

                <h4>ACCESS DATA</h4>
                <div className="line"></div>
                <div className="email-join-parent">
                    <div className="did-floating-label-content">
                        <input
                            type="text"
                            placeholder=" "
                            className="did-floating-input"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {isSubmitted && errors.email && (
                            <small>{errors.email.message}</small>
                        )}
                        <label htmlFor="" className="did-floating-label">
                            E-mail address*
                        </label>
                    </div>
                    <div className="did-floating-label-content">
                        <input
                            type="text"
                            placeholder=" "
                            className="did-floating-input"
                            {...register("repeatemail", {
                                required: "Email is required",
                                validate: (value) =>
                                    value === email || "This email do not match",
                            })}
                            onBlur={() => trigger("repeatemail")}
                        />
                        {errors.repeatemail && <small>{errors.repeatemail.message}</small>}
                        <label htmlFor="" className="did-floating-label">
                            Repeat e-mail address*
                        </label>
                    </div>
                    <div className={`create-acc-pw `}>
                        <span>Your password must have at least 8 characters.</span>
                        <div className="did-floating-label-content">
                            <input
                                type={showEye ? "text" : "password"}
                                placeholder=" "
                                className="did-floating-input"
                                {...register("password", {required: "Password is required"})}
                            />
                            {errors.password && <small>{errors.password.message}</small>}
                            <label htmlFor="" className="did-floating-label">
                                Password*
                            </label>
                            <section className={`${(password !== "" && password) ? "value" : ""}`}>
                                {showEye ? (
                                    <FaRegEye onClick={() => setShowEye(false)}/>
                                ) : (
                                    <FaRegEyeSlash
                                        onClick={() => {
                                            if (!password || password === "") {
                                                return;
                                            }
                                            setShowEye(true);
                                        }}
                                    />
                                )}
                            </section>
                        </div>
                        <div className={`pwstrength ${cls}`}>
                            <div className=""></div>
                        </div>
                        <span>{text}</span>
                    </div>
                </div>
                <div className="pw-line"></div>
                <h4>PERSONAL DATA</h4>
                <div className="line"></div>
                <span className="title">Title*</span>
                <div className="radio-join-parent">
                    <div className="" onClick={() => setChecked("mr")}>
                        <input
                            type="radio"
                            value="mr"
                            name="title"
                            onChange={(e) => setChecked(e.target.value)}
                            checked={checked === "mr"}
                        />
                        <label htmlFor="Mr">Mr</label>
                    </div>
                    <div className="" onClick={() => setChecked("mrs")}>
                        <input
                            type="radio"
                            value="mrs"
                            name="title"
                            onChange={(e) => setChecked(e.target.value)}
                            checked={checked === "mrs"}
                        />
                        <label htmlFor="Mrs">Mrs</label>
                    </div>
                    <div className="" onClick={() => setChecked("company")}>
                        <input
                            type="radio"
                            value="company"
                            name="title"
                            onChange={(e) => setChecked(e.target.value)}
                            checked={checked === "company"}
                        />
                        <label htmlFor="Company">Company</label>
                    </div>
                </div>
                <div className="name-join-parent">
                    <div className="did-floating-label-content">
                        <input
                            type="text"
                            placeholder=" "
                            className="did-floating-input"
                            {...register("company", {
                                required: "Company is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9][A-Za-z0-9 ,.'-_]{0,98}[A-Za-z0-9.]$/,
                                    message: "Company name is invalid",
                                },
                            })}
                        />
                        {errors.company && <small>{errors.company.message}</small>}
                        <label htmlFor="" className="did-floating-label">
                            Company
                        </label>
                    </div>
                    <div></div>
                    <div className="did-floating-label-content">
                        <input
                            type="text"
                            placeholder=" "
                            className="did-floating-input"
                            {...register("firstname", {
                                required: "Firstname is required",
                                pattern: {
                                    value: /^[a-zA-Z]+(([' -][A-Za-z])?[A-Za-z]*)*$/,
                                    message: "Name is invalid",
                                },
                            })}
                        />
                        {errors.firstname && <small>{errors.firstname.message}</small>}
                        <label htmlFor="" className="did-floating-label">
                            First name*
                        </label>
                    </div>
                    <div className="did-floating-label-content">
                        <input
                            type="text"
                            placeholder=" "
                            className="did-floating-input"
                            {...register("lastname", {
                                required: "Lastname is required",
                                pattern: {
                                    value: /^[a-zA-Z]+(([' -][A-Za-z])?[A-Za-z]*)*/,
                                    message: "Name is invalid",
                                },
                            })}
                        />
                        {errors.lastname && <small>{errors.lastname.message}</small>}
                        <label htmlFor="" className="did-floating-label">
                            Last name*
                        </label>
                    </div>
                    <div className="did-floating-label-content">
                        <input
                            type="text"
                            placeholder=" "
                            className="did-floating-input"
                            {...register("streetandhousenumber", {
                                required: "street and house number is required",
                                pattern: {
                                    value: /^[0-9a-zA-Z]+$/,
                                    message: "House number contain only letter and number",
                                },
                            })}
                        />
                        {errors.streetandhousenumber && (
                            <small>{errors.streetandhousenumber.message}</small>
                        )}
                        <label htmlFor="" className="did-floating-label">
                            Street and house number*
                        </label>
                    </div>
                    <div className="did-floating-label-content">
                        <input
                            type="text"
                            placeholder=" "
                            className="did-floating-input"
                            {...register("addressaddition", {
                                required: "address addition is required",
                            })}
                        />
                        {errors.addressaddition && (
                            <small>{errors.addressaddition.message}</small>
                        )}
                        <label htmlFor="" className="did-floating-label">
                            Address addition
                        </label>
                    </div>
                    <div className="postal-code-join-parent">
                        <div className="did-floating-label-content">
                            <input
                                type="text"
                                placeholder=" "
                                className="did-floating-input"
                                {...register("postalcode", {
                                    required: "postal code is required",
                                    pattern: {
                                        value: /^[0-9]{5}$/,
                                        message: "Postal code must be 5 digits",
                                    },
                                })}
                            />
                            {errors.postalcode && <small>{errors.postalcode.message}</small>}
                            <label htmlFor="" className="did-floating-label">
                                Postal code*
                            </label>
                        </div>
                        <div className="did-floating-label-content">
                            <input
                                type="text"
                                placeholder=" "
                                className="did-floating-input"
                                {...register("city", {required: "city is required"})}
                            />
                            {errors.city && <small>{errors.city.message}</small>}
                            <label htmlFor="" className="did-floating-label">
                                City*
                            </label>
                        </div>
                    </div>
                    <div className="did-floating-label-content">
                        <input
                            type="text"
                            placeholder=" "
                            className="did-floating-input"
                            {...register("email", {
                                required: "This field required",
                                pattern: {
                                    value:
                                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                    message: "Invalid email address or phone number",
                                },
                            })}
                        />
                        {errors.emialcus && <small>{errors.emialcus.message}</small>}
                        <label htmlFor="" className="did-floating-label">
                            Enter email address or customer number*
                        </label>
                    </div>
                </div>
                <div className="line"></div>
                <div className="subscribe-join-parent">
                    <input type="checkbox"/>
                    <label htmlFor="">
                        Yes, I would like to subscribe to your newsletter.
                    </label>
                </div>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                    a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop publishing packages and web page editors now use
                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
                    still in their infancy. Various versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like).
                </p>
                <div className="btn-container">
                    <button type="submit">REGISTER</button>
                </div>
            </div>
        </form>
    );
};

export default CreateAccount;
