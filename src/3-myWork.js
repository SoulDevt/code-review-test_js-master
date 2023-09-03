/**
 * Dépendences non inclues, aucun résultat n'est attendu à l'exécution de ce fichier
 * L'exercice a pour objectif de déterminer votre capacité à reprendre du code existant :
 * Il faut revoir le fond, la forme et les erreurs potentielles
 * Vous devez modifier le code et mettre des commentaires si besoin
 */

const axios = require('axios');

const REFERENT = 'REFERENT';
const GENERIC = 'GENERIC'; // constant variable in MAJ to keep a clean code and to differentiate the variables type in the code

class Product {
    constructor(pId) { //constructor instead of Product
        this.id = pId;
        this.data = {}; //this.data instead of this.donnee to keep the english logic of the code
    }

    loadData() {
        let id = this.id;
        // return new Promise(function (pResolve, pReject) {
        //     axios.get('https://api.vidal.fr/api/product/' + id).then(function (pResult) {
        //         this.data = pResult.data; //this.data instead of this.donnee
        //         pResolve();
        //     }, pReject);
        // });

        //use of arrow syntax and catch errors
        return new Promise((pResolve, pReject) => {
            axios.get('https://api.vidal.fr/api/product/' + id)
                .then((pResult) => {
                    this.data = pResult.data; //this.data instead of this.donnee
                    pResolve();
                })
                .catch(pReject) //always catch errors in case of problems
        })


    }

    getNom() {
        return this.data.name;
    }

    isSupprime() {
        return this.data.marketStatus === 'DELETED';
    }

    isReferent() {
        return this.data.type === REFERENT;
    }

    getMolecules() {
        if (this.data && this.data.molecules) { //this.data instead of this.donnee
            return this.data.molecules; //this.data instead of this.donnee
        }
        else {
            return [];
        }
    }

    getClassification() {
        return this.data.classification || []; //this.data instead of this.donnee
    }
}


let doliprane = new Product(19649);

doliprane.loadData().then(() => {
    console.log(doliprane.getNom());
    doliprane.getMolecules().forEach((pMolecule) => { //forEach instead of foreach
        console.log(pMolecule.name);
    })

    for (i = 0; i <= doliprane.getClassification().length; i++) {
        let classif = doliprane.getClassification()[i]; //let instead of var
        console.log(classif.name);
    }

}).catch((e) => { //use of catch for catching errors
    console.error('Impossible de charger les informations pour le produit demandé', e);
});


console.log(doliprane.isSupprime());