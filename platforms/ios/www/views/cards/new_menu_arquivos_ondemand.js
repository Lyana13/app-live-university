var new_menu_arquivos_ondemand = `
<div class="ondemand-body new_menu">

  <div class="card menu-arquivos-ondemand" id='modulo-x'>
    
    <ul class="card-content menu-arquivos-icons valign-wrapper material-de-aula collapsible">
      <li>
      <div class='cabecalho collapsible-header valign-wrapper' id-aula='<%=id_aula%>'>
        <div class="wrap-help-title">
          <i class="material-icons">help_outline</i>
          <p class="title-card">Dúvidas</p>
        </div>
        <div style="margin-left: 168px;">
        <i class="abrir material-icons">add</i>
        <i class="fechar material-icons">remove</i>
        </div>
      </div>
      <div class="corpo collapsible-body" id="collapsible-body">
        <p class="text-inner-corpo">Escreva aqui quais são suas dúvidas sobre a aula:</p>
        <div class="wrap-help-title">
           <input type="text" size="40">
           <img src="img/icons/send_button.png" alt="error_img">
         </div>
      </div>
      </li>
    </ul>
    </div>

    <div class="card menu-arquivos-ondemand" id='modulo-x'>
    <ul class="card-content menu-arquivos-icons valign-wrapper material-de-aula collapsible">
      <li>
      <div class='cabecalho collapsible-header valign-wrapper' id-aula='<%=id_aula%>'>
        <img class="img-doc" src="img/icons/material_icon.png" alt="error">
        <p class="title-card">Download do Material</p>
        <div style="margin-left: 64px;">
        <i class="abrir material-icons">add</i>
        <i class="fechar material-icons">remove</i>
        </div>
      </div>
      <div class="corpo collapsible-body" id="collapsible-body">
        <p class="text-inner-corpo">Aula 01 - Material de Aula - Planejamento de Marketing_V4.pdf</p>
      </br>
        <p class="text-inner-corpo">Aula 01 - Atividade - Estratégia de Marketing.xlsx
        </p>  
        </div>  
      </li>
    </ul>
    </div> 


    <div class="card menu-arquivos-ondemand" id='modulo-x'>

    <ul class="card-content menu-arquivos-icons valign-wrapper material-de-aula collapsible">
      <li>
      <div class='cabecalho collapsible-header valign-wrapper' id-aula='<%=id_aula%>'>
        <i class="material-icons">cloud_queue</i>
        <p class="title-card">Upload da Atividade</p>
        <div style="margin-left: 77px;    margin-top: -18px;">
        <i class=" abrir material-icons">
          <a class="modal-my waves-effect waves-light  modal-trigger" href="#modal1">+</a>
        </i>
        <i class="modal-my fechar material-icons">+</i>
      </div>
      </div>

      <div class="corpo collapsible-body" id="collapsible-body">
      	<div id="modal1" class="modal radius-mod">
          <div class="modal-content">
            <h4 class="title-modal">Bom Trabalho!</h4>
            <p class="paragraph-modal">O upload da sua atividade foi realizado com sucesso!</p>
            <img class="img-module" src="img/icons/Shape.png" alt="err">
          </div>
        </div> 
      </div>
  </li>
</ul>
  </div>



<div class="card menu-arquivos-ondemand" id='modulo-x'>

    <ul class="card-content menu-arquivos-icons valign-wrapper material-de-aula collapsible">
      <li>
      <div class='cabecalho collapsible-header valign-wrapper' id-aula='<%=id_aula%>'>
        <i class="material-icons gr">playlist_add_check</i>
        <p class="title-card">Gabarito da Atividade</p>
        <div style="margin-left: 61px;">
          <i class="abrir material-icons gr">add</i>
          <i class="fechar material-icons gr">remove</i>
        </div>
      </div>
      <div class="corpo collapsible-body" id="collapsible-body">
       <div class="video-img">
       	<img width="280px" src="image/video_gabarito.png" alt="err" />
       </div>
        <a class="hide" id="feedbacklink" href="x"></a>

        <!-- Modal Trigger -->
        <!--<a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>-->

        <!-- Modal Structure 
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>  -->      
      </div>
      </li>
    </ul>
     </div>     


     <div class="card menu-arquivos-ondemand" id='modulo-x'>

    <ul class="card-content menu-arquivos-icons valign-wrapper material-de-aula collapsible">
      <li>
      <div class='cabecalho collapsible-header valign-wrapper' id-aula='<%=id_aula%>'>
        <i class="material-icons gr">star_border</i>
        <p class="title-card gr">Avaliação</p>
       <div style="margin-left: 158px;">
          <i class="abrir material-icons gr">add</i>
          <i class="fechar material-icons gr">remove</i>
          </div>
      </div>
      <div class="corpo collapsible-body" id="collapsible-body">
      	<input type="file" name="" id="upload-input" multiple>
      </div>
      </li>
    </ul>
    </div>   

   </div>

`
