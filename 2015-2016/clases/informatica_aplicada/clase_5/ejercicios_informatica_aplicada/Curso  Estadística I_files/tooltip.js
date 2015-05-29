/*
 tooltip.js: Implementa las funciones showTip() y hideTip() para mostrar tooltips en NS4+ e IE
 Requiere:
 * Una capa oculta toolTipDiv en el body: 
    <div id="toolTipDiv" style="position:absolute;visibility:hidden;"></div>
 * Manejar el evento onload en el elemento body:
    <body onload="initTip();" ...>
 * Manejar los eventos onmouseover y onmouseout en un elemento a:
    <a href="guiahab0203.pdf" onmouseover="showTip(this,event,'Descargar PDF (344 KB)');" onmouseout="hideTip();">Habilidades</a>
*/
    ns4=(document.layers)? true:false;

    function initTip() {
      if (ns4) toolTip=document.toolTipDiv;
    }
 
    function showTip(current,e,text) {
      if (ns4) {
        toolTip.document.open();
        toolTip.document.write('<layer bgColor="#FFFFE7" style="border:1px ' +
           'solid black; font:normal 8pt helvetica,arial,sans-serif;color:blue;">' + text + '</layer>');
        toolTip.document.close();
        toolTip.left=e.pageX+5;
        toolTip.top=e.pageY+5;
        toolTip.visibility="show";
      }
      else {
        thetitle=text.split('<br>')
        if (thetitle.length > 1){
          thetitles="";
          for (i=0; i<thetitle.length-1; i++)
            thetitles += thetitle[i] + "\r\n";
          thetitles += thetitle[i];
          current.title = thetitles;
        } 
        else current.title = text;
      }
    }

    function hideTip() {
      if (ns4)
        toolTip.visibility="hide";
    }
