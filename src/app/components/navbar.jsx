import Link from "next/link";
export default function Menubar() {
    return (
        <nav className="mainnav">
            <Link href={'/'} className="head">MyCRUD</Link>
            <Link href={'/addtopic'} className="lnk">
                <button className="btn">Add Topic</button>
            </Link>
        </nav>
        )
}