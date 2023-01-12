let linkName;
let linkID;
let image;
let price;

let links = document.getElementsByTagName("a")

const linkPressed = e => {
    linkName = e.target.innerHTML;
    linkID = e.target.id;
}

if (linkID == "subaru-crosstek")
    price = "$31,473";
else if(linkID == "honda-civic")
    price = "$28,807";
else if (linkID == "bmw-5x")
    price = "$27,569";
else if (linkID == "jeep-wrangler")
    price = "$23,585"
else if(linkID == "ford-f150")
    price = "$22,395";
else if(linkID == "totoya-camry")
    price = "$20,745";
else if(linkID == "nissan-frontier")
    price = "$19,492";
else if(linkID == "toyota-carolla")
    price = "$18,524";
else if(linkID == "nissan-sentra")
    price = "$17,489";