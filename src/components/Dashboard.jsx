import ProfileCard from './ProfileCard.jsx'
import CreatePlaylist from "./CreatePlaylist.jsx"

export default function Dashboard(props) {
  return (
    <div className="min-h-full container mx-auto">
      <header className="bg-zinc-900 shadow rounded-xl">
        <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white"><ProfileCard token={props.token} /><CreatePlaylist token={props.token} /></h1>
        </div>
      </header>
    </div>
  )
}
