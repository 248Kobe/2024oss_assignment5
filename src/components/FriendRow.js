import React from "react";

function FriendRow({ friend, onEdit, onDelete }) {
  return (
    <tr>
      <td>{friend.name}</td>
      <td>{friend.relationship}</td>
      <td>{friend.phone}</td>
      <td>{friend.gender}</td>
      <td>{friend.address}</td>
      <td>{friend.birthdate}</td>
      <td>
        <button
          className="btn btn-info btn-sm me-2"
          onClick={() => onEdit(friend)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(friend.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default FriendRow;
