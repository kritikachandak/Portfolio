function setTheme(mode) {
    if (mode === "light") {
      document.getElementById("theme-style").href = "default.css";
      document.getElementById('github').style.fill="black";
    }
  
    if (mode === "blue") {
      document.getElementById("theme-style").href = "blue.css";
      document.getElementById('github').style.fill="white";
     }
  
    if (mode === "green") {
      document.getElementById("theme-style").href = "green.css";
      document.getElementById('github').style.fill="black";
    }
  
    if (mode === "purple") {
      document.getElementById("theme-style").href = "purple.css";
      document.getElementById('github').style.fill="white";
    }
    localStorage.setItem("theme", mode);
  }
  
  let theme = localStorage.getItem("theme");
  
  // Fetching the theme from the local storage if available
  if (theme) setTheme(theme);
  else setTheme("light");
  
  let themeDots = document.getElementsByClassName("theme-dot");
  
  for (let theme = 0; themeDots.length > theme; theme++) {
      themeDots[theme].addEventListener("click", function () {
          let mode = this.dataset.mode;
          setTheme(mode);
      });
  }
  
  class Project {
    constructor({
                  projectName,
                  projectDescription,
                  projectImage,
                  codeLink,
                  demoLink
                }) {
      this.title = this.createHeadingTag({
        headingType: "h6",
        className: "post-title",
        text: projectName
      });
  
      this.description = this.createParaTag({
        className: "post-intro",
        text: projectDescription
      });
  
      this.demo = this.createAttributeTag({
        href: demoLink,
        text: "Live Demo"
      });
  
      this.code = this.createAttributeTag({
        href: codeLink,
        text: "Source Code"
      });
  
      this.projectImage = this.createImageTag({
        className: "thumbnail",
        src: projectImage,
        alt: projectName
      });
  
      this.sourceCodeDiv = this.createDiv({
        className: "source-code",
        childElements: [this.demo, this.code]
      });
  
      this.cardHeaderDiv = this.createDiv({
        className: "post-preview",
        childElements: [this.title, this.description, this.sourceCodeDiv]
      });
  
      this.cardComponent = this.createDiv({
        className: "post",
        childElements: [this.projectImage, this.cardHeaderDiv]
      });
    }
  
    createAttributeTag({ href = "", target = "_blank", text }) {
      const tagDocument = document.createElement("a");
      tagDocument.href = href;
      tagDocument.target = target;
      const tagTextElement = document.createTextNode(text);
      tagDocument.appendChild(tagTextElement);
      return tagDocument;
    }
  
    createParaTag({ className = null, text = "" }) {
      const paraElement = document.createElement("p");
      if (className) paraElement.className = className;
  
      const paraText = document.createTextNode(text);
      paraElement.appendChild(paraText);
      return paraElement;
    }
  
    createDiv({ className = null, childElements = [] }) {
      const divElement = document.createElement("div");
      if (className) divElement.className = className;
      childElements.forEach(element => {
        divElement.appendChild(element);
      });
      return divElement;
    }
  
    createHeadingTag({ headingType = "h1", className = null, text = "" }) {
      const headingTag = document.createElement(headingType);
      if (className) headingTag.className = className;
      const headingText = document.createTextNode(text);
      headingTag.appendChild(headingText);
      return headingTag;
    }
  
    createImageTag({ className = null, src = "", alt = "" }) {
      const imageTag = document.createElement("img");
      if (className) imageTag.className = className;
      imageTag.src = src;
      imageTag.alt = alt;
      return imageTag;
    }
  
    createProjectCard() {
      return this.cardComponent;
    }
  }
  
  const projects = [
    {
      projectName: "Pokedock",
      projectDescription:
        "Pokedock is an application built using typescript to get the list of pokemons and their properties.",
      projectImage: "images/pokedock.png",
      codeLink: "https://github.com/kritikachandak/Pokedock",
      demoLink: "https://pokedock.herokuapp.com/"
    },{
      projectName: "Pizza Restro",
      projectDescription:
        "Pizza Restro is a pizza resturant application built using reactjs and styled components",
      projectImage: "images/pizza.png",
      codeLink: "https://github.com/kritikachandak/Pizza-Restro",
      demoLink: "https://pizza-restro.vercel.app/"
    },{
      projectName: "Hangman Game",
      projectDescription:
        "Designed & Built Hangman Game using React and React-Hooks.",
      projectImage: "images/hangman.png",
      codeLink: "https://github.com/kritikachandak/Hangman",
      demoLink: "https://hangmang.herokuapp.com/"
    },{
      projectName: "Tweet",
      projectDescription:
        "Designed & Built Frontend part of twitter using React and Typescript.",
      projectImage: "images/tweet.png",
      codeLink: "https://github.com/kritikachandak/Twitter-clone",
      demoLink: "https://tweetui.herokuapp.com/" 
    },{
      projectName: "Expense Tracker",
      projectDescription:
        "Designed & Built Expense Tracker using React.",
      projectImage: "images/expense.png",
      codeLink: "https://github.com/kritikachandak/ExpenseTracker",
      demoLink: "https://expensetrackerk.herokuapp.com/"
    },
    {
      projectName: "Portfolio with Theme Changer",
      projectDescription:
        "Designed & Built the Portfolio using HTML CSS and Vanilla JavaScript to show case the Professional Journey.",
      projectImage: "images/portfolio.png",
      codeLink: "https://github.com/kritikachandak/Portfolio ",
      demoLink: "https://kritikachandak.github.io/Portfolio/ "
    },
   
   
  ];
  
  const createCards = () => {
    projects.map(project => {
        const projectCard = new Project({
          projectName: project.projectName,
          projectDescription: project.projectDescription,
          projectImage: project.projectImage,
          codeLink: project.codeLink,
          demoLink: project.demoLink
        }).createProjectCard();
        document.getElementById("post-wrapper-id").appendChild(projectCard);
      }
    );
  };
  createCards();