import React from "react";
import { Card, CardTitle, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

function StaffList(props) {

  const renderStaff = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-6 col-md-4 col-xl-2">
        <Card style={{ border: "1px solid rgb(112, 112, 112)" }}>
          <Link to={`/staffs/${staff.id}`}>
            <CardImg src={staff.image} />
            <CardTitle className="text-center"
              style={{ color: "black", fontSize: "90%" }}>{staff.name}</CardTitle>
          </Link>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <br />
      <div className="row">{renderStaff}</div>
    </div>
  );
}

export default StaffList;
