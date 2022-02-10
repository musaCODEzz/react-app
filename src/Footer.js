const Footer = ({length}) => {
   
    return (
        <footer>
            <p>{length} List {length === 1 ? "Item" : "items"}</p>
        </footer>
    )
}

export default Footer
