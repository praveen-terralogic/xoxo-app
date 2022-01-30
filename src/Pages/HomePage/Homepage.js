import './Homepage.css';
import {useState, useEffect} from "react";
import axios from "axios";
import Sort from '../../Components/Sort/Sort';
import Sidebar from '../../Components/Sidebar/Sidebar';
import VoucherCard from '../../Components/VoucherCard/VoucherCard';

function Homepage() {
  const [VoucherList, SetVoucherList] = useState([]);
  const [CategoriesList, SetCategoriesList] = useState([]);
  const [SortFilter, SetSortFilter] = useState("a-z");
  const [IsLoading, SetIsLoading] = useState(false);

  // Fetch books from server
  const fetchVoucher = () => {
    axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      SetVoucherList(res.data);
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {

    // Start Loading data from server
    SetIsLoading(true);

    // Fetch voucher from server
    fetchVoucher();

    // Done Loading data from server
    SetIsLoading(false);

  },[]);

  // Handel Category Change
  const handleCategory = (category) => {
    if(CategoriesList.includes(category)){
      SetCategoriesList(CategoriesList.filter(value => value !== category));
    }
    else{
      SetCategoriesList([...CategoriesList,category]);
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
      <Sort Action={handleSort}/>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-3 p-0">
          <Sidebar CategoryData={[...new Set(VoucherList.map(item => item.category))]} Action={handleCategory}/>
          </div>
          <div className="col-lg-9">
            <main id='voucher-data'>
            {
                (IsLoading) ?
                // if loading data
                <p> Loading data...</p> 
                :
                // if loaded data
              <div className='row'>
              {
                // if sorting data "a-z" data
                (SortFilter === "a-z") ?
                // if no category selected
                (CategoriesList.length === 0) ?
                VoucherList.sort((a, b) => a.title.localeCompare(b.title)).map((voucher) => 
                <VoucherCard
                  key={voucher.id}
                  id={voucher.id}
                  VoucherImg={voucher.image}
                  VoucherTitle={voucher.title}
                  VoucherPrice={Math.floor(voucher.price)}
                />) : 
                // if some category selected
                VoucherList.filter(item => CategoriesList.includes(item.category)).sort((a, b) => a.title.localeCompare(b.title)).map((voucher) => 
                <VoucherCard
                  key={voucher.id}
                  id={voucher.id}
                  VoucherImg={voucher.image}
                  VoucherTitle={voucher.title}
                  VoucherPrice={Math.floor(voucher.price)}
                />
                ) 
                :
                // if sorting data "z-a" data
                (SortFilter === "z-a") ?
                // if no category selected
                (CategoriesList.length === 0) ?
                VoucherList.sort((a, b) => b.title.localeCompare(a.title)).map((voucher) => 
                <VoucherCard
                  key={voucher.id}
                  id={voucher.id}
                  VoucherImg={voucher.image}
                  VoucherTitle={voucher.title}
                  VoucherPrice={Math.floor(voucher.price)}
                />) : 
                // if some category selected
                VoucherList.filter(item => CategoriesList.includes(item.category)).sort((a, b) => b.title.localeCompare(a.title)).map((voucher) => 
                <VoucherCard
                  key={voucher.id}
                  id={voucher.id}
                  VoucherImg={voucher.image}
                  VoucherTitle={voucher.title}
                  VoucherPrice={Math.floor(voucher.price)}
                />
                ) 
                :
                // if sorting data "most-recent" data
                (CategoriesList.length === 0) ?
                VoucherList.map((voucher) => 
                <VoucherCard
                  key={voucher.id}
                  id={voucher.id}
                  VoucherImg={voucher.image}
                  VoucherTitle={voucher.title}
                  VoucherPrice={Math.floor(voucher.price)}
                />) : 
                VoucherList.filter(item => CategoriesList.includes(item.category)).map((voucher) => 
                <VoucherCard
                  key={voucher.id}
                  id={voucher.id}
                  VoucherImg={voucher.image}
                  VoucherTitle={voucher.title}
                  VoucherPrice={Math.floor(voucher.price)}
                />
                )
              }
              </div>
            }
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
