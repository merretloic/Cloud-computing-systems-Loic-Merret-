//Projet 1
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

//Projet 2
app.post('/api/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = new User({ email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user' });
    }
});

//Projet 3
const handleMapClick = (location) => {
    if (location.lat === undefined || location.lng === undefined) {
      console.error('Invalid location object', location);
      return;
    }

    console.log('in handleMapClick', location.lat, location.lng);
    setNewLocation(location);  // Update the newLocation state with the clicked location

    // Update the location of a vehicle or station based on the selected type
    if (selectingLocation && selectedType) {
      if (selectedType === 'vehicle') {
        console.log('in vehicle');
        updateVehicleLocation(location);

      } else if (selectedType === 'station') {
        console.log('in station');
        updateStationLocation(location);
      }
      setSelectingLocation(false);  // End the selection mode
    }
  };