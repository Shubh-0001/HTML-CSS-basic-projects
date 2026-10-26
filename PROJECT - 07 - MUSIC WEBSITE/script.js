const audio = document.querySelector(".audio");

const songs = [
    {
        name: "Billie Jean",
        artist: "Michael Jackson",
        src: "songs/billi_jean.mp3",
        image: "images/billi_jean.jpg",
    },
    {
        name: "Attention",
        artist: "Charlie Puth",
        src: "songs/attention.mp3",
        image: "images/attention.jpg",
    },
    {
        name: "Montero",
        artist: "Lil Nas X",
        src: "songs/montero.mp3",
        image: "images/montero.jpg",
    },
    {
        name: "Solo",
        artist: "Clean Bandit",
        src: "songs/solo.mp3",
        image: "images/solo.jpg",
    },
    {
        name: "Say My Name",
        artist: "David Guetta",
        src: "songs/say_my_name.mp3",
        image: "images/say_my_name.jpg",
    },
    {
        name: "Lust Life",
        artist: "Zara Larsson",
        src: "songs/lush_life.mp3",
        image: "images/lush_life.jpg",
    },
    {
        name: "Starboy",
        artist: "The Weekend",
        src: "songs/starboy.mp3",
        image: "images/starboy.jpg",
    },
    {
        name: "My Ordinary Life",
        artist: "The Living Tombstone",
        src: "songs/ordinary_life.mp3",
        image: "images/ordinary_life.jpg",
    },
    {
        name: "Judas",
        artist: "Lady Gaga",
        src: "songs/judas.mp3",
        image: "images/judas.jpg",
    },
    {
        name: "Levitating",
        artist: "Dua Lipa",
        src: "songs/levitating.mp3",
        image: "images/levitating.jpg",
    },
    {
        name: "No Lie",
        artist: "Dua Lipa",
        src: "songs/no_lie.mp3",
        image: "images/no_lie.jpg",
    },
    {
        name: "Borderline",
        artist: "Tame Impala",
        src: "songs/borderline.mp3",
        image: "images/borderline.jpg",
    },
    {
        name: "Love Me Not",
        artist: "Ravyn Lenae",
        src: "songs/love_me_not.mp3",
        image: "images/love_me_not.jpg",
    },                                
];
const defaultimage = "images/default.jpg";

let i = 0;
let n = songs.length;

audio.src = songs[i].src;

const play = document.querySelector(".play");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const pause = document.querySelector(".pause");
const song_name = document.querySelector(".song-name");
const song_author = document.querySelector(".song-author");
const progress_fill = document.querySelector(".progress_fill");
const progress_bar = document.querySelector(".progress_bar");
const background_img = document.querySelector(".background_img");
const skip_5 = document.querySelector(".skip_5");
const undo_5 = document.querySelector(".undo_5");
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const close_sidebar = document.querySelector(".close-sidebar");
const song_list = document.querySelector(".song-list");

song_name.textContent = songs[i].name;
song_author.textContent = songs[i].artist;
change_background_img();

function playsong(){
    audio.play();
    play.hidden = true;
    pause.hidden = false;
    change_background_img();
};

function playnext(){
        i++;
    if(i>=n)i=0;
    audio.src = songs[i].src;
    playsong();
    song_name.textContent = songs[i].name;
song_author.textContent = songs[i].artist;
change_background_img();
};

function playprev(){
        i--;
    if(i<0)i=n-1;
    audio.src = songs[i].src;
    playsong();
    song_name.textContent = songs[i].name;
song_author.textContent = songs[i].artist;
change_background_img();
};

function pausesong(){
        audio.pause();
    play.hidden=false;
    pause.hidden=true;
};

function update_progress(){
    const percent = (audio.currentTime/audio.duration) *100;
    progress_fill.style.width = percent + "%";
    if(percent==100)playnext();
};

function seek_song(event) {
    const percent = event.offsetX / progress_bar.offsetWidth;
    audio.currentTime = percent * audio.duration;
};

function change_background_img(){
    background_img.style.backgroundImage =
    `url(${songs[i].image || defaultimage})`;
};

function open_sidebar(){
    sidebar.classList.add("active");
    menu.hidden = true;
}

function close_side(){
    sidebar.classList.remove("active");
    menu.hidden = false;
}

play.addEventListener("click" ,playsong);

next.addEventListener("click" , playnext);

prev.addEventListener("click" , playprev);

pause.addEventListener("click" , pausesong);

audio.addEventListener("timeupdate" , update_progress);

progress_bar.addEventListener("click" , seek_song);

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault();

        if (pause.hidden === true)
            playsong();
        else
            pausesong();
    }

    if (event.code === "ArrowRight") {
        playnext();
    }

    if (event.code === "ArrowLeft") {
        playprev();
    }
});

skip_5.addEventListener("click" , ()=>{
    audio.currentTime+=10;
})
undo_5.addEventListener("click" , ()=>{
    audio.currentTime-=10;
})

menu.addEventListener("click" , open_sidebar);
close_sidebar.addEventListener("click" , close_side);


songs.forEach((song , index)=>{
    const tile = document.createElement("div");

    tile.classList.add("song-tile");

    tile.innerHTML = `
        <img src="${song.image || defaultimage}">
        <div>
            <p>${song.name}</p>
            <span>${song.artist}</span>
        </div>
    `;
    song_list.appendChild(tile);

        tile.addEventListener("click", () => {
        i = index;
        audio.src = songs[i].src;
        playsong();

        song_name.textContent = songs[i].name;
        song_author.textContent = songs[i].artist;
        change_background_img();
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key >= "0" && event.key <= "9") {
        const num = Number(event.key);

        audio.currentTime = (num / 10) * audio.duration;
    }
});

audio.addEventListener("play", () => {
    play.hidden = true;
    pause.hidden = false;
});

audio.addEventListener("pause", () => {
    play.hidden = false;
    pause.hidden = true;
});