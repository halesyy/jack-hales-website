import Head from "next/head";
import classnames from "classnames";
// import BubblyBlock from "components/small/BubblyBlock";
import { useState } from "react";
// import Modal from "react-modal";
import PharmaPortalProject from "components/projects/PharmaPortal";
import BrutePrimes from "components/projects/BrutePrimes";
import { SmallContainer } from "components/medium/Container";
import { Button, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import LogisticsMapping from "components/projects/LogisticsMapping";
import Chemist2U from "components/projects/Chemist2U";
import RAI_Levo from "components/projects/RAI_Levo";
import RedwoodTrade from "components/projects/RedwoodTrade";

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
                    <ModalHeader className="text-3xl font-bold">
                        {text}
                    </ModalHeader>
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
                <div className="text-center">
                    Software Engineer from Australia 🇦🇺
                </div>
                <hr className="my-4" />
                {/* My socials: */}
                <div className="grid grid-cols-3 text-center text-lg my-4 shadow-xl">  
                    <a 
                        href="https://www.linkedin.com/in/jackhales/" 
                        target="_linkedin" 
                        className="text-white p-4 rounded-l-lg hover:!bg-blue-600" 
                        style={{ background: "#0a66c2" }}
                    >
                        LinkedIn
                    </a>
                    <a 
                        href="https://stackoverflow.com/users/5782416/jack-hales" 
                        target="_stackoverflow" 
                        className="text-white p-4 bg-yellow-500 hover:bg-yellow-400"
                    >
                        Stack Overflow
                    </a>
                    <a 
                        href="https://github.com/halesyy/" 
                        target="_github"
                        // className="bg-black text-white p-4 rounded-r-lg"
                        className="bg-green-400 text-white p-4 rounded-r-lg hover:bg-green-300"
                    >
                        GitHub
                    </a>
                </div>
                <hr className="mt-6 mb-4" />
                <div>
                    <div className="mb-2">
                        Interests:
                    </div>
                    <ul className="ml-14 list-disc">
                        <li>Bush walks 🥾</li>
                        <li>Music 🎸 🥁 🎹</li>
                        <li>History 📜</li>
                        <li>Languages 🇮🇹</li>
                    </ul>
                </div>
                <hr className="mt-6 mb-4" />
                <div>
                    <div className="mb-2">
                        Programming, Databases:
                    </div>
                    <ul className="ml-14 list-disc">
                        <li>Python, Flask</li>
                        <li>JavaScript, TypeScript, React, Node</li>
                        <li>Rust</li>
                        <li><span className="text-gray-800/60">Experimenting with</span> Go</li>
                    </ul>
                    <div className="text-base mt-2 text-gray-400">
                        (MySQL, MongoDB, Linux, Docker, Next.JS, Vercel, Firebase, GCP, AWS, Tailwind)
                    </div>
                </div>
                <hr className="mt-6 mb-6" />
                <div>
                    <div className="mb-2">
                        Projects of Interest:
                    </div>
                    <ul className="ml-14 list-disc">
                        <li>
                            <ModalShorthand text="Pharma Portal - Pharmaceuticals" modalContent={<PharmaPortalProject />} />
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
                    <div className="mb-2">
                        Brand Involvement:
                    </div>
                    <ul className="ml-14 list-disc">
                        <li>
                            <ModalShorthand text={
                                <div>
                                    <img src="/chemist2u.png" className="h-[70px]" alt="Chemist2U" />
                                </div>
                            } modalContent={<Chemist2U />} />
                        </li>
                        <li>
                            <ModalShorthand text={
                                <div>
                                    <img src="/redwood-trade.webp" className="h-[70px]" alt="Redwood Trade" />
                                </div>
                            } modalContent={<RedwoodTrade />} />
                        </li>
                        <li>
                            <ModalShorthand text={
                                <div className="flex gap-4 items-center">
                                    <img src="/levo.png" className="h-[40px]" alt="Levo" />
                                    <img src="/regional-australia-institute.png" className="h-[70px]" alt="Regional Australia Institute" />
                                </div>
                            } modalContent={<RAI_Levo />} />
                        </li>
                    </ul>
                </div>
            </SmallContainer>
        </>
    )
}

export default IndexPage