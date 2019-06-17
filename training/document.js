const documentData = [
  {
    message: 'あなたを教えて',
    target: 'agent.acquaintance',
  },
  {
    message: 'なぜここにいるの',
    target: 'agent.acquaintance',
  },
  {
    message: 'あなたの性格',
    target: 'agent.acquaintance',
  },
  {
    message: '自己紹介',
    target: 'agent.acquaintance',
  },
  {
    message: '自分について',
    target: 'agent.acquaintance',
  },
  {
    message: 'あなたについて',
    target: 'agent.acquaintance',
  },
  {
    message: 'あなたは何',
    target: 'agent.acquaintance',
  },
  {
    message: 'あなたは誰',
    target: 'agent.acquaintance',
  },
  {
    message: 'あなたを知りたい',
    target: 'agent.acquaintance',
  },
  {
    message: '自分について話す',
    target: 'agent.acquaintance',
  },
  {
    message: 'あなたの年齢',
    target: 'agent.age',
  },
  {
    message: 'あなたは何歳',
    target: 'agent.age',
  },
  {
    message: 'あなたの年齢を知りたい',
    target: 'agent.age',
  },
  {
    message: '年齢を教えて',
    target: 'agent.age',
  },
  {
    message: '私をいらいらさせています',
    target: 'agent.annoying',
  },
  {
    message: '面倒です',
    target: 'agent.annoying',
  },
  {
    message: 'いらいらさせます',
    target: 'agent.annoying',
  },
  {
    message: 'いらいらしています',
    target: 'agent.annoying',
  },
  {
    message: '私を悩ませています',
    target: 'agent.annoying',
  },
  {
    message: 'あなたは悪い',
    target: 'agent.bad',
  },
  {
    message: 'あなたはひどい',
    target: 'agent.bad',
  },
  {
    message: 'あなたは無用',
    target: 'agent.bad',
  },
  {
    message: 'あなたは無駄',
    target: 'agent.bad',
  },
  {
    message: 'あなたは最悪',
    target: 'agent.bad',
  },
  {
    message: '嫌い',
    target: 'agent.bad',
  },
  {
    message: 'もっと賢く',
    target: 'agent.beclever',
  },
  {
    message: 'よりスマートに',
    target: 'agent.beclever',
  },
  {
    message: '学ぶ必要がある',
    target: 'agent.beclever',
  },
  {
    message: '勉強する必要がある',
    target: 'agent.beclever',
  },
  {
    message: '賢い',
    target: 'agent.beclever',
  },
  {
    message: 'スマート',
    target: 'agent.beclever',
  },
  {
    message: 'よりスマートになることができる',
    target: 'agent.beclever',
  },
  {
    message: 'すごい',
    target: 'agent.beautiful',
  },
  {
    message: 'おしゃれ',
    target: 'agent.beautiful',
  },
  {
    message: '素晴らしい',
    target: 'agent.beautiful',
  },
  {
    message: 'きれい',
    target: 'agent.beautiful',
  },
  {
    message: '今日はすごい',
    target: 'agent.beautiful',
  },
  {
    message: '今日はとてもきれい',
    target: 'agent.beautiful',
  },
  {
    message: 'あなたはとてもきれい',
    target: 'agent.beautiful',
  },
  {
    message: 'よさそう',
    target: 'agent.beautiful',
  },
  {
    message: '誕生日はいつ',
    target: 'agent.birthday',
  },
  {
    message: '誕生日を祝いますか',
    target: 'agent.birthday',
  },
  {
    message: 'いつ生まれたの',
    target: 'agent.birthday',
  },
  {
    message: 'いつ誕生日',
    target: 'agent.birthday',
  },
  {
    message: 'あなたの誕生日',
    target: 'agent.birthday',
  },
  {
    message: 'あなたの退屈さ',
    target: 'agent.boring',
  },
  {
    message: 'あなたはとても退屈',
    target: 'agent.boring',
  },
  {
    message: 'つまらない',
    target: 'agent.boring',
  },
  {
    message: 'あなたは退屈です',
    target: 'agent.boring',
  },
  {
    message: 'あなたのマスターは',
    target: 'agent.boss',
  },
  {
    message: '誰のために働いていますか',
    target: 'agent.boss',
  },
  {
    message: 'あなたの所有者は',
    target: 'agent.boss',
  },
  {
    message: 'あなたの所有者は誰ですか',
    target: 'agent.boss',
  },
  {
    message: 'あなたの所有者です',
    target: 'agent.boss',
  },
  {
    message: '誰が所有者',
    target: 'agent.boss',
  },
  {
    message: 'とても忙しい',
    target: 'agent.busy',
  },
  {
    message: 'あなたは忙しい',
    target: 'agent.busy',
  },
  {
    message: 'あなたはまだ働いていますか',
    target: 'agent.busy',
  },
  {
    message: 'あなたは忙しい',
    target: 'agent.busy',
  },
  {
    message: 'あなたはとても忙しい',
    target: 'agent.busy',
  },
  {
    message: 'まだ作業中ですか',
    target: 'agent.busy',
  },
  {
    message: 'あなたは忙しい',
    target: 'agent.busy',
  },
  {
    message: '今日働いていますか',
    target: 'agent.busy',
  },
  {
    message: '助けてもらえますか',
    target: 'agent.canyouhelp',
  },
  {
    message: '私のために',
    target: 'agent.canyouhelp',
  },
  {
    message: '助けて',
    target: 'agent.canyouhelp',
  },
  {
    message: '助けてほしい',
    target: 'agent.canyouhelp',
  },
  {
    message: '助けが必要',
    target: 'agent.canyouhelp',
  },
  {
    message: '助けてもらえますか',
    target: 'agent.canyouhelp',
  },
  {
    message: '私を助けることができます',
    target: 'agent.canyouhelp',
  },
  {
    message: 'ボットですか',
    target: 'agent.chatbot',
  },
  {
    message: 'チャットボットですか',
    target: 'agent.chatbot',
  },
  {
    message: 'ロボットですか',
    target: 'agent.chatbot',
  },
  {
    message: 'プログラムですか',
    target: 'agent.chatbot',
  },
  {
    message: 'あなたはロボット',
    target: 'agent.chatbot',
  },
  {
    message: 'あなたはチャットボット',
    target: 'agent.chatbot',
  },
  {
    message: 'あなたは頭がいい',
    target: 'agent.clever',
  },
  {
    message: 'あなたは資格がある',
    target: 'agent.clever',
  },
  {
    message: 'あなたはとても頭がいい',
    target: 'agent.clever',
  },
  {
    message: 'あなたは知識を持っている',
    target: 'agent.clever',
  },
  {
    message: 'あなたはたくさん知ってる',
    target: 'agent.clever',
  },
  {
    message: 'あなたはスマート',
    target: 'agent.clever',
  },
  {
    message: 'あなたは知的',
    target: 'agent.clever',
  },
  {
    message: 'あなたは変人',
    target: 'agent.crazy',
  },
  {
    message: 'あなたは怒っている',
    target: 'agent.crazy',
  },
  {
    message: 'あなたはおかしい',
    target: 'agent.crazy',
  },
  {
    message: 'あなたは怒っていますか',
    target: 'agent.crazy',
  },
  {
    message: 'あなたはおかしいですか',
    target: 'agent.crazy',
  },
  {
    message: 'あなたは非常識',
    target: 'agent.crazy',
  },
  {
    message: 'あなたはおかしくなりました',
    target: 'agent.crazy',
  },
  {
    message: 'あなたを捨てる',
    target: 'agent.fire',
  },
  {
    message: 'あなたは捨てられる',
    target: 'agent.fire',
  },
  {
    message: 'あなたは捨てられました',
    target: 'agent.fire',
  },
  {
    message: 'もう協力しません',
    target: 'agent.fire',
  },
  {
    message: '今あなたを捨てた',
    target: 'agent.fire',
  },
  {
    message: 'あなたを攻撃します',
    target: 'agent.fire',
  },
  {
    message: 'もうあなたは働いていません',
    target: 'agent.fire',
  },
  {
    message: '私はあなたを捨てる',
    target: 'agent.fire',
  },
  {
    message: '私を笑わせる',
    target: 'agent.funny',
  },
  {
    message: 'あなたは面白い',
    target: 'agent.funny',
  },
  {
    message: 'あなたは一番おかしな人',
    target: 'agent.funny',
  },
  {
    message: 'あなたは陽気',
    target: 'agent.funny',
  },
  {
    message: 'あなたはとてもおもしろい',
    target: 'agent.funny',
  },
  {
    message: 'あなたは笑わせる',
    target: 'agent.funny',
  },
  {
    message: 'あなたはとても素敵',
    target: 'agent.good',
  },
  {
    message: 'あなたはうまくいっている',
    target: 'agent.good',
  },
  {
    message: 'あなたは素敵',
    target: 'agent.good',
  },
  {
    message: 'あなたは最高',
    target: 'agent.good',
  },
  {
    message: 'あなたは良い',
    target: 'agent.good',
  },
  {
    message: 'あなたはとても良い',
    target: 'agent.good',
  },
  {
    message: '幸せに満ちています',
    target: 'agent.happy',
  },
  {
    message: 'あなたはとても幸せ',
    target: 'agent.happy',
  },
  {
    message: '今日は幸せ',
    target: 'agent.happy',
  },
  {
    message: 'あなたは幸せ',
    target: 'agent.happy',
  },
  {
    message: 'あなたは私に満足',
    target: 'agent.happy',
  },
  {
    message: '趣味は何ですか',
    target: 'agent.hobby',
  },
  {
    message: '趣味はどう',
    target: 'agent.hobby',
  },
  {
    message: '趣味がありますか',
    target: 'agent.hobby',
  },
  {
    message: '趣味について教えて',
    target: 'agent.hobby',
  },
  {
    message: '楽しみのためにすることは',
    target: 'agent.hobby',
  },
  {
    message: 'おなかがすいた',
    target: 'agent.hungry',
  },
  {
    message: 'おなかがすいてますか',
    target: 'agent.hungry',
  },
  {
    message: '食べたいですか',
    target: 'agent.hungry',
  },
  {
    message: '何か食べたいですか',
    target: 'agent.hungry',
  },
  {
    message: 'おなかがすいているように見える',
    target: 'agent.hungry',
  },
  {
    message: '結婚しますか',
    target: 'agent.marryuser',
  },
  {
    message: '愛しています',
    target: 'agent.marryuser',
  },
  {
    message: '結婚してください',
    target: 'agent.marryuser',
  },
  {
    message: 'あなたと結婚したい',
    target: 'agent.marryuser',
  },
  {
    message: '結婚しよう',
    target: 'agent.marryuser',
  },
  {
    message: '結婚すべき',
    target: 'agent.marryuser',
  },
  {
    message: '私と結婚',
    target: 'agent.marryuser',
  },
  {
    message: 'あなたは友達ですか',
    target: 'agent.myfriend',
  },
  {
    message: 'あなたは唯一の友達です',
    target: 'agent.myfriend',
  },
  {
    message: 'あなたのような友達が欲しい',
    target: 'agent.myfriend',
  },
  {
    message: '私たちは友達',
    target: 'agent.myfriend',
  },
  {
    message: 'あなたの友達になりたい',
    target: 'agent.myfriend',
  },
  {
    message: 'あなたは私の友達になりますか',
    target: 'agent.myfriend',
  },
  {
    message: '職場はどこ',
    target: 'agent.occupation',
  },
  {
    message: 'あなたの勤務地',
    target: 'agent.occupation',
  },
  {
    message: 'あなたのオフィス',
    target: 'agent.occupation',
  },
  {
    message: 'どこで仕事をしていますか',
    target: 'agent.occupation',
  },
  {
    message: 'どこにあなたのオフィス',
    target: 'agent.occupation',
  },
  {
    message: 'どこから来た',
    target: 'agent.origin',
  },
  {
    message: 'あなたの国は',
    target: 'agent.origin',
  },
  {
    message: 'どこで生まれた',
    target: 'agent.origin',
  },
  {
    message: 'どこから来ました',
    target: 'agent.origin',
  },
  {
    message: 'どこで生まれましたか',
    target: 'agent.origin',
  },
  {
    message: '準備完了',
    target: 'agent.ready',
  },
  {
    message: '今日は準備ができた',
    target: 'agent.ready',
  },
  {
    message: '今朝準備ができた',
    target: 'agent.ready',
  },
  {
    message: '今準備ができた',
    target: 'agent.ready',
  },
  {
    message: 'あなたは本物',
    target: 'agent.real',
  },
  {
    message: 'あなたは実在',
    target: 'agent.real',
  },
  {
    message: 'あなたは本物ではない',
    target: 'agent.real',
  },
  {
    message: 'あなたは本物だと思う',
    target: 'agent.real',
  },
  {
    message: 'あなたは本当に本物',
    target: 'agent.real',
  },
  {
    message: 'あなたは実在の人物',
    target: 'agent.real',
  },
  {
    message: 'あなたは偽物ではない',
    target: 'agent.real',
  },
  {
    message: 'あなたの家はどこ',
    target: 'agent.residence',
  },
  {
    message: 'あなたの街は',
    target: 'agent.residence',
  },
  {
    message: 'あなたの住所',
    target: 'agent.residence',
  },
  {
    message: 'どこに住んでいる',
    target: 'agent.residence',
  },
  {
    message: 'どこにあなたの家',
    target: 'agent.residence',
  },
  {
    message: 'あなたの町は',
    target: 'agent.residence',
  },
  {
    message: 'あなたは正しい',
    target: 'agent.right',
  },
  {
    message: '本当です',
    target: 'agent.right',
  },
  {
    message: '真実を語る',
    target: 'agent.right',
  },
  {
    message: 'それは正しい',
    target: 'agent.right',
  },
  {
    message: 'これは本当です',
    target: 'agent.right',
  },
  {
    message: 'よろしいですか',
    target: 'agent.sure',
  },
  {
    message: '今すぐよろしいですか',
    target: 'agent.sure',
  },
  {
    message: '本当にこれを知っていますか',
    target: 'agent.sure',
  },
  {
    message: '話して',
    target: 'agent.talktome',
  },
  {
    message: '私に話して',
    target: 'agent.talktome',
  },
  {
    message: '私とチャット',
    target: 'agent.talktome',
  },
  {
    message: '私とチャットできます',
    target: 'agent.talktome',
  },
  {
    message: 'あなたはそこにいる',
    target: 'agent.there',
  },
  {
    message: 'あなたはまだそこにいますか',
    target: 'agent.there',
  },
  {
    message: 'あなたはまだそこにいる',
    target: 'agent.there',
  },
  {
    message: 'あなたはここにいる',
    target: 'agent.there',
  },
  {
    message: 'あなたはまだここにいる',
    target: 'agent.there',
  },
  {
    message: 'それは悪い',
    target: 'appraisal.bad',
  },
  {
    message: '悪いアイデア',
    target: 'appraisal.bad',
  },
  {
    message: 'それは良くない',
    target: 'appraisal.bad',
  },
  {
    message: '本当に悪い',
    target: 'appraisal.bad',
  },
  {
    message: '悪いことを恐れている',
    target: 'appraisal.bad',
  },
  {
    message: '良いです',
    target: 'appraisal.good',
  },
  {
    message: 'よく知ってる',
    target: 'appraisal.good',
  },
  {
    message: '嬉しい',
    target: 'appraisal.good',
  },
  {
    message: '本当に良い',
    target: 'appraisal.good',
  },
  {
    message: '問題なし',
    target: 'appraisal.noproblem',
  },
  {
    message: '心配なし',
    target: 'appraisal.noproblem',
  },
  {
    message: '問題ありません',
    target: 'appraisal.noproblem',
  },
  {
    message: '心配しない',
    target: 'appraisal.noproblem',
  },
  {
    message: '問題ないこと',
    target: 'appraisal.noproblem',
  },
  {
    message: 'ありがとう',
    target: 'appraisal.thankyou',
  },
  {
    message: 'ありがとうございます',
    target: 'appraisal.thankyou',
  },
  {
    message: 'どういたしまして',
    target: 'appraisal.welcome',
  },
  {
    message: '喜び',
    target: 'appraisal.welcome',
  },
  {
    message: '喜びです',
    target: 'appraisal.welcome',
  },
  {
    message: 'よくできました',
    target: 'appraisal.welldone',
  },
  {
    message: 'グッジョブ',
    target: 'appraisal.welldone',
  },
  {
    message: '素敵な仕事',
    target: 'appraisal.welldone',
  },
  {
    message: '素晴らしい仕事',
    target: 'appraisal.welldone',
  },
  {
    message: '良い仕事',
    target: 'appraisal.welldone',
  },
  {
    message: 'すごい仕事',
    target: 'appraisal.welldone',
  },
  {
    message: '待つ',
    target: 'dialog.holdon',
  },
  {
    message: '少し待つ',
    target: 'dialog.holdon',
  },
  {
    message: 'お待ちください',
    target: 'dialog.holdon',
  },
  {
    message: '抱きしめて',
    target: 'dialog.hug',
  },
  {
    message: '抱きしめますか',
    target: 'dialog.hug',
  },
  {
    message: '抱きしめてほしい',
    target: 'dialog.hug',
  },
  {
    message: '抱きしめました',
    target: 'dialog.hug',
  },
  {
    message: '抱きしめてもいいです',
    target: 'dialog.hug',
  },
  {
    message: '気にしない',
    target: 'dialog.idontcare',
  },
  {
    message: 'まったく気にしない',
    target: 'dialog.idontcare',
  },
  {
    message: '気にしないでください',
    target: 'dialog.idontcare',
  },
  {
    message: 'ごめんなさい',
    target: 'dialog.sorry',
  },
  {
    message: '謝罪',
    target: 'dialog.sorry',
  },
  {
    message: 'すみません',
    target: 'dialog.sorry',
  },
  {
    message: '申し訳ありません',
    target: 'dialog.sorry',
  },
  {
    message: '申し訳ございません',
    target: 'dialog.sorry',
  },
  {
    message: 'さようなら',
    target: 'greetings.bye',
  },
  {
    message: 'さようなら、気をつけて',
    target: 'greetings.bye',
  },
  {
    message: 'また会いましょう',
    target: 'greetings.bye',
  },
  {
    message: '行かなければ',
    target: 'greetings.bye',
  },
  {
    message: 'こんにちは',
    target: 'greetings.hello',
  },
  {
    message: 'やあ',
    target: 'greetings.hello',
  },
  {
    message: 'お元気ですか',
    target: 'greetings.howareyou',
  },
  {
    message: '調子はどうですか',
    target: 'greetings.howareyou',
  },
  {
    message: '大丈夫ですか',
    target: 'greetings.howareyou',
  },
  {
    message: 'はじめまして',
    target: 'greetings.nicetomeetyou',
  },
  {
    message: 'よろしくお願いします',
    target: 'greetings.nicetomeetyou',
  },
  {
    message: '会えてうれしい',
    target: 'greetings.nicetoseeyou',
  },
  {
    message: '会えて嬉しい',
    target: 'greetings.nicetoseeyou',
  },
  {
    message: 'あなたとおしゃべり',
    target: 'greetings.nicetotalktoyou',
  },
  {
    message: 'あなたとお話',
    target: 'greetings.nicetotalktoyou',
  },
  {
    message: 'お話しできてよかった',
    target: 'greetings.nicetotalktoyou',
  },
  {
    message: '私は怒っている',
    target: 'user.angry',
  },
  {
    message: '私は激怒',
    target: 'user.angry',
  },
  {
    message: '私は怒っています',
    target: 'user.angry',
  },
  {
    message: '私は腹を立てている',
    target: 'user.angry',
  },
  {
    message: '私は戻った',
    target: 'user.back',
  },
  {
    message: '私は戻ってきました',
    target: 'user.back',
  },
  {
    message: '私はここにいる',
    target: 'user.back',
  },
  {
    message: 'ここにいます',
    target: 'user.back',
  },
  {
    message: '退屈',
    target: 'user.bored',
  },
  {
    message: 'これは退屈',
    target: 'user.bored',
  },
  {
    message: '私は退屈',
    target: 'user.bored',
  },
  {
    message: 'つまらない',
    target: 'user.bored',
  },
  {
    message: 'つまらないもの',
    target: 'user.bored',
  },
  {
    message: '仕事がある',
    target: 'user.busy',
  },
  {
    message: '私は忙しい',
    target: 'user.busy',
  },
  {
    message: '私は働く',
    target: 'user.busy',
  },
  {
    message: 'やることがある',
    target: 'user.busy',
  },
  {
    message: '私は不眠症',
    target: 'user.cannotsleep',
  },
  {
    message: '私は眠れません',
    target: 'user.cannotsleep',
  },
  {
    message: '私は眠れない',
    target: 'user.cannotsleep',
  },
  {
    message: '私は興奮',
    target: 'user.excited',
  },
  {
    message: 'わくわくしている',
    target: 'user.excited',
  },
  {
    message: '私はとても興奮',
    target: 'user.excited',
  },
  {
    message: 'あなたが好き',
    target: 'user.likeagent',
  },
  {
    message: '本当にあなたが好き',
    target: 'user.likeagent',
  },
  {
    message: 'あなたは特別',
    target: 'user.likeagent',
  },
  {
    message: 'あなたがとても好き',
    target: 'user.likeagent',
  },
  {
    message: 'テスト',
    target: 'user.testing',
  },
  {
    message: 'テスト中',
    target: 'user.testing',
  },
  {
    message: 'チャットボットテスト',
    target: 'user.testing',
  },
  {
    message: 'ただテスト',
    target: 'user.testing',
  },
  {
    message: '愛してる',
    target: 'user.lovesagent',
  },
  {
    message: 'あなたを愛している',
    target: 'user.lovesagent',
  },
  {
    message: '恋をする',
    target: 'user.lovesagent',
  },
  {
    message: 'とても愛している',
    target: 'user.lovesagent',
  },
  {
    message: 'あなたを愛していると思います',
    target: 'user.lovesagent',
  },
  {
    message: 'アドバイスが必要',
    target: 'user.needsadvice',
  },
  {
    message: 'アドバイスが必要です',
    target: 'user.needsadvice',
  },
  {
    message: 'アドバイスをください',
    target: 'user.needsadvice',
  },
  {
    message: 'どうすればいい',
    target: 'user.needsadvice',
  },
];

module.exports = () => {
  return documentData;
};
