
const Display = (anything) => {
    return(
        <p className={anything.className}>{anything.message}</p>
    )
}

export default Display;