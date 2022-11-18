import { useNavigate } from 'react-router-dom';

export default function() {

    const pagePath = useNavigate()
  return (
    <div className='buttons-back-forward-div'>
        <p className='button-back-forward'
            onClick={() => {
                pagePath(-1);
            }}
        ><i className="fa fa-angle-left"></i></p>
        <p className='button-back-forward'
            onClick={() => {
                pagePath(1);
            }}
        ><i className="fa fa-angle-right"></i></p>

    </div>
  )
}

