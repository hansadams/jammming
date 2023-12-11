export default function Login() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-zinc-900 rounded-xl">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600"
          alt="Jammming"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Welcome to Jammming
        </h2>
        <p className="text-center text-white">Create Spotify playlists with our awesome app.</p>
      </div>
      <br />
      <a className="text-center" href="/auth/login">
        <button
          type="submit"
          className="justify-center rounded-md bg-green-600 px-10 py-5 text-3xl font-semibold leading-6 text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Sign in to Spotify
        </button>
      </a>
    </div>
  )
}