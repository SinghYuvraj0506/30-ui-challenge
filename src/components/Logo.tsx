import logo from "../assets/images/logo.webp"

export const Logo = () => {
    return (
        <div className="h-10 w-10 sm:w-20 sm:h-20 flex cursor-pointer" onClick={()=>{
            window.open("/","_self")
        }}>
            <img
                src={logo}
                alt="logo"
                className="object-cover"
            />
        </div>
    );
};
