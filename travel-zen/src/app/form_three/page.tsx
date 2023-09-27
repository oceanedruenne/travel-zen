'use client'
import "../globals.css"
import { OtherPage } from "../components/OtherPage"
import { CurrentPage } from "../components/CurrentPage"
import { redirect, useRouter, useSearchParams } from "next/navigation"

export default function FormThree()
{

    const router = useRouter();
    const idPerson = useSearchParams().get("idPerson");


    if (!idPerson)
    {
        redirect('/form_one');
    }

    const validateForm = async (event: any ) =>
    {
        event.preventDefault();
        const data = {
            travelAlone: event.target.travelAlone.value as boolean,
            olderPerson: event.target.olderPerson.value as boolean,
            children: event.target.children.value as boolean,
            ProfileId: idPerson
        }

        const JSONData = JSON.stringify(data);
        const endPoint = 'http://localhost:3001/createAccompagnement';

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'mode': 'no-cors'
            },
            body: JSONData,
        }

        const response = await fetch(endPoint,options)

        const result = await response.json();
        console.log("result ", result);
        console.log("result id: ",result.ProfileId);
        console.log("idPerson :", idPerson);
        console.log(result.ProfileId == idPerson ? "oui" : "non");

        router.push("/form_four?idPerson="+result.ProfileId);

    }

    return (
        <>
        <div className="flex flex-row flex-nowrap justify-evenly items-baseline content-stretch">
            <OtherPage number="1." title="Profil"></OtherPage>
            <OtherPage number="2." title="Voyage"></OtherPage>
            <CurrentPage number="3." title="Accompagnement"></CurrentPage>
            <OtherPage number="4." title="Résumé"></OtherPage>
            <OtherPage number="5." title="Liste"></OtherPage>
        </div>
        <div className="flex flex-col flex-nowrap justify-center items-center content-stretch mt-8">
            <form className="bg-dark text-white text-s border-4 rounded-md border-white px-6 pt-3 pb-3" onSubmit={validateForm}>
                <label htmlFor="travelAlone">Allez-vous voyager seul.e ? </label>
                <div className="flex flex-row flex-nowrap content-stretch">
                <select name="travelAlone" id="travelAlone" className="text-dark">
                    <option value="true">Oui</option>
                    <option value="false">Non</option>
                </select>
                </div>
                <label htmlFor="olderPerson">Serez-vous accompagné.e de personnes âgées ?</label>
                <div className="flex flex-row flex-nowrap content-stretch">
                <select name="olderperson" id="olderPerson" className="text-dark">
                    <option value="true">Oui</option>
                    <option value="false">Non</option>
                </select>
                </div>
                <label htmlFor="children">Aurez-vous des enfants à charge durant le voyage ?</label><br></br>
                <div className="flex flex-row flex-nowrap content-stretch">
                <select name="children" id="children" className="text-dark">
                    <option value="true">Oui</option>
                    <option value="false">Non</option>
                </select>
                </div>
                <div className="flex flex-row flex-nowrap justify-center items-center content-stretch">
                <button className="border-2 rounded-md border-white px-6">Valider</button>
                </div>
            </form>
        </div>
        </>
    )
}