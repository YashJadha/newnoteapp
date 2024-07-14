'use client'
import Link from 'next/link';
import style from '../page.module.css';
import { useRouter } from 'next/navigation';
import { doPost } from '../actions/reqActions';
export default function addtopics() {
    const router = useRouter();
    const submithandler = async (formData) => {
        let data = {};
        formData.forEach((value, key) => (data[key] = value));
        // event.preventDefault()
        // let formData = new FormData(event.target); //so this error solved in next video so by by guys 😊😊🔥
        console.log(data);
        const res = await doPost('/topics', data);
        if (res) {
            router.push('/');
        }  //solve this error later first see the our other apps :-)
    }
    return (
        <div className={style.mainadd}>
            <div className={style.head}>
                Add Topics
            </div>
            <form action={submithandler} className={style.form}>
                <div className={style.maininpt}>
                    <label htmlFor="title" className={style.label}>Title</label>
                    <input type="text" name="title" placeholder='title' id="title" className={style.inpt} />
                </div>
                <div className={style.maininpt}>
                    <label htmlFor="description" className={style.label}>
                        Description
                    </label>
                    <input type="text" name="description" placeholder='Description' id="description" className={style.inpt} />
                </div>
                <input type="submit" value="Save" className={style.btn} />

                <Link href={'/'}>Back to home page</Link>
            </form>
        </div>
    )
}