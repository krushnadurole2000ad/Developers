import React, { useContext } from 'react'
import formatDistance from 'date-fns/formatDistance'
import DevContext from '../context/developers/DevContext';
const Developer = (props) => {
    const { developer, updatedev } = props;
    const context = DevContext;
    const datestr = developer.date;
    const str = formatDistance(
        new Date(datestr),
        new Date()
    );

    return (
        <div>

            <div class="card text-center">
                <div class="card-header">
                    {developer.role}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{developer.name}</h5>
                    <p class="card-text">{developer.description}</p>
                    <h6>{developer.email}</h6>
                    <a href = {developer.github}>Github</a> <br></br>
                    <a href = {developer.linkedin}>linkedin</a>
                    <p>{developer.contactNum}</p>
                    <a href="/" class="btn btn-primary">Let's make collabration</a>
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

