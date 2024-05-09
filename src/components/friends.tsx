import { Friend } from "../types";
import { FriendItem } from "./friend";

interface FriendListProps {
  friends: Friend[];
  onFriendSelected: (friend: Friend) => void;
}

export function FriendList({ friends, onFriendSelected }: FriendListProps) {
  return (
    <ul className="friends">
      {friends.map((friend) => (
        <FriendItem
          key={friend.id}
          friend={friend}
          onFriendSelected={onFriendSelected}
        />
      ))}
    </ul>
  );
}
