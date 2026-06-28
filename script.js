const $ = id => document.getElementById(id);

const boot = $("boot"),
      loading = $("loading"),
      story = $("story"),
      ending = $("ending");

const bootText = $("bootText"),
      loadingText = $("loadingText"),
      storyText = $("storyText"),
      progress = $("progressBar"),
      indicator = $("nextIndicator");

const startBtn = $("startBtn"),
      enterBtn = $("enterBtn");

const bootLines = [
"Booting Memory.exe",
"",
"Initializing ...",
"",
"Removing Nervous Feelings...",
"",
"WARNING!!!",
"",
"This Website Can Cause 'KILIG'",
"",
"Proceed Anyway?",
"",
];

const loadingSteps = [
["Scanning System...",8],
["Checking Confidence...",22],
["Deleting Overthinking...",36],
["Looking For Courage...",39],
["404 ERROR",45],
["Courage not found.",52],
["........",60],
["Checking Heartbeat...",72],
["Result : Hertbeat TOO FAST",82],
["Calming Down...",88],
["Please Wait...",92],
["Taking a deep breath...",97],
["HUUFFFTTTTT...",100],
["Ready!.",100]
];

const storyLines = [
"Hello, Ms Independent.",

"can i borrow\na few minutes\nof your time?",

"you know...\ni've been wondering\nfor quite a while\nwhether i should\ntell you this\nor keep it to myself.",

"i guess...\nthat's why\ni ended up\nmaking\nan entire website.",

"i wanted to\nsay it properly...\nbecause i didn't want\nsomething this important\nto get lost\nbetween our\nusual conversations.",

"somewhere\nalong the way...\nwithout me\neven realizing it...", 

"you quietly\nbecame someone\nvery special\nto me.",

"it wasn't\none big moment.",

"it was\nall the\nlittle things.",

"somewhere between...\n'stay hydrated.'\n'eat properly.'\n'text me when\nyou get home.'",

"and quietly\nhoping\nyou were finally\ngetting enough rest...", 

"i realized\ni wasn't doing\nthose things\nbecause i had to.",

"i was doing them...\nbecause\ni genuinely\nwanted to.",

"then...\ni caught myself\nthinking about you\nmore often\nthan i used to.",

"even on\nmy busiest days...\nyou'd randomly\ncross my mind.",

"i'd wonder...\nhow work\nwas treating you...", 

"whether\nyou'd eaten yet...", 

"or if\nyou were still\npushing yourself\ntoo hard.",

"and what\nsurprised me\nthe most...", 

"whenever\nI imagined\nmy future...", 

"building\na business...", 

"serving people...", 

"growing closer\nto God...", 

"you were\nsomehow\nalready there.",

"not because\ni was trying\nto put you there...", 

"you just...\nwere.",

"then...\nit finally\nmade sense.",

"i like you,\nJes.",

"not because\nyou're always\ncheerful.",

"not because\nyou always\nhave everything\nfigured out.",

"i like\nthe excited Jes.",

"the tired Jes.",

"the exhausted Jes.",

"every version of Jes.",

"even the Jes\nwho sometimes\nwonders\nif she's really\nworth all\nthis love.",

"those weren't\nthe parts\nthat pushed\nme away.",

"they were\nthe parts\nthat made me\nadmire you\neven more.",

"and...\nthere's one more\nthing i hope\nyou know.",

"you didn't\njust become\nsomeone\ni care about.",

"you also\nbecame someone\nwho quietly\nbrought me\ncloser to God.",

"i don't know\nif you ever\nrealized that...", 

"but i'll\nalways be\ngrateful\nfor it.",

"so...\ni just wanted\nto be honest.",

"i'm not\nasking you\nfor an answer\ntoday.",

"and i'm\nnot trying\nto put\nany pressure\non you.",

"i simply felt...\nif someone\nhad come\nto mean\nthis much\nto me...", 

"she deserved\nto know.",

"but if you're\ncomfortable\nsharing someday...", 

"i'd genuinely\nlove to know...", 

"whatever\nyour answer\nis...", 

"i'll\nrespect it\nwholeheartedly.",

"if you only\nsee me\nas a friend...", 

"or if\nyour heart\nalready belongs\nto someone else...", 

"i'll still\nbe grateful\nthat our paths\ncrossed.",

"i just...\ndidn't want\nhonesty\nto arrive\ntoo late.",

"thank you...\nfor pressing\nSTART. 🤍"

];


let storyIndex = 0;
let typing = false;

// ---------- TYPEWRITER ----------

function typeText(el,text,speed=35,done){
    typing = true;
    el.textContent = "";
    let i=0;

    const timer=setInterval(()=>{
        el.textContent += text[i];
        i++;

        if(i>=text.length){
            clearInterval(timer);
            typing=false;
            done && done();
        }

    },speed);
}

// ---------- BOOT ----------

function bootSequence(){

    let i=0;

    function next(){

        if(i>=bootLines.length){
            startBtn.classList.remove("hidden");
            return;
        }

        bootText.textContent += bootLines[i]+"\n";
        i++;

        setTimeout(next,500);

    }

    next();

}

bootSequence();

// ---------- START ----------

startBtn.onclick=()=>{

    boot.classList.remove("active");
    loading.classList.add("active");

    loadingSequence();

};

// ---------- LOADING ----------

function loadingSequence(){

    let i=0;

    function next(){

        if(i>=loadingSteps.length){

            enterBtn.classList.remove("hidden");
            return;

        }

        loadingText.textContent += loadingSteps[i][0]+"\n";

        progress.style.width=loadingSteps[i][1]+"%";

        i++;

        setTimeout(next,700);

    }

    next();

}

// ---------- ENTER ----------

enterBtn.onclick=()=>{

    loading.classList.add("fade-out");

    setTimeout(()=>{

        loading.classList.remove("active","fade-out");
        story.classList.add("active");

        showStory();

    },800);

};

// ---------- STORY ----------

function showStory(){

    indicator.classList.add("hidden");

    storyText.classList.remove("text-fade");
    void storyText.offsetWidth;
    storyText.classList.add("text-fade");

    typeText(storyText,storyLines[storyIndex],35,()=>{

        indicator.classList.remove("hidden");

    });

}

story.addEventListener("click",()=>{

    if(typing) return;

    if(storyIndex < storyLines.length-1){

        storyIndex++;
        showStory();

    }else{

        story.classList.remove("active");
        ending.classList.add("active");

    }

});
