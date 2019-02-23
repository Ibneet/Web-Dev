
var pics = [
    "https://i0.wp.com/www.success.com/wp-content/uploads/legacy/sites/default/files/8_12.jpg",
    "https://quotesnhumor.com/wp-content/uploads/2016/12/Top-30-Motivational-Quotes-about-Fitness-and-Work-out-1-Motivational-Quotes-Fitness-quotes.jpg",
    "https://i0.wp.com/www.success.com/wp-content/uploads/legacy/sites/default/files/13_16.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsiEyttl_XEV-qnGCZk8Rym-LkG18Mpwv4Rh2bwVwq802aHE4l",
    "https://i0.wp.com/jobloving.com/wp-content/uploads/2019/01/Work-Quotes-40-Positive-Quotes-About-Life-And-Encourage-Quotes-31.jpg?w=696",
]

var button = document.querySelector("button");
var img = document.querySelector("img");
var i = 1;

button.addEventListener("click", ()=>{
    if(i===5)
    {
        i = 0;
    }
    
    img.src = pics[i]; 
    i = i+1;
})