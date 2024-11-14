import React from "react";
import FriendRow from "./FriendRow";

function FriendTable({ friends, onEdit, onDelete }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Relationship</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Birthdate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {friends.map((friend) => (
            <FriendRow
              key={friend.id}
              friend={friend}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FriendTable;
