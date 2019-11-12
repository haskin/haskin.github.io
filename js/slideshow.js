let bulletSlide = 0;
let quoteSlide = 0;
let clipboardSlide = 0;

const showSlide = (slideNumber, projectContainerClass) => {
    const projectContainer = document.querySelector(".projectsContainer__bulletJournal");
    const imageNodeList = projectContainer.querySelectorAll(".projectImage");
    /* Prevents undefined if slideNumber is first imageNode [0]*/
    const prevNode = imageNodeList[slideNumber-1] || 
                     imageNodeList[imageNodeList.length-1];
    console.log(prevNode);
    const imageNode = imageNodeList[slideNumber];
    imageNode.style.display = "inline";
    bulletSlide = slideNumber;
    // console.log(imageNode);
}

// showSlide(bulletSlide, projectContainer);
document.querySelector(".prevButton").addEventListener("click", (event)=>{
    projectContainer = event.srcElement.parentElement
                        .parentElement.classList[0];
    showSlide(bulletSlide, projectContainer);
}); 

document.querySelector(".nextButton").addEventListener("click", (event)=>{
    projectContainer = event.srcElement.parentElement
                        .parentElement.classList[0];
    console.log(projectContainer);
}); 