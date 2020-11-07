import { Abonnement } from "./Abonnement";
export interface AbonnementRepository {
    save(abonnement: Abonnement): void;
}
