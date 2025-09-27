import './App.css'
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import {useState} from "react";
import logoImg from "./images/logo.svg"
import dashboardImg from "./images/illustration-dashboard.png"


function App() {
    const [email,setEmail] = useState("");
    const [error,setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email){
            setError("Please enter a valid email");
        } else if(!emailRegex.test(email)){
            setError("Invalid email")
        } else {
            setError("")
            alert("Subscribed with " + email);
            setEmail("")
        }
    }




  return (
    <main className="w-screen h-screen flex flex-col  ">
        <div className="flex flex-col w-3/4 h-screen  items-center mx-auto">
            <img className="mt-16" src={logoImg} alt="PING logo"/>
            <div className="flex flex-row align-items-center mt-8 text-5xl gap-2 shrink text-center">
                <h1 className="text-gray-400 font-extralight">We are launching <span className="text-blue-950 font-bold">soon!</span> </h1>
            </div>
            <h3 className="p-4 text-xl text-gray-400">Subscribe and get notified</h3>

            <section className="flex flex-col sm:flex-row p-4 gap-4 ">

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                        <input className="border-2 border-blue-50 rounded-4xl p-4 h-12 leading-3 px-20 text-gray-700 text-center"
                               type="email"
                               value={email}
                               placeholder="Your email address..."
                               onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type = "submit" className="bg-blue-500 overflow-hidden rounded-4xl text-white p-4 px-16 h-12 leading-3 active:scale-95 whitespace-nowrap">Notify Me</button>

                    </form>


            </section>

            <img className="py-12 max-h-1/2" src={dashboardImg} alt="dashboard image"/>

            <footer className="fixed bottom-0 pb-2">
                <div className="flex flex-row items-center justify-center p-4 text-2xl gap-2">
                    <CiFacebook className="" />
                    <CiTwitter />
                    <CiInstagram />
                </div>

                <p className="font-extralight text-gray-400 text-sm">©Copyright Ping. All rights reserved️</p>
            </footer>

        </div>
    </main>
  )
}

export default App
