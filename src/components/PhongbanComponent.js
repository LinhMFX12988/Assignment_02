import React, { Component } from "react";
import { Card, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { DEPARTMENTS } from "../shared/staffs";

class PhongBan extends Component {

    constructor(props) {
        super(props);

        this.state = {
            departments: DEPARTMENTS
        };
    }

    render() {

        const RenderPhongBan = (department) =>
            <Card>
                <div style={{
                    backgroundColor: "#e6dff5",
                    border: "1px solid rgb(112, 112, 112)"
                }}>
                    <h2>{department.department.name}</h2>
                    <br />
                    <div className="container text-center">Số lượng nhân viên: {department.department.numberOfStaff}</div>
                    <br />
                </div>
            </Card>

        const pban = this.state.departments.map((department) =>
            <div key={department.id} className="col-12 col-md-6 col-lg-4">
                <RenderPhongBan department={department} />
            </div>
        );

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/nhanvien">Nhân Viên</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="col-12">                  
                    <h1 className="text-center">Phòng Ban</h1>
                    <hr />
                    <div className="row">{pban}</div>
                    <hr />
                </div>
            </div>
        )
    }

}

export default PhongBan;


