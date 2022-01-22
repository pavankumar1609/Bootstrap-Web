mapboxgl.accessToken =
  "pk.eyJ1IjoicGF2YW5rdW1hcjE2MzAiLCJhIjoiY2t5cGVqdGNkMDk4NjJwcHRkdDA4ZzB6aiJ9.24cOIGDA7nge92cVhVZKzA";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setMap([83.896782, 18.296974]);
}

function setMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 10,
  });
  map.addControl(new mapboxgl.NavigationControl());
}
