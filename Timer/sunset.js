var header = document.getElementById("Header");
var TimeText = document.getElementById("timetext");
var MusicButton = document.getElementById("MusicButton");
var sun = document.getElementById("Sun");

var isplaying = false;

var Sound = null;

MusicButton.onclick = PlaySong;


var Days = {
        1 : "Monday" ,
        2 : "Tuesday" ,
        3 : "Wednesday" ,
        4 : "Thursday" ,
        5 : "Friday" ,
        6 : "Saturday",
        0 : "Sunday"
}

var SongList = [
    "song1.mp3",
    "Song2.mp3"
]

function PlaySong() {

    if (isplaying == false) {
        isplaying = true;
    var songpicker = SongList[Math.floor(Math.random() * SongList.length)]

    Sound = new Audio(songpicker);





    Sound.play()


    Sound.onended = function() {
        isplaying = false;
    }



    }else {
        isplaying = false;
        Sound.pause()
    }
}




function updatetime() {
    let currentime = new Date();
    var Day = currentime.getDay();
    var hours = currentime.getHours();
    var minutes = currentime.getMinutes();
    var seconds = currentime.getSeconds();
    var indicator = "";





    if (hours >= 12 && hours <= 18) {
        header.textContent = "Good afternoon!"
                document.body.classList.remove("morning");
                document.body.classList.add("afternoon");

                            if (document.body.classList.contains("DayAnim")) {

                               document.body.classList.remove("DayAnim");
                                sun.classList.remove("DayAnim");
                                }


                document.body.classList.add("DayAnim");
                sun.classList.add("DayAnim");



                sun.style.background = "`linear-gradient(to top,yellow,orange,red)`;"


                indicator = "PM"

    }else if (hours >= 18 || (hours >= 0 && hours <= 6)) {
        header.textContent = "Good Night!"



    
       document.body.classList.remove("afternoon");
        document.body.classList.add("night");


                            if (document.body.classList.contains("DayAnim")) {

                               document.body.classList.remove("DayAnim");
                                sun.classList.remove("DayAnim");
                                }



        document.body.classList.add("DayAnim");
        sun.classList.add("DayAnim");







        sun.style.background = "linear-gradient(to top,white,purple)";

        if (hours >=18) {
            indicator = "PM"
        }else {
            indicator = "AM"
        }


    }
    else {
            document.body.classList.remove("night");

            header.textContent = "Good Morning!"
            document.body.classList.add("morning");


                    if (document.body.classList.contains("DayAnim")) {

                               document.body.classList.remove("DayAnim");
                                                               sun.classList.remove("DayAnim");
                                }


            document.body.classList.add("DayAnim");
            sun.classList.add("DayAnim");



            sun.style.background = "linear-gradient(to top,orange,yellow)";
            indicator = "AM"
    }



        TimeText.textContent = Days[Day] + ",  " + hours + ":" + minutes + ":" + seconds + ":" + indicator;
}


setInterval(updatetime,1000)

updatetime()