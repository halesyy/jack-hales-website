import Head from "next/head"
import Block from "components/small/Block"
import { SmallContainer } from "components/medium/Container"
import BubblyBlock from "components/small/BubblyBlock"

let IndexPage = (props) => {
    return (
        <>
            <Head>
                <title>Jack Hales</title>
            </Head>
            <style>
                {`body { 
                    background: rgba(99,136,255,1);
                    // background: linear-gradient(157deg, rgba(99,136,255,1) 0%, rgba(117,150,255,1) 100%); 
                }`}
            </style>
            {/* <div className="grid grid-cols-1 lg:grid-cols-2">
                <BubblyBlock className="m-4 -mt-4 lg:mr-0 shadow">
                    <div className="text-gray-400">Socials</div>
                    
                </BubblyBlock>
                <BubblyBlock className="m-4 lg:ml-0 -mt-4 shadow">
                    <div className="text-gray-400">Websites</div>
                    <a href="https://pharmaportal.com.au" target="_pharmaportal" className="mr-3">
                        Pharma Portal
                    </a>
                </BubblyBlock>

            </div> */}

            <BubblyBlock className="-mt-0 text-3xl leading-hard mx-16 !p-8">
                Developer from Australia 🇦🇺 
                I love and focus on leverage and simplicity. By ensuring simplicity, leverage can be maximised.
                
                <hr className="my-4" />
                
                My dev socials:
                <div className="grid grid-cols-3 text-center text-lg my-4 shadow-xl">  
                    <a 
                        href="https://www.linkedin.com/in/jackhales/" 
                        target="_linkedin" 
                        className="text-white p-4 rounded-l-lg" 
                        style={{ background: "#0a66c2"}}
                    >
                        LinkedIn
                    </a>
                    <a 
                        href="https://stackoverflow.com/users/5782416/jack-hales" 
                        target="_stackoverflow" 
                        className="text-white p-4"
                        style={{ background: "#f7a664" }}
                    >
                        Stack Overflow
                    </a>
                    <a 
                        href="https://github.com/halesyy/" 
                        target="_github"
                        className="bg-black text-white p-4 rounded-r-lg"
                    >
                        GitHub
                    </a>
                </div>

                <hr className="mt-6 mb-4" />
                
                <div>
                    Interests:
                    <ul className="ml-14">
                        <li>Bush walks 🥾</li>
                        <li>Music 🎸, 🥁, 🎹</li>
                        <li>History 📜</li>
                        <li>Languages 🇮🇹</li>
                    </ul>
                </div>

                <hr className="mt-6 mb-4" />

                <div>
                    Programming, Databases:
                    <ul className="ml-14">
                        <li>Python, Flask</li>
                        <li>JavaScript, React, Node</li>
                        <li>Rust</li>
                        <li className="text-sm text-gray-300 -ml-1">
                            <div className="pl-1">
                                MySQL, MongoDB, Linux, Docker, Next.JS, Vercel, Firebase, GCP, AWS, Tailwind, joke's over.
                            </div>
                        </li>
                    </ul>
                </div>

            </BubblyBlock>
            <div className="pb-24"></div>
        </>
    )
}

export default IndexPage