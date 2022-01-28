import './VoucherCard.css';

function VoucherCard(props) {
  return (
    <div className='col-md-4 col-lg-4 col-xl-3 voucher-col'>
      <div className='voucher-card'>
        <div className='voucher-card-inner'>
          <div className='voucher-card-image text-center'>
          <a href='/' className='text-decoration-none'>
            <img className="img-fluid" src={props.VoucherImg} alt="Hello" />
          </a>
          </div>
          <div className='voucher-card-content'>
          <a href='/' className='text-decoration-none'>
            <h2 title={props.VoucherTitle} className="voucher-title">{props.VoucherTitle}</h2>
          </a>
          <div className='voucher-option mt-1'>
            <div className='voucher-option-price'>
              <label htmlFor="voucher-price1">INR</label>
              <select className="form-select voucher-price" id="voucher-price1">
                <option defaultValue vlaue="a-z">{props.VoucherPrice}</option>
                <option value="z-a">{props.VoucherPrice*2}</option>
                <option value="most-resent">{props.VoucherPrice*3}</option>
              </select>
            </div>
            <div className='voucher-option-quantity'>
              <label htmlFor="voucher-quantity1" className='invisible pe-none'>Quantity</label>
              <input className='form-control voucher-quantity' type="number" id='voucher-quantity1' min="1" max="50" defaultValue="1"/>
            </div>
          </div>
          <button type="button" className="btn btn-sm btn-cta-cart mt-3">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoucherCard;
