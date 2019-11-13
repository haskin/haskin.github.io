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

    //TODO:This may be bad form because it's always listening to every click
    //Listens for a click on the entire page
    document.body.addEventListener('click', () => {
        //Removes the imageCopy from imageZoomContainer
        imageCopy.remove();
        imageZoomContainer.style.display="none";
    }, true); 

    //Listens for a click on the entire page
    // document.getElementById("imageZoomContainer").addEventListener('click', () => {
    //     //Removes the imageCopy from imageZoomContainer
    //     imageCopy.remove();
    //     imageZoomContainer.style.display="none";
    // }); 
}

document.querySelectorAll(".projectImage").forEach( (projectImage) => {
    projectImage.addEventListener("click", (event)=>{
        createImageZoom(event.srcElement);
    });
});
    
