import React from 'react'
import EmployeeNavbar from './EmployeeNavbar'

const ViewAllEmployee = () => {
    return (
        <div>
            <EmployeeNavbar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <ol class="list-group list-group-numbered">
                            <li class="list-group-item">Gautham</li>
                            <li class="list-group-item">Liya</li>
                            <li class="list-group-item">Emmanuel</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllEmployee