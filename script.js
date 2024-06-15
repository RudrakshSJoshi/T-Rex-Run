const dino = document.querySelector("#dino");
const world = document.querySelector("#world");
const obstacleJ1 = document.querySelector("#obstacleJ1");
const obstacleJ2 = document.querySelector("#obstacleJ2");
const obstacleJ3 = document.querySelector("#obstacleJ3");
const obstacleJ4 = document.querySelector("#obstacleJ4");
const obstacleC1 = document.querySelector("#obstacleC1");
const obstacleC2 = document.querySelector("#obstacleC2");
const obstacleC3 = document.querySelector("#obstacleC3");
const obstacleC4 = document.querySelector("#obstacleC4");
const obstacleS1 = document.querySelector("#obstacleS1");
const obstacleS2 = document.querySelector("#obstacleS2");
const obstacleS3 = document.querySelector("#obstacleS3");
const obstacleS4 = document.querySelector("#obstacleS4");
const background = document.querySelector("#background");
const gameover = document.querySelector("#gameover");
const deadscreen = document.querySelector("#deadscreen");
const restart = document.querySelector("#restart");
const cloud1 = document.querySelector("#cloud1");
const cloud2 = document.querySelector("#cloud2");
const game = document.querySelector("#game");
const startscreen = document.querySelector("#startscreen");
const road_border = document.querySelector("#road_border");
const ground = document.querySelector("#ground");
const highscore = document.querySelector("#highscore");
const transition = document.querySelector("#transition");
const score = document.getElementById("score");
const nxt = document.getElementById("nxt");
var scores = 0;
var SCORE;
var time = 0;
var Index;
var level = 1;
var speedTime = 2;
var par = 0;
var Spar = 0;
var highscores = 0;

function start() {
    if(startscreen.classList !="hideDisplay") {
        HighScore();
        bgmMainAud.play();
        SecParameter();
        setTimeout(() => {
            chatbox.classList.remove("hideDisplay");
            description1.classList.remove("hideDisplay");
            description2.classList.remove("hideDisplay");
        setTimeout(() => {
            description1.classList.add("hideDisplay");
            description2.classList.add("hideDisplay");
            chatbox.classList.add("hideDisplay");
        }, 1500);
    }, 1500);
        setTimeout(() => {
            cat.classList.add("hideDisplay");
            setInterval(function() {
            RandomSpawn();
            }, speedTime * 1010);
        }, 6000);
        setInterval(() => {
            AnmDur();
        }, 10);
        Time();
        parameter();
        SpeedUp();
    setTimeout(() => {
        lvl.classList.remove("hideDisplay");
        nxt.classList.remove("hideDisplay");
    }, 4000);
    setTimeout(() => {
        lvl.classList.add("hideDisplay");
        nxt.classList.add("hideDisplay");
    }, 5000);
        var UpdateLvl = setInterval(Level, 30000);
        startscreen.classList.add("hideDisplay");
        dino.classList.remove("animationIdle");
        dino.classList.add("animationRun");
        background.classList.add("backgroundMvt");
        cloud1.classList.add("cloud1Mvt");
        cloud2.classList.add("cloud2Mvt");
        /*dog.classList.remove("dogIdle");
        dog.classList.add("dogRun");*/
    setTimeout(function() {
        transition.classList.remove("hideDisplay");
        transition.classList.add("trAnimate");
    setInterval(() => {
            transition.classList.remove("hideDisplay");
            transition.classList.add("trAnimate");
    setTimeout(() => {
            transition.classList.add("hideDisplay");
            transition.classList.remove("trAnimate");
        }, 1500);
    }, 30000);
}, 29500);
    setInterval(() => {
        lvl.classList.remove("hideDisplay");
        nxt.classList.remove("hideDisplay");
    setTimeout(() => {
        lvl.classList.add("hideDisplay");
        nxt.classList.add("hideDisplay");
    }, 500);
    }, 30000);
    setTimeout(() => {
        transition.classList.add("hideDisplay");
        transition.classList.remove("trAnimate");
    }, 31000);
    setTimeout(() => {
        ground.classList.add("walkOver");
    }, 400);
    setTimeout(() => {
        var SCORE = setInterval(ScoreUpdate, 50);
    }, 400);
}
}


bgmEndAud.volume = 0.2;
bgmMainAud.volume = 0.2;
document.getElementById("bgmMainAud").loop = true;

const OBSTACLEJ = [obstacleJ1, obstacleJ2, obstacleJ3, obstacleJ4];
const OBSTACLEC = [obstacleC1, obstacleC2, obstacleC3, obstacleC4];
const OBSTACLES = [obstacleS1, obstacleS2, obstacleS3, obstacleS4];

function RandomSpawn() {
    var obsJ = OBSTACLEJ[Math.floor(Math.random()*4)];
    var obsC = OBSTACLEC[Math.floor(Math.random()*4)];
    var obsS = OBSTACLES[Math.floor(Math.random()*4)];

    if(time > (26 + 30*par) && time < (32 + 30*par)) {
    }
    else if((time > 2 + 300*Spar && time < 26 + 300*Spar)
                || (time > 32 + 300*Spar && time < 56 + 300*Spar)
                || (time > 62 + 300*Spar && time < 86 + 300*Spar)) {
        obsJ.classList.add("approach");
        obsJ.classList.remove("hideDisplay");
    setTimeout(() => {
        obsJ.classList.remove("approach");
        obsJ.classList.add("hideDisplay");
    }, speedTime*990);
}
    else if((time > 92 + 300*Spar && time < 116 + 300*Spar)
            || (time > 122 + 300*Spar && time < 146 + 300*Spar)) {
        obsC.classList.add("approach");
        obsC.classList.remove("hideDisplay");
    setTimeout(() => {
        obsC.classList.remove("approach");
        obsC.classList.add("hideDisplay");
    }, speedTime*990);
    }

    else if ((time > 152 + 300*Spar && time < 176 + 300*Spar)
            || (time > 182 + 300*Spar && time < 206 + 300*Spar)
            || (time > 212 + 300*Spar && time < 236 + 300*Spar)) {
        obsS.classList.add("approach");
        obsS.classList.remove("hideDisplay");
    setTimeout(() => {
        obsS.classList.remove("approach");
        obsS.classList.add("hideDisplay");
    }, speedTime*990);
            }

    else if ((time > 242 + 300*Spar && time < 266 + 300*Spar)
            || (time > 272 + 300*Spar && time < 296 + 300*Spar)) {
        obsC.classList.add("approach");
        obsC.classList.remove("hideDisplay");
    setTimeout(() => {
        obsC.classList.remove("approach");
        obsC.classList.add("hideDisplay");
    }, speedTime*990);
            }
            
    else {

    }
}

function SpeedUp() {
    setInterval(() => {
    if(time > (28 + 30*par) && time < (32 + 30*par)) {
            if(speedTime > 0.8) {
            speedTime = speedTime - 0.12;
            }
            else {
                speedTime = 0.8
            }
    }
}, 2000);
}

function AnmDur() {
    setInterval(() => {
    document.getElementById("obstacleJ1").style.animationDuration = speedTime + "s";
    document.getElementById("obstacleJ2").style.animationDuration = speedTime + "s";
    document.getElementById("obstacleJ3").style.animationDuration = speedTime + "s";
    document.getElementById("obstacleJ4").style.animationDuration = speedTime + "s";
    document.getElementById("obstacleC1").style.animationDuration = speedTime + "s";
    document.getElementById("obstacleC2").style.animationDuration = speedTime + "s";
    document.getElementById("obstacleC3").style.animationDuration = speedTime + "s";
    document.getElementById("obstacleC4").style.animationDuration = speedTime + "s";
    document.getElementById("obstacleS1").style.animationDuration = speedTime + "s";
    document.getElementById("obstacleS2").style.animationDuration = speedTime + "s";
    document.getElementById("obstacleS3").style.animationDuration = speedTime + "s";
    document.getElementById("obstacleS4").style.animationDuration = speedTime + "s";
    }, 1000)
  }


function parameter() {
    setTimeout(() => {
        setInterval(() => {
            par = par + 1;
        }, 30000);
    }, 24000);
}

function SecParameter() {
        setInterval(() => {
            Spar = Spar + 1;
        }, 300000);
}

function Time() {
    setInterval(() => {
        time=time+1
    }, 1000);
}

function Level() {
    level+=1;
    nxt.innerHTML = level;
}


function ScoreUpdate() {
    if(gameover.classList !="hideDisplay") {
        clearInterval(SCORE);
        score.innerHTML = "Score: " + scores;
    }
    else {
        scores+=1;
        score.innerHTML = "Score: " + scores;
    }
    }

function jump() {
    jumpSound.volume = 0.1;
    if(time > 5) {
    if(dino.classList !="animationJump" && dino.classList !="animationLongJump" && gameover.classList =="hideDisplay") {
        jumpSound.play();
        dino.classList.remove("animationRun");
        dino.classList.add("animationJump");
    setTimeout(function() {
        dino.classList.remove("animationJump");
        dino.classList.add("animationRun");
}, 500);
    }
}
};


function longjump() {
    if(time > 5) {
        jumpSound.volume = 0.1;
    if(dino.classList !="animationJump" && dino.classList !="animationLongJump" && gameover.classList =="hideDisplay") {
        jumpSound.play();
        dino.classList.remove("animationRun");
        dino.classList.add("animationLongJump");
    setTimeout(function() {
        dino.classList.remove("animationLongJump");
        dino.classList.add("animationRun");
}, 750);
    }
}
};


let CollisonSetup = setInterval(function () {

    let DBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));

    let OJ1Left = parseInt(window.getComputedStyle(obstacleJ1).getPropertyValue('left'));
    let OJ2Left = parseInt(window.getComputedStyle(obstacleJ2).getPropertyValue('left'));
    let OJ3Left = parseInt(window.getComputedStyle(obstacleJ3).getPropertyValue('left'));
    let OJ4Left = parseInt(window.getComputedStyle(obstacleJ4).getPropertyValue('left'));

    let OC1Left = parseInt(window.getComputedStyle(obstacleC1).getPropertyValue('left'));
    let OC2Left = parseInt(window.getComputedStyle(obstacleC2).getPropertyValue('left'));
    let OC3Left = parseInt(window.getComputedStyle(obstacleC3).getPropertyValue('left'));
    let OC4Left = parseInt(window.getComputedStyle(obstacleC4).getPropertyValue('left'));

    let OS1Left = parseInt(window.getComputedStyle(obstacleS1).getPropertyValue('left'));
    let OS2Left = parseInt(window.getComputedStyle(obstacleS2).getPropertyValue('left'));
    let OS3Left = parseInt(window.getComputedStyle(obstacleS3).getPropertyValue('left'));
    let OS4Left = parseInt(window.getComputedStyle(obstacleS4).getPropertyValue('left'));

if((OJ1Left>110 && OJ1Left<150 && DBottom<=97) 
    || (OJ2Left>130 && OJ2Left<150 && DBottom<=97) 
    || (OJ3Left>105 && OJ3Left<130 && DBottom<=200) 
    || (OJ4Left>115 && OJ4Left<140 && DBottom<=200)
    || (OC1Left>120 && OC1Left<150 && DBottom<=97) 
    || (OC2Left>135 && OC2Left<160 && DBottom<=97) 
    || (OC3Left>120 && OC3Left<150 && DBottom<=200) 
    || (OC4Left>125 && OC4Left<160 && DBottom<=200)
    || (OS1Left>120 && OS1Left<150 && DBottom<=97) 
    || (OS2Left>135 && OS2Left<150 && DBottom<=97) 
    || (OS3Left>140 && OS3Left<170 && DBottom<=200) 
    || (OS4Left>122 && OS4Left<157 && DBottom<=200)) {
        bgmMainAud.pause();
        bgmEndAud.play();
        gameover.classList.add("deadTr");
        gameover.classList.remove("hideDisplay");
        deadscreen.classList.add("deadTr");
        deadscreen.classList.remove("hideDisplay");
        SaveHighScore();
        setTimeout(() => {
            console.log(sessionStorage.getItem("HIGHSCORE"));
            restart.classList.remove("hideDisplay");
        }, 1000);
};
}, 1);

var NAME = sessionStorage.getItem("username");
username.innerHTML = NAME;

function HighScore() {
    highscores = sessionStorage.getItem("HIGHSCORE");
    if (highscores === null || highscores === undefined) {
        highscores = 0; // Set highscores to 0 if it's null or undefined
    }
    setInterval(() => {
        if(highscores < scores) {
            highscores = scores;
        }
        else {
        }
    highscore.innerHTML = "HIGH SCORE:" + highscores;
    }, 50);
}

function SaveHighScore() {
    var HIGHSCORE = sessionStorage.getItem("HIGHSCORE");
    if(highscores > HIGHSCORE) {
    sessionStorage.removeItem("HIGHSCORE");
    setTimeout(() => {
    sessionStorage.setItem("HIGHSCORE", highscores);
    }, 10);
    }
}


document.addEventListener("keypress", function (event) {
    var name = event.key;
    var code = event.code;
    //console.log(code);
    if(code == 'Space') {
        jump();
    }
    else if (code == 'Enter') {
        longjump();
    }
    else if (code == 'KeyR' && restart.classList !="hideDisplay") {
        this.location = this.location
    }
    start();
});


