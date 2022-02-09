import "./VoucherCard.css";
import { Link } from "react-router-dom";

function VoucherCard(props) {
  const FixURL = (url) =>
    url
      .replace(/[^a-zA-Z ]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
  return (
    <div className="col-md-4 col-lg-4 col-xl-3 voucher-col">
      <div className="voucher-card">
        <div className="voucher-card-inner">
          <div className="voucher-card-image text-center">
            <Link
              to={`/voucher/${FixURL(props.VoucherInfo.title)}`}
              className="text-decoration-none"
            >
              <img
                className="img-fluid"
                src={props.VoucherInfo.image}
                alt="Hello"
              />
            </Link>
          </div>
          <div className="voucher-card-content">
            <Link
              to={`/voucher/${FixURL(props.VoucherInfo.title)}`}
              className="text-decoration-none"
            >
              <h2 title={props.VoucherInfo.title} className="voucher-title">
                {props.VoucherInfo.title}
              </h2>
            </Link>
            <div className="voucher-option mt-1">
              <div className="voucher-option-price">
                <label htmlFor="voucher-price1">INR</label>
                <select
                  className="form-select voucher-price"
                  id="voucher-price1"
                >
                  <option defaultValue vlaue="a-z">
                    {Math.floor(props.VoucherInfo.price)}
                  </option>
                  <option value="z-a">
                    {Math.floor(props.VoucherInfo.price) * 2}
                  </option>
                  <option value="most-resent">
                    {Math.floor(props.VoucherInfo.price) * 3}
                  </option>
                </select>
              </div>
              <div className="voucher-option-quantity">
                <label
                  htmlFor="voucher-quantity1"
                  className="invisible pe-none"
                >
                  Quantity
                </label>
                <input
                  className="form-control voucher-quantity"
                  type="number"
                  id="voucher-quantity1"
                  min="1"
                  max="50"
                  defaultValue="1"
                />
              </div>
            </div>
            <button type="button" className="btn btn-sm btn-cta-cart mt-3">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoucherCard;
