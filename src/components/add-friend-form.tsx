import React, { useState } from "react";
import { Friend } from "../types";

interface AddFriendFormProps {
  onFriendAdded: (friend: Friend) => void;
}

export function AddFriendForm({ onFriendAdded }: AddFriendFormProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const id = crypto.randomUUID();

    onFriendAdded({
      id,
      name,
      imageUrl: `${image}?u=${id}`,
      debt: 0,
    });

    setIsOpen(false);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    setImage(e.target.value);
  }

  return (
    <>
      {!isOpen && (
        <div className="add">
          <button type="button" onClick={() => setIsOpen(true)}>
            Add a friend
          </button>
        </div>
      )}
      {isOpen && (
        <>
          <div className="add-container">
            <form className="form" onSubmit={handleSubmit}>
              <div className="control">
                <label htmlFor="name">👥 Friend name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="control">
                <label htmlFor="image">🌄 Image URL</label>
                <input
                  id="image"
                  type="text"
                  value={image}
                  onChange={handleImageChange}
                />
              </div>
              <div className="control">
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
          <button
            className="close-btn"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </>
      )}
    </>
  );
}
