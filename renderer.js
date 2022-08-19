const information = document.getElementById('info');
const ipcOutput = document.getElementById('ipcOutput');

const func = async () => {
  const response = await window.versions.ping();
  // console.log(response); // prints out 'pong'
  ipcOutput.innerText = response;
};

information.innerText = `This app is using Chrome (v${versions.chrome()}), ` +
`Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

func();