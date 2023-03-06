import Head from "next/head";
import { useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import dev from "../public/Images/dev-ed-wave.png";
import design from "../public/Images/design.png";
import code from "../public/Images/code.png";
import consulting from "../public/Images/consulting.png";
import web1 from "../public/Images/web1.png";
import web2 from "../public/Images/web2.png";
import web3 from "../public/Images/web3.png";
import web4 from "../public/Images/web4.png";
import web5 from "../public/Images/web5.png";
import web6 from "../public/Images/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="dark:bg-gray-900">
        {/* Hedear section  */}
        <section id="header" className="min-h-screen">
          {/* main container  */}
          <div className="main-container">
            {/* Nav */}
            <nav className="flex justify-between items-center">
              <h1 className="text-xl font-burtons dark:text-white">
                developedbyArmin
              </h1>
              {/* icon and button container  */}
              <div className="flex space-x-8 items-center">
                {darkMode ? (
                  <svg
                  onClick={() => setDarkMode(!darkMode)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    onClick={() => setDarkMode(!darkMode)}
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
                )}

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
              <h3 className="text-2xl py-2 dark:text-white">
                Developer and Designer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
                Freelancer providing services for programming and design content
                needs. join me down below and let's get cracking!
              </p>
            </div>
            {/* Social icons container  */}
            <div className="flex text-5xl justify-center items-center space-x-16 py-3 text-gray-600 dark:text-white">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            {/* image  */}
            <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
              <Image src={dev} alt="dev" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

        {/* services section  */}
        <section id="services">
          {/* main container */}
          <div className="main-container">
            {/* content container  */}
            <div className="mb-10">
              <h3 className="text-3xl dark:text-white">Services I offer</h3>
              <p className="services-text dark:text-white">
                Since the beginning og my journey as a freelance designer and
                developer, I've done remote work for{" "}
                <span className="text-teal-500">agencies</span> consulted for{" "}
                <span className="text-teal-500">startups</span> and collabrated
                with talanted people to create digital products for both
                businuss and consumer use.
              </p>
              <p className="services-text dark:text-white">
                I offer from a wide range of services, including programming and
                teaching.
              </p>
            </div>
            {/* cards container  */}
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6">
              {/* card 1 container  */}
              <div className="p-10 text-center shadow-lg rounded-xl md:w-1/3 dark:bg-white">
                <Image
                  src={design}
                  alt="design"
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
              <div className="p-10 text-center shadow-lg rounded-xl md:w-1/3 dark:bg-white">
                <Image
                  src={code}
                  alt="code"
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
              <div className="p-10 text-center shadow-lg rounded-xl md:w-1/3 dark:bg-white">
                <Image
                  src={consulting}
                  alt="consulting"
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
              <h3 className="text-3xl dark:text-white">Portfolio</h3>
              <p className="services-text dark:text-white">
                Since the beginning og my journey as a freelance designer and
                developer, I've done remote work for{" "}
                <span className="text-teal-500">agencies</span> consulted for{" "}
                <span className="text-teal-500">startups</span> and collabrated
                with talanted people to create digital products for both
                businuss and consumer use.
              </p>
              <p className="services-text dark:text-white">
                I offer from a wide range of services, including programming and
                teaching.
              </p>
            </div>
            {/* Images container */}
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-10 py-10">
              {/* Image 1 */}
              <div className="basis-1/3 flex-1">
                <Image
                  src={web1}
                  alt="web1"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              {/* Image 2 */}
              <div className="basis-1/3 flex-1">
                <Image
                  src={web2}
                  alt="web2"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              {/* Image 3 */}
              <div className="basis-1/3 flex-1">
                <Image
                  src={web3}
                  alt="web3"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              {/* Image 4 */}
              <div className="basis-1/3 flex-1">
                <Image
                  src={web4}
                  alt="web4"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              {/* Image 5 */}
              <div className="basis-1/3 flex-1">
                <Image
                  src={web5}
                  alt="web5"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              {/* Image 6 */}
              <div className="basis-1/3 flex-1">
                <Image
                  src={web6}
                  alt="web6"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
