const getButton = document.querySelector('#getPos button');
const watchButton = document.querySelector('#watchPos #watch');
const clearButton = document.querySelector('#watchPos #clear');
const showGetPage = document.querySelector('#getPos .getPage');
const showGetFrame = document.querySelector('#getPos .getFrame');
const showWatchPage = document.querySelector('#watchPos .watchPage');
const showWatchFrame = document.querySelector('#watchPos .watchFrame');
const frame = document.getElementById("frame");
let pageWatchId;
let frameWatchId;


// runs when you click "Get"
const onGetLocation = (e) => {
    e.preventDefault();

    showGetPage.innerHTML = 'Getting page location...';
    console.log('Getting page location...');
    showGetFrame.innerHTML = 'Getting frame location...';
    console.log('Getting frame location...');
  
    navigator.geolocation.getCurrentPosition((position)=> {
      console.log('Page position:', position);
      showGetPage.innerHTML = `<a href="https://www.openstreetmap.org/#map=10/${position.coords.latitude}/${position.coords.longitude}" target="_blank">${position.coords.latitude}, ${position.coords.longitude}</a>`;
    }, (e)=> {
        console.log('Page error:', e);
        showGetPage.innerHTML = 'Error. ' + e.message;
      });
  
      frame.contentWindow.navigator.geolocation.getCurrentPosition((position)=> {
        console.log('Frame position:', position);
        showGetFrame.innerHTML = `<a href="https://www.openstreetmap.org/#map=10/${position.coords.latitude}/${position.coords.longitude}" target="_blank">${position.coords.latitude}, ${position.coords.longitude}</a>`;
            }, (e)=> {
                console.log('Frame error:', e);
                showGetFrame.innerHTML = 'Error. ' + e.message;
            }); 
  
        }


// runs when you click "Watch"
const onWatchLocation = (e) => {
    e.preventDefault();

    showWatchPage.innerHTML = 'Watching page location...';
    showWatchFrame.innerHTML = 'Watching frame location...';
    console.log('Watching page location...');
    console.log('Watching frame location...');

    pageWatchId = navigator.geolocation.watchPosition((position)=> {
        console.log('Page watch:', position, 'watchId:', pageWatchId);
        showWatchPage.innerHTML = `<a href="https://www.openstreetmap.org/#map=10/${position.coords.latitude}/${position.coords.longitude}" target="_blank">${position.coords.latitude}, ${position.coords.longitude}</a>`;
    }, (e)=> {
        console.log('Page watch error:', e);
        showWatchPage.innerHTML = 'Error. ' + e.message;
    });

    frameWatchId = frame.contentWindow.navigator.geolocation.watchPosition((position)=> {
        console.log('Frame watch:', position, 'frameWatchId:', frameWatchId);
        showWatchFrame.innerHTML = `<a href="https://www.openstreetmap.org/#map=10/${position.coords.latitude}/${position.coords.longitude}" target="_blank">${position.coords.latitude}, ${position.coords.longitude}</a>`;
    }, (e)=> {
        console.log('Frame watch error:', e);
        showWatchFrame.innerHTML = 'Error. ' + e.message;
    });

    clearButton.style['display'] = 'block';
    watchButton.style['display'] = 'none';
}


// runs when you click "Clear"
       const onClearWatch = (e) => {
            e.preventDefault();

            navigator.geolocation.clearWatch(pageWatchId);
            frame.contentWindow.navigator.geolocation.clearWatch(frameWatchId);
            console.log('Page watch cleared');
            console.log('Frame watch cleared');
            showWatchPage.innerHTML = 'Page watch cleared.';
            showWatchFrame.innerHTML = 'Frame watch cleared.';
            clearButton.style['display'] = 'none';
            watchButton.style['display'] = 'block'; 
        }
      
       
// listeners
getButton.addEventListener('click', onGetLocation);
watchButton.addEventListener('click', onWatchLocation);
clearButton.addEventListener('click', onClearWatch);
clearButton.style['display'] = 'none';
