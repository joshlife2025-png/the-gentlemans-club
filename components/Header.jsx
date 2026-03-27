export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">The Gentleman's Club</div>

        <div className="flex gap-3">
          {/* Login */}
          <a
            href="/login"
            className="px-3 py-1 rounded border hover:bg-gray-100 transition"
          >
            Login
          </a>

          {/* Subscribe (Stripe Checkout) */}
          <a
            href="#"
            onClick={async () => {
              try {
                const res = await fetch('/api/checkout')
                const data = await res.json()
                window.location.href = data.url
              } catch (err) {
                console.error('Checkout failed', err)
                alert('Checkout failed. Try again.')
              }
            }}
            className="px-3 py-1 rounded bg-black text-white hover:opacity-90 transition cursor-pointer"
          >
            Subscribe
          </a>
        </div>
      </div>
    </header>
  )
}
