import { NavBar } from "./Navbar"

export const Page = ({ title, children }) => {
    return (
        <>
            <header className="bg-red-500 text-white py-2 px-4">

                <div className="text-lg text-center font-bold">{title}</div>
                <NavBar />
            </header>
            <main className="grow">
                {children}
            </main>
            <footer className="footer-style"> {/* Added a specific class for the footer */}
                <div className="footer-content">
                    <img
                        src="https://user-images.githubusercontent.com/9741252/81717987-83b84000-947b-11ea-9ac9-5ad1d59adf7a.png"
                        alt="Your Alt Text"
                        className="footer-image" // Added a class for the image
                    />
                    <span className="footer-text">202501</span> {/* Added a class for the text */}
                </div>
            </footer>
        </>
    )
}