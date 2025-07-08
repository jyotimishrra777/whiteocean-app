import React from "react";
import { Card, Table } from "react-bootstrap";
import {
  FaBuilding,
  FaChartLine,
  FaUserTie,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="container-fluid py-4">
      <h2 className="mb-5 main-title text-primary">🏠 Admin Dashboard</h2>

      {/* Top Stats */}
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <Card className="shadow-sm border-0">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <h6 className=" card-title">Total Properties</h6>
                <h4>128</h4>
              </div>
              <FaBuilding size={32} className="text-primary" />
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="shadow-sm border-0">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <h6 className="card-title">Sold This Month</h6>
                <h4>24</h4>
              </div>
              <FaChartLine size={32} className="text-success" />
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="shadow-sm border-0">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <h6 className="card-title">Active Agents</h6>
                <h4>12</h4>
              </div>
              <FaUserTie size={32} className="text-info" />
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="shadow-sm border-0">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <h6 className="card-title">New Inquiries</h6>
                <h4>47</h4>
              </div>
              <FaEnvelopeOpenText size={32} className="text-warning" />
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Placeholder for Charts */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <Card className="shadow-sm border-0 h-100">
            <Card.Body>
              <h5 className="mb-3 card-title">Sales Chart</h5>
              <div className="text-muted">[Chart Placeholder]</div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 mb-4">
          <Card className="shadow-sm border-0 h-100">
            <Card.Body>
              <h5 className="mb-3 card-title">User Traffic</h5>
              <div className="text-muted">[Chart Placeholder]</div>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Recently Added Properties */}
      <Card className="shadow-sm border-0">
        <Card.Body>
          <h5 className="mb-4 card-title">Recently Added Properties</h5>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Location</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Luxury Villa</td>
                <td>Mumbai</td>
                <td>₹2.5 Cr</td>
                <td>
                  <span className="badge bg-success">Published</span>
                </td>
              </tr>
              <tr>
                <td>3BHK Apartment</td>
                <td>Bangalore</td>
                <td>₹90 Lakh</td>
                <td>
                  <span className="badge bg-warning">Pending</span>
                </td>
              </tr>
              <tr>
                <td>Office Space</td>
                <td>Delhi</td>
                <td>₹1.2 Cr</td>
                <td>
                  <span className="badge bg-success">Published</span>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminDashboard;
