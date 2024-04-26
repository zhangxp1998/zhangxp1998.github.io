const characters = Object.freeze([
  {
    "drama-name": "惊华",
    character: "月白长衫男子",
    slogan: "和光同尘，与时舒卷<br>肃肃如松下风，高而徐引",
    "small-cover": "月白.jpg",
  },
  {
    "drama-name": "惊华",
    character: "玄色锦袍男子",
    slogan: "不卑不亢，不争不失<br>喜怒不形于色，好恶不言于表",
    "small-cover": "玄色.jpg",
  },
  {
    "drama-name": "惊华",
    character: "竹青短打男子",
    slogan: "英姿飒爽，气宇轩昂<br>秋霜切玉剑，落日明珠袍",
    "small-cover": "竹青.jpg",
  },
  {
    "drama-name": "惊华",
    character: "紫色襦裙女子",
    slogan: "冰清玉洁，纤尘不染<br>宝髻松松挽就，铅华淡淡妆成",
    "small-cover": "紫色.jpg",
  },
  {
    "drama-name": "惊华",
    character: "绯红喜服男子",
    slogan: "风姿卓著，惊才绝艳<br>朗朗如日月之入怀，颓唐如玉山之将崩",
    "small-cover": "绯红.jpg",
  },
  {
    "drama-name": "惊华",
    character: "鹅黄褂子男子",
    slogan: "龙章风姿，天质自然<br>天天挑李花，灼灼有辉光",
    "small-cover": "鹅黄.jpg",
  },
]);

function selectCharacter(idx) {
  let data = characters[idx];
  for (const [key, value] of Object.entries(data)) {
    if (key == "small-cover") {
      document.getElementById(key).src = value;
    } else {
      document.getElementById(key).innerHTML = value;
    }
  }
}

function onDropDownChange(event) {
  selectCharacter(event.target.selectedIndex);
}

window.onload = function () {
  let preset = document.getElementById("preset");
  characters.forEach((data, idx) => {
    let option = document.createElement("option");
    option.value = preset.id;
    option.innerText = data.character;
    preset.appendChild(option);
  });
  preset.onchange = onDropDownChange;
  selectCharacter(0);
};

function getFilename() {
  const character = document.getElementById("character").innerText;
  const time = document.getElementById("time").innerText;
  return time.substring(0, 5) + " " + character.substring(0, 2);
}

function download() {
  html2canvas(document.getElementById("canvas"), {
    allowTaint: false,
    useCORS: true,
    backgroundColor: "white",
    scale: 3,
  }).then((canvas) => {
    let blob = canvas.toDataURL("image/png");
    let link = document.createElement("a");
    link.download = getFilename() + ".png";
    link.href = blob;
    link.click();
  });
}
