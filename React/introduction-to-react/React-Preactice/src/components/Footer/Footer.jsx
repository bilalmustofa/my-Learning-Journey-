import { IoGameController } from "react-icons/io5";
import { LuBird } from "react-icons/lu";
import { MdComputer } from "react-icons/md";
import { CiBasketball } from "react-icons/ci";

function Footer() {
  return (
    <>
        <footer>
            {/* Div one */}
            <div>
                <div>
                    <p>Fitness Dashboard</p>
                    <p>Services</p>
                </div>

                <div>
                    <p>Watch Videos</p>
                    <p>Discord</p>
                </div>

                <div>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>

            {/* Div two */}
            <div>
                <div>
                    <p>© 2024 Fitness Dashboard. All Rights Reserved.</p>
                </div>

                <div>
                    <ul>
                        <li><a href="#"><IoGameController size={25}/></a></li>
                        <li><a href="#"><LuBird size={25}/></a></li>
                        <li><a href="#"><MdComputer size={25}/></a></li>
                        <li><a href="#"><CiBasketball size={25}/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer;