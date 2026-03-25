export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">The Gentleman's Club</div>
        <div className="flex gap-3">
          <a className="px-3 py-1 rounded border">Login</a>
          <a className="px-3 py-1 rounded bg-black text-white">Subscribe</a>
        </div>
      </div>
    </header>
  )
}
