// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => (
  { 
    specimenNum, 
    dna,
    mutate() {
      let newDna ='';
      const randIndex = Math.floor(Math.random() * this.dna.length);
      do {
        newDna = returnRandBase();
      } while(this.dna[randIndex] === newDna);
      this.dna[randIndex] == newDna;
    },
    compareDNA(pAequor) {
      const commonBases = pAequor.dna.filter((base, index) => base === this.dna[index]);
      const commonPercent = (commonBase.length / this.dna.length) * 100;
      console.log(`specimen #1 and specimen #2 have ${commonPercent} DNA in common`)
    },
    willLikelySurvive() {
      const dnaCG = this.dna.filter(base => base === 'C' || base === 'G');
      const ratioCG = dnaCG.length / this.dna.length;
      return ratioCG >= 0.6;
    }
  }
);

let pAequorInstances = []
let id = 1;
while(id <= 30) {
  let tPaquor = pAequorFactory(id, mockUpStrand());
  if (tPaquor.willLikelySurvive) {
    pAequorInstances.push(tPaquor);
    id+=1;
  }
}

console.log(pAequorInstances.length)


