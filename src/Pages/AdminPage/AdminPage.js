import "./AdminPage.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function AdminPage() {
  const [Voucher, SetVoucher] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image:
      "https://boltagency.ca/content/images/2020/03/placeholder-images-product-1_large.png",
    country_id: "",
  });

  const dispatch = useDispatch();
  const voucherList = useSelector((state) => state.voucherList);
  const countryList = useSelector((state) => state.countryList);

  const addNewVoucher = (e) => {
    e.preventDefault();
    dispatch({
      type: "addNewVoucher",
      value: {
        id: voucherList.length + 1,
        ...Voucher,
        rating: {
          rate: 5,
          count: 100,
        },
      },
    });
    console.log(voucherList);
  };

  // Handel Input Change
  const handleChange = (e) => {
    SetVoucher({ ...Voucher, [e.target.name]: e.target.value });
  };

  // Handel Input Change
  // const handleFileChange = (e) => {
  //   SetVoucher({ ...Voucher, [e.target.name]: e.target.files[0] });
  // };

  // Update Voucher to server
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("title", Voucher.title);
  //   formData.append("price", Voucher.price);
  //   formData.append("category", Voucher.category);
  //   formData.append("description", Voucher.description);
  //   formData.append("image", Voucher.image);
  //   console.log(formData);
  //   console.log(Voucher);
  // };

  return (
    <div className="adminpage my-5">
      <div className="container">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="sent-tab"
              data-bs-toggle="tab"
              data-bs-target="#sent"
              type="button"
              role="tab"
              aria-controls="sent"
              aria-selected="true"
            >
              Sent to Fews
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="bulk-tab"
              data-bs-toggle="tab"
              data-bs-target="#bulk"
              type="button"
              role="tab"
              aria-controls="bulk"
              aria-selected="false"
            >
              Bulk Upload
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active my-4"
            id="sent"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <h2 className="my-2">Genrate Brand Voucher</h2>
            <form onSubmit={addNewVoucher}>
              <div className="row">
                <div className="col-lg-3">
                  <div className="form-group">
                    <label htmlFor="country_id">
                      Select a country for brand voucher*
                    </label>
                    <select
                      className="form-select"
                      id="country_id"
                      name="country_id"
                      onChange={handleChange}
                      value={Voucher.country_id}
                      required
                    >
                      <option defaultValue>All countries</option>
                      {countryList.map((country) => (
                        <option
                          value={country.country_id}
                          key={country.country_id}
                        >
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-3 mb-3">
                  <div className="form-group">
                    <label htmlFor="title">Voucher Title*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Voucher Title"
                      name="title"
                      onChange={handleChange}
                      value={Voucher.title}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-3 mb-3">
                  <div className="form-group">
                    <label htmlFor="price">Voucher Price*</label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      placeholder="Voucher Price"
                      name="price"
                      onChange={handleChange}
                      value={Voucher.price}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-3 mb-3">
                  <div className="form-group">
                    <label htmlFor="category">Voucher Category*</label>
                    <select
                      className="form-select"
                      id="category"
                      name="category"
                      onChange={handleChange}
                      value={Voucher.category}
                      required
                    >
                      <option defaultValue>Select Category</option>
                      <option value="electronics">Electronics</option>
                      <option value="jewelery">Jewelery</option>
                      <option value="women's clothing">Women's Clothing</option>
                      <option value="men's clothing">Men's Clothing</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 mb-3"></div>
                <div className="col-lg-3 mb-3">
                  <div className="form-group">
                    <label htmlFor="image">Voucher Image URL*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="image"
                      placeholder="Voucher Image URL"
                      name="image"
                      onChange={handleChange}
                      value={Voucher.image}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="description">Voucher Description*</label>
                    <textarea
                      type="text"
                      className="form-control form-control-textarea"
                      id="description"
                      name="description"
                      placeholder="Voucher Description"
                      onChange={handleChange}
                      value={Voucher.description}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-3 mb-3"></div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div
            className="tab-pane fade my-4"
            id="bulk"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
