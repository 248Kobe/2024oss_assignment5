import React, { useState, useEffect } from "react";
import FriendTable from "../FriendTable";
import FriendModal from "../FriendModal";
import "../../index.css";

function ShowList() {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const getFriends = () => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://672818b5270bd0b975545010.mockapi.io/api/v1/users1/"
    );
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = () => {
      if (xhr.status === 200) {
        setFriends(JSON.parse(xhr.response));
      } else {
        console.error("Failed to fetch friends. Check if server is running.");
      }
    };
    xhr.send();
  };

  useEffect(() => {
    getFriends();
  }, []);

  const handleAddFriend = (friendData) => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://672818b5270bd0b975545010.mockapi.io/api/v1/users1/"
    );
    xhr.setRequestHeader("content-type", "application/json;charset=UTF-8");
    xhr.onload = () => {
      if (xhr.status === 201) {
        alert("Friend added successfully!");
        getFriends();
      }
    };
    xhr.send(JSON.stringify(friendData));
  };

  const handleEditFriend = (friendData) => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "PUT",
      `https://672818b5270bd0b975545010.mockapi.io/api/v1/users1/${friendData.id}`
    );
    xhr.setRequestHeader("content-type", "application/json;charset=UTF-8");
    xhr.onload = () => {
      if (xhr.status === 200) {
        alert("Friend updated successfully!");
        getFriends();
      }
    };
    xhr.send(JSON.stringify(friendData));
  };

  const handleDeleteFriend = (id) => {
    if (window.confirm("Are you sure you want to delete this friend?")) {
      const xhr = new XMLHttpRequest();
      xhr.open(
        "DELETE",
        `https://672818b5270bd0b975545010.mockapi.io/api/v1/users1/${id}`
      );
      xhr.setRequestHeader("content-type", "application/json");
      xhr.onload = () => {
        if (xhr.status === 200) {
          alert("Friend deleted successfully!");
          getFriends();
        }
      };
      xhr.send();
    }
  };

  return (
    <div className="container mt-4">
      <h1>Friend Management</h1>
      <button
        className="btn btn-primary mb-3"
        onClick={() => setSelectedFriend({})}
      >
        + Add Friend
      </button>
      <FriendTable
        friends={friends}
        onEdit={setSelectedFriend}
        onDelete={handleDeleteFriend}
      />
      {selectedFriend && (
        <FriendModal
          friend={selectedFriend}
          onSave={(friend) => {
            friend.id ? handleEditFriend(friend) : handleAddFriend(friend);
            setSelectedFriend(null);
          }}
          onClose={() => setSelectedFriend(null)}
        />
      )}
    </div>
  );
}

export default ShowList;
