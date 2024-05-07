const imageUrl =
  "https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109";

const friends = [
  {
    name: "Clark",
    debt: 10,
  },
  {
    name: "John",
    debt: -10,
  },
  {
    name: "Steve",
    debt: 0,
  },
];

export function App() {
  return (
    <div className="container">
      <div className="friend-container">
        <ul className="friends">
          {friends.map((friend, index) => {
            let text: string;

            if (friend.debt > 0) {
              text = `${friend.name} owes you $${friend.debt}`;
            } else if (friend.debt < 0) {
              text = `You owe ${friend.name} $${Math.abs(friend.debt)}`;
            } else {
              text = `You and ${friend.name} are even`;
            }

            return (
              <li key={index}>
                <div className="left">
                  <img src={imageUrl} alt={friend.name} />
                  <div className="info">
                    <h3>{friend.name}</h3>
                    <p className="debt">{text}</p>
                  </div>
                </div>
                <button type="button">Select</button>
              </li>
            );
          })}
        </ul>
        <div className="add">
          <button type="button">Add a friend</button>
        </div>
      </div>
      <aside className="sidebar">
        <p>Split a bill with somebody</p>
        <form className="bill-form">
          <div className="control">
            <label htmlFor="bill">💰 Bill value</label>
            <input id="bill" type="text" />
          </div>
          <div className="control">
            <label htmlFor="expense">👤 Your expense</label>
            <input id="expense" type="text" />
          </div>
          <div className="control">
            <label htmlFor="expense2">👥 Somebody&apos;s expense</label>
            <input id="expense2" type="text" />
          </div>
          <div className="control">
            <label htmlFor="select">🤑 Who&apos;s paying the bill?</label>
            <input id="select" type="select" />
          </div>
        </form>
      </aside>
    </div>
  );
}
