import Search from "./Search";
const Welcome = ({
    name, 
    subtext
}: {
    name: String;
    subtext: String;
}) => {
    return (
        <header className="flex sm:flex-row justify-between flex-col gap-3">
            <div>
                <h1 className="font-bold text-[28px]">
                    Welcome,{' '}
                    <span className="text-secondary">
                        {name}
                    </span>.
                </h1>
                <p className="text-[#8D9CB8] text-[18px] mt-[5px]">{subtext}</p>
            </div>

            <div className="sm:w-[300px] w-[100%]">
                <Search />
            </div>
        </header>
    )
}

export default Welcome;