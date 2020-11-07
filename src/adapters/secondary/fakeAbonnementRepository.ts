import { Abonnement } from "../../core/port/Abonnement";
import { AbonnementRepository } from "../../core/port/AbonnementRepository";
export class fakeAbonnementRepository implements AbonnementRepository {
    constructor(private abonnements: Array<Abonnement>) { }
    save(abonnement: Abonnement): void {
        this.abonnements.push(abonnement);
    }
}
