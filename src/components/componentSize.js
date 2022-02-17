const windowWidth0  = 1745;
const windowHeight0 =  881;

const widthRate  = window.innerWidth/windowWidth0;
const heightRate = window.innerHeight/windowHeight0;

const ratio0 = windowHeight0/windowWidth0;
const ratio  = window.innerHeight/window.innerWidth;

const sizeRate = ratio > ratio0
					? widthRate
					: heightRate;

export const btnIconSize     = Math.max(String(Math.floor(30*sizeRate)), 20)+"px";
export const btnTextSize     = Math.max(String(Math.floor(19*sizeRate)), 12)+"px";
export const btnHeight       = Math.max(String(Math.floor(55*sizeRate)), 28)+"px";
export const btnIconPadding  = Math.max(String(Math.floor(10*sizeRate)), 5)+"px";

export const linkIconHeight = Math.max(String(Math.floor(44*sizeRate)), 22)+"px";
export const closeIconSize  = Math.max(String(Math.floor(50*sizeRate)), 25)+"px";
export const borderRadius   = Math.max(String(Math.floor(20*sizeRate)), 10)+"px";

export const landTextSize        = Math.max(String(Math.floor( 20*sizeRate)), 10)+"px";
export const descriptionTextSize = Math.max(String(Math.floor( 22*sizeRate)), 11)+"px";
export const descriptionIconSize = Math.max(String(Math.floor( 60*sizeRate)), 30)+"px";

export const mainLogoTextWidth = Math.max(String(Math.floor(187*sizeRate)), 94)+"px";
export const mainLogoWidth     = Math.max(String(Math.floor( 59*sizeRate)), 30)+"px";

export const emperorWidth          = Math.max(String(Math.floor(187*sizeRate)), 127)+"px";
export const emperorSvgSize        = Math.max(String(Math.floor(165*sizeRate)), 110)+"px";
export const emperorMainHeight     = Math.max(String(Math.floor(315*sizeRate)), 210)+"px";
export const emperorMainTxtPadding = Math.max(String(Math.floor( 50*sizeRate)), 33)+"px";
export const emperorMainBoxPadding = Math.max(String(Math.floor( 20*sizeRate)), 13)+"px";
export const emperorBorderRadius   = Math.max(String(Math.floor( 20*sizeRate)), 13)+"px";
export const emperorImgBoxSize     = Math.max(String(Math.floor(180*sizeRate)), 120)+"px";
export const emperorTierTxtSize    = Math.max(String(Math.floor( 20*sizeRate)), 13)+"px";
export const emperorSubTitleSize   = Math.max(String(Math.floor( 14*sizeRate)), 9)+"px";
export const emperorPixelTxtSize   = Math.max(String(Math.floor( 14*sizeRate)), 9)+"px";
export const emperorPriceTxtSize   = Math.max(String(Math.floor( 10*sizeRate)), 7)+"px";
export const emperorBtnBoxPadding  = Math.max(String(Math.floor( 25*sizeRate)), 17)+"px";

export const nftBoxHeight = Math.max(String(Math.floor( 240*sizeRate)), 172)+"px";
export const nftBoxWidth  = Math.max(String(Math.floor( 215*sizeRate)), 158)+"px";
export const nftImgSize   = Math.max(String(Math.floor( 150*sizeRate)), 120)+"px";


