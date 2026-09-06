/* =========================================
   EL FILIBUSTERISMO
   JAVASCRIPT
========================================= */


/* =========================================
   CHARACTER DATA
========================================= */

const characters = [

    {
        name: "Simoun / Crisóstomo Ibarra",

        role:
            "Pangunahing tauhan; dating Crisóstomo Ibarra na nagbalik bilang Simoun.",

        traits:
            "Matalino, maparaan, mapaghiganti at determinado.",

        goals:
            "Nais gamitin ang kaniyang impluwensiya upang maisakatuparan ang kaniyang lihim na plano.",

        relations:
            "May ugnayan sa mga tauhan mula sa Noli Me Tangere at sa mga makapangyarihang tao.",

        idea:
            "Paghihiganti, radikal na pagbabago at tunggalian ng reporma at karahasan."
    },


    {
        name: "Basilio",

        role:
            "Kabataang nag-aaral ng medisina.",

        traits:
            "Masikap, matalino at hinubog ng mahihirap na karanasan.",

        goals:
            "Makapagtapos at magkaroon ng mas maayos na kinabukasan.",

        relations:
            "May mahalagang ugnayan kay Juli at sa nakaraan ni Simoun.",

        idea:
            "Kabataan, edukasyon at epekto ng mapaniil na lipunan."
    },


    {
        name: "Isagani",

        role:
            "Makata at estudyanteng nakikilahok sa mga usaping pang-edukasyon.",

        traits:
            "Idealistiko, marubdob at handang manindigan.",

        goals:
            "Isulong ang kaniyang mga mithiin para sa edukasyon at lipunan.",

        relations:
            "May mahalagang ugnayan kay Paulita Gómez at sa mga estudyante.",

        idea:
            "Idealismo, kabataan at pag-asa sa edukasyon."
    },


    {
        name: "Kabesang Tales",

        role:
            "Magsasakang nakaranas ng matinding suliranin sa lupa at kapangyarihan.",

        traits:
            "Masipag, mapagmahal sa pamilya at kalaunan ay naghimagsik.",

        goals:
            "Ipagtanggol ang kaniyang kabuhayan, pamilya at karapatan.",

        relations:
            "Ama ni Juli.",

        idea:
            "Kawalan ng katarungan, lupa, pang-aapi at radikalisasyon."
    },


    {
        name: "Juli",

        role:
            "Anak ni Kabesang Tales.",

        traits:
            "Mapagmahal, mapagtiis at nakatuon sa pamilya.",

        goals:
            "Tulungan ang pamilya at harapin ang mga pagsubok.",

        relations:
            "Anak ni Kabesang Tales at may ugnayan kay Basilio.",

        idea:
            "Kahinaan ng karaniwang tao sa harap ng kapangyarihan."
    },


    {
        name: "Paulita Gómez",

        role:
            "Dalagang kabilang sa mundo ng mga maykayang tauhan.",

        traits:
            "Sensitibo sa mga inaasahan ng kaniyang lipunan.",

        goals:
            "Nais ng seguridad at magandang kinabukasan.",

        relations:
            "May romantikong ugnayan kay Isagani at kaugnayan kay Juanito Pelaez.",

        idea:
            "Pag-ibig, uri ng lipunan at mga limitasyong panlipunan."
    },


    {
        name: "Padre Florentino",

        role:
            "Paring may mahalagang papel sa mga huling bahagi ng nobela.",

        traits:
            "Mapagnilay, matatag at may pagpapahalaga sa moral na pananagutan.",

        goals:
            "Kumilos ayon sa kaniyang konsensiya.",

        relations:
            "May mahalagang ugnayan kay Isagani.",

        idea:
            "Konsensiya, pananagutan at pag-unawa sa pagbabago."
    },


    {
        name: "Ben Zayb",

        role:
            "Manunulat na may malaking presensiya sa mundo ng balita.",

        traits:
            "Palagay sa sarili at madaling magbigay ng sariling bersiyon.",

        goals:
            "Maging mahalaga sa pamamahayag.",

        relations:
            "Nakikisalamuha sa maraming tauhan.",

        idea:
            "Pamamahayag, opinyon at pagkiling."
    },


    {
        name: "Don Custodio",

        role:
            "Opisyal na kasangkot sa mga usaping pampamahalaan at pang-edukasyon.",

        traits:
            "Burukratiko at sensitibo sa impluwensiya.",

        goals:
            "Panatilihin ang kaniyang katayuan.",

        relations:
            "May kaugnayan sa mga estudyante.",

        idea:
            "Burukrasya, kapangyarihan at pansariling interes."
    },


    {
        name: "Placido Penitente",

        role:
            "Estudyanteng nakararanas ng tensiyon sa sistema ng edukasyon.",

        traits:
            "Matalino ngunit sawa at galit sa kaniyang karanasan.",

        goals:
            "Matapos ang kaniyang pag-aaral.",

        relations:
            "Kabilang sa pangkat ng mga estudyante.",

        idea:
            "Kabiguan sa edukasyon at awtoridad."
    },


    {
        name: "Makaraig",

        role:
            "Mayamang estudyanteng kabilang sa mga nangunguna sa usapin ng akademya.",

        traits:
            "Maykaya, organisado at aktibo.",

        goals:
            "Isulong ang kahilingan ng mga estudyante.",

        relations:
            "Kabilang sa pangkat ng mga estudyante.",

        idea:
            "Repormang pang-edukasyon at sama-samang pagkilos."
    },


    {
        name: "Juanito Pelaez",

        role:
            "Estudyanteng kabilang sa mundong panlipunan ng mga kabataan.",

        traits:
            "Kaakit-akit at sensitibo sa katayuang panlipunan.",

        goals:
            "Panatilihin ang kaniyang magandang katayuan.",

        relations:
            "May mahalagang kaugnayan kay Paulita Gómez.",

        idea:
            "Pribilehiyo, uri ng lipunan at pakikibagay."
    }

];


/* =========================================
   CHARACTER DISPLAY
========================================= */

const characterGrid =
    document.getElementById("characterGrid");

const characterSearch =
    document.getElementById("characterSearch");


function displayCharacters(searchTerm = "") {

    const query =
        searchTerm
            .toLowerCase()
            .trim();


    const filtered =
        characters.filter(character => {

            const searchableText =
                `
                ${character.name}
                ${character.role}
                ${character.idea}
                `
                .toLowerCase();

            return searchableText.includes(query);

        });


    characterGrid.innerHTML = "";


    if (filtered.length === 0) {

        characterGrid.innerHTML = `
            <p>
                Walang tauhang tumutugma sa iyong paghahanap.
            </p>
        `;

        return;
    }


    filtered.forEach(character => {

        const originalIndex =
            characters.indexOf(character);


        const card =
            document.createElement("button");


        card.className =
            "character-card";


        card.innerHTML = `

            <h3 class="character-nameplate">
                ${character.name}
            </h3>

            <p>
                ${character.role}
            </p>

        `;


        card.addEventListener(
            "click",
            () => openCharacterModal(originalIndex)
        );


        characterGrid.appendChild(card);

    });

}


characterSearch.addEventListener(
    "input",
    event => {
        displayCharacters(event.target.value);
    }
);


/* =========================================
   CHARACTER MODAL
========================================= */

const characterModal =
    document.getElementById("characterModal");

const modalName =
    document.getElementById("modalName");

const modalRole =
    document.getElementById("modalRole");

const modalDetails =
    document.getElementById("modalDetails");

const closeModal =
    document.getElementById("closeModal");


function openCharacterModal(index) {

    const character =
        characters[index];


    modalName.textContent =
        character.name;


    modalRole.textContent =
        character.role;


    modalDetails.innerHTML = `

        <div>

            <strong>Katangian</strong>

            ${character.traits}

        </div>


        <div>

            <strong>Layunin</strong>

            ${character.goals}

        </div>


        <div>

            <strong>Kaugnayan</strong>

            ${character.relations}

        </div>


        <div>

            <strong>Kinakatawang ideya</strong>

            ${character.idea}

        </div>

    `;


    characterModal.showModal();

}


closeModal.addEventListener(
    "click",
    () => characterModal.close()
);


/* =========================================
   CHAPTER DATA
========================================= */

const chapters = [

    [
        "I",
        "Sa Cubierta",
        "Paglalakbay sa Bapor Tabò at pagpapakilala sa mga pasahero.",
        "Lipunan"
    ],

    [
        "II",
        "Sa Silong ng Cubierta",
        "Mas malinaw na nakikita ang pagkakaiba ng mga pasahero.",
        "Uri"
    ],

    [
        "III",
        "Mga Alamat",
        "Mga salaysay at alaala na nagbibigay ng konteksto.",
        "Alaala"
    ],

    [
        "IV",
        "Si Kabesang Tales",
        "Paglalantad sa suliranin ni Kabesang Tales.",
        "Lupa"
    ],

    [
        "V",
        "Ang Noche Buena ng Isang Kotsero",
        "Isang gabing nagpapakita ng kawalan ng kapangyarihan ng karaniwang tao.",
        "Pang-aabuso"
    ],

    [
        "VI",
        "Si Basilio",
        "Pagtingin sa kalagayan at mithiin ni Basilio.",
        "Kabataan"
    ],

    [
        "VII",
        "Si Simoun",
        "Mas malinaw na inilalantad ang pagkatao at layunin ni Simoun.",
        "Paghihiganti"
    ],

    [
        "VIII",
        "Mabuting Paskó",
        "Paskong may halong saya at mapait na karanasan.",
        "Lipunan"
    ],

    [
        "IX",
        "Si Pilato",
        "Pag-iwas sa pananagutan at pagpapasa ng sisi.",
        "Kapangyarihan"
    ],

    [
        "X",
        "Kayamanan at Karalitaan",
        "Pagkakaiba ng yaman at kahirapan.",
        "Uri"
    ],

    [
        "XI",
        "Los Baños",
        "Mga usapan at pagpapasiya ng mga makapangyarihan.",
        "Burukrasya"
    ],

    [
        "XII",
        "Plácido Penitente",
        "Karanasan ng isang estudyante sa edukasyon.",
        "Edukasyon"
    ],

    [
        "XIII",
        "Ang Aralan ng Písica",
        "Tensiyon sa loob ng klase.",
        "Edukasyon"
    ],

    [
        "XIV",
        "Isang Tahanan ng mga Nag-aaral",
        "Mundo ng mga estudyante.",
        "Kabataan"
    ],

    [
        "XV",
        "Si G. Pasta",
        "Pagharap ng mga estudyante sa taong may impluwensiya.",
        "Reporma"
    ],

    [
        "XVI",
        "Ang mga Kapighatian ng Isang Insík",
        "Karanasan ng isang tauhang Intsik.",
        "Lipunan"
    ],

    [
        "XVII",
        "Ang Periya sa Kiyapo",
        "Makulay ngunit masalimuot na tagpuan.",
        "Kultura"
    ],

    [
        "XVIII",
        "Mga Kadayaan",
        "Pagbubunyag sa mga palabas at panlilinlang.",
        "Panlilinlang"
    ],

    [
        "XIX",
        "Ang Lambal",
        "Mga epekto ng mga pangyayari.",
        "Tunggalian"
    ],

    [
        "XX",
        "Ang Nagpapalagay",
        "Mga pagpapalagay at opinyon.",
        "Opinyon"
    ],

    [
        "XXI",
        "Mga Ayos Maynila",
        "Larawan ng buhay sa Maynila.",
        "Lipunan"
    ],

    [
        "XXII",
        "Ang Palabas",
        "Isang pagtatanghal na nagiging salamin ng lipunan.",
        "Sining"
    ],

    [
        "XXIII",
        "Isang Bangkay",
        "Mabigat na pangyayaring nagpapakita ng mga bunga ng suliranin.",
        "Trahedya"
    ],

    [
        "XXIV",
        "Mga Pangarap",
        "Mga pangarap at pag-asa ng mga tauhan.",
        "Pangarap"
    ],

    [
        "XXV",
        "Tawanan—Iyakan",
        "Pagkakasalungat ng saya at lungkot.",
        "Damdamin"
    ],

    [
        "XXVI",
        "Mga Paskín",
        "Mga paskin bilang paraan ng pagpapahayag.",
        "Protesta"
    ],

    [
        "XXVII",
        "Ang Prayle at ang Pilipino",
        "Tensiyon sa pagitan ng awtoridad at Pilipino.",
        "Kapangyarihan"
    ],

    [
        "XXVIII",
        "Tatakut",
        "Paglaganap ng takot.",
        "Takot"
    ],

    [
        "XXIX",
        "Mga Huling Salita ukol kay Kapitan Tiago",
        "Pagtingin sa mga bunga ng kaniyang buhay.",
        "Pagmumuni"
    ],

    [
        "XXX",
        "Hulí",
        "Mahahalagang pangyayaring nagbubukas sa huling bahagi.",
        "Wakas"
    ],

    [
        "XXXI",
        "Ang Mataas na Kawani",
        "Pagharap sa pananagutan at mga pasiya ng opisyal.",
        "Pamahalaan"
    ],

    [
        "XXXII",
        "Mga Ibinunga ng mga Paskín",
        "Mga naging bunga ng mga pagpapahayag.",
        "Bunga"
    ],

    [
        "XXXIII",
        "Ang Huling Matuwid",
        "Pagtitimbang sa mga dahilan at katwiran.",
        "Moralidad"
    ],

    [
        "XXXIV",
        "Ang Kasál",
        "Isang mahalagang seremonya sa salaysay.",
        "Pag-ibig"
    ],

    [
        "XXXV",
        "Ang Pistá",
        "Ang kasiyahan ay nagiging tagpuan ng mga lihim.",
        "Lipunan"
    ],

    [
        "XXXVI",
        "Mga Kagipitan ni Ben-Zayb",
        "Pagharap ni Ben-Zayb sa mga pangyayaring hindi niya kontrolado.",
        "Pamamahayag"
    ],

    [
        "XXXVII",
        "Ang Hiwaga",
        "Pagbubukas ng mga lihim.",
        "Hiwaga"
    ],

    [
        "XXXVIII",
        "Kasawian",
        "Pagharap sa mabibigat na bunga.",
        "Trahedya"
    ],

    [
        "XXXIX",
        "Wakas",
        "Pangwakas na kabanata at pagbubuo ng mga aral.",
        "Wakas"
    ]

];


/* =========================================
   CHAPTER DISPLAY
========================================= */

const chapterGrid =
    document.getElementById("chapterGrid");

const chapterSearch =
    document.getElementById("chapterSearch");


function displayChapters(searchTerm = "") {

    const query =
        searchTerm.toLowerCase().trim();


    const filtered =
        chapters.filter(chapter => {

            return chapter
                .join(" ")
                .toLowerCase()
                .includes(query);

        });


    chapterGrid.innerHTML = "";


    filtered.forEach(chapter => {

        const card =
            document.createElement("article");


        card.className =
            "chapter-card";


        card.innerHTML = `

            <div class="chapter-number">
                ${chapter[0]}
            </div>

            <div>

                <h3>
                    ${chapter[1]}
                </h3>

                <p>
                    ${chapter[2]}
                </p>

                <span class="chapter-tag">
                    ${chapter[3]}
                </span>

            </div>

        `;


        chapterGrid.appendChild(card);

    });

}


chapterSearch.addEventListener(
    "input",
    event => {
        displayChapters(event.target.value);
    }
);


/* =========================================
   REFLECTION ACCORDION
========================================= */

const reflectionButtons =
    document.querySelectorAll(
        ".reflection-question"
    );


reflectionButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            button.classList.toggle("open");

            const answer =
                button.nextElementSibling;

            answer.classList.toggle("open");

        }
    );

});


/* =========================================
   QUIZ
========================================= */

const quizQuestions = [

    {
        question:
            "Sino ang nagbalik sa Pilipinas bilang Simoun?",

        options: [
            "Basilio",
            "Crisóstomo Ibarra",
            "Isagani",
            "Kabesang Tales"
        ],

        answer: 1,

        explanation:
            "Si Simoun ay si Crisóstomo Ibarra."
    },


    {
        question:
            "Ano ang mahalagang usaping ipinaglaban ng mga estudyante?",

        options: [
            "Bagong palengke",
            "Akademya ng wikang Kastila",
            "Pagpapagawa ng tulay",
            "Pagbabago ng presyo"
        ],

        answer: 1,

        explanation:
            "Ang akademya ng wikang Kastila ay mahalagang usapin sa nobela."
    },


    {
        question:
            "Sino ang anak ni Kabesang Tales?",

        options: [
            "Juli",
            "Paulita Gómez",
            "Maria Clara",
            "Donya Victorina"
        ],

        answer: 0,

        explanation:
            "Si Juli ang anak ni Kabesang Tales."
    },


    {
        question:
            "Alin ang sentral na tema sa katauhan ni Simoun?",

        options: [
            "Paghihiganti",
            "Palakasan",
            "Paglalakbay",
            "Katatawanan"
        ],

        answer: 0,

        explanation:
            "Ang paghihiganti ang isa sa pinakamahalagang puwersa sa mga kilos ni Simoun."
    },


    {
        question:
            "Sino ang kabilang sa mga estudyanteng nagsusulong ng akademya?",

        options: [
            "Makaraig",
            "Ben Zayb",
            "Padre Florentino",
            "Don Custodio"
        ],

        answer: 0,

        explanation:
            "Si Makaraig ay kabilang sa mga estudyanteng nagsusulong ng kanilang layunin."
    },


    {
        question:
            "Kailan unang nailathala ang El Filibusterismo?",

        options: [
            "1872",
            "1887",
            "1891",
            "1896"
        ],

        answer: 2,

        explanation:
            "Ang orihinal na edisyong Espanyol ay nailathala noong 1891."
    },


    {
        question:
            "Ano ang mahalagang tema tungkol sa mga estudyante?",

        options: [
            "Walang halaga ang pag-aaral",
            "Mahalaga ang edukasyon at may mga hadlang sa reporma",
            "Para lamang ito sa mayayaman",
            "Hindi bahagi ng nobela ang edukasyon"
        ],

        answer: 1,

        explanation:
            "Mahalagang bahagi ng nobela ang edukasyon at pakikibaka ng mga estudyante."
    },


    {
        question:
            "Ano ang tamang tawag sa simbolikong pagbasa ng lampara?",

        options: [
            "Direktang pahayag ni Rizal",
            "Interpretasyon",
            "Batas",
            "Talambuhay"
        ],

        answer: 1,

        explanation:
            "Ang simbolikong kahulugan ay dapat malinaw na markahan bilang interpretasyon."
    },


    {
        question:
            "Sino ang paring mahalaga sa huling bahagi ng nobela?",

        options: [
            "Padre Florentino",
            "Padre Damaso",
            "Padre Salvi",
            "Padre Camorra"
        ],

        answer: 0,

        explanation:
            "Si Padre Florentino ay mahalagang tauhan sa mga huling bahagi."
    },


    {
        question:
            "Ano ang inilalarawan ng karanasan ni Kabesang Tales?",

        options: [
            "Suliranin sa lupa at kapangyarihan",
            "Tagumpay sa negosyo",
            "Buhay sa ibang bansa",
            "Pagsasanay sa hukbo"
        ],

        answer: 0,

        explanation:
            "Ang kaniyang kuwento ay nakaugnay sa lupa, kabuhayan at kawalan ng katarungan."
    },


    {
        question:
            "Ano ang kaugnayan ng El Fili sa Noli Me Tangere?",

        options: [
            "Wala silang kaugnayan",
            "Ang El Fili ay karugtong ng Noli",
            "Iisang kabanata lamang sila",
            "Salin lamang ito ng Noli"
        ],

        answer: 1,

        explanation:
            "Ang El Filibusterismo ay karugtong ng Noli Me Tangere."
    },


    {
        question:
            "Ano ang maingat na pagbasa sa paghihiganti ni Simoun?",

        options: [
            "Palaging mabuti ang paghihiganti",
            "Walang epekto ang paghihiganti",
            "Sinusuri ng nobela ang mapaminsalang bunga nito",
            "Ito ang tanging solusyon"
        ],

        answer: 2,

        explanation:
            "Ipinakikita ng nobela ang mga mapaminsalang bunga ng paghihiganti."
    }

];


let currentQuestion = 0;

let userAnswers =
    new Array(quizQuestions.length)
        .fill(null);


const quizContent =
    document.getElementById("quizContent");

const quizProgress =
    document.getElementById("quizProgress");

const quizNext =
    document.getElementById("quizNext");

const quizPrevious =
    document.getElementById("quizPrevious");


function renderQuiz() {

    const question =
        quizQuestions[currentQuestion];


    if (!question) {

        showQuizResult();

        return;
    }


    quizProgress.style.width =
        `
        ${
            ((currentQuestion + 1) /
            quizQuestions.length) *
            100
        }%
        `;


    quizContent.innerHTML = `

        <p class="section-label">
            TANONG
            ${currentQuestion + 1}
            /
            ${quizQuestions.length}
        </p>

        <h3 class="quiz-question">
            ${question.question}
        </h3>

        <div class="quiz-options">

            ${question.options
                .map((option, index) => `

                    <button
                        class="
                            quiz-option
                            ${
                                userAnswers[currentQuestion] === index
                                    ? "selected"
                                    : ""
                            }
                        "
                        data-answer="${index}"
                    >

                        ${String.fromCharCode(65 + index)}.
                        ${option}

                    </button>

                `)
                .join("")}

        </div>


        ${
            userAnswers[currentQuestion] !== null

            ? `

                <div class="quiz-explanation">

                    ${
                        userAnswers[currentQuestion]
                        === question.answer

                        ? "Tama! "

                        : "Hindi ito ang tamang sagot. "
                    }

                    ${question.explanation}

                </div>

            `

            : ""
        }

    `;


    document
        .querySelectorAll(".quiz-option")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    userAnswers[currentQuestion] =
                        Number(
                            button.dataset.answer
                        );

                    renderQuiz();

                }
            );

        });


    quizPrevious.style.display =
        currentQuestion === 0
            ? "none"
            : "";


    quizNext.textContent =
        currentQuestion ===
        quizQuestions.length - 1

            ? "Tingnan ang Iskor"

            : "Susunod";

}


quizNext.addEventListener(
    "click",
    () => {

        if (
            userAnswers[currentQuestion] ===
            null
        ) {

            alert(
                "Pumili muna ng sagot bago magpatuloy."
            );

            return;
        }


        currentQuestion++;

        renderQuiz();

    }
);


quizPrevious.addEventListener(
    "click",
    () => {

        if (currentQuestion > 0) {

            currentQuestion--;

            renderQuiz();

        }

    }
);


/* =========================================
   QUIZ RESULT
========================================= */

function showQuizResult() {

    let score = 0;


    quizQuestions.forEach(
        (question, index) => {

            if (
                userAnswers[index] ===
                question.answer
            ) {

                score++;

            }

        }
    );


    quizProgress.style.width = "100%";


    quizContent.innerHTML = `

        <div style="text-align:center;">

            <p class="section-label">
                IYONG ISKOR
            </p>

            <div class="quiz-score">
                ${score}/${quizQuestions.length}
            </div>

            <p>

                ${
                    score >= 10

                    ? "Napakahusay! Malinaw ang iyong pag-unawa."

                    : score >= 7

                    ? "Maganda! Balikan ang ilang bahagi upang mas mapalalim ang pag-unawa."

                    : "Balikan ang mga seksiyon ng tauhan, tema at kabanata at subukang muli."

                }

            </p>

            <button
                class="btn btn-primary"
                id="restartQuiz"
            >
                Ulitin ang Quiz
            </button>

        </div>

    `;


    quizPrevious.style.display =
        "none";

    quizNext.style.display =
        "none";


    document
        .getElementById("restartQuiz")
        .addEventListener(
            "click",
            () => {

                currentQuestion = 0;

                userAnswers =
                    new Array(
                        quizQuestions.length
                    ).fill(null);

                quizNext.style.display =
                    "";

                renderQuiz();

            }
        );

}


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


menuToggle.addEventListener(
    "click",
    () => {

        const isOpen =
            mainNav.classList.toggle("open");


        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    }
);


mainNav
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "open"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 700) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================
   INITIALIZE
========================================= */

displayCharacters();

displayChapters();

renderQuiz();