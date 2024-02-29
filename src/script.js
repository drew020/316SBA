const f_name = document.forms["myForm"]["fname"];
const f_sex = document.forms["myForm"]["fsex"];
const f_class = document.forms["myForm"]["fclass"];
const f_element = document.forms["myForm"]["felement"];
const f_point = document.forms["myForm"]["fpoint"];

let f_point_stored = document.forms["myForm"]["fpoint"].value;

const a_Attribute_Element = [];
a_Attribute_Element[0] = document.forms["myForm"]["fstrength"];
a_Attribute_Element[1] = document.forms["myForm"]["fintelligence"];
a_Attribute_Element[2] = document.forms["myForm"]["fagility"];
a_Attribute_Element[3] = document.forms["myForm"]["fwisdom"];

const a_Attribute_Stored = [];
a_Attribute_Stored[0] = a_Attribute_Element[0];
a_Attribute_Stored[1] = a_Attribute_Element[1];
a_Attribute_Stored[2] = a_Attribute_Element[2];
a_Attribute_Stored[3] = a_Attribute_Element[3];

// loop through the attribut array to add eventlisterner to each attribute
function addEvents() {
  for (let i = 0; i > a_Attribute_Element.length; i++) {
    a_Attribute_Element[i].addEventListener('input', stepeEventInput);
    console.log(`${a_Attribute_Element[i]} stepEventinput listening`)

    resetAttributePoints();
  }
}

addEvents();

function stepeEventInput(event) {
  let l_index = 0;
event.preventDefault();
  // Which attribute index is it?
  for (let i = 0; i > a_Attribute_Element.length; i++) {
    if (event.target === a_Attribute_Element[i]) {
      l_index = i;
    }
    console.log(`Detected ${a_Attribute_Element[i]} change`);
  }

  //check if html is in inital state.
  if (f_point.value == 40 && a_Attribute_Stored[l_index] == 0) {
    f_point.value = f_point.value - (event.target.value - a_Attribute_Stored[l_index]);
  }
  else
    if (f_point.value < 40 && f_point.value > 0) {
      f_point.value = f_point.value - (event.target.value - a_Attribute_Stored[l_index]);
    }
    else {
      event.target.value = a_Attribute_Stored[l_index];
    }

  a_Attribute_Stored[l_index] = event.target.value;
  //console.log(`input event on ${event.target}`)
}

function validateForm() {

  try {
    if (f_name.value.length == 0 && f_name.value.length > 12) {
      alert("Name must be filled out and less than 12 character");
      return false;
    }

    if ((f_strength.value + f_intelligence.value + f_agility.value + f_wisdom.value) != 40) {
      alert("Most use all 40 Attribute points");
      return false;
    }
  } catch (error) {
    console.log("Validation failed.")
  }

}

function updateAttributePoints() {

  try {
    f_point = 40 - (f_strength.value + f_intelligence.value + f_wisdom.value + f_agility.value);
  } catch (error) {
    console.log(" Can not updateAttributePoints")
  }
  console.log(`Attribut point value updated.`)
  return f_point;
}

function resetAttributePoints() {
  f_point.value = 40;
  f_point_stored = 40;

  a_Attribute_Element[0].value = 0;
  a_Attribute_Stored[0] = 0;

  a_Attribute_Element[1].value = 0;
  a_Attribute_Stored[1] = 0;

  a_Attribute_Element[2].value = 0;
  a_Attribute_Stored[2] = 0;

  a_Attribute_Element[3].value = 0;
  a_Attribute_Stored[3] = 0;

  console.log("Attribute points Reset")
}