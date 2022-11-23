const Layout = ({ children }) => {
    return (
        <div className="lg:max-w-7xl mx-auto max-w-xs md:max-w-xl overflow-x-hidden">
            {children}
        </div>
    )
}

export default Layout