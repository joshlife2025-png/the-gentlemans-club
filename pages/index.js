import Header from '../components/Header'
import Gallery from '../components/Gallery'

export default function Home() {
  // Example: replace with real auth later
  const isPremiumUser = false

  return (
    <div className="min-h-screen bg-gray-100 relative z-10">
      {/* Header with clickable buttons */}
      <Header />

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          Welcome to The Gentleman's Club
        </h1>

        {/* Gallery Component */}
        <Gallery isPremiumUser={isPremiumUser} />
      </main>
    </div>
  )
}
