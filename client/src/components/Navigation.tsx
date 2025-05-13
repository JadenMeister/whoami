import type {Navigation} from "../type/nav";

export default function Navigation(){

    const nav: Navigation[] = [
        {category: "자격증"},
        {category: "학력"},
        {category: "경력"},
        {category: "기타"},
    ]
    return(
        <div className="flex m-15 items-center justify-center border-2 border-gray-500 w-full ">
            {nav.map((item) => (
                <div key={item.category} className="flex items-center justify-around h-10%">
                    <a href="#">{item.category}</a>
                </div>
            ))}

        </div>

    )
}