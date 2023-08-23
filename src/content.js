function Content({ printMessage }) {
  const [locations, setLocations] = React.useState([]);

  return (
    <div id="content">
      <div id="outerSlider">
        <div id="main">
          <Header locations={locations} />
          <div id="locationSlider"></div>
        </div>
      </div>
    </div>
  );
}
