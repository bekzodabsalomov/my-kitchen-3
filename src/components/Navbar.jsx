import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="bg-neutral-200 py-2 md:py-4 dark:bg-slate-700">
        <div className="max-container flex flex-col md:flex-row items-center md:justify-between">
            <a href="/" className="text-2xl md:text-4xl md:font-bold md:mb-0 font-medium mb-5 text-dark animation hover:opacity-60 active:opacity-40">My Kitchen</a>
            <nav className="text-center md:text-left md:flex items-center gap-4">
                <p className="mb-4 md:mb-0 md:font-medium text-dark animation">Welcome, Beka</p>
                <div className="flex gap-4">
                <Link to="/login" className="btn bg-orange-500 animation hover:bg-orange-300">Logout</Link>
                <a className="btn bg-emerald-500 animation hover:bg-emerald-300" href="#">Create</a>
                </div>
            </nav>
        </div>
    </header>
    )
}

export default Navbar