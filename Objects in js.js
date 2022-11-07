function KillerInstinctGame(charGender, charOrigin, charPhrase, charName){
    this.gender = charGender
    this.origin = charOrigin
    this.phrase= charPhrase
    this.name = charName
    this.attack= function(){
        console.log("Hit em!!")
    }
     this.supermove= function(){
        console.log("Ultra!!!!")
    }
}let Cinder = new KillerInstinctGame(male, LavaEarth, "Blaze", Cinder)