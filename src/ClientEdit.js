import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ClientEdit = () => {
    const { clientid } = useParams();

    

    useEffect(() => {
        fetch("http://localhost:8000/clienttt/" + clientid).then((res) => {
            return res.json();
        }).then((resp) => {
            namechange(resp.name);
            emailchange(resp.email);
            phonechange(resp.phone);
            addresschange(resp.address)
            institutechange(resp.institute);
            degreechange(resp.degree);
            yearchange(resp.year);
            skillschange(resp.skills);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[address,addresschange]=useState("");
    const[institute,institutechange]=useState("");
    const[degree,degreechange]=useState("");
    const[year,yearchange]=useState("");
    const[skills,skillschange]=useState("");
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const clientdata={name,email,phone,address,institute,degree,year,skills};
      

      fetch("http://localhost:8000/clienttt/"+clientid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(clientdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })
    }
    return ( 
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Resume Edit</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                            {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input value={address} onChange={e => addresschange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <h2>My Education</h2>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Institute</label>
                                            <input value={institute} onChange={e => institutechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Degree</label>
                                            <input value={degree} onChange={e => degreechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Year</label>
                                            <input value={year} onChange={e => yearchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Skills</label>
                                            <input value={skills} onChange={e => skillschange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>


                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit">Save</button>
                                        <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </form>
                </div>



            </div>
        </div>

     );
}
 
export default ClientEdit;
    