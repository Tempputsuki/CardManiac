import Link from "next/link"
function HomePage() {
    return (
        <div>
            <h1 className="text-3xl">Welcome to TMAS</h1>
            <Link href="/tournaments">Show Tournaments</Link>
        </div>
    )
}

export default HomePage
