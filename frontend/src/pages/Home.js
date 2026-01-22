import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../services/api";
import "../styles/home.css";

function Home() {
  const [city, setCity] = useState("");
  const [pollutionData, setPollutionData] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Load JSON from public folder
  useEffect(() => {
    fetch("/data/airpollution.json")
      .then((res) => res.json())
      .then((data) => setPollutionData(data))
      .catch(() => setError("Failed to load pollution data"));
  }, []);

  const handleSearch = () => {
    if (!city.trim()) return;

    const found = pollutionData.find(
      (item) =>
        item.city &&
        item.city.toLowerCase() === city.toLowerCase()
    );

    if (!found) {
      setResult(null);
      setError("City not found");
    } else {
      setResult(found);
      setError("");
    }
  };

  const saveBookmark = (year) => {
    api.post("/bookmarks", {
      username: "demo",
      city: result.city,
      country: result.country,
      year,
      value: result[year],
    })
    .then(() => alert("Bookmark saved"))
    .catch(() => alert("Failed to save bookmark"));
  };

  return (
    <div className="page-container">
      <Header />

      <main className="hero">
        {/* LEFT */}
        <div className="hero-left">
          <h1>
            How Air Pollution <br /> can shorten your life
          </h1>

          <p>
            Understand pollution levels in your city and take informed
            action to protect your health and environment.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          {error && <p className="error-text">{error}</p>}

          {result && (
            <div className="result-card">
              <h3>{result.city}, {result.country}</h3>

              {[2021, 2022, 2023].map((year) => (
                <div key={year}>
                  <p>{year}: {result[year]}</p>
                  <button onClick={() => saveBookmark(year)}>
                    Save Bookmark
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="half-circle">
            <img
              src="/images/pollution.png"
              alt="Pollution"
              className="pollution-img"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
