import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ClientCreate = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [institute, setInstitute] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [skills, setSkills] = useState("");
  
  const [validation, setValidation] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  

  const navigate = useNavigate();

  
    const toggleEducation = () => {
      setShowEducation(!showEducation);
    };
  
  const handlesubmit = (e) => {
    e.preventDefault();
    const clientdata={name,email,phone,address,institute,degree,year,skills};

    fetch("http://localhost:8000/clienttt", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(clientdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card" style={{ textAlign: "left" }}>
            <div className="card-title">
              <h2>Personal Detail</h2>
            </div>
            
<div className="card-body">
<div className="row">
<div className="col-lg-4">
<div className="form-group">
<label>Name</label>
<input required value={name} onMouseDown={() => setValidation(true)}
 onChange={(e) => setName(e.target.value)}
  className="form-control"/>
  {name.length === 0 && validation && (<span className="text-danger">Enter the name</span>)}
</div>
</div>

<div className="col-lg-4">
<div className="form-group">
<label>Email</label>
<input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"/>
</div>
</div>

<div className="col-lg-4">
<div className="form-group">
<label>Phone</label>
<input value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control"/>
</div>
</div>
<div className="col-lg-12">
<div className="form-group">
<label>Address</label>
<input value={address} onChange={(e) => setAddress(e.target.value)} className="form-control"/>
</div>
</div>
<div className="container">
<div className="row mt-5">
<div className="col-md-12">
<button type="button" className="btn btn-success" onClick={toggleEducation}>My Education</button>
</div>
</div>
{showEducation && (
<form>
<button type="button" className="btn btn-danger float-end" onClick={toggleEducation}>X Close</button>
<div className="row mt-3">
<div className="col-md-4">
<div className="mb-3">
<label>Institute</label>
<input value={institute} onChange={(e) => setInstitute(e.target.value)} className="form-control"/>
</div>
</div>
<div className="col-md-4">
<div className="mb-3">
<label>Degree</label>
<input value={degree} onChange={(e) => setDegree(e.target.value)} className="form-control"/>
</div>
</div>
<div className="col-md-4">
<div className="mb-3">
<label>Year</label>
<input value={year} onChange={(e) => setYear(e.target.value)} className="form-control"/>
</div>
</div>
</div>
  </form>
)}
</div>
<div className="col-lg-12">
<div className="form-group">
<label>Skills</label>
<input value={skills} onChange={(e) => setSkills(e.target.value)} className="form-control"/>
</div>
</div>
<div className="col-lg-12">
<div className="form-group">
<button className="btn btn-success" type="submit">Save</button>
<Link to="/" className="btn btn-danger">
Back
</Link>
</div>
</div>
</div>
</div>
</div>
</form>
</div>
</div>

  );
};

export default ClientCreate;
