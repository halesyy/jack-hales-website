import Head from "next/head"
import classnames from "classnames"
import BubblyBlock from "components/small/BubblyBlock"
import { useState } from "react"
import Modal from "react-modal"
import PharmaPortalProject from "components/projects/PharmaPortal"
import BrutePrimes from "components/projects/BrutePrimes"

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
                    // background: rgba(99,136,255,1);
                    // background: #e7dbff;
                    background: #f2edfc;
                    // background: linear-gradient(157deg, rgba(99,136,255,1) 0%, rgba(117,150,255,1) 100%); 
                }`}
            </style>

            <BubblyBlock className={classnames(
                "-mt-0 text-3xl leading-hard mx-4 md:mx-16 -mb-4 !rounded-b-none !p-8",
                "border-[25px] border-indigo-600"
            )}>
                Software Engineer from Australia 🇦🇺  <br/>
                I love and focus on leverage and simplicity. <br />
                {/* By ensuring simplicity, leverage can be maximised. */}
                
                <hr className="my-4" />
                
                My socials:
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
                        className="text-white p-4 bg-yellow-500"
                    >
                        Stack Overflow
                    </a>
                    <a 
                        href="https://github.com/halesyy/" 
                        target="_github"
                        // className="bg-black text-white p-4 rounded-r-lg"
                        className="bg-green-400 text-white p-4 rounded-r-lg"
                    >
                        GitHub
                    </a>
                </div>

                <hr className="mt-6 mb-4" />
                
                <div>
                    Interests:
                    <ul className="ml-14">
                        <li>Bush walks 🥾</li>
                        <li>Music 🎸 🥁 🎹</li>
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
                    </ul>
                    <div className="text-base mt-2 text-gray-400">
                        (MySQL, MongoDB, Linux, Docker, Next.JS, Vercel, Firebase, GCP, AWS, Tailwind.)
                    </div>
                </div>

                <hr className="mt-6 mb-4" />

                <div>
                    Projects of Interest:
                    <ul className="ml-14">
                        <li><ModalShorthand text="Pharma Portal" modalContent={<PharmaPortalProject />} /></li>
                        <li>Logistics Mapping</li>
                        <li>Universal</li>
                        <li>Market</li>
                        <li><ModalShorthand text="Brute-forcing Primes" modalContent={<BrutePrimes />} /></li>
                    </ul>
                </div>
            </BubblyBlock>
        </>
    )
}

export default IndexPage