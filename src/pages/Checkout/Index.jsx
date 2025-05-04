import { useState } from "react";
import { useForm } from "react-hook-form";
// import { Home, Package, Store, CheckCircle, ChevronDown } from "lucide-react";
import { ImHome } from "react-icons/im";
import { FaBoxesPacking } from "react-icons/fa6";
import { FaStore } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { TbInvoice } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa6";

import Button from "../../components/ui/Button.jsx";
import Input from "../../components/ui/Input.jsx";
import "../../assets/style/checkout/checkout.css";

export default function CheckoutForm() {
  const [activeStep, setActiveStep] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState("24:46");
  const [deliveryOption, setDeliveryOption] = useState("same");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: "Germany",
      deliveryOption: "same",
    },
  });

  // Custom validation patterns
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phonePattern = /^[0-9]{6,15}$/;
  const postalCodePattern = /^[0-9]{5}$/;

  const onSubmit = (data) => {
    console.log(data);
    // Move to next step
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <div className="checkout-container">
      {/* Timer notification */}
      <div className="timer-notification">
        <p>
          Your products are reserved for you{" "}
          <span className="time-remaining">{timeRemaining} min</span>.
        </p>
      </div>

      {/* Checkout steps */}
      <div className="checkout-steps">
        <div className={`step ${activeStep === 1 ? "active" : ""}`}>
          1.MY DATA
        </div>
        <div className={`step ${activeStep === 2 ? "active" : ""}`}>
          2.PAYMENT
        </div>
        <div className={`step ${activeStep === 3 ? "active" : ""}`}>
          3.CONFIRM DATA
        </div>
      </div>

      {/* Login option */}
      <div className="login-option">
        <p>
          <a href="#" className="login-link">
            Login or sign up for faster checkout
          </a>
        </p>
      </div>

      <div className="checkout-layout">
        <div className="checkout-form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Contact details */}
            <div className="form-section">
              <h2 className="section-title">Contact details</h2>
              <div className="form-grid">
                <div className="form-field">
                  <Input
                    id="email"
                    placeholder="E-mail address*"
                    className={errors.email ? "input-error" : ""}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: emailPattern,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email.message}</p>
                  )}
                </div>
                <div className="form-field">
                  <Input
                    id="phone"
                    placeholder="Phone number, e.g. 1765xxxxx"
                    className={errors.phone ? "input-error" : ""}
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: phonePattern,
                        message: "Please enter a valid phone number",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="error-message">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Invoice address */}
            <div className="form-section">
              <h2 className="section-title">Invoice address</h2>
              <div className="form-grid">
                <div className="form-field">
                  <Input
                    id="firstName"
                    placeholder="First name*"
                    className={errors.firstName ? "input-error" : ""}
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p className="error-message">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="form-field">
                  <Input
                    id="lastName"
                    placeholder="Last name*"
                    className={errors.lastName ? "input-error" : ""}
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p className="error-message">{errors.lastName.message}</p>
                  )}
                </div>
                <div className="form-field">
                  <Input
                    id="street"
                    placeholder="Street*"
                    className={errors.street ? "input-error" : ""}
                    {...register("street", {
                      required: "Street is required",
                    })}
                  />
                  {errors.street && (
                    <p className="error-message">{errors.street.message}</p>
                  )}
                </div>
                <div className="form-field">
                  <Input
                    id="houseNumber"
                    placeholder="House number"
                    {...register("houseNumber")}
                  />
                </div>
                <div className="postal-city-container">
                  <div className="form-field">
                    <Input
                      id="postalCode"
                      placeholder="Postal code*"
                      className={errors.postalCode ? "input-error" : ""}
                      {...register("postalCode", {
                        required: "Postal code is required",
                        pattern: {
                          value: postalCodePattern,
                          message: "Please enter a valid postal code",
                        },
                      })}
                    />
                    {errors.postalCode && (
                      <p className="error-message">
                        {errors.postalCode.message}
                      </p>
                    )}
                  </div>
                  <div className="form-field">
                    <Input
                      id="city"
                      placeholder="City*"
                      className={errors.city ? "input-error" : ""}
                      {...register("city", {
                        required: "City is required",
                      })}
                    />
                    {errors.city && (
                      <p className="error-message">{errors.city.message}</p>
                    )}
                  </div>
                </div>
                <div className="form-field">
                  <Input
                    id="addressAddition"
                    placeholder="Address addition"
                    {...register("addressAddition")}
                  />
                </div>
                <div className="form-field">
                  <div className="country-selector">
                    <img
                      src="/placeholder.svg?height=20&width=30"
                      alt="Germany flag"
                      className="country-flag"
                    />
                    <span>Germany</span>
                    <FaChevronDown />
                  </div>
                  <input
                    type="hidden"
                    {...register("country")}
                    value="Germany"
                  />
                </div>
              </div>
            </div>

            {/* Delivery address */}
            <div className="form-section">
              <h2 className="section-title">Delivery address</h2>
              <div className="delivery-options">
                <div
                  className={`delivery-option ${
                    deliveryOption === "same" ? "selected" : ""
                  }`}
                  onClick={() => setDeliveryOption("same")}
                >
                  <input
                    type="radio"
                    
                    id="same"
                    value="same"
                    className="sr-only"
                    {...register("deliveryOption")}
                    checked={deliveryOption === "same"}
                    onChange={() => setDeliveryOption("same")}
                  />
                  <TbInvoice />
                  <span className="option-text">Same as invoice</span>
                </div>
                <div
                  className={`delivery-option ${
                    deliveryOption === "other" ? "selected" : ""
                  }`}
                  onClick={() => setDeliveryOption("other")}
                >
                  <input
                    type="radio"
                    id="other"
                    value="other"
                    className="sr-only"
                    {...register("deliveryOption")}
                    checked={deliveryOption === "other"}
                    onChange={() => setDeliveryOption("other")}
                  />
                  <ImHome />
                  <span className="option-text">Other address</span>
                </div>
                <div
                  className={`delivery-option ${
                    deliveryOption === "packstation" ? "selected" : ""
                  }`}
                  onClick={() => setDeliveryOption("packstation")}
                >
                  <input
                    type="radio"
                    id="packstation"
                    value="packstation"
                    className="sr-only"
                    {...register("deliveryOption")}
                    checked={deliveryOption === "packstation"}
                    onChange={() => setDeliveryOption("packstation")}
                  />
                  <FaBoxesPacking />
                  <span className="option-text">Packstation</span>
                </div>
                <div
                  className={`delivery-option ${
                    deliveryOption === "store" ? "selected" : ""
                  }`}
                  onClick={() => setDeliveryOption("store")}
                >
                  <input
                    type="radio"
                    id="store"
                    value="store"
                    className="sr-only"
                    {...register("deliveryOption")}
                    checked={deliveryOption === "store"}
                    onChange={() => setDeliveryOption("store")}
                  />
                  <FaStore />
                  <span className="option-text">Our store</span>
                </div>
              </div>
            </div>

            <Button type="submit" className="submit-button">
              Continue to Payment
            </Button>
          </form>
        </div>

        {/* Order summary */}
        <div className="order-summary">
          <div className="summary-card">
            <div className="summary-section">
              <h2 className="summary-title">DELIVERY TIME</h2>
              <p className="summary-text">
                BIKE24 generally only dispatches complete orders
              </p>
              <div className="status-item">
                <CiCircleCheck />
                <span className="status-text">In stock</span>
              </div>
              <div className="status-item">
                <CiCircleCheck />
                <span className="status-text">
                  Delivery time to Germany 1-3 working days
                </span>
              </div>
            </div>

            <div className="summary-section">
              <h2 className="summary-title">YOUR ORDER</h2>
              <div className="items-header">
                <button className="show-items-button">
                  <span>SHOW ITEMS</span>
                  <FaChevronDown />
                </button>
                <a href="#" className="edit-link">
                  edit
                </a>
              </div>
            </div>

            <div className="summary-section">
              <h3 className="summary-subtitle">ORDER SUMMARY (1 ARTICLES)</h3>
              <div className="price-row">
                <span className="price-label">
                  Total Product Value incl. VAT:
                </span>
                <span className="price-value">509,99 €</span>
              </div>
              <div className="price-row">
                <span className="price-label">Shipping cost:</span>
                <span className="price-value">2,49 €</span>
              </div>
              {/* <Separator className="separator" /> */}
              <div className="price-row total">
                <span className="price-label">Total amount incl. VAT:</span>
                <span className="price-value">512,48 €</span>
              </div>
              <div className="security-info">
                <span>Data securely SSL encrypted</span>
              </div>
            </div>

            <div className="business-section">
              <div className="business-info">
                <FaStore />
                <div className="business-text">
                  <p>You are shopping for a business?</p>
                  <p>Please create a Business Account to place your order.</p>
                  <a href="#" className="business-link">
                    Create a new account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
