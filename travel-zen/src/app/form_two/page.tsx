'use client'
import "../globals.css"
import { CurrentPage } from "../components/CurrentPage"
import { OtherPage } from "../components/OtherPage"
import { redirect, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"


export default function FormTwo()
{

    const router = useRouter()
    const { DateTime } = require("luxon");
    const [days, setDays] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");  
    const idPerson = useSearchParams().get("idPerson");

    if (!idPerson)
    {
        redirect('/form_one');
    }

    useEffect(() => calculateDays(), [startDate, endDate]);

    function calculateDays()
    {
    
        console.log(startDate);
        console.log(endDate);

        var start = DateTime.fromISO(startDate);
        var end = DateTime.fromISO(endDate);

        if ( end.hasSame(start,'year') && end < start)
        {
            alert('Merci de corriger la date de départ');
        }
        var diffDays = end.diff(start, 'days');
        var numberOfDays = diffDays.toObject();
        console.log("nombre de jours : ", numberOfDays.days);
        setDays(numberOfDays.days);

    }

    const validateForm = async (event: any) =>
    {
        event.preventDefault();
        console.log("1");
        const data = {
            startDate: event.target.startDate.value,
            endDate: event.target.endDate.value,
            days: days, 
            transportTrip: event.target.transportTrip.value,
            speakTheLanguage: event.target.speakTheLanguage.value as boolean,
            localTransport: event.target.localTransport.value, 
            ContinentId: event.target.continentId.value,
            ProfileId: idPerson
        }
        console.log(data);
        console.log("2");

        const JSONdata = JSON.stringify(data);

        const endpoint = 'http://localhost:3001/createTravel'
        console.log("3");

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
        console.log("result id: ",result.ProfileId);
        console.log("idPerson :", idPerson);
        console.log(result.ProfileId == idPerson ? "oui" : "non");
      
        console.log("4");

  
        router.push("/form_three?idPerson="+result.ProfileId);
    }



    
    return (
        <>
        <div className="flex flex-row flex-nowrap justify-evenly items-baseline content-stretch">
            <OtherPage number="1." title="Profil"></OtherPage>
            <CurrentPage number="2." title="Voyage"></CurrentPage>
            <OtherPage number="3." title="Accompagnement"></OtherPage>
            <OtherPage number="4." title="Résumé"></OtherPage>
        </div>
        <div className="flex flex-col flex-nowrap justify-center items-center content-stretch mt-8">
            <form className="bg-dark text-white text-s border-4 rounded-md border-white px-6 pt-3 pb-3" onSubmit={validateForm}>
                <label htmlFor="continentId">Dans quel continent allez-vous ?</label><br></br>
                <select name="continentId" id="continentId" className="text-dark">
                    <option value="1">Europe</option>
                    <option value="2">Asie</option>
                    <option value="3">Afrique</option>
                    <option value="4">Océanie</option>
                    <option value="5">Amérique du Nord</option>
                    <option value="6">Amérique du Sud</option>
                </select><br></br>
                <label htmlFor="pays">Dans quel pays allez-vous ?</label><br></br>
                <input type="text" name="pays" id="pays" className="text-dark"></input><br></br>
                <label htmlFor="startDate">Quelle est la date de l'aller ?</label><br></br>
                <input type="date" name="startDate" id="startDate" className="text-dark" value={startDate} onChange={(event) =>  setStartDate(event.target.value)}></input><br></br>
                <label htmlFor="endDate">Quelle est la date du retour ?</label><br></br>
                <input type="date" name="endDate" id="endDate" value={endDate} onChange={(event) => setEndDate(event.target.value)} className="text-dark"></input>
                <p>Vous partez {days} jours. </p>
                <label htmlFor="transportTrip">Quel(s) moyen(s) de transport utilisez-vous pour vous y rendre ?</label><br></br>
                <select name="transportTrip" id="transportTrip-select" className="text-dark">
                    <option value="Voiture">Voiture</option>
                    <option value="Vélo">Vélo</option>
                    <option value="Avion">Avion</option>
                    <option value="Train">Train</option>
                    <option value="Bateau">Bateau</option>
                </select><br></br>
                <label htmlFor="langue">Parlez-vous la langue de ce pays ?</label><br></br>
                <div className="flex flex-row flex-nowrap content-stretch">
                <select name="speakTheLanguage" id="speakTheLanguage" className="text-dark">
                    <option value="true">Oui</option>
                    <option value="false">Non</option>
                </select>
                </div>
                <label htmlFor="localTransport">Quel(s) moyen(s) de transport comptez-vous utiliser sur place ?</label><br></br>
                <select name="localTransport" id="localTransport" className="text-dark">
                    <option value="À pieds">À pieds</option>
                    <option value="Vélo">Vélo</option>
                    <option value="Voiture">Voiture</option>
                    <option value="Moto">Moto</option>
                    <option value="Autre">Autre</option>
                </select><br></br>
                <div className="flex flex-row flex-nowrap justify-center items-center content-stretch">
                  <button className="border-2 rounded-md border-white px-6" value="submit">Valider</button>
                </div>
            </form>
        </div>
        </>
    )
}
    

