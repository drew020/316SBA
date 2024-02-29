// reference/cached html elements



    const f_name = document.forms["myForm"]["fname"];
    const f_sex = document.forms["myForm"]["fsex"];
    const f_class = document.forms["myForm"]["fclass"];
    const f_element = document.forms["myForm"]["felement"];
    const f_point = document.forms["myForm"]["fpoint"];
    const f_strength = document.forms["myForm"]["fstrength"];
    const f_intelligence = document.forms["myForm"]["fintelligence"];
    const f_agility = document.forms["myForm"]["fagility"];
    const f_wisdom = document.forms["myForm"]["fwisdom"];

    let f_point_stored = document.forms["myForm"]["fpoint"].value;
    let f_strength_stored = document.forms["myForm"]["fstrength"].value;
    let f_intelligence_stored = document.forms["myForm"]["fintelligence"].value;
    let f_agility_stored = document.forms["myForm"]["fagility"].value;
    let f_wisdom_stored = document.forms["myForm"]["fwisdom"].value;
  // Add event listener for increment button
 //f_strength.addEventListener('wheel',  stepeEventwheel, false);
 //f_strength.addEventListener('input',  stepeEventclick);

f_strength.addEventListener('change',  (event) =>{

 if(f_point.value > 0){
  if(f_point.value - f_strength.value > 0){
    f_point.value = f_point.value - (f_strength.value - f_strength_stored);
    f_strength_stored = f_strength.value;
    console.log(f_strength_stored);
  }
  else{
  }
    
  }
  else{
    f_strength.value = 1;
  }

  console.log(`input event on ${event.type} 2`)

},false);





  function stepeEventclick(event) {
        event.preventDefault();
    console.log(`click event on ${event.type.myForm.value} `)
  }
  function stepeEventwheel(event){

    if (event.deltaY > 0) {
      // Decrease value
      this.stepDown();
    } else {
      // Increase value
      this.stepUp();
    }
    
    // Prevent default scrolling behavior
    event.preventDefault();
    console.log(`wheel event on ${event.type}`)

  };

  function stepUp(){
    console.log("stepUp");
  }
  function stepDown(){
    console.log("stepDown");
  }
//#region Dialogue literals
/* const dialogueArrText = [];
const dialogueArrTag = [];

dialogueArr[0] = "What is your name?";
dialogueArr[1] = "A magical item swells with energy in your hands. ";
dialogueArr[2] = "Distribute your attributes.";
dialogueArr[3] =
  "In the heart of an ancient yet bustling city of Arcanum, where magic flowed like a hidden river, lived an eccentric alchemist. their workshop was a cluttered haven of bubbling flasks dusty tomes, and peculiar artifacts. But their most prized possession sat atop a wooden pedestal—an intricately etched glass jar. They believed that within this jar lay the essence of forgotten realms—a microcosm of existence. it is called the “Dungeon Jar,” and its secrets whispered to her in dreams."; */
//#endregion Dialogue

// Java created elements

//#region Menu stuff
// Menu links posed as a easily editable object to be generated via a loop.




//#endregion Menu stuff

//#region Menu stuff

function validateForm() {

  try {
      if (f_name.value.length == 0 && f_name.value.length > 12) {
    alert("Name must be filled out and less than 12 character");
    return false;
  }

  if ((f_strength.value + f_intelligence.value + f_agility.value + f_wisdom.value) != 40){
    alert("Most use all 40 Attribute points");
    return false;
  }
  } catch (error) {
    console.log("Validation failed.")
  }

}

function updateAttributePoints(){

  try {
      f_point = 40 - (f_strength+f_intelligence+f_wisdom+f_agility);
  } catch (error) {
    console.log(" Can not updateAttributePoints")
  }

  return f_point;
}

function resetAttributePoints(){
f_point.value = 36;
f_strength.value = 1;
f_intelligence.value = 1;
f_wisdom.value = 1;
f_agility.value = 1;
}


//#endregion Menu stuff


// Extract sublinks
