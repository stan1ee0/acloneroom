function App() {
  const [notifications, setNotifications] = React.useState([]);

  const printMessage = (text) => {
    setNotifications(notifications => notifications.concat(text));
  };

  return (
    <>
      <div id="wrapper">
        <Content printMessage={printMessage} />
        <Notifications notifications={notifications} />
      </div>
      <Menu />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
