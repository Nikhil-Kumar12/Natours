export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic2F2aXRhcjEyMyIsImEiOiJjbDh4MWJzaXgwMjQ3M3ZvNzJramxkb2x1In0.Ql2gdZ3HjSBk_GJj3-RbHQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/savitar123/cl8x3m81m000w14q4k1wm0v45',
    scrollZoom: false,
    //   center: [-118.113491, 34.111745],
    //   zoom: 10,
    //   interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
