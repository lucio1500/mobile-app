var nombreNav;

if(document.getElementById("inpName") != undefined)
{
  nombreNav = document.getElementById("inpName").value;
}


function load()
{
  document.getElementById("pagina1").style.display = "block";
  document.getElementById("pagina2").style.display = "none";
  document.getElementById("pagina3").style.display = "none";
    // const formulario = document.getElementById("form-container");
    // formulario.innerHTML = `      
    //     <div class="stylized" id="hola">
    //     <!-- <label for="first_name">Player's First Name:</label> -->
    //     <div class="form-floating">
    //       <input type="text" class="form-control" id="floatingFirstName" placeholder="Player's First Name">
    //       <label for="floatingFirstName">Player's First Name</label>
    //     </div>
    //     <div class="form-floating">
    //       <input type="text" class="form-control" id="floatingLastName" placeholder="Last Name">
    //       <label for="floatingLastName">Last Name</label>
    //     </div>
    //     <div class="form-floating">
    //       <input type="text" class="form-control" id="floatingStreet" placeholder="Street Address">
    //       <label for="floatingStreet">Street Address</label>
    //     </div>
    //     <div class="form-floating">
    //       <input type="text" class="form-control" id="floatingCity" placeholder="City">
    //       <label for="floatingCity">City</label>
    //     </div>
    //     <div class="form-floating">
    //       <input type="text" class="form-control" id="floatingZip" placeholder="Zip Code">
    //       <label for="floatingZip">Zip Code</label>
    //     </div>
    //       <input type="date" class="form-control" id="floatingBirthDate" placeholder="Birth Date (mm/dd/yyyy)">
    //     <div class="form-floating">
    //       <input type="text" class="form-control" id="floatingParent" placeholder="Parent/Guardian Name">
    //       <label for="floatingParent">Parent/Guardian Name</label>
    //     </div>
    //     <div class="form-floating">
    //       <input type="text" class="form-control" id="floatingContactPhone" placeholder="Contact Phone">
    //       <label for="floatingContactPhone">Contact Phone</label>
    //     </div>
    //     <div class="form-floating">
    //       <input type="text" class="form-control" id="floatingContactEmail" placeholder="Contact Email">
    //       <label for="floatingContactEmail">Contact Email</label>
    //     </div>
    //   </div>
    //   <div class="progress mt-2">
    //     <div class="progress-bar bg-success" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
    //     <div class="progress-bar bg-dark" role="progressbar" style="width: 67%" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
    //   </div>`;
}



load();

function paginacion()
{ 
    // const formulario = document.getElementById("form-container");
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

paginacion();

var block_button = 0;
$(".fa-lg").click(function(e){
  e.preventDefault;
  var categorie = $(this).parent().attr('class');
  var selector = categorie+' p:last';
  selector = '.'+selector;
  console.log(selector);
  $(selector).after("<button class='cta' type='button'>Valider les modifications</button>");
});