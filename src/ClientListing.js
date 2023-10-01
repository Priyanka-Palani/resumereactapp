
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ClientListing = () => {
    const [clientdata, clientdatachange] = useState(null);

    const navigate = useNavigate();

    const LoadDetail = (id) => {navigate("/clienttt/detail/" + id);}
    const LoadEdit = (id) => {navigate("/clienttt/edit/" + id);}
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/clienttt/" + id, {method: "DELETE"})
            .then((res) => {alert('Removed successfully.')
                window.location.reload();}).catch((err) => {console.log(err.message)})
        }
    }
    useEffect(() => {
        fetch("http://localhost:8000/clienttt").then((res) => {return res.json();})
        .then((resp) => {clientdatachange(resp);})
        .catch((err) => {console.log(err.message);})
    }, [])
    return (
        <div className="container">
        <div className="card">
        <div className="card-title">
        <h2>Welcome To Resume Builder</h2>
        </div>
        <div className="card-body">
        <div className="divbtn">
            <Link to="clienttt/create" className="btn btn-success">Add New (+)</Link>
        </div>
        <table className="table table-bordered">
            <thead className="text-white bg-dark">
                <tr>
                    <td>Name</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {clientdata && clientdata.map(item => (
                    <tr>
                        <td>{item.name}</td>
                            <td><button onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</button>
                            <button onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</button>
                            <button onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</button>
                        </td>
                    </tr>
            ))
            } 
            </tbody>
        </table>
        </div>
        </div>
        </div>
    );
}

export default ClientListing;