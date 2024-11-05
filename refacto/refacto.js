// Projet 1
let env = {x: 1, y: "salut", z: 67};

function lookup_variable(env, variable) {
    if (variable in env) { // parcourir env et voir si variable s'y trouve
      return env[variable]; // renvoyer la variable si trouvée
    } else {
      console.log("variable not found"); //alert si variable n'est pas dans env
      ;
    }
  }

console.log(lookup(env,"y"),lookup(env,"x"));


// Projet 2
app.post('/api/register', async (req, res) => { // route pour enregistrer un client
    try {
        const { email, password } = req.body; //extraire les données de la requète
        const user = new User({ email, password }); // création de l'user
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user' });
    }
});


//Projet 3
const handleMapClick = (location) => { 
    isLocationImported(location);
    setNewLocation(location);  // Update the newLocation state with the clicked location
    updateLocationBasedOnType(location);
  };

  function updateLocationOnType(location){
    if (selectingLocation && selectedType) { // test si requete est non-vide
        if (selectedType === 'vehicle') {
          console.log('in vehicle');
          updateVehicleLocation(location);
  
        } else if (selectedType === 'station') {
          console.log('in station');
          updateStationLocation(location);
        }
        setSelectingLocation(false);  // Reset the selection mode
      }
  }

  function isLocationImported(location){
    if (location.lat === undefined || location.lng === undefined) { //test si location n'est pas vide
        console.error('Invalid location object', location);
        return;
      }
  }