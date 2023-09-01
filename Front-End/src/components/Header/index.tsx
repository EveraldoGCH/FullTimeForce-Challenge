import React from "react";
import { Link } from "react-router-dom";
import github from "../../assets/github.svg"
import logo from "../../assets/ftf-logo.png"

const Header: React.FC = () => {

    const challengeUrl = "https://docs.google.com/document/d/1EtOeiVmGH2W3sYwe7YKKw8AhiLC_TxIDiG83wNKPmqk/edit?pli=1#heading=h.tgz5jtyprwa0"
    const meUrl = "https://portfolio-2022-ten-chi.vercel.app/"
    const githubUrl = "https://github.com/EveraldoGCH/FullTimeForce-Challenge"

    return (
        <header className="w-full h-[80px] flex items-center justify-around bg-white">
            <Link to={githubUrl} target="_blank" className="w-[10%] flex-wrap content-center justify-center ">
                <img src={github} alt="GitHub logo" className="w-full max-w-[57px]" />
            </Link>
            <Link to={challengeUrl} className="w-[10%] decoration-black font-sans font-semibold text-base text-center" target="_blank">Challenge</Link>
            <Link to={"https://www.fulltimeforce.com/"} target="_blank" className="w-[20%] flex flex-wrap content-center justify-center"><img src={logo} alt="Full Time Force logo" className="w-full max-w-[107px]" /></Link>
            <Link to={meUrl} className="w-[10%] decoration-black font-sans font-semibold text-base text-center" target="_blank">About me</Link>
            <p className="w-[10%] decoration-black font-sans font-semibold m-0">Everaldo Guevara</p>
        </header>
    );
}

export default Header;