import logo from "../assets/images/logo.png"

export const Logo = () => {
    return (
        <div className="w-12 h-12 inline cursor-pointer" onClick={()=>{
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
