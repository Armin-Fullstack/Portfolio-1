import Head from "next/head";
import { AiFillTwitterCircle } from "react-icons/Ai";
import { AiFillLinkedin } from "react-icons/Ai";
import { AiFillYoutube } from "react-icons/Ai";
import Image from "next/image";
import dev from "../public/Images/dev-ed-wave.png";
import design from "../public/Images/design.png";
import code from "../public/Images/code.png";
import consulting from "../public/Images/consulting.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {/* Hedear section  */}
        <section id="header" className="min-h-screen">
          {/* main container  */}
          <div className="main-container">
            {/* Nav */}
            <nav className="flex justify-between items-center">
              <h1 className="text-xl font-burtons">developedbyArmin</h1>
              {/* icon and button container  */}
              <div className="flex space-x-8 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
                <a
                  href="#"
                  className="bg-cyan-500 px-4 py-2 rounded-md text-white bg-gradient-to-r
                 from-cyan-500 to-teal-500"
                >
                  Resume
                </a>
              </div>
            </nav>

            {/* content container  */}
            <div className="mt-12 text-center p-10">
              {/* content  */}
              <h2 className="text-5xl text-teal-600 py-2 font-medium">
                Dimitri Marco
              </h2>
              <h3 className="text-2xl py-2">Developer and Designer</h3>
              <p className="text-md py-5 leading-8 text-gray-800">
                Freelancer providing services for programming and design content
                needs. join me down below and let's get cracking!
              </p>
            </div>
            {/* Social icons container  */}
            <div className="flex text-5xl justify-center items-center space-x-16 py-3 text-gray-600">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            {/* image  */}
            <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
              <Image src={dev} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

        {/* services section  */}
        <section id="services">
          {/* main container */}
          <div className="main-container">
            {/* content container  */}
            <div className="mb-10">
              <h3 className="text-3xl">Services I offer</h3>
              <p className="services-text">
                Since the beginning og my journey as a freelance designer and
                developer, I've done remote work for{" "}
                <span className="text-teal-500">agencies</span> consulted for{" "}
                <span className="text-teal-500">startups</span> and collabrated
                with talanted people to create digital products for both
                businuss and consumer use.
              </p>
              <p className="services-text">
                I offer from a wide range of services, including programming and
                teaching.
              </p>
            </div>
            {/* cards container  */}
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6">
              {/* card 1 container  */}
              <div className="p-10 text-center shadow-lg rounded-xl md:w-1/3">
                <Image
                  src={design}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <h3 className="text-lg font-medium mt-8 mb-2">
                  Beautiful Designs
                </h3>
                <p className="mb-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="text-teal-600 my-4">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illusttrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>

              {/* card 2 container  */}
              <div className="p-10 text-center shadow-lg rounded-xl md:w-1/3">
                <Image
                  src={code}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <h3 className="text-lg font-medium mt-8 mb-2">
                  Beautiful Designs
                </h3>
                <p className="mb-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="text-teal-600 my-4">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illusttrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>

              {/* card 3 container  */}
              <div className="p-10 text-center shadow-lg rounded-xl md:w-1/3">
                <Image
                  src={consulting}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <h3 className="text-lg font-medium mt-8 mb-2">
                  Beautiful Designs
                </h3>
                <p className="mb-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="text-teal-600 my-4">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illusttrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio section  */}
        <section id="potfolio">
          {/* main container  */}
          <div className="main-container">
            {/* content container  */}
            <div className="mb-10">
              <h3 className="text-3xl">Portfolio</h3>
              <p className="services-text">
                Since the beginning og my journey as a freelance designer and
                developer, I've done remote work for{" "}
                <span className="text-teal-500">agencies</span> consulted for{" "}
                <span className="text-teal-500">startups</span> and collabrated
                with talanted people to create digital products for both
                businuss and consumer use.
              </p>
              <p className="services-text">
                I offer from a wide range of services, including programming and
                teaching.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
