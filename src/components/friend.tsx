import { Friend } from "../types";

interface FriendItemProps {
  friend: Friend;
  onFriendSelected: (friend: Friend) => void;
}

export function FriendItem({ friend, onFriendSelected }: FriendItemProps) {
  let text: string;
  let youOwe = false;
  let even = false;

  if (friend.debt > 0) {
    text = `${friend.name} owes you $${friend.debt}`;
  } else if (friend.debt < 0) {
    text = `You owe ${friend.name} $${Math.abs(friend.debt)}`;
    youOwe = true;
  } else {
    text = `You and ${friend.name} are even`;
    even = true;
  }

  let className = "";

  if (!even && youOwe) {
    className = "red";
  } else if (!even && !youOwe) {
    className = "green";
  }

  return (
    <li>
      <div className="left">
        <img src={friend.imageUrl} alt={friend.name} />
        <div className="info">
          <h3>{friend.name}</h3>
          <p className={`debt ${className}`}>{text}</p>
        </div>
      </div>
      <button type="button" onClick={() => onFriendSelected(friend)}>
        Select
      </button>
    </li>
  );
}
