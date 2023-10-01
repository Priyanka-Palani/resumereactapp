import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const ClientDetail = () => {
    const { clientid } = useParams();

    const [clientdata, clientdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/clienttt/" + clientid).then((res) => {
            return res.json();
        }).then((resp) => {
            clientdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div className="container">
      <div className="card row" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>Resume Details</h2>
        </div>
        <div className="card-body"></div>

        {clientdata && (
          <form className="row">
            

            <div className="col-lg-4">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={clientdata.name}
                  className="form-control"
                  readOnly
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  value={clientdata.email}
                  className="form-control"
                  readOnly
                />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  value={clientdata.phone}
                  className="form-control"
                  readOnly
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  value={clientdata.address}
                  className="form-control"
                  readOnly
                />
              </div>
            </div>

            <div className="col-lg-12">
              <h4>My Education</h4>
              </div>
              <div className="col-lg-4">
              <div className="form-group">
                <label>Institute</label>
                <input
                  type="text"
                  value={clientdata.institute}
                  className="form-control"
                  readOnly
                />
              </div>
              </div>
              <div className="col-lg-4">
              <div className="form-group">
                <label>Degree</label>
                <input
                  type="text"
                  value={clientdata.degree}
                  className="form-control"
                  readOnly
                />
              </div>
              </div>
              <div className="col-lg-4">
              <div className="form-group">
                <label>Year</label>
                <input
                  type="text"
                  value={clientdata.year}
                  className="form-control"
                  readOnly
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>Skills</label>
                <input
                  type="text"
                  value={clientdata.skills}
                  className="form-control"
                  readOnly
                />
              </div>
            </div>

            

            <div className="col-lg-12">
              <Link className="btn btn-danger" to="/">
                Back to Listing
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};


export default ClientDetail;
