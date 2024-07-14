import { MdDelete } from "react-icons/md";
import { doDelete } from "../actions/reqActions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Remove(params) {
    let id = params.id;
    const router = useRouter();
    const clicktomagic = async () => {
        try {
            const res = confirm('are Your really want to delete this component ?');
            if (res) {
                const main = await doDelete(`/topics/${id}`);
                if(main){
                    window.location.reload();
                }
            }
        }
        catch (error) {
            console.log('Your data is not deleted :-( ');
        }
    }
    return (
        <MdDelete
            size={25}
            color="red"
            style={{ cursor: "pointer" }}
            onClick={clicktomagic}
        />
    )
}