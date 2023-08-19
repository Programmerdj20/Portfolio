import React from "react";
// import { content } from "../Content";

const Hero = () => {
    // const { hero } = content;
    return (
        <section>
            <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
                <div className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bottom-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 to-sky-200 -z-10">
                    <h1 className="rotate-90 absolute md:top-[45%] md:right-[-40%] top-[30%] right-[-30%] text-[#eaf2fa]">
                        ANDRES <span className="text-dark_primary">COOCK</span>
                    </h1>
                </div>
                <div className="">
                    <h2>Web Developer</h2>
                    <br />
                    <div>
                        <button className="btn">Hire Me</button>
                    </div>
                </div>
                <div className="md:h-[37rem] h-96">
                    <img
                        src="../src/assets/images/person.png"
                        alt=""
                        className="h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
