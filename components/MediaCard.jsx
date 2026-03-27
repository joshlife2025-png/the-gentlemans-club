export default function MediaCard({ item, isPremiumUser }) {
  return (
    <div className="relative rounded-lg overflow-hidden bg-white shadow-sm">
      <img
        src={item?.thumbnail || 'https://via.placeholder.com/400x300'}
        className={`w-full h-40 object-cover ${
          item.isPremium && !isPremiumUser ? 'blur-sm' : ''
        }`}
        alt={item?.title || 'media'}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/400x300'
        }}
      />

      {item.isPremium && !isPremiumUser && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white font-bold">
          🔒 Premium
        </div>
      )}

      <div className="p-3">
        <div className="font-medium">{item.title}</div>
      </div>
    </div>
  )
}
