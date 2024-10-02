import logo from "../assets/images/logo.webp"

export const Logo = () => {
    return (
        <div className="w-14 h-14 flex cursor-pointer" onClick={()=>{
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
