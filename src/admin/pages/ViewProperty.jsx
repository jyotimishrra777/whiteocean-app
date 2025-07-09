import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";

const ViewProperty = () => {
  const [properties, setProperties] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("properties")) || [];
    setProperties(stored);
  }, []);

  const handleDelete = (index) => {
    const updated = [...properties];
    updated.splice(index, 1);
    setProperties(updated);
    localStorage.setItem("properties", JSON.stringify(updated));
  };

  const handleEditClick = (index) => {
    setSelectedIndex(index);
    setEditData(properties[index]);
    setShowModal(true);
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    const updatedList = [...properties];
    updatedList[selectedIndex] = editData;
    setProperties(updatedList);
    localStorage.setItem("properties", JSON.stringify(updatedList));
    setShowModal(false);
  };

  return (
    <div className="container py-4">
      <h4 className="mb-4 main-title text-primary">📋 View All Properties</h4>

      {properties.length === 0 ? (
        <p className="text-muted">No properties added yet.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped align-middle shadow-sm">
            <thead className="table-primary">
              <tr>
                <th>Sr. No</th>
                <th>Property name</th>
                <th>Location</th>
                <th>Type</th>
                <th>Size (sq.ft)</th>
                <th>Price(₹)</th>
                <th>Furnished</th>
                <th>BHK</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((prop, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{prop.name}</td>
                  <td>{prop.location}</td>
                  <td>{prop.type}</td>
                  <td>{prop.size}</td>
                  <td>{prop.price}</td>
                  <td>{prop.furnished}</td>
                  <td>{prop.bhk}</td>

                  <td>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleEditClick(index)}
                    >
                      <FaRegEdit />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(index)}
                    >
                      <MdOutlineDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="xl"
        centered
        backdrop="static"
        className="modal-fullscreen"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className="main-title text-primary px-5">Edit Property</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="p-5">
            <div className="row">
              <div className="mb-3 col-md-6">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="name"
                  value={editData.name || ""}
                  onChange={handleEditChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  value={editData.location || ""}
                  onChange={handleEditChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="form-label">Type</label>
                <input
                  type="text"
                  name="type"
                  value={editData.type || ""}
                  onChange={handleEditChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label">Size (sq.ft)</label>
                <input
                  type="text"
                  name="size"
                  value={editData.size || ""}
                  onChange={handleEditChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="form-label">Price (₹)</label>
                <input
                  type="text"
                  name="rent"
                  value={editData.price || ""}
                  onChange={handleEditChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label">Furnished</label>
                <input
                  type="text"
                  name="furnished"
                  value={editData.furnished || ""}
                  onChange={handleEditChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="form-label">BHK</label>
                <input
                  type="text"
                  name="bhk"
                  value={editData.bhk || ""}
                  onChange={handleEditChange}
                  className="form-control"
                />
              </div>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewProperty;
