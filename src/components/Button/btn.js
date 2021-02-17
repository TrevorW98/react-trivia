
const But =(anything) =>{
    return (
        <button className={anything.className} onClick={anything.onClick} value={anything.value}>
            {anything.message}
        </button>
    )
}

export default But;