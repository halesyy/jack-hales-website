import Head from "next/head"
import Block from "components/small/Block"
import { SmallContainer } from "components/medium/Container"
import BubblyBlock from "components/small/BubblyBlock"
import { useState } from "react"
import Modal from "react-modal"
import PharmaPortalProject from "components/projects/PharmaPortal"

let ModalShorthand = ({text, modalContent}) => {
    let [isOpen, setIsOpen] = useState(false)
    return (
        <> 
            <span className="underline cursor-pointer hover:text-blue-500" onClick={() => setIsOpen(true)}>{text}</span>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                {modalContent}
            </Modal>        
        </>
    )
}

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

                <hr className="mt-6 mb-4" />

                <div>
                    Projects of Interest:
                    <ul className="ml-14">
                        <li><ModalShorthand text="Pharma Portal" modalContent={<PharmaPortalProject />} /></li>
                        <li>Logistics Mappings</li>
                        <li>Universal</li>
                        <li>Market</li>
                        <li>Brute-forcing Primes</li>
                    </ul>
                </div>

            </BubblyBlock>
            <div className="pb-24"></div>
        </>
    )
}

export default IndexPage