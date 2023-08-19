function App() {
  return (
    <>
      <div id="wrapper">
        <Content />
        <Notifications />
      </div>
      <Menu />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
