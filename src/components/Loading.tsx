import Image from "next/image";

const Loading = () => {
    return (
        <div className="max-w-[500px] w-[100%] m-auto">
            <Image src="/gifs/loader.gif" alt="loader" width={441} height={291} />
        </div>
    )
}

export default Loading;