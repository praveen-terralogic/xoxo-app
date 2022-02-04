import "./Homepage.css";
import { useState } from "react";
import Sort from "../../Components/Sort/Sort";
import Sidebar from "../../Components/Sidebar/Sidebar";
import VoucherCard from "../../Components/VoucherCard/VoucherCard";
import { useSelector } from "react-redux";

function Homepage() {
  const [CategoriesList, SetCategoriesList] = useState([]);
  const [SortFilter, SetSortFilter] = useState("a-z");

  const voucherList = useSelector((state) => state.voucherList);
  console.log(voucherList);

  // Handel Category Change
  const handleCategory = (category) => {
    if (CategoriesList.includes(category)) {
      SetCategoriesList(CategoriesList.filter((value) => value !== category));
    } else {
      SetCategoriesList([...CategoriesList, category]);
    }
    // console.log(CategoriesList);
    // console.log(category);
  };

  // Handel Sort Change
  const handleSort = (event) => {
    SetSortFilter(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div className="homepage">
      <Sort Action={handleSort} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 p-0 sidebar-wrapper">
            <Sidebar
              CategoryData={[
                ...new Set(voucherList.map((item) => item.category)),
              ]}
              Action={handleCategory}
            />
          </div>
          <div className="col-lg-9">
            <main id="voucher-data">
              <div className="row">
                {
                  // if sorting data "a-z" data
                  SortFilter === "a-z"
                    ? // if no category selected
                      CategoriesList.length === 0
                      ? voucherList
                          .sort((a, b) => a.title.localeCompare(b.title))
                          .map((voucher) => (
                            <VoucherCard
                              key={voucher.id}
                              VoucherInfo={voucher}
                            />
                          ))
                      : // if some category selected
                        voucherList
                          .filter((item) =>
                            CategoriesList.includes(item.category)
                          )
                          .sort((a, b) => a.title.localeCompare(b.title))
                          .map((voucher) => (
                            <VoucherCard
                              key={voucher.id}
                              VoucherInfo={voucher}
                            />
                          ))
                    : // if sorting data "z-a" data
                    SortFilter === "z-a"
                    ? // if no category selected
                      CategoriesList.length === 0
                      ? voucherList
                          .sort((a, b) => b.title.localeCompare(a.title))
                          .map((voucher) => (
                            <VoucherCard
                              key={voucher.id}
                              VoucherInfo={voucher}
                            />
                          ))
                      : // if some category selected
                        voucherList
                          .filter((item) =>
                            CategoriesList.includes(item.category)
                          )
                          .sort((a, b) => b.title.localeCompare(a.title))
                          .map((voucher) => (
                            <VoucherCard
                              key={voucher.id}
                              VoucherInfo={voucher}
                            />
                          ))
                    : // if sorting data "most-recent" data
                    CategoriesList.length === 0
                    ? // if no category selected
                      voucherList.map((voucher) => (
                        <VoucherCard key={voucher.id} VoucherInfo={voucher} />
                      ))
                    : // if some category selected
                      voucherList
                        .filter((item) =>
                          CategoriesList.includes(item.category)
                        )
                        .map((voucher) => (
                          <VoucherCard key={voucher.id} VoucherInfo={voucher} />
                        ))
                }
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
