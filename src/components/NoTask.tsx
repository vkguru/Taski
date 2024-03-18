import Image from "next/image";
import TkButton from "./TkButton";

type TaskProps = {
    message: string,
    result: boolean
}

const NoTask = ({message, result} : TaskProps) => {
    return (
        <section>
            <div className="max-w-[1000px] w-[80%] m-auto sm:pt-[200px] pt-[100px] text-center">
                <Image 
                    src="/images/notes.png" 
                    alt="notes" 
                    width={148}
                    height={144}
                    style={{margin: 'auto'}}
                />
                <p className="text-[#8D9CB8] py-[20px] font-medium">{message}</p>
                {!result &&
                    <TkButton title="Create task" />
                }
            </div>
        </section>
    )
}

export default NoTask;