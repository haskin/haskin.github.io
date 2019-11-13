function createImageZoom(image){
    //Copies image so original image isn't changed
    const imageCopy = image.cloneNode(true);
    // console.log(imageCopy);
    const imageZoomContainer = document.getElementById("imageZoomContainer");
    imageCopy.id = "imageZoomContainer__image";
    //Resets the width from the original event elemnt
    imageCopy.style.width = "auto";
    imageZoomContainer.append(imageCopy);
    /*Centers the image and shows the zoomContainer*/
    imageZoomContainer.style.display="flex";
    imageZoomContainer.justifycontent="center";
    imageZoomContainer.aligncontent="center";

    //Listens for a click on the entire page
    document.body.addEventListener('click', function handler(e){
        //Removes the imageCopy from imageZoomContainer
        imageCopy.remove();
        imageZoomContainer.style.display="none";
        //Removes the event listener after it's triggered
        e.currentTarget.removeEventListener(e.type, handler, true);
    }, true);
};

document.querySelectorAll(".projectImage").forEach( (projectImage) => {
    projectImage.addEventListener("click", (event)=>{
        createImageZoom(event.srcElement);
    });
});
    
