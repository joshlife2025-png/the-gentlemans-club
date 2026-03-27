import Header from '../components/Header'
import Gallery from '../components/Gallery'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 relative z-10">
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold">Welcome to The Gentleman's Club</h1>
        <Gallery /> {/* Make sure this is uncommented */}
      </main>
    </div>
  )
}
