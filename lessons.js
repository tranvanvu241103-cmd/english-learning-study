const lessonInfo = {
  "Lesson 1": {
    title: "Nuanced Opinions",
    level: "B2",
    goal: "Express balanced opinions without sounding too simple or too extreme.",
    output: "Give a 60-second opinion using evidence, contrast, and a careful conclusion.",
    topics: ["Opinion", "Argument", "Nuance"]
  },
  "Lesson 2": {
    title: "Professional Communication",
    level: "B2-C1",
    goal: "Communicate disagreement, priorities, and constraints politely at work.",
    output: "Write a short professional response that is clear, tactful, and specific.",
    topics: ["Work", "Email", "Meetings"]
  },
  "Lesson 3": {
    title: "Academic Cause and Effect",
    level: "C1",
    goal: "Explain complex causes, consequences, and uncertainty in academic English.",
    output: "Produce a short paragraph explaining a trend with hedging and cause-effect language.",
    topics: ["Academic", "Causality", "Evidence"]
  }
};

const baseItems = [
  {lesson:"Lesson 1",topic:"Opinion",english:"nuance",vi:"sắc thái, điểm tinh tế",example:"The issue has more nuance than it first appears.",exampleVi:"Vấn đề này có nhiều sắc thái hơn vẻ ngoài ban đầu.",approx:"IPA: /ˈnuːɑːns/ or /ˈnjuːɑːns/ | gần đúng: NU-ans / NYU-ans",explain:"Use this when an idea is not simply right or wrong.",usage:"Native use: very common in educated conversation, work, media, and essays.",visual:"🧩"},
  {lesson:"Lesson 1",topic:"Argument",english:"to challenge an assumption",vi:"chất vấn một giả định",example:"We need to challenge the assumption that cheaper is always better.",exampleVi:"Chúng ta cần chất vấn giả định rằng rẻ hơn luôn tốt hơn.",approx:"IPA: /ˈtʃælɪndʒ ən əˈsʌmpʃən/ | gần đúng: CHA-linj ən ə-SUMP-shən",explain:"A strong phrase for critical thinking and debate.",usage:"Native use: natural in meetings, essays, analysis, and serious discussion.",visual:"🔎"},
  {lesson:"Lesson 1",topic:"Opinion",english:"compelling",vi:"thuyết phục, đáng chú ý",example:"She made a compelling argument for remote work.",exampleVi:"Cô ấy đưa ra lập luận thuyết phục về làm việc từ xa.",approx:"IPA: /kəmˈpelɪŋ/ | gần đúng: kəm-PEL-ing",explain:"Stronger than interesting; it suggests something persuades you.",usage:"Native use: common in formal and semi-formal speech, writing, reviews, and presentations.",visual:"🎯"},
  {lesson:"Lesson 1",topic:"Nuance",english:"on balance",vi:"xét tổng thể",example:"On balance, the benefits outweigh the risks.",exampleVi:"Xét tổng thể, lợi ích lớn hơn rủi ro.",approx:"IPA: /ɒn ˈbæləns/ or /ɑːn ˈbæləns/ | gần đúng: on BAL-əns",explain:"Use this before a balanced conclusion.",usage:"Native use: common in essays, reports, commentary, and careful opinions.",visual:"⚖️"},
  {lesson:"Lesson 1",topic:"Argument",english:"counterargument",vi:"lập luận phản biện",example:"A strong essay considers at least one counterargument.",exampleVi:"Một bài luận tốt cân nhắc ít nhất một lập luận phản biện.",approx:"IPA: /ˈkaʊntərˌɑːrɡjəmənt/ | gần đúng: KOUN-tər-AR-gyə-mənt",explain:"The argument against your main point.",usage:"Native use: common in academic writing and debate; less common in casual chat.",visual:"↔️"},
  {lesson:"Lesson 1",topic:"Nuance",english:"to qualify a statement",vi:"giới hạn / làm mềm một nhận định",example:"Let me qualify that statement before it sounds too broad.",exampleVi:"Để tôi làm rõ giới hạn của nhận định đó trước khi nó nghe quá rộng.",approx:"IPA: /ˈkwɑːlɪfaɪ ə ˈsteɪtmənt/ | gần đúng: KWA-li-fai ə STAYT-mənt",explain:"Use this when you make a statement more precise.",usage:"Native use: natural in formal discussion, teaching, law, academic and professional contexts.",visual:"✏️"},
  {lesson:"Lesson 1",topic:"Opinion",english:"perspective",vi:"góc nhìn, quan điểm",example:"The debate changes when we consider the issue from a different perspective.",exampleVi:"Cuộc tranh luận thay đổi khi chúng ta xem xét vấn đề từ một góc nhìn khác.",approx:"IPA: /pərˈspektɪv/ | gần đúng: pər-SPEK-tiv",explain:"Use this to describe a particular way of viewing an issue.",usage:"Native use: very common in conversation, essays, meetings, and analysis.",visual:"👁️"},
  {lesson:"Lesson 1",topic:"Argument",english:"to substantiate a claim",vi:"đưa bằng chứng chứng minh một nhận định",example:"The author uses recent data to substantiate the claim.",exampleVi:"Tác giả sử dụng dữ liệu gần đây để chứng minh nhận định.",approx:"IPA: /səbˈstænʃieɪt ə kleɪm/ | gần đúng: səb-STAN-shi-ayt ə KLAYM",explain:"A formal phrase for supporting a claim with evidence.",usage:"Native use: common in academic, legal, and professional writing.",visual:"📑"},
  {lesson:"Lesson 1",topic:"Nuance",english:"arguably",vi:"có thể cho rằng",example:"This is arguably the most practical option available.",exampleVi:"Có thể cho rằng đây là lựa chọn thực tế nhất hiện có.",approx:"IPA: /ˈɑːrɡjuəbli/ | gần đúng: AR-gyu-ə-bli",explain:"Use this to present a defensible opinion without making it absolute.",usage:"Native use: common in essays, reviews, journalism, and careful discussion.",visual:"💭"},
  {lesson:"Lesson 1",topic:"Opinion",english:"to outweigh",vi:"quan trọng hơn, lớn hơn",example:"In this case, the long-term benefits outweigh the short-term costs.",exampleVi:"Trong trường hợp này, lợi ích dài hạn lớn hơn chi phí ngắn hạn.",approx:"IPA: /ˌaʊtˈweɪ/ | gần đúng: out-WAY",explain:"Use this when one advantage, risk, or factor is greater than another.",usage:"Native use: very common in comparisons, decisions, reports, and arguments.",visual:"⚖️"},

  {lesson:"Lesson 2",topic:"Work",english:"constraint",vi:"hạn chế, ràng buộc",example:"Budget is the main constraint this quarter.",exampleVi:"Ngân sách là hạn chế chính trong quý này.",approx:"IPA: /kənˈstreɪnt/ | gần đúng: kən-STRAYNT",explain:"A professional word for a limit you must work within.",usage:"Native use: very common in business, projects, engineering, and planning.",visual:"⛓️"},
  {lesson:"Lesson 2",topic:"Email",english:"to circle back",vi:"quay lại trao đổi sau",example:"I'll circle back once I have the updated numbers.",exampleVi:"Tôi sẽ quay lại trao đổi khi có số liệu cập nhật.",approx:"IPA: /ˈsɜːrkəl bæk/ | gần đúng: SUR-kəl bak",explain:"Common in work emails and meetings.",usage:"Native use: very common in offices; slightly corporate, but absolutely real.",visual:"🔁"},
  {lesson:"Lesson 2",topic:"Meetings",english:"alignment",vi:"sự thống nhất / đồng thuận",example:"Before we move forward, we need alignment on the timeline.",exampleVi:"Trước khi tiếp tục, chúng ta cần thống nhất về thời gian.",approx:"IPA: /əˈlaɪnmənt/ | gần đúng: ə-LAIN-mənt",explain:"Shared agreement about goals or decisions.",usage:"Native use: common in workplaces and teams; less common in everyday family conversation.",visual:"🤝"},
  {lesson:"Lesson 2",topic:"Work",english:"trade-off",vi:"sự đánh đổi",example:"There is a trade-off between speed and accuracy.",exampleVi:"Có sự đánh đổi giữa tốc độ và độ chính xác.",approx:"IPA: /ˈtreɪd ɔːf/ | gần đúng: TRAYD-awf",explain:"A choice where gaining one thing means losing another.",usage:"Native use: very common in normal educated speech, business, tech, and decision-making.",visual:"⚖️"},
  {lesson:"Lesson 2",topic:"Email",english:"pragmatic",vi:"thực tế, thực dụng theo nghĩa tích cực",example:"A pragmatic solution would be to launch a smaller version first.",exampleVi:"Một giải pháp thực tế là ra mắt phiên bản nhỏ hơn trước.",approx:"IPA: /præɡˈmætɪk/ | gần đúng: prag-MAT-ik",explain:"Focused on what works in reality.",usage:"Native use: common in professional and serious conversation; not slang.",visual:"🛠️"},
  {lesson:"Lesson 2",topic:"Meetings",english:"to push back",vi:"phản biện, không đồng ý một cách lịch sự",example:"I would push back on the idea that this can be done in one week.",exampleVi:"Tôi sẽ phản biện ý tưởng rằng việc này có thể xong trong một tuần.",approx:"IPA: /pʊʃ bæk/ | gần đúng: push bak",explain:"A professional way to disagree.",usage:"Native use: very common in work discussion; natural but a bit informal-professional.",visual:"💬"},
  {lesson:"Lesson 2",topic:"Meetings",english:"action item",vi:"đầu việc cần thực hiện",example:"Let's assign an owner to each action item before the meeting ends.",exampleVi:"Hãy chỉ định người phụ trách cho từng đầu việc trước khi cuộc họp kết thúc.",approx:"IPA: /ˈækʃən ˌaɪtəm/ | gần đúng: AK-shən AI-təm",explain:"A specific task agreed upon during a meeting.",usage:"Native use: extremely common in meetings, project work, and follow-up emails.",visual:"✅"},
  {lesson:"Lesson 2",topic:"Email",english:"to follow up",vi:"theo dõi, liên hệ lại",example:"I'll follow up with the client tomorrow morning.",exampleVi:"Tôi sẽ liên hệ lại với khách hàng vào sáng mai.",approx:"IPA: /ˈfɑːloʊ ʌp/ | gần đúng: FA-loh up",explain:"Use this when taking further action after an earlier conversation.",usage:"Native use: essential in workplace emails and everyday professional communication.",visual:"📨"},
  {lesson:"Lesson 2",topic:"Work",english:"feasible",vi:"khả thi",example:"The revised schedule is demanding but feasible.",exampleVi:"Lịch trình điều chỉnh khá nặng nhưng vẫn khả thi.",approx:"IPA: /ˈfiːzəbəl/ | gần đúng: FEE-zə-bəl",explain:"Possible and practical to achieve.",usage:"Native use: common in planning, proposals, engineering, and management.",visual:"📅"},
  {lesson:"Lesson 2",topic:"Meetings",english:"to reach a consensus",vi:"đạt được sự đồng thuận",example:"The team reached a consensus after discussing the main risks.",exampleVi:"Nhóm đã đạt được sự đồng thuận sau khi thảo luận các rủi ro chính.",approx:"IPA: /riːtʃ ə kənˈsensəs/ | gần đúng: reech ə kən-SEN-səs",explain:"Use this when a group arrives at a shared decision.",usage:"Native use: common in meetings, negotiation, policy, and group decisions.",visual:"🤝"},

  {lesson:"Lesson 3",topic:"Academic",english:"underlying factor",vi:"yếu tố nền tảng",example:"One underlying factor is unequal access to reliable data.",exampleVi:"Một yếu tố nền tảng là khả năng tiếp cận dữ liệu đáng tin cậy không đồng đều.",approx:"IPA: /ˌʌndərˈlaɪɪŋ ˈfæktər/ | gần đúng: un-dər-LAI-ing FAK-tər",explain:"A deeper cause behind a visible problem.",usage:"Native use: common in reports, news analysis, academic writing, and serious discussion.",visual:"🧱"},
  {lesson:"Lesson 3",topic:"Causality",english:"to exacerbate",vi:"làm trầm trọng thêm",example:"Poor planning can exacerbate existing inequalities.",exampleVi:"Việc lập kế hoạch kém có thể làm trầm trọng thêm bất bình đẳng hiện có.",approx:"IPA: /ɪɡˈzæsərbeɪt/ | gần đúng: ig-ZAS-ər-bayt",explain:"A C1 verb meaning to make a problem worse.",usage:"Native use: real but formal; common in news, policy, medicine, academic writing.",visual:"📈"},
  {lesson:"Lesson 3",topic:"Evidence",english:"tentative",vi:"mang tính tạm thời / chưa chắc chắn",example:"The findings are tentative and require further research.",exampleVi:"Các phát hiện còn mang tính tạm thời và cần nghiên cứu thêm.",approx:"IPA: /ˈtentətɪv/ | gần đúng: TEN-tə-tiv",explain:"Useful for academic caution and hedging.",usage:"Native use: common in academic/professional contexts; not usually casual.",visual:"🧪"},
  {lesson:"Lesson 3",topic:"Academic",english:"to account for",vi:"giải thích / tính đến",example:"The model fails to account for regional differences.",exampleVi:"Mô hình không tính đến sự khác biệt vùng miền.",approx:"IPA: /əˈkaʊnt fɔːr/ | gần đúng: ə-KOUNT for",explain:"Use this when explaining variables or exceptions.",usage:"Native use: very common in academic, business, finance, and everyday explanations.",visual:"📊"},
  {lesson:"Lesson 3",topic:"Causality",english:"knock-on effect",vi:"tác động dây chuyền",example:"A delay in funding can have knock-on effects across the project.",exampleVi:"Sự chậm trễ trong tài trợ có thể tạo tác động dây chuyền trên toàn dự án.",approx:"IPA: /ˈnɑːk ɑːn ɪˌfekt/ | gần đúng: NOK-on i-FEKT",explain:"A secondary effect caused by an earlier event.",usage:"Native use: common in British/Commonwealth English; Americans also understand it, but may say ripple effect.",visual:"🔗"},
  {lesson:"Lesson 3",topic:"Evidence",english:"robust evidence",vi:"bằng chứng vững chắc",example:"Policy decisions should be based on robust evidence.",exampleVi:"Quyết định chính sách nên dựa trên bằng chứng vững chắc.",approx:"IPA: /roʊˈbʌst ˈevɪdəns/ | gần đúng: roh-BUST EV-i-dəns",explain:"Evidence that is strong, reliable, and hard to dismiss.",usage:"Native use: common in research, policy, business cases, and formal argument.",visual:"🧾"},
  {lesson:"Lesson 3",topic:"Causality",english:"correlation",vi:"mối tương quan",example:"The study found a correlation between sleep quality and academic performance.",exampleVi:"Nghiên cứu tìm thấy mối tương quan giữa chất lượng giấc ngủ và kết quả học tập.",approx:"IPA: /ˌkɔːrəˈleɪʃən/ | gần đúng: kor-ə-LAY-shən",explain:"A relationship between two variables that does not necessarily prove causation.",usage:"Native use: common in research, statistics, media analysis, and data discussions.",visual:"📈"},
  {lesson:"Lesson 3",topic:"Evidence",english:"empirical",vi:"dựa trên quan sát hoặc thực nghiệm",example:"The theory is supported by empirical research.",exampleVi:"Lý thuyết được hỗ trợ bởi nghiên cứu thực nghiệm.",approx:"IPA: /ɪmˈpɪrɪkəl/ | gần đúng: im-PEER-i-kəl",explain:"Based on observation, measurement, or experiments rather than theory alone.",usage:"Native use: common in academic research and formal evidence-based discussion.",visual:"🔬"},
  {lesson:"Lesson 3",topic:"Academic",english:"to infer",vi:"suy ra, suy luận",example:"We cannot infer causation from this data alone.",exampleVi:"Chúng ta không thể suy ra quan hệ nhân quả chỉ từ dữ liệu này.",approx:"IPA: /ɪnˈfɜːr/ | gần đúng: in-FUR",explain:"To form a conclusion from available evidence.",usage:"Native use: common in academic writing, analysis, logic, and careful discussion.",visual:"🧠"},
  {lesson:"Lesson 3",topic:"Evidence",english:"conclusive",vi:"mang tính kết luận, thuyết phục chắc chắn",example:"The available evidence is informative but not conclusive.",exampleVi:"Bằng chứng hiện có cung cấp nhiều thông tin nhưng chưa đủ để kết luận chắc chắn.",approx:"IPA: /kənˈkluːsɪv/ | gần đúng: kən-KLOO-siv",explain:"Strong enough to settle a question or prove a point.",usage:"Native use: common in research, investigations, medicine, and formal arguments.",visual:"🔎"}
];

const lesson4Pronunciation = {
  "change my mindset":"IPA: /tʃeɪndʒ maɪ ˈmaɪndˌset/ | stress: CHANGE my MIND-set",
  "face challenges":"IPA: /feɪs ˈtʃælɪndʒɪz/ | stress: face CHAL-len-ges",
  "improvement takes time":"IPA: /ɪmˈpruːvmənt teɪks taɪm/ | stress: im-PROVE-ment takes TIME",
  "little by little":"IPA: /ˈlɪtəl baɪ ˈlɪtəl/ | stress: LIT-tle by LIT-tle",
  "focus on progress":"IPA: /ˈfoʊkəs ɑːn ˈprɑːɡres/ | stress: FO-cus on PRO-gress",
  "give confidence":"IPA: /ɡɪv ˈkɑːnfɪdəns/ | stress: give CON-fi-dence",
  "personal growth":"IPA: /ˈpɝːsənəl ɡroʊθ/ | stress: PER-son-al GROWTH",
  "lose weight":"IPA: /luːz weɪt/ | final sound: lose /z/, not /s/",
  "mental strength":"IPA: /ˈmentəl streŋθ/ | stress: MEN-tal STRENGTH",
  "self-discipline":"IPA: /ˌself ˈdɪsəplɪn/ | stress: self-DIS-ci-pline",
  "deal with difficulties":"IPA: /diːl wɪð ˈdɪfɪkəltiz/ | stress: deal with DIF-fi-cul-ties",
  "be patient":"IPA: /biː ˈpeɪʃənt/ | stress: be PA-tient",
  "everyday life":"IPA: /ˈevrideɪ laɪf/ | stress: EV-ery-day LIFE",
  "not only for athletes":"IPA: /nɑːt ˈoʊnli fər ˈæθliːts/ | stress: not ON-ly for ATH-letes",
  "psychological reaction":"IPA: /ˌsaɪkəˈlɑːdʒɪkəl riˈækʃən/ | stress: psycho-LO-gi-cal re-AC-tion",
  "accept responsibility":"IPA: /əkˈsept rɪˌspɑːnsəˈbɪləti/ | stress: ac-CEPT responsi-BIL-i-ty",
  "protect their self-image":"IPA: /prəˈtekt ðer ˌself ˈɪmɪdʒ/ | stress: pro-TECT their self-IM-age",
  "point fingers at":"IPA: /pɔɪnt ˈfɪŋɡərz æt/ | stress: point FIN-gers at",
  "learn from their mistakes":"IPA: /lɝːn frəm ðer mɪˈsteɪks/ | stress: learn from their mis-TAKES",
  "make better decisions":"IPA: /meɪk ˈbetər dɪˈsɪʒənz/ | stress: make BET-ter de-CI-sions",
  "depend on":"IPA: /dɪˈpend ɑːn/ | stress: de-PEND on",
  "daily habits":"IPA: /ˈdeɪli ˈhæbɪts/ | stress: DAI-ly HAB-its",
  "immediate results":"IPA: /ɪˈmiːdiət rɪˈzʌlts/ | stress: im-ME-di-ate re-SULTS",
  "add up over time":"IPA: /æd ʌp ˈoʊvər taɪm/ | link: add-up-over TIME",
  "lead to success":"IPA: /liːd tə səkˈses/ | stress: lead to suc-CESS",
  "study consistently":"IPA: /ˈstʌdi kənˈsɪstəntli/ | stress: STU-dy con-SIS-tent-ly",
  "current habits":"IPA: /ˈkɝːənt ˈhæbɪts/ | stress: CUR-rent HAB-its",
  "academic achievement":"IPA: /ˌækəˈdemɪk əˈtʃiːvmənt/ | stress: aca-DEM-ic a-CHIEVE-ment",
  "financial success":"IPA: /faɪˈnænʃəl səkˈses/ | stress: fi-NAN-cial suc-CESS",
  "theoretical knowledge":"IPA: /ˌθiːəˈretɪkəl ˈnɑːlɪdʒ/ | stress: theo-RET-i-cal KNOW-ledge",
  "problem-solving skills":"IPA: /ˈprɑːbləm ˌsɑːlvɪŋ skɪlz/ | stress: PROB-lem-SOLV-ing SKILLS",
  "market needs":"IPA: /ˈmɑːrkɪt niːdz/ | stress: MAR-ket NEEDS",
  "real-world experience":"IPA: /ˌriːəl ˈwɝːld ɪkˈspɪriəns/ | stress: real-WORLD ex-PE-ri-ence",
  "create value for others":"IPA: /kriˈeɪt ˈvæljuː fər ˈʌðərz/ | stress: cre-ATE VAL-ue for OTH-ers"
};

const lesson4Items = [
  ["Mindset","change my mindset","thay đổi tư duy của tôi","I had to change my mindset before I could make lasting progress.","Tôi phải thay đổi tư duy trước khi có thể tiến bộ lâu dài.","A2-B1 phrase for adopting a new way of thinking.","🧠"],
  ["Mindset","face challenges","đối mặt với thử thách","A growth mindset helps us face challenges with confidence.","Tư duy phát triển giúp chúng ta tự tin đối mặt với thử thách.","Common collocation: face a challenge, problem, or difficulty.","⛰️"],
  ["Progress","improvement takes time","sự tiến bộ cần thời gian","Remember that improvement takes time, so do not give up too early.","Hãy nhớ rằng sự tiến bộ cần thời gian, vì vậy đừng bỏ cuộc quá sớm.","A natural reminder used when progress is gradual.","⏳"],
  ["Progress","little by little","từng chút một","Little by little, her English became more fluent.","Từng chút một, tiếng Anh của cô ấy trở nên trôi chảy hơn.","An adverbial phrase meaning gradually.","🌱"],
  ["Progress","focus on progress","tập trung vào sự tiến bộ","Focus on progress instead of comparing yourself with others.","Hãy tập trung vào sự tiến bộ thay vì so sánh bản thân với người khác.","Use focus on followed by a noun or gerund.","🎯"],
  ["Confidence","give confidence","mang lại sự tự tin","Finishing small tasks can give you confidence.","Hoàn thành những nhiệm vụ nhỏ có thể mang lại cho bạn sự tự tin.","Pattern: give someone confidence.","💪"],
  ["Growth","personal growth","sự phát triển bản thân","Reading widely can support both professional and personal growth.","Đọc nhiều có thể hỗ trợ cả sự phát triển nghề nghiệp lẫn bản thân.","Common in education, coaching, and self-development.","🌿"],

  ["Discipline","lose weight","giảm cân","Regular exercise can help people lose weight safely.","Tập thể dục đều đặn có thể giúp mọi người giảm cân an toàn.","Lose weight means become lighter; do not say reduce weight for people.","⚖️"],
  ["Discipline","mental strength","sức mạnh tinh thần","Dealing with setbacks requires patience and mental strength.","Đối mặt với thất bại đòi hỏi sự kiên nhẫn và sức mạnh tinh thần.","The ability to remain calm, determined, and resilient.","🛡️"],
  ["Discipline","self-discipline","tính kỷ luật","Self-discipline matters more than short bursts of motivation.","Tính kỷ luật quan trọng hơn những đợt động lực ngắn ngủi.","The ability to make yourself do what is necessary.","📋"],
  ["Challenges","deal with difficulties","đối mặt và xử lý khó khăn","Good problem-solving skills help us deal with difficulties.","Kỹ năng giải quyết vấn đề tốt giúp chúng ta xử lý khó khăn.","Deal with means take action to manage a situation.","🧰"],
  ["Discipline","be patient","kiên nhẫn","Be patient with yourself while learning a new skill.","Hãy kiên nhẫn với bản thân khi học một kỹ năng mới.","Pattern: be patient with someone or something.","🕰️"],
  ["Life","everyday life","cuộc sống hằng ngày","These habits are useful in everyday life, not only at work.","Những thói quen này hữu ích trong cuộc sống hằng ngày, không chỉ ở nơi làm việc.","Everyday is an adjective; every day is an adverbial phrase.","🏠"],
  ["Life","not only for athletes","không chỉ dành cho vận động viên","Mental strength is not only for athletes; everyone needs it.","Sức mạnh tinh thần không chỉ dành cho vận động viên; ai cũng cần nó.","Use not only to broaden or contrast an idea.","🏃"],

  ["Responsibility","psychological reaction","phản ứng tâm lý","Blaming others can be a psychological reaction to failure.","Đổ lỗi cho người khác có thể là một phản ứng tâm lý trước thất bại.","A formal phrase for a response produced by thoughts and emotions.","💭"],
  ["Responsibility","accept responsibility","chấp nhận trách nhiệm","Strong leaders accept responsibility for their decisions.","Những nhà lãnh đạo giỏi chấp nhận trách nhiệm về quyết định của mình.","Pattern: accept responsibility for something.","🤝"],
  ["Responsibility","protect their self-image","bảo vệ hình ảnh bản thân","Some people make excuses to protect their self-image.","Một số người viện cớ để bảo vệ hình ảnh bản thân.","Self-image is the way people see themselves.","🪞"],
  ["Responsibility","point fingers at","đổ lỗi cho","It is easy to point fingers at others when a plan fails.","Thật dễ đổ lỗi cho người khác khi một kế hoạch thất bại.","An informal idiom meaning blame someone.","👉"],
  ["Growth","learn from their mistakes","học từ sai lầm của mình","Successful people learn from their mistakes instead of hiding them.","Người thành công học từ sai lầm của mình thay vì che giấu chúng.","Pattern: learn from a mistake, experience, or person.","📖"],
  ["Decisions","make better decisions","đưa ra quyết định tốt hơn","Reflection helps us make better decisions in the future.","Sự suy ngẫm giúp chúng ta đưa ra quyết định tốt hơn trong tương lai.","Use make, not do, with decisions.","🧭"],

  ["Habits","depend on","phụ thuộc vào","Long-term results depend on what you do consistently.","Kết quả dài hạn phụ thuộc vào những gì bạn làm đều đặn.","Pattern: depend on a noun, pronoun, or gerund.","🔗"],
  ["Habits","daily habits","thói quen hằng ngày","Your daily habits shape your future more than occasional effort.","Thói quen hằng ngày định hình tương lai của bạn nhiều hơn nỗ lực thỉnh thoảng.","A frequent collocation in health and self-development.","📆"],
  ["Habits","immediate results","kết quả tức thì","People often quit because they expect immediate results.","Mọi người thường bỏ cuộc vì họ mong đợi kết quả tức thì.","Immediate means happening without delay.","⚡"],
  ["Habits","add up over time","tích lũy theo thời gian","Small improvements add up over time.","Những cải thiện nhỏ sẽ tích lũy theo thời gian.","A phrasal verb meaning gradually produce a significant total.","➕"],
  ["Success","lead to success","dẫn đến thành công","Consistent effort is more likely to lead to success.","Nỗ lực đều đặn có nhiều khả năng dẫn đến thành công.","Pattern: lead to followed by a noun or gerund.","🏆"],
  ["Study","study consistently","học tập đều đặn","You will remember more if you study consistently.","Bạn sẽ nhớ nhiều hơn nếu học tập đều đặn.","Consistently means in a regular and reliable way.","📚"],
  ["Habits","current habits","thói quen hiện tại","Examine your current habits before setting a new goal.","Hãy xem xét thói quen hiện tại trước khi đặt mục tiêu mới.","Current means existing or happening now.","🔍"],

  ["Education","academic achievement","thành tích học tập","Academic achievement can open doors, but it is not the only measure of ability.","Thành tích học tập có thể mở ra cơ hội, nhưng không phải thước đo duy nhất của năng lực.","Formal phrase for success in school or university.","🎓"],
  ["Success","financial success","thành công về tài chính","Financial success does not automatically create a meaningful life.","Thành công về tài chính không tự động tạo nên một cuộc sống ý nghĩa.","Success related to income, wealth, or financial stability.","💰"],
  ["Education","theoretical knowledge","kiến thức lý thuyết","Theoretical knowledge is useful, but it must be applied in practice.","Kiến thức lý thuyết hữu ích, nhưng phải được áp dụng vào thực tế.","Knowledge of principles and ideas rather than direct practice.","📘"],
  ["Skills","problem-solving skills","kỹ năng giải quyết vấn đề","Employers value candidates with strong problem-solving skills.","Nhà tuyển dụng coi trọng ứng viên có kỹ năng giải quyết vấn đề tốt.","Usually plural when referring to a general ability.","🧩"],
  ["Career","market needs","nhu cầu thị trường","Training programs should respond to changing market needs.","Các chương trình đào tạo nên đáp ứng nhu cầu thị trường đang thay đổi.","What customers, employers, or an economy currently require.","📊"],
  ["Experience","real-world experience","kinh nghiệm thực tế","Internships provide real-world experience that classrooms cannot fully offer.","Thực tập mang lại kinh nghiệm thực tế mà lớp học không thể cung cấp đầy đủ.","Experience gained in practical situations outside theory.","🌍"],
  ["Purpose","create value for others","tạo ra giá trị cho người khác","A sustainable career should create value for others as well as for you.","Một sự nghiệp bền vững nên tạo ra giá trị cho người khác cũng như cho bạn.","A useful phrase for business, work, and personal purpose.","✨"]
].map(([topic,english,vi,example,exampleVi,explain,visual])=>({
  lesson:"Lesson 4",
  topic,
  english,
  vi,
  example,
  exampleVi,
  approx:lesson4Pronunciation[english],
  explain,
  usage:"Natural in everyday, educational, or professional English when the context fits.",
  visual
}));

const lesson5Pronunciation = {
  "export control directive":"US IPA: /ˈekspɔːrt kənˈtroʊl dəˈrektɪv/ | gần đúng: EK-sport kən-TROHL də-REK-tiv",
  "regulated industries":"US IPA: /ˈreɡjəleɪtɪd ˈɪndəstriz/ | gần đúng: REG-yə-lay-tid IN-də-streez",
  "AI ecosystem":"US IPA: /ˌeɪ ˈaɪ ˈiːkoʊˌsɪstəm/ | gần đúng: ay-AI EE-koh-sis-təm",
  "strategic partnership":"US IPA: /strəˈtiːdʒɪk ˈpɑːrtnərʃɪp/ | gần đúng: strə-TEE-jik PART-nər-ship",
  "fellowship program":"US IPA: /ˈfeloʊʃɪp ˈproʊɡræm/ | gần đúng: FEL-oh-ship PROH-gram",
  "early-career professionals":"US IPA: /ˈɝːli kəˈrɪr prəˈfeʃənəlz/ | gần đúng: ER-lee kə-REER prə-FESH-ə-nəlz",
  "policy proposal":"US IPA: /ˈpɑːləsi prəˈpoʊzəl/ | gần đúng: PAH-lə-see prə-POH-zəl",
  "exponential speed":"US IPA: /ˌekspoʊˈnenʃəl spiːd/ | gần đúng: ek-spoh-NEN-shəl speed",
  "institutional readiness":"US IPA: /ˌɪnstəˈtuːʃənəl ˈredinəs/ | gần đúng: in-stə-TOO-shə-nəl RED-ee-nəs",
  "long-running work":"US IPA: /ˌlɔːŋ ˈrʌnɪŋ wɝːk/ | gần đúng: lawng RUN-ing werk",
  "agentic tasks":"US IPA: /eɪˈdʒentɪk tæsks/ | gần đúng: ay-JEN-tik tasks",
  "professional work":"US IPA: /prəˈfeʃənəl wɝːk/ | gần đúng: prə-FESH-ə-nəl werk",
  "partner network":"US IPA: /ˈpɑːrtnər ˈnetwɝːk/ | gần đúng: PART-nər NET-werk",
  "service track":"US IPA: /ˈsɝːvɪs træk/ | gần đúng: SER-vis trak",
  "partner hub":"US IPA: /ˈpɑːrtnər hʌb/ | gần đúng: PART-nər hub",
  "AI-enabled cyber threats":"US IPA: /ˌeɪ ˈaɪ ɪˈneɪbəld ˈsaɪbər θrets/ | gần đúng: ay-AI in-AY-bəld SY-bər threats",
  "threat mapping":"US IPA: /ˈθret ˌmæpɪŋ/ | gần đúng: THRET MAP-ing",
  "public record":"US IPA: /ˈpʌblɪk ˈrekərd/ | gần đúng: PUB-lik REK-ərd",
  "media assets":"US IPA: /ˈmiːdiə ˈæsets/ | gần đúng: MEE-dee-ə AS-ets",
  "press inquiries":"US IPA: /pres ˈɪnkwəriz/ or /pres ˌɪnˈkwaɪriz/ | gần đúng: press IN-kwə-reez / press in-KWY-reez"
};

const lesson5Items = [
  ["AI Policy","export control directive","chỉ thị kiểm soát xuất khẩu","The company responded to an export control directive affecting model access.","Công ty đã phản hồi một chỉ thị kiểm soát xuất khẩu ảnh hưởng đến quyền truy cập mô hình.","A formal government instruction that limits export or access to sensitive technology.","Government / policy term used in AI, chips, and national security news.","GOV"],
  ["Enterprise AI","regulated industries","các ngành được quản lý chặt","Claude is being introduced to regulated industries such as banking and healthcare.","Claude đang được đưa vào các ngành được quản lý chặt như ngân hàng và y tế.","Industries with strict legal, compliance, and safety requirements.","Very common in enterprise AI, finance, healthcare, aviation, and legal contexts.","REG"],
  ["AI Market","AI ecosystem","hệ sinh thái AI","The Seoul office is part of a growing Korean AI ecosystem.","Văn phòng Seoul là một phần của hệ sinh thái AI Hàn Quốc đang phát triển.","The network of companies, researchers, users, partners, and infrastructure around AI.","Common in tech strategy, investment, partnerships, and policy.","AI"],
  ["Business","strategic partnership","quan hệ đối tác chiến lược","Anthropic announced a strategic partnership with several organizations.","Anthropic đã công bố quan hệ đối tác chiến lược với nhiều tổ chức.","A partnership designed to support long-term goals, not just a short project.","Very common in corporate announcements and business development.","BIZ"],
  ["Talent","fellowship program","chương trình học bổng / nghiên cứu sinh","Claude Corps is described as a fellowship program for early-career people.","Claude Corps được mô tả là chương trình fellowship cho người mới vào nghề.","A structured program that supports selected people with training, work, or research opportunities.","Common in education, nonprofits, government, and tech talent programs.","EDU"],
  ["Talent","early-career professionals","người đi làm giai đoạn đầu sự nghiệp","The program targets early-career professionals who care about community impact.","Chương trình nhắm đến người đi làm giai đoạn đầu sự nghiệp quan tâm đến tác động cộng đồng.","People in the first years of their professional career.","Natural in hiring, fellowships, internships, and workforce development.","JOB"],
  ["AI Policy","policy proposal","đề xuất chính sách","The article presents a policy proposal for faster AI progress.","Bài viết đưa ra một đề xuất chính sách cho tiến bộ AI nhanh hơn.","A suggested plan for rules, institutions, or government action.","Common in government, think tanks, public affairs, and AI governance.","POL"],
  ["AI Trends","exponential speed","tốc độ tăng theo cấp số nhân","AI is advancing at exponential speed, faster than many institutions expected.","AI đang tiến bộ với tốc độ tăng theo cấp số nhân, nhanh hơn nhiều thể chế dự đoán.","Growth that accelerates very quickly rather than increasing slowly.","Useful in tech, economics, science, and future-focused discussion.","FAST"],
  ["Governance","institutional readiness","sự sẵn sàng của thể chế","Institutional readiness matters when technology changes quickly.","Sự sẵn sàng của thể chế rất quan trọng khi công nghệ thay đổi nhanh.","The ability of organizations or public institutions to respond effectively.","Formal phrase in policy, risk management, governance, and strategy.","READY"],
  ["AI Product","long-running work","công việc kéo dài","The model is designed to handle long-running work with consistency.","Mô hình được thiết kế để xử lý công việc kéo dài một cách ổn định.","Work that continues for a long time and requires sustained attention.","Common in coding, project work, automation, and AI agent discussions.","TIME"],
  ["AI Agents","agentic tasks","nhiệm vụ có tính tác nhân tự chủ","Newer models can perform agentic tasks across multiple steps.","Các mô hình mới có thể thực hiện nhiệm vụ có tính tác nhân tự chủ qua nhiều bước.","Tasks where an AI system plans, uses tools, and takes actions toward a goal.","Specialized AI term, common in product and research discussions.","BOT"],
  ["Enterprise AI","professional work","công việc chuyên môn","The upgrade targets coding, agentic tasks, and professional work.","Bản nâng cấp nhắm vào lập trình, nhiệm vụ agentic, và công việc chuyên môn.","Work done in business, technical, legal, educational, or other expert settings.","Useful broad term in workplace and enterprise AI contexts.","WORK"],
  ["Partnerships","partner network","mạng lưới đối tác","The Claude Partner Network helps organizations find service partners.","Claude Partner Network giúp các tổ chức tìm đối tác dịch vụ.","A group of companies or organizations connected through a formal partner program.","Common in SaaS, cloud platforms, consulting, and enterprise sales.","NET"],
  ["Partnerships","service track","nhánh dịch vụ / lộ trình dịch vụ","The service track supports consulting and implementation partners.","Service track hỗ trợ các đối tác tư vấn và triển khai.","A specialized path inside a partner program for service providers.","Business-platform term used in partner ecosystems.","SRV"],
  ["Partnerships","partner hub","trung tâm đối tác","The partner hub gives partners resources, training, and updates.","Partner hub cung cấp tài nguyên, đào tạo, và cập nhật cho đối tác.","A central place where partners access tools, documents, and program information.","Common in enterprise software and channel partnerships.","HUB"],
  ["Cybersecurity","AI-enabled cyber threats","mối đe dọa mạng được hỗ trợ bởi AI","The policy team studied AI-enabled cyber threats over the past year.","Nhóm chính sách đã nghiên cứu các mối đe dọa mạng được hỗ trợ bởi AI trong năm qua.","Cyber threats made easier, faster, or more scalable by AI tools.","Important term in cybersecurity, policy, and AI safety.","SEC"],
  ["Cybersecurity","threat mapping","lập bản đồ mối đe dọa","Threat mapping helps researchers understand how attackers use new tools.","Lập bản đồ mối đe dọa giúp nhà nghiên cứu hiểu cách kẻ tấn công dùng công cụ mới.","The process of identifying, categorizing, and tracking threats.","Common in security research, intelligence, and risk analysis.","MAP"],
  ["Transparency","public record","hồ sơ công khai","The company released results from the first public record.","Công ty công bố kết quả từ public record đầu tiên.","An official record or document made available to the public.","Common in law, transparency, governance, and public communication.","DOC"],
  ["Communications","media assets","tài sản truyền thông","Journalists can download media assets from the newsroom.","Nhà báo có thể tải tài sản truyền thông từ phòng tin tức.","Official images, logos, videos, or files provided for media use.","Common in PR, marketing, journalism, and brand communications.","IMG"],
  ["Communications","press inquiries","yêu cầu từ báo chí","The newsroom lists an email address for press inquiries.","Phòng tin tức liệt kê email cho yêu cầu từ báo chí.","Questions or requests from journalists or media organizations.","Standard phrase on newsroom and company press pages.","PR"]
].map(([topic,english,vi,example,exampleVi,explain,usage,visual])=>({
  lesson:"Lesson 5",
  topic,
  english,
  vi,
  example,
  exampleVi,
  approx:lesson5Pronunciation[english],
  explain,
  usage:"Native use: " + usage,
  visual
}));

const lesson6Pronunciation = {
  "big-nosed":"US IPA: /ˌbɪɡ ˈnoʊzd/ | gần đúng: big-NOHZD",
  "big-lipped":"US IPA: /ˌbɪɡ ˈlɪpt/ | gần đúng: big-LIPT",
  "bald":"US IPA: /bɔːld/ | gần đúng: bawld",
  "chubby":"US IPA: /ˈtʃʌbi/ | gần đúng: CHUH-bee",
  "potbellied":"US IPA: /ˌpɑːtˈbelid/ | gần đúng: pot-BEL-eed",
  "big-eared":"US IPA: /ˌbɪɡ ˈɪrd/ | gần đúng: big-EERD",
  "skinny":"US IPA: /ˈskɪni/ | gần đúng: SKIN-ee",
  "freckled":"US IPA: /ˈfrekəld/ | gần đúng: FREK-əld",
  "bearded":"US IPA: /ˈbɪrdɪd/ | gần đúng: BEER-did",
  "broad-shouldered":"US IPA: /ˌbrɔːd ˈʃoʊldərd/ | gần đúng: broad-SHOHL-derd",
  "curly-haired":"US IPA: /ˌkɜːrli ˈherd/ | gần đúng: KUR-lee haird",
  "fair-skinned":"US IPA: /ˌfer ˈskɪnd/ | gần đúng: fair-SKIND",
  "dark-skinned":"US IPA: /ˌdɑːrk ˈskɪnd/ | gần đúng: dark-SKIND",
  "wrinkled":"US IPA: /ˈrɪŋkəld/ | gần đúng: RING-kəld",
  "muscular":"US IPA: /ˈmʌskjələr/ | gần đúng: MUS-kyə-lər"
};

const lesson6Items = [
  ["Face","big-nosed","mũi to","He is big-nosed, but his smile makes his face friendly.","Anh ấy có mũi to, nhưng nụ cười làm khuôn mặt anh ấy thân thiện.","Describes someone with a large nose. Use carefully because physical descriptions can sound rude.","NOSE"],
  ["Face","big-lipped","môi dày","The portrait shows a big-lipped woman with bright red lipstick.","Bức chân dung cho thấy một người phụ nữ môi dày với son đỏ nổi bật.","Describes someone with large or full lips. More neutral phrase: full-lipped.","LIPS"],
  ["Hair","bald","hói, không có tóc","My uncle is bald, so he always wears a hat in the sun.","Chú tôi bị hói, nên chú luôn đội mũ dưới nắng.","A common adjective for having little or no hair on the head.","BALD"],
  ["Body","chubby","mũm mĩm","The child looked chubby and cheerful in the family photo.","Đứa trẻ trông mũm mĩm và vui vẻ trong bức ảnh gia đình.","Usually softer than fat, but still use politely and only when appropriate.","SOFT"],
  ["Body","potbellied","bụng phệ","The potbellied man laughed loudly at the joke.","Người đàn ông bụng phệ cười lớn trước câu chuyện đùa.","Describes someone with a round stomach. It can sound unkind if used directly.","BELLY"],
  ["Face","big-eared","tai to","The cartoon character is big-eared and easy to recognize.","Nhân vật hoạt hình có tai to và rất dễ nhận ra.","Describes someone with large ears. Often used in cartoons or visual descriptions.","EARS"],
  ["Body","skinny","gầy nhom","He used to be skinny when he was younger.","Anh ấy từng gầy nhom khi còn trẻ.","Means very thin. It can be negative; slim is more polite.","THIN"],
  ["Skin","freckled","có tàn nhang","She has a freckled face after spending summer outdoors.","Cô ấy có khuôn mặt đầy tàn nhang sau mùa hè ở ngoài trời.","Describes skin with small brown spots, often on the face.","DOTS"],
  ["Hair","bearded","có râu","The bearded teacher looked serious but spoke kindly.","Thầy giáo có râu trông nghiêm nghị nhưng nói chuyện tử tế.","Describes a person who has a beard.","BEARD"],
  ["Body","broad-shouldered","vai rộng","The broad-shouldered athlete looked confident on stage.","Vận động viên vai rộng trông rất tự tin trên sân khấu.","A natural positive description for someone with wide shoulders.","WIDE"],
  ["Hair","curly-haired","tóc xoăn","The curly-haired girl sat near the window.","Cô gái tóc xoăn ngồi gần cửa sổ.","Describes someone with curly hair. Hyphenate it before a noun: a curly-haired girl.","CURL"],
  ["Skin","fair-skinned","da sáng, da trắng","A fair-skinned person may burn easily in strong sunlight.","Người da sáng có thể dễ bị cháy nắng dưới ánh nắng mạnh.","Describes light skin tone. Use neutrally and respectfully.","FAIR"],
  ["Skin","dark-skinned","da sẫm màu","The dark-skinned actor wore a bright blue suit.","Diễn viên da sẫm màu mặc một bộ vest xanh nổi bật.","Describes darker skin tone. Use neutrally and respectfully.","DARK"],
  ["Age","wrinkled","có nếp nhăn","Her wrinkled hands showed years of hard work.","Đôi bàn tay có nếp nhăn của bà cho thấy nhiều năm lao động vất vả.","Describes skin with lines, often because of age.","LINES"],
  ["Body","muscular","cơ bắp, vạm vỡ","He became muscular after years of training.","Anh ấy trở nên vạm vỡ sau nhiều năm tập luyện.","A positive adjective for a strong body with visible muscles.","STRONG"]
].map(([topic,english,vi,example,exampleVi,explain,visual])=>({
  lesson:"Lesson 6",
  topic,
  english,
  vi,
  example,
  exampleVi,
  approx:lesson6Pronunciation[english],
  explain,
  usage:"Native use: common in descriptions, stories, police reports, character writing, and everyday speech, but be polite when describing real people.",
  visual
}));

const lesson7Pronunciation = {
  "achievement":"IPA: /əˈtʃiːvmənt/ | stress: a-CHIEVE-ment",
  "agreement":"IPA: /əˈɡriːmənt/ | stress: a-GREE-ment",
  "argument":"IPA: /ˈɑːrɡjumənt/ | stress: AR-gu-ment",
  "arrangement":"IPA: /əˈreɪndʒmənt/ | stress: a-RANGE-ment",
  "assessment":"IPA: /əˈsesmənt/ | stress: a-SESS-ment",
  "commitment":"IPA: /kəˈmɪtmənt/ | stress: com-MIT-ment",
  "development":"IPA: /dɪˈveləpmənt/ | stress: de-VEL-op-ment",
  "employment":"IPA: /ɪmˈplɔɪmənt/ | stress: em-PLOY-ment",
  "environment":"IPA: /ɪnˈvaɪrənmənt/ | stress: en-VI-ron-ment",
  "government":"IPA: /ˈɡʌvərnmənt/ | stress: GOV-ern-ment",
  "improvement":"IPA: /ɪmˈpruːvmənt/ | stress: im-PROVE-ment",
  "investment":"IPA: /ɪnˈvestmənt/ | stress: in-VEST-ment",
  "management":"IPA: /ˈmænɪdʒmənt/ | stress: MAN-age-ment",
  "movement":"IPA: /ˈmuːvmənt/ | stress: MOVE-ment",
  "treatment":"IPA: /ˈtriːtmənt/ | stress: TREAT-ment"
};

const lesson7Items = [
  ["Results","achievement","thành tựu / kết quả đạt được","Completing the course was a major achievement for her.","Hoàn thành khóa học là một thành tựu lớn đối với cô ấy.","A result you are proud of after effort or skill.","Very common in education, work reviews, personal growth, and formal writing.","STAR"],
  ["Work","agreement","sự đồng ý / thỏa thuận","The two companies reached an agreement after weeks of discussion.","Hai công ty đạt được thỏa thuận sau nhiều tuần thảo luận.","A decision or arrangement accepted by two or more sides.","Very common in business, law, meetings, and everyday conversation.","CHECK"],
  ["Discussion","argument","lập luận / tranh cãi","Her argument was clear, but she needed stronger evidence.","Lập luận của cô ấy rõ ràng, nhưng cô ấy cần bằng chứng mạnh hơn.","A reasoned point in an essay or a disagreement in conversation.","Essential in academic writing, debate, and everyday conflict.","DOC"],
  ["Planning","arrangement","sự sắp xếp / thỏa thuận","We made an arrangement to meet every Friday morning.","Chúng tôi sắp xếp gặp nhau vào mỗi sáng thứ Sáu.","A plan or agreement about how something will happen.","Common in scheduling, travel, work, and formal emails.","PLAN"],
  ["Evaluation","assessment","sự đánh giá","The final assessment measures speaking, writing, and listening.","Bài đánh giá cuối cùng đo kỹ năng nói, viết và nghe.","A judgement or test used to measure quality, risk, or ability.","Common in education, healthcare, business, and risk analysis.","DOC"],
  ["Responsibility","commitment","sự cam kết","Success in language learning requires long-term commitment.","Thành công trong học ngoại ngữ cần sự cam kết lâu dài.","A promise or serious decision to keep doing something.","Very common in work, relationships, study, and self-development.","TEAM"],
  ["Growth","development","sự phát triển","The city has seen rapid economic development.","Thành phố đã chứng kiến sự phát triển kinh tế nhanh chóng.","Growth, progress, or the process of becoming more advanced.","Very common in business, education, cities, technology, and personal growth.","UP"],
  ["Work","employment","việc làm / sự tuyển dụng","The training program improved employment opportunities for young people.","Chương trình đào tạo cải thiện cơ hội việc làm cho người trẻ.","Work for pay, or the general state of having a job.","Common in HR, policy, education, and job-search contexts.","JOB"],
  ["World","environment","môi trường","A clean environment is important for public health.","Môi trường sạch rất quan trọng đối với sức khỏe cộng đồng.","The natural world, or the conditions around a person or place.","Very common in news, science, work culture, and everyday speech.","GLOBE"],
  ["Society","government","chính phủ","The government announced new support for small businesses.","Chính phủ công bố hỗ trợ mới cho doanh nghiệp nhỏ.","The group of people who officially run a country or region.","Extremely common in news, policy, school, and civic discussion.","GOV"],
  ["Growth","improvement","sự cải thiện","Small daily practice can lead to noticeable improvement.","Luyện tập nhỏ hằng ngày có thể dẫn đến sự cải thiện rõ rệt.","A positive change that makes something better.","Very common in education, work feedback, health, and performance.","UP"],
  ["Money","investment","sự đầu tư / khoản đầu tư","Learning English is an investment in your future career.","Học tiếng Anh là một sự đầu tư cho sự nghiệp tương lai.","Money, time, or effort used now for future benefit.","Very common in finance, business, education, and personal decisions.","BIZ"],
  ["Leadership","management","sự quản lý / ban quản lý","Good management helps a team stay focused and productive.","Quản lý tốt giúp một nhóm tập trung và làm việc hiệu quả.","The process of organizing people, work, or resources.","Essential in business, operations, projects, and leadership.","TOOLS"],
  ["Change","movement","sự chuyển động / phong trào","The movement for cleaner energy is growing quickly.","Phong trào năng lượng sạch đang phát triển nhanh.","Physical motion or a group effort for social change.","Common in news, health, science, and social discussion.","FAST"],
  ["Health","treatment","sự điều trị / cách đối xử","Early treatment can prevent the illness from getting worse.","Điều trị sớm có thể ngăn bệnh trở nên nặng hơn.","Medical care for a problem, or the way someone is treated.","Very common in medicine, customer service, fairness, and formal writing.","READY"]
].map(([topic,english,vi,example,exampleVi,explain,usage,visual])=>({
  lesson:"Lesson 7",
  topic,
  english,
  vi,
  example,
  exampleVi,
  approx:lesson7Pronunciation[english],
  explain,
  usage:"Native use: " + usage,
  visual
}));

const lesson8Pronunciation = {
  "prepare":"IPA: /prɪˈper/ | stress: pre-PARE",
  "preparation":"IPA: /ˌprepəˈreɪʃən/ | stress: prep-a-RA-tion",
  "prevent":"IPA: /prɪˈvent/ | stress: pre-VENT",
  "prefer":"IPA: /prɪˈfɜːr/ | stress: pre-FER",
  "predict":"IPA: /prɪˈdɪkt/ | stress: pre-DICT",
  "previous":"IPA: /ˈpriːviəs/ | stress: PRE-vi-ous",
  "present":"IPA: /ˈprezənt/ as adjective/noun, /prɪˈzent/ as verb | stress changes by meaning",
  "pressure":"IPA: /ˈpreʃər/ | stress: PRES-sure",
  "precise":"IPA: /prɪˈsaɪs/ | stress: pre-CISE",
  "preserve":"IPA: /prɪˈzɜːrv/ | stress: pre-SERVE"
};

const lesson8Items = [
  ["Planning","prepare","chuẩn bị","Please prepare your documents before the meeting.","Hãy chuẩn bị tài liệu của bạn trước cuộc họp.","To get ready for something before it happens.","Very common in school, work, travel, exams, and meetings.","TOOLS"],
  ["Planning","preparation","sự chuẩn bị","Good preparation makes the interview less stressful.","Sự chuẩn bị tốt làm cho buổi phỏng vấn bớt căng thẳng hơn.","The process of getting ready for an event or task.","Very common in education, work, sports, and public speaking.","PLAN"],
  ["Safety","prevent","ngăn chặn / phòng ngừa","Regular exercise can help prevent serious health problems.","Tập thể dục đều đặn có thể giúp phòng ngừa các vấn đề sức khỏe nghiêm trọng.","To stop something bad from happening.","Common in health, safety, law, technology, and advice.","READY"],
  ["Choice","prefer","thích hơn / ưu tiên hơn","I prefer a quiet place when I need to study.","Tôi thích một nơi yên tĩnh hơn khi cần học.","To like one thing more than another.","Essential in everyday choices, emails, travel, food, and work preferences.","STAR"],
  ["Analysis","predict","dự đoán","It is difficult to predict how the market will change.","Rất khó dự đoán thị trường sẽ thay đổi như thế nào.","To say what you think will happen in the future.","Common in business, weather, research, technology, and daily plans.","FAST"],
  ["Time","previous","trước đó / trước đây","The previous lesson focused on common -ment nouns.","Bài học trước đó tập trung vào các danh từ -ment phổ biến.","Coming before the current one in time or order.","Very common in instructions, reports, study, and work updates.","TIME"],
  ["Communication","present","trình bày / hiện tại","She will present the results to the team tomorrow.","Cô ấy sẽ trình bày kết quả cho nhóm vào ngày mai.","As a verb, to show or explain information to others; as an adjective, current or here.","Very common in school, meetings, business, and daily English.","DOC"],
  ["Stress","pressure","áp lực","Many students feel pressure before an important exam.","Nhiều học sinh cảm thấy áp lực trước một kỳ thi quan trọng.","Stress or force that affects a person, situation, or object.","Very common in study, work, health, sport, and daily conversation.","STOP"],
  ["Accuracy","precise","chính xác / rõ ràng","Please give a precise answer, not a general comment.","Hãy đưa ra một câu trả lời chính xác, không phải nhận xét chung chung.","Exact, clear, and not vague.","Common in academic writing, instructions, science, and professional feedback.","CHECK"],
  ["Protection","preserve","bảo tồn / giữ gìn","The museum works to preserve important historical objects.","Bảo tàng nỗ lực bảo tồn các hiện vật lịch sử quan trọng.","To keep something safe or in good condition over time.","Common in history, culture, environment, food, and formal writing.","GLOBE"]
].map(([topic,english,vi,example,exampleVi,explain,usage,visual])=>({
  lesson:"Lesson 8",
  topic,
  english,
  vi,
  example,
  exampleVi,
  approx:lesson8Pronunciation[english],
  explain,
  usage:"Native use: " + usage,
  visual
}));

const lesson9Pronunciation = {
  "interact":"IPA: /ˌɪntərˈækt/ | stress: in-ter-ACT",
  "interaction":"IPA: /ˌɪntərˈækʃən/ | stress: in-ter-AC-tion",
  "interview":"IPA: /ˈɪntərvjuː/ | stress: IN-ter-view",
  "international":"IPA: /ˌɪntərˈnæʃənəl/ | stress: in-ter-NA-tion-al",
  "internet":"IPA: /ˈɪntərnet/ | stress: IN-ter-net",
  "interpret":"IPA: /ɪnˈtɜːrprət/ | stress: in-TER-pret",
  "interrupt":"IPA: /ˌɪntəˈrʌpt/ | stress: in-ter-RUPT",
  "interval":"IPA: /ˈɪntərvəl/ | stress: IN-ter-val",
  "internal":"IPA: /ɪnˈtɜːrnəl/ | stress: in-TER-nal",
  "interconnected":"IPA: /ˌɪntərkəˈnektɪd/ | stress: in-ter-con-NEC-ted"
};

const lesson9Items = [
  ["Communication","interact","tương tác","Students interact more when the lesson includes short speaking tasks.","Học sinh tương tác nhiều hơn khi bài học có các hoạt động nói ngắn.","To communicate or work with someone or something.","Very common in education, teamwork, apps, websites, and social situations.","TEAM"],
  ["Communication","interaction","sự tương tác","Good interaction makes an online class feel more natural.","Sự tương tác tốt làm cho lớp học trực tuyến cảm thấy tự nhiên hơn.","Communication or activity between people, systems, or things.","Common in teaching, technology, customer service, and social science.","HUB"],
  ["Work","interview","phỏng vấn / buổi phỏng vấn","She has an interview for a new job on Monday.","Cô ấy có một buổi phỏng vấn cho công việc mới vào thứ Hai.","A formal meeting to ask questions, often for a job or article.","Very common in work, school, media, and immigration contexts.","DOC"],
  ["Global","international","quốc tế","The company is building an international team.","Công ty đang xây dựng một đội ngũ quốc tế.","Connected with more than one country.","Essential in travel, business, education, news, and culture.","GLOBE"],
  ["Technology","internet","internet / mạng","The internet helps learners find examples and pronunciation quickly.","Internet giúp người học tìm ví dụ và phát âm nhanh chóng.","The global computer network used for websites, apps, and communication.","Everyday word in technology, study, shopping, and communication.","NET"],
  ["Meaning","interpret","giải thích / diễn giải","It is easy to interpret the message in two different ways.","Có thể dễ dàng diễn giải thông điệp này theo hai cách khác nhau.","To understand or explain the meaning of something.","Common in language learning, law, meetings, data, and culture.","MAP"],
  ["Conversation","interrupt","ngắt lời / làm gián đoạn","Please do not interrupt while someone is explaining their idea.","Xin đừng ngắt lời khi ai đó đang giải thích ý tưởng của họ.","To stop someone while they are speaking or doing something.","Very common in conversation, meetings, classrooms, and customer service.","STOP"],
  ["Time","interval","khoảng thời gian","Take a short break at regular intervals while studying.","Hãy nghỉ ngắn theo các khoảng thời gian đều đặn khi học.","A period of time between two events or actions.","Common in schedules, exercise, music, science, and study plans.","TIME"],
  ["Organization","internal","nội bộ / bên trong","The team discussed the problem in an internal meeting.","Nhóm đã thảo luận vấn đề trong một cuộc họp nội bộ.","Inside an organization, system, body, or group.","Common in business, medicine, technology, and management.","WORK"],
  ["Systems","interconnected","có liên kết với nhau","Language skills are interconnected, so reading can improve writing.","Các kỹ năng ngôn ngữ có liên kết với nhau, nên đọc có thể cải thiện viết.","Connected to each other in a way that affects the whole system.","Common in technology, education, economics, ecology, and systems thinking.","GLOBE"]
].map(([topic,english,vi,example,exampleVi,explain,usage,visual])=>({
  lesson:"Lesson 9",
  topic,
  english,
  vi,
  example,
  exampleVi,
  approx:lesson9Pronunciation[english],
  explain,
  usage:"Native use: " + usage,
  visual
}));

const pronunciationItems = [
  {group:"Stress",english:"compelling",vi:"thuyết phục",approx:"IPA: /kəmˈpelɪŋ/ | gần đúng: kəm-PEL-ing",explain:"Stress the second syllable. Do not pronounce it as COM-pelling.",sentence:"The evidence is compelling, but not conclusive."},
  {group:"Linking",english:"on balance",vi:"xét tổng thể",approx:"IPA: /ɒn ˈbæləns/ or /ɑːn ˈbæləns/ | gần đúng: on BAL-əns",explain:"Link the words smoothly. It should sound like one phrase.",sentence:"On balance, I would support the proposal."},
  {group:"Professional",english:"circle back",vi:"quay lại trao đổi",approx:"IPA: /ˈsɜːrkəl bæk/ | gần đúng: SUR-kəl bak",explain:"Keep it relaxed and natural in emails or meetings.",sentence:"I'll circle back once the data is ready."},
  {group:"C1 Verb",english:"exacerbate",vi:"làm trầm trọng thêm",approx:"IPA: /ɪɡˈzæsərbeɪt/ | gần đúng: ig-ZAS-ər-bayt",explain:"Stress ZAS. This word is common in academic and policy contexts.",sentence:"The policy may exacerbate existing inequalities."}
];

const grammarNotesBank = {
  "Lesson 1": [
    {title:"Hedged opinions",body:"At B2-C1, avoid sounding absolute unless you really mean it. Use cautious phrases to show nuance.",pattern:"I would argue that..., but it is worth noting that...",example:"I would argue that the policy is useful, but it is worth noting that implementation may be difficult.",meaning:"Tôi cho rằng chính sách này hữu ích, nhưng cần lưu ý rằng việc triển khai có thể khó."},
    {title:"Balanced conclusions",body:"Use a balancing phrase before your final judgment.",pattern:"On balance, + conclusion",example:"On balance, the long-term benefits outweigh the short-term inconvenience.",meaning:"Xét tổng thể, lợi ích dài hạn lớn hơn sự bất tiện ngắn hạn."}
  ],
  "Lesson 2": [
    {title:"Polite disagreement",body:"In professional English, disagreement often begins with acknowledgement.",pattern:"I see your point, but I would push back on...",example:"I see your point, but I would push back on the proposed deadline.",meaning:"Tôi hiểu ý bạn, nhưng tôi muốn phản biện về hạn chót được đề xuất."},
    {title:"Constraints and trade-offs",body:"Use these words to sound practical and specific.",pattern:"Given + constraint, the trade-off is...",example:"Given our budget constraint, the trade-off is between scope and speed.",meaning:"Với hạn chế ngân sách, sự đánh đổi là giữa phạm vi và tốc độ."}
  ],
  "Lesson 3": [
    {title:"Academic hedging",body:"C1 writing often avoids overclaiming. Use tentative language when evidence is limited.",pattern:"The evidence suggests that..., although...",example:"The evidence suggests that remote work improves retention, although the findings remain tentative.",meaning:"Bằng chứng cho thấy làm việc từ xa cải thiện tỷ lệ giữ nhân viên, dù phát hiện vẫn còn tạm thời."},
    {title:"Cause and effect chains",body:"Use causal language to connect deeper factors to visible consequences.",pattern:"An underlying factor may exacerbate..., leading to...",example:"An underlying factor may exacerbate inequality, leading to wider differences in outcomes.",meaning:"Một yếu tố nền tảng có thể làm trầm trọng bất bình đẳng, dẫn tới khác biệt lớn hơn về kết quả."}
  ]
};

const grammarBank = {
  "Lesson 1": [
    {q:"Complete: ___, I think the benefits outweigh the risks.",choices:["On balance","In balance","By balance"],a:"On balance",why:"'On balance' means after considering both sides."},
    {q:"Choose the most nuanced sentence.",choices:["This is always wrong.","This is totally perfect.","This is useful, although it has limitations."],a:"This is useful, although it has limitations.",why:"B2-C1 opinions often include qualification."}
  ],
  "Lesson 2": [
    {q:"Complete: I see your point, but I would ___ on the timeline.",choices:["push back","go back","take back"],a:"push back",why:"'Push back' means politely disagree or challenge."},
    {q:"Choose the best professional phrase.",choices:["You are wrong.","Given our constraints, we may need to adjust the scope.","This is impossible."],a:"Given our constraints, we may need to adjust the scope.",why:"It is clear, tactful, and specific."}
  ],
  "Lesson 3": [
    {q:"Complete: The findings are ___ and require further research.",choices:["tentative","careless","random"],a:"tentative",why:"'Tentative' means not yet final or certain."},
    {q:"Choose the strongest academic phrase.",choices:["This causes everything.","One underlying factor may exacerbate the problem.","It is bad."],a:"One underlying factor may exacerbate the problem.",why:"It uses precise cause-effect language and hedging."}
  ]
};

const listeningBank = {
  "Lesson 1": {
    text:"I would argue that online learning is compelling when students have clear goals. However, we should challenge the assumption that technology alone improves education. On balance, the benefits are real, but the outcome depends on discipline and support.",
    meaning:"Tôi cho rằng học trực tuyến thuyết phục khi người học có mục tiêu rõ. Tuy nhiên, cần chất vấn giả định rằng công nghệ tự nó cải thiện giáo dục. Xét tổng thể, lợi ích có thật, nhưng kết quả phụ thuộc vào kỷ luật và hỗ trợ.",
    questions:[
      {q:"What assumption should we challenge?",a:["technology alone improves education"],hint:"Type the key phrase."},
      {q:"What does the outcome depend on?",a:["discipline and support"],hint:"Two nouns connected by and."}
    ],
    dictation:["The benefits are real, but the outcome depends on discipline and support.","We should challenge the assumption that technology alone improves education."]
  },
  "Lesson 2": {
    text:"Before we move forward, we need alignment on the timeline. Given our current constraints, there is a trade-off between speed and quality. I would push back on launching this week, but a smaller release could be a pragmatic solution.",
    meaning:"Trước khi tiếp tục, chúng ta cần thống nhất về thời gian. Với các hạn chế hiện tại, có sự đánh đổi giữa tốc độ và chất lượng. Tôi sẽ phản biện việc ra mắt tuần này, nhưng một bản phát hành nhỏ hơn có thể là giải pháp thực tế.",
    questions:[
      {q:"What do they need alignment on?",a:["the timeline","timeline"],hint:"A time-related noun."},
      {q:"What is the trade-off between?",a:["speed and quality"],hint:"Two nouns connected by and."}
    ],
    dictation:["There is a trade-off between speed and quality.","A smaller release could be a pragmatic solution."]
  },
  "Lesson 3": {
    text:"The report suggests that unequal access to data is an underlying factor in poor decision-making. This may exacerbate existing inequalities and create knock-on effects in education and employment. However, the evidence remains tentative.",
    meaning:"Báo cáo cho thấy việc tiếp cận dữ liệu không đồng đều là yếu tố nền tảng trong việc ra quyết định kém. Điều này có thể làm trầm trọng bất bình đẳng hiện có và tạo tác động dây chuyền trong giáo dục và việc làm. Tuy nhiên, bằng chứng vẫn còn tạm thời.",
    questions:[
      {q:"What is the underlying factor?",a:["unequal access to data"],hint:"A phrase with data."},
      {q:"Where can knock-on effects appear?",a:["education and employment"],hint:"Two fields connected by and."}
    ],
    dictation:["The evidence remains tentative.","This may exacerbate existing inequalities."]
  }
};

const quizBank = {
  "Lesson 1": [
    {q:"Translate: xét tổng thể",a:["on balance"],hint:"Balanced conclusion phrase."},
    {q:"Use 'compelling' in this sentence: She made a ___ argument.",a:["compelling"],hint:"Persuasive."},
    {q:"Write the phrase: chất vấn một giả định",a:["challenge an assumption","to challenge an assumption"],hint:"Critical thinking phrase."}
  ],
  "Lesson 2": [
    {q:"Translate: sự đánh đổi",a:["trade-off","trade off"],hint:"A choice with loss and gain."},
    {q:"Complete: I'll ___ once I have the updated numbers.",a:["circle back"],hint:"Work email phrase."},
    {q:"Translate: phản biện một cách lịch sự",a:["push back","to push back"],hint:"Professional disagreement."}
  ],
  "Lesson 3": [
    {q:"Translate: làm trầm trọng thêm",a:["exacerbate","to exacerbate"],hint:"C1 verb."},
    {q:"Complete: The findings are ___ and require further research.",a:["tentative"],hint:"Not final."},
    {q:"Translate: bằng chứng vững chắc",a:["robust evidence"],hint:"Academic evidence phrase."}
  ]
};

lessonInfo["Lesson 4"] = {
  title: "Growth, Habits and Real-World Success",
  level: "A2-C1",
  goal: "Talk about mindset, discipline, responsibility, habits, education, and practical success.",
  output: "Give a two-minute reflection on how daily habits and real-world experience create long-term growth.",
  topics: ["Mindset", "Habits", "Responsibility", "Education", "Success"]
};

grammarNotesBank["Lesson 4"] = [
  {title:"Time and gradual change",body:"Use the present simple for general truths and over time to show gradual accumulation.",pattern:"Small actions + add up over time / lead to + noun",example:"Daily habits add up over time and can lead to lasting personal growth.",meaning:"Thói quen hằng ngày tích lũy theo thời gian và có thể dẫn đến sự phát triển bản thân lâu dài."},
  {title:"Contrast with not only",body:"Use not only to show that an idea applies more widely than people may expect.",pattern:"Subject + be + not only for + group; it + be + for + wider group",example:"Mental strength is not only for athletes; it is useful in everyday life.",meaning:"Sức mạnh tinh thần không chỉ dành cho vận động viên; nó hữu ích trong cuộc sống hằng ngày."},
  {title:"Responsibility instead of blame",body:"Contrast constructive behavior with an unhelpful reaction by using instead of plus a gerund.",pattern:"Instead of + V-ing, subject + verb",example:"Instead of pointing fingers at others, effective people accept responsibility and learn from their mistakes.",meaning:"Thay vì đổ lỗi cho người khác, người hiệu quả chấp nhận trách nhiệm và học từ sai lầm của mình."}
];

grammarBank["Lesson 4"] = [
  {q:"Complete: Small improvements ___ over time.",choices:["add up","point at","depend"],a:"add up",why:"'Add up over time' means gradually produce a meaningful result."},
  {q:"Choose the correct pattern.",choices:["Success leads to consistent effort.","Consistent effort leads to success.","Consistent effort leads success."],a:"Consistent effort leads to success.",why:"Use lead to followed by a noun or gerund."},
  {q:"Choose the strongest responsible response.",choices:["Point fingers at everyone.","Protect your self-image at all costs.","Accept responsibility and learn from your mistakes."],a:"Accept responsibility and learn from your mistakes.",why:"This combines responsibility with constructive growth."}
];

listeningBank["Lesson 4"] = {
  text:"Personal growth rarely comes from immediate results. It depends on daily habits, self-discipline, and the willingness to face challenges. Small efforts add up over time and often lead to success. When difficulties appear, mentally strong people do not simply point fingers at others. They accept responsibility, learn from their mistakes, and make better decisions. Academic achievement and theoretical knowledge are valuable, but real-world experience and problem-solving skills help us respond to market needs and create value for others.",
  meaning:"Sự phát triển bản thân hiếm khi đến từ kết quả tức thì. Nó phụ thuộc vào thói quen hằng ngày, tính kỷ luật và sự sẵn sàng đối mặt với thử thách. Những nỗ lực nhỏ tích lũy theo thời gian và thường dẫn đến thành công. Khi khó khăn xuất hiện, người có tinh thần vững vàng không chỉ đổ lỗi cho người khác. Họ chấp nhận trách nhiệm, học từ sai lầm và đưa ra quyết định tốt hơn. Thành tích học tập và kiến thức lý thuyết có giá trị, nhưng kinh nghiệm thực tế cùng kỹ năng giải quyết vấn đề giúp chúng ta đáp ứng nhu cầu thị trường và tạo ra giá trị cho người khác.",
  questions:[
    {q:"What does personal growth depend on?",a:["daily habits self-discipline and the willingness to face challenges","daily habits, self-discipline, and the willingness to face challenges"],hint:"Name the three things from the text."},
    {q:"What do mentally strong people do after difficulties?",a:["accept responsibility learn from their mistakes and make better decisions","they accept responsibility learn from their mistakes and make better decisions"],hint:"Give the three constructive actions."},
    {q:"What helps us respond to market needs?",a:["real-world experience and problem-solving skills","real world experience and problem solving skills"],hint:"Two practical forms of learning."}
  ],
  dictation:["Small efforts add up over time and often lead to success.","They accept responsibility, learn from their mistakes, and make better decisions."]
};

quizBank["Lesson 4"] = [
  {q:"Translate: thay đổi tư duy của tôi",a:["change my mindset"],hint:"A phrase about adopting a new way of thinking."},
  {q:"Complete: Improvement ___, so be patient.",a:["takes time"],hint:"Progress is gradual."},
  {q:"Translate: tính kỷ luật",a:["self-discipline","self discipline"],hint:"The ability to make yourself do what is necessary."},
  {q:"Complete: Do not ___ others; accept responsibility.",a:["point fingers at","point the finger at"],hint:"An idiom meaning blame."},
  {q:"Translate: tích lũy theo thời gian",a:["add up over time"],hint:"Small actions gradually make a larger result."},
  {q:"Complete: Consistent study can ___ success.",a:["lead to"],hint:"Cause or contribute to a result."},
  {q:"Translate: kinh nghiệm thực tế",a:["real-world experience","real world experience"],hint:"Practical experience outside theory."},
  {q:"Translate: tạo ra giá trị cho người khác",a:["create value for others"],hint:"A phrase about useful contribution."}
];

lessonInfo["Lesson 5"] = {
  title: "AI News, Policy and Enterprise Technology",
  level: "B2-C1",
  goal: "Understand and reuse specialist vocabulary from Anthropic News about AI products, policy, partnerships, cybersecurity, and public communications.",
  output: "Summarize an AI company announcement using precise business, policy, and technology vocabulary.",
  topics: ["AI Policy", "Enterprise AI", "Partnerships", "Cybersecurity", "Communications"]
};

grammarNotesBank["Lesson 5"] = [
  {title:"Newsroom announcement style",body:"Company news often uses passive or neutral reporting language to sound official and factual.",pattern:"Subject + announced / released / introduced + noun phrase",example:"Anthropic announced a strategic partnership across the Korean AI ecosystem.",meaning:"Công ty công bố một quan hệ đối tác chiến lược trong hệ sinh thái AI Hàn Quốc."},
  {title:"Specialist noun phrases",body:"In technology and policy English, important ideas are often packed into noun phrases.",pattern:"adjective + noun + noun",example:"AI-enabled cyber threats require careful threat mapping.",meaning:"Các mối đe dọa mạng được hỗ trợ bởi AI cần được lập bản đồ mối đe dọa một cách cẩn thận."},
  {title:"Purpose clauses",body:"Use to plus a verb to explain why a program, product, or policy exists.",pattern:"Subject + launched / designed / created + object + to + verb",example:"The partner hub was created to support service partners with resources and training.",meaning:"Partner hub được tạo ra để hỗ trợ đối tác dịch vụ bằng tài nguyên và đào tạo."}
];

grammarBank["Lesson 5"] = [
  {q:"Complete: Banks and airlines are examples of ___ industries.",choices:["regulated","random","casual"],a:"regulated",why:"Regulated industries operate under strict rules and compliance requirements."},
  {q:"Choose the strongest specialist phrase.",choices:["AI cyber bad things","AI-enabled cyber threats","AI internet problems"],a:"AI-enabled cyber threats",why:"This is precise cybersecurity and AI policy language."},
  {q:"Complete: The model can handle ___ work with consistency.",choices:["long-running","long-runner","long-ran"],a:"long-running",why:"Long-running is the adjective used before work or tasks."}
];

listeningBank["Lesson 5"] = {
  text:"Recent Anthropic news shows how AI companies communicate across several specialist areas. Product updates mention agentic tasks, professional work, and long-running work. Business announcements describe strategic partnerships, partner networks, service tracks, and partner hubs. Policy posts discuss export control directives, institutional readiness, and policy proposals. Security analysis focuses on AI-enabled cyber threats and threat mapping, while newsroom pages provide media assets and contact details for press inquiries.",
  meaning:"Tin tức gần đây của Anthropic cho thấy các công ty AI giao tiếp qua nhiều lĩnh vực chuyên môn. Cập nhật sản phẩm nói về agentic tasks, professional work và long-running work. Thông báo kinh doanh mô tả strategic partnerships, partner networks, service tracks và partner hubs. Bài policy thảo luận export control directives, institutional readiness và policy proposals. Phân tích bảo mật tập trung vào AI-enabled cyber threats và threat mapping, trong khi trang newsroom cung cấp media assets và thông tin liên hệ cho press inquiries.",
  questions:[
    {q:"What product abilities are mentioned?",a:["agentic tasks professional work and long-running work","agentic tasks, professional work, and long-running work"],hint:"Name the three product-related phrases."},
    {q:"What does security analysis focus on?",a:["AI-enabled cyber threats and threat mapping","ai-enabled cyber threats and threat mapping"],hint:"Two cybersecurity phrases."},
    {q:"What does the newsroom provide for journalists?",a:["media assets and contact details for press inquiries","media assets and press inquiries"],hint:"Look for media and press terms."}
  ],
  dictation:["Policy posts discuss export control directives and institutional readiness.","Security analysis focuses on AI-enabled cyber threats and threat mapping."]
};

quizBank["Lesson 5"] = [
  {q:"Translate: các ngành được quản lý chặt",a:["regulated industries"],hint:"Strict legal and compliance requirements."},
  {q:"Complete: AI is advancing at ___ speed.",a:["exponential"],hint:"Very fast accelerating growth."},
  {q:"Translate: mối đe dọa mạng được hỗ trợ bởi AI",a:["AI-enabled cyber threats","ai-enabled cyber threats","ai enabled cyber threats"],hint:"Cybersecurity phrase."},
  {q:"Complete: The company announced a ___ partnership.",a:["strategic"],hint:"Long-term business relationship."},
  {q:"Translate: yêu cầu từ báo chí",a:["press inquiries","press inquiry"],hint:"Questions from journalists."},
  {q:"Complete: The model is useful for ___ tasks.",a:["agentic"],hint:"AI tasks involving planning and action."}
];

lessonInfo["Lesson 6"] = {
  title: "Unique Physical Characteristics",
  level: "A2-B1",
  goal: "Describe appearance using clear physical-characteristic adjectives while staying polite.",
  output: "Describe a character or picture using at least five physical-characteristic phrases.",
  topics: ["Face", "Hair", "Body", "Skin", "Age"]
};

grammarNotesBank["Lesson 6"] = [
  {title:"Adjective after be",body:"Use be plus an adjective to describe a person directly.",pattern:"Subject + be + adjective",example:"He is bald and broad-shouldered.",meaning:"Anh ấy hói và vai rộng."},
  {title:"Adjective before noun",body:"Use a hyphenated adjective before a noun when the description works like one idea.",pattern:"a/an + adjective + noun",example:"She is a curly-haired student with a freckled face.",meaning:"Cô ấy là một học sinh tóc xoăn với khuôn mặt có tàn nhang."},
  {title:"Polite description",body:"Some appearance words can sound rude. Use them mainly for pictures, characters, or neutral description.",pattern:"He/She looks + adjective, but avoid judging the person.",example:"The character is potbellied, but he is drawn in a friendly way.",meaning:"Nhân vật bụng phệ, nhưng được vẽ theo cách thân thiện."}
];

grammarBank["Lesson 6"] = [
  {q:"Choose the correct sentence.",choices:["He is bald.","He is a balded.","He bald is."],a:"He is bald.",why:"Use subject + be + adjective."},
  {q:"Choose the best adjective before a noun.",choices:["a curly-haired girl","a curly hair girl","a girl curly-haired"],a:"a curly-haired girl",why:"Use the hyphenated adjective before the noun."},
  {q:"Choose the more polite alternative to 'skinny' in many real-life situations.",choices:["slim","potbellied","big-eared"],a:"slim",why:"Slim is usually more polite than skinny."}
];

listeningBank["Lesson 6"] = {
  text:"In the picture, each character has a unique physical characteristic. One man is big-nosed, another person is bald, and a child is freckled. There is also a bearded man, a skinny boy, and a chubby child. When we describe real people, we should be careful because words like skinny, potbellied, or big-eared can sound impolite. For practice, it is safer to describe drawings, photos, or fictional characters.",
  meaning:"Trong bức tranh, mỗi nhân vật có một đặc điểm ngoại hình riêng. Một người đàn ông mũi to, một người khác bị hói, và một đứa trẻ có tàn nhang. Cũng có một người đàn ông có râu, một cậu bé gầy nhom, và một đứa trẻ mũm mĩm. Khi mô tả người thật, chúng ta nên cẩn thận vì những từ như skinny, potbellied, hoặc big-eared có thể nghe bất lịch sự. Để luyện tập, an toàn hơn khi mô tả tranh vẽ, ảnh, hoặc nhân vật hư cấu.",
  questions:[
    {q:"Name three physical characteristics from the picture.",a:["big-nosed bald and freckled","big-nosed, bald, and freckled","bald freckled and bearded"],hint:"Use three adjectives from the lesson."},
    {q:"Why should we be careful with words like skinny or potbellied?",a:["they can sound impolite","because they can sound impolite","they may sound rude"],hint:"Think about politeness."},
    {q:"What is safer to describe for practice?",a:["drawings photos or fictional characters","drawings, photos, or fictional characters"],hint:"Three safer subjects are mentioned."}
  ],
  dictation:["Each character has a unique physical characteristic.","Words like skinny or potbellied can sound impolite."]
};

quizBank["Lesson 6"] = [
  {q:"Translate: mũi to",a:["big-nosed","big nosed"],hint:"From the face group."},
  {q:"Translate: môi dày",a:["big-lipped","big lipped","full-lipped","full lipped"],hint:"From the face group."},
  {q:"Complete: My uncle is ___, so he wears a hat.",a:["bald"],hint:"No hair on the head."},
  {q:"Translate: có râu",a:["bearded"],hint:"A man with a beard."},
  {q:"Complete: She has a ___ face after summer.",a:["freckled"],hint:"Small brown spots on the skin."},
  {q:"Translate: vai rộng",a:["broad-shouldered","broad shouldered"],hint:"A body adjective."},
  {q:"Complete: The ___ girl sat near the window.",a:["curly-haired","curly haired"],hint:"Hair description before a noun."},
  {q:"Translate: có nếp nhăn",a:["wrinkled"],hint:"Often related to age."}
];

lessonInfo["Lesson 7"] = {
  title: "Common -ment Nouns",
  level: "B1-B2",
  goal: "Recognize and use common nouns ending in -ment in work, study, news, and daily life.",
  output: "Write a short paragraph using at least five -ment nouns naturally.",
  topics: ["Results", "Work", "Planning", "Growth", "Society", "Health"]
};

grammarNotesBank["Lesson 7"] = [
  {title:"Verb to noun with -ment",body:"Many common nouns are formed from verbs by adding -ment. The noun names the result, process, or action.",pattern:"verb + -ment = noun",example:"Small changes can lead to real improvement.",meaning:"Những thay đổi nhỏ có thể dẫn đến sự cải thiện thật sự."},
  {title:"Use -ment nouns after adjectives",body:"These nouns often appear after adjectives in professional and academic English.",pattern:"adjective + -ment noun",example:"Long-term commitment is more important than short motivation.",meaning:"Sự cam kết lâu dài quan trọng hơn động lực ngắn hạn."},
  {title:"Common collocations",body:"Learn the word together with natural verbs so your sentences sound native.",pattern:"reach an agreement / make an arrangement / receive treatment / attract investment",example:"The city attracted investment after improving public transport.",meaning:"Thành phố thu hút đầu tư sau khi cải thiện giao thông công cộng."}
];

grammarBank["Lesson 7"] = [
  {q:"Complete: Learning English requires long-term ___.",choices:["commitment","committed","commit"],a:"commitment",why:"After 'requires', use the noun 'commitment'."},
  {q:"Choose the natural collocation.",choices:["reach an agreement","do an agreement","make an agreementing"],a:"reach an agreement",why:"'Reach an agreement' is a common native phrase."},
  {q:"Complete: Early ___ can prevent the problem from getting worse.",choices:["treatment","treat","treated"],a:"treatment",why:"The noun 'treatment' refers to medical care or a way of handling a problem."}
];

listeningBank["Lesson 7"] = {
  text:"Words ending in -ment appear often in English because they help us talk about actions, results, and systems. In study, regular practice leads to improvement and achievement. At work, teams need commitment, management, and clear arrangements before they can reach an agreement. In society, government decisions can affect employment, investment, and the environment. In health, early assessment and treatment can make a serious difference.",
  meaning:"Những từ kết thúc bằng -ment xuất hiện rất thường xuyên trong tiếng Anh vì chúng giúp chúng ta nói về hành động, kết quả và hệ thống. Trong học tập, luyện tập đều đặn dẫn đến sự cải thiện và thành tựu. Ở nơi làm việc, các nhóm cần sự cam kết, quản lý và sắp xếp rõ ràng trước khi đạt được thỏa thuận. Trong xã hội, quyết định của chính phủ có thể ảnh hưởng đến việc làm, đầu tư và môi trường. Trong sức khỏe, đánh giá và điều trị sớm có thể tạo ra khác biệt lớn.",
  questions:[
    {q:"What does regular practice lead to?",a:["improvement and achievement"],hint:"Two -ment nouns from study."},
    {q:"What do teams need before they reach an agreement?",a:["commitment management and clear arrangements","commitment, management, and clear arrangements"],hint:"Three work-related ideas."},
    {q:"What can government decisions affect?",a:["employment investment and the environment","employment, investment, and the environment"],hint:"Three society-related nouns."}
  ],
  dictation:["Regular practice leads to improvement and achievement.","Teams need commitment, management, and clear arrangements.","Early assessment and treatment can make a serious difference."]
};

quizBank["Lesson 7"] = [
  {q:"Translate: sự cải thiện",a:["improvement"],hint:"From improve + -ment."},
  {q:"Complete: The two sides reached an ___.",a:["agreement"],hint:"A shared decision."},
  {q:"Translate: sự cam kết",a:["commitment"],hint:"A serious promise or decision."},
  {q:"Complete: Early ___ can prevent illness from getting worse.",a:["treatment"],hint:"Medical care."},
  {q:"Translate: chính phủ",a:["government"],hint:"People who officially run a country."},
  {q:"Complete: Learning English is an ___ in your future.",a:["investment"],hint:"Time, money, or effort for future benefit."},
  {q:"Translate: sự đánh giá",a:["assessment"],hint:"A judgement or test."},
  {q:"Complete: Good ___ keeps a team organized.",a:["management"],hint:"Organizing people and work."}
];

lessonInfo["Lesson 8"] = {
  title: "Common Words Starting with pre",
  level: "B1-B2",
  goal: "Use frequent words beginning with pre in study, work, health, and everyday communication.",
  output: "Explain a plan or decision using at least five pre- words naturally.",
  topics: ["Planning", "Safety", "Choice", "Analysis", "Time", "Communication"]
};

grammarNotesBank["Lesson 8"] = [
  {title:"Pre- often means before",body:"In many words, pre- suggests before, earlier, or in advance, but not every pre word follows this meaning perfectly.",pattern:"pre- + word idea",example:"Good preparation helps you prepare before an interview.",meaning:"Sự chuẩn bị tốt giúp bạn chuẩn bị trước một buổi phỏng vấn."},
  {title:"Verb or noun families",body:"Learn related forms together so you can build sentences flexibly.",pattern:"prepare -> preparation / predict -> prediction / prefer -> preference",example:"My prediction changed after I reviewed the previous data.",meaning:"Dự đoán của tôi thay đổi sau khi tôi xem lại dữ liệu trước đó."},
  {title:"Present has two pronunciations",body:"Present changes stress depending on meaning. As a verb, stress the second syllable. As a noun or adjective, stress the first syllable.",pattern:"PRES-ent = current/gift; pre-SENT = show or explain",example:"She will present the present data in the meeting.",meaning:"Cô ấy sẽ trình bày dữ liệu hiện tại trong cuộc họp."}
];

grammarBank["Lesson 8"] = [
  {q:"Complete: Please ___ your documents before the meeting.",choices:["prepare","prevent","pressure"],a:"prepare",why:"'Prepare' means get ready before something happens."},
  {q:"Choose the word that means stop something bad from happening.",choices:["prevent","prefer","present"],a:"prevent",why:"'Prevent' means stop a problem before it happens."},
  {q:"Complete: The ___ lesson focused on -ment nouns.",choices:["previous","precise","pressure"],a:"previous",why:"'Previous' means before the current one."}
];

listeningBank["Lesson 8"] = {
  text:"Before an important presentation, it is useful to prepare carefully. Good preparation can prevent small mistakes and reduce pressure. If you prefer clear communication, give precise examples and explain how your prediction is different from the previous report. Some teams also try to preserve useful knowledge so future projects can start faster.",
  meaning:"Trước một bài trình bày quan trọng, chuẩn bị cẩn thận rất hữu ích. Sự chuẩn bị tốt có thể ngăn chặn những lỗi nhỏ và giảm áp lực. Nếu bạn thích giao tiếp rõ ràng, hãy đưa ra ví dụ chính xác và giải thích dự đoán của bạn khác với báo cáo trước đó như thế nào. Một số nhóm cũng cố gắng giữ gìn kiến thức hữu ích để các dự án tương lai có thể bắt đầu nhanh hơn.",
  questions:[
    {q:"What can good preparation prevent?",a:["small mistakes"],hint:"A two-word phrase."},
    {q:"What can preparation reduce?",a:["pressure"],hint:"A word about stress."},
    {q:"What should you give if you prefer clear communication?",a:["precise examples"],hint:"An adjective plus a noun."}
  ],
  dictation:["Good preparation can prevent small mistakes and reduce pressure.","Give precise examples before you present the results.","The previous report included a different prediction."]
};

quizBank["Lesson 8"] = [
  {q:"Translate: chuẩn bị",a:["prepare"],hint:"Get ready before something."},
  {q:"Translate: sự chuẩn bị",a:["preparation"],hint:"The noun form of prepare."},
  {q:"Complete: Exercise can help ___ health problems.",a:["prevent"],hint:"Stop something bad before it happens."},
  {q:"Translate: thích hơn",a:["prefer"],hint:"Like one option more than another."},
  {q:"Complete: It is hard to ___ the future.",a:["predict"],hint:"Say what may happen later."},
  {q:"Translate: trước đó",a:["previous"],hint:"Before the current one."},
  {q:"Complete: She will ___ the results tomorrow.",a:["present"],hint:"Show or explain information."},
  {q:"Translate: áp lực",a:["pressure"],hint:"Stress or force."},
  {q:"Translate: chính xác",a:["precise"],hint:"Exact and clear."},
  {q:"Complete: We should ___ old family photos.",a:["preserve"],hint:"Keep safe over time."}
];

lessonInfo["Lesson 9"] = {
  title: "Common Words Starting with inter",
  level: "B1-B2",
  goal: "Use frequent inter- words to talk about communication, technology, systems, work, and global topics.",
  output: "Explain how people or systems connect using at least five inter- words naturally.",
  topics: ["Communication", "Technology", "Work", "Global Topics", "Systems"]
};

grammarNotesBank["Lesson 9"] = [
  {title:"Inter- often means between",body:"Many inter- words describe a connection, action, or relationship between people, places, ideas, or systems.",pattern:"inter- + action/idea",example:"International teams often interact through the internet.",meaning:"Các đội ngũ quốc tế thường tương tác qua internet."},
  {title:"Noun families",body:"Learn verbs and nouns together so you can move between actions and concepts.",pattern:"interact -> interaction / interpret -> interpretation / interrupt -> interruption",example:"Good interaction helps people interpret meaning more clearly.",meaning:"Sự tương tác tốt giúp mọi người diễn giải ý nghĩa rõ ràng hơn."},
  {title:"Internal versus international",body:"Internal means inside one group or system. International means between countries.",pattern:"internal + noun / international + noun",example:"The company has an internal meeting before the international conference.",meaning:"Công ty có một cuộc họp nội bộ trước hội nghị quốc tế."}
];

grammarBank["Lesson 9"] = [
  {q:"Complete: Students ___ more when the teacher asks useful questions.",choices:["interact","interrupt","interval"],a:"interact",why:"Interact means communicate or work with others."},
  {q:"Choose the word that means connected with more than one country.",choices:["international","internal","interval"],a:"international",why:"International refers to relationships between countries."},
  {q:"Complete: Please do not ___ while I am speaking.",choices:["interrupt","interpret","interact"],a:"interrupt",why:"Interrupt means stop someone while they are speaking or doing something."}
];

listeningBank["Lesson 9"] = {
  text:"In modern work and study, people interact through the internet every day. An international team may start with an internal meeting, then prepare for an interview or a public presentation. Clear interaction helps people interpret ideas correctly and avoid unnecessary interruptions. Many systems are interconnected, so a small problem in one area can affect another area after a short interval.",
  meaning:"Trong công việc và học tập hiện đại, mọi người tương tác qua internet mỗi ngày. Một đội ngũ quốc tế có thể bắt đầu bằng một cuộc họp nội bộ, sau đó chuẩn bị cho một buổi phỏng vấn hoặc bài thuyết trình công khai. Sự tương tác rõ ràng giúp mọi người diễn giải ý tưởng đúng và tránh những gián đoạn không cần thiết. Nhiều hệ thống có liên kết với nhau, vì vậy một vấn đề nhỏ ở một khu vực có thể ảnh hưởng đến khu vực khác sau một khoảng thời gian ngắn.",
  questions:[
    {q:"How do people interact every day?",a:["through the internet","internet"],hint:"Listen for the technology phrase."},
    {q:"What kind of meeting may an international team start with?",a:["an internal meeting","internal meeting"],hint:"Inside the team or organization."},
    {q:"What does clear interaction help people do?",a:["interpret ideas correctly","interpret ideas"],hint:"A verb from the lesson plus ideas."}
  ],
  dictation:["People interact through the internet every day.","Clear interaction helps people interpret ideas correctly.","Many systems are interconnected."]
};

quizBank["Lesson 9"] = [
  {q:"Translate: tương tác",a:["interact"],hint:"Communicate or work with others."},
  {q:"Translate: sự tương tác",a:["interaction"],hint:"Noun form of interact."},
  {q:"Complete: She has an ___ for a new job.",a:["interview"],hint:"A formal meeting for work."},
  {q:"Translate: quốc tế",a:["international"],hint:"Between countries."},
  {q:"Complete: I found the information on the ___.",a:["internet"],hint:"Global online network."},
  {q:"Translate: diễn giải",a:["interpret"],hint:"Explain the meaning."},
  {q:"Complete: Please do not ___ the speaker.",a:["interrupt"],hint:"Stop someone while speaking."},
  {q:"Translate: khoảng thời gian",a:["interval"],hint:"Time between events."},
  {q:"Translate: nội bộ",a:["internal"],hint:"Inside an organization or system."},
  {q:"Complete: The skills are ___ and support each other.",a:["interconnected"],hint:"Connected with each other."}
];

lessonInfo["Lesson 10"] = {
  title: "Body Actions and Daily Habits",
  level: "B1-B2",
  goal: "Use everyday body-action verbs and personality words in natural health and lifestyle sentences.",
  output: "Describe a daily routine using at least six target words accurately.",
  topics: ["Body Actions", "Eating", "Fitness", "Personality", "Study Habits"]
};

const lesson10Items = [
  {lesson:"Lesson 10",topic:"Body Actions",english:"yawn",vi:"ngáp",example:"I yawn when I stay up too late.",exampleVi:"Tôi ngáp khi thức quá khuya.",approx:"IPA: /yawn/ | stress: YAWN",explain:"To open your mouth and breathe in because you are tired or bored.",usage:"Native use: very common in daily conversation.",visual:"SLEEP"},
  {lesson:"Lesson 10",topic:"Body Actions",english:"snore",vi:"ngáy khi ngủ",example:"He sometimes snores when he sleeps on his back.",exampleVi:"Anh ấy đôi khi ngáy khi nằm ngủ ngửa.",approx:"IPA: /snor/ | stress: SNORE",explain:"To make a loud breathing sound while sleeping.",usage:"Native use: common in family and health contexts.",visual:"SLEEP"},
  {lesson:"Lesson 10",topic:"Body Actions",english:"split",vi:"tách ra, chia ra, bị rách",example:"Let's split the workout into two shorter sessions.",exampleVi:"Hãy chia buổi tập thành hai phần ngắn hơn.",approx:"IPA: /split/ | one syllable: SPLIT",explain:"To divide something into parts; it can also mean tear or crack.",usage:"Native use: very common in planning, money, food, and exercise.",visual:"CUT"},
  {lesson:"Lesson 10",topic:"Body Actions",english:"soak",vi:"ngâm, thấm ướt",example:"Soak the oats in milk overnight.",exampleVi:"Ngâm yến mạch trong sữa qua đêm.",approx:"IPA: /sohk/ | stress: SOAK",explain:"To leave something in liquid or become very wet.",usage:"Native use: common in cooking, cleaning, and weather talk.",visual:"WATER"},
  {lesson:"Lesson 10",topic:"Body Actions",english:"swallow",vi:"nuốt",example:"Please swallow the tablet with a glass of water.",exampleVi:"Hãy nuốt viên thuốc với một ly nước.",approx:"IPA: /SWAH-loh/ | stress: SWA-low",explain:"To move food, drink, or medicine from your mouth down your throat.",usage:"Native use: common in eating, health, and medicine contexts.",visual:"FOOD"},
  {lesson:"Lesson 10",topic:"Body Actions",english:"lick",vi:"liếm",example:"The child licked the spoon after mixing the yogurt.",exampleVi:"Đứa trẻ liếm cái muỗng sau khi trộn sữa chua.",approx:"IPA: /lik/ | stress: LICK",explain:"To touch something with your tongue.",usage:"Native use: common but informal; use carefully in professional contexts.",visual:"FOOD"},
  {lesson:"Lesson 10",topic:"Body Actions",english:"suck",vi:"mút, hút",example:"Do not suck too much sugary candy during the day.",exampleVi:"Đừng mút quá nhiều kẹo ngọt trong ngày.",approx:"IPA: /suk/ | stress: SUCK",explain:"To pull liquid, air, or flavor into your mouth using your lips.",usage:"Native use: common in eating and health; it can also be slang in other contexts.",visual:"FOOD"},
  {lesson:"Lesson 10",topic:"Eating",english:"munch",vi:"nhai rau ráu, ăn vặt",example:"I munch on carrots when I want a healthy snack.",exampleVi:"Tôi nhai cà rốt khi muốn ăn vặt lành mạnh.",approx:"IPA: /munch/ | stress: MUNCH",explain:"To eat something with a steady chewing sound, often as a snack.",usage:"Native use: casual and common.",visual:"FOOD"},
  {lesson:"Lesson 10",topic:"Personality",english:"needy",vi:"hay đòi hỏi sự quan tâm, cần giúp đỡ nhiều",example:"A needy learner may ask for help before trying alone.",exampleVi:"Một người học hay phụ thuộc có thể hỏi giúp đỡ trước khi tự thử.",approx:"IPA: /NEE-dee/ | stress: NEE-dy",explain:"Needing too much attention, support, or emotional reassurance.",usage:"Native use: common, but it can sound critical, so use it carefully.",visual:"HELP"},
  {lesson:"Lesson 10",topic:"Fitness",english:"fitness",vi:"thể lực, sức khỏe thể chất",example:"Fitness improves when you train consistently and rest properly.",exampleVi:"Thể lực cải thiện khi bạn tập đều và nghỉ ngơi đúng cách.",approx:"IPA: /FIT-nis/ | stress: FIT-ness",explain:"Physical health and strength, especially from exercise.",usage:"Native use: very common in health, sport, and lifestyle contexts.",visual:"FIT"},
  {lesson:"Lesson 10",topic:"Study Habits",english:"proactive",vi:"chủ động",example:"A proactive student reviews mistakes before the next lesson.",exampleVi:"Một học viên chủ động xem lại lỗi sai trước bài tiếp theo.",approx:"IPA: /pro-AK-tiv/ | stress: pro-ACT-ive",explain:"Taking action early instead of only reacting later.",usage:"Native use: common in work, study, leadership, and self-development.",visual:"READY"},
  {lesson:"Lesson 10",topic:"Personality",english:"passive",vi:"thụ động",example:"Passive learning is not enough if you want to speak naturally.",exampleVi:"Học thụ động là chưa đủ nếu bạn muốn nói tự nhiên.",approx:"IPA: /PASS-iv/ | stress: PASS-ive",explain:"Not taking action; letting things happen without much response.",usage:"Native use: common in study, behavior, grammar, and psychology.",visual:"WAIT"}
];

grammarNotesBank["Lesson 10"] = [
  {title:"Action verbs for the body",body:"Words like yawn, snore, swallow, lick, suck, and munch describe visible or physical actions. They are often used in the present simple for habits.",pattern:"subject + action verb + object/time",example:"I munch on fruit after my workout.",meaning:"I eat fruit as a light snack after exercise."},
  {title:"Adjectives for behavior",body:"Needy, proactive, and passive describe a person's behavior or learning style. Be careful with needy because it can sound negative.",pattern:"be + adjective / adjective + noun",example:"A proactive learner practises before class.",meaning:"A learner who takes action early practises before class."},
  {title:"Split and soak in daily routines",body:"Split is useful for dividing time, money, tasks, or food. Soak is useful for cooking, cleaning, rain, and recovery routines.",pattern:"split something into parts / soak something in liquid",example:"She splits her fitness plan into short sessions and soaks oats overnight.",meaning:"She divides her plan and prepares oats in liquid."}
];

grammarBank["Lesson 10"] = [
  {q:"Complete: I ___ when I am very tired.",choices:["yawn","swallow","soak"],a:"yawn",why:"Yawn is the natural verb for opening your mouth when tired."},
  {q:"Choose the word that means taking action early.",choices:["proactive","passive","needy"],a:"proactive",why:"Proactive means acting before problems grow."},
  {q:"Complete: You should ___ the pill with water.",choices:["swallow","munch","snore"],a:"swallow",why:"Swallow means move something from the mouth down the throat."}
];

listeningBank["Lesson 10"] = {
  text:"A healthy routine is active, not passive. In the morning, you might yawn once or twice, drink water, and swallow your vitamins. For breakfast, you can soak oats overnight and munch on fruit instead of sucking candy. During fitness training, split a long workout into shorter sessions if you feel tired. A proactive learner notices habits early, while a needy learner may wait for help before trying alone. At night, good sleep matters too, especially if you snore often.",
  meaning:"Một thói quen lành mạnh là chủ động, không thụ động. Vào buổi sáng, bạn có thể ngáp một hoặc hai lần, uống nước, và nuốt viên vitamin. Đối với bữa sáng, bạn có thể ngâm yến mạch qua đêm và nhai trái cây thay vì mút kẹo. Trong khi tập luyện thể lực, hãy chia một buổi tập dài thành các phần ngắn hơn nếu bạn cảm thấy mệt. Một người học chủ động nhận ra thói quen sớm, trong khi một người học hay phụ thuộc có thể chờ giúp đỡ trước khi tự thử. Vào ban đêm, giấc ngủ tốt cũng quan trọng, đặc biệt nếu bạn thường ngáy.",
  questions:[
    {q:"What can you soak overnight for breakfast?",a:["oats","soak oats","oats overnight"],hint:"A breakfast food."},
    {q:"What should you split if you feel tired?",a:["a long workout","long workout","the workout"],hint:"A fitness activity."},
    {q:"What kind of learner notices habits early?",a:["a proactive learner","proactive learner"],hint:"The opposite of passive."}
  ],
  dictation:["A healthy routine is active, not passive.","Split a long workout into shorter sessions.","A proactive learner notices habits early."]
};

quizBank["Lesson 10"] = [
  {q:"Translate: ngáp",a:["yawn"],hint:"You do this when tired."},
  {q:"Translate: ngáy khi ngủ",a:["snore"],hint:"A noisy sleep sound."},
  {q:"Complete: Let's ___ the lesson into two parts.",a:["split"],hint:"Divide into parts."},
  {q:"Translate: ngâm",a:["soak"],hint:"Leave in liquid."},
  {q:"Complete: ___ the medicine with water.",a:["swallow"],hint:"Move it down your throat."},
  {q:"Translate: liếm",a:["lick"],hint:"Use your tongue."},
  {q:"Translate: mút",a:["suck"],hint:"Pull with your lips or mouth."},
  {q:"Complete: I ___ on nuts after training.",a:["munch"],hint:"Eat as a snack with chewing."},
  {q:"Translate: hay đòi hỏi sự quan tâm",a:["needy"],hint:"Needs too much support or attention."},
  {q:"Translate: thể lực",a:["fitness"],hint:"Physical health from exercise."},
  {q:"Complete: A ___ student prepares before class.",a:["proactive"],hint:"Takes action early."},
  {q:"Complete: ___ learning is not enough for speaking.",a:["passive"],hint:"Not active."}
];

function createLesson(id, vocabulary){
  return {
    id,
    info: lessonInfo[id],
    vocabulary,
    grammarNotes: grammarNotesBank[id] || [],
    grammar: grammarBank[id] || [],
    listening: listeningBank[id] || null,
    quiz: quizBank[id] || []
  };
}

const lessonCatalog = [
  createLesson("Lesson 1", baseItems.filter(x=>x.lesson === "Lesson 1")),
  createLesson("Lesson 2", baseItems.filter(x=>x.lesson === "Lesson 2")),
  createLesson("Lesson 3", baseItems.filter(x=>x.lesson === "Lesson 3")),
  createLesson("Lesson 4", lesson4Items),
  createLesson("Lesson 5", lesson5Items),
  createLesson("Lesson 6", lesson6Items),
  createLesson("Lesson 7", lesson7Items),
  createLesson("Lesson 8", lesson8Items),
  createLesson("Lesson 9", lesson9Items),
  createLesson("Lesson 10", lesson10Items)
];

const lessonsById = Object.fromEntries(lessonCatalog.map(lesson=>[lesson.id, lesson]));
const fallbackLesson = lessonsById["Lesson 1"];

function getLessonData(id){ return lessonsById[id] || null; }
function getLessonInfo(id){ return getLessonData(id)?.info || lessonInfo[id]; }
function getLessonListening(id){ return getLessonData(id)?.listening || listeningBank[id] || fallbackLesson.listening; }
function allItems(){ return [...lessonCatalog.flatMap(lesson=>lesson.vocabulary), ...customItems]; }
function validateLessonCatalog(){
  const missing = lessonCatalog.flatMap(lesson=>{
    const gaps = [];
    if(!lesson.info) gaps.push("info");
    if(!lesson.vocabulary.length) gaps.push("vocabulary");
    if(!lesson.grammarNotes.length) gaps.push("grammar notes");
    if(!lesson.grammar.length) gaps.push("grammar practice");
    if(!lesson.listening) gaps.push("listening");
    if(!lesson.quiz.length) gaps.push("quiz");
    return gaps.length ? [`${lesson.id}: ${gaps.join(", ")}`] : [];
  });
  if(missing.length) console.warn("Lesson catalog needs attention:", missing);
}
