function scuberGreetingForFeet(ride){
  let results
 if (ride<=400){
  results="This one is on me!"
 }
 else if (ride >400 && ride<2000){
  results="That will be twenty bucks."
 } else if (ride>=2000 && ride<=2500){
  results='I will gladly take your thirty bucks.'
 } else{
  results="No can do."
 }
 return results
}



function ternaryCheckCity(city){
  return city==="NYC"? 'Ok, sounds good.': 'No go.'
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
      default:
        return 'Bye.'
  }
}