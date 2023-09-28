"use client";
import "../globals.css"
import { OtherPage } from "../components/OtherPage"
import { useEffect, useState } from "react"
import { redirect, useRouter, useSearchParams } from "next/navigation"
import { CurrentPage } from "../components/CurrentPage"
const { DateTime } = require("luxon");


export default function FormFive()
{
    const idPerson = useSearchParams().get("idPerson");
    if (!idPerson)
    {
        redirect('/form_one');
    }

    const router = useRouter();
    const [travels, setTravels] = useState();
    const [continent, setContinent] = useState();
 
  
    useEffect(() => {
      fetch(`http://localhost:3001/travel/${idPerson}`)
        .then(async (data) => {
          const response = await data.json();
          setTravels(response);
        })
        .catch((error) => console.error(error.message));
    }, [idPerson]);
  
  
  
    const continentId = travels?.ContinentId;
    useEffect(() => {
      fetch(`http://localhost:3001/continent/${continentId}`)
        .then(async (data) => setContinent(await data.json()))
        .catch((error) => console.error(error.message));
    }, [continentId]);
  
  
    const start = travels?.startDate;
    const end = travels?.endDate;
  
    function formatDateToFrenchFormat(isoString) {
      if (!isoString) return null;
      const date = DateTime.fromISO(isoString);
      return date.toFormat('dd MM yyyy');
    }
  
    function calculateDateDifference(startIsoString, endIsoString) {
      if (!startIsoString || !endIsoString) return null;
      const startDate = DateTime.fromISO(startIsoString);
      const endDate = DateTime.fromISO(endIsoString);
      const differenceInDays = endDate.diff(startDate, 'days').toObject().days;
      return differenceInDays;
    }

    return (
       <><div className="flex flex-row flex-nowrap justify-evenly items-baseline content-stretch">
            <OtherPage number="1." title="Profil"></OtherPage>
            <OtherPage number="2." title="Voyage"></OtherPage>
            <OtherPage number="3." title="Accompagnement"></OtherPage>
            <OtherPage number="4." title="Résumé"></OtherPage>
            <CurrentPage number="5." title="Liste"></CurrentPage>
        </div><div className="flex flex-col flex-nowrap justify-center items-start content-stretch mt-8 text-white">
                <p className="text-m">Votre liste d'affaires pour votre voyage de {calculateDateDifference(start, end)} jours :</p>
                <p className="text-m mt-6">Habillement: </p>
                <div>
                    <label htmlFor="underwear"> {calculateDateDifference(start, end)} Sous-vêtements</label>
                </div>
                <div>
                    <label htmlFor="socks"> {calculateDateDifference(start, end)}Chaussettes</label>
                </div>
                <div>
                    <label htmlFor="bottom"> {calculateDateDifference(start, end)}Bas</label>
                </div>
                <div>
                    <label htmlFor="tops"> {calculateDateDifference(start, end)} Hauts</label>
                </div>
                <div>
                    <label htmlFor="pajamas">{calculateDateDifference(start, end)} Pyjamas</label>
                </div>
                <p className="text-m mt-6">Santé: </p>
                <div>
                    <label htmlFor="pansements">Pansements</label>
                </div>
                <div>
                    <label htmlFor="desinfectant">Désinfectant</label>
                </div>
                <div>
                    <label htmlFor="pills">Traitement(s) médicamenteux quotidien pour {calculateDateDifference(start, end)} jours</label>
                </div>
                <div>
                    <label htmlFor="medocs">Médicaments utiles : Doliprane, Spasfon, NausiCalm</label>
                </div>
                <div>
                    <label htmlFor="serum">Sérum physiologique</label>
                </div>
                <p className="text-m mt-6">Hygiène: </p>
                <div>
                    <label htmlFor="cotons">Cotons</label>
                </div>
                <div>
                    <label htmlFor="cotons-tiges">Cotons tiges</label>
                </div>
                <div>
                    <label htmlFor="gel">Gel hydroalcoolique</label>
                </div>
                <div>
                    <label htmlFor="protections">Protections hygiéniques pour {calculateDateDifference(start, end) * 2} jours</label>
                </div>
                <div>
                    <label htmlFor="déo">Déodorant</label>
                </div>
                <div>
                    <label htmlFor="ongles">Coupe ongles</label>
                </div>
                <div>
                    <label htmlFor="dents">Brosse à dents et dentifrice</label>
                </div>
                <div>
                    <label htmlFor="cheveux">Brosse à cheveux</label>
                </div>
                <div>
                    <label htmlFor="insectes">Tire tiques et crème anti moustiques</label>
                </div>
                <p className="text-m mt-6">Administratif: </p>
                <div>
                    <label htmlFor="passeport">Passeport</label>
                </div>
                <div>
                    {continent?.name === 'Europe' && (
                        <label htmlFor="ameli">Carte européenne d'assurance maladie</label>
                    )}
                </div>
                <div>
                    <label htmlFor="copie">Copie du passeport, carte d'identité</label>
                </div>
                <div>
                    <label htmlFor="argent">Argent en liquide</label>
                </div>
                <div>
                    <label htmlFor="cc">Carte de crédit</label>
                </div>
                <div>
                    <label htmlFor="permis">Permis de conduire</label>
                </div>
                <p className="text-m mt-6">Autres: </p>
                <div>
                    <label htmlFor="telephone">Téléphone portable avec son chargeur et ses écouteurs</label>
                </div>
                <div>
                    <label htmlFor="mouchoirs">Mouchoirs</label>
                </div>
                <div>
                    <label htmlFor="encas">En-cas et boissons</label>
                </div>
                <div>
                    <label htmlFor="lunettes">Lunettes, étui, lingettes</label>
                </div>
                <div>
                    <label htmlFor="occuper">De quoi s'occuper : livres, jeux, jouets</label>
                </div>
                <div>
                    <label htmlFor="doudous">Doudous, peluches</label>
                </div>
                <div>
                    <label htmlFor="carte">Carte de l'endroit des vacances</label>
                </div>
                <p className="text-m mt-6">Vaccins: </p>

            </div></>
  );
}