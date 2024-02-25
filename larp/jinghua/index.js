const questions = [
  {
    title: "性别",
    options: [
      { code: "A", option: "男" },
      { code: "B", option: "女" },
      { code: "C", option: "女，但热衷于反串" },
    ],
  },
  {
    title: "年龄",
    options: [
      { code: "A", option: "18岁以下" },
      { code: "B", option: "18到25" },
      { code: "C", option: "25到30" },
      { code: "D", option: "30以上" },
    ],
  },
  {
    title:
      "你是否会为了前程委屈亲人，为了现实放弃爱情？（两者间任意一项回答会选会，二者均回答不会选择不会，其他情况选择不一定）",
    options: [
      { code: "A", option: "会" },
      { code: "B", option: "不会" },
      { code: "C", option: "不一定" },
    ],
  },
  {
    title: "你怎样看待死后之事？",
    options: [
      { code: "A", option: "我死后哪管洪水滔天" },
      { code: "B", option: "人固有一死，愿重于泰山" },
    ],
  },
  {
    title: "你怎样看待劫富济贫的侠客",
    options: [
      { code: "A", option: "侠之大者，为国为民，杀一人而济天下，英雄也" },
      { code: "B", option: "侠以武犯禁，不事生产，不守律法，不可取" },
    ],
  },
  {
    title: "你认为成大事者是否可以不择手段？",
    options: [
      {
        code: "A",
        option: "被玷污过的正义不是真正的正义，无论如何要守住初心",
      },
      {
        code: "B",
        option:
          "为了实现理想，有时候必须不择手段，对待恶人，当比恶人更加狠厉决绝",
      },
    ],
  },
  {
    title: "你怎样看待那些为了复国，或努力拯救处于末路的王朝而不懈奋斗的人？",
    options: [
      { code: "A", option: "可歌可泣" },
      { code: "B", option: "可悲可叹" },
    ],
  },
  {
    title: "你对待权力的态度是怎么样的",
    options: [
      {
        code: "A",
        option: "权力不过身外之物，若能保阖家安乐，惟愿闲云野鹤了此一生",
      },
      {
        code: "B",
        option: "大丈夫不可一日无权，只有身居高位，才能实现抱负，一展所学",
      },
      {
        code: "C",
        option: "德需配位，能者居之，对待权力的追求需适自身能力而定",
      },
    ],
  },
  {
    title: "如果统治者和你有杀父之仇，你会怎么做",
    options: [
      {
        code: "A",
        option: "血海深仇不共戴天，必将血债血偿，若力有不逮，当不惜玉石俱焚",
      },
      {
        code: "B",
        option:
          "冤冤相报何时了，若统治者却为明君，若前尘旧事确有难言之隐，为父辈正名，求一公道即可",
      },
      {
        code: "C",
        option:
          "仇人当政，能苟全性命已是万难，何谈复仇？当摒弃仇怨，保证现世安稳，追求功名利禄",
      },
    ],
  },
  {
    title:
      "你是否有兄弟姐妹？（关系不好形同陌路的亲兄弟姐妹也可以答否，从小一起长大亲密无间的表兄弟姐妹可以答是）",
    options: [
      { code: "A", option: "是" },
      { code: "B", option: "否" },
    ],
  },
  {
    title: "你是否有难以忘怀的恩师或对你有影响深远的指路人？",
    options: [
      { code: "A", option: "是" },
      { code: "B", option: "否" },
    ],
  },
  {
    title: "你和家中长辈（包括但不限于父母）的感情怎么样？",
    options: [
      { code: "A", option: "无话不说，亦亲亦友，是彼此生命中最重要的人" },
      {
        code: "B",
        option:
          "虽然有过误会（发生过冲突），观念上也不尽相同，但内心还是非常在意对方的",
      },
      {
        code: "C",
        option: "无爱无恨，内心存在不可逾越的鸿沟，用沉默维持着表面的平静祥和",
      },
      {
        code: "D",
        option: "势同水火，几乎无法在同一个屋檐下生活，迫不及待的想要逃离",
      },
    ],
  },
  {
    title: "你觉得以下哪种爱情悲剧更让人无力？",
    options: [
      {
        code: "A",
        option:
          "近在咫尺却又远在天涯，被命运逼迫着渐行渐远，连表露心意都是天理不容",
      },
      { code: "B", option: "青梅竹马，两情相悦，却在最好的年华里阴阳永隔" },
      {
        code: "C",
        option: "从同舟共济走到同床异梦，却又在世俗的裹挟下维系着一纸婚约",
      },
    ],
  },
  {
    title: "你最向往什么样的兄弟情义",
    options: [
      { code: "A", option: "出生入死，性命相托" },
      { code: "B", option: "情同手足，相拥取暖" },
      { code: "C", option: "心意相通，思想共鸣" },
    ],
  },
  {
    title: "你最欣赏（理解/认同）什么样的人？",
    options: [
      { code: "A", option: "心狠手辣，运筹帷幄的帝王" },
      { code: "B", option: "傲骨铮铮，忠义节烈的文士" },
      { code: "C", option: "南征北战，心忧天下的将军" },
      { code: "D", option: "逆天改命，野心勃勃的政客" },
      { code: "E", option: "忠心耿耿，步步为营的谋臣" },
      { code: "F", option: "乱世沉浮，夹缝求生的凡人" },
    ],
  },
  {
    title: "在剧本杀中，你更愿意扮演怎样的角色？",
    options: [
      {
        code: "A",
        option: "人物关系风暴口：我认识你，我认识他，整个世界都围着我转",
      },
      {
        code: "B",
        option: "信息索引表：你说这个啊，我知道我知道，让我来给你梳理一下",
      },
      {
        code: "C",
        option: "大局观视角位：我觉得你们想的太简单了，我们应该跳出来思考一下",
      },
      {
        code: "D",
        option:
          "感情焦点：我爱你，你爱他，他爱我......亲情，爱情，友情，家国......我太难了......",
      },
      {
        code: "E",
        option:
          "真相先驱：我感觉我好像知道了一些什么，事实并不是表面上看到的那样......",
      },
      {
        code: "F",
        option: "叙诡集锦：你以为你以为的就是你以为的吗？本，我的本都骗我！",
      },
    ],
  },
  {
    title: "你喜欢怎么样的游戏模式？（此题不加减分）",
    options: [
      { code: "A", option: "一切从简，硬盘，DM扛着车走（8小时）" },
      { code: "B", option: "走基本流程，微演绎，扶车（10小时）" },
      {
        code: "C",
        option: "释放一定自由度，有NPC互动，走部分支线，尽量不扶车（12小时）",
      },
      {
        code: "D",
        option:
          "高自由度，完全不扶车，走所有的支线彩蛋，埋掉部分非必要线索（地狱模式，仅作者本人可开，目前试过两次，北京15小时，苏州16小时）",
      },
    ],
  },
];
let config = [
  [
    [0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
    [0, 3, 2, 0, 0, 0, 20, 15, 0, 0, 5, 0, 0, 0, 0, 5, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 18, 15, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 15, 0, 0, 0, 10, 2, 0, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 30, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [0, 0, 1, 28, 0, 0, 0, 20, 0, 0, 0, 7, 2, 3, 4, 0, 0, 0],
  ],
  [
    [0, 0, 3, 0, 0, 0, 15, 20, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0],
    [0, 0, 0, 28, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
    [0, 5, 2, 30, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 15, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 3, 0],
  ],
  [
    [0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
    [0, 0, 0, 28, 0, 0, 0, 0, 10, 0, 0, 0, 2, 0, 0, 2, 3, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 1, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 2, 3, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 0],
    [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
];
const character_order = [
  "绯红喜服男子",
  "鹅黄褂子男子",
  "月白长衫男子",
  "紫色儒裙女子",
  "玄色锦袍男子",
  "竹青短打男子",
];
let form = document.createElement("form");

for (let i = 0; i < questions.length; i++) {
  let question = questions[i];
  let title_elem = document.createElement("p");
  title_elem.innerHTML = i + 1 + ". " + question.title;
  let field_set = document.createElement("fieldset");
  form.appendChild(title_elem);
  form.appendChild(field_set);
  for (let j = 0; j < question.options.length; j++) {
    let div = document.createElement("div");
    let option = question.options[j];
    let input_elem = document.createElement("input");
    input_elem.name = i;
    input_elem.value = j;
    input_elem.type = "radio";
    let label_elem = document.createElement("label");
    // let desc = "";
    // for (let k = 0; k < character_order.length; k++) {
    //   desc +=
    //     " " + character_order[k].substring(0, 2) + ": " + config[j][k][i + 1];
    // }
    label_elem.innerHTML = option.option;
    field_set.appendChild(div);
    div.appendChild(input_elem);
    div.appendChild(label_elem);
  }
}
let submit_btn = document.createElement("input");
submit_btn.type = "submit";
submit_btn.innerHTML = "submit";
submit_btn.style.width = "100%";
form.appendChild(submit_btn);
document.body.appendChild(form);
let result = document.createElement("div");
document.body.appendChild(result);

function renderResult(score) {
  let entries = [];
  for (let i = 0; i < character_order.length; i++) {
    entries.push([character_order[i], score[i]]);
  }
  entries.sort((a, b) => b[1] - a[1]);
  console.log(entries);
  result.replaceChildren();
  for (let i = 0; i < entries.length; i++) {
    let p = document.createElement("p");
    p.innerHTML = entries[i][0] + "得分: " + entries[i][1];
    result.appendChild(p);
  }
}

function test(c) {
  let data = new FormData(c.target);
  let choice = new Array(16).fill(0);
  for (const entry of data.entries()) {
    choice[parseInt(entry[0])] = parseInt(entry[1]);
  }
  console.log(choice);
  let score = new Array(6).fill(0);
  for (let i = 0; i < score.length; i++) {
    for (let j = 0; j < choice.length; j++) {
      score[i] += config[choice[j]][i][j + 1];
    }
  }
  renderResult(score);
  return false;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  test(event);
  return false;
});
