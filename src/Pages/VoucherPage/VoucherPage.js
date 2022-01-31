import './VoucherPage.css';
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";

function VoucherPage(props) {
    const [Voucher, SetVoucher] = useState({
        "id":4,
        "title":"Mens Casual Slim Fit",
        "price":15.99,
        "description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category":"men's clothing",
        "image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating":{"rate":2.1,"count":430}
    });

  return (
    <div className="voucherpage">
      <div className='container-fluid sort-bar'>
      <div className='sort-bar-left'>
        <ul className='breadcrumb mb-0'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Gift Vouchers</Link></li>
          <li><Link to="/">Category</Link></li>
          <li><Link to="/" className='active'>Gift Vouchers</Link></li>
        </ul>
      </div>
    </div>

    <div className='container-fluid voucher-wrapper'>
    <div className='voucher-wrapper-inner'>
        <div className='row'>
            <div className='col-12 col-lg-7'>
                <div className='voucher-wrapper-content'>
                    <h1>{Voucher.title}</h1>
                    <h4>Validity: 12 Months</h4>
                    <div className='row voucher-wrapper-option mt-1'>
                    <div className='col-5 voucher-wrapper-option-price'>
                    <label htmlFor="voucher-wrapper-price1">INR</label>
                    <select className="form-select voucher-wrapper-price" id="voucher-price1">
                        <option defaultValue vlaue="a-z">{Math.floor(Voucher.price)}</option>
                        <option value="z-a">{Math.floor(Voucher.price)*2}</option>
                        <option value="most-resent">{Math.floor(Voucher.price)*3}</option>
                    </select>
                    </div>
                    <div className='col-5 voucher-wrapper-option-quantity'>
                    <label htmlFor="voucher-wrapper-quantity1" className='invisible pe-none'>Quantity</label>
                    <input className='form-control voucher-wrapper-quantity' type="number" id='voucher-quantity1' min="1" max="50" defaultValue="1"/>
                    </div>
                    <div className='col-5'>
                    <button type="button" class="btn btn-cta-cart mt-3">Buy Now</button>
                    </div>
                    <div className='col-5'>
                    <button type="button" class="btn btn-cta-cart mt-3">Add to cart</button>
                    </div>
                </div>
                </div>
            </div>
            <div className='col-12 col-lg-5'>
            <div className='voucher-wrapper-image'>
            <div className='voucher-wrapper-image-inner text-center'>
                <img className='img-fluid' src={Voucher.image} alt={Voucher.title} />
            </div>
            </div>
            </div>
        </div>
    </div>
    </div>

    </div>
  );
}

export default VoucherPage;
