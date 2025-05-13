import type {Navigation} from "../type/nav";

export default function Navigation(){

    const nav: Navigation[] = [
        {category: "use baeksukim;"},

    ]
    return(
        <div className="flex justify-around   w-full h-20 shadow-md bg-white">
            {nav.map((item) => (
                <div key={item.category} className="flex items-center mx-10 ">
                    <a href="#">{item.category}</a>
                </div>
            ))}

        </div>

    )
}