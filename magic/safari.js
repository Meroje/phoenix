
/* SAFARI */

setEventHandler ( 'windowDidOpen', window => {

  if ( !( /Safari/.test ( window.app ().name () ) && !/safari-devtools/.test ( window.title () ) ) ) return;

  setFrame ( 0, 0, .4, 1, window ); // Left

});
