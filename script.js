const testinomials = [{ name:"vinisha",
    image: "https://www.bing.com/images/search?view=detailV2&ccid=kCy8UulZ&id=EE563A5F606DF0F24A27DB832F6C8A1CA5706AA6&thid=OIP.kCy8UulZxpjiUwOkMhiOIAHaLJ&mediaurl=https%3a%2f%2fwww.cinejosh.com%2fgallereys%2factress%2fnormal%2fvinisha_naidu_stills_0203130257%2fvinisha_naidu_stills_0203130257_001.jpg&exph=1024&expw=680&q=vinisha&simid=608045770801951011&FORM=IRPRST&ck=8C669BDDCB12EAB2B00EF4B8A5C6DA62&selectedIndex=0&itb=0&ajaxhist=0&ajaxserp=0",

    text1: "I dont care about anyone,my life my style"
},{
    name: "chethan",
    image: "https://i.pinimg.com/originals/2d/02/2a/2d022af58a481f053f2c916c2962492f.jpg",
    text1: "Spiderman Sipderman Chethan Spiderman"
    
},{
    name: "srujan",
    image: "https://th.bing.com/th/id/OIP.m3peNEHTauXQE93zZWW41QHaHa?rs=1&pid=ImgDetMain",
    text1:"i might look like chimpanjee but i am acyually hippo"
}];


const imagetop = document.getElementsByTagName("img");
const usernamejs = document.getElementsByClassName("username");
const textjs = document.getElementById("box-section");

const idx = 0;
function mytestimonals() {
    const {name, image, text} = testinomials[0];
    imagetop.src = image;
    usernamejs.innerHTML = name;
    textjs.innerHTML = text;
    idx++

    if(idx === testinomials.length){
        idx == 0;
    }
    setTimeout(()=>{
        mytestimonals();
    },2000)
}


