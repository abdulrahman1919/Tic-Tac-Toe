let playersign = true;
let btns = document.querySelectorAll(".gamebtns");
let restbtn = document.querySelector(".restbtn");
let showinner = document.querySelector(".showinner");
let showinnerwords = document.querySelector(".showinnerwords");
let newgamebtn = document.querySelector(".newgamebtn");
let startgamebtn = document.querySelector(".startgamebtn");
let firstcomeinterface = document.querySelector(".firstcomeinterface");
let patterns = [
    [ 0, 1, 2 ],
    [ 0, 3, 6 ],
    [ 0, 4, 8 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 2, 4, 6 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ]
]
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (playersign) {
            btn.innerText = "O";
            btn.style.color = "tomato";
            playersign = false;
        } else {
            playersign = true;
            btn.innerText = "X";
            btn.style.color = "blue";
        }
        btn.disabled = true;
        winner()
    });
});
const winner = () => {
    for (let pattern of patterns) {
        let position1 = btns[ pattern[ 0 ] ].innerText;
        let position2 = btns[ pattern[ 1 ] ].innerText;
        let position3 = btns[ pattern[ 2 ] ].innerText;
        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 == position2 && position2 == position3) {
                showinnerwords.innerText = "Winner is " + position1;
                showinner.classList.remove("hide");
                btns.forEach((btn) => {
                    btn.disabled = true;
                })
            };
        }
    }
}
restbtn.addEventListener("click", () => {
    btns.forEach(btn => {
        btn.disabled = false;
        btn.innerText = "";
    });
});
newgamebtn.addEventListener("click", () => {
    btns.forEach(btn => {
        btn.disabled = false;
        btn.innerText = "";
        showinner.classList.add("hide");
    });
});
startgamebtn.addEventListener("click", () => {
    firstcomeinterface.style.display = "none";
});
