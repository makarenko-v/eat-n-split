import React, { useState } from "react";
import { Friend } from "../types";

interface SplitBillFormProps {
  friend: Friend;
  onSplitBill: (bill: number) => void;
  onFriendSelected: (friend: Friend | null) => void;
}

export function SplitBillForm({
  friend,
  onSplitBill,
  onFriendSelected,
}: SplitBillFormProps) {
  const [bill, setBill] = useState(0);
  const [expense, setExpense] = useState(0);
  const [whoPays, setWhoPays] = useState("user");

  const friendExpense = bill - expense;

  function handleBillChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBill(+e.target.value);
  }

  function handleExpenseChange(e: React.ChangeEvent<HTMLInputElement>) {
    setExpense(+e.target.value);
  }

  function handlePayerChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setWhoPays(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onSplitBill(whoPays === "user" ? friendExpense : -expense);

    setBill(0);
    setExpense(0);

    onFriendSelected(null);
  }

  return (
    <aside className="sidebar">
      <p>Split a bill with {friend.name}</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="bill">💰 Bill value</label>
          <input
            id="bill"
            type="text"
            value={bill}
            onChange={handleBillChange}
          />
        </div>
        <div className="control">
          <label htmlFor="expense">👤 Your expense</label>
          <input
            id="expense"
            type="text"
            value={expense}
            onChange={handleExpenseChange}
          />
        </div>
        <div className="control">
          <label htmlFor="expense2">👥 {friend.name}&apos;s expense</label>
          <input id="expense2" type="text" value={friendExpense} disabled />
        </div>
        <div className="control">
          <label htmlFor="select">🤑 Who&apos;s paying the bill?</label>
          <select id="select" value={whoPays} onChange={handlePayerChange}>
            <option value="user">You</option>
            <option value="friend">{friend.name}</option>
          </select>
        </div>
        <button className="submit-btn" type="submit">
          Split bill
        </button>
      </form>
    </aside>
  );
}
