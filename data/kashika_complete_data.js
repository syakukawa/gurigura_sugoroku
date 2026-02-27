const BASE_SQUARES = [
  {
    id: 0,
    stage: "Start",
    type: "start",
    title: "スタート",
    icon: "??",
    timer: null,
    judge: "ゲーム中は『審判は絶対』です",
    fail: null
  },
  {
    id: 1,
    stage: "1stSTAGE",
    type: "missionB",
    title: "マス1",
    icon: "?",
    timer: 1,
    judge: null,
    fail: null
  },
  {
    id: 2,
    stage: "1stSTAGE",
    type: "missionB",
    title: "マス2",
    icon: "?",
    timer: 1,
    judge: null,
    fail: null
  },
  {
    id: 3,
    stage: "1stSTAGE",
    type: "missionB",
    title: "マス3",
    icon: "?",
    timer: 1,
    judge: null,
    fail: null
  },
  {
    id: 4,
    stage: "1stSTAGE",
    type: "missionB",
    title: "マス4",
    icon: "?",
    timer: 1,
    judge: null,
    fail: null
  },
  {
    id: 5,
    stage: "1stSTAGE",
    type: "missionB",
    title: "マス5",
    icon: "?",
    timer: 1,
    judge: null,
    fail: null
  },
  {
    id: 6,
    stage: "1stSTAGE",
    type: "missionB",
    title: "マス6",
    icon: "?",
    timer: 1,
    judge: null,
    fail: null
  },
  {
    id: 7,
    stage: "1st STAGE",
    type: "Stop",
    title: "マス7",
    icon: "??",
    timer: null,
    judge: "〇回ですね？（トータル回数を表示）",
    fail: "スタートに戻る"
  },
  {
    id: 8,
    stage: "2nd STAGE",
    type: "missionA",
    title: "心1",
    icon: "?",
    timer: 1,
    judge: null,
    fail: "やり直し"
  },
  {
    id: 9,
    stage: "2nd STAGE",
    type: "missionA",
    title: "心2",
    icon: "?",
    timer: 1,
    judge: null,
    fail: "やり直し"
  },
  {
    id: 10,
    stage: "2ndSTAGE",
    type: "debuff1",
    title: "心3",
    icon: "?",
    timer: null,
    judge: null,
    fail: null
  },
  {
    id: 11,
    stage: "2nd STAGE",
    type: "missionA",
    title: "心4",
    icon: "?",
    timer: 1,
    judge: null,
    fail: "3マス戻る"
  },
  {
    id: 12,
    stage: "2nd STAGE",
    type: "missionA",
    title: "心5",
    icon: "?",
    timer: 1,
    judge: null,
    fail: "3マス戻る"
  },
  {
    id: 13,
    stage: "2nd STAGE",
    type: "Stop",
    title: "心6",
    icon: "??",
    timer: 1,
    judge: null,
    fail: "以降もかわいくお願いが出来なければ始まらない"
  },
  {
    id: 14,
    stage: "2nd STAGE",
    type: "missionA",
    title: "身体1",
    icon: "?",
    timer: null,
    judge: null,
    fail: "タイマー起動　30秒"
  },
  {
    id: 15,
    stage: "2nd STAGE",
    type: "missionA",
    title: "身体2",
    icon: "?",
    timer: null,
    judge: null,
    fail: "タイマー起動　30秒"
  },
  {
    id: 16,
    stage: "2ndSTAGE",
    type: "debuff2",
    title: "身体3",
    icon: "?",
    timer: null,
    judge: null,
    fail: null
  },
  {
    id: 17,
    stage: "2nd STAGE",
    type: "missionA",
    title: "身体4",
    icon: "?",
    timer: 1,
    judge: null,
    fail: "3マス戻る"
  },
  {
    id: 18,
    stage: "2nd STAGE",
    type: "missionA",
    title: "身体5",
    icon: "?",
    timer: 1,
    judge: null,
    fail: "3マス戻る"
  },
  {
    id: 19,
    stage: "2nd STAGE",
    type: "Stop",
    title: "身体6",
    icon: "?",
    timer: 1,
    judge: null,
    fail: "以降も語尾に『にゃん』をつける"
  },
  {
    id: 20,
    stage: "3rd STAGE",
    type: "missionA",
    title: "マス20",
    icon: "?",
    timer: 2,
    judge: null,
    fail: null
  },
  {
    id: 21,
    stage: "3rd STAGE",
    type: "missionA",
    title: "マス21",
    icon: "?",
    timer: 2,
    judge: null,
    fail: null
  },
  {
    id: 22,
    stage: "3rdSTAGE",
    type: "debuff3",
    title: "マス22",
    icon: "?",
    timer: null,
    judge: null,
    fail: null
  },
  {
    id: 23,
    stage: "3rd STAGE",
    type: "missionA",
    title: "マス23",
    icon: "?",
    timer: 2,
    judge: null,
    fail: "3マス戻る"
  },
  {
    id: 24,
    stage: "3rd STAGE",
    type: "missionA",
    title: "マス24",
    icon: "?",
    timer: 2,
    judge: null,
    fail: "3マス戻る"
  },
  {
    id: 25,
    stage: "3rd STAGE",
    type: "missionA",
    title: "マス25",
    icon: "?",
    timer: 2,
    judge: null,
    fail: "3マス戻る"
  },
  {
    id: 26,
    stage: "3rd STAGE",
    type: "missionA",
    title: "マス26",
    icon: "?",
    timer: 2,
    judge: null,
    fail: "4マス戻る"
  },
  {
    id: 27,
    stage: "FINALSTAGE",
    type: "choice",
    title: "マス27",
    icon: "??",
    timer: null,
    judge: null,
    fail: null
  },
  {
    id: 28,
    stage: "FINALSTAGE",
    type: "missionB",
    title: "甘々1",
    icon: "??",
    timer: "dice",
    judge: null,
    fail: null
  },
  {
    id: 29,
    stage: "FINALSTAGE",
    type: "missionB",
    title: "甘々2",
    icon: "??",
    timer: "dice",
    judge: null,
    fail: null
  },
  {
    id: 30,
    stage: "FINALSTAGE",
    type: "missionB",
    title: "拷問1",
    icon: "??",
    timer: "dice",
    judge: null,
    fail: null
  },
  {
    id: 31,
    stage: "FINALSTAGE",
    type: "missionB",
    title: "拷問2",
    icon: "??",
    timer: "dice",
    judge: null,
    fail: null
  },
  {
    id: 32,
    stage: "Goal",
    type: "goal",
    title: "ゴール",
    icon: "??",
    timer: null,
    judge: null,
    fail: null
  }
];

const SQUARE_TEXTS = {
  0: {
    posture: null,
    instruction: "2人の場合はぐりとぐら\n3人の場合は1人が審判となる\n※審判は絶対です。ぐりもぐらも逆らってはいけません",
    penalty: null,
    judgeComment: null
  },
  1: {
    posture: "椅子またはベッドに座る",
    instruction: "腕の感度チェックを１分間してもらいます",
    penalty: null,
    judgeComment: "逆側からチェックを手伝ってあげましょう"
  },
  2: {
    posture: "椅子またはベッドに座る",
    instruction: "上半身の感度チェックを１分間してもらう",
    penalty: null,
    judgeComment: "逆側からチェックを手伝ってあげましょう"
  },
  3: {
    posture: "椅子またはベッドに座る",
    instruction: "脚の感度チェックを１分間してもらう",
    penalty: null,
    judgeComment: "耳元で実況してあげましょう"
  },
  4: {
    posture: "椅子またはベッドに座る",
    instruction: "首、耳の感度チェックを1分間してもらう",
    penalty: null,
    judgeComment: "逆側からチェックを手伝ってあげましょう"
  },
  5: {
    posture: "四つん這い",
    instruction: "お尻周りの感度チェックを１分間してもらう",
    penalty: null,
    judgeComment: "ぐりさんのチェックはしなくていいですか？"
  },
  6: {
    posture: "四つん這い",
    instruction: "足の裏の感度チェックを1分間してもらう",
    penalty: null,
    judgeComment: "ぐりさんのチェックはしなくていいですか？"
  },
  7: {
    posture: null,
    instruction: "感度チェックを3回以上受けましたか？",
    penalty: "受けてなければスタートに戻る",
    judgeComment: null
  },
  8: {
    posture: "体育座り",
    instruction: "1分間、いたずらされても姿勢をキープします",
    penalty: "くずれたら、やり直し",
    judgeComment: "ぐりさんの後ろから、ぐりさんを…"
  },
  9: {
    posture: "胡坐",
    instruction: "目をつぶり、座禅のように集中します\n1分間、いたずらされても動いてはいけません",
    penalty: "動いたらやりなおし",
    judgeComment: "目をつぶっています…ね？"
  },
  10: {
    posture: null,
    instruction: "タイマー2倍券を2枚もらえる\nこの券の発動はぐり権限とする",
    penalty: null,
    judgeComment: null
  },
  11: {
    posture: "仰向け　足を組んで抱える",
    instruction: "1分間、いたずらされても姿勢をキープします",
    penalty: "くずれたら3マス戻る",
    judgeComment: "おしりか、足裏か…"
  },
  12: {
    posture: "椅子またはベッドに座る\n手は頭の上",
    instruction: "1分間、いたずらされても姿勢をキープします",
    penalty: "くずれたら3マス戻る",
    judgeComment: "脇か、お腹か、はたまた背中か…"
  },
  13: {
    posture: "女の子座り（もしくは横座り）\n手は膝の上",
    instruction: "『私をくすぐってください』とかわいくお願い出来なければスタートしません\n１分間、いたずらされても体制をキープします",
    penalty: "くずれたら、以降もかわいくお願いしなければならない",
    judgeComment: null
  },
  14: {
    posture: "仰向け　膝をそろえて立てる",
    instruction: "腹筋を10回やります（ぐりは足に乗り押さえてあげます）\n上体を上げてぐりに背中をくすぐってもらえたら1回です",
    penalty: "腹筋できない人はそのままの体勢でぐりの首に手をまわし、背中を30秒くすぐってもらいましょう",
    judgeComment: "数を数えてあげましょう\n（間違えることもありますよね？）"
  },
  15: {
    posture: "うつ伏せ　手は後ろで組みます",
    instruction: "背筋（上体反らし）を10回やります\n上体を反らして、あごの下をくすぐってもらえたら１回です",
    penalty: "背筋できない人はヨガの『スフィンクス』のポーズで30秒くすぐってもらいましょう",
    judgeComment: "数を数えてあげましょう\n（間違えることもありますよね？）"
  },
  16: {
    posture: null,
    instruction: "タイマー2倍券を2枚もらえる\nこの券の発動はぐり権限とする",
    penalty: null,
    judgeComment: null
  },
  17: {
    posture: "プランクの姿勢",
    instruction: "１分間、いたずらされても姿勢をキープします",
    penalty: "くずれたら1マス戻る",
    judgeComment: "足裏もあいてるよ？"
  },
  18: {
    posture: "ヨガ『木のポーズ』",
    instruction: "１分間、いたずらされても姿勢をキープします",
    penalty: "くずれたら2マス戻る",
    judgeComment: "腕が落ちないように二の腕ささえましょうか？"
  },
  19: {
    posture: "ヨガ『猫の伸びのポーズ』",
    instruction: "１分間、いたずらされても姿勢をキープします\n語尾に『にゃん』をつける",
    penalty: "姿勢がくずれたら、以降も語尾に『にゃん』をつける",
    judgeComment: null
  },
  20: {
    posture: "うつ伏せ",
    instruction: "覆いかぶさって、ベッドと身体の間に手を入れて2分間くすぐられます",
    penalty: "ぐりの身体に手が当たったら+20秒",
    judgeComment: "手が当たる度に20秒追加しましょう"
  },
  21: {
    posture: "仰向け",
    instruction: "覆いかぶさって、ベッドと身体の間に手を入れて2分間くすぐられます",
    penalty: "ぐりの身体に手が当たったら+20秒",
    judgeComment: "手が当たる度に20秒追加しましょう"
  },
  22: {
    posture: null,
    instruction: "この先全ての施術時間が1.5倍になる\n2回目以降はタイマー2倍券が1枚増える",
    penalty: null,
    judgeComment: null
  },
  23: {
    posture: "仰向け　バンザイ",
    instruction: "上半身を２分間くすぐられる",
    penalty: "耐えられず手を下ろしてしまった場合は3マス戻る",
    judgeComment: "はさみうちでくすぐりましょう♪"
  },
  24: {
    posture: "四つん這い",
    instruction: "四つん這いで全身を２分間くすぐられる",
    penalty: "耐えられず体勢を崩してしまった場合は3マス戻る",
    judgeComment: "はさみうちでくすぐりましょう♪"
  },
  25: {
    posture: "仰向け　気をつけ",
    instruction: "馬乗りになり、首と耳を２分間くすぐられます",
    penalty: "ギブアップした場合は3マス戻る",
    judgeComment: "下半身も忘れずに！"
  },
  26: {
    posture: "うつ伏せ　気をつけ",
    instruction: "馬乗りになり、背中とおしりを２分間くすぐられる",
    penalty: "ギブアップした場合は4マス戻る",
    judgeComment: "下半身も忘れずに！"
  },
  27: {
    posture: null,
    instruction: "FINALSTAGEは4マスのうち2マスに挑戦する\nマスは都度ルーレットで決める（各マス１回のみ）",
    penalty: null,
    judgeComment: null
  },
  28: {
    posture: "ベッドに座る",
    instruction: "バックハグで絡みつき首をくすぐられる",
    penalty: null,
    judgeComment: null
  },
  29: {
    posture: "ベッドに座る",
    instruction: "正面からハグで拘束したまま背中や脇腹をくすぐられる",
    penalty: null,
    judgeComment: null
  },
  30: {
    posture: "うつ伏せ大の字",
    instruction: "うつ伏せで大の字に拘束されくすぐり拷問を受ける",
    penalty: null,
    judgeComment: null
  },
  31: {
    posture: "仰向け大の字",
    instruction: "仰向けで大の字に拘束されくすぐり拷問を受ける",
    penalty: null,
    judgeComment: null
  },
  32: {
    posture: null,
    instruction: null,
    penalty: null,
    judgeComment: null
  }
};

const COURSE_SQUARES = {
  courseA: [
    {
      id: 8,
      stage: "2nd STAGE",
      type: "missionA",
      title: "心1",
      icon: "?",
      timer: 1
    },
    {
      id: 9,
      stage: "2nd STAGE",
      type: "missionA",
      title: "心2",
      icon: "?",
      timer: 1
    },
    {
      id: 10,
      stage: "2ndSTAGE",
      type: "debuff1",
      title: "心3",
      icon: "?",
      timer: null
    },
    {
      id: 11,
      stage: "2nd STAGE",
      type: "missionA",
      title: "心4",
      icon: "?",
      timer: 1
    },
    {
      id: 12,
      stage: "2nd STAGE",
      type: "missionA",
      title: "心5",
      icon: "?",
      timer: 1
    },
    {
      id: 13,
      stage: "2nd STAGE",
      type: "Stop",
      title: "心6",
      icon: "??",
      timer: 1
    }
  ],
  courseB: [
    {
      id: 14,
      stage: "2nd STAGE",
      type: "missionA",
      title: "身体1",
      icon: "?",
      timer: null
    },
    {
      id: 15,
      stage: "2nd STAGE",
      type: "missionA",
      title: "身体2",
      icon: "?",
      timer: null
    },
    {
      id: 16,
      stage: "2ndSTAGE",
      type: "debuff2",
      title: "身体3",
      icon: "?",
      timer: null
    },
    {
      id: 17,
      stage: "2nd STAGE",
      type: "missionA",
      title: "身体4",
      icon: "?",
      timer: 1
    },
    {
      id: 18,
      stage: "2nd STAGE",
      type: "missionA",
      title: "身体5",
      icon: "?",
      timer: 1
    },
    {
      id: 19,
      stage: "2nd STAGE",
      type: "Stop",
      title: "身体6",
      icon: "?",
      timer: 1
    }
  ]
};
