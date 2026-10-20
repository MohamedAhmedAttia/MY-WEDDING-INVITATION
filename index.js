let coades = ["1a","2b","3c","4d","5e","6f","7g","8h","9i","10j","11k","12l","13m","14n","15o","16p","17q","18r","19s","20t","21u","22v","23w","24x","25y","26z","27aa","28ab","29ac","30ad","31ae","32af","33ag","34ah","35ai","36aj","37ak","38al","39am","40an","41ao","42ap","43aq","44ar","45as","46at","47au","48av","49aw","50ax","51ay","52az","53ba","54bb","55bc","56bd","57be","58bf","59bg","60bh","61bi","62bj","63bk","64bl","65bm","66bn","67bo","68bp","69bq","70br","71bs","72bt","73bu","74bv","75bw","76bx","77by","78bz","79ca","80cb","81cc","82cd","83ce","84cf","85cg","86ch","87ci","88cj","89ck","90cl","91cm","92cn","93co","94cp","95cq","96cr","97cs"];
let pepole = ["Amir","Zeiny","Essam","Adel","Zaatar & Wafaa","Abdullah & Menna","Karim","Adnan ","Basma","Sohaib","Abdo","Mr. Tamer","Mr. Ahmed","Ms. Dalia","Madame Samar","Fairouz","Heba","Sara","Mai","Gabr","Kareem","Aya","Nermein","Hesham","Radwa","Amira","Ahmed","Mohsen","Dina","Tarek","Amr","Samar","Nourhan","Mostafa","Tharwat","Nour","Diaa","Mostafa","Mirna","Rock Eldoc & Nada","Salamander & Nada","Maha & Hazem","Khlood","Ahmed & Rania","Lara","Tala","Wessam","Youssef","Dara","Mostafa & Marwa","Maiada & Mohamed","Mohab","Amira & Omar","Aml","Menna","Amerah","Toka & Ali","Amera","Nada & Ali","Amira Gamal","Mai Gamal","Omina","Aya","Rahma","Dina ","Sara & Lara","Radwa Elmahdy","Sara Elmahdy","Donia","Mayada","Amira Amasha","Tayseer","Hala","Jwairya","Khalid","Manar Essam","Yousra","Jomana","Bosi","Fatma","Abeer","Hussein","Bessa","Hosna","Nagwa","Sanaa","Amir","Tarek","Islam","Hussein","Yuossef","Hossam","Kareem","Ahmed Abdelnaser","Ali","Nora", "Mariam"];

const overlay = document.getElementById("overlay");
const codeInput = document.getElementById("codeInput");
const enterBtn = document.getElementById("enterBtn");
const container = document.getElementById("container");
const result = document.getElementById("result");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const invitation = document.getElementById("invitation");
const invitationCard = document.getElementById("invitationCard");
const weddingMarch = document.getElementById("weddingMarch");
const countdown = document.getElementById("countdown");
const countdownDone = document.getElementById("countdownDone");
const cdDaysUnit = document.getElementById("cdDaysUnit");
const cdHoursUnit = document.getElementById("cdHoursUnit");
const cdMinutesUnit = document.getElementById("cdMinutesUnit");
const cdSecondsUnit = document.getElementById("cdSecondsUnit");
const cdDaysValue = document.getElementById("cdDaysValue");
const cdHoursValue = document.getElementById("cdHoursValue");
const cdMinutesValue = document.getElementById("cdMinutesValue");
const cdSecondsValue = document.getElementById("cdSecondsValue");
const cdSep1 = document.getElementById("cdSep1");
const cdSep2 = document.getElementById("cdSep2");
const cdSep3 = document.getElementById("cdSep3");

function submitCode() {
    let value = codeInput.value.trim().toLowerCase();
    let found = false;
    let guestIndex = -1;

    // Check if code exists
    for (let i = 0; i < coades.length; i++) {
        if (value === coades[i].toLowerCase()) {
            found = true;
            guestIndex = i;
            break;
        }
    }

    overlay.classList.add("hide");
    container.classList.remove("hidden");

    if (!found) {
        result.textContent = "you are not invited";
        result.classList.add("show");
        second.style.display = "none";
        third.style.display = "none";
        fourth.style.display = "none";
        invitation.style.display = "none";
    } else {
        result.textContent = "Hi " + pepole[guestIndex];

        // Sequence animations
        setTimeout(() => {
            result.classList.add("show");
        }, 100);

        setTimeout(() => {
            result.classList.remove("show");
            result.classList.add("hide");

            weddingMarch.currentTime = 0;
            weddingMarch.play().catch(() => {});
        }, 3000);

        setTimeout(() => {
            second.classList.add("show");
        }, 4500);

        setTimeout(() => {
            second.classList.remove("show");
            second.classList.add("hide");
        }, 7500);

        setTimeout(() => {
            third.classList.add("show");
        }, 9000);

        setTimeout(() => {
            third.classList.remove("show");
            third.classList.add("hide");
        }, 12000);

        setTimeout(() => {
            fourth.classList.add("show");
        }, 13500);

        setTimeout(() => {
            fourth.classList.remove("show");
            fourth.classList.add("hide");
        }, 16500);

        setTimeout(() => {
            invitation.classList.add("show");
        }, 18000);
    }
}

enterBtn.addEventListener("click", submitCode);

codeInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        submitCode();
    }
});

// Target Date: December 25th, 2026, 5:30 PM Cairo time (UTC+2)
const WEDDING_TARGET_UTC = Date.UTC(2026, 11, 25, 15, 30, 0);
let countdownTimer = null;

function pad(n) {
    return String(n).padStart(2, "0");
}

function updateCountdown() {
    const diff = WEDDING_TARGET_UTC - Date.now();

    if (diff <= 0) {
        invitation.classList.add("time-up");
        revealSmoothly(countdownDone);
        if (countdownTimer) {
            clearInterval(countdownTimer);
            countdownTimer = null;
        }
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    cdDaysValue.textContent = pad(days);
    cdHoursValue.textContent = pad(hours);
    cdMinutesValue.textContent = pad(minutes);
    cdSecondsValue.textContent = pad(seconds);

    const hideDays = days === 0;
    const hideHours = hideDays && hours === 0;
    const hideMinutes = hideHours && minutes === 0;

    cdDaysUnit.classList.toggle("hidden-unit", hideDays);
    cdSep1.classList.toggle("hidden-unit", hideDays);
    cdHoursUnit.classList.toggle("hidden-unit", hideHours);
    cdSep2.classList.toggle("hidden-unit", hideHours);
    cdMinutesUnit.classList.toggle("hidden-unit", hideMinutes);
    cdSep3.classList.toggle("hidden-unit", hideMinutes);
}

function startCountdown() {
    updateCountdown();
    if (!countdownTimer) {
        countdownTimer = setInterval(updateCountdown, 1000);
    }
}

function revealSmoothly(el) {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            el.classList.add("countdown-visible");
        });
    });
}

// Flip invitation card and show countdown timer
invitationCard.addEventListener("click", () => {
    if (!invitation.classList.contains("show") || invitation.classList.contains("opened")) {
        return;
    }
    invitation.classList.add("opened");
    revealSmoothly(countdown);
    startCountdown();
});

// Focus code input on page load
codeInput.focus();