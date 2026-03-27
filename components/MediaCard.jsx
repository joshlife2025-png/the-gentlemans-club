export default function MediaCard({ item }) {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-sm">
      <img
        src={item?.thumbnail || "/placeholder.jpg"}
        className="w-full h-40 object-cover"
        alt={item?.title || "media"}
        onError={(e) => {
          e.target.src = "/placeholder.jpg"
        }}
      />

      <div className="p-3">
        <div className="font-medium">
          {item?.title || "Untitled"}
        </div>
      </div>
    </div>
  )
}
