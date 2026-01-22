import { useEffect, useState } from "react";
import { getBookmarks, deleteBookmark } from "../services/bookmarkService";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const username = "demoUser"; // MUST match Search.js

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    try {
      const response = await getBookmarks(username);
      console.log("Bookmarks from backend:", response.data);
      setBookmarks(response.data);
    } catch (error) {
      console.error("Error fetching bookmarks", error);
    }
  };

  const handleDelete = async (id) => {
    await deleteBookmark(id);
    fetchBookmarks();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Saved Bookmarks</h2>

      {bookmarks.length === 0 ? (
        <p>No bookmarks found</p>
      ) : (
        bookmarks.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <h3>{item.city}, {item.country}</h3>
            <p>Year: {item.year}</p>
            <p>PM2.5: {item.value}</p>

            <button onClick={() => handleDelete(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Bookmarks;
