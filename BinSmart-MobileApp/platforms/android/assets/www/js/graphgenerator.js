/* This JavaScript snippet pushes real time data into the
   linechart and renders it for the purpose of visualization
 */


function graphUpdate(currentForceX, currentForceY, currentForceZ) {

    chartX.options.data[0].dataPoints.push({ y: currentForceX});
    chartX.render();

    chartY.options.data[0].dataPoints.push({ y: currentForceY});
    chartY.render();

    chartZ.options.data[0].dataPoints.push({ y: currentForceZ});
    chartZ.render();
}