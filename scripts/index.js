var exec = require('child_process').exec,
  child;

child = exec(
  `cd .. && cd .. && npm install axios react-native-share react-native-screens react-native-svg @react-native-masked-view/masked-view @react-navigation/native @react-navigation/native-stack react-native-background-timer react-native-gesture-handler react-native-responsive-dimensions react-native-safe-area-context`,
  function (error, stdout, stderr) {
    console.log('Successfully installed' + stdout);
    console.log('Thanks For Downloading Package');
    console.log('If you are using ios then please pod install');
    console.log('https://www.terum-word-game.co.in');
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  },
);
