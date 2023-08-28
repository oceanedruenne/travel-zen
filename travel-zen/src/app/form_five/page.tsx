'use client'
import "../globals.css"
import { OtherPage } from "../components/OtherPage"
import { useState } from "react"
import { redirect, useSearchParams } from "next/navigation"


export default function FormFive()
{
    const idPerson = useSearchParams().get("idPerson");
    if (!idPerson)
    {
        redirect('/form_one');
    }

    return (
        <>
        <div className="flex flex-row flex-nowrap justify-evenly items-baseline content-stretch">
            <OtherPage number="1." title="Profil"></OtherPage>
            <OtherPage number="2." title="Voyage"></OtherPage>
            <OtherPage number="3." title="Accompagnement"></OtherPage>
            <OtherPage number="4." title="Résumé"></OtherPage>
        </div>
        <div className="flex flex-col flex-nowrap justify-center items-start content-stretch mt-8 text-white">
        <p className="text-m">Votre liste d'affaires pour votre voyage de x jours :</p>
        <p className="text-s">Habillement : </p>
        <div>
            <input type="checkbox"/>
            <label htmlFor="underwear">Sous-vêtements</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="socks">Chaussettes</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="bottom">Bas</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="tops">Hauts</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="pajamas">Pyjamas</label>
        </div>
        <p className="text-s">Santé : </p>
        <div>
            <input type="checkbox"/>
            <label htmlFor="pansements">Pansements</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="desinfectant">Désinfectant</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="pills">Traitement(s) médicamenteux quotidien pour x jours</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="medocs">Médicaments utiles : Doliprane, Spasfon, NausiCalm</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="serum">Sérum physiologique</label>
        </div>
        <p className="text-s">Hygiène : </p>
        <div>
            <input type="checkbox"/>
            <label htmlFor="cotons">Cotons</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="cotons-tiges">Cotons tiges</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="gel">Gel hydroalcoolique</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="protections">Protections hygiéniques pour x jours</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="déo">Déodorant</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="ongles">Coupe ongles</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="dents">Brosse à dents et dentifrice</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="cheveux">Brosse à cheveux</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="insectes">Tire tiques et crème anti moustiques</label>
        </div>
        <p className="text-s">Administratif : </p>
        <div>
            <input type="checkbox"/>
            <label htmlFor="passeport">Passeport</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="ameli">Carte européenne d'assurance maladie si on est en Europe</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="copie">Copie du passeport, carte d'identité</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="argent">Argent en liquide</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="cc">Carte de crédit</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="permis">Permis de conduire</label>
        </div>
        <p className="text-s">Autres : </p>
        <div>
            <input type="checkbox"/>
            <label htmlFor="telephone">Téléphone portable avec son chargeur et ses écouteurs</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="mouchoirs">Mouchoirs</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="encas">En-cas et boissons</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="lunettes">Lunettes, étui, lingettes</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="occuper">De quoi s'occuper : livres, jeux, jouets</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="doudous">Doudous, peluches</label>
        </div>
        <div>
            <input type="checkbox"/>
            <label htmlFor="carte">Carte de l'endroit des vacances</label>
        </div>
        </div>
        </>
    )
}

