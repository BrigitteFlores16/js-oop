class Veicolo {
    constructor(marca, anno, colore) {
      this.marca = marca;
      this.anno = anno;
      this.colore = colore;
    }
    informazioni() {
      return `Marca: ${this.marca},  Anno: ${this.anno},  Colore: ${this.colore}`;
    }
    calcolaEta() {
      const annoVeicolo = new Date().getFullYear();
      return annoVeicolo - this.anno;
    }
  }
   const vehicle = new Veicolo('Fiat', 2019 , 'blu');
   console.log(vehicle.informazioni());
   
   class Automobile extends Veicolo {
    constructor(marca, anno, colore, numPorte, Carburante) {
      super(marca, anno, colore);
      this.numPorte = numPorte;
      this.Carburante = Carburante;
    }
    infoAutomobile() {
      return `Numero di porte: ${this.numPorte}, Tipo di carburante: ${this.Carburante}`;
    }

  }
  const Auto = new Automobile('Opel', 2020, 'nera', 4, 'benzina'); 
  console.log(Auto.infoAutomobile());
