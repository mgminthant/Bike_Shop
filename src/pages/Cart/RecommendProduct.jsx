import "../../assets/style/cart/recommend.css";

export default function RecommendProduct() {
  return (
    <section className="recommendations">
      <h2>We think you'll like these</h2>
      <div className="products">
        <div className="product-card">
          <img
            src="https://images.bike24.com/media/238/i/mb/f2/91/b2/powerbar-ride-energy-bbd1-1842978.jpg"
            alt="SCOTT 2.0L Elite Reservoir"
          />
          <p className="product-title">SCOTT 2.0L Elite Reservoir</p>
          <p className="product-price">€41.99 *</p>
        </div>
        <div className="product-card">
          <img
            src="https://images.bike24.com/media/238/i/mb/f2/91/b2/powerbar-ride-energy-bbd1-1842978.jpg"
            alt="KLICKfix Bikepack X Waterproof"
          />
          <p className="product-title">KLICKfix Bikepack X Waterproof</p>
          <p className="product-price">€104.99 *</p>
        </div>
        <div className="product-card">
          <img
            src="https://images.bike24.com/media/238/i/mb/f2/91/b2/powerbar-ride-energy-bbd1-1842978.jpg"
            alt="SCOTT HiLite 300 Saddle Bag"
          />
          <p className="product-title">SCOTT HiLite 300 Saddle Bag</p>
          <p className="product-price">€32.99 *</p>
        </div>
        <div className="product-card">
          <img
            src="https://images.bike24.com/media/238/i/mb/f2/91/b2/powerbar-ride-energy-bbd1-1842978.jpg"
            alt="Blackburn Grid Bottle Cage"
          />
          <p className="product-title">Blackburn Grid Bottle Cage</p>
          <p className="product-price">€9.99 *</p>
        </div>
      </div>
    </section>
  );
}
