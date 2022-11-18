import '../CSS/select.css'
import { useState, useEffect } from "react";
import getItemsByUrl from "../GETTERS/getItemsByUrl";
import { useNavigate, useParams } from 'react-router-dom';
import DisplaySimilars from '../DISPLAY/DisplaySimilars';
import DisplaySingleItem from '../DISPLAY/DisplaySingleItem';
import DisplayBackButton from '../DISPLAY/DisplayBackButton';

const SingleBeer = ({handleCartSummary,hideFilterButton}) => {
  
  const pageURL = useNavigate();
  const params = useParams();
  const itemId = params.itemId.slice(1)
  const url = `https://api.punkapi.com/v2/beers?&ids=${itemId}`
  const [selectedItem, setSelectedItem] = useState([]);
  
  useEffect(() => {
    try {
      getItemsByUrl(url).then(x => {
        setSelectedItem(x)
      })
  
    } catch (error) {
      pageURL('/Connection_Error');
      return;
      }
  },[url]);
  
  useEffect(() => {
    hideFilterButton();
  },[])

  window.scrollTo(0,300);
  
  return (
          selectedItem.map((item) => {
            return (
              <div key={item.id}>
              {/* <CreateFilter /> */}
              <DisplayBackButton />
              <DisplaySingleItem item={item} handleCartSummary={handleCartSummary} />
              <DisplaySimilars item={item} />
              </div>
            )
          })
  )
}

export default SingleBeer
