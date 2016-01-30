//var forceX = 0;

function parseSubscribedMessage(input) {
                                    //alert(input);
                                    res=input.split(", ");
                                    //alert("res[0]--->" + res[0]),
                                    forcex = res[0].split("=");
                                    forcey = res[1].split("=");
                                    forcez = res[2].split("=");
                                    //alert(res),
                                    //alert(forcex[1]),
                                    //alert(forcey[1]),
                                    //alert(parseInt(forcex),
                                    //alert(parseInt(forcey),
                                    //alert(parseInt(forcez),
                                    document.getElementById("forceX").innerHTML = "Force X: " + forcex[1] + " Nm";
                                    document.getElementById("forceY").innerHTML = "Force Y: " + forcey[1] + " Nm";
                                    document.getElementById("forceZ").innerHTML = "Force Z: " + forcez[1] + " Nm";
                                    forceX = parseInt(forcex[1]);
                                    forceY = parseInt(forcey[1]);
                                    forceZ = parseInt(forcez[1]);
                thresholdAlert(forceX, forceY, forceZ);
                graphUpdate(forceX, forceY, forceZ);

}