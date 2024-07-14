'use client'
import style from '../page.module.css';
import Link from 'next/link';
import { doPatch } from '../actions/reqActions';
import { redirect, useParams } from 'next/navigation';

function Edittoicform() {
    const { id } = useParams();
    console.log(id);
    async function updatehandler(formdata) {
        let data = {};
        formdata.forEach((value, key) => (data[key] = value));
        const res = await doPatch(`/topics/${id}`, data);
        if (res) {
            redirect('/');
        } /// so its ok for today we will continued our next lecture so by by good night 🌃🌉
    }
    return (
        <div>
            <div className={style.mainadd}>
                <div className={style.head}>
                    Edit Topics
                </div>
                <form action={updatehandler} className={style.form}>
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
        </div>
    )
}

export default Edittoicform