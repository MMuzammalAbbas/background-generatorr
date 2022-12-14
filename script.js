convertHexColor = ()=> {
	let color = document.getElementById("hexColorInput").value;
	R = hexToR(color);
	G = hexToG(color);
	B = hexToB(color);
	document.getElementById("rcolor").value = R;
	document.getElementById("gcolor").value = G;
	document.getElementById("bcolor").value = B;
	colorDisplay = document.querySelector(".displayColor");
	document.getElementById("displayColor").style.background = `#${color}`;
}
	const hexToR =(h) => {
		return parseInt((cutHex(h)).substring(0,2),16)
	}
	const hexToG =(h) => {
		return parseInt((cutHex(h)).substring(2,4),16)
	}
	const hexToB =(h) => {
		return parseInt((cutHex(h)).substring(4,6),16)
	}
	const hexToR =(h) => {
		return (h.charAt(0) == "#") ? h.substring(1,7):
	}
	const rgbToHex = () => {
    R = document.getElementById("rColor").value;
    G = document.getElementById("gColor").value;
    B = document.getElementById("bColor").value;
    if (R > 255 || G > 255 || B > 255) {
        alert('Value cant be more than 255')
    } else {
        hex = toHex(R) + toHex(G) + toHex(B);
        document.getElementById("hexColorInput").value = hex;
        colorDisplay = document.querySelector(".displayColor");
        document.getElementById("displayColor").style.backgroundColor = `rgb(${R},${G},${B}`;
    }
}

const toHex = (n) => {
    n = parseInt(n, 10);

    if (isNaN(n)) {
        return "00";
    } else {
        n = Math.max(0, Math.min(n, 255));
        return "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16);;
    }
}

const hexConvert = document.getElementById("getRGB");
const rgbConvert = document.getElementById("getHEX");
colorDisplay = document.querySelector(".displayColor");

hexConvert.addEventListener("click", convertHexColor);
rgbConvert.addEventListener("click", rgbToHex);



