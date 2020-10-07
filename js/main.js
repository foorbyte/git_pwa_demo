/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("Salut");


//var swScope = serviceWorkerRegistration.scope;

window.addEventListener('beforeinstallprompt', (e) => { 
    // Prevent Chrome 67 and earlier from automatically showing the prompt 
    e.preventDefault(); 
    // Stash the event so it can be triggered later. 
    deferredPrompt = e; 
    // Update UI to notify the user they can add to home screen 
    addBtn.style.display = 'block';  
  
    addBtn.addEventListener('click', (e) => { 
      // hide our user interface that shows our A2HS button 
      addBtn.style.display = 'none'; 
      // Show the prompt 
      deferredPrompt.prompt(); 
      // Wait for the user to respond to the prompt 
      deferredPrompt.userChoice.then((choiceResult) => { 
          if (choiceResult.outcome === 'accepted') { 
            console.log('User accepted the A2HS prompt'); 
          } else { 
            console.log('User dismissed the A2HS prompt'); 
          } 
          deferredPrompt = null; 
        }); 
    }); 
});
  

  // Pour intégrer le service worker on fait un test pour pouvoir l'enregister
  if ("serviceWorker" in navigator) {
      window.addEventListener("load", function (reg) {
        
     
          
        navigator.serviceWorker
            .register("service-worker.js"
            )
        .then(res => console.log("Le service worker est dans le registre ◕‿◕", reg, res))
        .catch(err => console.log("Le service worker n'est pas dans le registre", err))
    })
    } else {
        console.warn('Le navigateur ne prend pas en charge les services worker');
    }