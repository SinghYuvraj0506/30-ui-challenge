import logo from "../assets/images/logo.webp"

export const Logo = () => {
    return (
        <div className="w-20 h-20 flex cursor-pointer" onClick={()=>{
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
