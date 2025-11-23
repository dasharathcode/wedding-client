import React from 'react';

const couples = [
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=256&h=256&facepad=2",
    name: "Man"
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&h=256&facepad=2",
    name: "Woman"
  },
  {
    img: "https://images.unsplash.com/photo-1508214751196-bc4f3dd0b4a2?auto=format&fit=facearea&w=256&h=256&facepad=2",
    name: "Friend 1"
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&h=256&facepad=2",
    name: "Friend 2"
  }
];

const CoupleGallery = () => {
  return (
    <div style={{
      background: "linear-gradient(120deg, #fff7f1 0%, #ffe8f1 100%)",
      borderRadius: "24px",
      boxShadow: "0 6px 32px rgba(236, 148, 156, 0.18)",
      padding: "2.5rem 1.5rem",
      margin: "2rem auto",
      maxWidth: "650px"
    }}>
      <h2 style={{
        textAlign: "center",
        color: "#d47b98",
        fontWeight: 800,
        marginBottom: "2rem",
        fontSize: "1.7rem"
      }}>
        Our Special Gallery
      </h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
        gap: "2.2rem",
        justifyItems: "center"
      }}>
        {couples.map((person, idx) => (
          <div
            key={idx}
            style={{
              textAlign: "center",
              transition: "transform 0.3s",
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 2px 12px rgba(236,148,156,0.08)",
              padding: "1rem 0.75rem"
            }}>
            <div style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "4px solid #efb87c",
              overflow: "hidden",
              margin: "auto",
              marginBottom: "0.7rem"
            }}>
              <img
                src={person.img}
                alt={person.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
            <div style={{
              fontWeight: 700,
              color: "#d47b98",
              letterSpacing: "0.01em",
              fontSize: "1.07rem"
            }}>
              {person.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoupleGallery;