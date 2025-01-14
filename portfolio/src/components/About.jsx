import aboutImg from '../assets/About.png';

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImg} alt="About" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">
                            I am a Computer Science student at the college of Andre-Laurendeau
                            and I am passionate about game development and web development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;