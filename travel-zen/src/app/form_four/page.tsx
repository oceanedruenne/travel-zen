"use client";
import "../globals.css";
import Link from "next/link";
import { OtherPage } from "../components/OtherPage";
import { CurrentPage } from "../components/CurrentPage";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const { DateTime } = require("luxon");


export default function FormFour() {
  const [personData, setPersonData] = useState();
  const router = useRouter();
  const idPerson = useSearchParams().get("idPerson");
  const [travels, setTravels] = useState();
  const [continent, setContinent] = useState();
  const [accompagnement, setAccompagnement] = useState();


  useEffect(() => {
    fetch(`http://localhost:3001/accompagnement/1`)
      .then(async (data) => {
        const response = await data.json();
        setAccompagnement(response);
      })
      .catch((error) => console.error(error.message));
  });

  useEffect(() => {
    fetch(`http://localhost:3001/travel/${idPerson}`)
      .then(async (data) => {
        const response = await data.json();
        setTravels(response);
      })
      .catch((error) => console.error(error.message));
  }, [idPerson]);

  useEffect(() => {
    fetch(`http://localhost:3001/profile/${idPerson}`)
      .then(async (data) => setPersonData(await data.json()))
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

  const handleGenerateList = () => {
    router.push("/form_five?idPerson=" + idPerson);
  };

  return (
    <>
      <div className="flex flex-row flex-nowrap justify-evenly items-baseline content-stretch">
        <OtherPage number="1." title="Profil"></OtherPage>
        <OtherPage number="2." title="Voyage"></OtherPage>
        <OtherPage number="3." title="Accompagnement"></OtherPage>
        <CurrentPage number="4." title="Résumé"></CurrentPage>
        <OtherPage number="5." title="Liste"></OtherPage>
      </div>
      <div className="text-white text-s text-white border-4 rounded-md border-white px-6 pt-3 pb-3">
        <p className="text-m">Résumé de vos réponses</p>
        <div>
          <p className="text-sm">Concernant votre profil..</p>
          <p>Vous êtes de sexe:  {personData?.sex}</p>
          <p>Vous avez {personData?.age} ans</p>
          {personData?.healthProblems ? (
          <p>Vous avez des problèmes de santé.</p>
        ) : (
          <p>Vous n'avez pas de problèmes de santé.</p>
        )}
        </div>
        <div>
          <p className="text-sm">Concernant votre voyage..</p>
          <p>Vous allez partir en {continent?.name}.</p>
          <p>
          Vous partez le {formatDateToFrenchFormat(start)}, vous revenez le {formatDateToFrenchFormat(end)} : vous partez donc {calculateDateDifference(start, end)} jours.
          </p>
          <p>Vous allez en voyage en {travels?.transportTrip}.</p>
          {travels?.speakTheLanguage ? (
          <p>Vous parlez la langue de votre destination.</p>
        ) : (
          <p>Vous ne parlez pas la langue de votre destination.</p>
        )}
          <p>
            Sur place, votre/vos moyen(s) de transport sera/seront : {travels?.localTransport}.
          </p>
        </div>
        <div>
          <p className="text-sm">Concernant vos accompagnants</p>
          {accompagnement?.travelAlone ? (
    <p>Vous allez voyager seul(e).</p>
  ) : (
    <p>
      Vous serez accompagné(e) pendant votre voyage.
      {accompagnement?.olderPerson ? <p>Vous serez accompagné(e) de personnes âgées.</p> : <p>Pas de personnes âgées avec vous.</p>}
      {accompagnement?.children ? <p>Vous serez accompagné(e) d'enfants.</p> : <p>Pas d'enfants à charge.</p>}
    </p>
  )}
        </div>
        <div className="flex flex-row flex-nowrap justify-center items-center content-stretch">
          <button
            className="border-2 rounded-md border-white px-6"
            onClick={handleGenerateList}
          >
            Générer ma liste
          </button>
        </div>
      </div>
    </>
  );
}
