import { useState } from "react";

import { FriendList } from "./components/friends";
import { AddFriendForm } from "./components/add-friend-form";
import { SplitBillForm } from "./components/split-bill-form";

import { Friend } from "./types";

const FRIENDS: Friend[] = [
  {
    id: crypto.randomUUID(),
    name: "Clark",
    imageUrl: "https://i.pravatar.cc/48?u=118836",
    debt: -7,
  },
  {
    id: crypto.randomUUID(),
    name: "Sarah",
    imageUrl: "https://i.pravatar.cc/48?u=933372",
    debt: 20,
  },
  {
    id: crypto.randomUUID(),
    name: "Anthony",
    imageUrl: "https://i.pravatar.cc/48?u=499476",
    debt: 0,
  },
];

export function App() {
  const [friends, setFriends] = useState<Friend[]>(FRIENDS);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  function handleSelectFriend(friend: Friend | null) {
    setSelectedFriend(friend);
  }

  function handleAddFriend(friend: Friend) {
    setFriends((prevFriends) => [...prevFriends, friend]);
  }

  function handleSplitBill(bill: number) {
    setFriends(
      friends.map((friend) =>
        friend.name === selectedFriend?.name
          ? { ...friend, debt: bill }
          : friend,
      ),
    );
  }

  return (
    <div className="container">
      <div className="friend-container">
        <FriendList friends={friends} onFriendSelected={handleSelectFriend} />
        <AddFriendForm onFriendAdded={handleAddFriend} />
      </div>
      {selectedFriend !== null && (
        <SplitBillForm
          friend={selectedFriend}
          onSplitBill={handleSplitBill}
          onFriendSelected={handleSelectFriend}
        />
      )}
    </div>
  );
}
