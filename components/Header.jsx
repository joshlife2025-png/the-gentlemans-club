<a
  href="/login"
  className="px-3 py-1 rounded border hover:bg-gray-100 transition"
>
  Login
</a>

<a
  href="#"
  onClick={async () => {
    const res = await fetch('/api/checkout')
    const data = await res.json()
    window.location.href = data.url
  }}
  className="px-3 py-1 rounded bg-black text-white hover:opacity-90 transition cursor-pointer"
>
  Subscribe
</a>
