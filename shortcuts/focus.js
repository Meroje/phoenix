
/* IMPORT */

require ( './magic/terminal.js' );

/* LAUNCHERS */

const launchSafari = `
  tell application "Safari"
    make new window
    activate
  end tell
`;

function launchDevTools () {

  const safari = Space.active ().windows ().find ( window => /Safari/.test ( window.app ().name () ) );

  if ( !safari ) return alert ( 'Safari is not opened' );

  osascript (`
    tell application "Safari" to activate
    tell application "System Events"
      keystroke "i" using {option down, command down}
    end tell
  `);

}

const launchVSC = () => Task.run ( '/usr/local/bin/code', ['-n'] );

const launchHyper = () => Task.run ( '/usr/local/bin/hyper' );

const launchTerminal = `
  tell application "iTerm2"
    do script ""
    activate
  end tell
`;

const launchFinder = `
  tell application "Finder"
    make new Finder window to (path to downloads folder)
    activate
  end tell
`;

/* CALLBACKS */

function callbackTerminal () {

  setTimeout ( () => {

    const focused = Window.focused ();

    if ( !focused ) return;

    magicTerminalOpen ( focused );

  }, 600 );

}

function callbackHyper () {

  setTimeout ( () => {

    const focused = Window.focused ();

    if ( !focused ) return;

    magicHyperOpen ( focused );

  }, 1200 );

}

/* FOCUS */

const focus = [
  ['c', HYPER, ['Safari', /^(?!Developer Tools)/, launchSafari]],
  ['d', HYPER, ['Safari', /(Developer Tools)|(safari-devtools)/, launchDevTools]], //FIXME: If Hyper has been down for a while it will actually trigger Hyper+I
  ['v', HYPER, ['Code', false, launchVSC]],
  ['t', HYPER, ['Terminal', false, launchTerminal]],
  ['f', HYPER, ['Finder', false, launchFinder]]
];

setHandlers ( focusWindow, focus );
