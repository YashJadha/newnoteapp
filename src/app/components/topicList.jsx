'use client'
import Link from "next/link";
import Remove from "./removecompo";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import LoadingPage from "../loading";

export default function Topicmain() {

    const [api, setApi] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const getApi = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/topics');
                const data = await response.json();
                setApi(data.res);
                setLoader(false);
            }
            catch (error) {
                console.log('get error');
            }
        }
        getApi();  //finally we did it yeah !!! 🔥🔥🔥🔥
    }, []);

    return (
        <div className="maintopics">
            {
                loader ? <LoadingPage/> :
                api.map((element, key) => (
                    <>
                        <div className="innertopics">
                            <div className="first">
                                <div className="title">{element.title}</div>
                                <div className="description">{element.description}</div>
                            </div>
                            <div className="second">
                                <Link href={`/edittopics/${element._id}`} style={{ cursor: "pointer" }}>
                                    <FaEdit size={23} color="#000" />
                                </Link>
                                <Remove id={element._id} />
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}
