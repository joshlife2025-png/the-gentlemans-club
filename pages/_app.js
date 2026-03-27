import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="relative z-10">
      <Component {...pageProps} />
    </div>
  )
}
