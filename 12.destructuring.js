
const voxel = {x: 3.6, y: 7.4, z: 6.54 };

/* without destructuring */

const x = voxel.x; // x=3.6
const y = voxel.y; // y=7.4
const z = voxel.z; // z=6.54

/* use destructuring */

const { x : a, y : b, z : c } = voxel; //  a = 3.6, b = 7.4, c = 6.54 

/* . */

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";

const { tomorrow : tempOfTomorrow } = avgTemperatures;
return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // 79
