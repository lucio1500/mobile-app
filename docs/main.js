function cargaNombre(event)
{
  localStorage.clear();  
  let nombreNav = document.getElementById("inpName").value;
  localStorage.setItem("nombre",nombreNav);
}

function insertarNombre()
{
  var localName = localStorage.getItem("nombre");
  document.getElementById("nombre-nav").innerHTML = localName;
}

if(document.getElementById("nombre-nav")!=undefined)
{
  insertarNombre();
}

function load()
{
  document.getElementById("pagina1").style.display = "block";
  document.getElementById("pagina2").style.display = "none";
  document.getElementById("pagina3").style.display = "none";
}

function paginacion()
{ 
    const pag1 = document.getElementById("page-1");
    const pag2 = document.getElementById("page-2");
    const pag3 = document.getElementById("page-3");

    pag1.addEventListener("click", () => {
      document.getElementById("pagina1").style.display = "block";
      document.getElementById("pagina2").style.display = "none";
      document.getElementById("pagina3").style.display = "none";
      pag1.className = "active-pagination";
      pag3.className = pag1.className.replace( /(?:^|\s)active-pagination(?!\S)/g , '' );
      pag2.className =pag2.className.replace( /(?:^|\s)active-pagination(?!\S)/g , '' );
      });
      
      pag2.addEventListener("click", () => {
        document.getElementById("pagina1").style.display = "none";
        document.getElementById("pagina2").style.display = "block";
        document.getElementById("pagina3").style.display = "none";
      
        pag2.className = "active-pagination";
        pag1.className = pag1.className.replace( /(?:^|\s)active-pagination(?!\S)/g , '' );
        pag3.className =pag2.className.replace( /(?:^|\s)active-pagination(?!\S)/g , '' );
      });
    
      pag3.addEventListener("click", () => {
        document.getElementById("pagina1").style.display = "none";
        document.getElementById("pagina2").style.display = "none";
        document.getElementById("pagina3").style.display = "block";
        pag3.className = "active-pagination";
        pag1.className = pag1.className.replace( /(?:^|\s)active-pagination(?!\S)/g , '' );
        pag2.className =pag2.className.replace( /(?:^|\s)active-pagination(?!\S)/g , '' );
      });

}