
/* TERMINAL */

setEventHandler ( 'windowDidOpen', magicTerminalOpen ); //FIXME: Doesn't seem to be working

/* HANDLER */

function magicTerminalOpen ( window ) {

  if ( !window.isNormal () || !window.isMain () ) return;

  const name = window.app ().name (),
        title = window.title ();

  if ( !/iTerm/.test ( name ) || false ) return;

  setFrame ( 'bottom-left', window );

}
