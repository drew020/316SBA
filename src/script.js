// reference/cached html elements
const mainEL = document.querySelector("main");
const topMenuEl = document.getElementById("top-menu");
const subMenuEl = document.getElementById("sub-menu");
const topMenuLinks = [];


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
const h1 = document.createElement("h1");

//#region Menu stuff
// Menu links posed as a easily editable object to be generated via a loop.
const menuLinks = [
  { text: "HOME", href: "/HOME" },
  {
    text: "GAMES",
    href: "#",
    subLinks: [
      { text: "Labyrinth of the Alchemist", href: "/games/textgame" },
      { text: "Errant Knight Online", href: "/games/ek_online" },
    ],
  },
  {
    text: "NEWS",
    href: "#",
    subLinks: [
      { text: "Updates", href: "/news/updates" },
      { text: "Releases", href: "/news/release" },
      { text: "CS Studio", href: "/news/csstudios" },
    ],
  },
  {
    text: "ACCOUNT",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

function aLab2() {
  // set background color to value in css file a variable in the :root
  topMenuEl.style.backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--top-menu-bg");
}

function rLab3() {
  //set height
  subMenuEl.style.height = "100%";

  //set submenu bg to css stored submenu bg color
  subMenuEl.style.backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--sub-menu-bg");

  //subMenuEl.setAttribute("class", "flex-around");

  //   Set the CSS position property of subMenuEl to the value of absolute.
  subMenuEl.style.position = "absolute";

  // Set the CSS top property of subMenuEl to the value of 0.
  subMenuEl.style.top = 0;
}

function rLab4() {
  // iterate over menuLinks array.
  for (let i = 0; i < menuLinks.length; i++) {
    // created element hyperling element
    const menuLinkEl = document.createElement("a");
    // edit hyperlink text
    menuLinkEl.textContent = menuLinks[i].text;
    // adds hyperling reference to a element
    menuLinkEl.setAttribute("href", menuLinks[i].href);
    // adds the generated a element to menu
    topMenuEl.appendChild(menuLinkEl);
    // stores a cache reference topmenulinks array
    topMenuLinks.push(topMenuEl.childNodes[i]);
  }
}

function rLab5() {
  // Add click event listener to the parent
  topMenuEl.addEventListener("click", function (event) {
    // Prevent default behavior
    event.preventDefault();
    // Check if the clicked element is an <a> element
    if (event.target.tagName === "A") {
      const l_claas = event.target.classList;
      const l_active = document.getElementsByClassName("active");
      if (
        event.target.textContent != "about" &&
        l_claas.length == 0 &&
        l_active.length == 0
      ) {
        deletechildrenEl();

        //populates submenulink
        subMenuEl.style.top = "100%";

        let j;
        let n;
        if (event.target.textContent == "GAMES") {
          j = 1;
          n = 2;
          populatesubmenu(j, n);
        } else if (event.target.textContent == "NEWS") {
          j = 2;
          n = 3;
          populatesubmenu(j, n);
        } else if (event.target.textContent == "ACCOUNT") {
          j = 3;
          n = 2;
          populatesubmenu(j, n);
        }

        //add active class to clicked link
        event.target.setAttribute("class", "active");
      } else if (
        event.target.textContent != "HOME" &&
        l_claas.length == 0 &&
        l_active.length > 0
      ) {
        deletechildrenEl();

        let j;
        let n;
        if (event.target.textContent == "GAMES") {
          j = 1;
          n = 2;
          populatesubmenu(j, n);
        } else if (event.target.textContent == "NEWS") {
          j = 2;
          n = 3;
          populatesubmenu(j, n);
        } else if (event.target.textContent == "ACCOUNT") {
          j = 3;
          n = 2;
          populatesubmenu(j, n);
        }
        //remvoe active class from all links
        topMenuLinks.forEach(function (element) {
          element.classList.remove("active");
        });
        // set active
        event.target.setAttribute("class", "active");
      } else {
        //remvoe active class from all links
        topMenuLinks.forEach(function (element) {
          element.classList.remove("active");
        });
        // hide submenu
        subMenuEl.style.top = "0%";
      }
    } else {
      subMenuEl.style.top = "0%";

      deletechildrenEl();

      //remvoe active class from all links
      topMenuLinks.forEach(function (element) {
        element.classList.remove("active");
      });
      // hide submenu
    }
    //debug onclicked link
    console.log("Clicked link content:", event.target.textContent);
  });
}
function populatesubmenu(index, num) {
  for (let i = 0; i < num; i++) {
    // created element hyperling element
    const menuLinkEl = document.createElement("a");
    // edit hyperlink text
    menuLinkEl.textContent = menuLinks[index].subLinks[i].text;
    // adds hyperling reference to a element
    menuLinkEl.setAttribute("href", menuLinks[index].subLinks[i].href);
    // adds the generated a element to menu
    subMenuEl.appendChild(menuLinkEl);
  }
}
function deletechildrenEl() {
  while (subMenuEl.firstChild) {
    subMenuEl.removeChild(subMenuEl.firstChild);
  }
}
//#endregion Menu stuff

//#region Menu stuff

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  else {
    alert("Character Created!");
    return true;
  }
}
//#endregion Menu stuff

aLab2();
//alab3); Deprecated
rLab3();
rLab4();
rLab5();
// Extract sublinks
