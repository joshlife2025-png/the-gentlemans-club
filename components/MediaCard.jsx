export default function MediaCard({item}){
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-sm">
      <img src={item.thumbnail} className="w-full h-40 object-cover" alt={item.title} />
      <div className="p-3">
        <div className="font-medium">{item.title}</div>
      </div>
    </div>
  )
}
