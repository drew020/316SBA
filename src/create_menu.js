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

  //import "/src/styles.css";

// reference/cached html elements
const mainEL = document.querySelector("main");
const topMenuEl = document.getElementById("top-menu");
const subMenuEl = document.getElementById("sub-menu");
const topMenuLinks = [];

function aLab2() {
  // set height to 100%.
  topMenuEl.style.height = "100%";
  // set background color to value.
  topMenuEl.style.backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--top-menu-bg");
  // add class
  topMenuEl.setAttribute("class", "flex-around");
}

function rLab3() {
  //set height
  subMenuEl.style.height = "100%";

  //set submenu bg to css stored submenu bg color
  subMenuEl.style.backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--sub-menu-bg");

  subMenuEl.setAttribute("class", "flex-around");

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
  //Equal the same thing on line below. "topMenuEl.addEventListener("click", function (event) {"
  topMenuEl.addEventListener("click",(event)  =>{
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
        if (event.target.textContent == "catalog") {
          j = 1;
          n = 3;
          populatesubmenu(j, n);
        } else if (event.target.textContent == "orders") {
          j = 2;
          n = 3;
          populatesubmenu(j, n);
        } else if (event.target.textContent == "account") {
          j = 3;
          n = 2;
          populatesubmenu(j, n);
        }

        //add active class to clicked link
        event.target.setAttribute("class", "active");
      } else if (
        event.target.textContent != "about" &&
        l_claas.length == 0 &&
        l_active.length > 0
      ) {
        deletechildrenEl();

        let j;
        let n;
        if (event.target.textContent == "catalog") {
          j = 1;
          n = 3;
          populatesubmenu(j, n);
        } else if (event.target.textContent == "orders") {
          j = 2;
          n = 3;
          populatesubmenu(j, n);
        } else if (event.target.textContent == "account") {
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
  },);
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
aLab2();
//alab3); Deprecated
rLab3();
rLab4();
rLab5();
// Extract sublinks
