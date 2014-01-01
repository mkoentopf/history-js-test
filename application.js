// https://github.com/browserstate/history.js
// (function(window,undefined){
//   // Bind to StateChange Event
//   History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
//     var State = History.getState(); // Note: We are using History.getState() instead of event.state
//     console.log('statechange', State.data.state, event.state);
//   });

//   // Change our States
//   // History.pushState({state:1}, "State 1", "?state=1"); // logs {state:1}, "State 1", "?state=1"
//   // History.pushState({state:2}, "State 2", "?state=2"); // logs {state:2}, "State 2", "?state=2"
//   // History.replaceState({state:3}, "State 3", "?state=3"); // logs {state:3}, "State 3", "?state=3"
//   // History.pushState(null, null, "?state=4"); // logs {}, '', "?state=4"
//   // History.back(); // logs {state:3}, "State 3", "?state=3"
//   // History.back(); // logs {state:1}, "State 1", "?state=1"
//   // History.back(); // logs {}, "Home Page", "?"
//   // History.go(2); // logs {state:3}, "State 3", "?state=3"
// })(window);

// function pushIt(){
//   History.pushState({state: 'state1'}, null, "?state=1"); // logs {state:2}, "State 2", "?state=2"
// }
// function pushIt2(){
//   History.pushState({state: 'state2'}, null, "?state=2"); // logs {state:2}, "State 2", "?state=2"
// }

// Seite1 => Seite2 => pushIt[statechange:Seite2] => Seite3
// Seite3 -> Seite2+push -(statechange undefined)-> Seite2 -> Seite1
// Seite1 -> Seite2 -(statechange:Seite2)-> Seite2+push -> Seite3

window.addEventListener('popstate', function(event) {
  if (event.state) {
    console.log('popstate', event.state);
  }
}, false);

function pushIt(){
  history.pushState({state: 'state1'}, null, "?state=1"); // logs {state:2}, "State 2", "?state=2"
}
function pushIt2(){
  history.pushState({state: 'state2'}, null, "?state=2"); // logs {state:2}, "State 2", "?state=2"
}
