function Notifications({ notifications }) {
  return (
    <div id="notifications" className="notifications">
      {notifications.reverse().map((text, id) =>
        <div key={id} className="notification">{text}</div>
      )}
      <div id="notifyGradient"></div>
    </div>
  );
}
