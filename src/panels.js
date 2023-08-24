function Panels({ panels }) {
  return (
    <div id="locationSlider">
      {panels.map(panel =>
        <div key={panel.id} id={`${id}Panel`} className="location"></div>
      )}
    </div>
  );
}
