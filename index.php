<?php include("includes/../header.php");?>

<!-- titulo -->
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <h1 class="header center orange-text">Juego Tres En Raya</h1>
      <div class="row center">
        <h5 class="header col s12 light">Juego Tres En Raya|Tic Tac Toe con inteligencia artificial.</h5>
      </div>
    </div>
  </div>
  <!-- juego-->
<div id="content_board">
        <div id="board">
          <div class="rows">
            
            <div class="row">
              <div id="c02" class="cell" onClick="CheckCell(0,2)"></div>
              <div id="c12" class="cell" onClick="CheckCell(1,2)"></div>
              <div id="c22" class="cell" onClick="CheckCell(2,2)"></div>
            </div>
            
            <div class="row">
              <div id="c01" class="cell" onClick="CheckCell(0,1)"></div>
              <div id="c11" class="cell" onClick="CheckCell(1,1)"></div>
              <div id="c21" class="cell" onClick="CheckCell(2,1)"></div>
            </div>

            <div class="row">
              <div id="c00" class="cell" onClick="CheckCell(0,0)"></div>
              <div id="c10" class="cell" onClick="CheckCell(1,0)"></div>
              <div id="c20" class="cell" onClick="CheckCell(2,0)"></div>
            </div>
          </div>



        </div>
      </div>
<!--n-->

        <div class="row center " id="message">
        <div class="col s12 m12">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title" id="notification"></span><div class="row valign-wrapper">
            <div class="col s4 row">
              <img src="bender.gif" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
            </div>
            </div>
            <div class="card-action">
              <a class="  btn-large blue-grey darken-1" id="button" onclick = "autoplay()"></a>
            </div>
          </div>
        </div>

</div>
</div>


  <!-- juego-->
<!-- Instrucciones-->
 <ul class="collapsible" data-collapsible="accordion">
    <li>
      <div class="collapsible-header light-blue lighten-1 center-align white-text"><i class="material-icons">speaker_notes</i>Instrucciones Del Juego</div>
      <div class="collapsible-body center-align"><span>Intenta poner tres fichas en linea. 
        Puede ser vertical, horizontal y diagonal. <br>
        Cada jugador puede utilizar únicamente 3 fichas <br>
        Podrás mover una ficha una vez que tengas las tres en el tablero. <br>
        ¡Buena Suerte! 
      </span></div></li>
  </ul>
  
<?php   include("includes/../footer.php"); ?>