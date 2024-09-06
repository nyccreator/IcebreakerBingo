import './Landing.css';
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className={"flex flex-col h-screen justify-between"}>
            <div className="flex flex-col justify-center items-center my-52 p-16 mx-80 gap-6 bg-indigo-300">
                <h1 className={"text-6xl text-black font-bold"}>Icebreaker Bingo</h1>
                <p className={"text-xl text-slate-800 text-pretty text-center"}>
                    A digital icebreaker platform designed to bring people together in
                    a fun and engaging way. Play games, break the ice, and make new
                    connections effortlessly!
                </p>
                <div className={"flex flex-row"}>
                    <Link to={"/board"} className={"bg-violet-400 py-4 px-6 rounded-xl font-bold text-sm"}>
                        Get Started
                    </Link>
                </div>
            </div>
            <p className={"absolute bottom-10 inset-x-0 text-center"}>Made with 🥖🍔🍛🍝 by Dream Team at HackGT X</p>
        </div>
    );
}

export default Landing;
