import Head from "next/head";
import classnames from "classnames";
// import BubblyBlock from "components/small/BubblyBlock";
import { useState } from "react";
// import Modal from "react-modal";
import PharmaPortalProject from "components/projects/PharmaPortal";
import BrutePrimes from "components/projects/BrutePrimes";
import { SmallContainer } from "components/medium/Container";
import { Button, Modal, ModalBody, ModalContent, ModalFooter } from "@nextui-org/react";
import LogisticsMapping from "components/projects/LogisticsMapping";
import Chemist2U from "components/projects/Chemist2U";

// let ModalShorthandOld = ({text, modalContent}) => {
//     let [isOpen, setIsOpen] = useState(false);
//     return (
//         <>
//             <span className="underline cursor-pointer hover:text-blue-500" onClick={() => setIsOpen(true)}>
//                 {text}
//             </span>
//             <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
//                 {modalContent}
//             </Modal>        
//         </>
//     );
// }

let ModalShorthand = ({text, modalContent}) => {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <span className="underline cursor-pointer hover:text-blue-500" onClick={() => setIsOpen(true)}>
                {text}
            </span>
            <Modal size="4xl" isOpen={isOpen} onOpenChange={(v) => setIsOpen(v)}>
                <ModalContent>
                    <ModalBody className="max-h-[70vh] overflow-y-scroll text-2xl pt-5">
                        {modalContent}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() => setIsOpen(false)}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

let IndexPage = ({ ...props }) => {
    return (
        <>
            <Head>
                <title>Jack Hales</title>
            </Head>
            <SmallContainer className={classnames(
                "-mt-0 text-3xl leading-hard mx-4 md:mx-16 -mb-4 !rounded-b-none !p-8",
                // "border-[25px] border-indigo-600"
            )}>
                Software Engineer from Australia 🇦🇺  <br/>
                I love simplicity <br />
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
                    <ul className="ml-14 list-disc">
                        <li>Bush walks 🥾</li>
                        <li>Music 🎸 🥁 🎹</li>
                        <li>History 📜</li>
                        <li>Languages 🇮🇹</li>
                    </ul>
                </div>
                <hr className="mt-6 mb-4" />
                <div>
                    Programming, Databases:
                    <ul className="ml-14 list-disc">
                        <li>Python, Flask</li>
                        <li>JavaScript, React, Node</li>
                        <li>Rust</li>
                        <li><span className="text-gray-800/60">Experimenting with</span> Go</li>
                    </ul>
                    <div className="text-base mt-2 text-gray-400">
                        (MySQL, MongoDB, Linux, Docker, Next.JS, Vercel, Firebase, GCP, AWS, Tailwind)
                    </div>
                </div>
                <hr className="mt-6 mb-4" />
                <div>
                    Projects of Interest:
                    <ul className="ml-14 list-disc">
                        <li>
                            <ModalShorthand text="Pharmaceuticals - Pharma Portal" modalContent={<PharmaPortalProject />} />
                        </li>
                        <li>
                            <ModalShorthand text="Logistics" modalContent={<LogisticsMapping />} />
                        </li>
                        <li>
                            <ModalShorthand text="Brute-forcing Primes" modalContent={<BrutePrimes />} />
                        </li>
                    </ul>
                </div>
                <hr className="mt-6 mb-4" />
                <div>
                    Brand Involvement:
                    <ul className="ml-14 list-disc">
                        <li>
                            <ModalShorthand text={
                                <div>
                                    <img src="/chemist2u.png" height={40} alt="Chemist2U" />
                                </div>
                            } modalContent={<Chemist2U />} />
                        </li>
                        <li>Redwood Trade</li>
                        <li>Regional Australian Institute</li>
                        <li>StrongRoom</li>
                    </ul>
                </div>
            </SmallContainer>
        </>
    )
}

export default IndexPage