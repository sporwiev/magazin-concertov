//here you should add the function from the tutorial
//How to Draw Charts Using JavaScript and HTML5 Canvas
//...
function customTag(tagName,fn){
    document.createElement(tagName);
    //find all the tags occurrences (instances) in the document
    let tagInstances = document.getElementsByTagName(tagName);
    //for each occurrence run the associated function
    for ( let i = 0; i < tagInstances.length; i++) {
        fn(tagInstances[i]);
    }
}

function PiechartTag(element){
    //add the canvas where to draw the piechart
    let canvas = document.createElement("canvas");
    //get the width and height from the custom tag attributes
    canvas.width = element.attributes.width.value;
    canvas.height = element.attributes.height.value;
    element.appendChild(canvas);

    //get the colors for the slices from the custom tag attribute
    let colors = element.attributes.colors.value.split(",");

    //load the chart data from the <codingdude-data> sub-tags
    let chartData = {};
    let chartDataElements = element.querySelectorAll("codingdude-data");
    for (let i=0;i<chartDataElements.length;i++){
        chartData[chartDataElements[i].attributes.category.value] = parseFloat(chartDataElements[i].textContent);
        //remove the data sub-tags
        chartDataElements[i].parentNode.removeChild(chartDataElements[i]);
    }

    //call the draw() function
    new Piechart(
        {
            canvas:canvas,
            data:chartData,
            colors:colors
        }
    ).draw();
}

customTag("codingdude-piechart",PiechartTag);