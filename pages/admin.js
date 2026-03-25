import { useState } from 'react'
export default function AdminPage(){
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [isPremium, setIsPremium] = useState(false)
  const [message, setMessage] = useState('')

  async function handleUpload(e){
    e.preventDefault()
    if(!file || !title) { setMessage('Choose a file and title'); return }
    const key = `uploads/${Date.now()}-${file.name}`
    const res = await fetch('/api/signed-url', { method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify({ key, contentType: file.type }) })
    const { url } = await res.json()
    await fetch(url, { method: 'PUT', body: file, headers: { 'Content-Type': file.type } })
    const token = localStorage.getItem('token')
    const resp = await fetch('/api/admin-create-media', { method: 'POST', headers: { 'content-type':'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ title, thumbnail:'', fileKey: key, isPremium }) })
    const data = await resp.json()
    if(data.media) setMessage('Uploaded and created media: ' + data.media.id)
    else setMessage('Error: ' + JSON.stringify(data))
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Admin Upload</h1>
      <form onSubmit={handleUpload} className="mt-4 space-y-3">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="px-3 py-2 border rounded w-full" />
        <input type="file" onChange={e=>setFile(e.target.files[0])} />
        <label className="flex items-center gap-2"><input type="checkbox" checked={isPremium} onChange={e=>setIsPremium(e.target.checked)} /> Premium</label>
        <div>
          <button className="px-4 py-2 bg-black text-white rounded">Upload</button>
        </div>
        <div className="text-sm text-gray-600">{message}</div>
      </form>
    </div>
  )
}
