class General{
  get name(){
    return this.name;
  }
  set name(name){
    this.name=name;
  }

  get active(){
    return this.active;
  }
  set active(active){
    this.active=active;
  }
  get numberActive(){
    return this.numberActive;
  }
  set numberActive(num){
    this.numberActive=num;
  }
  get maxActive(){
    return this.maxActive;
  }
  set maxActive(num){
    this.maxActive=num;
  }


  get initialCost(){
    return this.initialCost;
  }
  set initialCost(num){
    this.initialCost=num;
  }
  get costIncrease(){
    return this.maxActive;
  }
  set costIncrease(num){
    this.costIncrease=num;
  }
  get percentIncreasePerLevel(){
    return this.maxActive;
  }
  set percentIncreasePerLevel(num){
    this.maxActive=num;
  }

  get languages(){
    return this.languages;
  }
  set languages(lang){
    this.languages=lang;
  }
}

class Programmer extends General{
  get linesOfCode(){//how much code
    return this.linesOfCode;
  }
  set linesOfCode(num){
    this.linesOfCode=num;
  }
  get workingSeconds(){//in x seconds
    return this.workingSeconds;
  }
  set workingSeconds(num){
    this.workingSeconds=num;
  }
}
class Language extends General{
  get extraLinesMultiplier(){
    return this.extraLinesMultiplier;
  }
  set extraLinesMultiplier(num){
    this.extraLinesMultiplier=num;
  }
}
class Paradigm extends General{
  get extraLinesMultiplier(){//programmers produce more
    return this.extraLinesMultiplier;
  }
  set extraLinesMultiplier(num){
    this.extraLinesMultiplier=num;
  }
  get percentLinesKept(){//keep lines after refactor
    return this.percentLinesKept;
  }
  set percentLinesKept(num){
    this.percentLinesKept=num;
  }
  get hireRateReduction(){//hire/upgrade cheaper
    return this.hireRateReduction;
  }
  set hireRateReduction(num){
    this.hireRateReduction=num;
  }
  get fasterCode(){//programmers code faster
    return this.fasterCode;
  }
  set fasterCode(num){
    this.fasterCode=num;
  }
  get programmers(){//which coders get another language
    return this.programmers;
  }
  set programmers(prog){
    this.programmers=prog;
  }

}