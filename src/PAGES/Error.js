import cleanGoBackStorage from "../OTHER/cleanGoBackStorage";
import { useEffect } from 'react' 

const Error = ({hideFilterButton}) => {
  
  cleanGoBackStorage();
  useEffect(() => {
    hideFilterButton();
  },[])

  return (
    <div id='display'>
      404 Error, page not found !
    </div>
  )
}

export default Error
