'use client'
import "../globals.css"
import { OtherPage } from "../components/OtherPage"
import { CurrentPage } from "../components/CurrentPage"
import { useState } from "react"
import { useRouter } from "next/navigation"


export default function FormOne()
{
    const router = useRouter()

    const validateForm = async (event: any) =>
    {
        event.preventDefault();
        const data = {
            sex: event.target.sex.value,
            age: event.target.age.value,
            healthProblems: event.target.healthProblems.value as boolean
        }
        console.log(data);

        const JSONdata = JSON.stringify(data);

        const endpoint = 'http://localhost:3001/createProfile'

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'mode': 'no-cors'
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint,options)

        const result = await response.json();
        console.log("test : ", result);
        console.log("id ? : ",result.id);
      
        router.push("/form_two?idPerson="+result.id);
    }

    return (
        <>
        <div className="flex flex-row flex-nowrap justify-evenly items-baseline content-stretch">
            <CurrentPage number="1." title="Profil"></CurrentPage>
            <OtherPage number="2." title="Voyage"></OtherPage>
            <OtherPage number="3." title="Accompagnement"></OtherPage>
            <OtherPage number="4." title="Résumé"></OtherPage>
            <OtherPage number="5." title="Liste"></OtherPage>
        </div>
        <div className="flex flex-col flex-nowrap justify-center items-center content-stretch mt-8">
        <form className="bg-dark text-white text-s border-4 rounded-md border-white px-6 pt-3 pb-3" onSubmit={validateForm}>
            <label htmlFor="sex">Êtes-vous..</label>
            <div>
            <select name="sexe" id="sex" className="text-dark">
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
                <option value="Autre">Autre</option>
            </select>
            </div>
            <label htmlFor="age">Quel est votre âge ?</label><br></br>
            <input type="number" name="age" id="age" className="text-dark"></input><br></br>
            <label htmlFor="healthProblems">Avez-vous des problèmes de santé ?</label><br></br>
            <div>
                <select name="sante" id="healthProblems" className="text-dark">
                    <option value="true">Oui</option>
                    <option value="false">Non</option>
                </select>
            </div>
            <div className="flex flex-row flex-nowrap justify-center items-center content-stretch">
            <button className="border-2 rounded-md border-white px-6" value="submit">Valider</button>
            </div>
        </form>
        </div>
        </>
    )
}

