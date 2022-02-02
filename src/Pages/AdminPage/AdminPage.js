import "./AdminPage.css";
import { useState } from "react";

function AdminPage() {
  const [VoucherList, SetVoucherList] = useState([]);
  const [Voucher, SetVoucher] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: null,
  });

  // Handel Input Change
  const handleChange = (e) => {
    SetVoucher({ ...Voucher, [e.target.name]: e.target.value });
  };

  // Handel Input Change
  const handleFileChange = (e) => {
    SetVoucher({ ...Voucher, [e.target.name]: e.target.files[0] });
  };

  // Update Voucher to server
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", Voucher.title);
    formData.append("price", Voucher.price);
    formData.append("category", Voucher.category);
    formData.append("description", Voucher.description);
    formData.append("image", Voucher.image);
    console.log(formData);
  };

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
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-3">
                  <div className="form-group">
                    <label htmlFor="sort-select">
                      Select a country for brand voucher
                    </label>
                    <select className="form-select" id="sort-select" required>
                      <option defaultValue value="a-z">
                        All countries
                      </option>
                      <option value="z-a">Name Z to A</option>
                      <option value="most-recent">Most Recent</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-3 mb-3">
                  <div className="form-group">
                    <label htmlFor="title">Voucher Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Voucher Title*"
                      name="title"
                      onChange={handleChange}
                      value={Voucher.title}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-3 mb-3">
                  <div className="form-group">
                    <label htmlFor="price">Voucher Price</label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      placeholder="Voucher Price*"
                      name="price"
                      onChange={handleChange}
                      value={Voucher.price}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-3 mb-3">
                  <div className="form-group">
                    <label htmlFor="category">Voucher Category</label>
                    <select
                      className="form-select"
                      id="category"
                      name="category"
                      onChange={handleChange}
                      value={Voucher.category}
                      required
                    >
                      <option defaultValue>Select Category</option>
                      <option value="1">Electronics</option>
                      <option value="2">Jewelery</option>
                      <option value="3">Women's Clothing</option>
                      <option value="4">Men's Clothing</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 mb-3"></div>
                <div className="col-lg-3 mb-3">
                  <div className="form-group">
                    <label htmlFor="image">Voucher Image</label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="image"
                      name="image"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="description">Voucher Description</label>
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
