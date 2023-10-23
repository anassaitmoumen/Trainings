<template>
  <div class="container mt-4">
    <h3>Page 1</h3>
    <div class="d-flex justify-content-between">
      <div class="">
        <img  :src="require('@/assets/img.png')" alt="" width="40" height="40">
      </div>
      <div class="mt-2 h6">Trainingsvorbereitung</div>
      <div class="">
        <img :src="require('@/assets/image1.png')" alt="" width="40" height="40">
      </div>
    </div> 
    <div class="row m-0 p-0 mt-3 table_01">
      <div class="col-xs-4 col-sm-4 col-md-4 m-0 p-0">
        <div class="d-flex justify-content-center justify-content-between ">
          <div class="title-table1 w-100">Datum </div>
          <div>
            <input type="text" class="p-0 m-0" width="100%" height="100%">
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 m-0 p-0">
        <div class="d-flex justify-content-center justify-content-between">
          <div class="title-table1 w-100">Team/Stufe </div>
          <div>
            <input type="text" class="p-0 m-0" width="100%" height="100%">
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 m-0 p-0">
        <div class="d-flex justify-content-center justify-content-between">
          <div class="title-table1 w-100">Trainer/in </div>
          <div>
            <input type="text" class="p-0 m-0" width="100%" height="100%">
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 p-0 mt-3">
      <div class="col-xs-4 col-sm-4 col-md-4 m-0 p-0">
        <div class="d-flex justify-content-center justify-content-between">
          <div class="text-center border border-dark border-2 w-100">
            <img :src="require('@/assets/spieler.png')" alt="" width="25" height="30">
          </div>
          <div class="border text-center border-dark border-2 w-100">
            <span class="h6">Spieler/in</span>
          </div>
          <div class="border text-center border-dark border-2 w-100">
            <img :src="require('@/assets/in.png')" alt="" width="25" height="30">
          </div>
          <div class="border text-center border-dark border-2 w-100">
            <span class="h6">Gegner/in</span>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 m-0 p-0">
        <div class="d-flex justify-content-center justify-content-between">
          <div class="border text-center border-dark border-2 w-100">
            <img :src="require('@/assets/gegner.png')" alt="" width="60" height="30">
          </div>
          <div class="border text-center border-dark border-2 w-100">
            <span class="h6">Dribbling</span>
          </div>
          <div class="border text-center border-dark border-2 w-100">
            <img :src="require('@/assets/pass.png')" alt="" width="60" height="30">
          </div>
          <div class="border text-center border-dark border-2 w-100">
            <span class="h6">Pass</span>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 m-0 p-0">
        <div class="d-flex justify-content-center justify-content-between">
          <div class="border text-center border-dark border-2 w-100">
            <img :src="require('@/assets/laufweg.png')" alt="" width="60" height="30">
          </div>
          <div class="border text-center border-dark border-2 w-100">
            <span class="h6">Laufweg</span>
          </div>
          <div class="border text-center border-dark border-2 w-100">
            <img :src="require('@/assets/flugball.png')" alt="" width="60" height="30">
          </div>
          <div class="border text-center border-dark border-2 w-100">
            <span class="h6">Flugball</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 p-0 mt-3">
      <div class="col-md-3 border border-dark border-2">
        <div class="form-check">
          <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Wir haben den Ball
          </label>
        </div>
      </div>
      <div class="col-md-3 border border-dark border-2">
        <div class="form-check">
          <input class="form-check-input border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Wir verlieren den Ball
          </label>
        </div>
      </div>
      <div class="col-md-3 border border-dark border-2">
        <div class="form-check">
          <input class="form-check-input border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Wir haben den Ball nicht
          </label>
        </div>
      </div>
      <div class="col-md-3 border border-dark border-2">
        <div class="form-check">
          <input class="form-check-input border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Wir erobern den Ball
          </label>
        </div>
      </div>
    </div>
    <table class="table_01 mt-3">
    <tbody>
      <tr>
        <td class="h6 title-table border border-dark border-2 w-25">Thema/Spielprinzip</td>
        <td class="border border-dark border-2">
          <input type="text" class="p-0 m-0 w-100" >
        </td>
        <td class="border border-dark border-2">Schwerpunkte</td>
      </tr>
      <tr>
        <td class="h6 title-table border border-dark border-2">Lernziele</td>
        <td class="border border-dark border-2">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
        </td>
        <td class="border border-dark border-2 w-25">
          <div class="row">
            <div class="col-sm d-flex justify-content-between w-100">
              <div class="form-check">
                <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  TA
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  TE
                </label>
              </div>
            </div>
            <div class="col-sm d-flex justify-content-between w-100">
              <div class="form-check">
                <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  AT
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  PE
                </label>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
    </table>
    <table class="table_01">
    <tbody>
      <tr>
        <td class="h6 title-table border border-dark border-2 w-25">Entwicklungsfragen</td>
        <td class="border border-dark border-2">
          <input type="text" class="p-0 m-0 w-100" >
        </td>
      </tr>
    </tbody>
    </table>
    <table class="table_01">
    <tbody>
      <tr>
        <td class="border border-dark border-2">
          <input type="text" class="p-0 m-0 w-100" >
        </td>
      </tr>
    </tbody>
    </table>
    <table class="table_01 mt-3">
      <tbody>
        <tr>
          <td class="h6 title-table w-75">Einstieg</td>
          <td class="h6 title-table">Dauer:</td>
        </tr>
      </tbody>
    </table>
    <table class="table_01 Netherlands" id="test1">
    <tbody>
      <tr>
        <td class="h6 border border-dark border-2">Aufwärmen</td>
        <td class="border border-dark border-2">Beschreibung</td>
        <td class="border border-dark border-2">Coaching</td>
      </tr>
      <tr>
        <td class="border border-dark border-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </td>
        <td class="border border-dark border-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </td>
        <td class="border border-dark border-2">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </td>
      </tr>
      <tr>
        <td class="h6 border border-dark border-2">Prävention</td>
        <td class="border border-dark border-2">Beschreibung</td>
        <td class="border border-dark border-2">Coaching</td>
      </tr>
      <tr>
        <td class="border border-dark border-2">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </td>
        <td class="border border-dark border-2">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </td>
        <td class="border border-dark border-2">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </td>
      </tr>
    </tbody>
    </table>
    <table class="table_01 mt-3" id="test">
      <tbody>
        <tr>
          <td class="h6 border border-dark border-2">Explosivität</td>
          <td class="border border-dark border-2">Beschreibung</td>
        </tr>
        <tr>
          <td class="border border-dark border-2 tb-stade">
            <div class="row">
              <div class="col-sm d-flex justify-content-between w-100">
                <button @click="addNewDiv('x')" type="button" class="btn btn-default btn-circle btn-lg">
                  <span class="h4">X</span>
                </button>
                <button  @click="addNewDiv('O')" type="button" class="btn btn-default btn-circle btn-lg">
                  <span class="h4">O</span>
                </button>
                <button @click="addNewDiv('g')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/gegner.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('s')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/pass.png')" class="player__gegner">
                </button>
              </div>
              <div class="col-sm d-flex justify-content-between w-100">
                <button @click="addNewDiv('t')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/trib.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('f')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/flugball.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('k')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/football.png')" class="foot">
                </button>
                <button @click="addNewDiv('p')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/pano.png')" class="pano">
                </button>
              </div>
            </div>
            <div class="field"  @click.stop="addNewAction">
              <img v-for="(x, index) in divs" :key="index" :style="{top: x.top + 'px', left: x.left + 'px'}" 
                  @mousedown.stop="startDrag($event, x)"  class="spieler"  :src="require(`@/assets/icons/${x.type}`) ">
            </div>
          </td>
          <td class="border border-dark border-2">
            <textarea class="form-control txtareaBeschreibung" id="exampleFormControlTextarea1"></textarea>
            <table class="table_01 mt-3 w-100 h-auto">
              <tbody>
                <tr>
                  <td class="border border-dark border-2">Coaching</td>
                </tr>
                <tr>
                  <td class="border border-dark border-1">
                    <textarea class="form-control txtareaBeschreibung" id="exampleFormControlTextarea1"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table_01 mt-3">
      <tbody>
        <tr>
          <td class="h6 border border-dark border-2 w-50">Explosivität</td>
          <td class="border border-dark border-2">Beschreibung</td>
          <td class="border border-dark border-2">Coaching</td>
        </tr>
        <tr>
          <td class="border border-dark border-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </td>
          <td class="border border-dark border-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </td>
          <td class="border border-dark border-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </td>
        </tr>
      </tbody>
    </table>

    <h3>Page 2</h3>

    <table class="table_01 mt-3">
      <tbody>
        <tr>
          <td class="h6 title-table w-75">
            <div class="d-flex gap-4">
              <div class="form-check">
                <input class="form-check-input border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Spielform
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Übung
                </label>
              </div>
              <div>
                <span>- 1</span>
              </div>
            </div>
          </td>
          <td class="h6 title-table">Dauer:</td>
        </tr>
      </tbody>
    </table>
    <table class="table_01">
      <tbody>
        <tr>
          <td class="h6 border border-dark border-2">Skizze</td>
          <td class="border border-dark border-2">Beschreibung</td>
        </tr>
        <tr>
          <td class="border border-dark border-2 tb-stade">
            <div class="row">
              <div class="col-sm d-flex justify-content-between w-100">
                <button @click="addNewDiv('x')" type="button" class="btn btn-default btn-circle btn-lg">
                  <span class="h4">X</span>
                </button>
                <button  @click="addNewDiv('O')" type="button" class="btn btn-default btn-circle btn-lg">
                  <span class="h4">O</span>
                </button>
                <button @click="addNewDiv('g')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/gegner.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('s')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/pass.png')" class="player__gegner">
                </button>
              </div>
              <div class="col-sm d-flex justify-content-between w-100">
                <button @click="addNewDiv('t')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/trib.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('f')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/flugball.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('k')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/football.png')" class="foot">
                </button>
                <button @click="addNewDiv('p')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/pano.png')" class="pano">
                </button>
              </div>
            </div>
            <div class="field"  @click.stop="addNewAction">
              <img v-for="(x, index) in divs" :key="index" :style="{top: x.top + 'px', left: x.left + 'px'}" 
                  @mousedown.stop="startDrag($event, x)"  class="spieler"  :src="require(`@/assets/icons/${x.type}`) ">
            </div>
          </td>
          <td class="border border-dark border-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
            <table class="table_01 mt-3 w-100 h-auto">
              <tbody>
                <tr>
                  <td class="border border-dark border-2">Coaching</td>
                </tr>
                <tr>
                  <td class="border border-dark border-1">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table_01 w-100 h-auto">
              <tbody>
                <tr>
                  <td class="border border-dark border-2">Variationen (+/-)</td>
                </tr>
                <tr>
                  <td class="border border-dark border-1">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table_01">
      <tbody>
        <tr>
          <td class="h6 title-table w-75">
            <div class="d-flex gap-4">
              <div class="form-check">
                <input class="form-check-input border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Spielform
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Übung
                </label>
              </div>
              <div>
                <span>- 2</span>
              </div>
            </div>
          </td>
          <td class="h6 title-table">Dauer:</td>
        </tr>
      </tbody>
    </table>
    <table class="table_01">
      <tbody>
        <tr>
          <td class="h6 border border-dark border-2">Skizze</td>
          <td class="border border-dark border-2">Beschreibung</td>
        </tr>
        <tr>
          <td class="border border-dark border-2 tb-stade">
            <div class="row">
              <div class="col-sm d-flex justify-content-between w-100">
                <button @click="addNewDiv('x')" type="button" class="btn btn-default btn-circle btn-lg">
                  <span class="h4">X</span>
                </button>
                <button  @click="addNewDiv('O')" type="button" class="btn btn-default btn-circle btn-lg">
                  <span class="h4">O</span>
                </button>
                <button @click="addNewDiv('g')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/gegner.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('s')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/pass.png')" class="player__gegner">
                </button>
              </div>
              <div class="col-sm d-flex justify-content-between w-100">
                <button @click="addNewDiv('t')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/trib.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('f')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/flugball.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('k')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/football.png')" class="foot">
                </button>
                <button @click="addNewDiv('p')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/pano.png')" class="pano">
                </button>
              </div>
            </div>
            <div class="field"  @click.stop="addNewAction">
              <img v-for="(x, index) in divs" :key="index" :style="{top: x.top + 'px', left: x.left + 'px'}" 
                  @mousedown.stop="startDrag($event, x)"  class="spieler"  :src="require(`@/assets/icons/${x.type}`) ">
            </div>
          </td>
          <td class="border border-dark border-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
            <table class="table_01 mt-3 w-100 h-auto">
              <tbody>
                <tr>
                  <td class="border border-dark border-2">Coaching</td>
                </tr>
                <tr>
                  <td class="border border-dark border-1">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table_01 w-100 h-auto">
              <tbody>
                <tr>
                  <td class="border border-dark border-2">Variationen (+/-)</td>
                </tr>
                <tr>
                  <td class="border border-dark border-1">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table_01 mt-3">
      <tbody>
        <tr>
          <td class="h6 title-table border border-dark border-2 w-50">Spiel frei</td>
          <td class="h6 title-table border border-dark border-2">Dauer:</td>
        </tr>
        <tr>
          <td class="border border-dark border-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </td>
          <td class="border border-dark border-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </td>
        </tr>
        <tr>
          <td class="h6 title-table border border-dark border-2 w-50">Explosivität</td>
          <td class="h6 title-table border border-dark border-2">Beschreibung</td>
        </tr>
        <tr>
          <td class="border border-dark border-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </td>
          <td class="border border-dark border-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table_01 mt-3">
      <tbody>
        <tr>
          <td class="h6 title-table border border-dark border-2 w-50">Trainingsreflexion</td>
        </tr>
        <tr>
          <td class="border border-dark border-2">
            <input type="text" class="p-0 m-0 w-100" >
          </td>
        </tr>
        <tr>
          <td class="border border-dark border-2">
            <input type="text" class="p-0 m-0 w-100">
          </td>
        </tr>
        <tr>
          <td class="border border-dark border-2">
            <input type="text" class="p-0 m-0 w-100">
          </td>
        </tr>
      </tbody>
    </table>

    <h3>Page 3</h3>

    <table class="table_01 mt-3">
      <tbody>
        <tr>
          <td class="h6 w-50">
            <div class="row">
              <div class="col-sm d-flex gap-3 w-100">
                <div class="form-check">
                  <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Aufwärmen /
                  </label>
                </div>
              </div>
              <div class="col-sm d-flex gap-3 w-100">
                <div class="form-check">
                  <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Prävention  /
                  </label>
                </div>
              </div>
              <div class="col-sm d-flex gap-3 w-100">
                <div class="form-check">
                  <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Explosivität
                  </label>
                </div>
              </div>
            </div>
          </td>
          <td class="h6 title-table">Dauer:</td>
        </tr>
      </tbody>
    </table>
    <table class="table_01">
      <tbody>
        <tr>
          <td class="h6 border border-dark border-2" style="border-bottom: 2px solid white !important;"></td>
          <td class="border border-dark border-2">Beschreibung</td>
        </tr>
        <tr>
          <td class="border border-dark border-2 w-50">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="15"></textarea>

          </td>
          <td class="border border-dark border-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
            <table class="mt-3 w-100 h-auto">
              <tbody>
                <tr style="border: 2px solid white !important;">
                  <td class="border border-dark border-2" style="border-left: 2px solid white !important;border-right: 2px solid white !important;">Coaching</td>
                </tr>
                <tr>
                  <td class="" style="border-bottom: 2px solid white !important;">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table_01">
      <tbody>
        <tr>
          <td class="h6 w-50">
            <div class="row">
              <div class="col-sm d-flex gap-3 w-100">
                <div class="form-check">
                  <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Aufwärmen /
                  </label>
                </div>
              </div>
              <div class="col-sm d-flex gap-3 w-100">
                <div class="form-check">
                  <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Prävention  /
                  </label>
                </div>
              </div>
              <div class="col-sm d-flex gap-3 w-100">
                <div class="form-check">
                  <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Explosivität
                  </label>
                </div>
              </div>
            </div>
          </td>
          <td class="h6 title-table">Dauer:</td>
        </tr>
      </tbody>
    </table>
    <table class="table_01">
      <tbody>
        <tr>
          <td class="h6 border border-dark border-2" style="border-bottom: 2px solid white !important;"></td>
          <td class="border border-dark border-2">Beschreibung</td>
        </tr>
        <tr>
          <td class="border border-dark border-2 w-50">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="15"></textarea>
          </td>
          <td class="border border-dark border-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
            <table class="mt-3 w-100 h-auto">
              <tbody>
                <tr style="border: 2px solid white !important;">
                  <td class="border border-dark border-2" style="border-left: 2px solid white !important;border-right: 2px solid white !important;">Coaching</td>
                </tr>
                <tr>
                  <td class="" style="border-bottom: 2px solid white !important;">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>

          </td>
        </tr>
      </tbody>
    </table>
    <table class="table_01 mt-3">
      <tbody>
        <tr>
          <td class="h6 title-table w-50">
            <div class="d-flex gap-4">
              <div class="form-check">
                <input class="form-check-input border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  TE/TA/PE - Einstieg 
                </label>
              </div>
            </div>
          </td>
          <td class="h6 title-table">Dauer:</td>
        </tr>
      </tbody>
    </table>
    <table class="table_01">
      <tbody>
        <tr>
          <td class="h6 border border-dark border-2">Skizze</td>
          <td class="border border-dark border-2">Beschreibung</td>
        </tr>
        <tr>
          <td class="border border-dark border-2 tb-stade">
            <div class="row">
              <div class="col-sm d-flex justify-content-between w-100">
                <button @click="addNewDiv('x')" type="button" class="btn btn-default btn-circle btn-lg">
                  <span class="h4">X</span>
                </button>
                <button  @click="addNewDiv('O')" type="button" class="btn btn-default btn-circle btn-lg">
                  <span class="h4">O</span>
                </button>
                <button @click="addNewDiv('g')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/gegner.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('s')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/pass.png')" class="player__gegner">
                </button>
              </div>
              <div class="col-sm d-flex justify-content-between w-100">
                <button @click="addNewDiv('t')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/trib.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('f')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/flugball.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('k')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/football.png')" class="foot">
                </button>
                <button @click="addNewDiv('p')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/pano.png')" class="pano">
                </button>
              </div>
            </div>
            <div class="field"  @click.stop="addNewAction">
              <img v-for="(x, index) in divs" :key="index" :style="{top: x.top + 'px', left: x.left + 'px'}" 
                  @mousedown.stop="startDrag($event, x)"  class="spieler"  :src="require(`@/assets/icons/${x.type}`) ">
            </div>
          </td>
          <td class="border border-dark border-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
            <table class="table_01 mt-3 w-100 h-auto">
              <tbody>
                <tr>
                  <td class="border border-dark border-2">Coaching</td>
                </tr>
                <tr>
                  <td class="border border-dark border-1">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table_01 w-100 h-auto">
              <tbody>
                <tr>
                  <td class="border border-dark border-2">Variationen (+/-)</td>
                </tr>
                <tr>
                  <td class="border border-dark border-1">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>

    <h3>Page 4</h3>
    
    <table class="table_01 mt-3">
      <tbody>
        <tr>
          <td class="h6 title-table w-50">
            <div class="row">
              <div class="col-sm d-flex gap-3 w-100">
                <div class="form-check">
                  <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Spielform
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Übung - 1
                  </label>
                </div>
              </div>
              <div class="col-sm d-flex gap-3 w-100">
                <div class="form-check">
                  <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Spielform
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Übung - 2
                  </label>
                </div>
              </div>
             </div>
          </td>
          <td class="h6 title-table">Dauer:</td>
        </tr>
      </tbody>
    </table>
    <table class="table_01">
      <tbody>
        <tr>
          <td class="h6 border border-dark border-2">Skizze</td>
          <td class="border border-dark border-2">Beschreibung</td>
        </tr>
        <tr>
          <td class="border border-dark border-2 tb-stade">
            <div class="row">
              <div class="col-sm d-flex justify-content-between w-100">
                <button @click="addNewDiv('x')" type="button" class="btn btn-default btn-circle btn-lg">
                  <span class="h4">X</span>
                </button>
                <button  @click="addNewDiv('O')" type="button" class="btn btn-default btn-circle btn-lg">
                  <span class="h4">O</span>
                </button>
                <button @click="addNewDiv('g')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/gegner.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('s')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/pass.png')" class="player__gegner">
                </button>
              </div>
              <div class="col-sm d-flex justify-content-between w-100">
                <button @click="addNewDiv('t')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/trib.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('f')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/flugball.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('k')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/football.png')" class="foot">
                </button>
                <button @click="addNewDiv('p')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/pano.png')" class="pano">
                </button>
              </div>
            </div>
            <div class="field"  @click.stop="addNewAction">
              <img v-for="(x, index) in divs" :key="index" :style="{top: x.top + 'px', left: x.left + 'px'}" 
                  @mousedown.stop="startDrag($event, x)"  class="spieler"  :src="require(`@/assets/icons/${x.type}`) ">
            </div>
          </td>
          <td class="border border-dark border-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
            <table class="table_01 mt-3 w-100 h-auto">
              <tbody>
                <tr>
                  <td class="border border-dark border-2">Coaching</td>
                </tr>
                <tr>
                  <td class="border border-dark border-1">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table_01 w-100 h-auto">
              <tbody>
                <tr>
                  <td class="border border-dark border-2">Variationen (+/-)</td>
                </tr>
                <tr>
                  <td class="border border-dark border-1">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table_01 mt-3">
      <tbody>
        <tr>
          <td class="h6 title-table w-50">
            <div class="row">
              <div class="col-sm d-flex gap-3 w-100">
                <div class="form-check">
                  <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Spielform
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Übung - 1
                  </label>
                </div>
              </div>
              <div class="col-sm d-flex gap-3 w-100">
                <div class="form-check">
                  <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Spielform
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input  border border-dark border-2" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Übung - 2
                  </label>
                </div>
              </div>
             </div>
          </td>
          <td class="h6 title-table">Dauer:</td>
        </tr>
      </tbody>
    </table>
    <table class="table_01">
      <tbody>
        <tr>
          <td class="h6 border border-dark border-2">Skizze</td>
          <td class="border border-dark border-2">Beschreibung</td>
        </tr>
        <tr>
          <td class="border border-dark border-2 tb-stade">
            <div class="row">
              <div class="col-sm d-flex justify-content-between w-100">
                <button @click="addNewDiv('x')" type="button" class="btn btn-default btn-circle btn-lg">
                  <span class="h4">X</span>
                </button>
                <button  @click="addNewDiv('O')" type="button" class="btn btn-default btn-circle btn-lg">
                  <span class="h4">O</span>
                </button>
                <button @click="addNewDiv('g')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/gegner.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('s')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/pass.png')" class="player__gegner">
                </button>
              </div>
              <div class="col-sm d-flex justify-content-between w-100">
                <button @click="addNewDiv('t')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/trib.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('f')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/flugball.png')" class="player__gegner">
                </button>
                <button @click="addNewDiv('k')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/football.png')" class="foot">
                </button>
                <button @click="addNewDiv('p')" type="button" class="btn btn-default btn-circle btn-gegner">
                  <img :src="require('@/assets/icons/pano.png')" class="pano">
                </button>
              </div>
            </div>
            <div class="field"  @click.stop="addNewAction">
              <img v-for="(x, index) in divs" :key="index" :style="{top: x.top + 'px', left: x.left + 'px'}" 
                  @mousedown.stop="startDrag($event, x)"  class="spieler"  :src="require(`@/assets/icons/${x.type}`) ">
            </div>
          </td>
          <td class="border border-dark border-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
            <table class="table_01 mt-3 w-100 h-auto">
              <tbody>
                <tr>
                  <td class="border border-dark border-2">Coaching</td>
                </tr>
                <tr>
                  <td class="border border-dark border-1">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table_01 w-100 h-auto">
              <tbody>
                <tr>
                  <td class="border border-dark border-2">Variationen (+/-)</td>
                </tr>
                <tr>
                  <td class="border border-dark border-1">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="generatePdf"  class="btn btn-primary my-4">Generate Pdf</button>
  </div> 
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      hendlClick:'1',
      fixClick:'11',
      divs: [], 
      actionType:null ,
      type:{ 
        'x':'spieler01.png',
        'O':'spieler02.png',
        'k':'koora2.png',
        'p':'pano2.png',
        's':'pass1.png',
        't':'trip1.png',
        'f':'flug1.png',
        'g':'gagner1.png',
      },
      offsetX: 0,
      offsetY: 0,
      test:0,
    };
  },
  methods: {
    generatePdf() {
      const doc = new jsPDF('p', 'pt', 'letter')
      autoTable(doc, { theme: "plain", html: '#test1'})
      autoTable(doc, { theme: "plain", html: '#test', styles: { lineWidth: 0, cellPadding: 2 , fontSize: 9 } })
      doc.save('test.pdf');  
    },  

    addNewDiv(type) {
      this.actionType = type
      this.hendlClick = '2'
      this.test = 11
    },

    onDrag() {
      if (!this.draggedElement) return;
      this.draggedElement.left = event.clientX - this.offsetX;
      this.draggedElement.top = event.clientY - this.offsetY;
    },
    endDrag() {
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('mouseup', this.endDrag);
      this.draggedElement = null;
    },
    startDrag(event, x) {
      this.hendlClick = null;
      this.draggedElement = x;
      this.offsetX = event.clientX - x.left;
      this.offsetY = event.clientY - x.top;
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.endDrag);
    },
    addNewAction(event){
      // console.log(event)
      // if(this.actionType == "g" || this.actionType == "s" || this.actionType == "t" || this.actionType == "f")
      // {
      //   alert("kayn")
      // }else {
      //   alert('machi hiya')
      // }
      if(this.actionType == 'x')
      {
          if(!this.actionType)
          { 
            alert("Please click on the option you want to add to the playing stadium")
          } else if(this.hendlClick == '2') {
            const rect = event.target.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top; 
            this.divs.push({ id: Date.now(),type:this.type[this.actionType], top: y, left: x });

          }
          if(!this.hendlClick == '2') {
            // alert('madir walo')
          }
          if(this.hendlClick == null && !this.fixClick == '11') {
            const rect = event.target.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top; 
            this.divs.push({ id: Date.now(),type:this.type[this.actionType], top: y, left: x });
          }
      }
      else alert("ed")

    },
  }
}

</script>

<style scoped>
.txtareaBeschreibung {
  height: 224px;
}
.tb-stade {
  width: 50%;
}
.spieler {
  position:absolute;
  width: 35px;
  cursor: pointer;
  user-select: none;

}

.btn-circle.btn-lg {
  width: 50px;
  height: 50px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 25px;
  border: 2px solid;
}
.btn-gegner {
  padding: 6px 0;
  width: 50px;
  height: 50px;
  font-size: 14px;
  line-height: 1.33;
  border-radius: 28px;
  border: 2px solid;
}
.player__gegner{
  width: 45px;
  height: 25px;
}
.foot{
  border-radius: 50%;
  width: 40px;
  height: 32px;
}
.pano {
  border-radius: 50%;
  width: 32px;
  height: 42px;
  margin-top: -4px;
}
.field { 
  background: url(https://thumbs.dreamstime.com/b/terrain-de-football-ou-mod%C3%A8le-et-texture-de-terrain-de-football-avec-la-coupure-86137042.jpg);
  height: 447px;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  }

.player {
  position: absolute
}

.table_01 {  
  border: 2px solid;
  width: 100%;
}
.title-table {
  background: #d6d6d6;
  border: 2px solid;
}
.title-table1 {
  background: #d6d6d6;
  font-weight: 600;
  border: 1px solid;
  font-size: 1.1rem;
}

@media (max-width: 576px) {
  .field { 
    height: 205px;

  }
  .tb-stade {
    width: 75%;
  }
  .txtareaBeschreibung {
    height: 140px;
  }
 }

</style>
