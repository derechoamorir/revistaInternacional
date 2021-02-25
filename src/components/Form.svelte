<script>
  import { result, newUpdate, resetSession } from './../stores/store'
  import { usedCountries } from './../stores/store'
  import { createEventDispatcher } from 'svelte'

  let pais, titulo, contenido, enlace, textoenlace;

  const dispatch = createEventDispatcher();

  const cleanLocalStorage = () => {
    localStorage.clear();
    $result = [];
    $resetSession = true;
    console.log("Borrado localstorage");
  }

  const resetForm = () => {
    const form = document.getElementById("form").reset();
  }


  const handleSubmit = async () => {
    let isCountryAdded = [...$result].some( (e) => e.pais === pais)
    if (isCountryAdded === true) {
      await addToCountryItem(pais, titulo, contenido, enlace, textoenlace);
      $newUpdate = true;
    } else {
      await addNewCountryItem(pais, titulo, contenido, enlace, textoenlace);
      $newUpdate = true;
    }
    // $result = [...$result, {pais, titulo, contenido, enlace, textoenlace}];
    // console.log(pais, titulo, contenido, enlace, textoenlace);
    resetForm();
  }

  export const addNewCountryItem = async () => {
  const res = {
    pais: pais,
    items: [
      {
        titulo: titulo,
        contenido: contenido,
        enlace: enlace,
        textoenlace: textoenlace
      }
    ]
  }
  $result = [...$result, res]
  $usedCountries = [...$usedCountries, pais]
  localStorage.setItem("result", JSON.stringify($result));

}

export const addToCountryItem = async () => {
  const isCountry = (e) => e.pais === pais
  const i = $result.findIndex(isCountry);
  const res = {
    titulo,
    contenido,
    enlace,
    textoenlace
  }
  // console.log(i);
  // [...$result]
  $result[i].items.push(res);
  localStorage.setItem("result", JSON.stringify($result));
}
</script>

<form on:submit|preventDefault={handleSubmit} id="form">
  <input type="text" id="pais" bind:value={pais} placeholder="País" required autocomplete="country-name">
  <input type="text" id="titulo"bind:value={titulo} placeholder="Título" required autocomplete="on">
  <textarea id="contenido" placeholder="Contenido" bind:value={contenido} required></textarea>
  <input type="url" id="enlace" bind:value={enlace} placeholder="http://" required>
  <input type="text" id="textoenlace" bind:value={textoenlace} placeholder="Texto enlace" required>
  <button>Enviar</button>
</form>
<button on:click|preventDefault={cleanLocalStorage}>Resetear</button>

<style>
  form {
    display: block;
  }

  input {
    display: block;
    width: 90%;
    font-size: 1.2rem;
    margin: 1rem 0;
    padding: 1rem;
  }

  textarea {
    width: 90%;
    padding: 1rem;
    display: block;
    height: 10rem;
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
  }
  button {
    font-size: 1.2rem;
    margin: 1rem auto;
  }
</style>