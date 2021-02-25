<script>
  // export let fullcode;

  import { result, newUpdate, resetSession } from './../stores/store'
  import { onMount, createEventDispatcher } from 'svelte'

  let htmlResult = "";

  $: if ($newUpdate === true) {
      createCode();
      sendCode();
      $newUpdate = false;
    }
  $: if ($resetSession == true) {
    htmlResult = ""
    createCode();
    sendCode();
    $resetSession = false;
  }

  const updateResultsWithLocalStorage = () => {
    if (localStorage.getItem("result")) {
      $result = JSON.parse(localStorage.getItem("result"));
    }
  }

  onMount(updateResultsWithLocalStorage);

  function camelCase(str) { 
		return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) 
		{ 
				return index == 0 ? word.toLowerCase() : word.toUpperCase(); 
		}).replace(/\s+/g, '');
	}

  export const createCode = async () => {
    htmlResult = "";
    $result.forEach( (e) => {
      if (e.items[1]) {
        // deal with multiple items
        let partial = `<div class="boletin-titulo-pais" id="${camelCase(e.pais)}Title">${e.pais}</div>
                    <div class="boletin-texto-pais" id="${camelCase(e.pais)}Text">
                  `.replace(/ \t+/g, "\n").replace(/  +/g, ' ');
        e.items.forEach( (i) => {
          partial = partial + `
                                <div class="boletin-titulo-noticia">${i.titulo}</div>
                                <div class="boletin-texto-noticia">${i.contenido}</div>
                                <div class="boletin-link-noticia"><a target="_blank" rel="nofollow" href="${i.enlace}">${i.textoenlace}</a></div>
                                <hr>
                              `.replace(/ \t+/g, "\n").replace(/  +/g, ' ');
                            })
        htmlResult = htmlResult + partial + "</div>";
      } else {
        // deal with single item
        htmlResult = htmlResult + `
        <div class="boletin-titulo-pais" id="${camelCase(e.pais)}Title">${e. pais}</div>
        <div class="boletin-texto-pais" id="${camelCase(e.pais)}Text">
        <div class="boletin-titulo-noticia">${e.items[0].titulo}</div>
        <div class="boletin-texto-noticia">${e.items[0].contenido}</div>
        <div class="boletin-link-noticia"><a target="_blank" rel="nofollow" href="${e.items[0].enlace}">${e.items[0].textoenlace}</a></div>
        </div>
        `.replace(/ \t+/g, "\n").replace(/  +/g, ' ');
      }
    });
  }

  onMount(createCode);

  export const sendCode = () => {
    let endCode = document.getElementById("code");
    endCode.innerText = htmlResult;
  }

  onMount(sendCode);
</script>

<h1>Código</h1>
  <div class="codearea"><textarea id="code" placeholder="Rellena el formulario" wrap="soft"></textarea></div>

<style>
  h1 {
    text-align: center;
    padding: 1rem;
    text-transform: uppercase;
  }
  .codearea {
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }
  #code {
    text-align: left;
    padding: 1rem;
    min-height: 90vh;
    font-family: monospace;
    border: 1px dashed grey;
    color: #444;
  }
</style>