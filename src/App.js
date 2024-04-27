import './App.css';
// import hsync from 'hsync/hsync-web';


// async function launchImageSender({
//   canvasId = 'canvas',
//   aggregatorUrl = 'https://music-agg.shiv.to',
//   maxSize = 300,
//   sendInterval = 50,
//   rtcTryInterval = 3000,
//   imageQuality = 0.8,
// }) {
//     let canvas = document.getElementById(canvasId);
//     const offCanvas = document.createElement('canvas');

//     console.log('starting client');
//     const con = await hsync.dynamicConnect();
//     console.log('hsync', hsync, con);
//     console.log('con', con);
//     window.con = con;
//     con.on('open', () => {
//       console.log('connected');
//       window.con = con;
//       console.log('window.con', window.con);
//     });
//     const p = con.getPeer(aggregatorUrl);
//     window.p = p;
//     con.on('error', (e) => {
//       console.log('hsync error', e);
//     });
//     con.peers.on('error', (e) => {
//       console.log('hsync peers error', e);
//     });
//     async function tryConnect() {
//       try {
//         if (!canvas) {
//           canvas = document.getElementById(canvasId);
//         }
//         await p.connectRTC();
//         p.rtcEvents.on('jsonMsg', (msg) => {
//           console.log('rtc peer jsonMsg', msg);
//         });
        
//       } catch (e) {
//         console.log('error connecting to rtc', e);
//       }
//     }
//     tryConnect();
//     setInterval(() => {
//       if (!p.dcOpen) {
//         tryConnect();
//       }
//     }, rtcTryInterval);
//     setInterval(() => {
//       // console.log('rtc status', p.rtcStatus);
      
//       // console.log('imgUrl', imgUrl);
//       if (p.dcOpen && canvas) {
//         if (canvas.width > canvas.height) {
//           offCanvas.width = maxSize;
//           offCanvas.height = maxSize * canvas.height / canvas.width;
          
//         } else {
//           offCanvas.width = maxSize * canvas.width / canvas.height;
//           offCanvas.height = canvas.height;
//         }
//         offCanvas.getContext('2d').drawImage(canvas, 0, 0, offCanvas.width, offCanvas.height);
//         const imgUrl = canvas.toDataURL("image/jpeg", imageQuality);
//         try {
//           p.sendJSONMsg({ imgUrl });
//         }
//         catch (e) {
//           console.log('error sending image', e);
//         }
//       }
//     }, sendInterval);

// }

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function drawCircle(ctx, x, y, radius) {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.closePath();
}

function draw() {
  const canv = document.getElementById('canvas');
  const ctx = canv.getContext('2d');
  ctx.fillStyle = `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`;
  if (rand(0, 1)) {
    drawCircle(ctx, rand(0, canv.width), rand(0, canv.height), rand(0, canv.width) / 2);
  } else {
    ctx.fillRect(rand(0, canv.width), rand(0, canv.height), rand(0, canv.width), rand(0, canv.height));
  }
  // ctx.fillRect(10, 10, 50, 50);

  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

// launchImageSender({});
window.hsyncCanvas.launchImageSender({});

function App() {
  return (
    <div className="App">
      app
    </div>
  );
}

export default App;
