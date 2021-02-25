import { usedCountries } from './../stores/store'
import { result } from './../stores/store'

function camelCase(str) {  //Convierte nombre de países a camelCase
		return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) 
		{ 
				return index == 0 ? word.toLowerCase() : word.toUpperCase(); 
		}).replace(/\s+/g, '');
}
  
export const addNewCountryItem = async (pais, titulo, contenido, enlace, textoenlace) => {
  const res = {
    pais,
    items: [
      {
        titulo,
        contenido,
        enlace,
        textoenlace
      }
    ]
  }
  $result.push(res)
  localStorage.setItem(res);
  $usedCountries.push(pais);

}

export const addToCountryItem = async (pais, titulo, contenido, enlace, textoenlace) => {
  const i = $result.indexOf(pais);
  const res = {
    titulo,
    contenido,
    enlace,
    textoenlace
  }
  $result[i].items.push(res);
}

export const writeNewCountry = async (pais, titulo, contenido, enlace, textoenlace) => {
  const res = `
                <div class="boletin-titulo-pais" id="${camelCase(pais)}Title">${pais}</div>
                <div class="boletin-texto-pais" id="${camelCase(pais)}Text">
                  <div class="boletin-titulo-noticia">${titulo}</div>
                  <div class="boletin-texto-noticia">${contenido}</div>
                  <div class="boletin-link-noticia"><a href="${enlace}">${textoenlace}</a></div>
                </div>
              `;
  return res;
}