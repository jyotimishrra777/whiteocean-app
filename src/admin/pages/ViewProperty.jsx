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
                <th>Address</th>
                <th>Rooms</th>
                <th>Bathrooms</th>
                <th>Size (sq.ft)</th>
                <th>Rent (₹)</th>
                <th>Feature</th>
                <th>Amenities</th>
                <th>Surrounding</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((prop, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{prop.address}</td>
                  <td>{prop.rooms}</td>
                  <td>{prop.bathrooms}</td>
                  <td>{prop.size}</td>
                  <td>{prop.rent}</td>
                  <td>{prop.feature}</td>
                  <td>{prop.amenities}</td>
                  <td>{prop.surrounding}</td>
                  <td>{prop.description}</td>
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
          <Modal.Title>Edit Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="p-5">
            <div className="row">
              <div className="mb-3 col-md-6">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={editData.address || ""}
                  onChange={handleEditChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3 col-md-6">
                <label>Rooms</label>
                <input
                  type="text"
                  name="rooms"
                  value={editData.rooms || ""}
                  onChange={handleEditChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3 col-md-6">
                <label>Bathrooms</label>
                <input
                  type="text"
                  name="bathrooms"
                  value={editData.bathrooms || ""}
                  onChange={handleEditChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3 col-md-6">
                <label>Size (sq.ft)</label>
                <input
                  type="text"
                  name="size"
                  value={editData.size || ""}
                  onChange={handleEditChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3 col-md-6">
                <label>Rent (₹)</label>
                <input
                  type="text"
                  name="rent"
                  value={editData.rent || ""}
                  onChange={handleEditChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3 col-md-6">
                <label>Feature</label>
                <input
                  type="text"
                  name="feature"
                  value={editData.feature || ""}
                  onChange={handleEditChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3 col-md-6">
                <label>Amenities</label>
                <input
                  type="text"
                  name="amenities"
                  value={editData.amenities || ""}
                  onChange={handleEditChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3 col-md-6">
                <label>Surrounding</label>
                <input
                  type="text"
                  name="surrounding"
                  value={editData.surrounding || ""}
                  onChange={handleEditChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3 col-12">
                <label>Description</label>
                <textarea
                  name="description"
                  value={editData.description || ""}
                  onChange={handleEditChange}
                  className="form-control"
                  rows={3}
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
