import { IoGameController } from "react-icons/io5";
import { LuBird } from "react-icons/lu";
import { MdComputer } from "react-icons/md";
import { CiBasketball } from "react-icons/ci";

function Footer() {
  return (
    <footer className="bg-gray-900 px-8 py-10 text-white">
      
      {/* Div One */}
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-8 border-b border-gray-700 pb-8">
        
        <div>
          <p className="mb-3 text-lg font-semibold">Fitness Dashboard</p>
          <p className="cursor-pointer text-gray-400 hover:text-white">
            Services
          </p>
        </div>

        <div>
          <p className="mb-3 text-lg font-semibold">Watch Videos</p>
          <p className="cursor-pointer text-gray-400 hover:text-white">
            Discord
          </p>
        </div>

        <div>
          <p className="mb-3 text-lg font-semibold">Privacy Policy</p>
          <p className="cursor-pointer text-gray-400 hover:text-white">
            Terms & Conditions
          </p>
        </div>
      </div>

      {/* Div Two */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 pt-6 md:flex-row">
        
        <div>
          <p className="text-sm text-gray-400">
            © 2024 Fitness Dashboard. All Rights Reserved.
          </p>
        </div>

        <div>
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition hover:bg-gray-700 hover:text-white"
              >
                <IoGameController size={25} />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition hover:bg-gray-700 hover:text-white"
              >
                <LuBird size={25} />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition hover:bg-gray-700 hover:text-white"
              >
                <MdComputer size={25} />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition hover:bg-gray-700 hover:text-white"
              >
                <CiBasketball size={25} />
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;