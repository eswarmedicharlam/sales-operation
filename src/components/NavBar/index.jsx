import profile from "../../assets/images/profile-pic.png";


const NavBar = () => {

    return (
        <div className="navbar">
            <nav>
                <div className="flex flex-row items-center justify-between md:justify-end bg-white px-[30px] py-[10px] gap-[10px] shadow-md">


                    <div className="flex gap-[10px] items-center">
                        <img
                            src={profile}
                            alt="profile-pic"
                            className="w-[40px] h-[40px] border bg-[var(--corteva-blue)] border-[var(--corteva-blue)] rounded-full p-[3px]"
                        />
                        <div>
                            <h3 className="font-gilory text-[18px] font-semibold">{"Eswar"}</h3>
                            <div className="flex items-center">

                                <img
                                    src={""}
                                    alt={"country-flag"}
                                    className="w-[25px] h-[20px] rounded-md border-[var(--color-light-border)] border-[1px] shadow-lg object-cover mr-[5px]"
                                />
                                <span className="font-gilory text-[14px]">{"india"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
