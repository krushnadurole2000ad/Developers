import React,{useContext} from 'react'
import DevContext from '../context/developers/DevContext';
const Developer = (props) => {
    const {developer,updatedev} = props;
    const context = DevContext;

  return (
    <div>
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        {/* <h5 className="card-title">  {developer.name}</h5> */}
                        <h5 className="card-title"> {developer.description}</h5>
                        {/* <i className="fa-solid fa-trash-can  mx-2" onClick={() => { deletenote(developer._id); props.showAlert("Deleted successfully", "success"); }}></i> */}
                        {/* <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(developer) }}></i> */}
                    </div>
                    <p className="card-text">{developer.name}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Developer