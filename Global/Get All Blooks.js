// Blooket-Hacks  -  @ 2022 CrazyH & cph101

if (console_msg("Get All Blooks")) {
var statenode = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode;
var blooks = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b } }, [['1234']]]).webpack("MDrD").a;

if (location.pathname == "/blooks") {
    statenode.state.blookData = Object.keys(blooks).reduce((a, b) => (a[b] = (statenode.state.blookData[b] || 1), a), {});
    statenode.state.allSets = Object.values(blooks).reduce((a, b) => (a.includes(b.set) ? a : a.concat(b.set)), [])
} else {
    statenode.setState({ unlocks: Object.keys(blooks) });
}
statenode.forceUpdate()
}
    
// Console Message Code
function console_msg(file, state) {
    if (!state) {
        if (window.location.href.indexOf("blooket.com") > -1 && window.location.host !== "www.blooket.com" && window.location.host !== "id.blooket.com") {
            console_msg(file, true);
            return true;
        } else if (window.location.host === "www.blooket.com" || window.location.host === "id.blooket.com") {
            console_msg(file, "Please run this hack on the dashboard or in a game");
            return;
        } else {
            console_msg(file, "Please run this hack on blooket");
            return;
        }
    } else {
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"); // Spacing: 60
        var style = 'color: yellow; -webkit-text-stroke: 1px black; font-size:30px;';
        console.info('%c📁 Loaded: '+file+'.js\n', style );
        console.group("📣 Blooket Hacks By cph101 & CrazyH - Announcement 📣"); // Open Console Group
        var style = 'color: tomato; -webkit-text-stroke: 1px black; font-size:30px;';
        console.info('%c👋🏻 Hi, We are Happy to have you as one of our users', style );
        var style = 'color: blue; -webkit-text-stroke: 1px black; font-size:30px;';
        console.info('%c⭐️ Please star our Github repo', style );
        if (state === true) {
            var style = 'color: green; -webkit-text-stroke: 1px black; font-size:30px;';
            console.info('%c✅ Hack Successfully Enabled', style );
        } else {
            var style = 'color: red; -webkit-text-stroke: 1px black; font-size:30px;';
            console.info('%c❌ Failed To Enable Hack', style );
        }
        console.groupEnd(); // Close Console Group
        if (state != true) alert(state);
 }};
