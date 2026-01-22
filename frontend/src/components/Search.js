import { useState } from "react";
import { saveBookmark } from "../services/bookmarkService";
import data from "../../public/data/airpollution.json"; 


function Search() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);
  const username = "demoUser"; // simple login user

  const handleSearch = () => {
    if (!city) return;

    const found = data.find(
      (item) =>
        item.city &&
        item.city.toLowerCase() === city.toLowerCase()
    );

    setResult(found || null);
  };

 const handleBookmark = () => {
  if (!result) return;

  const existing =
    JSON.parse(localStorage.getItem("bookmarks")) || [];

  const newBookmark = {
    city: result.city,
    country: result.country,
    year: "2023",
    value: result["2023"],
  };

  const alreadySaved = existing.some(
    (item) => item.city === newBookmark.city
  );

  if (!alreadySaved) {
    existing.push(newBookmark);
    localStorage.setItem("bookmarks", JSON.stringify(existing));
    alert("Bookmark saved");
  } else {
    alert("Already bookmarked");
  }
};

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <p><b>City:</b> {result.city}</p>
          <p><b>Country:</b> {result.country}</p>
          <p><b>PM2.5 (2023):</b> {result["2023"]}</p>

          <button onClick={handleBookmark}>
            ⭐ Save Bookmark
          </button>
        </div>
      )}
    </>
  );
}

export default Search;
