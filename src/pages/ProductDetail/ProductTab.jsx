import {useState} from "react";

export default function ProductTab() {
  const [activeTab, setActiveTab] = useState("DESCRIPTION");

  return (
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
          className={`tab-btn ${activeTab === "AVAILABILITY" ? "active" : ""}`}
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
          className={`tab-btn ${activeTab === "MANUFACTURER" ? "active" : ""}`}
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
              The wind, that natural element that challenges cyclists and pushes
              them to their limits. Fight, fight and fight again against this
              invisible force that slows you down, reduces your speed and breaks
              your morale. But when this wind is tamed, it leads to new peak
              performances. It is this DNA that the new Xelius DRS embodies
              perfectly. This bike - a combination of Xelius SL and Aircode DRS
              - doesn't play with the wind, it faces it, challenges it and gets
              the best out of it.
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
              watts at high speeds on level ground. And in the race? A new speed
              rocket that helped Cassandre Beaugrand to victory at the Olympic
              Games. And will continue to push everyone's performance to the
              limit in the future!
            </p>

            <p>
              With the radical decision to combine the best of two bikes that
              have won numerous professional victories, Lapierre's engineers
              have made an important choice. Yet this bike is not just about
              speed: The sleek lines and simple design offer a completely new
              perspective. The completely revised 3D tubular technology frees up
              the entire seat tube so that it can deform along its entire
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
              Lapierre has been manufacturing high-quality bicycles since 1946.
              Based in Dijon, France, Lapierre combines French design flair with
              cutting-edge technology to create bikes that perform at the
              highest level of competition while maintaining comfort for
              everyday riders.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
