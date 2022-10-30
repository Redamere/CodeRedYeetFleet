
let walmartLink = "https://www.walmart.com/search?q=";
let targetLink = "https://www.target.com/s?searchTerm=";
let amazonLink = "https://www.amazon.com/s?k=";
let ebayLink = "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=";

let walmartResult = {
  walName: "",
  walPrice: "",
  walWorth: "",
}
let targetResult = {
  tarName: "",
  tarPrice: "",
  tarWorth: "",
}
let amazonResult = {
  amaName: "",
  amaPrice: "",
  amaPic: "",
}
let ebayResult = {
  eName: "",
  ePrice: "",
  ePic: "",
}
function linkResetter() {
  walmartLink = "https://www.walmart.com/search?q=";
  targetLink = "https://www.target.com/s?searchTerm=";
  amazonLink = "https://www.amazon.com/s?k=";
  ebayLink =  "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=";
}

function linkUpdater(term){
  linkResetter();
  walmartLink += term;
  targetLink += term
  amazonLink += term;
  ebayLink += term;
  console.log(walmartLink)
  console.log(ebayLink);
  console.log(amazonLink);
  console.log(ebayLink);
  
  
}
function walmartUpdater(term) {
  walmartLink += term;
  console.log(walmartLink);
  return walmartLink;
}
function targetUpdater(term) {
  targetLink += term;
  console.log(targetLink);
  return targetLink
}function amazonUpdater(term) {
  amazonLink += term;
  console.log(amazonLink);
  return amazonLink
}function ebayUpdater(term) {
  ebayLink += term;
  console.log(ebayLink);
  return ebayLink;
}



function search() {
  //console.log("Button Test");
  linkResetter();
  var searchTerm = document.getElementById("searchBar");
  //console.log(searchTerm);
  let ST = searchTerm.value.replaceAll(' ', '-')
  var walRes = document.getElementById("walmart");
  walRes.innerHTML = linkUpdater(ST);
  var tarRes = document.getElementById("target");
  tarRes.innerHTML = targetUpdater(ST);
  var amazRes = document.getElementById("amazon");
  amazRes.innerHTML = amazonUpdater(ST);
  var ebayRes = document.getElementById("ebay");
  ebayRes.innerHTML = ebayUpdater(ST);
}
document.getElementById("searchButton").onclick = search;
// function targetSearch() {
//   //console.log("Button Test");
//   linkResetter();
//   var searchTerm = document.getElementById("searchBar");
//   //console.log(searchTerm);
//   let ST = searchTerm.value.replaceAll(' ', '-')
//   var tarRes = document.getElementById("target");
//   tarRes.innerHTML = targetUpdater(ST.value);
//   return targetUpdater(ST.value);
  
// }
// function amazonSearch() {
//   //console.log("Button Test");
//   linkResetter();
//   var searchTerm = document.getElementById("searchBar");
//   //console.log(searchTerm);
//   let ST = searchTerm.value.replaceAll(' ', '-')

  
//   var amazRes = document.getElementById("amazon");
//   amazRes.innerHTML = amazonUpdater(ST.value);
//   return amazonUpdater(ST.value)

// }
// function eBaysearch() {
//   //console.log("Button Test");
//   linkResetter();
//   var searchTerm = document.getElementById("searchBar");
//   //console.log(searchTerm);
//   let ST = searchTerm.value.replaceAll(' ', '-')

  
//   var ebayRes = document.getElementById("ebay");
//   ebayRes.innerHTML = ebayUpdater(ST.value);
//   return ebayUpdater(ST.value)
// }






//var nwl = document.getElementById("searchButton").onclick = walmartSearch;

 //document.getElementById("searchButton").onclick = search;
//document.addEventListener("SearchButton").onclick = location.href="result.html";
// fetch('https://www.walmart.com/ip/nutribullet-Smart-Touch-56-oz-Blender-1400-Watt-Black/263450738?athbdg=L1300',
//      meathod: 'POST'
//      body: { name: test})
//   .then(walres=> {if(walres.ok){
//     console.log('success')
//   }
//   else{
//       console.log('lmao fail')
//     }
//   })
//   .then(waldata => console.log(waldata))
//   .catch(walError => console.log(walError))

// const puppeteer = require('puppeteer')
// async function scrapeWalmart(url) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   page.goto(url);

//   const [image] = await page.$x('//*[@id="maincontent"]/main/div/div[2]/div/div/div[1]/div[1]/div/section/div/div[1]/div/div/a');
//   const src = await image.getProperty('src');
//   const imgURL = await src.jasonValue();


//   const[title] = await page.$x('//*[@id="maincontent"]/main/div/div[2]/div/div/div[1]/div[1]/div/section/div/div[1]/div/div/div/div[2]')
//   const src2 = await title.getProperty('src1');
//   const titleURL = await src2.jasonValue();
  
//   const[price] = await page.$x('//*[@id="maincontent"]/main/div/div[2]/div/div/div[1]/div[1]/div/section/div/div[1]/div/div/div/div[3]/div[1]/div/div[1]')
//   const src1 = await price.getProperty('src1');
//   const priceURL = await src1.jasonValue();

  

  
//   browser.close();
// }







