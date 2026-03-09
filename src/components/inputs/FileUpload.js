

function FileUpload({handleFileUpload}) {

    return (
        <>
            <input className="
                file:bg-gradient-to-b file:from-blue-500 file:to-blue-600
                file:px-1 file:py-1 file:m-2
                file:border-none
                file:rounded-full
                file:rounde-full
                file:text-white
                file:cursor-pointer
                file:shadow-sm file:shadow-blue-600/50

                bg-gradient-to-br from-green-600 to-green-700
                text-white/80
                rounded-full
                cursor-pointer
                shadow-xl shadow-gray-300/60
                "
            type="file" name="file" onChange={handleFileUpload}/>
        </>
    )
}

export default FileUpload;