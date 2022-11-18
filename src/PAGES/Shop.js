import '../CSS/display.css'
import '../CSS/filter.css'
import { useState, useEffect, useRef } from "react";
import getItemsByUrl from "../GETTERS/getItemsByUrl";
import DisplayShop from "../DISPLAY/DisplayShop";
import DisplayPagination from "../DISPLAY/DisplayPagination";
import CreateFilter from '../FILTER/CreateFilter'
import { useNavigate, useParams } from 'react-router-dom';
import checkPageUrlExists from '../OTHER/checkPageUrlExists';
import checkDefaultFilter from '../OTHER/checkDefaultFilter'


const Shop = ({beerType,displayFilterButton,filterStyle}) => {

    const pageURL = useNavigate()
    const currantPageParams = useParams()
    const [currantPage, setCurrantPage] = useState()
    useEffect(() => {
        setCurrantPage(currantPageParams.selectedPage)
    },[currantPageParams]);

    const defaultFilter = checkDefaultFilter();
    const [brewedAfter,setBrewedAfter] = useState(`&brewed_after=${defaultFilter.brewedAfter}`);
    const [brewedBefore,setBrewedBefore] = useState(`&brewed_before=${defaultFilter.brewedBefore}`);
    const [searchValue,setSearchValue] = useState(defaultFilter.searchValue)
    const handleFilter = (brewedAfter,brewedBefore,searchValue) => {
        setBrewedAfter(`&brewed_after=${brewedAfter}`);
        setBrewedBefore(`&brewed_before=${brewedBefore}`);
        setSearchValue(searchValue.toLowerCase());
        setCurrantPage(1);
        pageURL(`${beerType.path}/page=${1}`);

    }
    useEffect(() => {
        displayFilterButton();
    },)
    const brewedAfterRef = useRef();
    const brewedBeforeRef = useRef();
    const searchRef = useRef();
    const filterRef = {
        brewedAfterRef: brewedAfterRef,
        brewedBeforeRef:brewedBeforeRef,
        searchRef:searchRef,
    }

    const [itemsList, setItemsList] = useState([]);
    const url = `https://api.punkapi.com/v2/beers?&page=${beerType.page}&per_page=60${brewedAfter}${brewedBefore}`;
    useEffect(() => {
        try {
            getItemsByUrl(url).then(x => {
                setItemsList(x)
                })
    
        } catch (error) {
            pageURL('/Connection_Error')
            return
        }
    },[url])

    useEffect(() => {
        localStorage.setItem('homeBeerType',JSON.stringify(beerType))
    },[beerType])

    const filteredBySearchItemsList = itemsList.filter((item) => {
        return item.name.toLowerCase().includes(searchValue)
    })
    const itemsAmountPerPage = 15;
    const pagesAmount = Math.ceil(filteredBySearchItemsList.length / itemsAmountPerPage);
    const start = (currantPage-1)*itemsAmountPerPage;
    const end = start + itemsAmountPerPage;
    const perPageItemsList = filteredBySearchItemsList.slice(start,end)
    
    const selectPage = (pageNumber) => {
        setCurrantPage(pageNumber)
        pageURL(`${beerType.path}/page=${pageNumber}`)
    }
    
    
    checkPageUrlExists(currantPageParams);
    
    return (    
        <>   
            <CreateFilter filterRef={filterRef} handleFilter={handleFilter} defaultFilter={defaultFilter} filterStyle={filterStyle}/> 
            <div id="display">
                <DisplayShop filterRef={filterRef} perPageItemsList={perPageItemsList} />
                <div id="pagination-bar">
                    <div id="pagination-display-bar">
                        <DisplayPagination 
                        pagesAmount={pagesAmount}
                        currantPage={currantPage}
                        selectPage={selectPage}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
