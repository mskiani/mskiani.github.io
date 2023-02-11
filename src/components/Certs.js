import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import googleTS from "../assets/certs/googletechsupport.png"
import googleNT from "../assets/certs/googlenetworking.png"
import ibmCC from "../assets/certs/ibmCC.png"
import ibmCNA from "../assets/certs/ibmCloudNatveapps.png"
import efset from "../assets/certs/efset.png"

// import 

export default function Certs() {
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Google Technical Support Fundamentals" img={googleTS} issued="Coursera" date="Jul 2021" />
                <CertCard name="Bits and Bytes of Networking" img={googleNT} issued="Coursera" date="Aug 2021" />
                <CertCard name="Introduction to Cloud Computing" img={ibmCC} issued="Coursera" date="June 2021" />
                <CertCard name="Developing Cloud Native Apps" img={ibmCNA} issued="Dicodig Coursera" date="JUne 2021" />
                <CertCard name="EF Standard English Test" img={efset} issued="EF Standard English Test" date="Aug 2022" />


            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}



let me = {



}