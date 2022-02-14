
const windowWidth0  = 1745;
const windowHeight0 =  881;

const widthRate  = window.innerWidth/windowWidth0;
const heightRate = window.innerHeight/windowHeight0;

const ratio0 = windowHeight0/windowWidth0;
const ratio  = window.innerHeight/window.innerWidth;

const sizeRate = ratio > ratio0
					? widthRate
					: heightRate;

export const btnBorderRadius = String(Math.floor(20*sizeRate))+"px";
export const btnIconSize     = String(Math.floor(30*sizeRate))+"px";
export const btnTextSize     = String(Math.floor(19*sizeRate))+"px";
export const btnHeight       = String(Math.floor(55*sizeRate))+"px";
export const btnIconPadding  = String(Math.floor(10*sizeRate))+"px";

export const linkIconHeight = String(Math.floor(44*sizeRate))+"px";
export const closeIconSize  = String(Math.floor(50*sizeRate))+"px";
export const borderRadius   = String(Math.floor(20*sizeRate))+"px";

export const landLogoHeight      = String(Math.floor(414*sizeRate))+"px";
export const landBtnHeight       = String(Math.floor( 65*sizeRate))+"px";
export const landTitleSize       = String(Math.floor( 49*sizeRate))+"px";
export const landSubTitleSize    = String(Math.floor( 40*sizeRate))+"px";
export const landTextSize        = String(Math.floor( 20*sizeRate))+"px";
export const descriptionTextSize = String(Math.floor( 22*sizeRate))+"px";
export const descriptionIconSize = String(Math.floor( 60*sizeRate))+"px";

export const mainTitleSize     = String(Math.floor( 38*sizeRate))+"px";
export const mainLogoTextWidth = String(Math.floor(187*sizeRate))+"px";
export const mainLogoWidth     = String(Math.floor( 59*sizeRate))+"px";

export const emperorWidth          = String(Math.floor(187*sizeRate))+"px";
export const emperorSvgSize        = String(Math.floor(165*sizeRate))+"px";
export const emperorMainHeight     = String(Math.floor(315*sizeRate))+"px";
export const emperorMainTxtPadding = String(Math.floor( 50*sizeRate))+"px";
export const emperorMainBoxPadding = String(Math.floor( 20*sizeRate))+"px";
export const emperorBorderRadius   = String(Math.floor( 20*sizeRate))+"px";
export const emperorImgBoxSize     = String(Math.floor(180*sizeRate))+"px";
export const emperorTierTxtSize    = String(Math.floor( 20*sizeRate))+"px";
export const emperorSubTitleSize   = String(Math.floor( 14*sizeRate))+"px";
export const emperorPixelTxtSize   = String(Math.floor( 14*sizeRate))+"px";
export const emperorPriceTxtSize   = String(Math.floor( 10*sizeRate))+"px";
export const emperorBtnBoxPadding  = String(Math.floor( 25*sizeRate))+"px";

export const nftBoxHeight = String(Math.floor( 240*sizeRate))+"px";
export const nftBoxWidth  = String(Math.floor( 215*sizeRate))+"px";
export const nftImgSize   = String(Math.floor( 150*sizeRate))+"px";
export const nftTxtSize   = String(Math.floor(  25*sizeRate))+"px";


