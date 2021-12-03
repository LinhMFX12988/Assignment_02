import React from "react";
import { Card, Breadcrumb, BreadcrumbItem, CardBody, CardText, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle } from "reactstrap";

const RenderBangLuong = ({ staff }) => {

    const Tongluong = (lcb, glt, hsl) => lcb + glt * hsl

    return (
        <Card className="text-center"
            style={{
                backgroundColor: "#e6dff5",
                border: "1px solid rgb(112, 112, 112)"
            }}>
            <h2> {staff.name}</h2><hr />
            <CardBody>
                <CardText>Mã nhân viên: {staff.id}</CardText>
                <CardText>Hệ số lương: 1</CardText>
                <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
            </CardBody>
            <CardBody >
                <Card style={{
                    border: "1px solid rgb(112, 112, 112)"
                }}>
                    <CardTitle>
                        Lương: {Tongluong(3000000, 200000, staff.overTime)} đ
                    </CardTitle>
                </Card>
            </CardBody>
        </Card>
    );
}

const Bangluong = (props) => {

    const nvien = props.staffs.map((staff) =>

        <div key={staff.id} className="col-12 col-md-6 col-lg-4">
            <RenderBangLuong staff={staff} />
        </div>
    );

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/nhanvien">Nhân Viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="col-12">               
                <h1 className="text-center">Bảng Lương</h1>
                <button style={{ margin: 5, float: "right" }} type="button" class="btn btn-outline-dark btn-sm">Lương <i class="fa fa-sort"></i></button>
                <button style={{ margin: 5, float: "right" }} type="button" class="btn btn-outline-dark btn-sm">Mã NV <i class="fa fa-sort"></i></button>
                <br /><br /><hr />
                <div className="row">{nvien}</div>
                <hr />
            </div>
        </div>
    );
};

export default Bangluong;