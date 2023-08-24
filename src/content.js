function Content({ printMessage }) {
  const [locations, setLocations] = React.useState([]);
  const [panels, setPanels] = React.useState([]);

  return (
    <div id="content">
      <div id="outerSlider">
        <div id="main">
          <Header locations={locations} />
          <Panels panels={panels} />
        </div>
      </div>
    </div>
  );
}
