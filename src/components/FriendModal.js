import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

function FriendModal({ friend, onSave, onClose }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    relationship: "",
    phone: "",
    gender: "",
    address: "",
    birthdate: "",
    email: "",
  });

  useEffect(() => {
    setFormData(friend || {});
  }, [friend]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{formData.id ? "Edit Friend" : "Add Friend"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          {[
            "name",
            "relationship",
            "phone",
            "email",
            "address",
            "birthdate",
          ].map((field) => (
            <div className="mb-3" key={field}>
              <label htmlFor={field} className="form-label">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type="text"
                className="form-control"
                id={field}
                value={formData[field] || ""}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              className="form-control"
              id="gender"
              value={formData.gender || ""}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <Button variant="success" type="submit">
            Save
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default FriendModal;
