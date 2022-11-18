import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/showSimilar.css'
import getItemsByUrl from "../GETTERS/getItemsByUrl";
import selectItem from '../OTHER/selectItem';

export default function({item}) {

    const pageURL = useNavigate();
    let alcoholGT;
    (Number(item.abv) >= 1 ? alcoholGT = Math.floor(Number(item.abv) - 1) : alcoholGT = 0)
    let alcoholLT = Math.ceil(Number(item.abv) + 1);
    let bitternessGT;
    (Number(item.abv) >= 1 ? bitternessGT = Math.floor(Number(item.abv) - 1) : bitternessGT = 0)
    const bitternessLT = Math.ceil(Number(item.ibu) + 10);
    const url = `https://api.punkapi.com/v2/beers?abv_gt=${alcoholGT}&abv_lt=${alcoholLT}&ibu_gt=${bitternessGT}&ibu_lt=${bitternessLT}`
    const [similarItemsList, setSimilarItemsList] = useState([]);
    useEffect(() => {
        try {
            getItemsByUrl(url).then(x => {
                setSimilarItemsList(x)
            })
    
        } catch (error) {
            pageURL('/Connection_Error');
            return;
            }
    },[url])

    const select = (id) => {
        selectItem(id,pageURL);
    }


    return (
    <div key={"similarItemDivId"} id="similarItemDivId">
        <div id="you-may-like">
        YOU MAY ALSO LIKE<br></br>similar items {`(${similarItemsList.length})`}
        </div>
        <div id="similar-items-bar" className="similar-items-bar">
            <button id="scroll-left" onClick={() => {
                let leftStep = document.querySelector(".items-scroll-bar")
                leftStep.scrollBy(200,0)
            }}><i className="fa fa-angle-left"></i></button>
            <div id="items-scroll-bar" className="items-scroll-bar">
                {similarItemsList.map((item) => {
                    let price;
                    try {
                    price = `$${item.srm.toFixed(2)}`;
                    } catch (error) {
                        price = `$${item.srm}`;
                    }
                    return(
                        <div key={item.id} className="similar-item-element">
                            <img className="similar-item-element-image"
                            alt="Sorry, no picture to show"
                            src={item.image_url}
                            ></img>
                            <p className="similar-item-element-view" onClick={() => {
                                select(item.id)
                            }}>VIEW</p>
                            <p className="similar-item-alcohol">{`${item.abv}%`}</p>
                            <p className="similar-item-bitterness">{`bitterness ${item.ibu}`}</p>
                            <p className="similar-item-name">{item.name}</p>
                            <p className="similar-item-price">{price}</p>
                        
                        </div>
                    )
                })}
            </div>
            <button id="scroll-right" onClick={() => {
            let leftStep = document.querySelector(".items-scroll-bar")
            leftStep.scrollBy(-200,0)
            }}><i className="fa fa-angle-right"></i></button>
        </div>
    </div>
  )
}


