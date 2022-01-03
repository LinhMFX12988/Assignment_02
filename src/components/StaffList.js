import React, { useState } from "react";
import { Card, CardTitle, CardImg, Button, Input, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";

function StaffList(props) {
  const [search, setSearch] = useState("")
  const [addStaff, setAddStaff] = useState(false)

  //-----------------Search---------------------
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterStaff = props.staffs.filter(staffItem => {
    return staffItem.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
  //-----------------End Search---------------------
  //-----------------Add Staff----------------------
  const toggleAddFormModal = () => {
    setAddStaff(!addStaff)
  }
  //-----------------End Add Staff------------------
  const renderStaff = filterStaff.map((staff) => {
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
      <div className="col-12">
        <h1 className="text-center">Nhân Viên</h1>
        <div className="col">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">

              {/*************************Button Add***************************/}
              <Button outline onClick={toggleAddFormModal}>
                <span className="fa fa-plus fa-lg"></span> Add
              </Button>

              {/*Add Form Modal*/}
              <Modal
                isOpen={addStaff}
                toggle={toggleAddFormModal}
              >
                <ModalHeader toggle={toggleAddFormModal}>
                  Thêm Nhân Viên
                </ModalHeader>
                <ModalBody>
                  {/* <LocalForm
                    onSubmit={(values) => this.handelAddFormSubmit(values)}
                  >
                  </LocalForm> */}
                </ModalBody>
              </Modal>
              {/*************************End Button Add***************************/}
              <form
                className="d-flex col-8 col-md-6 col-lg-4"
              >
                <Input
                  placeholder="Search..."
                  label="Search"
                  icon="search"
                  onChange={handleSearch}
                />
              </form>
            </div>
          </nav>
        </div>
        <br />
        <div className="row">{renderStaff}</div>
        <br />
      </div>
    </div>
  );
}

export default StaffList;
