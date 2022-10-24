import React, { useContext } from 'react'
import formatDistance from 'date-fns/formatDistance'
import DevContext from '../context/developers/DevContext';
import './Developer.css'
const Developer = (props) => {
    const { developer, updatedev } = props;
    const context = DevContext;
    const datestr = developer.date;
    const str = formatDistance(
        new Date(datestr),
        new Date()
    );

    return (
        <div className="maindev">

            <div class="card text-center">
                <div className=" card-header   navbar-light na" >
                    {developer.role}
                </div>
                <div class="card-body">
                    <h5 class="card-title ">{developer.name}</h5>
                    <p class="card-text">{developer.description}</p>
                    <h6>{developer.email}</h6>
                    <a href = {developer.github}>Github</a> <br></br>
                    <a href = {developer.linkedin}>linkedin</a>
                    <p>{developer.contactNum}</p>
                    {/* <a href="/" class="btn btn-outline-dark">Let's make collabration</a> */}
                    <button className='btn btn-outline-dark'>Let's make collabration</button>
                </div>
                <div class="card-footer text-muted">
                    {/* {developer.date} */}
                    {str}
                </div>
            </div>
        </div>
    )
}

export default Developer

