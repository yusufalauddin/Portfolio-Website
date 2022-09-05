import Head from "next/head"
import ChatApp from "../components/ChatApp"
import Navbar from "../components/Navbar"
const chatapplication = () => {
    return  <div>

    <Head>
    <title>Java Chat Application | yalauddin</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

    <Navbar>
    </Navbar>

    <ChatApp></ChatApp>
    
  </div>

}

export default chatapplication