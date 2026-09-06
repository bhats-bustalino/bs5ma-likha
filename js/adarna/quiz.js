const mgaTanong = [
  {
    tanong: "Sino ang hari ng kaharian ng Berbanya?",
    sagot: ["Haring Salermo", "Haring Fernando", "Don Pedro", "Arsobispo"],
    tama: 1,
    paliwanag: "Si Haring Fernando ang hari ng Berbanya at asawa ni Reyna Valeriana."
  },
  {
    tanong: "Ilan ang prinsipe na anak nina Haring Fernando at Reyna Valeriana?",
    sagot: ["Dalawa", "Tatlo", "Apat", "Lima"],
    tama: 1,
    paliwanag: "Tatlo sila: Don Pedro, Don Diego, at Don Juan."
  },
  {
    tanong: "Sino ang panganay na prinsipe?",
    sagot: ["Don Juan", "Don Diego", "Don Pedro", "Haring Salermo"],
    tama: 2,
    paliwanag: "Si Don Pedro ang panganay. Si Don Diego ang pangalawa, at si Don Juan ang bunso."
  },
  {
    tanong: "Ano ang tanging lunas sa sakit ni Haring Fernando?",
    sagot: ["Ginto ng kaharian", "Awit ng Ibong Adarna", "Tubig sa balon", "Mahika ni Salermo"],
    tama: 1,
    paliwanag: "Ayon sa manggagamot, ang awit ng Ibong Adarna ang magpapagaling sa hari."
  },
  {
    tanong: "Saan dumadapo ang Ibong Adarna?",
    sagot: ["Sa palasyo ng Berbanya", "Sa Piedras Platas sa Bundok Tabor", "Sa kristal na lawa", "Sa Reyno de los Cristales"],
    tama: 1,
    paliwanag: "Dumadapo ang ibon sa Piedras Platas na nasa Bundok Tabor."
  },
  {
    tanong: "Sino ang nakahuli sa Ibong Adarna?",
    sagot: ["Don Pedro", "Don Diego", "Don Juan", "Leproso"],
    tama: 2,
    paliwanag: "Si Don Juan ang nakahuli sa ibon, sa tulong ng matandang ermitanyo."
  },
  {
    tanong: "Ano ang maaaring gawin ng dumi ng Adarna sa natutulog na tao?",
    sagot: ["Pagalingin siya", "Gawing bato", "Bigyan ng ginto", "Paliparin siya"],
    tama: 1,
    paliwanag: "Nakapagpapahimbing ang pitong himig ng ibon, at ang dumi nito ay nakapagpapabato sa natutulog."
  },
  {
    tanong: "Sino ang iniligtas ni Don Juan mula sa higante?",
    sagot: ["Donya Leonora", "Donya Juana", "Donya Maria Blanca", "Reyna Valeriana"],
    tama: 1,
    paliwanag: "Binantayan ng higante si Donya Juana hanggang siya ay iligtas ni Don Juan."
  },
  {
    tanong: "Ilan ang ulo ng serpyente na nagbabantay kay Donya Leonora?",
    sagot: ["Tatlo", "Lima", "Pito", "Siyam"],
    tama: 2,
    paliwanag: "Pitong ulo ang serpyente. Kapag pinatulan ang isa, maaaring tumubo muli."
  },
  {
    tanong: "Sino ang ama ni Donya Maria Blanca?",
    sagot: ["Haring Fernando", "Haring Salermo", "Arsobispo", "Matandang ermitanyo"],
    tama: 1,
    paliwanag: "Si Haring Salermo ang hari ng Reyno de los Cristales at ama ni Maria Blanca."
  },
  {
    tanong: "Anong hayop ang nagturo at naghatid kay Don Juan papuntang Reyno de los Cristales?",
    sagot: ["Lobo", "Serpyente", "Agila", "Higante"],
    tama: 2,
    paliwanag: "Ang agila, hari ng mga hayop, ang nakaaalam ng daan at sinakyan ni Don Juan."
  },
  {
    tanong: "Sino ang kalaunang naging asawa ni Don Pedro?",
    sagot: ["Donya Juana", "Donya Leonora", "Donya Maria Blanca", "Reyna Valeriana"],
    tama: 1,
    paliwanag: "Naging asawa ni Don Pedro si Donya Leonora. Si Donya Juana naman ay naging asawa ni Don Diego."
  },
  {
    tanong: "Anong kulay ng mahika ang ginagamit ni Donya Maria Blanca?",
    sagot: ["Itim", "Pula", "Puti", "Asul"],
    tama: 2,
    paliwanag: "Gumagamit si Maria Blanca ng puting mahika. Itim naman ang mahika ni Haring Salermo."
  },
  {
    tanong: "Sino ang tumulong kay Don Juan upang hindi siya matulog sa himig ng Adarna?",
    sagot: ["Arsobispo", "Leproso", "Matandang ermitanyo", "Agila"],
    tama: 2,
    paliwanag: "Binigyan siya ng ermitanyo ng kutsilyo at maasim na prutas, at tinuruan kung paano labanan ang pitong himig."
  },
  {
    tanong: "Bakit nagkasakit si Haring Fernando?",
    sagot: [
      "Dahil sa mahabang digmaan",
      "Dahil sa masamang panaginip tungkol sa dalawang traydor",
      "Dahil siya ay naipit sa balon",
      "Dahil sa baha ni Maria Blanca"
    ],
    tama: 1,
    paliwanag: "Napanaginipan ng hari na may dalawang traydor na magbabalak laban kay Don Juan. Nagdalamhati siya at nagkasakit."
  }
];

const tanongEl = document.getElementById("tanong");
const sagotEl = document.getElementById("sagot");
const paliwanagEl = document.getElementById("paliwanag");
const susunodEl = document.getElementById("susunod");
const usadEl = document.getElementById("usad");
const bilangEl = document.getElementById("bilang-tanong");
const puntosEl = document.getElementById("puntos");
const wakasEl = document.getElementById("wakas");
const ulitEl = document.getElementById("ulit");

let index = 0;
let puntos = 0;
let nasagot = false;

function iguhit() {
  const data = mgaTanong[index];
  nasagot = false;
  tanongEl.textContent = data.tanong;
  sagotEl.innerHTML = "";
  paliwanagEl.classList.remove("bukas");
  paliwanagEl.textContent = "";
  susunodEl.hidden = true;
  wakasEl.hidden = true;
  bilangEl.textContent = "Tanong " + (index + 1) + " sa " + mgaTanong.length;
  usadEl.style.width = ((index / mgaTanong.length) * 100) + "%";

  data.sagot.forEach(function (teksto, i) {
    const pindutan = document.createElement("button");
    pindutan.type = "button";
    pindutan.textContent = teksto;
    pindutan.addEventListener("click", function () {
      if (nasagot) return;
      nasagot = true;
      const mgaPindutan = sagotEl.querySelectorAll("button");
      mgaPindutan.forEach(function (b, j) {
        b.disabled = true;
        if (j === data.tama) b.classList.add("tama");
      });
      if (i === data.tama) {
        puntos += 1;
        pindutan.classList.add("tama");
      } else {
        pindutan.classList.add("mali");
      }
      paliwanagEl.textContent = data.paliwanag;
      paliwanagEl.classList.add("bukas");
      if (index < mgaTanong.length - 1) {
        susunodEl.hidden = false;
        susunodEl.textContent = "Susunod na tanong";
      } else {
        tapusin();
      }
    });
    sagotEl.appendChild(pindutan);
  });
}

function tapusin() {
  usadEl.style.width = "100%";
  wakasEl.hidden = false;
  const porsyento = Math.round((puntos / mgaTanong.length) * 100);
  let mensahe = "Magaling! Handang magturo ng kuwento.";
  if (porsyento < 60) mensahe = "Ulitin mo ang pagbasa sa mga kabanata at tauhan, saka subukan muli.";
  else if (porsyento < 85) mensahe = "Malapit na! Kaunti na lang ang kailangang palakasin.";
  puntosEl.innerHTML =
    "Nakuha mo ang <strong>" + puntos + "</strong> sa <strong>" + mgaTanong.length +
    "</strong> (" + porsyento + "%).<br>" + mensahe;
}

susunodEl.addEventListener("click", function () {
  index += 1;
  iguhit();
});

ulitEl.addEventListener("click", function () {
  index = 0;
  puntos = 0;
  iguhit();
});

iguhit();
