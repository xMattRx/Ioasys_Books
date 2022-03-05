export function getName(){
  let informations = JSON.parse(sessionStorage.getItem('informations'))
  return informations.name
}