<img
  src={item?.thumbnail || "https://via.placeholder.com/400x300"}
  className="w-full h-40 object-cover"
  alt={item?.title || "media"}
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/400x300"
  }}
/>
