import WhoAmI from "./components/WhoAmI.tsx";
import Education from "./components/Education.tsx";
import Certifications from "./components/Certifications";
import Navigation from "./components/Navigation";



export default function App () {
    return(
        <div className=" items-center flex flex-col h-screen">
        <Navigation/>
        <WhoAmI/>
        <Education/>
        <Certifications/>
        </div>



    )
}