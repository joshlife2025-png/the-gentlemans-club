import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div style={{ position: 'relative', zIndex: 9999 }}>
      <Component {...pageProps} />
    </div>
  )
}
