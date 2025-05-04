import React, { useEffect } from "react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useValdate from "../../hooks/useValidate";

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
    formState: { errors, isSubmitted },
  } = useForm();

  const email = watch("email");
  const password = watch("password");
  const onSubmit = () => {};

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
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="create-account-parent">
        <h1>Create Account</h1>
        <p>
          Create a new customer account by filling in the boxes below.
          Registration requires personal data. BIKE24 shall not illicitly pass
          on personal data to third parties. In particular BIKE24 shall not pass
          on any personal data to third parties for advertising purposes. For
          further information please visit the Privacy section of our website.
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
                  value: /^[A-Za-z.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <small>{errors.password.message}</small>}
              <label htmlFor="" className="did-floating-label">
                Password*
              </label>
              <section className={`${password !== "" ? "value" : ""}`}>
                {showEye ? (
                  <FaRegEye onClick={() => setShowEye(false)} />
                ) : (
                  <FaRegEyeSlash
                    onClick={() => {
                      if (password === "") {
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
                {...register("city", { required: "city is required" })}
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
              {...register("emialcus", {
                required: "This field required",
                pattern: {
                  value:
                    /^(\+?(\d{1,3})?[-. ]?(\(?\d{3}\)?)[-.\s]?(\d{3})[-.\s]?(\d{4})|^[a-zA-Z._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
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
          <input type="checkbox" />
          <label htmlFor="">
            Yes, I would like to subscribe to your newsletter.
          </label>
        </div>
        <p>
          In order to be able to offer you a service tailored to your interests,
          we collect and process data on user behaviour after your registration,
          in addition to your e-mail address, the language used and the data of
          your registration (double opt-in). This allows us to analyse, among
          other things, how and when certain products or websites are accessed
          by you. By sending this form, you consent to the processing of your
          data for the purpose of personalised advertising. You can revoke your
          consent at any time with effect for the future. In this case, you will
          continue to receive newsletters from us, but they will no longer be
          tailored to your interests. Each newsletter contains an unsubscribe
          link that takes you to a page where you can either unsubscribe from
          the personalisation only or unsubscribe from all newsletters sent by
          BIKE24 to your email address. Further information on the processing of
          your personal data and your rights as a person concerned can be found
          in our data protection declaration.
        </p>
        <div className="btn-container">
          <button type="submit">REGISTER</button>
        </div>
      </div>
    </form>
  );
};

export default CreateAccount;
