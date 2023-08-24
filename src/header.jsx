function Header({ locations }) {
  return (
    <div id="header">
      {locations.map(location =>
        <div key={location.id} id={`location_${location.id}`} className="headerButton"
          onClick={Engine.travelTo(location.module)}>{location.text}</div> 
      )}
    </div>
  )
}
