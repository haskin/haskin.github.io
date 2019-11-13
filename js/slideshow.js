const changeSlide = (projectContainerClass, button) => {
    const query = "." + projectContainerClass;
    const projectContainer = document.querySelector(query);
    const imageNodeList = projectContainer.querySelectorAll(".projectImage");
    let currNode = null;
    let currIndex = null;
    for(let index = 0; index < imageNodeList.length; index++){
        
        if(imageNodeList[index].style.display != "none" 
            && imageNodeList[index].style.display !=""){ //some nodes "" instead of none
            currNode = imageNodeList[index];
            currIndex = index;
            break;
        }
    }
    let newNode = null;
    if(button === "prev"){
        // prevNode = imageNodeList[slideNumber];
        newNode = imageNodeList[currIndex-1] || 
                    imageNodeList[imageNodeList.length-1];
    }
    else if(button ==="next"){
        /* Prevents undefined if slideNumber is first imageNode [0]*/
        newNode = imageNodeList[((currIndex + 1) % imageNodeList.length)];
    }
    else return;

    currNode.style.display="none";
    newNode.style.display = "inline";
}

const defualtSlides = () => {
    const containers = [".projectsContainer__bulletJournal",
                        ".projectsContainer__quotemark",
                        ".projectsContainer__privateClipboard"];
    containers.forEach( (containerClass) => {
        const projectContainer = document.querySelector(containerClass);
        //Selects the first image in the project container
        const defaultNode = projectContainer.querySelectorAll(".projectImage")[0];
        defaultNode.style.display = "inline";
    });
}

defualtSlides();

document.querySelector(".prevButton").addEventListener("click", (event)=>{
    projectContainer = event.srcElement.parentElement
                        .parentElement.classList[0];
    changeSlide(projectContainer, "prev");
}); 

document.querySelector(".nextButton").addEventListener("click", (event)=>{
    projectContainer = event.srcElement.parentElement
                        .parentElement.classList[0];
    changeSlide(projectContainer, "next");
}); 