import PlusIcon from "./icons/PlusIcon";

type ButtonProp = {
    title: String,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
};

const TkButton = ({title, onClick}: ButtonProp) => {
    return (
        <button onClick={onClick} className={btn}>
            <PlusIcon />
            {title}
        </button>
    )
}

const btn = `
    bg-[#007FFF1A] 
    px-[15px] 
    py-[12px] 
    inline-flex 
    items-center 
    justify-center 
    gap-[5px] 
    text-secondary 
    font-bold
    w-auto
`;

export default TkButton;