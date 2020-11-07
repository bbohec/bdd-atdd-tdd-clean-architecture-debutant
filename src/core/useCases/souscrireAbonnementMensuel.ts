import { AbonnementRepository } from "../port/AbonnementRepository";
export function souscrireAbonnementMensuel(nomDeclient: string, nomDeFormule: string,abonnementRepository:AbonnementRepository) {
    abonnementRepository.save({
        abonné: nomDeclient,
        formule: nomDeFormule,
        prix: 100,
        fréquencePaiement: "Mensuel"
    })
}

