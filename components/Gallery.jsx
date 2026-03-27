import sampleMedia from '../utils/sampleMedia'
import MediaCard from './MediaCard'

export default function Gallery({ isPremiumUser }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
      {sampleMedia.map((m) => (
        <MediaCard key={m.id} item={m} isPremiumUser={isPremiumUser} />
      ))}
    </div>
  )
}
