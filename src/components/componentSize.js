const windowWidth0  = 1745;
const windowHeight0 =  881;

const widthRate  = window.innerWidth /windowWidth0;
const heightRate = window.innerHeight/windowHeight0;

const ratio0 = windowHeight0/windowWidth0;
const ratio  = window.innerHeight/window.innerWidth;

const sizeRate = ratio > ratio0
					? widthRate
					: heightRate;

export const btnIconSize           = Math.max(String(Math.floor( 30*sizeRate)),  20)+"px";
export const btnIconPadding        = Math.max(String(Math.floor( 10*sizeRate)),   5)+"px";
export const linkIconHeight        = Math.max(String(Math.floor( 44*sizeRate)),  22)+"px";
export const closeIconSize         = Math.max(String(Math.floor( 50*sizeRate)),  25)+"px";
export const borderRadius          = Math.max(String(Math.floor( 20*sizeRate)),  10)+"px";
export const descriptionIconSize   = Math.max(String(Math.floor( 60*sizeRate)),  30)+"px";