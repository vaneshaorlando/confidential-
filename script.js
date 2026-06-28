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
"Removing Nervous...",
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

"Can I borrow\na few minutes\nof your time?",

"You know...\nI've been wondering\nfor quite a while\nwhether I should\ntell you this\nor keep it to myself.",

"I guess...\nthat's why\nI ended up\nmaking\nan entire website.",

"I wanted to\nsay it properly...\nbecause I didn't want\nsomething this important\nto get lost\nbetween our\nusual conversations.",

"Somewhere\nalong the way...\nwithout me\neven realizing it...", 

"you quietly\nbecame someone\nvery special\nto me.",

"It wasn't\none big moment.",

"It was\nall the\nlittle things.",

"Somewhere between...\n'Stay hydrated.'\n'Eat properly.'\n'Text me when\nyou get home.'",

"and quietly\nhoping\nyou were finally\ngetting enough rest...", 

"I realized\nI wasn't doing\nthose things\nbecause I had to.",

"I was doing them...\nbecause\nI genuinely\nwanted to.",

"Then...\nI caught myself\nthinking about you\nmore often\nthan I used to.",

"Even on\nmy busiest days...\nyou'd randomly\ncross my mind.",

"I'd wonder...\nhow work\nwas treating you...", 

"whether\nyou'd eaten yet...", 

"or if\nyou were still\npushing yourself\ntoo hard.",

"And what\nsurprised me\nthe most...", 

"whenever\nI imagined\nmy future...", 

"building\na business...", 

"serving people...", 

"growing closer\nto God...", 

"you were\nsomehow\nalready there.",

"Not because\nI was trying\nto put you there...", 

"you just...\nwere.",

"Then...\nit finally\nmade sense.",

"I like you,\nJes.",

"Not because\nyou're always\ncheerful.",

"Not because\nyou always\nhave everything\nfigured out.",

"I like\nthe excited Jes.",

"The tired Jes.",

"The exhausted Jes.",

"The overworked Jes.",

"Even the Jes\nwho sometimes\nwonders\nif she's really\nworth all\nthis love.",

"Those weren't\nthe parts\nthat pushed\nme away.",

"They were\nthe parts\nthat made me\nadmire you\neven more.",

"And...\nthere's one more\nthing I hope\nyou know.",

"You didn't\njust become\nsomeone\nI care about.",

"You also\nbecame someone\nwho quietly\nbrought me\ncloser to God.",

"I don't know\nif you ever\nrealized that...", 

"but I'll\nalways be\ngrateful\nfor it.",

"So...\nI just wanted\nto be honest.",

"I like you,\nJes...",

"I'm not\nasking you\nfor an answer\ntoday.",

"And I'm\nnot trying\nto put\nany pressure\non you.",

"I simply felt...\nif someone\nhad come\nto mean\nthis much\nto me...", 

"she deserved\nto know.",

"If you're\ncomfortable\nsharing someday...", 

"I'd genuinely\nlove to know...", 

"How do\nyou see us?",

"Have I\nsimply been\na friend...", 

"or did\nI ever have\na small chance\nto be\nsomething more?",

"Whatever\nyour answer\nis...", 

"I'll\nrespect it\nwholeheartedly.",

"If you only\nsee me\nas a friend...", 

"or if\nyour heart\nalready belongs\nto someone else...", 

"I'll still\nbe grateful\nthat our paths\ncrossed.",

"I just...\ndidn't want\nhonesty\nto arrive\ntoo late.",

"Thank you...\nfor pressing\nSTART. 🤍"

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