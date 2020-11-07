/*
        Scénario : Souscription d'un nouveau client - paiement mensuel
            Sachant que le client identifié "client@hotmail.com" n'a pas d'abonnements
            Et la formule "form" avec un tarif à 100€/mois existe
            Quand le réceptionniste réalise la souscription à la formule "form" du client "client@hotmail.com" en paiement mensuel
            Alors le client identfié "client@hotmail.com" a un abonnement de 1 mois à 100€/mois
        Scénario : Souscription d'un nouveau client étudiant - paiement mensuel
            Sachant que le client identifié "étudiant@hotmail.com" n'a pas d'abonnements
            Et que ce même client soit un étudiant
            Et la formule "form" avec un tarif à 100€/mois existe
            Quand le réceptionniste réalise la souscription à la formule "form" du client "étudiant@hotmail.com" en paiement mensuel
            Alors le client identfié "étudiant@hotmail.com" a un abonnement de 1 mois à 100€/mois avec 20% de remise
        Scénario : Souscription d'un nouveau client - paiement annuel
*/
import 'mocha';
import chai = require("chai");
import { Client } from '../../core/port/Client';
import { souscrireAbonnementMensuel } from '../../core/useCases/souscrireAbonnementMensuel';
import { fakeAbonnementRepository } from "../../adapters/secondary/fakeAbonnementRepository";
import { Abonnement } from '../../core/port/Abonnement';
const expect = chai.expect;
const abonnements = new Array<Abonnement>()

describe(`Feature : Souscription d'un abonné
    En tant que réceptionniste,
    Afin que les clients puissent accéder à la salle de sport
    Je peux leu souscrire un abonnement
    `,()=> {
    describe(`Scénario : Souscription d'un nouveau client`,()=> {
        const clientEmail = "client@hotmail.com"
        const client:Client = {estAbonné:false, email:clientEmail}
        const nomDeFormule = "form"
        const formule = {nom:nomDeFormule, tarifMensuel:100}

        it(`Sachant que le client identifié "${clientEmail}" n'a pas d'abonnements`,()=> {
            expect(client.email).is.equal(clientEmail)
            expect(client.estAbonné).is.false
        })

        it(`Et la formule "${nomDeFormule}" avec un tarif à 100€/mois existe`,()=> {
            expect(formule.nom).equal(nomDeFormule)
            expect(formule.tarifMensuel).equal(100)
        })

        it(`Quand le réceptionniste réalise la souscription à la formule "${nomDeFormule}" du client "${clientEmail}" en paiement mensuel`,(done)=> {
            souscrireAbonnementMensuel(clientEmail, nomDeFormule,new fakeAbonnementRepository(abonnements))
            done()
        })

        it(`Alors le client identfié "client@hotmail.com" a un abonnement de 1 mois à 100€/mois en paiement mensuel`,()=> {
            expect(abonnements).deep.equal([{abonné:clientEmail,formule:nomDeFormule,prix:100,fréquencePaiement:"Mensuel"}])
        })
    })
})

