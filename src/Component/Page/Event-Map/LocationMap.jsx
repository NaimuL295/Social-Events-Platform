import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center, 13);
  return null;
};

const LocationMap = () => {
  const [center, setCenter] = useState({ lat: 23.8103, lng: 90.4125 }); // Default Dhaka
  const [search, setSearch] = useState("");

  // ✅ Detect user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCenter({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        () => console.log("Location permission denied")
      );
    }
  }, []);

  // 🔍 Handle location search (using OpenStreetMap Nominatim API)
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${search}`
    );
    const data = await res.json();
    if (data.length > 0) {
      const { lat, lon } = data[0];
      setCenter({ lat: parseFloat(lat), lng: parseFloat(lon) });
    } else {
      alert("Location not found ❌");
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/* 🔍 Search Box */}
      <form
        onSubmit={handleSearch}
        style={{
          position: "absolute",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          background: "white",
          padding: "10px 15px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        }}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search any place..."
          style={{ padding: "8px", width: "250px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            marginLeft: "8px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {/* 🗺 Map */}
      <MapContainer center={center} zoom={13} style={{ height: "100%", width: "100%" }}>
        <ChangeView center={center} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            {search ? `You searched for: ${search}` : "Your current location 📍"}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
