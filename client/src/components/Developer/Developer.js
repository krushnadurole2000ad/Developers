import React, { useContext } from 'react'
import formatDistance from 'date-fns/formatDistance'
import DevContext from '../../context/developers/DevContext';
import '../Developer/Developer.css'
const Developer = (props) => {
    const { developer, updateDev } = props;
    const context = useContext(DevContext);
    const datestr = developer.date;
    const str = formatDistance(
        new Date(datestr),
        new Date()
    );
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const datefinal = new Date(developer.date).toLocaleString('en-US',options, {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        });
    const {deletedev} = context;
    return (
        <div className="maindev">
            <div className="maindev card  text-center">
                <div className=" card-header   navbar-light na" >
                    {developer.role}
                </div>
                <div class="card-body">
                    <h5 class="card-title ">{developer.name}</h5>
                    <p class="card-text">{developer.description}</p>
                    <h6>{developer.email}</h6>
                    <a href={developer.github}>Github</a> <br></br>
                    <a href={developer.linkedin}>linkedin</a>
                    <p>{developer.contactNum}</p>
                    {/* <a href="/" class="btn btn-outline-dark">Let's make collabration</a> */}
                    <button className='btn btn-outline-dark'>Let's make collabration</button>
                </div>
                <div>
                    <i className="fa-solid fa-trash-can  mx-2" onClick={() => { deletedev(developer._id); props.showAlert("Deleted Successfully","success") }}></i>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateDev(developer); }}></i>
                </div>
                <div class="card-footer text-muted">
                    {/* {developer.date} */}
                    {/* {str} */}
                    {datefinal}
                </div>
            </div>
        </div>
    )
}

export default Developer

