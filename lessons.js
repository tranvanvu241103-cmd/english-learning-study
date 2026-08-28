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
lessonInfo["Lesson 11"] = {
  title: "Synonym Groups: Everyday Action Verbs",
  level: "A2-B1",
  goal: "Tell apart close synonyms for teaching, learning, finishing, giving, and receiving, and use each one with the correct nuance.",
  output: "Describe a learning or workplace situation using at least six of these verbs with the correct nuance.",
  topics: ["Teaching", "Learning", "Finishing", "Giving", "Receiving"]
};

const lesson11Items = [
  {lesson:"Lesson 11",topic:"Teaching",english:"show",vi:"chỉ cho ai thấy cách làm",example:"She showed me how to use the app.",exampleVi:"Cô ấy chỉ cho tôi cách dùng ứng dụng.",approx:"IPA: /ʃoʊ/ | gần đúng: SHOH",explain:"To let someone see how something is done, often by demonstrating directly rather than only using words.",usage:"Native use: very common in everyday instructions and casual teaching.",visual:"👀"},
  {lesson:"Lesson 11",topic:"Teaching",english:"explain",vi:"giải thích rõ ràng bằng lời",example:"He explained the rules.",exampleVi:"Anh ấy giải thích các quy tắc.",approx:"IPA: /ɪkˈspleɪn/ | gần đúng: ik-SPLAYN",explain:"To make something clear using words, especially reasons or how something works.",usage:"Native use: common in teaching, meetings, and everyday clarification.",visual:"🗣️"},
  {lesson:"Lesson 11",topic:"Teaching",english:"teach",vi:"dạy, giúp ai học theo thời gian",example:"She teaches English at a school.",exampleVi:"Cô ấy dạy tiếng Anh ở một trường học.",approx:"IPA: /tiːtʃ/ | gần đúng: TEECH",explain:"To help someone learn something over an extended period, often as a profession or a repeated activity.",usage:"Native use: essential in education and everyday mentoring.",visual:"🍎"},
  {lesson:"Lesson 11",topic:"Teaching",english:"train",vi:"huấn luyện, đào tạo kỹ năng cụ thể",example:"The company trains new workers.",exampleVi:"Công ty đào tạo nhân viên mới.",approx:"IPA: /treɪn/ | gần đúng: TRAYN",explain:"To prepare someone to do a specific job or skill, usually through structured practice.",usage:"Native use: common in workplaces, sports, and professional development.",visual:"🏋️"},

  {lesson:"Lesson 11",topic:"Learning",english:"study",vi:"học, dành thời gian đọc/luyện tập",example:"He studies English every day.",exampleVi:"Anh ấy học tiếng Anh mỗi ngày.",approx:"IPA: /ˈstʌdi/ | gần đúng: STUH-dee",explain:"To spend time reading or practising in order to learn something; describes the process, not the result.",usage:"Native use: common for school, self-study, and exam preparation.",visual:"📖"},
  {lesson:"Lesson 11",topic:"Learning",english:"learn",vi:"học được, tiếp thu kiến thức/kỹ năng mới",example:"She learned to drive.",exampleVi:"Cô ấy đã học lái xe.",approx:"IPA: /lɜːrn/ | gần đúng: LURN",explain:"To get new information or a new skill; often the result of studying, practising, or experience.",usage:"Native use: very common in everyday speech about skills and knowledge.",visual:"🚗"},
  {lesson:"Lesson 11",topic:"Learning",english:"know",vi:"biết, đã có thông tin sẵn trong đầu",example:"I know her name.",exampleVi:"Tôi biết tên cô ấy.",approx:"IPA: /noʊ/ | gần đúng: NOH",explain:"To already have information in your mind. This is a state verb, so it is not normally used in continuous form.",usage:"Native use: extremely common; avoid saying 'I am knowing'.",visual:"🧠"},
  {lesson:"Lesson 11",topic:"Learning",english:"understand",vi:"hiểu ý nghĩa hoặc lý do",example:"I understand the question.",exampleVi:"Tôi hiểu câu hỏi.",approx:"IPA: /ˌʌndərˈstænd/ | gần đúng: un-dər-STAND",explain:"To know what something means or why it happens, which is deeper than simply knowing a fact.",usage:"Native use: essential in study, conversation, and instructions.",visual:"💡"},

  {lesson:"Lesson 11",topic:"Finishing",english:"finish",vi:"hoàn thành, làm xong phần cuối",example:"I finished my homework.",exampleVi:"Tôi đã làm xong bài tập về nhà.",approx:"IPA: /ˈfɪnɪʃ/ | gần đúng: FIN-ish",explain:"To reach the last part of something you were doing.",usage:"Native use: very common in daily tasks, work, and study.",visual:"✅"},
  {lesson:"Lesson 11",topic:"Finishing",english:"end",vi:"kết thúc, không tiếp tục nữa",example:"The movie ended at 9pm.",exampleVi:"Bộ phim kết thúc lúc 9 giờ tối.",approx:"IPA: /end/ | gần đúng: END",explain:"When something stops and does not continue, often used for time-based events rather than tasks.",usage:"Native use: common for events, movies, meetings, and periods of time.",visual:"🔚"},
  {lesson:"Lesson 11",topic:"Finishing",english:"complete",vi:"hoàn tất đầy đủ mọi phần",example:"She completed the form.",exampleVi:"Cô ấy đã hoàn tất biểu mẫu.",approx:"IPA: /kəmˈpliːt/ | gần đúng: kəm-PLEET",explain:"To finish something fully, with every part done. Slightly more formal than finish.",usage:"Native use: common in forms, projects, and official processes.",visual:"📋"},
  {lesson:"Lesson 11",topic:"Finishing",english:"stop",vi:"dừng lại, không làm nữa",example:"He stopped talking.",exampleVi:"Anh ấy ngừng nói.",approx:"IPA: /stɑːp/ | gần đúng: STAHP",explain:"To not continue doing something. Stopping does not always mean the task is finished.",usage:"Native use: extremely common in everyday speech.",visual:"🛑"},

  {lesson:"Lesson 11",topic:"Giving",english:"give",vi:"đưa/trao cái gì đó cho ai",example:"She gave me a gift.",exampleVi:"Cô ấy tặng tôi một món quà.",approx:"IPA: /ɡɪv/ | gần đúng: GIV",explain:"To pass something to someone. This is the most general and common giving verb.",usage:"Native use: essential everyday verb.",visual:"🎁"},
  {lesson:"Lesson 11",topic:"Giving",english:"offer",vi:"đề nghị, hỏi xem ai có muốn không",example:"He offered me a drink.",exampleVi:"Anh ấy mời tôi uống nước.",approx:"IPA: /ˈɒfər/ or /ˈɔːfər/ | gần đúng: AW-fər",explain:"To ask if someone wants something, before they necessarily ask for it themselves.",usage:"Native use: common in hospitality, service, and polite conversation.",visual:"🤲"},
  {lesson:"Lesson 11",topic:"Giving",english:"provide",vi:"cung cấp cái cần thiết",example:"The school provides free meals.",exampleVi:"Trường học cung cấp bữa ăn miễn phí.",approx:"IPA: /prəˈvaɪd/ | gần đúng: prə-VYD",explain:"To give something that is needed, often in an organized or official way.",usage:"Native use: common in services, institutions, and formal writing.",visual:"🍽️"},
  {lesson:"Lesson 11",topic:"Giving",english:"supply",vi:"cung ứng thường xuyên hoặc số lượng lớn",example:"The company supplies food to restaurants.",exampleVi:"Công ty cung ứng thực phẩm cho các nhà hàng.",approx:"IPA: /səˈplaɪ/ | gần đúng: sə-PLY",explain:"To provide something regularly or in large amounts, often as an ongoing business activity.",usage:"Native use: common in business, logistics, and trade.",visual:"📦"},

  {lesson:"Lesson 11",topic:"Receiving",english:"get",vi:"nhận được hoặc có được cái gì",example:"I got a new phone.",exampleVi:"Tôi đã có một chiếc điện thoại mới.",approx:"IPA: /ɡet/ | gần đúng: GET",explain:"A general, informal verb for receiving or obtaining something.",usage:"Native use: extremely common in everyday spoken English.",visual:"📱"},
  {lesson:"Lesson 11",topic:"Receiving",english:"receive",vi:"nhận cái được gửi/trao cho mình",example:"She received a letter.",exampleVi:"Cô ấy đã nhận được một lá thư.",approx:"IPA: /rɪˈsiːv/ | gần đúng: ri-SEEV",explain:"To get something that is sent or given to you. More formal than get.",usage:"Native use: common in writing, mail, and official contexts.",visual:"✉️"},
  {lesson:"Lesson 11",topic:"Receiving",english:"take",vi:"lấy cái gì đó một cách chủ động",example:"He took a book from the shelf.",exampleVi:"Anh ấy lấy một cuốn sách từ kệ.",approx:"IPA: /teɪk/ | gần đúng: TAYK",explain:"To get something actively yourself, rather than passively receiving it from someone.",usage:"Native use: very common in everyday actions.",visual:"📚"},
  {lesson:"Lesson 11",topic:"Receiving",english:"accept",vi:"đồng ý nhận khi được đề nghị",example:"I accepted the job.",exampleVi:"Tôi đã nhận công việc.",approx:"IPA: /əkˈsept/ | gần đúng: ək-SEPT",explain:"To say yes when someone offers you something.",usage:"Native use: common in job offers, invitations, and gifts.",visual:"🤝"}
];

grammarNotesBank["Lesson 11"] = [
  {title:"Show vs explain vs teach vs train",body:"Show is a physical demonstration, explain uses words to make something clear, teach is a repeated process over time, and train focuses on preparing someone for a specific skill or job.",pattern:"show + someone + how to / explain + noun or clause / teach + someone + subject / train + someone + to do something",example:"She showed me the steps, explained why they matter, and now teaches a full class, while the gym trains beginners to lift safely.",meaning:"Cô ấy chỉ cho tôi các bước, giải thích lý do quan trọng, và giờ dạy cả một lớp, trong khi phòng gym huấn luyện người mới nâng tạ an toàn."},
  {title:"Study vs learn vs know vs understand",body:"Study is the action of practising or reading, learn is gaining new ability or information, know is already having information (a state), and understand is grasping meaning or reasons.",pattern:"study + subject / learn + skill / know + fact / understand + meaning or reason",example:"I studied grammar for weeks, learned the rule, now I know it, and I understand why it works this way.",meaning:"Tôi học ngữ pháp trong nhiều tuần, học được quy tắc, giờ tôi biết nó, và tôi hiểu tại sao nó lại như vậy."},
  {title:"Give vs offer vs provide vs supply; get vs receive vs take vs accept",body:"Give is general, offer asks if someone wants something first, provide is organized giving of something needed, and supply is regular or large-scale provision. On the receiving side, get is informal and general, receive is more formal, take is an active action, and accept means saying yes to something offered.",pattern:"give/offer/provide/supply + something (+ to someone) | get/receive/take/accept + something",example:"The company offered a trial, then provided full training, and now supplies the tool to clients who accepted the terms.",meaning:"Công ty đề nghị dùng thử, sau đó cung cấp đào tạo đầy đủ, và giờ cung ứng công cụ cho khách hàng đã đồng ý các điều khoản."}
];

grammarBank["Lesson 11"] = [
  {q:"Choose the best verb: A teacher ___ students grammar over a whole semester.",choices:["shows","teaches","trains"],a:"teaches",why:"'Teach' describes helping someone learn over time, especially as a subject or profession."},
  {q:"Complete: I don't just know the rule, I actually ___ why it works.",choices:["understand","study","get"],a:"understand",why:"'Understand' means grasping meaning or reasons, not just holding a fact in your memory."},
  {q:"Choose the correct verb: He was offered the job and he ___ it immediately.",choices:["accepted","supplied","received"],a:"accepted",why:"'Accept' means to say yes when something is offered to you."}
];

listeningBank["Lesson 11"] = {
  text:"On her first day, a new colleague showed Mai how the system worked and explained each step slowly. Over the following weeks, the team trained her on the software while she continued to study the manual at home. She did not just memorize facts; she wanted to understand why each rule existed, not only know it by heart. When she finished her training, the manager offered her a permanent contract. The company provides regular support to new staff and supplies extra materials when needed. Mai gladly accepted the offer and received her first assignment the next morning.",
  meaning:"Vào ngày đầu tiên, một đồng nghiệp mới đã chỉ cho Mai cách hệ thống hoạt động và giải thích từng bước một cách chậm rãi. Trong những tuần tiếp theo, nhóm đã đào tạo cô ấy về phần mềm trong khi cô tiếp tục học tài liệu hướng dẫn ở nhà. Cô không chỉ ghi nhớ các sự kiện; cô muốn hiểu tại sao mỗi quy tắc tồn tại, chứ không chỉ biết nó thuộc lòng. Khi hoàn thành khóa đào tạo, quản lý đã đề nghị cô một hợp đồng chính thức. Công ty cung cấp hỗ trợ thường xuyên cho nhân viên mới và cung ứng thêm tài liệu khi cần. Mai vui vẻ chấp nhận lời đề nghị và nhận nhiệm vụ đầu tiên vào sáng hôm sau.",
  questions:[
    {q:"What did the colleague do on Mai's first day?",a:["showed Mai how the system worked and explained each step","showed her how the system worked and explained each step"],hint:"Two actions with show and explain."},
    {q:"What did Mai want to do besides just knowing the rule?",a:["understand why each rule existed","understand why the rule existed"],hint:"A deeper verb than know."},
    {q:"What did Mai do when she was offered the contract?",a:["accepted the offer","she accepted the offer"],hint:"The verb for saying yes to an offer."}
  ],
  dictation:["She wanted to understand why each rule existed, not only know it by heart.","Mai gladly accepted the offer and received her first assignment the next morning."]
};

quizBank["Lesson 11"] = [
  {q:"Translate: chỉ cho ai thấy cách làm",a:["show"],hint:"A physical demonstration."},
  {q:"Translate: giải thích rõ ràng bằng lời",a:["explain"],hint:"Uses words, not demonstration."},
  {q:"Complete: The gym ___ new members to lift weights safely.",a:["trains"],hint:"Prepares someone for a specific skill."},
  {q:"Translate: học, dành thời gian luyện tập",a:["study"],hint:"The process, not the result."},
  {q:"Complete: I ___ her name, but I don't ___ why she left.",a:["know understand","know, understand"],hint:"First a fact, then a reason."},
  {q:"Translate: hoàn tất đầy đủ mọi phần",a:["complete"],hint:"More formal than finish."},
  {q:"Complete: Please ___ talking so we can start the meeting.",a:["stop"],hint:"Not continue doing something."},
  {q:"Translate: đề nghị, hỏi xem ai có muốn không",a:["offer"],hint:"Ask before someone requests it."},
  {q:"Complete: The factory ___ parts to car makers every month.",a:["supplies"],hint:"Regular or large-scale provision."},
  {q:"Translate: nhận cái được gửi cho mình (trang trọng)",a:["receive"],hint:"More formal than get."},
  {q:"Complete: She ___ the job offer right away.",a:["accepted"],hint:"Said yes to something offered."}
];
lessonInfo["Lesson 12"] = {
  title: "Everyday Object and Car Actions (Phrasal Verbs)",
  level: "A1-A2",
  goal: "Describe moving objects and getting in and out of a car using common action and phrasal verbs correctly.",
  output: "Describe a short daily routine involving objects and a car ride using at least six of these verbs accurately.",
  topics: ["Object Actions", "Car & Travel"]
};

const lesson12Items = [
  {lesson:"Lesson 12",topic:"Object Actions",english:"move",vi:"di chuyển, đổi vị trí",example:"He moved the box to the other side.",exampleVi:"Anh ấy di chuyển chiếc hộp sang phía bên kia.",approx:"IPA: /muːv/ | gần đúng: MOOV",explain:"To change the position of something. You can move an object without lifting it, for example by sliding or pushing it.",usage:"Native use: very common, general everyday verb.",visual:"➡️"},
  {lesson:"Lesson 12",topic:"Object Actions",english:"pick up",vi:"nhấc lên, nâng lên bằng tay",example:"He picked up the box.",exampleVi:"Anh ấy nhấc chiếc hộp lên.",approx:"IPA: /pɪk ʌp/ | gần đúng: pik UP",explain:"To lift something with your hands. Unlike move, pick up always means the object leaves the surface.",usage:"Native use: very common in daily actions and instructions.",visual:"🙌"},
  {lesson:"Lesson 12",topic:"Object Actions",english:"take out",vi:"lấy ra khỏi bên trong",example:"He took the book out of the box.",exampleVi:"Anh ấy lấy cuốn sách ra khỏi hộp.",approx:"IPA: /teɪk aʊt/ | gần đúng: tayk OUT",explain:"To remove something from inside a container or space.",usage:"Native use: very common; pattern is take something out of somewhere.",visual:"📤"},
  {lesson:"Lesson 12",topic:"Object Actions",english:"put in",vi:"đặt vào bên trong",example:"He put the book in the box.",exampleVi:"Anh ấy đặt cuốn sách vào hộp.",approx:"IPA: /pʊt ɪn/ | gần đúng: put IN",explain:"To place something inside something else. The opposite of take out.",usage:"Native use: very common; pattern is put something in somewhere.",visual:"📥"},
  {lesson:"Lesson 12",topic:"Object Actions",english:"put on",vi:"đặt lên bề mặt / mặc vào (quần áo)",example:"He put the box on the table.",exampleVi:"Anh ấy đặt chiếc hộp lên bàn.",approx:"IPA: /pʊt ɒn/ | gần đúng: put ON",explain:"To place something on a surface. With clothes, put on means to start wearing something.",usage:"Native use: very common for objects and clothing alike.",visual:"⬇️"},
  {lesson:"Lesson 12",topic:"Object Actions",english:"take off",vi:"lấy xuống / cởi ra (quần áo)",example:"He took the box off the table.",exampleVi:"Anh ấy lấy chiếc hộp xuống khỏi bàn.",approx:"IPA: /teɪk ɒf/ | gần đúng: tayk OFF",explain:"To remove something from a surface. With clothes, take off means to remove what you are wearing. The opposite of put on.",usage:"Native use: very common for objects and clothing alike.",visual:"⬆️"},

  {lesson:"Lesson 12",topic:"Car & Travel",english:"pick up",vi:"đón ai đó lên xe",example:"He picked her up.",exampleVi:"Anh ấy đón cô ấy lên xe.",approx:"IPA: /pɪk ʌp/ | gần đúng: pik UP",explain:"With a person and a car, pick up means to collect someone so they get into your car. A different sense from lifting an object.",usage:"Native use: very common in everyday transport talk.",visual:"🚗"},
  {lesson:"Lesson 12",topic:"Car & Travel",english:"drop off",vi:"chở ai đó đến rồi để họ xuống",example:"He dropped her off at her house.",exampleVi:"Anh ấy chở cô ấy đến nhà rồi để cô xuống.",approx:"IPA: /drɒp ɒf/ | gần đúng: drop OFF",explain:"To take someone to a place in your car and leave them there. The opposite of pick up in this sense.",usage:"Native use: very common in everyday transport talk.",visual:"🏠"},
  {lesson:"Lesson 12",topic:"Car & Travel",english:"drive off",vi:"lái xe rời đi",example:"After saying goodbye, he drove off.",exampleVi:"Sau khi chào tạm biệt, anh ấy lái xe rời đi.",approx:"IPA: /draɪv ɒf/ | gần đúng: draiv OFF",explain:"To leave a place by driving away. Focuses on departure, not on stopping.",usage:"Native use: common in storytelling and everyday narration.",visual:"💨"},
  {lesson:"Lesson 12",topic:"Car & Travel",english:"pull over",vi:"tấp xe vào lề đường",example:"He pulled over when the engine made noise.",exampleVi:"Anh ấy tấp xe vào lề khi động cơ phát ra tiếng ồn.",approx:"IPA: /pʊl ˈoʊvər/ | gần đúng: pul OH-vər",explain:"To move a car to the side of the road, usually to stop for a reason. The opposite idea from drive off.",usage:"Native use: common in driving, safety, and traffic contexts.",visual:"🛑"},
  {lesson:"Lesson 12",topic:"Car & Travel",english:"get in",vi:"lên xe (ô tô)",example:"He got in the car and drove to work.",exampleVi:"Anh ấy lên xe và lái đến chỗ làm.",approx:"IPA: /ɡet ɪn/ | gần đúng: get IN",explain:"To enter a car. Used with get in/get out for cars and taxis, but get on/get off for buses, trains, and planes.",usage:"Native use: very common in everyday transport talk.",visual:"🚪"},
  {lesson:"Lesson 12",topic:"Car & Travel",english:"get out",vi:"xuống xe (ô tô)",example:"He got out of the car and closed the door.",exampleVi:"Anh ấy xuống xe và đóng cửa lại.",approx:"IPA: /ɡet aʊt/ | gần đúng: get OUT",explain:"To leave a car. The opposite of get in. Pattern: get out of the car.",usage:"Native use: very common in everyday transport talk.",visual:"🚶"}
];

grammarNotesBank["Lesson 12"] = [
  {title:"Move vs pick up",body:"Move only changes an object's position, and it can happen without lifting (sliding, pushing). Pick up always means lifting something off a surface with your hands.",pattern:"move + object (+ to/toward + place) / pick up + object",example:"She moved the chair closer to the desk, then picked up her bag.",meaning:"Cô ấy di chuyển chiếc ghế lại gần bàn hơn, rồi nhấc chiếc túi lên."},
  {title:"Put in / take out vs put on / take off",body:"In/out describes something moving inside or outside a container or space. On/off describes something moving onto or off a surface, or being worn or removed as clothing.",pattern:"put something in / take something out of + container | put something on / take something off + surface or clothing",example:"He took his keys out of his pocket, put them on the table, and took off his jacket.",meaning:"Anh ấy lấy chìa khóa ra khỏi túi quần, đặt lên bàn, rồi cởi áo khoác ra."},
  {title:"Car actions: pick up/drop off vs drive off/pull over vs get in/get out",body:"Pick up and drop off describe collecting or leaving a person by car. Drive off and pull over describe what the car itself does while moving (leaving) or stopping (at the side of the road). Get in and get out describe a person entering or leaving the car.",pattern:"pick up/drop off + someone | drive off / pull over | get in/get out (+ of) + the car",example:"She got in the car, picked up her colleague, and later pulled over to let him get out near the office.",meaning:"Cô ấy lên xe, đón đồng nghiệp, rồi sau đó tấp xe vào lề để anh ấy xuống gần văn phòng."}
];

grammarBank["Lesson 12"] = [
  {q:"Choose the best verb: He ___ the box from the floor using both hands.",choices:["moved","picked up","dropped off"],a:"picked up",why:"'Pick up' means lifting with your hands; 'move' only means changing position and does not require lifting."},
  {q:"Complete: Before entering the office, she ___ her coat.",choices:["took off","picked up","pulled over"],a:"took off",why:"'Take off' means remove clothing (or an object from a surface)."},
  {q:"Choose the correct phrase: The driver ___ when the phone rang, so he could answer safely.",choices:["pulled over","dropped off","picked up"],a:"pulled over",why:"'Pull over' means move the car to the side of the road, usually to stop safely."}
];

listeningBank["Lesson 12"] = {
  text:"This morning, Nam picked up his bag from the chair and put it on the table. He took his keys out of the drawer and put on his jacket before leaving. Outside, his father was waiting in the car. Nam got in quickly, and his father drove off toward school. On the way, another driver pulled over to check a flat tire. A few minutes later, Nam's father dropped him off at the school gate, and Nam got out and waved goodbye.",
  meaning:"Sáng nay, Nam nhấc chiếc túi của mình từ ghế lên và đặt nó lên bàn. Cậu lấy chìa khóa ra khỏi ngăn kéo và mặc áo khoác trước khi ra ngoài. Bên ngoài, bố cậu đang đợi trong xe. Nam nhanh chóng lên xe, và bố cậu lái xe rời đi hướng tới trường. Trên đường đi, một tài xế khác tấp xe vào lề để kiểm tra lốp xe bị xẹp. Vài phút sau, bố Nam chở cậu đến cổng trường rồi để cậu xuống, và Nam xuống xe và vẫy tay chào tạm biệt.",
  questions:[
    {q:"What did Nam do with his bag?",a:["picked up his bag from the chair and put it on the table","picked it up and put it on the table"],hint:"Two actions with pick up and put on."},
    {q:"What did Nam's father do after Nam got in the car?",a:["drove off toward school","drove off"],hint:"The verb for leaving by driving away."},
    {q:"What did Nam do when his father dropped him off?",a:["got out and waved goodbye","got out"],hint:"The verb for leaving the car."}
  ],
  dictation:["Nam got in quickly, and his father drove off toward school.","A few minutes later, Nam's father dropped him off at the school gate."]
};

quizBank["Lesson 12"] = [
  {q:"Translate: di chuyển, đổi vị trí",a:["move"],hint:"Changing position; does not require lifting."},
  {q:"Translate: nhấc lên bằng tay",a:["pick up"],hint:"Lifting an object with your hands."},
  {q:"Complete: He ___ the book out of the box.",a:["took"],hint:"Removed something from inside."},
  {q:"Translate: đặt vào bên trong",a:["put in"],hint:"The opposite of take out."},
  {q:"Translate: đặt lên bề mặt / mặc vào",a:["put on"],hint:"Also used for wearing clothes."},
  {q:"Complete: She ___ her shoes before going to bed.",a:["took off"],hint:"Removing something worn or placed."},
  {q:"Translate: đón ai đó lên xe",a:["pick up"],hint:"Collecting a person by car."},
  {q:"Translate: chở ai đó đến rồi để họ xuống",a:["drop off"],hint:"The opposite of pick up (for people)."},
  {q:"Complete: After saying goodbye, he ___.",a:["drove off"],hint:"Leaving by driving away."},
  {q:"Translate: tấp xe vào lề đường",a:["pull over"],hint:"Stopping the car at the side of the road."},
  {q:"Complete: He ___ the car and drove to work.",a:["got in"],hint:"Entering a car."},
  {q:"Translate: xuống xe",a:["get out"],hint:"Leaving a car."}
];

lessonInfo["Lesson 13"] = {
  title: "Vivid Verbs and Nature's Extremes",
  level: "B1-B2",
  goal: "Use precise action verbs for cooking and movement, and tell apart closely related weather and natural-disaster nouns.",
  output: "Describe a cooking step, a movement scene, and a weather event using at least six target words with the correct nuance.",
  topics: ["Cooking Actions", "Water Movement", "Surface Movement", "Weather Extremes", "Natural Disasters"]
};

const lesson13Items = [
  {lesson:"Lesson 13",topic:"Cooking Actions",english:"peel",vi:"gọt vỏ",example:"She peels the apple.",exampleVi:"Cô ấy gọt vỏ quả táo.",approx:"IPA: /piːl/ | gần đúng: PEEL",explain:"To remove the outer skin of something, usually fruit or vegetables.",usage:"Native use: very common in cooking instructions and recipes.",visual:"🔪"},
  {lesson:"Lesson 13",topic:"Cooking Actions",english:"grate",vi:"bào nhỏ",example:"He grates the cheese.",exampleVi:"Anh ấy bào nhỏ phô mai.",approx:"IPA: /ɡreɪt/ | gần đúng: GRAYT",explain:"To cut food into very small pieces by rubbing it against a grater.",usage:"Native use: common in cooking, especially with cheese, vegetables, and citrus zest.",visual:"🧀"},
  {lesson:"Lesson 13",topic:"Cooking Actions",english:"mash",vi:"nghiền nhuyễn",example:"She mashes the potatoes.",exampleVi:"Cô ấy nghiền nhuyễn khoai tây.",approx:"IPA: /mæʃ/ | gần đúng: MASH",explain:"To press food until it becomes soft and smooth.",usage:"Native use: common in cooking, especially potatoes, bananas, and beans.",visual:"🥔"},
  {lesson:"Lesson 13",topic:"Cooking Actions",english:"crush",vi:"nghiền nát",example:"He crushes the garlic.",exampleVi:"Anh ấy nghiền nát tỏi.",approx:"IPA: /krʌʃ/ | gần đúng: KRUSH",explain:"To press something hard so it breaks into small pieces.",usage:"Native use: common in cooking, and also used more broadly for breaking hard objects.",visual:"🧄"},

  {lesson:"Lesson 13",topic:"Water Movement",english:"wade",vi:"lội nước",example:"The boy wades in the river.",exampleVi:"Cậu bé lội nước trong sông.",approx:"IPA: /weɪd/ | gần đúng: WAYD",explain:"To walk through water, usually slowly because of the resistance.",usage:"Native use: common in nature, travel, and storytelling contexts.",visual:"🚶"},
  {lesson:"Lesson 13",topic:"Water Movement",english:"swim",vi:"bơi",example:"The boy swims across the pool.",exampleVi:"Cậu bé bơi qua bể bơi.",approx:"IPA: /swɪm/ | gần đúng: SWIM",explain:"To move through water using your arms and legs.",usage:"Native use: extremely common everyday verb.",visual:"🏊"},
  {lesson:"Lesson 13",topic:"Water Movement",english:"dive",vi:"lặn, nhảy xuống nước",example:"He dives into the water.",exampleVi:"Anh ấy nhảy lặn xuống nước.",approx:"IPA: /daɪv/ | gần đúng: DYVE",explain:"To jump or move down into water, often head first.",usage:"Native use: common in swimming, sport, and everyday narration.",visual:"🤿"},
  {lesson:"Lesson 13",topic:"Water Movement",english:"float",vi:"nổi trên mặt nước",example:"He floats on his back.",exampleVi:"Anh ấy nổi trên mặt nước, nằm ngửa.",approx:"IPA: /floʊt/ | gần đúng: FLOHT",explain:"To stay on the surface of water without sinking.",usage:"Native use: common in swimming, science, and everyday description.",visual:"🛟"},

  {lesson:"Lesson 13",topic:"Surface Movement",english:"slide",vi:"trượt trên bề mặt",example:"The box slides across the floor.",exampleVi:"Chiếc hộp trượt trên sàn nhà.",approx:"IPA: /slaɪd/ | gần đúng: SLYDE",explain:"To move smoothly along a surface.",usage:"Native use: very common for objects, playgrounds, and everyday movement.",visual:"🛝"},
  {lesson:"Lesson 13",topic:"Surface Movement",english:"glide",vi:"lướt nhẹ nhàng",example:"The skater glides across the ice.",exampleVi:"Vận động viên trượt băng lướt nhẹ nhàng trên băng.",approx:"IPA: /ɡlaɪd/ | gần đúng: GLYDE",explain:"To move smoothly and easily, with little effort.",usage:"Native use: common in skating, flying, and graceful movement descriptions.",visual:"⛸️"},
  {lesson:"Lesson 13",topic:"Surface Movement",english:"skid",vi:"trượt mất kiểm soát",example:"The car skids on the road.",exampleVi:"Chiếc xe trượt mất kiểm soát trên đường.",approx:"IPA: /skɪd/ | gần đúng: SKID",explain:"To slide suddenly and without control, often because of a wet or icy surface.",usage:"Native use: common in driving, weather, and safety contexts.",visual:"🚙"},
  {lesson:"Lesson 13",topic:"Surface Movement",english:"drift",vi:"trượt ngang khi rẽ",example:"The car drifts around the corner.",exampleVi:"Chiếc xe trượt ngang khi rẽ ở khúc cua.",approx:"IPA: /drɪft/ | gần đúng: DRIFT",explain:"To move sideways while turning, especially in a car.",usage:"Native use: common in driving, motorsport, and vivid narration.",visual:"🏎️"},

  {lesson:"Lesson 13",topic:"Weather Extremes",english:"mist",vi:"sương mù mỏng",example:"There is mist over the lake this morning.",exampleVi:"Có sương mù mỏng trên hồ sáng nay.",approx:"IPA: /mɪst/ | gần đúng: MIST",explain:"Very thin water droplets in the air; you can still see through it. Compare with fog, which is much thicker.",usage:"Native use: common in weather reports, nature writing, and daily conversation.",visual:"🌫️"},
  {lesson:"Lesson 13",topic:"Weather Extremes",english:"fog",vi:"sương mù dày đặc",example:"The road is covered in thick fog.",exampleVi:"Con đường bị bao phủ bởi sương mù dày đặc.",approx:"IPA: /fɔːɡ/ | gần đúng: FAWG",explain:"Very thick water droplets in the air; you can hardly see through it. Compare with mist, which is much thinner.",usage:"Native use: very common in weather reports, driving safety, and daily conversation.",visual:"🌁"},
  {lesson:"Lesson 13",topic:"Weather Extremes",english:"hail",vi:"mưa đá",example:"Hail damaged many cars during the storm.",exampleVi:"Mưa đá đã làm hư hại nhiều xe hơi trong cơn bão.",approx:"IPA: /heɪl/ | gần đúng: HAYL",explain:"Hard balls or pieces of ice falling from the sky. Compare with sleet, which is icy rain rather than ice balls.",usage:"Native use: common in weather reports, storm news, and everyday conversation.",visual:"🧊"},
  {lesson:"Lesson 13",topic:"Weather Extremes",english:"sleet",vi:"mưa tuyết ướt",example:"The sleet made the roads slippery.",exampleVi:"Mưa tuyết ướt làm cho đường trơn trượt.",approx:"IPA: /sliːt/ | gần đúng: SLEET",explain:"Small pieces of ice or icy rain, wetter and softer than hail. Compare with hail, which falls as hard ice balls.",usage:"Native use: common in cold-climate weather reports and winter conversation.",visual:"🌨️"},

  {lesson:"Lesson 13",topic:"Natural Disasters",english:"hurricane",vi:"bão lớn trên biển",example:"The hurricane caused flooding along the coast.",exampleVi:"Cơn bão lớn đã gây ngập lụt dọc bờ biển.",approx:"IPA: /ˈhɜːrɪkeɪn/ | gần đúng: HUR-i-kayn",explain:"A huge spinning storm that starts over the ocean. Compare with tornado, which is a narrow storm that touches the ground.",usage:"Native use: common in news, weather reports, and disaster preparedness.",visual:"🌀"},
  {lesson:"Lesson 13",topic:"Natural Disasters",english:"tornado",vi:"lốc xoáy",example:"The tornado destroyed several houses.",exampleVi:"Cơn lốc xoáy đã phá hủy nhiều ngôi nhà.",approx:"IPA: /tɔːrˈneɪdoʊ/ | gần đúng: tor-NAY-doh",explain:"A narrow spinning storm that touches the ground. Compare with hurricane, which is a huge storm over the ocean.",usage:"Native use: common in news, weather reports, and disaster preparedness.",visual:"🌪️"},
  {lesson:"Lesson 13",topic:"Natural Disasters",english:"landslide",vi:"lở đất",example:"A landslide blocked the road.",exampleVi:"Một vụ lở đất đã chặn con đường.",approx:"IPA: /ˈlændslaɪd/ | gần đúng: LAND-slyde",explain:"Rock, soil, or mud suddenly moves down a hill or mountain. Compare with avalanche, which is falling snow, not land.",usage:"Native use: common in news about heavy rain, construction risk, and mountain regions.",visual:"⛰️"},
  {lesson:"Lesson 13",topic:"Natural Disasters",english:"avalanche",vi:"lở tuyết",example:"An avalanche covered the road.",exampleVi:"Một vụ lở tuyết đã phủ kín con đường.",approx:"IPA: /ˈævəlæntʃ/ | gần đúng: AV-ə-lanch",explain:"Snow suddenly moves down a mountain. Compare with landslide, which is falling rock, soil, or mud.",usage:"Native use: common in news about skiing, mountain safety, and winter conditions.",visual:"🏔️"},
  {lesson:"Lesson 13",topic:"Natural Disasters",english:"volcano",vi:"núi lửa",example:"The volcano erupted and sent lava into the air.",exampleVi:"Núi lửa đã phun trào và bắn dung nham lên không trung.",approx:"IPA: /vɒlˈkeɪnoʊ/ | gần đúng: vol-KAY-noh",explain:"An opening in the Earth where lava, ash, and gas come out. Compare with geyser, which shoots hot water, not lava.",usage:"Native use: common in geography, science, and travel contexts.",visual:"🌋"},
  {lesson:"Lesson 13",topic:"Natural Disasters",english:"geyser",vi:"mạch nước phun",example:"The geyser shot hot water high into the sky.",exampleVi:"Mạch nước phun đã phun nước nóng lên cao giữa bầu trời.",approx:"IPA: /ˈɡaɪzər/ | gần đúng: GY-zər",explain:"A hot spring that shoots hot water and steam into the air. Compare with volcano, which releases lava, not water.",usage:"Native use: common in geography, science, and travel contexts.",visual:"♨️"}
];

grammarNotesBank["Lesson 13"] = [
  {title:"Precise cooking verbs",body:"Peel, grate, mash, and crush all prepare food, but each describes a different technique: removing skin, cutting into tiny pieces on a grater, pressing until soft, or pressing until something hard breaks.",pattern:"subject + peel/grate/mash/crush + food",example:"First peel the potatoes, then mash them; meanwhile grate the cheese and crush the garlic.",meaning:"Trước tiên gọt vỏ khoai tây, rồi nghiền nhuyễn; trong lúc đó bào nhỏ phô mai và nghiền nát tỏi."},
  {title:"Controlled vs uncontrolled movement",body:"Wade, swim, dive, float, slide, and glide describe controlled, intentional movement. Skid and drift describe movement that is sudden, sideways, or partly out of control, often on wheels or ice.",pattern:"subject + controlled verb (wade/swim/dive/float/slide/glide) OR + uncontrolled verb (skid/drift)",example:"The skater glides gracefully across the ice, but a beginner might skid and fall.",meaning:"Vận động viên trượt băng lướt nhẹ nhàng trên băng, nhưng người mới có thể trượt mất kiểm soát và ngã."},
  {title:"Comparing close weather and disaster pairs",body:"English often has two related words that describe similar but distinct natural events. Use 'while' or 'whereas' to contrast them clearly.",pattern:"X is + description, while Y is + contrasting description",example:"Mist is thin enough to see through, while fog is thick enough to hide the road.",meaning:"Sương mù mỏng đủ để nhìn xuyên qua, trong khi sương mù dày đủ để che khuất con đường."}
];

grammarBank["Lesson 13"] = [
  {q:"Choose the correct verb: She ___ the cheese before adding it to the sauce.",choices:["grates","peels","crushes"],a:"grates",why:"'Grate' means cut into tiny pieces using a grater, which is how cheese is usually prepared."},
  {q:"Choose the word for sudden, uncontrolled sideways movement of a car.",choices:["glide","skid","float"],a:"skid",why:"'Skid' means slide suddenly and without control, often on a wet or icy road."},
  {q:"Complete: Mist is thin, ___ fog is thick enough to hide the road.",choices:["while","because","so"],a:"while",why:"'While' is used to contrast two related but different things."}
];

listeningBank["Lesson 13"] = {
  text:"In the kitchen, Lan peels the potatoes, grates some cheese, and mashes the potatoes into a smooth mix, while her brother crushes garlic for the sauce. After lunch, they walk to the lake, where their little cousin wades near the edge while older kids swim, dive, and float on their backs. On the way home, the road is covered in thick fog, so their father drives slowly and carefully to avoid a skid. Later that week, the news reports that a hurricane caused flooding along the coast, while in the mountains, heavy rain triggered a landslide that blocked the main road.",
  meaning:"Trong bếp, Lan gọt vỏ khoai tây, bào nhỏ phô mai, và nghiền nhuyễn khoai tây thành hỗn hợp mịn, trong khi anh trai cô nghiền nát tỏi để làm nước sốt. Sau bữa trưa, họ đi bộ ra hồ, nơi đứa em họ nhỏ lội nước gần bờ trong khi các anh chị lớn hơn bơi, lặn, và nổi trên mặt nước, nằm ngửa. Trên đường về, con đường bị bao phủ bởi sương mù dày đặc, nên bố họ lái xe chậm và cẩn thận để tránh trượt bánh. Sau đó trong tuần, tin tức đưa tin rằng một cơn bão lớn đã gây ngập lụt dọc bờ biển, trong khi ở vùng núi, mưa lớn đã gây ra một vụ lở đất chặn con đường chính.",
  questions:[
    {q:"What three things does Lan do in the kitchen?",a:["peels the potatoes grates some cheese and mashes the potatoes","peels the potatoes, grates some cheese, and mashes the potatoes"],hint:"Three cooking actions in order."},
    {q:"Why does their father drive slowly on the way home?",a:["to avoid a skid","because the road is covered in thick fog","to avoid a skid because of thick fog"],hint:"Think about the weather condition and the danger."},
    {q:"What happened in the mountains that week?",a:["heavy rain triggered a landslide that blocked the main road","a landslide blocked the main road"],hint:"A natural disaster caused by heavy rain."}
  ],
  dictation:["The road is covered in thick fog, so their father drives slowly and carefully.","A hurricane caused flooding along the coast, while a landslide blocked the main road in the mountains."]
};

quizBank["Lesson 13"] = [
  {q:"Translate: gọt vỏ",a:["peel"],hint:"Remove the outer skin."},
  {q:"Translate: bào nhỏ",a:["grate"],hint:"Cut into tiny pieces using a grater."},
  {q:"Complete: She ___ the potatoes until they are soft and smooth.",a:["mashes","mash"],hint:"Press food until smooth."},
  {q:"Translate: nghiền nát tỏi",a:["crush the garlic","crush garlic"],hint:"Press something hard until it breaks."},
  {q:"Translate: lội nước",a:["wade"],hint:"Walk through water."},
  {q:"Complete: He ___ into the water head first.",a:["dives","dive"],hint:"Jump down into water."},
  {q:"Translate: nổi trên mặt nước",a:["float"],hint:"Stay on the surface of water."},
  {q:"Complete: The skater ___ smoothly across the ice.",a:["glides","glide"],hint:"Move smoothly with little effort."},
  {q:"Translate: trượt mất kiểm soát (xe hơi)",a:["skid"],hint:"Sudden, uncontrolled sliding."},
  {q:"Complete: The car ___ around the corner.",a:["drifts","drift"],hint:"Sideways movement while turning."},
  {q:"Translate: sương mù dày đặc",a:["fog"],hint:"You can hardly see through it."},
  {q:"Translate: mưa đá",a:["hail"],hint:"Hard balls of ice falling from the sky."},
  {q:"Complete: A huge spinning storm over the ocean is called a ___.",a:["hurricane"],hint:"Compare with tornado."},
  {q:"Translate: lốc xoáy",a:["tornado"],hint:"A narrow spinning storm that touches the ground."},
  {q:"Translate: lở đất",a:["landslide"],hint:"Rock, soil, or mud moving down a hill."},
  {q:"Complete: The ___ erupted and sent lava into the air.",a:["volcano"],hint:"An opening where lava and ash come out."},
  {q:"Translate: mạch nước phun",a:["geyser"],hint:"Shoots hot water and steam into the air."}
];

lessonInfo["Lesson 14"] = {
  title: "Abstract Nouns with -ity: Qualities, Chances, and Society",
  level: "B2-C1",
  goal: "Recognize and use abstract nouns formed with the '-ity' suffix to describe personal qualities, social concepts, and states or chances.",
  output: "Describe a person's qualities, a social issue, and the likelihood of an event using at least eight target words with the correct nuance.",
  topics: ["Skills & Capacity", "Character & Values", "Social Concepts", "States & Circumstances", "Chances & Comparisons"]
};

const lesson14Items = [
  {lesson:"Lesson 14",topic:"Skills & Capacity",english:"ability",vi:"khả năng",example:"She has the ability to solve difficult problems.",exampleVi:"Cô ấy có khả năng giải quyết những vấn đề khó khăn.",approx:"IPA: /əˈbɪləti/ | gần đúng: ə-BIL-ə-ti",explain:"The mental or physical power to do something.",usage:"Native use: extremely common in daily conversation and formal writing alike.",visual:"💪"},
  {lesson:"Lesson 14",topic:"Skills & Capacity",english:"capability",vi:"năng lực",example:"The company invested in new production capabilities.",exampleVi:"Công ty đã đầu tư vào năng lực sản xuất mới.",approx:"IPA: /ˌkeɪpəˈbɪləti/ | gần đúng: kay-pə-BIL-ə-ti",explain:"The power or resources needed to do something, often used for organizations or systems. Compare with ability, which is more personal.",usage:"Native use: common in business, technology, and military contexts.",visual:"⚙️"},
  {lesson:"Lesson 14",topic:"Skills & Capacity",english:"creativity",vi:"sự sáng tạo",example:"Good design requires both logic and creativity.",exampleVi:"Thiết kế tốt cần cả logic và sự sáng tạo.",approx:"IPA: /ˌkriːeɪˈtɪvəti/ | gần đúng: kri-ay-TIV-ə-ti",explain:"The ability to produce original and imaginative ideas.",usage:"Native use: common in art, business innovation, and education.",visual:"🎨"},
  {lesson:"Lesson 14",topic:"Skills & Capacity",english:"flexibility",vi:"sự linh hoạt",example:"Remote work gives employees more flexibility.",exampleVi:"Làm việc từ xa cho nhân viên nhiều sự linh hoạt hơn.",approx:"IPA: /ˌfleksəˈbɪləti/ | gần đúng: flek-sə-BIL-ə-ti",explain:"The quality of being able to change or adapt easily.",usage:"Native use: common in workplace, body movement, and planning contexts.",visual:"🤸"},
  {lesson:"Lesson 14",topic:"Skills & Capacity",english:"productivity",vi:"năng suất",example:"The new software boosted the team's productivity.",exampleVi:"Phần mềm mới đã nâng cao năng suất của nhóm.",approx:"IPA: /ˌproʊdʌkˈtɪvəti/ | gần đúng: proh-duk-TIV-ə-ti",explain:"The rate at which someone or something produces results, especially in work.",usage:"Native use: very common in business and economics.",visual:"📈"},
  {lesson:"Lesson 14",topic:"Skills & Capacity",english:"activity",vi:"hoạt động",example:"The children enjoy outdoor activities on weekends.",exampleVi:"Trẻ em thích các hoạt động ngoài trời vào cuối tuần.",approx:"IPA: /ækˈtɪvəti/ | gần đúng: ak-TIV-ə-ti",explain:"Something that is done for enjoyment, exercise, or work.",usage:"Native use: extremely common in everyday speech about hobbies and work.",visual:"🏃"},

  {lesson:"Lesson 14",topic:"Character & Values",english:"honesty",vi:"sự trung thực",example:"Honesty is the foundation of a good relationship.",exampleVi:"Sự trung thực là nền tảng của một mối quan hệ tốt.",approx:"IPA: /ˈɑːnəsti/ | gần đúng: AH-nə-sti",explain:"The quality of telling the truth and being sincere.",usage:"Native use: common in discussions about character and relationships.",visual:"🤝"},
  {lesson:"Lesson 14",topic:"Character & Values",english:"loyalty",vi:"lòng trung thành",example:"The dog showed great loyalty to its owner.",exampleVi:"Con chó đã thể hiện lòng trung thành lớn với chủ của nó.",approx:"IPA: /ˈlɔɪəlti/ | gần đúng: LOI-əl-ti",explain:"Being faithful and devoted to a person, group, or cause.",usage:"Native use: common in friendship, brand, and workplace contexts.",visual:"🐕"},
  {lesson:"Lesson 14",topic:"Character & Values",english:"personality",vi:"tính cách",example:"He has a warm and outgoing personality.",exampleVi:"Anh ấy có tính cách nồng nhiệt và hướng ngoại.",approx:"IPA: /ˌpɜːrsəˈnæləti/ | gần đúng: pər-sə-NAL-ə-ti",explain:"The combination of characteristics that make up a person's character.",usage:"Native use: extremely common when describing people.",visual:"😊"},
  {lesson:"Lesson 14",topic:"Character & Values",english:"individuality",vi:"tính cá nhân",example:"Her clothing style expresses her individuality.",exampleVi:"Phong cách ăn mặc của cô ấy thể hiện tính cá nhân.",approx:"IPA: /ˌɪndɪˌvɪdʒuˈæləti/ | gần đúng: in-di-vij-oo-AL-ə-ti",explain:"The qualities that make a person different from others. Compare with personality, which is the overall character.",usage:"Native use: common in fashion, art, and self-expression contexts.",visual:"🌟"},
  {lesson:"Lesson 14",topic:"Character & Values",english:"responsibility",vi:"trách nhiệm",example:"Taking care of the pet is her responsibility.",exampleVi:"Chăm sóc con vật là trách nhiệm của cô ấy.",approx:"IPA: /rɪˌspɑːnsəˈbɪləti/ | gần đúng: ri-spon-sə-BIL-ə-ti",explain:"A duty or obligation to deal with something.",usage:"Native use: extremely common in work, family, and legal contexts.",visual:"📋"},
  {lesson:"Lesson 14",topic:"Character & Values",english:"sensitivity",vi:"sự nhạy cảm",example:"He handled the topic with great sensitivity.",exampleVi:"Anh ấy đã xử lý vấn đề đó với sự nhạy cảm lớn.",approx:"IPA: /ˌsensəˈtɪvəti/ | gần đúng: sen-sə-TIV-ə-ti",explain:"The quality of understanding other people's feelings, or being easily affected by something.",usage:"Native use: common in emotional, medical, and diplomatic contexts.",visual:"🌸"},

  {lesson:"Lesson 14",topic:"Social Concepts",english:"equality",vi:"sự bình đẳng",example:"The company promotes equality among all employees.",exampleVi:"Công ty thúc đẩy sự bình đẳng giữa tất cả nhân viên.",approx:"IPA: /ɪˈkwɑːləti/ | gần đúng: i-KWAH-lə-ti",explain:"The state of being equal, especially in rights and opportunities.",usage:"Native use: common in social, legal, and workplace discussions.",visual:"⚖️"},
  {lesson:"Lesson 14",topic:"Social Concepts",english:"diversity",vi:"sự đa dạng",example:"The city is known for its cultural diversity.",exampleVi:"Thành phố này nổi tiếng với sự đa dạng văn hóa.",approx:"IPA: /daɪˈvɜːrsəti/ | gần đúng: dai-VUR-sə-ti",explain:"The state of including many different types of people or things.",usage:"Native use: common in workplace, education, and cultural contexts.",visual:"🌍"},
  {lesson:"Lesson 14",topic:"Social Concepts",english:"community",vi:"cộng đồng",example:"Everyone in the community helped after the storm.",exampleVi:"Mọi người trong cộng đồng đã giúp đỡ sau cơn bão.",approx:"IPA: /kəˈmjuːnəti/ | gần đúng: kə-MYOO-nə-ti",explain:"A group of people living in the same area or sharing common interests.",usage:"Native use: extremely common in everyday and social contexts.",visual:"🏘️"},
  {lesson:"Lesson 14",topic:"Social Concepts",english:"nationality",vi:"quốc tịch",example:"What is your nationality?",exampleVi:"Quốc tịch của bạn là gì?",approx:"IPA: /ˌnæʃəˈnæləti/ | gần đúng: na-shə-NAL-ə-ti",explain:"The legal status of belonging to a particular country.",usage:"Native use: common on official forms and when meeting new people.",visual:"🛂"},
  {lesson:"Lesson 14",topic:"Social Concepts",english:"popularity",vi:"sự phổ biến",example:"The singer's popularity grew after the concert.",exampleVi:"Sự phổ biến của ca sĩ tăng lên sau buổi hòa nhạc.",approx:"IPA: /ˌpɑːpjəˈlærəti/ | gần đúng: pop-yə-LAR-ə-ti",explain:"The state of being liked or supported by many people.",usage:"Native use: common in entertainment, marketing, and social media contexts.",visual:"📣"},
  {lesson:"Lesson 14",topic:"Social Concepts",english:"charity",vi:"tổ chức từ thiện",example:"She donates to charity every month.",exampleVi:"Cô ấy quyên góp cho tổ chức từ thiện mỗi tháng.",approx:"IPA: /ˈtʃærəti/ | gần đúng: CHAR-ə-ti",explain:"An organization that helps people in need, or the act of giving help.",usage:"Native use: common in fundraising and community events.",visual:"❤️"},

  {lesson:"Lesson 14",topic:"States & Circumstances",english:"reality",vi:"thực tế",example:"In reality, the project took much longer than planned.",exampleVi:"Trong thực tế, dự án mất nhiều thời gian hơn dự kiến.",approx:"IPA: /riˈæləti/ | gần đúng: ri-AL-ə-ti",explain:"The way things actually are, as opposed to how they are imagined.",usage:"Native use: extremely common in everyday speech.",visual:"🌐"},
  {lesson:"Lesson 14",topic:"States & Circumstances",english:"security",vi:"sự an toàn",example:"The new locks improved the building's security.",exampleVi:"Những chiếc khóa mới đã cải thiện sự an toàn của tòa nhà.",approx:"IPA: /sɪˈkjʊrəti/ | gần đúng: si-KYOOR-ə-ti",explain:"The state of being safe and protected from danger or risk.",usage:"Native use: common in technology, finance, and personal safety contexts.",visual:"🔒"},
  {lesson:"Lesson 14",topic:"States & Circumstances",english:"stability",vi:"sự ổn định",example:"The country needs political stability to grow.",exampleVi:"Đất nước cần sự ổn định chính trị để phát triển.",approx:"IPA: /stəˈbɪləti/ | gần đúng: stə-BIL-ə-ti",explain:"The quality of being steady and not likely to change suddenly.",usage:"Native use: common in economics, politics, and emotional contexts.",visual:"🧱"},
  {lesson:"Lesson 14",topic:"States & Circumstances",english:"necessity",vi:"sự cần thiết",example:"Clean water is a basic necessity for life.",exampleVi:"Nước sạch là một sự cần thiết cơ bản cho cuộc sống.",approx:"IPA: /nəˈsesəti/ | gần đúng: nə-SES-ə-ti",explain:"Something that is essential or absolutely needed.",usage:"Native use: common in formal writing and discussions about needs.",visual:"🧴"},
  {lesson:"Lesson 14",topic:"States & Circumstances",english:"availability",vi:"sự sẵn có",example:"Please check the availability of the product before ordering.",exampleVi:"Vui lòng kiểm tra sự sẵn có của sản phẩm trước khi đặt hàng.",approx:"IPA: /əˌveɪləˈbɪləti/ | gần đúng: ə-vay-lə-BIL-ə-ti",explain:"The state of being able to be used or obtained.",usage:"Native use: very common in shopping, scheduling, and business contexts.",visual:"📦"},
  {lesson:"Lesson 14",topic:"States & Circumstances",english:"quality",vi:"chất lượng",example:"This shop is known for the quality of its products.",exampleVi:"Cửa hàng này nổi tiếng về chất lượng sản phẩm.",approx:"IPA: /ˈkwɑːləti/ | gần đúng: KWAH-lə-ti",explain:"The standard of how good or bad something is.",usage:"Native use: extremely common in business, education, and daily life.",visual:"⭐"},

  {lesson:"Lesson 14",topic:"Chances & Comparisons",english:"opportunity",vi:"cơ hội",example:"This job is a great opportunity for her career.",exampleVi:"Công việc này là một cơ hội tuyệt vời cho sự nghiệp của cô ấy.",approx:"IPA: /ˌɑːpərˈtuːnəti/ | gần đúng: ah-pər-TOO-nə-ti",explain:"A chance to do something that can lead to a good result.",usage:"Native use: extremely common in career, education, and daily conversation.",visual:"🚪"},
  {lesson:"Lesson 14",topic:"Chances & Comparisons",english:"possibility",vi:"khả năng (có thể xảy ra)",example:"There is a possibility of rain tomorrow.",exampleVi:"Có khả năng ngày mai sẽ mưa.",approx:"IPA: /ˌpɑːsəˈbɪləti/ | gần đúng: pah-sə-BIL-ə-ti",explain:"The chance that something might happen. Compare with ability, which is a skill, not a chance.",usage:"Native use: extremely common in weather, planning, and everyday speech.",visual:"🎲"},
  {lesson:"Lesson 14",topic:"Chances & Comparisons",english:"probability",vi:"xác suất, khả năng xảy ra",example:"The probability of winning the lottery is very low.",exampleVi:"Xác suất trúng số rất thấp.",approx:"IPA: /ˌprɑːbəˈbɪləti/ | gần đúng: prah-bə-BIL-ə-ti",explain:"A measure of how likely something is to happen, often more precise or statistical than possibility.",usage:"Native use: common in statistics, science, and formal discussions.",visual:"📊"},
  {lesson:"Lesson 14",topic:"Chances & Comparisons",english:"priority",vi:"sự ưu tiên",example:"Safety is our top priority.",exampleVi:"An toàn là ưu tiên hàng đầu của chúng tôi.",approx:"IPA: /praɪˈɔːrəti/ | gần đúng: prai-OR-ə-ti",explain:"The thing that is considered most important and should be dealt with first.",usage:"Native use: very common in work, planning, and decision-making.",visual:"🥇"},
  {lesson:"Lesson 14",topic:"Chances & Comparisons",english:"similarity",vi:"sự tương đồng",example:"There is a strong similarity between the two designs.",exampleVi:"Có sự tương đồng mạnh mẽ giữa hai thiết kế.",approx:"IPA: /ˌsɪməˈlærəti/ | gần đúng: si-mə-LAR-ə-ti",explain:"The state of being alike or having common features.",usage:"Native use: common in comparisons, academic writing, and daily speech.",visual:"🔁"},
  {lesson:"Lesson 14",topic:"Chances & Comparisons",english:"curiosity",vi:"sự tò mò",example:"The child's curiosity led her to ask many questions.",exampleVi:"Sự tò mò của đứa trẻ khiến cô bé hỏi rất nhiều câu hỏi.",approx:"IPA: /ˌkjʊriˈɑːsəti/ | gần đúng: kyoo-ri-AH-sə-ti",explain:"A strong desire to know or learn something.",usage:"Native use: common in education, science, and everyday conversation.",visual:"🔍"}
];

grammarNotesBank["Lesson 14"] = [
  {title:"-ity turns adjectives into abstract nouns",body:"Many adjectives ending in -able, -ible, -al, or -ic can become nouns by adding -ity (often with small spelling changes). These nouns describe a quality, state, or condition.",pattern:"adjective + -ity → abstract noun",example:"stable → stability, responsible → responsibility, creative → creativity.",meaning:"ổn định → sự ổn định, có trách nhiệm → trách nhiệm, sáng tạo → sự sáng tạo."},
  {title:"Ability vs possibility vs probability",body:"These three words are often confused. Ability is a personal skill. Possibility is simply a chance that something could happen. Probability is a more precise, often statistical, measure of how likely something is.",pattern:"have the ability to + verb / there is a possibility that + clause / the probability of + noun-gerund",example:"She has the ability to run fast, but there's only a small possibility she'll win, since the probability of beating the champion is low.",meaning:"Cô ấy có khả năng chạy nhanh, nhưng chỉ có khả năng nhỏ là cô ấy sẽ thắng, vì xác suất đánh bại nhà quán quân là thấp."},
  {title:"Countable vs uncountable -ity nouns",body:"Most -ity nouns are uncountable when describing a general quality (honesty, curiosity, flexibility) but some become countable when referring to a specific instance (an opportunity, a possibility, a similarity).",pattern:"uncountable: no article, no plural | countable: a/an + noun, or plural with -ies",example:"Honesty is important, but there are many similarities between the two cases.",meaning:"Sự trung thực là quan trọng, nhưng có nhiều sự tương đồng giữa hai trường hợp."}
];

grammarBank["Lesson 14"] = [
  {q:"Choose the correct word: There's a strong ___ she'll get the job, based on her interview.",choices:["ability","possibility","capability"],a:"possibility",why:"'Possibility' describes a chance that something might happen, not a personal skill."},
  {q:"Choose the correct word: Doctors must handle patients' fears with great ___.",choices:["sensitivity","security","similarity"],a:"sensitivity",why:"'Sensitivity' means understanding and being careful with people's feelings."},
  {q:"Complete: Safety is our top ___, so we always check the equipment first.",choices:["priority","necessity","quality"],a:"priority",why:"'Priority' is the thing considered most important and dealt with first."}
];

listeningBank["Lesson 14"] = {
  text:"At the community center, the manager praised Mai's honesty and loyalty, saying her responsibility and creativity made her the best volunteer of the year. Mai smiled and said her curiosity about people from different backgrounds was what first brought her there; she loved the diversity and equality the center promoted. Later, the team discussed a new opportunity: a partner charity wanted to fund a project, but there was only a small possibility of getting the full budget, since the probability of approval depended on next month's review. Still, everyone agreed that stability and quality mattered more than speed, so they made it their priority to plan carefully rather than rush.",
  meaning:"Tại trung tâm cộng đồng, người quản lý khen ngợi sự trung thực và lòng trung thành của Mai, nói rằng trách nhiệm và sự sáng tạo của cô đã giúp cô trở thành tình nguyện viên xuất sắc nhất trong năm. Mai mỉm cười và nói sự tò mò của cô về những người từ các nền văn hóa khác nhau là điều đầu tiên đưa cô đến đó; cô yêu thích sự đa dạng và sự bình đẳng mà trung tâm thúc đẩy. Sau đó, nhóm thảo luận về một cơ hội mới: một tổ chức từ thiện đối tác muốn tài trợ cho một dự án, nhưng chỉ có khả năng nhỏ để nhận được toàn bộ ngân sách, vì xác suất được phê duyệt phụ thuộc vào buổi xét duyệt tháng sau. Tuy vậy, mọi người đều đồng ý rằng sự ổn định và chất lượng quan trọng hơn tốc độ, nên họ đặt ưu tiên là lập kế hoạch cẩn thận thay vì vội vàng.",
  questions:[
    {q:"What two qualities did the manager praise in Mai?",a:["honesty and loyalty","her honesty and loyalty"],hint:"Two character values mentioned first."},
    {q:"Why did Mai first come to the community center?",a:["her curiosity about people from different backgrounds","because of her curiosity about people from different backgrounds"],hint:"Think about what drew her there."},
    {q:"What did the team decide to make their priority?",a:["to plan carefully rather than rush","planning carefully rather than rushing"],hint:"Stability and quality over speed."}
  ],
  dictation:["Her responsibility and creativity made her the best volunteer of the year.","The probability of approval depended on next month's review."]
};

quizBank["Lesson 14"] = [
  {q:"Translate: khả năng",a:["ability"],hint:"A personal mental or physical power to do something."},
  {q:"Translate: năng lực",a:["capability"],hint:"Power or resources needed to do something, often for organizations."},
  {q:"Complete: Working from home gives employees more ___.",a:["flexibility"],hint:"Being able to change or adapt easily."},
  {q:"Translate: năng suất",a:["productivity"],hint:"The rate of producing results, especially at work."},
  {q:"Translate: lòng trung thành",a:["loyalty"],hint:"Being faithful and devoted."},
  {q:"Complete: His warm and outgoing ___ makes him easy to talk to.",a:["personality"],hint:"The combination of characteristics that make up someone's character."},
  {q:"Translate: trách nhiệm",a:["responsibility"],hint:"A duty or obligation to deal with something."},
  {q:"Translate: sự đa dạng",a:["diversity"],hint:"Including many different types of people or things."},
  {q:"Complete: What is your ___?",a:["nationality"],hint:"The legal status of belonging to a country."},
  {q:"Translate: sự phổ biến",a:["popularity"],hint:"Being liked or supported by many people."},
  {q:"Complete: In ___, the project took much longer than planned.",a:["reality"],hint:"The way things actually are."},
  {q:"Translate: sự ổn định",a:["stability"],hint:"Being steady and not likely to change suddenly."},
  {q:"Translate: sự sẵn có",a:["availability"],hint:"Being able to be used or obtained."},
  {q:"Complete: There is a small ___ of rain tomorrow.",a:["possibility"],hint:"A chance something might happen, not a skill."},
  {q:"Translate: xác suất",a:["probability"],hint:"A statistical measure of how likely something is."},
  {q:"Translate: sự ưu tiên",a:["priority"],hint:"The thing considered most important, dealt with first."},
  {q:"Translate: sự tò mò",a:["curiosity"],hint:"A strong desire to know or learn something."}
];

lessonInfo["Lesson 15"] = {
  title: "Resilience and Problem-Solving Under Pressure",
  level: "B2",
  goal: "Talk about setbacks, pressure, and recovery using precise B2 verbs and adjectives for challenges and resilience.",
  output: "Describe a difficult situation you faced, how you coped, and what breakthrough or lesson followed, using at least six target words.",
  topics: ["Setbacks & Obstacles", "Coping & Resilience", "Action Under Pressure", "Progress & Recovery"]
};

const lesson15Items = [
  {lesson:"Lesson 15",topic:"Setbacks & Obstacles",english:"setback",vi:"trở ngại tạm thời, thất bại nhỏ",example:"Losing the first client was a setback, but the team did not give up.",exampleVi:"Mất khách hàng đầu tiên là một trở ngại tạm thời, nhưng nhóm không bỏ cuộc.",approx:"IPA: /ˈsetbæk/ | gần đúng: SET-bak",explain:"A problem that delays progress or makes success harder for a while. It is temporary, not a final failure.",usage:"Native use: common in work, sport, health, and study contexts.",visual:"📉"},
  {lesson:"Lesson 15",topic:"Setbacks & Obstacles",english:"obstacle",vi:"chướng ngại, rào cản",example:"Language was the main obstacle to finding a good job abroad.",exampleVi:"Ngôn ngữ là chướng ngại chính khi tìm việc tốt ở nước ngoài.",approx:"IPA: /ˈɑːbstəkəl/ | gần đúng: AHB-stə-kəl",explain:"Something that blocks your way or makes a goal harder to reach. More general than setback; an obstacle can be ongoing.",usage:"Native use: common in problem-solving, sport, and formal writing.",visual:"🚧"},
  {lesson:"Lesson 15",topic:"Setbacks & Obstacles",english:"daunting",vi:"đáng nản, khiến người ta ngại",example:"Starting a new career at thirty can feel daunting.",exampleVi:"Bắt đầu sự nghiệp mới ở tuổi ba mươi có thể khiến người ta ngại.",approx:"IPA: /ˈdɔːntɪŋ/ | gần đúng: DAWN-ting",explain:"Making you feel worried or less confident because something seems difficult or large.",usage:"Native use: common before challenges, exams, projects, and big life changes.",visual:"😰"},
  {lesson:"Lesson 15",topic:"Setbacks & Obstacles",english:"under pressure",vi:"dưới áp lực",example:"She performed well even under pressure.",exampleVi:"Cô ấy vẫn làm tốt ngay cả khi dưới áp lực.",approx:"IPA: /ˌʌndər ˈpreʃər/ | gần đúng: UN-dər PRESH-ər",explain:"In a stressful situation where you must act quickly or meet high expectations.",usage:"Native use: extremely common in work, sport, exams, and daily stress talk.",visual:"⏱️"},

  {lesson:"Lesson 15",topic:"Coping & Resilience",english:"resilient",vi:"kiên cường, mau phục hồi",example:"Resilient people recover faster after disappointment.",exampleVi:"Người kiên cường phục hồi nhanh hơn sau thất vọng.",approx:"IPA: /rɪˈzɪliənt/ | gần đúng: ri-ZIL-ee-ənt",explain:"Able to recover quickly from difficulty, stress, or failure.",usage:"Native use: very common in psychology, leadership, and self-development talk.",visual:"💪"},
  {lesson:"Lesson 15",topic:"Coping & Resilience",english:"to cope with",vi:"đối phó với, xoay xở với",example:"He is learning to cope with a heavy workload.",exampleVi:"Anh ấy đang học cách đối phó với khối lượng công việc nặng.",approx:"IPA: /kuːp wɪð/ | gần đúng: KOOP with",explain:"To deal successfully with a difficult situation, often over time rather than solving it instantly.",usage:"Native use: common with stress, change, pain, and busy schedules.",visual:"🧘"},
  {lesson:"Lesson 15",topic:"Coping & Resilience",english:"to bounce back",vi:"phục hồi nhanh, gượng dậy",example:"After the exam failure, she bounced back within a week.",exampleVi:"Sau khi thi trượt, cô ấy đã gượng dậy chỉ trong một tuần.",approx:"IPA: /baʊns bæk/ | gần đúng: BOWNSS bak",explain:"To return to a good condition after a problem or failure. Informal but widely used.",usage:"Native use: common in conversation about health, business, and confidence.",visual:"🔄"},
  {lesson:"Lesson 15",topic:"Coping & Resilience",english:"perseverance",vi:"sự kiên trì",example:"Success often depends more on perseverance than talent alone.",exampleVi:"Thành công thường phụ thuộc vào sự kiên trì hơn là chỉ tài năng.",approx:"IPA: /ˌpɜːrsəˈvɪrəns/ | gần đúng: pər-sə-VEER-əns",explain:"Continued effort to do something despite difficulties. More formal than 'not giving up'.",usage:"Native use: common in essays, speeches, and professional feedback.",visual:"🏔️"},

  {lesson:"Lesson 15",topic:"Action Under Pressure",english:"to tackle",vi:"xử lý, giải quyết (vấn đề)",example:"The manager decided to tackle the budget problem immediately.",exampleVi:"Người quản lý quyết định xử lý ngay vấn đề ngân sách.",approx:"IPA: /ˈtækəl/ | gần đúng: TAK-əl",explain:"To deal with a problem or difficult task in a direct, practical way.",usage:"Native use: common in work, sport (also a physical meaning), and news reports.",visual:"🛠️"},
  {lesson:"Lesson 15",topic:"Action Under Pressure",english:"to overcome",vi:"vượt qua (khó khăn)",example:"She overcame her fear of public speaking through practice.",exampleVi:"Cô ấy đã vượt qua nỗi sợ nói trước đám đông nhờ luyện tập.",approx:"IPA: /ˌoʊvərˈkʌm/ | gần đúng: oh-vər-KUM",explain:"To successfully deal with or defeat a problem, fear, or difficulty.",usage:"Native use: common in personal stories, interviews, and formal writing.",visual:"🏆"},
  {lesson:"Lesson 15",topic:"Action Under Pressure",english:"to push through",vi:"cố gắng vượt qua (giai đoạn khó)",example:"They pushed through the final week of the project despite being exhausted.",exampleVi:"Họ đã cố gắng vượt qua tuần cuối của dự án dù kiệt sức.",approx:"IPA: /pʊʃ θruː/ | gần đúng: push THROO",explain:"To continue working hard until you finish something difficult, especially when tired or discouraged.",usage:"Native use: common in conversation about deadlines, training, and hard periods.",visual:"➡️"},
  {lesson:"Lesson 15",topic:"Action Under Pressure",english:"determined",vi:"quyết tâm",example:"He was determined to finish the course no matter how hard it got.",exampleVi:"Anh ấy quyết tâm hoàn thành khóa học dù khó đến đâu.",approx:"IPA: /dɪˈtɜːrmɪnd/ | gần đúng: di-TUR-mind",explain:"Having a strong decision to do something and not wanting to change your mind.",usage:"Native use: very common for goals, exams, careers, and personal challenges.",visual:"🎯"},

  {lesson:"Lesson 15",topic:"Progress & Recovery",english:"to adapt",vi:"thích nghi",example:"Employees had to adapt to remote work very quickly.",exampleVi:"Nhân viên phải thích nghi rất nhanh với làm việc từ xa.",approx:"IPA: /əˈdæpt/ | gần đúng: ə-DAPT",explain:"To change your behaviour or methods so you can deal with a new situation.",usage:"Native use: common with change, culture, technology, and climate.",visual:"🦎"},
  {lesson:"Lesson 15",topic:"Progress & Recovery",english:"breakthrough",vi:"bước đột phá",example:"After months of practice, she finally had a breakthrough in speaking fluency.",exampleVi:"Sau nhiều tháng luyện tập, cô ấy cuối cùng đã có bước đột phá về độ trôi chảy khi nói.",approx:"IPA: /ˈbreɪkθruː/ | gần đúng: BRAYK-throo",explain:"An important sudden improvement or discovery after a long period of difficulty.",usage:"Native use: common in science, career, learning, and medical contexts.",visual:"💡"},
  {lesson:"Lesson 15",topic:"Progress & Recovery",english:"to keep going",vi:"tiếp tục cố gắng, không dừng lại",example:"When progress feels slow, the best strategy is often just to keep going.",exampleVi:"Khi tiến bộ cảm thấy chậm, chiến lược tốt nhất thường chỉ là tiếp tục cố gắng.",approx:"IPA: /kiːp ˈɡoʊɪŋ/ | gần đúng: keep GOH-ing",explain:"To continue doing something without stopping, especially when it is hard or tiring.",usage:"Native use: very common encouragement in conversation, coaching, and daily life.",visual:"🚶"}
];

grammarNotesBank["Lesson 15"] = [
  {title:"Setback vs obstacle",body:"A setback is a temporary delay or failure that interrupts progress. An obstacle is anything that blocks or makes progress harder, and it may last longer. You overcome an obstacle and recover from a setback.",pattern:"a setback (in/to + noun) | an obstacle to + noun/gerund",example:"The delayed funding was a setback, but bureaucracy remained the bigger obstacle to growth.",meaning:"Việc tài trợ bị chậm là một trở ngại tạm thời, nhưng quan liêu vẫn là chướng ngại lớn hơn đối với tăng trưởng."},
  {title:"Cope with vs overcome vs tackle",body:"Cope with means managing a difficult situation, often ongoing stress. Overcome means successfully defeating a difficulty. Tackle means taking direct action to deal with a problem, not necessarily finishing it yet.",pattern:"cope with + noun | overcome + noun | tackle + noun/problem",example:"She tackled the workload by prioritising tasks, coped with the stress through exercise, and finally overcame her fear of deadlines.",meaning:"Cô ấy xử lý khối lượng công việc bằng cách sắp ưu tiên, đối phó với căng thẳng bằng tập thể dục, và cuối cùng vượt qua nỗi sợ hạn chót."},
  {title:"Resilient, determined, and phrasal recovery verbs",body:"Resilient describes a lasting quality: you recover well from difficulty. Determined describes a strong decision or attitude. Bounce back and push through are action phrases: bounce back focuses on recovery after a fall; push through focuses on continuing during hardship.",pattern:"be resilient/determined | bounce back (from + noun) | push through + noun",example:"He is resilient and determined, so he bounced back from the setback and pushed through the hard month.",meaning:"Anh ấy kiên cường và quyết tâm, nên đã phục hồi sau trở ngại và cố gắng vượt qua tháng khó khăn."}
];

grammarBank["Lesson 15"] = [
  {q:"Choose the best word: Losing one match was only a temporary ___; the team still won the season.",choices:["setback","breakthrough","perseverance"],a:"setback",why:"A setback is a temporary problem or delay, not a final failure or a sudden success."},
  {q:"Choose the best phrase: She is learning to ___ a very busy schedule without burning out.",choices:["cope with","bounce back","push through"],a:"cope with",why:"'Cope with' means deal successfully with an ongoing difficult situation such as stress or a heavy schedule."},
  {q:"Complete: After months of slow progress, the student finally had a ___ in listening skills.",choices:["breakthrough","obstacle","pressure"],a:"breakthrough",why:"A breakthrough is an important sudden improvement after a long period of difficulty."}
];

listeningBank["Lesson 15"] = {
  text:"Last year, Minh faced a serious setback when he failed his first professional exam. The next attempt felt daunting, especially under pressure at work, but he was determined not to quit. Instead of avoiding the problem, he decided to tackle his weak points one by one and gradually learned to cope with stress through better planning. After several weeks, he began to bounce back; his perseverance paid off when he finally overcame his fear of the oral section. Looking back, he says the real breakthrough was not just passing the exam, but learning how to adapt and keep going when progress felt slow.",
  meaning:"Năm ngoái, Minh gặp một trở ngại nghiêm trọng khi trượt kỳ thi chuyên môn đầu tiên. Lần thi tiếp theo khiến anh ngại, nhất là khi đang dưới áp lực công việc, nhưng anh quyết tâm không bỏ cuộc. Thay vì tránh vấn đề, anh quyết định xử lý từng điểm yếu một và dần học cách đối phó với căng thẳng nhờ lập kế hoạch tốt hơn. Sau vài tuần, anh bắt đầu phục hồi; sự kiên trì của anh mang lại kết quả khi cuối cùng anh vượt qua nỗi sợ phần thi nói. Nhìn lại, anh nói bước đột phá thật sự không chỉ là đậu kỳ thi, mà là học được cách thích nghi và tiếp tục cố gắng khi tiến bộ cảm thấy chậm.",
  questions:[
    {q:"What setback did Minh face?",a:["he failed his first professional exam","failed his first professional exam","failing his first professional exam"],hint:"Think about the exam result."},
    {q:"How did Minh decide to deal with his weak points?",a:["tackle them one by one","he tackled his weak points one by one","tackle his weak points one by one"],hint:"A direct action verb for solving problems."},
    {q:"What does Minh say the real breakthrough was?",a:["learning how to adapt and keep going","learning to adapt and keep going when progress felt slow","not just passing the exam but learning how to adapt and keep going"],hint:"More than just passing the exam."}
  ],
  dictation:["The next attempt felt daunting, especially under pressure at work.","His perseverance paid off when he finally overcame his fear of the oral section."]
};

quizBank["Lesson 15"] = [
  {q:"Translate: trở ngại tạm thời",a:["setback"],hint:"A temporary delay or failure."},
  {q:"Translate: chướng ngại, rào cản",a:["obstacle"],hint:"Something that blocks progress."},
  {q:"Complete: Starting a new career can feel ___.",a:["daunting"],hint:"Makes you feel worried because it seems difficult."},
  {q:"Translate: dưới áp lực",a:["under pressure"],hint:"In a stressful situation with high expectations."},
  {q:"Translate: kiên cường, mau phục hồi",a:["resilient"],hint:"Able to recover quickly from difficulty."},
  {q:"Complete: He is learning to ___ a heavy workload.",a:["cope with"],hint:"Deal successfully with an ongoing difficulty."},
  {q:"Translate: phục hồi nhanh, gượng dậy",a:["bounce back"],hint:"Return to a good condition after a problem."},
  {q:"Translate: sự kiên trì",a:["perseverance"],hint:"Continued effort despite difficulties."},
  {q:"Complete: The manager decided to ___ the budget problem immediately.",a:["tackle"],hint:"Deal with a problem in a direct way."},
  {q:"Translate: vượt qua (khó khăn)",a:["overcome"],hint:"Successfully deal with a fear or difficulty."},
  {q:"Complete: They ___ the final week of the project despite being exhausted.",a:["pushed through"],hint:"Continue hard work until you finish a difficult period."},
  {q:"Translate: quyết tâm",a:["determined"],hint:"Having a strong decision not to change your mind."},
  {q:"Complete: Employees had to ___ to remote work very quickly.",a:["adapt"],hint:"Change behaviour for a new situation."},
  {q:"Translate: bước đột phá",a:["breakthrough"],hint:"A sudden important improvement after difficulty."},
  {q:"Complete: When progress feels slow, the best strategy is often just to ___.",a:["keep going"],hint:"Continue without stopping."}
];

lessonInfo["Lesson 16"] = {
  title: "Core B2 Vocabulary: Judgment, Reputation, and Business",
  level: "B2",
  goal: "Learn and use precise B2 words for describing degree, rules, events, health, personal reputation, and everyday business/media topics.",
  output: "Describe a recent decision, event, or news story using at least six target words from this lesson.",
  topics: ["Degree, Rules & Judgment", "Events, Introductions & Health", "Character & Reputation", "Business, Media & Everyday Words"]
};

const lesson16Items = [
  {lesson:"Lesson 16",topic:"Degree, Rules & Judgment",english:"hardly",vi:"hầu như không, khó mà; (hardly...when/before) vừa mới... thì đã...",example:"I hardly know him; we've only met once.",exampleVi:"Tôi hầu như không biết anh ấy; chúng tôi chỉ gặp nhau một lần.",approx:"IPA: /ˈhɑːrdli/ | gần đúng: HAHRD-lee",explain:"An adverb meaning 'almost not' or 'barely'; it already carries negative meaning, so it is not combined with 'not'. In the structure 'hardly...when/before', it describes one event happening right after another: 'I had hardly sat down when the phone rang' (Tôi vừa mới ngồi xuống thì điện thoại reo).",usage:"Native use: very common with 'hardly ever', 'hardly any', and 'can hardly' to express near-impossibility.",visual:"🙅"},
  {lesson:"Lesson 16",topic:"Degree, Rules & Judgment",english:"compulsory",vi:"bắt buộc, cưỡng chế (theo luật hoặc quy định)",example:"Wearing a helmet is compulsory for all motorbike riders.",exampleVi:"Đội mũ bảo hiểm là bắt buộc đối với tất cả người đi xe máy.",approx:"IPA: /kəmˈpʌlsəri/ | gần đúng: kəm-PUL-sə-ree",explain:"Required by law, rule, or authority, with no personal choice involved — the formal opposite of 'optional' or 'voluntary'. Common collocations: compulsory education, compulsory military service, compulsory insurance.",usage:"Native use: common in education, law, and workplace policy contexts.",visual:"📋"},
  {lesson:"Lesson 16",topic:"Degree, Rules & Judgment",english:"partial",vi:"một phần, chưa đầy đủ; thiên vị, không công bằng; (be partial to) rất thích, có thiện cảm với",example:"The report gave only a partial picture of what really happened.",exampleVi:"Bản báo cáo chỉ cho thấy một phần của những gì thực sự xảy ra.",approx:"IPA: /ˈpɑːrʃəl/ | gần đúng: PAHR-shəl",explain:"Three common senses: (1) incomplete, not full — a partial answer; (2) biased, unfairly favouring one side — a partial judge; (3) in the idiom 'be partial to something', it simply means having a strong liking for it, with no idea of bias at all: 'I'm partial to a cup of tea in the afternoon' (Tôi khá thích một tách trà vào buổi chiều).",usage:"Native use: common in reports and reviews (senses 1-2); common in casual conversation about personal taste (sense 3, 'partial to').",visual:"🌗"},
  {lesson:"Lesson 16",topic:"Degree, Rules & Judgment",english:"reject",vi:"từ chối, bác bỏ, loại bỏ (động từ); hàng lỗi, sản phẩm bị loại (danh từ)",example:"The committee rejected his proposal because it was too expensive.",exampleVi:"Ủy ban đã bác bỏ đề xuất của anh ấy vì nó quá tốn kém.",approx:"IPA (verb): /rɪˈdʒekt/ | gần đúng: ri-JEKT — IPA (noun): /ˈriːdʒekt/ | gần đúng: REE-jekt",explain:"As a verb (stress on the second syllable), to refuse to accept an idea, offer, or application — stronger than 'decline'. As a noun (stress moves to the first syllable), 'a reject' is an item that failed quality control, e.g. 'factory rejects sold at a discount'. In medicine, the body can also 'reject' a transplanted organ.",usage:"Native use: common with applications, ideas, offers, and job interviews (verb); common in manufacturing/retail talk (noun).",visual:"🚫"},
  {lesson:"Lesson 16",topic:"Degree, Rules & Judgment",english:"indicate",vi:"chỉ ra, cho thấy (bằng chứng, dữ liệu); ra hiệu, xi-nhan (khi lái xe); ngụ ý, gợi ý gián tiếp",example:"The data indicates a steady rise in online shopping.",exampleVi:"Dữ liệu cho thấy một sự gia tăng đều đặn trong mua sắm trực tuyến.",approx:"IPA: /ˈɪndɪkeɪt/ | gần đúng: IN-di-kayt",explain:"Beyond showing evidence ('the results indicate...'), 'indicate' is also the standard word for using a car's turn signal, especially in British English ('indicate left before turning'), and it can mean to suggest something indirectly without stating it outright ('she indicated that she might resign').",usage:"Native use: common in reports and research (evidence); common in driving instructions (signal); common in careful, diplomatic speech (hinting).",visual:"👉"},

  {lesson:"Lesson 16",topic:"Events, Introductions & Health",english:"occur",vi:"xảy ra, diễn ra; (occur to somebody) chợt nghĩ ra, nảy ra trong đầu",example:"The accident occurred late at night when the roads were empty.",exampleVi:"Tai nạn xảy ra vào đêm khuya khi đường vắng.",approx:"IPA: /əˈkɜːr/ | gần đúng: ə-KUR",explain:"A formal word for 'happen', used for events. Separately, 'it occurs to somebody that...' means a thought suddenly comes to their mind: 'It occurred to me that I had left the door unlocked' (Tôi chợt nhận ra là mình đã quên khóa cửa).",usage:"Native use: common in news reports, formal writing, and academic English for both senses.",visual:"⚡"},
  {lesson:"Lesson 16",topic:"Events, Introductions & Health",english:"introduce",vi:"giới thiệu (người, ý tưởng); đưa vào áp dụng lần đầu (luật, chính sách, sản phẩm mới)",example:"The teacher introduced a new topic before starting the lesson.",exampleVi:"Giáo viên giới thiệu một chủ đề mới trước khi bắt đầu bài học.",approx:"IPA: /ˌɪntrəˈduːs/ | gần đúng: in-trə-DOOSS",explain:"To present someone to another person for the first time ('Let me introduce my colleague'), or to bring something new into use for the first time, such as a law, policy, product, or technology ('The government introduced a new tax law').",usage:"Native use: common in meetings and social introductions (people); common in business, politics, and product launches (new things).",visual:"🤝"},
  {lesson:"Lesson 16",topic:"Events, Introductions & Health",english:"contents",vi:"nội dung bên trong (hộp, tài liệu); mục lục (của sách)",example:"Please check the contents of the box before signing for delivery.",exampleVi:"Vui lòng kiểm tra nội dung bên trong hộp trước khi ký nhận.",approx:"IPA: /ˈkɑːntents/ | gần đúng: KAHN-tents",explain:"What is inside something such as a box, bag, or document, or the list of sections at the front of a book ('table of contents'). Note this is different from the adjective 'content' (without -s), which means satisfied.",usage:"Native use: common on packaging, in books, and in formal documents.",visual:"📦"},
  {lesson:"Lesson 16",topic:"Events, Introductions & Health",english:"tropical",vi:"(thuộc) vùng nhiệt đới; mang tính chất nóng ẩm kiểu nhiệt đới",example:"They spent their honeymoon on a tropical island with warm weather all year.",exampleVi:"Họ đã đi hưởng tuần trăng mật trên một hòn đảo nhiệt đới có thời tiết ấm quanh năm.",approx:"IPA: /ˈtrɑːpɪkəl/ | gần đúng: TRAH-pi-kəl",explain:"Relating to the hot, humid regions near the equator. Common collocations: tropical climate, tropical storm, tropical disease, tropical fruit, tropical rainforest.",usage:"Native use: common in travel, geography, weather, and health contexts.",visual:"🏝️"},
  {lesson:"Lesson 16",topic:"Events, Introductions & Health",english:"illness",vi:"bệnh tật, tình trạng ốm đau",example:"A long illness kept her away from work for three months.",exampleVi:"Một trận bệnh dài khiến cô ấy phải nghỉ làm ba tháng.",approx:"IPA: /ˈɪlnəs/ | gần đúng: ILL-nəs",explain:"The general state of being sick; more formal and abstract than 'sickness', often used for serious or long-term conditions. Common collocations: mental illness, terminal illness, a minor/serious illness.",usage:"Native use: common in health, workplace, and news contexts (e.g. 'mental illness').",visual:"🤒"},

  {lesson:"Lesson 16",topic:"Character & Reputation",english:"jealously",vi:"một cách ghen tị, đố kỵ; một cách bảo vệ/giữ khư khư, không muốn chia sẻ",example:"He guarded his notebook jealously, refusing to let anyone borrow it.",exampleVi:"Anh ấy giữ cuốn sổ tay của mình một cách rất chặt chẽ, không cho ai mượn.",approx:"IPA: /ˈdʒeləsli/ | gần đúng: JEL-əs-lee",explain:"Adverb from 'jealous'; can describe envy toward someone else's success ('she watched jealously as her friend got promoted'), or protecting something very possessively, even without envy involved.",usage:"Native use: common in stories and formal writing about rivalry or possessiveness.",visual:"😒"},
  {lesson:"Lesson 16",topic:"Character & Reputation",english:"charm",vi:"sự duyên dáng, sức quyến rũ (danh từ); làm say mê, quyến rũ (động từ); vật may mắn, bùa hộ mệnh (danh từ)",example:"Despite the language barrier, his charm won everyone over.",exampleVi:"Dù có rào cản ngôn ngữ, sự duyên dáng của anh ấy đã chinh phục mọi người.",approx:"IPA: /tʃɑːrm/ | gần đúng: CHAHRM",explain:"As a noun/verb, it describes an attractive quality that makes people like someone, or the act of pleasing someone strongly. As a separate, more concrete noun sense, a 'charm' is also a small decorative object believed to bring luck, such as on a charm bracelet ('a lucky charm').",usage:"Native use: common describing personality and persuasive behaviour; the 'lucky object' sense is common with jewelry and superstition.",visual:"✨"},
  {lesson:"Lesson 16",topic:"Character & Reputation",english:"bug",vi:"côn trùng nhỏ; lỗi (phần mềm); thiết bị nghe lén; (động từ) làm phiền, quấy rầy",example:"The developers fixed the bug that crashed the app on startup.",exampleVi:"Các nhà phát triển đã sửa lỗi khiến ứng dụng bị treo khi khởi động.",approx:"IPA: /bʌɡ/ | gần đúng: BUG",explain:"Informally, any small insect; in technology, an error or flaw in software; can also mean a minor illness ('a stomach bug'). Separately, a 'bug' can be a hidden microphone used for secret listening ('the room was bugged'), and as a verb, 'to bug someone' informally means to annoy or pester them ('Stop bugging me!').",usage:"Native use: very common in tech talk (software error), casual talk about small illnesses, spy/crime stories (hidden microphone), and everyday speech (annoy).",visual:"🐛"},
  {lesson:"Lesson 16",topic:"Character & Reputation",english:"defeat",vi:"sự thất bại, thua cuộc (danh từ); đánh bại, thắng (động từ); (defeat the purpose) làm mất tác dụng, phản tác dụng",example:"The team suffered a heavy defeat in the final match.",exampleVi:"Đội đã chịu một thất bại nặng nề trong trận chung kết.",approx:"IPA: /dɪˈfiːt/ | gần đúng: di-FEET",explain:"As a noun/verb, it describes losing or beating an opponent in competition, war, or debate. In the idiom 'defeat the purpose', it means an action ends up working against its own goal: 'Driving to the gym defeats the purpose of exercising.'",usage:"Native use: common in sports, politics, and formal reports; the idiom 'defeat the purpose' is common in everyday practical advice.",visual:"🏳️"},
  {lesson:"Lesson 16",topic:"Character & Reputation",english:"disgrace",vi:"sự ô nhục, điều đáng hổ thẹn; (in disgrace) trong tình trạng mất thể diện, bị thất sủng",example:"Losing the company's funds through carelessness was a disgrace.",exampleVi:"Việc làm mất quỹ công ty do bất cẩn là một điều đáng hổ thẹn.",approx:"IPA: /dɪsˈɡreɪs/ | gần đúng: dis-GRAYSS",explain:"A situation or action that causes loss of respect or brings shame, often used to criticize public behaviour. The phrase 'in disgrace' describes someone publicly shamed or out of favour: 'He left the company in disgrace' (Anh ta rời công ty trong sự ô nhục).",usage:"Native use: common in news, formal criticism, and moral judgments.",visual:"😔"},

  {lesson:"Lesson 16",topic:"Business, Media & Everyday Words",english:"off",vi:"tắt (thiết bị); nghỉ, được nghỉ; giảm giá; bị hủy/hoãn; (thức ăn) bị ôi thiu; cách xa, rời khỏi",example:"She took the day off to rest after a long week.",exampleVi:"Cô ấy nghỉ một ngày để thư giãn sau một tuần dài.",approx:"IPA: /ɔːf/ | gần đúng: AWF",explain:"A very flexible word: switched off (turn the light off); not working or cancelled (a day off, the meeting is off); a price reduction (10% off); food that has gone bad (this milk smells off); or physical distance/departure (off the coast, he's off to work).",usage:"Native use: extremely common in daily conversation; meaning depends heavily on the surrounding words.",visual:"🔌"},
  {lesson:"Lesson 16",topic:"Business, Media & Everyday Words",english:"media",vi:"truyền thông, các phương tiện thông tin đại chúng",example:"Social media has changed the way news spreads around the world.",exampleVi:"Mạng xã hội đã thay đổi cách tin tức lan truyền khắp thế giới.",approx:"IPA: /ˈmiːdiə/ | gần đúng: MEE-dee-ə",explain:"The organizations and channels (TV, newspapers, internet) that deliver news and information to the public. Technically the plural of 'medium', but treated as a singular collective noun in modern use ('the media is/are watching'). Common collocations: social media, mass media, news media.",usage:"Native use: extremely common in news, politics, and everyday discussion of the internet.",visual:"📰"},
  {lesson:"Lesson 16",topic:"Business, Media & Everyday Words",english:"roll",vi:"lăn (động từ); cuộn, cuộn giấy (danh từ); bánh mì cuộn (danh từ); danh sách điểm danh (roll call)",example:"The ball rolled off the table and under the sofa.",exampleVi:"Quả bóng lăn khỏi bàn và vào gầm ghế sofa.",approx:"IPA: /roʊl/ | gần đúng: ROHL",explain:"As a verb, to move by turning over and over; as a noun, a small round piece of bread or a rolled-up item (a roll of paper). It also appears in 'roll call' (reading names to check attendance) and idioms like 'roll up your sleeves' (get ready to work hard).",usage:"Native use: common in daily descriptions of movement and food; 'roll call' common in schools/military; idioms common in casual speech.",visual:"🎳"},
  {lesson:"Lesson 16",topic:"Business, Media & Everyday Words",english:"earnings",vi:"thu nhập, tiền lương kiếm được; lợi nhuận công ty công bố (earnings report)",example:"The company's earnings grew by 15% this quarter.",exampleVi:"Thu nhập của công ty tăng 15% trong quý này.",approx:"IPA: /ˈɜːrnɪŋz/ | gần đúng: UR-ningz",explain:"Money earned from work, used for personal income; also the standard finance term for a company's reported profits, as in a quarterly 'earnings report'.",usage:"Native use: common in salary discussions (personal) and business/finance news (corporate).",visual:"💰"},
  {lesson:"Lesson 16",topic:"Business, Media & Everyday Words",english:"board",vi:"hội đồng quản trị (danh từ); tấm ván (danh từ); (động từ) lên máy bay/tàu/xe; (board and lodging) chỗ ở kèm ăn uống",example:"The board of directors approved the new budget yesterday.",exampleVi:"Hội đồng quản trị đã phê duyệt ngân sách mới vào hôm qua.",approx:"IPA: /bɔːrd/ | gần đúng: BAWRD",explain:"A group of people who manage or make decisions for a company or organization; also a flat piece of wood (a chessboard, a surfboard), or the verb 'to board' meaning to get on a plane, train, or ship. 'Board and lodging' refers to accommodation that includes meals.",usage:"Native use: common in business meetings (management group), travel (boarding), and renting a room (board and lodging).",visual:"🧑‍💼"},
  {lesson:"Lesson 16",topic:"Business, Media & Everyday Words",english:"trade",vi:"thương mại, buôn bán (danh từ/động từ); trao đổi (động từ); nghề thủ công, tay nghề (danh từ)",example:"The two countries signed a new trade agreement last month.",exampleVi:"Hai nước đã ký một hiệp định thương mại mới vào tháng trước.",approx:"IPA: /treɪd/ | gần đúng: TRAYD",explain:"The buying and selling of goods, especially between countries; as a verb, it can also mean to exchange one thing for another. Separately, 'a trade' is a skilled manual occupation learned through training, such as carpentry or plumbing: 'he learned a trade after school' (anh ấy học một nghề thủ công sau khi ra trường).",usage:"Native use: common in economics and business news (commerce); common in career/education talk (skilled occupation).",visual:"🚢"}
];

grammarNotesBank["Lesson 16"] = [
  {title:"Hardly: a hidden negative",body:"Hardly means 'almost not', so a sentence with hardly already has negative meaning — do not add 'not' again. It often comes after auxiliary/modal verbs and before the main verb, and pairs naturally with 'ever', 'any', and 'when'.",pattern:"subject + can/could + hardly + verb | hardly ever + verb | hardly any + noun",example:"I can hardly hear you; there is hardly any signal here.",meaning:"Tôi hầu như không nghe được bạn nói; ở đây hầu như không có sóng."},
  {title:"Occur, indicate, and formal reporting verbs",body:"Occur and indicate are common in formal or academic English to replace 'happen' and 'show'. 'It occurred to me that...' introduces a sudden thought, while 'X indicates that...' introduces an evidence-based conclusion.",pattern:"it occurs to sb that... | data/results indicate that...",example:"It occurred to her that the results indicated a bigger problem than expected.",meaning:"Cô ấy chợt nhận ra rằng kết quả cho thấy một vấn đề lớn hơn dự kiến."},
  {title:"One word, many meanings: off, board, roll",body:"Some short everyday words change meaning completely with context. 'Off' can mean cancelled, switched off, or a discount; 'board' can mean a management group, a flat piece of wood, or getting on transport; 'roll' can mean to turn over, a bread roll, or a rolled-up item. Always check the surrounding words.",pattern:"turn sth off | a day off | the board of directors | to board a flight | to roll (over) | a roll of paper",example:"The board approved the trip, so we boarded the plane, and the meeting was off until Monday.",meaning:"Hội đồng đã phê duyệt chuyến đi, nên chúng tôi lên máy bay, còn cuộc họp bị hoãn đến thứ Hai."},
  {title:"Idioms and secondary senses worth knowing",body:"Several Lesson 16 words carry a common idiomatic or secondary sense that is easy to miss: 'be partial to' means to like something, not to be biased; 'a reject' (noun) is a faulty product, not just the act of refusing; 'defeat the purpose' means an action backfires against its own goal; 'in disgrace' describes someone publicly shamed; and 'a trade' can mean a skilled manual occupation, not only international commerce.",pattern:"be partial to + noun | a reject | defeat the purpose (of + gerund) | in disgrace | learn a trade",example:"He learned a trade as a carpenter, was partial to a slow, careful method, and refused to rush — even if that seemed to defeat the purpose of a tight deadline.",meaning:"Anh ấy học nghề thợ mộc, khá thích cách làm chậm rãi và cẩn thận, và từ chối làm vội — dù điều đó có vẻ làm mất tác dụng của một hạn chót gấp gáp."}
];

grammarBank["Lesson 16"] = [
  {q:"Choose the best word: The manager gave only a ___ answer, avoiding the real question.",choices:["partial","compulsory","tropical"],a:"partial",why:"Partial here means incomplete, not giving the full picture."},
  {q:"Choose the best word: Wearing a seatbelt is ___ in this country, not optional.",choices:["compulsory","partial","jealously"],a:"compulsory",why:"Compulsory means required by law or rule, with no choice involved."},
  {q:"Complete: The scandal was seen as a national ___ that damaged the leader's reputation.",choices:["disgrace","charm","trade"],a:"disgrace",why:"Disgrace describes a shameful situation that causes loss of respect."}
];

listeningBank["Lesson 16"] = {
  text:"Last month, a small local scandal occurred in Minh's office. A senior manager was accused of reading private emails, and many staff reacted jealously when he was allowed to keep his position instead of facing compulsory leave. The board reviewed the case and eventually decided to reject calls for his resignation, saying the evidence only gave a partial picture of what really happened. Reports in the media indicated that the company's earnings had actually improved that quarter, which made some employees suspect the decision was more about protecting profits than fairness. To introduce a fresh start, the company published the full contents of its new ethics policy, which some workers hardly bothered to read. Others joked that the manager's charm had simply won the board over, while critics described the outcome as a disgrace and a defeat for the transparency the company had promised only months earlier — hardly a fair trade of accountability for convenience. Whatever the truth, the tension in the tropical heat of that summer office made the story roll on for weeks, until a new illness scare and a software bug finally pushed it off the front page.",
  meaning:"Tháng trước, một vụ bê bối nhỏ đã xảy ra tại văn phòng của Minh. Một quản lý cấp cao bị cáo buộc đọc trộm email riêng tư, và nhiều nhân viên đã phản ứng một cách ghen tị khi anh ta được phép giữ vị trí thay vì phải nghỉ việc bắt buộc. Hội đồng quản trị đã xem xét vụ việc và cuối cùng quyết định bác bỏ những lời kêu gọi anh ta từ chức, cho rằng bằng chứng chỉ cho thấy một phần của những gì thực sự xảy ra. Các báo cáo trên truyền thông cho thấy thu nhập của công ty thực ra đã tăng trong quý đó, khiến một số nhân viên nghi ngờ quyết định này thiên về bảo vệ lợi nhuận hơn là công bằng. Để giới thiệu một khởi đầu mới, công ty đã công bố toàn bộ nội dung chính sách đạo đức mới, mà một số nhân viên hầu như không buồn đọc. Những người khác đùa rằng sự duyên dáng của vị quản lý đã đơn giản chinh phục được hội đồng, trong khi những người chỉ trích mô tả kết quả này là một điều ô nhục và một thất bại đối với sự minh bạch mà công ty đã hứa chỉ vài tháng trước — hầu như không phải là một sự trao đổi công bằng giữa trách nhiệm và sự tiện lợi. Dù sự thật là gì, không khí căng thẳng trong cái nóng nhiệt đới của văn phòng mùa hè đó khiến câu chuyện tiếp tục lăn dài trong nhiều tuần, cho đến khi một đợt bệnh mới xuất hiện và một lỗi phần mềm cuối cùng đã đẩy nó khỏi trang nhất.",
  questions:[
    {q:"Why did many staff react jealously?",a:["because the manager was allowed to keep his position instead of facing compulsory leave","he was allowed to keep his position instead of compulsory leave"],hint:"Think about what happened to the manager instead of him leaving."},
    {q:"What did the media reports indicate about the company?",a:["that the company's earnings had actually improved that quarter","earnings had improved that quarter"],hint:"About money, not about the scandal itself."},
    {q:"What two things finally pushed the story off the front page?",a:["a new illness scare and a software bug","an illness scare and a bug"],hint:"One is health-related, one is technology-related."}
  ],
  dictation:["The board reviewed the case and eventually decided to reject calls for his resignation.","Whatever the truth, the tension in the tropical heat of that summer office made the story roll on for weeks."]
};

quizBank["Lesson 16"] = [
  {q:"Translate: hầu như không",a:["hardly"],hint:"An adverb meaning 'almost not'."},
  {q:"Complete: She took the day ___ to rest.",a:["off"],hint:"Not working; a common word with many meanings."},
  {q:"Translate: một cách ghen tị",a:["jealously"],hint:"Adverb from 'jealous'."},
  {q:"Translate: bắt buộc",a:["compulsory"],hint:"Required by law or rule, opposite of optional."},
  {q:"Complete: The report gave only a ___ picture of what happened.",a:["partial"],hint:"Incomplete, not full."},
  {q:"Translate: từ chối, bác bỏ",a:["reject"],hint:"To refuse to accept something."},
  {q:"Complete: The accident ___ late at night.",a:["occurred"],hint:"A formal word for 'happened'."},
  {q:"Translate: giới thiệu",a:["introduce"],hint:"To present someone or something for the first time."},
  {q:"Translate: nội dung",a:["contents"],hint:"What is inside a box or document."},
  {q:"Complete: The data ___ a steady rise in sales.",a:["indicates"],hint:"To show or point to evidence."},
  {q:"Translate: (thuộc) nhiệt đới",a:["tropical"],hint:"Relating to hot, humid regions near the equator."},
  {q:"Translate: bệnh tật",a:["illness"],hint:"The general state of being sick."},
  {q:"Translate: sự duyên dáng, quyến rũ",a:["charm"],hint:"A pleasant quality that makes people like someone."},
  {q:"Complete: The developers fixed the ___ that crashed the app.",a:["bug"],hint:"An error in software, or a small insect."},
  {q:"Translate: truyền thông",a:["media"],hint:"TV, newspapers, and the internet as a group."},
  {q:"Complete: The ball ___ off the table.",a:["rolled"],hint:"To move by turning over and over."},
  {q:"Translate: thu nhập",a:["earnings"],hint:"Money earned from work or business."},
  {q:"Complete: The ___ of directors approved the new budget.",a:["board"],hint:"A group that manages a company."},
  {q:"Translate: thất bại, đánh bại",a:["defeat"],hint:"A loss in a competition, or to beat an opponent."},
  {q:"Translate: sự ô nhục",a:["disgrace"],hint:"A situation that causes loss of respect."},
  {q:"Translate: thương mại, buôn bán",a:["trade"],hint:"The buying and selling of goods."},
  {q:"Complete: I'm quite ___ to a cup of tea in the afternoon.",a:["partial"],hint:"Idiom 'be ___ to something' = to like it, not to be biased."},
  {q:"Complete: These shoes are factory ___, sold cheap because of small flaws.",a:["rejects"],hint:"Noun form, stress on the first syllable: a faulty product."},
  {q:"Complete: Driving to the gym would ___ the whole point of trying to walk more.",a:["defeat"],hint:"Idiom: an action working against its own goal."},
  {q:"Translate: trong tình trạng mất thể diện, bị thất sủng",a:["in disgrace"],hint:"Describes someone publicly shamed."},
  {q:"Complete: After leaving school, he learned a ___ as an electrician.",a:["trade"],hint:"A skilled manual occupation, not international commerce here."},
  {q:"Complete: Please stop ___ me about the deadline; I know already!",a:["bugging"],hint:"Verb meaning to annoy or pester."},
  {q:"Complete: Passengers should ___ the flight at gate 12.",a:["board"],hint:"Verb meaning to get on a plane, train, or ship."}
];

lessonInfo["Lesson 17"] = {
  title: "Money, Budgeting and Personal Finance",
  level: "B2",
  goal: "Talk about earning, spending, saving, and borrowing money precisely, and handle prices, bills, and banking situations in English.",
  output: "Explain a real financial decision you made (a purchase, a saving plan, or a loan) using at least six target words from this lesson.",
  topics: ["Earning & Spending", "Saving & Borrowing", "Prices & Value", "Banking & Bills"]
};

const lesson17Items = [
  {lesson:"Lesson 17",topic:"Earning & Spending",english:"afford",vi:"đủ tiền để mua, kham nổi; (can't afford to) không thể liều, không thể để xảy ra; (trang trọng) mang lại, đem đến",example:"We cannot afford a new car this year, so we will repair the old one.",exampleVi:"Năm nay chúng tôi không đủ tiền mua xe mới, nên sẽ sửa xe cũ.",approx:"IPA: /əˈfɔːrd/ | gần đúng: ə-FAWRD",explain:"Almost always used with can/could/be able to. Beyond money, 'can't afford to + verb' means you cannot risk something: 'We can't afford to lose this client' (Chúng ta không thể để mất khách hàng này). In formal writing it can also mean to provide or give: 'The balcony affords a fine view of the river.'",usage:"Native use: extremely common in daily money talk (can't afford it) and in risk warnings at work (can't afford to fail).",visual:"💸"},
  {lesson:"Lesson 17",topic:"Earning & Spending",english:"income",vi:"thu nhập (tiền vào đều đặn từ lương, kinh doanh, cho thuê)",example:"Her monthly income is not high, but it is stable.",exampleVi:"Thu nhập hàng tháng của cô ấy không cao, nhưng ổn định.",approx:"IPA: /ˈɪnkʌm/ | gần đúng: IN-kum",explain:"Money that regularly comes in from work, business, or investments. Note the contrast with 'earnings' (Lesson 16): earnings usually means money you earned by working or profits a company reports, while income is any regular money coming in, including rent and interest. Common collocations: income tax, disposable income, a source of income, low-income families.",usage:"Native use: standard in tax forms, loan applications, news, and economics.",visual:"📥"},
  {lesson:"Lesson 17",topic:"Earning & Spending",english:"expense",vi:"khoản chi, chi phí; (expenses) công tác phí, tiền chi được hoàn lại; (at the expense of) đánh đổi bằng, gây thiệt cho",example:"Rent is our biggest monthly expense.",exampleVi:"Tiền thuê nhà là khoản chi lớn nhất hàng tháng của chúng tôi.",approx:"IPA: /ɪkˈspens/ | gần đúng: ik-SPENSS",explain:"A cost you have to pay. In the plural, 'expenses' are work costs your company pays back ('travel expenses', 'to claim expenses'). The phrase 'at the expense of something' means you gained one thing but lost another: 'He built his career at the expense of his health' (Anh ấy xây dựng sự nghiệp bằng cái giá là sức khỏe).",usage:"Native use: common in budgets and accounting (cost); very common at work (claim expenses); the idiom is common in criticism and essays.",visual:"🧾"},
  {lesson:"Lesson 17",topic:"Earning & Spending",english:"spare",vi:"dư ra, rảnh rỗi (spare time, spare change); dự phòng (spare key); (động từ) dành ra, bớt ra; tha, miễn cho",example:"I do not have any spare cash until payday.",exampleVi:"Tôi không có đồng nào dư ra cho đến ngày lãnh lương.",approx:"IPA: /sper/ | gần đúng: SPAIR",explain:"As an adjective, extra and not currently needed: spare time, spare change, a spare key, a spare tyre. As a verb, to give someone a small amount of something you have: 'Can you spare five minutes?' It also means to save someone from something unpleasant ('spare me the details'), and 'spare no expense' means to spend freely to get the best.",usage:"Native use: extremely common in conversation for time and small money; 'spare no expense' is common for weddings, events, and luxury.",visual:"🔑"},
  {lesson:"Lesson 17",topic:"Earning & Spending",english:"tight",vi:"chật, bó sát; (tiền bạc) eo hẹp, khó khăn; (lịch trình, hạn chót) sát sao, gấp; (tight-fisted) keo kiệt",example:"Money is tight this month, so we are eating at home.",exampleVi:"Tháng này tiền bạc eo hẹp, nên chúng tôi ăn ở nhà.",approx:"IPA: /taɪt/ | gần đúng: TAIT",explain:"Beyond the physical sense (tight shoes), 'tight' describes having barely enough of something: a tight budget, a tight schedule, a tight deadline, 'money is tight'. 'Tight-fisted' describes a person who hates spending money, and 'a tight spot' means a difficult situation.",usage:"Native use: very common in everyday talk about budgets and deadlines.",visual:"🪢"},
  {lesson:"Lesson 17",topic:"Saving & Borrowing",english:"savings",vi:"tiền tiết kiệm; khoản tiền tiết kiệm được nhờ mua rẻ hơn",example:"They used their savings to pay for the wedding.",exampleVi:"Họ đã dùng tiền tiết kiệm để trả cho đám cưới.",approx:"IPA: /ˈseɪvɪŋz/ | gần đúng: SAY-vingz",explain:"Money you have kept instead of spending, usually plural. It can also mean the amount you avoid paying: 'a saving of 20%' (singular in British English, 'savings' in American English). Common collocations: a savings account, life savings, to dip into your savings.",usage:"Native use: standard in banking, and very common when talking about big purchases or emergencies.",visual:"🐖"},
  {lesson:"Lesson 17",topic:"Saving & Borrowing",english:"debt",vi:"nợ, khoản nợ; (be in sb's debt) mang ơn ai",example:"He worked two jobs to pay off his student debt.",exampleVi:"Anh ấy làm hai công việc để trả hết nợ học phí.",approx:"IPA: /det/ | gần đúng: DET (chữ b câm, không đọc)",explain:"Money you owe to someone. Watch the silent 'b' — it is pronounced like 'debt' rhyming with 'get'. Common collocations: to be in debt, to get into debt, to pay off a debt, national debt, credit card debt. Figuratively, 'I am in your debt' means you owe someone a favour, not money.",usage:"Native use: very common in personal finance, news about economies, and formal thanks (in your debt).",visual:"⛓️"},
  {lesson:"Lesson 17",topic:"Saving & Borrowing",english:"loan",vi:"khoản vay, tiền vay; (động từ) cho vay, cho mượn; (on loan) đang được cho mượn",example:"She took out a small loan to start her business.",exampleVi:"Cô ấy đã vay một khoản nhỏ để khởi nghiệp.",approx:"IPA: /loʊn/ | gần đúng: LOHN",explain:"Money borrowed that must be repaid, usually with interest. The verb 'to loan' means to lend, especially in American English. 'On loan' describes something lent temporarily: a painting on loan to a museum, or a football player on loan to another club. Common collocations: to take out a loan, to apply for a loan, to repay a loan.",usage:"Native use: standard in banking; the 'on loan' sense is common in sport and museum news.",visual:"🏦"},
  {lesson:"Lesson 17",topic:"Saving & Borrowing",english:"mortgage",vi:"khoản vay mua nhà, tiền vay thế chấp nhà",example:"They still have twenty years left on their mortgage.",exampleVi:"Họ vẫn còn hai mươi năm nữa mới trả xong khoản vay mua nhà.",approx:"IPA: /ˈmɔːrɡɪdʒ/ | gần đúng: MAWR-gij (chữ t câm, không đọc)",explain:"A long-term loan used to buy property, where the house itself is the security for the loan. The 't' is silent — a very common pronunciation trap. Common collocations: to take out a mortgage, monthly mortgage payments, to pay off the mortgage, a mortgage rate.",usage:"Native use: extremely common in adult conversation about housing in the UK, US, and Australia.",visual:"🏠"},
  {lesson:"Lesson 17",topic:"Saving & Borrowing",english:"owe",vi:"nợ (tiền, lời xin lỗi, lời giải thích); có được điều gì là nhờ ai/cái gì",example:"I still owe my brother two hundred dollars.",exampleVi:"Tôi vẫn còn nợ anh trai tôi hai trăm đô la.",approx:"IPA: /oʊ/ | gần đúng: OH (đọc y hệt từ 'oh', hoàn toàn không có âm /w/)",explain:"To have to pay money back to someone: 'owe somebody something' or 'owe something to somebody'. It is also used for non-money obligations — 'You owe me an apology' (Bạn nợ tôi một lời xin lỗi) — and to credit a success to someone: 'She owes her success to years of practice.'",usage:"Native use: very common in both money contexts and emotional or social ones (owe an apology, owe a favour).",visual:"🤝"},
  {lesson:"Lesson 17",topic:"Prices & Value",english:"worth",vi:"có giá trị (bằng); đáng để làm; (get your money's worth) đáng đồng tiền; (net worth) tổng tài sản ròng",example:"The house is worth much more than they paid for it.",exampleVi:"Căn nhà có giá trị cao hơn nhiều so với số tiền họ đã trả.",approx:"IPA: /wɜːrθ/ | gần đúng: WURTH",explain:"Used with 'be' to give a value ('it is worth $500') and, very importantly, with a gerund to say something deserves the effort: 'The museum is worth visiting' (Bảo tàng đáng để ghé thăm). 'To get your money's worth' means to receive good value; 'net worth' is the total value of what a person owns minus what they owe.",usage:"Native use: 'worth + V-ing' is one of the most useful B2 patterns for recommendations and advice.",visual:"⚖️"},
  {lesson:"Lesson 17",topic:"Prices & Value",english:"bargain",vi:"món hời, món mua được giá rẻ; (động từ) mặc cả, thương lượng; (into the bargain) thêm vào đó nữa",example:"At half price, that laptop was a real bargain.",exampleVi:"Với giá bằng một nửa, chiếc laptop đó thực sự là một món hời.",approx:"IPA: /ˈbɑːrɡən/ | gần đúng: BAHR-gən",explain:"As a noun, something bought for much less than its normal value. As a verb, to discuss a price until both sides agree ('to bargain with a seller'). The phrase 'into the bargain' means 'and also, on top of that': 'The flat was cheap, and close to work into the bargain.' A 'bargain hunter' is someone who loves looking for cheap deals.",usage:"Native use: common in shopping and travel talk; the verb is common in markets and negotiations.",visual:"🏷️"},
  {lesson:"Lesson 17",topic:"Prices & Value",english:"discount",vi:"sự giảm giá, khoản giảm giá (danh từ); (động từ) coi nhẹ, bỏ qua, không tính đến",example:"Students get a ten percent discount on all tickets.",exampleVi:"Sinh viên được giảm giá mười phần trăm cho tất cả các vé.",approx:"IPA (noun): /ˈdɪskaʊnt/ | gần đúng: DISS-kownt — IPA (verb, nghĩa 'coi nhẹ, bỏ qua'): /dɪsˈkaʊnt/ | gần đúng: dis-KOWNT (lưu ý: khi động từ chỉ nghĩa 'giảm giá', người Mỹ thường vẫn nhấn âm đầu: DISS-kownt)",explain:"As a noun (stress on the first syllable), an amount taken off the normal price: 'a 20% discount', 'at a discount', 'a discount code'. As a verb meaning to decide that something is not important or not true, the stress moves to the second syllable: 'The police discounted the theory' (Cảnh sát đã bỏ qua giả thuyết đó). Careful — this shift is less reliable than it is for 'refund' or 'reject' (Lesson 16): when the verb simply means to reduce a price, many American speakers keep the first-syllable stress ('the shop discounted everything'), and dictionaries disagree. Treat second-syllable stress as safe for the 'dismiss' sense only.",usage:"Native use: the noun is everywhere in shopping; the verb is common in news, research, and formal argument.",visual:"🔖"},
  {lesson:"Lesson 17",topic:"Prices & Value",english:"refund",vi:"tiền hoàn lại (danh từ); hoàn tiền, trả lại tiền (động từ)",example:"If the shoes do not fit, you can ask for a refund.",exampleVi:"Nếu giày không vừa, bạn có thể yêu cầu hoàn tiền.",approx:"IPA (noun): /ˈriːfʌnd/ | gần đúng: REE-fund — IPA (verb): /rɪˈfʌnd/ | gần đúng: ri-FUND",explain:"Money returned to you because you sent something back or were charged too much. Like 'discount' and 'reject', the noun is stressed on the first syllable and the verb on the second. Common collocations: a full refund, a partial refund (see 'partial' in Lesson 16), a tax refund, to claim a refund, a no-refund policy.",usage:"Native use: essential for shopping, travel cancellations, and customer service complaints.",visual:"↩️"},
  {lesson:"Lesson 17",topic:"Prices & Value",english:"overpriced",vi:"bị hét giá, đắt hơn nhiều so với giá trị thật",example:"The food was tasty but seriously overpriced.",exampleVi:"Đồ ăn ngon nhưng bị hét giá quá đáng.",approx:"IPA: /ˌoʊvərˈpraɪst/ | gần đúng: oh-vər-PRAISST",explain:"Costing more than it is really worth — a judgment, not just a high price. Note the difference from 'expensive', which is neutral: a luxury watch can be expensive without being overpriced. The opposite is 'underpriced' or, more positively, 'reasonably priced'.",usage:"Native use: very common in restaurant, hotel, and product reviews.",visual:"📈"},
  {lesson:"Lesson 17",topic:"Banking & Bills",english:"bill",vi:"hóa đơn, giấy tính tiền; tờ tiền giấy (Anh-Mỹ); dự luật; (foot the bill) đứng ra trả tiền",example:"The electricity bill was higher than usual this winter.",exampleVi:"Hóa đơn tiền điện mùa đông này cao hơn bình thường.",approx:"IPA: /bɪl/ | gần đúng: BIL",explain:"A written statement of money you must pay (an electricity bill, a phone bill, a restaurant bill). In American English a 'bill' is also a banknote ('a ten-dollar bill'), and in politics a 'bill' is a proposed law before it is passed. Useful phrases: 'to foot the bill' (to pay, often unwillingly) and 'to split the bill' (to share the cost).",usage:"Native use: essential in restaurants and household talk; the 'proposed law' sense is common in news.",visual:"📄"},
  {lesson:"Lesson 17",topic:"Banking & Bills",english:"deposit",vi:"tiền đặt cọc; tiền gửi vào tài khoản; (động từ) gửi tiền, đặt cọc; lớp trầm tích, mỏ khoáng sản",example:"We paid a deposit of one month's rent before moving in.",exampleVi:"Chúng tôi đã trả tiền đặt cọc bằng một tháng tiền thuê trước khi dọn vào.",approx:"IPA: /dɪˈpɑːzɪt/ | gần đúng: di-PAH-zit",explain:"Money paid in advance as security (a rental deposit, a deposit on a house) or money put into a bank account. As a verb it means to put money in the bank or to leave something in a place. In geology, a 'deposit' is a natural layer of minerals or oil in the ground.",usage:"Native use: essential when renting a flat or booking; the geology sense is common in science and news.",visual:"🔐"},
  {lesson:"Lesson 17",topic:"Banking & Bills",english:"invest",vi:"đầu tư (tiền); đầu tư, bỏ ra (thời gian, công sức)",example:"He decided to invest part of his savings in a small shop.",exampleVi:"Anh ấy quyết định đầu tư một phần tiền tiết kiệm vào một cửa hàng nhỏ.",approx:"IPA: /ɪnˈvest/ | gần đúng: in-VEST",explain:"To put money into something hoping it will grow in value — always followed by 'in': invest in shares, in property, in a company. It is used just as naturally for effort and time: 'She invested years in learning English.' Related forms: investment (noun), investor (person).",usage:"Native use: common in finance news and, figuratively, in career and education advice.",visual:"🌱"},
  {lesson:"Lesson 17",topic:"Banking & Bills",english:"interest",vi:"tiền lãi, lãi suất; sự quan tâm, hứng thú; lợi ích, quyền lợi",example:"The bank charges 8% interest on personal loans.",exampleVi:"Ngân hàng tính lãi suất 8% cho các khoản vay cá nhân.",approx:"IPA: /ˈɪntrəst/ | gần đúng: IN-trəst (thường chỉ 2 âm tiết)",explain:"In finance, the extra money paid for borrowing, or earned for saving: an interest rate, high interest, compound interest. The everyday sense is attention or curiosity, and a third sense is advantage or benefit: 'in the public interest', 'a conflict of interest' (a situation where your private benefit clashes with your duty).",usage:"Native use: all three senses are frequent — banking, small talk about hobbies, and formal/legal language.",visual:"📊"},
  {lesson:"Lesson 17",topic:"Banking & Bills",english:"broke",vi:"hết sạch tiền, cháy túi (tính từ, thân mật); (go broke) phá sản, vỡ nợ",example:"I am completely broke until I get paid on Friday.",exampleVi:"Tôi cháy túi hoàn toàn cho đến khi được trả lương vào thứ Sáu.",approx:"IPA: /broʊk/ | gần đúng: BROHK",explain:"An informal adjective meaning having no money at all right now — usually temporary. 'Flat broke' and 'stone broke' are stronger versions. 'To go broke' means a person or business loses all their money. Careful: 'broke' is also the past tense of 'break', so context decides the meaning.",usage:"Native use: very common in casual conversation among friends and students; too informal for a bank letter.",visual:"🕳️"}
];

grammarNotesBank["Lesson 17"] = [
  {title:"Worth, afford and spare: three high-value patterns",body:"These three words each have a fixed structure that B2 learners often get wrong. 'Worth' takes a gerund (V-ing), never a to-infinitive. 'Afford' takes either a noun or 'to + verb', and almost always appears with can/could. 'Spare' takes two objects: spare somebody something.",pattern:"sth is worth + V-ing | can/can't afford + noun | can't afford to + verb | spare sb sth",example:"The course is worth taking, but I cannot afford to pay the full fee — can you spare me a moment to discuss a discount?",meaning:"Khóa học đáng để tham gia, nhưng tôi không đủ tiền trả toàn bộ học phí — bạn dành cho tôi một chút thời gian để bàn về việc giảm giá được không?"},
  {title:"Money verbs and their prepositions",body:"Money verbs in English are defined by the preposition that follows them, and Vietnamese speakers often mix them up. Remember the direction: you borrow FROM a person and lend TO a person; you spend money ON a thing but pay FOR a thing; you invest IN something; and you owe money TO someone.",pattern:"spend/waste money on sth | pay for sth | borrow sth from sb | lend sth to sb | invest in sth | owe sth to sb",example:"I borrowed the money from my sister, spent it all on a laptop, and now I owe two hundred dollars to her.",meaning:"Tôi đã mượn tiền từ chị gái, tiêu hết vào một chiếc laptop, và giờ tôi nợ chị ấy hai trăm đô la."},
  {title:"Stress shift: discount, refund, and friends",body:"A group of English words changes stress depending on whether it is a noun or a verb: the noun is stressed on the FIRST syllable, the verb on the SECOND. The rule is fully reliable for 'refund' in this lesson and 'reject' in Lesson 16. 'Discount' is the exception worth knowing: the noun is always DIScount, and the verb is disCOUNT when it means to dismiss an idea, but many American speakers keep DIScount when the verb just means to reduce a price. Getting the stress wrong makes a word hard for native listeners to place.",pattern:"a DIScount (n) / to disCOUNT an idea (v) | a REfund (n) / to reFUND (v) | a REject (n) / to reJECT (v)",example:"The shop refused to reFUND my money, so I never got the REfund they promised.",meaning:"Cửa hàng từ chối hoàn lại tiền cho tôi, nên tôi không bao giờ nhận được khoản hoàn tiền mà họ đã hứa."},
  {title:"Idioms and secondary senses worth knowing",body:"Several Lesson 17 words carry a common non-money sense that is easy to miss: 'at the expense of' means one thing was sacrificed for another; 'to foot the bill' means to pay, often unwillingly; 'to be in someone's debt' means to owe a favour, not money; 'into the bargain' means 'on top of that'; 'a conflict of interest' is about duty, not curiosity; and 'to discount an idea' means to dismiss it.",pattern:"at the expense of + noun | foot the bill | be in sb's debt | into the bargain | a conflict of interest | discount a theory",example:"He got the promotion at the expense of his family time, and his boss discounted every complaint about it — though the company did foot the bill for a holiday into the bargain.",meaning:"Anh ấy được thăng chức bằng cái giá là thời gian cho gia đình, và sếp anh ấy đã bỏ qua mọi lời phàn nàn về chuyện đó — dù công ty có đứng ra trả tiền cho một kỳ nghỉ thêm vào đó."}
];

grammarBank["Lesson 17"] = [
  {q:"Choose the best form: This museum is definitely worth ___ if you have a free afternoon.",choices:["visiting","to visit","visit"],a:"visiting",why:"'Worth' is always followed by a gerund (V-ing), never a to-infinitive."},
  {q:"Choose the correct preposition: They decided to invest all their savings ___ a small apartment.",choices:["in","on","for"],a:"in",why:"You invest IN something; 'spend money on' and 'pay for' use different prepositions."},
  {q:"Choose the best word: The restaurant was good, but at forty dollars a plate it felt ___.",choices:["overpriced","tight","broke"],a:"overpriced",why:"Overpriced means costing far more than the real value — a judgment, unlike neutral 'expensive'."}
];

listeningBank["Lesson 17"] = {
  text:"When Minh moved to the city for a new job, money was tight from the very first month. His income looked good on paper, but rent, transport and a phone bill took most of it, and the landlord had also asked for a deposit of two months' rent before he could move in. By the second week he was broke, and he had to borrow from his sister — a loan he promised to repay by the end of the quarter, although he still owes her part of it today. To take control, he wrote down every expense for thirty days and was shocked: he was spending more on coffee and delivery food than on electricity. He cancelled two subscriptions he hardly used, learned to spare a few hours each weekend for cooking, and started putting a small amount into a savings account every payday. Some purchases turned out to be genuine bargains, such as a second-hand desk at a seventy percent discount; others were badly overpriced, and one online shop refused to give him a refund for a jacket that never arrived. A year later his debt is nearly gone, he has begun to invest a little in an index fund, and he is even thinking about a mortgage — though he knows the interest on a twenty-five-year home loan is worth calculating very carefully before he signs anything.",
  meaning:"Khi Minh chuyển lên thành phố để nhận công việc mới, tiền bạc đã eo hẹp ngay từ tháng đầu tiên. Thu nhập của anh trông có vẻ ổn trên giấy tờ, nhưng tiền thuê nhà, đi lại và hóa đơn điện thoại đã ngốn gần hết, và chủ nhà còn yêu cầu một khoản đặt cọc bằng hai tháng tiền thuê trước khi anh được dọn vào. Đến tuần thứ hai anh đã cháy túi, và phải vay chị gái — một khoản vay anh hứa sẽ trả hết trước cuối quý, dù đến hôm nay anh vẫn còn nợ chị ấy một phần. Để kiểm soát tình hình, anh ghi lại từng khoản chi trong ba mươi ngày và đã bị sốc: anh tiêu cho cà phê và đồ ăn giao tận nơi nhiều hơn cả tiền điện. Anh hủy hai gói đăng ký mà anh hầu như không dùng, học cách dành ra vài giờ mỗi cuối tuần để nấu ăn, và bắt đầu bỏ một khoản nhỏ vào tài khoản tiết kiệm mỗi kỳ lương. Một số món mua hóa ra là những món hời thực sự, chẳng hạn một chiếc bàn cũ được giảm giá bảy mươi phần trăm; những món khác thì bị hét giá quá đáng, và một cửa hàng trực tuyến đã từ chối hoàn tiền cho chiếc áo khoác không bao giờ được giao đến. Một năm sau, nợ của anh gần như đã hết, anh bắt đầu đầu tư một chút vào quỹ chỉ số, và thậm chí đang nghĩ đến một khoản vay mua nhà — dù anh biết rằng tiền lãi của một khoản vay nhà hai mươi lăm năm là điều đáng tính toán thật kỹ trước khi ký bất cứ thứ gì.",
  questions:[
    {q:"What did the landlord ask for before Minh could move in?",a:["a deposit of two months' rent","a deposit of two months rent","two months' rent as a deposit"],hint:"An amount paid in advance as security."},
    {q:"What was Minh shocked to discover after tracking his spending for thirty days?",a:["he was spending more on coffee and delivery food than on electricity","more on coffee and delivery food than on electricity"],hint:"Compare two categories: one is a utility bill."},
    {q:"What is Minh thinking about now, and what does he want to calculate carefully first?",a:["a mortgage, and the interest on a twenty-five-year home loan","a mortgage; the interest on the loan"],hint:"One is a long-term home loan; the other is the cost of borrowing."}
  ],
  dictation:["Money was tight from the very first month, and by the second week he was broke.","He is even thinking about a mortgage, though he knows the interest is worth calculating carefully."]
};

quizBank["Lesson 17"] = [
  {q:"Translate: đủ tiền để mua, kham nổi",a:["afford"],hint:"Almost always used with can or cannot."},
  {q:"Translate: thu nhập",a:["income"],hint:"Money that regularly comes in from work or investments."},
  {q:"Complete: Rent is our biggest monthly ___.",a:["expense"],hint:"A cost you have to pay."},
  {q:"Translate: tiền tiết kiệm",a:["savings"],hint:"Money kept in the bank instead of spent; usually plural."},
  {q:"Translate: nợ, khoản nợ",a:["debt"],hint:"Money you owe. Careful: the 'b' is silent."},
  {q:"Complete: She took out a small ___ to start her business.",a:["loan"],hint:"Borrowed money that must be repaid with interest."},
  {q:"Translate: khoản vay mua nhà",a:["mortgage"],hint:"A long-term property loan. The 't' is silent."},
  {q:"Complete: I still ___ my brother two hundred dollars.",a:["owe"],hint:"To have to pay money back to someone."},
  {q:"Complete: The house is ___ much more than they paid for it.",a:["worth"],hint:"Used with 'be' to give a value."},
  {q:"Translate: món hời (mua được giá rẻ)",a:["bargain"],hint:"Something bought for far less than its usual price."},
  {q:"Complete: Students get a ten percent ___ on all tickets.",a:["discount"],hint:"An amount taken off the normal price."},
  {q:"Translate: tiền hoàn lại",a:["refund"],hint:"Money returned when you send something back."},
  {q:"Complete: The food was tasty but seriously ___ at forty dollars a plate.",a:["overpriced"],hint:"Costing far more than it is really worth."},
  {q:"Complete: The electricity ___ was higher than usual this winter.",a:["bill"],hint:"A statement of money you must pay."},
  {q:"Translate: tiền đặt cọc",a:["deposit"],hint:"Money paid in advance as security when renting."},
  {q:"Complete: He decided to ___ part of his savings in a small shop.",a:["invest"],hint:"To put money into something hoping it grows."},
  {q:"Translate: tiền lãi, lãi suất",a:["interest"],hint:"The extra money paid for borrowing."},
  {q:"Translate: cháy túi, hết sạch tiền",a:["broke"],hint:"Informal adjective; also the past tense of 'break'."},
  {q:"Complete: Money is ___ this month, so we are eating at home.",a:["tight"],hint:"Barely enough; also used for schedules and deadlines."},
  {q:"Complete: I do not have any ___ cash until payday.",a:["spare"],hint:"Extra and not currently needed."},
  {q:"Complete the pattern: The museum is worth ___ if you have a free afternoon.",a:["visiting"],hint:"'Worth' always takes a gerund, never 'to visit'."},
  {q:"Complete the preposition: They invested all their savings ___ property.",a:["in"],hint:"Not 'on' and not 'for'."},
  {q:"Complete: He built his career at the ___ of his health.",a:["expense"],hint:"Idiom meaning one thing was sacrificed for another."},
  {q:"Complete: Her parents offered to foot the ___ for the whole wedding.",a:["bill"],hint:"Idiom meaning to pay, often unwillingly."},
  {q:"Complete: You saved my project — I am in your ___.",a:["debt"],hint:"Idiom: you owe someone a favour, not money."},
  {q:"Complete: The police ___ the theory because there was no evidence.",a:["discounted"],hint:"Verb sense with stress on the second syllable: to dismiss an idea."},
  {q:"Complete: The flat was cheap, and close to work into the ___.",a:["bargain"],hint:"Idiom meaning 'on top of that, as well'."},
  {q:"Complete: A judge who owns shares in the company has a conflict of ___.",a:["interest"],hint:"Not the money sense and not curiosity: private benefit clashing with duty."},
  {q:"Complete: We cannot ___ to lose this client, so answer the email today.",a:["afford"],hint:"Not about money here: cannot take the risk."},
  {q:"Complete: The company went ___ after losing its biggest contract.",a:["broke"],hint:"Idiom 'go ___' = to lose all your money."}
];

const wordFamilyBank = [
  {id:"honesty", lesson:"Lesson 14", forms:{adjective:"honest", noun:"honesty", adverb:"honestly"}, items:[
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"She has always been very ___ with her clients.", hintWord:"honest", a:["honest"], vi:"Cô ấy luôn rất trung thực với khách hàng của mình."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"___ is the foundation of a good relationship.", hintWord:"honest", a:["honesty"], vi:"Sự trung thực là nền tảng của một mối quan hệ tốt."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"He spoke ___ about his mistakes.", hintWord:"honest", a:["honestly"], vi:"Anh ấy đã nói một cách trung thực về những lỗi lầm của mình."}
  ]},
  {id:"loyalty", lesson:"Lesson 14", forms:{adjective:"loyal", noun:"loyalty", adverb:"loyally"}, items:[
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"The dog is extremely ___ to its owner.", hintWord:"loyal", a:["loyal"], vi:"Con chó rất trung thành với chủ của nó."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"The dog showed great ___ during the flood.", hintWord:"loyal", a:["loyalty"], vi:"Con chó đã thể hiện lòng trung thành lớn trong trận lụt."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"Fans have ___ supported the team for years.", hintWord:"loyal", a:["loyally"], vi:"Người hâm mộ đã trung thành ủng hộ đội bóng trong nhiều năm."}
  ]},
  {id:"creativity", lesson:"Lesson 14", forms:{verb:"create", adjective:"creative", noun:"creativity", adverb:"creatively"}, items:[
    {pos:"verb", posLabel:"Động từ (Verb)", sentence:"The team plans to ___ a new logo this month.", hintWord:"create", a:["create"], vi:"Nhóm dự định tạo ra một logo mới trong tháng này."},
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"She is a very ___ artist.", hintWord:"create", a:["creative"], vi:"Cô ấy là một nghệ sĩ rất sáng tạo."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"Good design requires both logic and ___.", hintWord:"create", a:["creativity"], vi:"Thiết kế tốt cần cả logic và sự sáng tạo."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"He solved the problem very ___.", hintWord:"create", a:["creatively"], vi:"Anh ấy đã giải quyết vấn đề một cách rất sáng tạo."}
  ]},
  {id:"flexibility", lesson:"Lesson 14", forms:{verb:"flex", adjective:"flexible", noun:"flexibility", adverb:"flexibly"}, items:[
    {pos:"verb", posLabel:"Động từ (Verb)", sentence:"Remember to ___ your muscles before running.", hintWord:"flex", a:["flex"], vi:"Hãy nhớ căng giãn cơ trước khi chạy."},
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"Our schedule is quite ___ this week.", hintWord:"flex", a:["flexible"], vi:"Lịch trình của chúng tôi khá linh hoạt trong tuần này."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"Remote work gives employees more ___.", hintWord:"flex", a:["flexibility"], vi:"Làm việc từ xa cho nhân viên nhiều sự linh hoạt hơn."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"The manager responded ___ to the client's request.", hintWord:"flex", a:["flexibly"], vi:"Người quản lý đã phản hồi một cách linh hoạt với yêu cầu của khách hàng."}
  ]},
  {id:"productivity", lesson:"Lesson 14", forms:{verb:"produce", adjective:"productive", noun:"productivity", adverb:"productively"}, items:[
    {pos:"verb", posLabel:"Động từ (Verb)", sentence:"The factory will ___ 500 units this week.", hintWord:"produce", a:["produce"], vi:"Nhà máy sẽ sản xuất 500 đơn vị trong tuần này."},
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"She had a very ___ morning at work.", hintWord:"produce", a:["productive"], vi:"Cô ấy đã có một buổi sáng làm việc rất năng suất."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"The new software boosted the team's ___.", hintWord:"produce", a:["productivity"], vi:"Phần mềm mới đã nâng cao năng suất của nhóm."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"The team worked ___ throughout the deadline week.", hintWord:"produce", a:["productively"], vi:"Nhóm đã làm việc năng suất suốt tuần cận hạn nộp."}
  ]},
  {id:"responsibility", lesson:"Lesson 14", forms:{verb:"respond", adjective:"responsible", noun:"responsibility", adverb:"responsibly"}, items:[
    {pos:"verb", posLabel:"Động từ (Verb)", sentence:"Please ___ to the email by Friday.", hintWord:"respond", a:["respond"], vi:"Vui lòng phản hồi email trước thứ Sáu."},
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"He is ___ for the whole project.", hintWord:"respond", a:["responsible"], vi:"Anh ấy chịu trách nhiệm cho toàn bộ dự án."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"Taking care of the pet is her ___.", hintWord:"respond", a:["responsibility"], vi:"Chăm sóc con vật là trách nhiệm của cô ấy."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"Please drink ___ during the celebration.", hintWord:"respond", a:["responsibly"], vi:"Hãy uống một cách có trách nhiệm trong buổi tiệc."}
  ]},
  {id:"sensitivity", lesson:"Lesson 14", forms:{verb:"sense", adjective:"sensitive", noun:"sensitivity", adverb:"sensitively"}, items:[
    {pos:"verb", posLabel:"Động từ (Verb)", sentence:"I could ___ that something was wrong.", hintWord:"sense", a:["sense"], vi:"Tôi có thể cảm nhận rằng có điều gì đó không đúng."},
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"He is very ___ about his weight.", hintWord:"sense", a:["sensitive"], vi:"Anh ấy rất nhạy cảm về cân nặng của mình."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"He handled the topic with great ___.", hintWord:"sense", a:["sensitivity"], vi:"Anh ấy đã xử lý vấn đề đó với sự nhạy cảm lớn."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"The nurse spoke ___ to the worried family.", hintWord:"sense", a:["sensitively"], vi:"Y tá đã nói chuyện một cách nhạy cảm với gia đình đang lo lắng."}
  ]},
  {id:"equality", lesson:"Lesson 14", forms:{verb:"equal", adjective:"equal", noun:"equality", adverb:"equally"}, items:[
    {pos:"verb", posLabel:"Động từ (Verb)", sentence:"Ten plus ten ___ twenty.", hintWord:"equal", a:["equals"], vi:"Mười cộng mười bằng hai mươi."},
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"All employees should get ___ pay for ___ work.", hintWord:"equal", a:["equal"], vi:"Mọi nhân viên nên nhận lương bằng nhau cho công việc như nhau."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"The company promotes ___ among all employees.", hintWord:"equal", a:["equality"], vi:"Công ty thúc đẩy sự bình đẳng giữa tất cả nhân viên."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"The chores were split ___ between the roommates.", hintWord:"equal", a:["equally"], vi:"Việc nhà được chia đều giữa các bạn cùng phòng."}
  ]},
  {id:"diversity", lesson:"Lesson 14", forms:{verb:"diversify", adjective:"diverse", noun:"diversity", adverb:"diversely"}, items:[
    {pos:"verb", posLabel:"Động từ (Verb)", sentence:"The company decided to ___ its product line.", hintWord:"diverse", a:["diversify"], vi:"Công ty quyết định đa dạng hóa dòng sản phẩm của mình."},
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"The city has a ___ population.", hintWord:"diverse", a:["diverse"], vi:"Thành phố này có dân số đa dạng."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"The city is known for its cultural ___.", hintWord:"diverse", a:["diversity"], vi:"Thành phố này nổi tiếng với sự đa dạng văn hóa."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"The committee members are ___ trained across many fields.", hintWord:"diverse", a:["diversely"], vi:"Các thành viên ủy ban được đào tạo đa dạng qua nhiều lĩnh vực."}
  ]},
  {id:"popularity", lesson:"Lesson 14", forms:{verb:"popularize", adjective:"popular", noun:"popularity", adverb:"popularly"}, items:[
    {pos:"verb", posLabel:"Động từ (Verb)", sentence:"The chef helped ___ this dish worldwide.", hintWord:"popular", a:["popularize"], vi:"Đầu bếp đã giúp phổ biến món ăn này trên toàn thế giới."},
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"That song is very ___ right now.", hintWord:"popular", a:["popular"], vi:"Bài hát đó rất phổ biến hiện nay."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"The singer's ___ grew after the concert.", hintWord:"popular", a:["popularity"], vi:"Sự phổ biến của ca sĩ tăng lên sau buổi hòa nhạc."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"The dish is ___ known as comfort food.", hintWord:"popular", a:["popularly"], vi:"Món ăn này thường được biết đến với tên gọi món ăn xoa dịu tâm hồn."}
  ]},
  {id:"reality", lesson:"Lesson 14", forms:{verb:"realize", adjective:"real", noun:"reality", adverb:"really"}, items:[
    {pos:"verb", posLabel:"Động từ (Verb)", sentence:"She didn't ___ how late it was.", hintWord:"real", a:["realize"], vi:"Cô ấy không nhận ra là đã muộn như vậy."},
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"Is this a ___ diamond?", hintWord:"real", a:["real"], vi:"Đây có phải là kim cương thật không?"},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"In ___, the project took much longer than planned.", hintWord:"real", a:["reality"], vi:"Trong thực tế, dự án mất nhiều thời gian hơn dự kiến."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"I ___ enjoyed the trip.", hintWord:"real", a:["really"], vi:"Tôi thực sự đã rất thích chuyến đi."}
  ]},
  {id:"security", lesson:"Lesson 14", forms:{verb:"secure", adjective:"secure", noun:"security", adverb:"securely"}, items:[
    {pos:"verb", posLabel:"Động từ (Verb)", sentence:"They managed to ___ the building before the storm.", hintWord:"secure", a:["secure"], vi:"Họ đã cố định an toàn cho tòa nhà trước cơn bão."},
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"Make sure the ladder is ___ before climbing.", hintWord:"secure", a:["secure"], vi:"Hãy chắc chắn rằng thang đã được cố định chắc chắn trước khi leo lên."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"The new locks improved the building's ___.", hintWord:"secure", a:["security"], vi:"Những chiếc khóa mới đã cải thiện sự an toàn của tòa nhà."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"Please fasten your seatbelt ___.", hintWord:"secure", a:["securely"], vi:"Vui lòng thắt chặt dây an toàn của bạn một cách chắc chắn."}
  ]},
  {id:"stability", lesson:"Lesson 14", forms:{verb:"stabilize", adjective:"stable", noun:"stability"}, items:[
    {pos:"verb", posLabel:"Động từ (Verb)", sentence:"Doctors worked to ___ the patient's condition.", hintWord:"stable", a:["stabilize"], vi:"Các bác sĩ đã nỗ lực để ổn định tình trạng của bệnh nhân."},
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"The ladder feels ___ now.", hintWord:"stable", a:["stable"], vi:"Cái thang bây giờ cảm thấy vững chắc."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"The country needs political ___ to grow.", hintWord:"stable", a:["stability"], vi:"Đất nước cần sự ổn định chính trị để phát triển."}
  ]},
  {id:"necessity", lesson:"Lesson 14", forms:{verb:"necessitate", adjective:"necessary", noun:"necessity", adverb:"necessarily"}, items:[
    {pos:"verb", posLabel:"Động từ (Verb)", sentence:"The delay will ___ a change in plans.", hintWord:"necessary", a:["necessitate"], vi:"Sự chậm trễ sẽ khiến cần phải thay đổi kế hoạch."},
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"A passport is ___ for international travel.", hintWord:"necessary", a:["necessary"], vi:"Hộ chiếu là cần thiết cho việc du lịch quốc tế."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"Clean water is a basic ___ for life.", hintWord:"necessary", a:["necessity"], vi:"Nước sạch là một sự cần thiết cơ bản cho cuộc sống."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"Expensive does not ___ mean better.", hintWord:"necessary", a:["necessarily"], vi:"Đắt tiền không nhất thiết có nghĩa là tốt hơn."}
  ]},
  {id:"possibility", lesson:"Lesson 14", forms:{adjective:"possible", noun:"possibility", adverb:"possibly"}, items:[
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"Is it ___ to finish the report today?", hintWord:"possible", a:["possible"], vi:"Có thể hoàn thành báo cáo hôm nay không?"},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"There is a ___ of rain tomorrow.", hintWord:"possible", a:["possibility"], vi:"Có khả năng ngày mai sẽ mưa."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"Could you ___ help me with this?", hintWord:"possible", a:["possibly"], vi:"Có thể nào bạn giúp tôi việc này không?"}
  ]},
  {id:"probability", lesson:"Lesson 14", forms:{adjective:"probable", noun:"probability", adverb:"probably"}, items:[
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"It is ___ that prices will rise next year.", hintWord:"probable", a:["probable"], vi:"Rất có thể là giá cả sẽ tăng vào năm sau."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"The ___ of winning the lottery is very low.", hintWord:"probable", a:["probability"], vi:"Xác suất trúng số rất thấp."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"She will ___ arrive late tonight.", hintWord:"probable", a:["probably"], vi:"Cô ấy có lẽ sẽ đến muộn tối nay."}
  ]},
  {id:"curiosity", lesson:"Lesson 14", forms:{adjective:"curious", noun:"curiosity", adverb:"curiously"}, items:[
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"The child was ___ about the strange sound.", hintWord:"curious", a:["curious"], vi:"Đứa trẻ tò mò về âm thanh lạ đó."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"The child's ___ led her to ask many questions.", hintWord:"curious", a:["curiosity"], vi:"Sự tò mò của đứa trẻ khiến cô bé hỏi rất nhiều câu hỏi."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"She looked ___ at the old photograph.", hintWord:"curious", a:["curiously"], vi:"Cô ấy nhìn một cách tò mò vào tấm ảnh cũ."}
  ]},
  {id:"similarity", lesson:"Lesson 14", forms:{adjective:"similar", noun:"similarity", adverb:"similarly"}, items:[
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"Her jacket is ___ to mine.", hintWord:"similar", a:["similar"], vi:"Áo khoác của cô ấy giống với áo của tôi."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"There is a strong ___ between the two designs.", hintWord:"similar", a:["similarity"], vi:"Có sự tương đồng mạnh mẽ giữa hai thiết kế."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"Both companies were ___ affected by the crisis.", hintWord:"similar", a:["similarly"], vi:"Cả hai công ty đều bị ảnh hưởng tương tự bởi cuộc khủng hoảng."}
  ]},
  {id:"capability", lesson:"Lesson 14", forms:{adjective:"capable", noun:"capability", adverb:"capably"}, items:[
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"She is ___ of handling the whole project alone.", hintWord:"capable", a:["capable"], vi:"Cô ấy có khả năng tự mình xử lý toàn bộ dự án."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"The company invested in new production ___.", hintWord:"capable", a:["capability","capabilities"], vi:"Công ty đã đầu tư vào năng lực sản xuất mới."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"He led the meeting ___ despite the pressure.", hintWord:"capable", a:["capably"], vi:"Anh ấy đã điều hành cuộc họp một cách năng lực dù chịu nhiều áp lực."}
  ]},
  {id:"charity", lesson:"Lesson 14", forms:{adjective:"charitable", noun:"charity", adverb:"charitably"}, items:[
    {pos:"adjective", posLabel:"Tính từ (Adjective)", sentence:"The company made a ___ donation to the school.", hintWord:"charity", a:["charitable"], vi:"Công ty đã có một khoản đóng góp từ thiện cho trường học."},
    {pos:"noun", posLabel:"Danh từ (Noun)", sentence:"She donates to ___ every month.", hintWord:"charity", a:["charity"], vi:"Cô ấy quyên góp cho tổ chức từ thiện mỗi tháng."},
    {pos:"adverb", posLabel:"Trạng từ (Adverb)", sentence:"He always acts ___ toward people in need.", hintWord:"charity", a:["charitably"], vi:"Anh ấy luôn hành xử một cách nhân ái với những người cần giúp đỡ."}
  ]}
];
function wordFamilyItems(){
  return wordFamilyBank.flatMap(family=>family.items.map(item=>({...item, familyId:family.id})));
}

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
  createLesson("Lesson 10", lesson10Items),
  createLesson("Lesson 11", lesson11Items),
  createLesson("Lesson 12", lesson12Items),
  createLesson("Lesson 13", lesson13Items),
  createLesson("Lesson 14", lesson14Items),
  createLesson("Lesson 15", lesson15Items),
  createLesson("Lesson 16", lesson16Items),
  createLesson("Lesson 17", lesson17Items)
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
