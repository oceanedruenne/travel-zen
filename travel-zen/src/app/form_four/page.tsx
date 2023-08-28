'use client'
import "../globals.css"
import Link from "next/link"
import { OtherPage } from "../components/OtherPage"
import { CurrentPage } from "../components/CurrentPage"
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function FormFour()
{
    const router = useRouter();

    const idPerson = useSearchParams().get("idPerson");
    let [personData, setPersonData] = useState();

    useEffect(() => {
        fetch(`http://localhost:3001/profile/${idPerson}`)
        .then(async (data) => setPersonData(await data.json()))
        .then(() => console.log(personData))
        .catch((error) => console.log(error.message))
    }, [idPerson]);

    router.push("/form_five?idPerson="+idPerson);


    return (
        <>
             <div className="flex flex-row flex-nowrap justify-evenly items-baseline content-stretch">
            <OtherPage number="1." title="Profil"></OtherPage>
            <OtherPage number="2." title="Voyage"></OtherPage>
            <OtherPage number="3." title="Accompagnement"></OtherPage>
            <CurrentPage number="4." title="Résumé"></CurrentPage>
        </div>
        <div className="text-white text-s text-white border-4 rounded-md border-white px-6 pt-3 pb-3">
            <p className="text-m">Résumé de vos réponses</p>
            <div>
                <p className="text-sm">Concernant votre profil..</p>
                <p>Vous êtes de sexe </p>
                <p>Vous avez ans</p>
                <p></p>
            </div>
            <div >
                <p className="text-sm">Concernant votre voyage..</p>
                <p>Vous allez partir en CONTINENT, et plus précisement au PAYS</p>
                <p>Vous partez le DATE, vous revenez le DATE : vous partez donc X jours</p>
                <p>Vous allez au PAYS en MOYEN DE TRANSPORT</p>
                <p>Vous parlez/ne parlez pas la langue de ce pays</p>
                <p>Sur place, votre/vos moyen(s) de transport sera/seront : MOYENS DE TRANSPORT</p>
            </div>
            <div >
                <p className="text-sm">Concernant vos accompagnants</p>
                <p>Vous voyagerez seul.e / vous serez accompagnée de NB PERSONNES AGEES et/ou de NB ENFANTS</p>
            </div>
            <div className="flex flex-row flex-nowrap justify-center items-center content-stretch">
                  <button className="border-2 rounded-md border-white px-6">Générer ma liste</button>
            </div>
        </div>
        </>
    )
}