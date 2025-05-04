import { useState } from "react";
import { useForm } from "react-hook-form";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiMail, CiCircleInfo } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";

import "../../../assets/style/product/product-detail.css";

export default function ProductDetail() {
  const [activeTab, setActiveTab] = useState("DESCRIPTION");
  const [quantity, setQuantity] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      frameSize: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", { ...data, quantity });
    alert(
      `Added to cart: Lapierre XELIUS DRS 8.0 C2 - Size: ${data.frameSize}, Quantity: ${quantity}`
    );
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="product-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <a href="#">Home</a>
        <span>&gt;</span>
        <a href="#">Cycling</a>
        <span>&gt;</span>
        <a href="#">Bikes</a>
        <span>&gt;</span>
        <a href="#">Road Bikes</a>
        <span>&gt;</span>
        <a href="#">Aero Road Bikes</a>
      </div>

      {/* Product Main Section */}
      <div className="product-main">
        <div className="product-gallery">
          <div className="main-image">
            <button className="gallery-nav prev">
              <FaAngleLeft />
            </button>
            <img
              src="/placeholder.svg?height=500&width=500"
              alt="Lapierre XELIUS DRS 8.0 C2 - Carbon Road Bike"
              className="product-image"
            />
            <button className="gallery-nav next">
              <FaAngleRight />
            </button>
          </div>
          <div className="thumbnail-container">
            <div className="thumbnail active">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Thumbnail 1"
              />
            </div>
            <div className="thumbnail">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Thumbnail 2"
              />
            </div>
            <div className="thumbnail">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Thumbnail 3"
              />
            </div>
            <div className="thumbnail">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Thumbnail 4"
              />
            </div>
            <div className="thumbnail zoom">
              <span className="zoom-icon">🔍</span>
            </div>
          </div>
        </div>

        <div className="product-info">
          <div className="price-guarantee">
            <span>Price guarantee</span>
            <CiCircleInfo />
          </div>

          <div className="brand">Lapierre</div>

          <h1 className="product-title">
            Lapierre XELIUS DRS 8.0 C2 - Carbon Road Bike - 2025 - black
          </h1>

          <div className="frame-size-info">
            <span>Bike frame size</span>
            <CiCircleInfo />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="frameSize">Frame Size</label>
              <div
                className={`select-wrapper ${errors.frameSize ? "error" : ""}`}
              >
                <select
                  id="frameSize"
                  {...register("frameSize", {
                    required: "Please select a frame size",
                  })}
                >
                  <option value="">Please select...</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
                <FaChevronDown />
              </div>
              {errors.frameSize && (
                <p className="error-message">{errors.frameSize.message}</p>
              )}
            </div>

            <div className="price-section">
              <div className="discount-detail">Discount 8%</div>
              <div className="original-price">5.999,00 € RRP</div>
              <div className="current-price">5.499,00 €</div>
            </div>

            <div className="availability-section">
              <div className="assembling">
                <span className="label">Assembling</span>
                <span className="value">Bulky good</span>
              </div>
              <div className="availability">
                <span className="label">Availability:</span>
                <span className="value highlight">please select.</span>
              </div>
            </div>

            <div className="shipping-info">
              <p>
                Price incl. VAT excl. <a href="#">Shipping & Handling</a>
              </p>
              <p>
                + Bulky Goods/Item 9,99 € for shipment to{" "}
                <a href="#">Germany</a>.{" "}
                <a href="#">Bike assembling and shipping</a>
              </p>
            </div>

            <div className="add-to-cart-section">
              <div className="quantity-selector">
                <button
                  type="button"
                  className="quantity-btn"
                  onClick={decrementQuantity}
                >
                  <FiMinus />
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="quantity-input"
                />
                <button
                  type="button"
                  className="quantity-btn"
                  onClick={incrementQuantity}
                >
                  <FiPlus />
                </button>
              </div>
              <button type="submit" className="add-to-cart-btn">
                ADD TO CART
              </button>
            </div>

            <div className="additional-actions">
              <button type="button" className="wishlist-btn">
                <IoMdHeartEmpty />
                <span>Add to wishlist</span>
              </button>
              <button type="button" className="support-btn">
                <CiMail />
                <span>E-Mail Support</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Tabs */}
      <div className="product-tabs">
        <div className="tabs-header">
          <button
            className={`tab-btn ${activeTab === "DESCRIPTION" ? "active" : ""}`}
            onClick={() => setActiveTab("DESCRIPTION")}
          >
            DESCRIPTION
          </button>
          <button
            className={`tab-btn ${activeTab === "FACT SHEET" ? "active" : ""}`}
            onClick={() => setActiveTab("FACT SHEET")}
          >
            FACT SHEET
          </button>
          <button
            className={`tab-btn ${
              activeTab === "AVAILABILITY" ? "active" : ""
            }`}
            onClick={() => setActiveTab("AVAILABILITY")}
          >
            AVAILABILITY
          </button>
          <button
            className={`tab-btn ${activeTab === "RATINGS" ? "active" : ""}`}
            onClick={() => setActiveTab("RATINGS")}
          >
            RATINGS (0)
          </button>
          <button
            className={`tab-btn ${
              activeTab === "MANUFACTURER" ? "active" : ""
            }`}
            onClick={() => setActiveTab("MANUFACTURER")}
          >
            MANUFACTURER
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "DESCRIPTION" && (
            <div className="description-content">
              <h2 className="section-title">
                Lapierre XELIUS DRS 8.0 C2 - Carbon Road Bike - 2025 - black
              </h2>
              <h3 className="section-subtitle">Performance meets comfort</h3>

              <p>
                The wind, that natural element that challenges cyclists and
                pushes them to their limits. Fight, fight and fight again
                against this invisible force that slows you down, reduces your
                speed and breaks your morale. But when this wind is tamed, it
                leads to new peak performances. It is this DNA that the new
                Xelius DRS embodies perfectly. This bike - a combination of
                Xelius SL and Aircode DRS - doesn't play with the wind, it faces
                it, challenges it and gets the best out of it.
              </p>

              <h3 className="section-subtitle">
                Features of the Lapierre XELIUS DRS 8.0
              </h3>

              <ul className="features-list">
                <li>SLI UD carbon frame</li>
                <li>SLI UD Carbon fork</li>
                <li>Shimano Ultegra Di2 2x12-speed drivetrain</li>
                <li>DT Swiss ERC 1600 wheelset</li>
                <li>Continental GP 5000S tires</li>
                <li>Lapierre carbon seatpost</li>
              </ul>

              <h3 className="section-subtitle">
                Details of the Lapierre XELIUS DRS 8.0
              </h3>

              <p>
                In the wind tunnel, the figures are clear: the aerodynamics are
                15% better than its predecessors. Expressed in watts, the
                outstanding performance is confirmed with a saving of up to 15
                watts at high speeds on level ground. And in the race? A new
                speed rocket that helped Cassandre Beaugrand to victory at the
                Olympic Games. And will continue to push everyone's performance
                to the limit in the future!
              </p>

              <p>
                With the radical decision to combine the best of two bikes that
                have won numerous professional victories, Lapierre's engineers
                have made an important choice. Yet this bike is not just about
                speed: The sleek lines and simple design offer a completely new
                perspective. The completely revised 3D tubular technology frees
                up the entire seat tube so that it can deform along its entire
                length. The result is significantly improved comfort that subtly
                complements the dynamic geometry of the rear triangle.
              </p>
            </div>
          )}

          {activeTab === "FACT SHEET" && (
            <div className="fact-sheet-content">
              <h3>Technical Specifications</h3>
              <table className="specs-table">
                <tbody>
                  <tr>
                    <td>Frame</td>
                    <td>SLI UD carbon</td>
                  </tr>
                  <tr>
                    <td>Fork</td>
                    <td>SLI UD Carbon</td>
                  </tr>
                  <tr>
                    <td>Drivetrain</td>
                    <td>Shimano Ultegra Di2 2x12-speed</td>
                  </tr>
                  <tr>
                    <td>Wheelset</td>
                    <td>DT Swiss ERC 1600</td>
                  </tr>
                  <tr>
                    <td>Tires</td>
                    <td>Continental GP 5000S</td>
                  </tr>
                  <tr>
                    <td>Seatpost</td>
                    <td>Lapierre carbon</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>7.8 kg (size M)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "AVAILABILITY" && (
            <div className="availability-content">
              <p>Please select a frame size to check availability.</p>
            </div>
          )}

          {activeTab === "RATINGS" && (
            <div className="ratings-content">
              <p>No ratings yet. Be the first to rate this product!</p>
            </div>
          )}

          {activeTab === "MANUFACTURER" && (
            <div className="manufacturer-content">
              <div className="manufacturer-logo">
                <img
                  src="/placeholder.svg?height=100&width=200"
                  alt="Lapierre Logo"
                />
              </div>
              <p>
                Lapierre has been manufacturing high-quality bicycles since
                1946. Based in Dijon, France, Lapierre combines French design
                flair with cutting-edge technology to create bikes that perform
                at the highest level of competition while maintaining comfort
                for everyday riders.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
