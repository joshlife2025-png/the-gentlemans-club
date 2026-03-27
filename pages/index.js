import Header from '../components/Header'

export default function Home() {
  return (
    <div className="p-6">
      <Header />
      <button onClick={() => alert("works")}>
        Click Me
      </button>
    </div>
  )
}
