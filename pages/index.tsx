import Head from "next/head";
import classnames from "classnames";
import { useState } from "react";
import PharmaPortalProject from "components/projects/PharmaPortal";
import BrutePrimes from "components/projects/BrutePrimes";
import { SmallContainer } from "components/medium/Container";
import { Button, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import LogisticsMapping from "components/projects/LogisticsMapping";
import Chemist2U from "components/projects/Chemist2U";
import RAI_Levo from "components/projects/RAI_Levo";
import RedwoodTrade from "components/projects/RedwoodTrade";

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
                    <ModalBody className="max-h-[70vh] overflow-y-scroll text-xl leading-7 pt-5">
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
                <meta
                    name="description"
                    content="Jack Hales is an Australian software engineer who loves working with data creatively. Jack currently works as the CTO of Dataology, a data and software company in the Australian pharmaceutical space."
                    key="desc"
                />
            </Head>
            <SmallContainer className={classnames(
                "-mt-0 text-3xl leading-hard mx-4 md:mx-16 -mb-4 !rounded-b-none !p-8"
            )}>
                <Link href="/article/prime-number-research-2024">
                    <div className="bg-warning/10 mb-4 p-6 rounded-xl hover:scale-105 duration-200 text-black">
                        <div className="text-foreground-400 text-sm mb-2">
                            {new Date().toDateString()}
                        </div>
                        <div className="text-xl">
                            <strong>Check out my latest active research on prime numbers!</strong> I'm enjoying experimenting with the chaos of prime numbers to better understand uncertainty and randomness. Reach out with any ideas or tips!
                        </div>
                    </div>
                </Link>
                <div className="text-center">
                    Software Engineer 🇦🇺
                </div>
                <hr className="my-4" />
                {/* My socials: */}
                <div className="grid grid-cols-3 text-center text-lg my-4 shadow-xl">  
                    <a 
                        href="https://www.linkedin.com/in/jackhales/" 
                        target="_linkedin" 
                        className="text-white p-4 rounded-l-lg bg-blue-500 hover:!bg-blue-600" 
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
                <hr className="my-4" />
                <div>
                    <div className="mb-2 text-xl font-bold">
                        Interests:
                    </div>
                    <ul className="ml-12 list-disc">
                        <li>Bush walks 🥾</li>
                        <li>Music 🎸 🥁 🎹</li>
                        <li>History 📜</li>
                        <li>Italy 🇮🇹</li>
                        <li><Link className="text-3xl" href="https://www.goodreads.com/user/show/113621720-jack-hales" target="_blank">Reading</Link></li>
                        <li>Travelling 🇫🇯🇳🇵🇸🇬🇺🇸🇮🇩🇹🇭🇻🇳🇮🇳🇴🇲🇦🇪🇮🇹</li>
                        <li><Link href="/software-engineers-guide-exploring-oman-top-travel-tips-itinerary" className="text-3xl">Oman: Read My Guide 🇴🇲</Link></li>
                    </ul>
                </div>
                <hr className="mt-6 mb-4" />
                <div>
                    <div className="mb-2 text-xl font-bold">
                        I create:
                    </div>
                    <ul className="ml-12 list-disc">
                        <li>Websites, Web-apps</li>
                        <li>Backends</li>
                        <li>Software</li>
                        <li>Libraries, Dependencies</li>
                        <li>Chrome Extensions</li>
                        <li>Architecture, Infrastructure</li>
                        <li>Strategy</li>
                    </ul>
                </div>
                <hr className="mt-6 mb-4" />
                <div>
                    <div className="mb-2 text-xl font-bold">
                        Programming & Technical Skills:
                    </div>
                    <ul className="ml-12 list-disc">
                        <li>Python, Flask, FastAPI, Typed Python</li>
                        <li>JavaScript, TypeScript, Next, React, Node</li>
                        <li>Mathematics: Distributions (Normal, Mandelbrotian), Calculus, Statistics</li>
                    </ul>
                    <div className="text-base mt-2 text-gray-400">
                        (MySQL, MongoDB, Linux, Docker, Vercel, Firebase, GCP, App Engine, AWS, Tailwind)
                    </div>
                </div>
                <hr className="mt-6 mb-6" />
                <div>
                    <div className="mb-2 text-xl font-bold">
                        Projects of Interest:
                    </div>
                    <ul className="ml-12 list-disc">
                        <li>
                            <ModalShorthand text="Pharma Portal - Pharmaceuticals" modalContent={<PharmaPortalProject />} />
                        </li>
                        <li>
                            <ModalShorthand text="Data in Supply-chain Logistics" modalContent={<LogisticsMapping />} />
                        </li>
                        <li>
                            <ModalShorthand text="Brute-forcing Prime Numbers" modalContent={<BrutePrimes />} />
                        </li>
                    </ul>
                </div>
                <hr className="mt-6 mb-4" />
                <div>
                    <div className="mb-2">
                        Brand Involvement:
                    </div>
                    <ul className="md:ml-6 list-none md:list-disc">
                        <li>
                            <ModalShorthand text={
                                <div>
                                    <img src="/chemist2u.png" className="md:h-[70px]" alt="Chemist2U" />
                                </div>
                            } modalContent={<Chemist2U />} />
                        </li>
                        <li>
                            <ModalShorthand text={
                                <div>
                                    <img src="/redwood-trade.webp" className="md:h-[70px] -ml-3 mt-1" alt="Redwood Trade" />
                                </div>
                            } modalContent={<RedwoodTrade />} />
                        </li>
                        <li>
                            <ModalShorthand text={
                                <div className="md:flex gap-4 items-center">
                                    <img src="/levo.png" className="h-[40px] mx-auto md:mx-0" alt="Levo" />
                                    <img src="/regional-australia-institute.png" className="h-[70px] mx-auto md:mx-0 mt-2 md:mt-0" alt="Regional Australia Institute" />
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