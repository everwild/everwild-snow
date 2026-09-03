export type Lang = "en" | "zh";

export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.packages": "Packages",
    "nav.resorts": "Resorts",
    "nav.guides": "Guides",
    "nav.contact": "Contact",
    "nav.cta": "Book Your Adventure",

    "hero.placeholder": "Hero Image / Video",
    "hero.label": "Nagano / Japan",
    "hero.title": "Your wild winter<br>starts in Japan.",
    "hero.desc":
      "EVERWILD Snow Adventure is your one-stop provider for Japan's winter - ski & snowboard lessons, guided runs, winter hiking, mountaineering, accommodation, and transport. Based in Nagano, available nationwide.",
    "hero.cta1": "Explore Services",
    "hero.cta2": "Get in Touch",

    "about.label": "About",
    "about.title": "Winter in Japan,<br>done your way.",
    "about.lead":
      "Lessons, guided skiing, backcountry hiking, mountaineering, lodging, and transport - we bring it all together so you can focus on the experience.",
    "about.f1.title": "Beginner Friendly",
    "about.f1.text":
      "Never skied before? No problem. Our instructors guide you from your very first turn with clear, patient instruction in English.",
    "about.f2.title": "Flexible & Personal",
    "about.f2.text":
      "Day packages for focused sessions, or fully customized itineraries covering everything from slopes to ryokan stays. Tell us your goals - we build the plan.",

    "services.label": "Services",
    "services.title": "Everything you need<br>for a wild winter.",
    "services.lead":
      "Six pillars of the EVERWILD experience - mix and match, or let us handle it all.",
    "services.s1.title": "Ski & Snowboard Lessons",
    "services.s1.text":
      "Private and small-group instruction for all levels. Ski and snowboarding, from first-timers to advanced technique refinement.",
    "services.s1.tag": "Lessons / All Levels",
    "services.s2.title": "Guided Skiing",
    "services.s2.text":
      "Explore the best terrain with a local guide who knows every run. Off-piste, tree runs, and resort favorites - at your pace.",
    "services.s2.tag": "Guiding / Resort & Backcountry",
    "services.s3.title": "Winter Hiking",
    "services.s3.text":
      "Snowshoe through silent forests and frozen valleys. A slower, deeper way to experience Japan's winter landscapes.",
    "services.s3.tag": "Hiking / Snowshoe",
    "services.s4.title": "Mountaineering",
    "services.s4.text":
      "For experienced adventurers - winter peak ascents and alpine routes with certified mountain guides and full safety protocols.",
    "services.s4.tag": "Alpine / Advanced",
    "services.s5.title": "Accommodation",
    "services.s5.text":
      "From cozy lodges to traditional ryokan with onsen. We arrange stays that match your style and budget.",
    "services.s5.tag": "Lodging / Ryokan & Hotels",
    "services.s6.title": "Transport",
    "services.s6.text":
      "Airport pickups, inter-resort transfers, and private charters. Seamless logistics so you never worry about getting there.",
    "services.s6.tag": "Transfer / Private & Shared",

    "packages.label": "Packages",
    "packages.title": "Day packages,<br>built around you.",
    "packages.lead":
      "Our core offering is flexible day packages. Need a full end-to-end itinerary? Reach out - we'll design something entirely around your trip.",
    "packages.p1.title": "Day Lesson Package",
    "packages.p1.text":
      "Private and small-group lessons for ski and snowboarding. First time on snow? Welcome. Our instructors offer patient, clear coaching at your pace — from your very first turn to refining your technique on the mountain.",
    "packages.p1.tag": "Ski / Snowboard / Beginner Friendly",
    "packages.p2.title": "Guided Adventure Day",
    "packages.p2.text":
      "Ski guiding, winter hiking, or a blend of both — explore beyond the groomed runs, discover hidden trails, and experience Nagano's winter landscapes with a local guide who knows the terrain.",
    "packages.p2.tag": "Guiding / Hiking / Exploration",
    "packages.callout.title": "Full-service itineraries",
    "packages.callout.text":
      "Want the complete package - lessons, guiding, accommodation, transport, and more? Contact us to build a custom multi-day plan tailored to your group.",
    "packages.callout.cta": "Book Your Adventure",

    "resorts.label": "Resorts & Routes",
    "resorts.title": "Rooted in Nagano,<br>reaching all of Japan.",
    "resorts.lead":
      "Our home base is Nagano Prefecture - home to some of Japan's finest powder and most accessible resorts. But we operate nationwide, wherever the snow calls.",
    "resorts.r1.title": "Nagano",
    "resorts.r1.text":
      "Our home ground. Hakuba Valley, Nozawa Onsen, Shiga Kogen, and more - world-class resort, authentic onsen towns, and easy access from Tokyo.",
    "resorts.r1.tag": "Home Base / Powder Country",
    "resorts.r2.title": "Nationwide",
    "resorts.r2.text":
      "Hokkaido's Niseko, Tohoku's Appi Kogen, Niigata's Myoko - wherever you want to ride, we can arrange guides, lessons, and logistics.",
    "resorts.r2.tag": "All Japan / On Request",

    "guides.label": "Guides",
    "guides.title": "Guides who know<br>the mountain.",
    "guides.lead":
      "Certified instructors and mountain guides who speak your language and know every line on the mountain.",
    "guides.g1.title": "Snowboard Instructor",
    "guides.g1.text":
      "Focuses on beginner and intermediate snowboard lessons. Patient progression and clear coaching.",
    "guides.g1.tag": "Beginner–Intermediate / Snowboard / English",
    "guides.g2.title": "Ski & Snowboard Instructor",
    "guides.g2.text":
      "Teaches both ski and snowboard at every level - from first turns to confident carving.",
    "guides.g2.tag": "All Levels / Ski & Snowboard / English",
    "guides.g3.title": "Hiking & Backcountry Guide",
    "guides.g3.text":
      "Leads snowshoe hiking and backcountry tours. Knows quiet trails, safe routes, and Nagano's winter terrain.",
    "guides.g3.tag": "Snowshoe / Backcountry / English",
    "guides.g4.title": "Mountain Guide",
    "guides.g4.text":
      "Specializes in snow mountain mountaineering - alpine routes, rope work, and guided ascents in winter conditions.",
    "guides.g4.tag": "Mountaineering / Alpine / English",

    "contact.label": "Contact",
    "contact.title": "Start planning<br>your winter.",
    "contact.lead":
      "Tell us your dates, group size, and what you're looking for. We'll get back to you with a plan.",
    "contact.note":
      "We typically respond within 24 hours. English inquiries welcome.",
    "contact.cta": "Send an inquiry",

    "form.title": "Send an inquiry",
    "form.lead":
      "Share your dates, group size, and what you’re looking for. We’ll reply with a plan.",
    "form.name": "Name",
    "form.email": "Email",
    "form.dates": "Travel dates",
    "form.dates.placeholder": "e.g. 20–27 Dec 2026",
    "form.group": "Group size",
    "form.group.placeholder": "Number of people",
    "form.service": "What are you interested in?",
    "form.service.hint": "Select all that apply",
    "form.service.required": "Please select at least one option.",
    "form.service.lessons": "Ski & snowboard lessons",
    "form.service.guiding": "Guided skiing",
    "form.service.hiking": "Winter hiking / snowshoe",
    "form.service.mountaineering": "Mountaineering",
    "form.service.logistics": "Accommodation & transport",
    "form.service.other": "Other",
    "form.message": "Message",
    "form.message.placeholder": "Tell us a bit about your trip or questions.",
    "form.submit": "Send",
    "form.submitting": "Sending…",
    "form.success": "We've received your message and will get back to you soon.",
    "form.error": "Something went wrong. Please try again, or email us directly.",

    "footer.rights": "All rights reserved.",
    "footer.legal": "Privacy & Disclaimer",

    "legal.label": "Legal",
    "legal.title": "Privacy & Activity Disclaimer",
    "legal.updated": "Last updated: September 2026",
    "legal.privacy.title": "Privacy",
    "legal.privacy.p1":
      "EVERWILD operates the EVERWILD Snow Adventure (ESA) website and related winter experience services based in Nagano, Japan. This notice explains how we handle information you share with us through this website.",
    "legal.privacy.p2":
      "When you submit an inquiry, we may collect details such as your name, email address, travel dates, group size, services of interest, and message content. We also store your language preference locally in your browser so the site can remember EN / 中文.",
    "legal.privacy.p3":
      "We use inquiry information only to respond to your request, plan services, and communicate about your trip. Inquiry submissions are processed through Formspree, a third-party form service that transmits messages to us. We do not sell your personal information.",
    "legal.privacy.p4":
      "We retain inquiry records for as long as reasonably needed for communication, operations, and legitimate business or legal purposes. You may contact us to request access to, correction of, or deletion of personal information you have provided, subject to applicable law.",
    "legal.privacy.p5":
      "This website uses essential browser storage for language preference. We do not use advertising trackers. If our practices change materially, we will update this page.",

    "legal.disclaimer.title": "Activity Disclaimer",
    "legal.disclaimer.p1":
      "Ski and snowboard lessons, guided skiing, winter hiking, snowshoeing, mountaineering, and related outdoor activities involve inherent risks. These may include, without limitation, falls, collisions, cold-related injury, avalanche or terrain hazards, equipment failure, changing weather, and other natural or human factors.",
    "legal.disclaimer.p2":
      "By booking or participating in activities arranged through EVERWILD, you acknowledge these risks and agree to follow guide and instructor directions, use appropriate equipment, and participate only within your fitness, skill, and experience level. You are responsible for disclosing relevant medical or physical conditions that may affect safe participation.",
    "legal.disclaimer.p3":
      "Mountain conditions can change quickly. Routes, schedules, resorts, and activity plans may be modified, postponed, or cancelled for safety, weather, operational, or regulatory reasons. Information on this website is provided for general guidance and does not guarantee snow quality, specific terrain access, or particular outcomes.",
    "legal.disclaimer.p4":
      "Participants are strongly encouraged to obtain suitable travel and adventure sports insurance covering winter mountain activities, medical treatment, evacuation, and cancellation. To the fullest extent permitted by applicable law, EVERWILD’s liability is limited in connection with website use and arranged activities, except where liability cannot be excluded.",
    "legal.disclaimer.p5":
      "If any part of this notice is held invalid, the remaining provisions continue in effect. For questions about privacy or these terms, please contact us through the inquiry form on this website.",

    "common.placeholder": "Image",
  },

  zh: {
    "nav.about": "关于我们",
    "nav.services": "服务",
    "nav.packages": "课程套餐",
    "nav.resorts": "雪场路线",
    "nav.guides": "教练团队",
    "nav.contact": "联系我们",
    "nav.cta": "现在预定",

    "hero.placeholder": "首屏图片 / 视频",
    "hero.label": "长野 / 日本",
    "hero.title": "在日本，<br>开启你的野性冬天。",
    "hero.desc":
      "EVERWILD Snow Adventure 是你的日本冬季一站式服务商：滑雪与单板教学、领滑导滑、冬季徒步、登山、住宿与交通。立足长野，覆盖日本全境。",
    "hero.cta1": "了解服务",
    "hero.cta2": "联系我们",

    "about.label": "关于我们",
    "about.title": "日本之冬，<br>由你定义。",
    "about.lead":
      "教学、领滑、冬季徒步、登山、住宿、交通，我们为你整合一切，让你专注于体验本身。",
    "about.f1.title": "新手友好",
    "about.f1.text":
      "从未滑过雪？没问题。我们的教练会用中文，耐心带你完成第一个转弯。",
    "about.f2.title": "灵活定制",
    "about.f2.text":
      "包天课程专注滑行，或为你定制从雪场到温泉旅馆的完整行程。告诉我们你的目标，我们来规划。",

    "services.label": "服务",
    "services.title": "野性冬天，<br>一站搞定。",
    "services.lead":
      "EVERWILD 六大服务板块，自由组合，或交给我们全权安排。",
    "services.s1.title": "滑雪 & 单板教学",
    "services.s1.text":
      "私人及小班教学，适合所有水平。双板与单板，从初学者到进阶技术提升。",
    "services.s1.tag": "教学 / 全水平",
    "services.s2.title": "领滑导滑",
    "services.s2.text":
      "跟随熟悉每条雪道的当地向导，探索最佳地形。野雪、树林道、雪场经典线路，按你的节奏来。",
    "services.s2.tag": "导滑 / 雪场 & 野雪",
    "services.s3.title": "冬季徒步",
    "services.s3.text":
      "穿上雪鞋，穿越寂静的森林与冰封的山谷。以更慢、更深的方式感受日本冬日风光。",
    "services.s3.tag": "徒步 / 雪鞋",
    "services.s4.title": "登山",
    "services.s4.text":
      "为有经验的探险者提供冬季山峰攀登与高山路线，配备认证山地向导及完整安全保障。",
    "services.s4.tag": "高山 / 进阶",
    "services.s5.title": "住宿",
    "services.s5.text":
      "从温馨小屋到带温泉的传统旅馆。我们按你的风格与预算安排住宿。",
    "services.s5.tag": "住宿 / 旅馆 & 酒店",
    "services.s6.title": "交通",
    "services.s6.text":
      "机场接送、雪场间转场、私人包车。无缝衔接的行程安排，让你无需担心出行。",
    "services.s6.tag": "交通 / 私人 & 拼车",

    "packages.label": "课程套餐",
    "packages.title": "包天课程，<br>为你量身打造。",
    "packages.lead":
      "我们的核心产品是灵活的包天课程。需要完整的一条龙服务？联系我们，我们将围绕你的行程量身定制。",
    "packages.p1.title": "包天教学套餐",
    "packages.p1.text":
      "双板与单板私人及小班教学。第一次上雪也欢迎——我们的教练会耐心、清晰地带你从第一个转弯开始，一步步在雪道上进步，也适合想提升技术的滑行者。",
    "packages.p1.tag": "双板 / 单板 / 新手友好",
    "packages.p2.title": "包天探险导滑",
    "packages.p2.text":
      "滑雪导滑、冬季徒步，或两者结合——跟随熟悉当地的向导，探索雪道之外的地形、隐秘小径与长野冬日风光，按你的节奏体验更完整的冬天。",
    "packages.p2.tag": "导滑 / 徒步 / 探索",
    "packages.callout.title": "一条龙定制行程",
    "packages.callout.text":
      "想要完整套餐，教学、导滑、住宿、交通等一应俱全？联系我们，为你的团队定制多日专属计划。",
    "packages.callout.cta": "现在预定",

    "resorts.label": "雪场 & 路线",
    "resorts.title": "立足长野，<br>覆盖日本全境。",
    "resorts.lead":
      "我们的根据地是长野县，日本优质粉雪与便利雪场的重要所在地。但我们也在日本全境运营，雪在哪里，我们就在哪里。",
    "resorts.r1.title": "长野",
    "resorts.r1.text":
      "我们的主场。白马谷、野泽温泉、志贺高原等，拥有世界级粉雪、正宗温泉小镇，并可从东京轻松抵达。",
    "resorts.r1.tag": "根据地 / 粉雪之乡",
    "resorts.r2.title": "日本全境",
    "resorts.r2.text":
      "北海道的二世古、东北的安比高原、新潟的妙高，无论你想去哪里滑雪，我们都能安排向导、教学与后勤。",
    "resorts.r2.tag": "全日本 / 按需安排",

    "guides.label": "教练团队",
    "guides.title": "懂山的向导，<br>带你上道。",
    "guides.lead":
      "持证教练与山地向导，说你的语言，熟悉山上每一条线路。",
    "guides.g1.title": "单板教练",
    "guides.g1.text":
      "专注初中级单板教学。循序渐进、讲解清晰，可用中文沟通。",
    "guides.g1.tag": "初中级 / 单板 / 中文",
    "guides.g2.title": "滑雪教练",
    "guides.g2.text":
      "单板与双板均可教学，覆盖从入门到进阶的各水平。可用中文沟通。",
    "guides.g2.tag": "各水平 / 单板 & 双板 / 中文",
    "guides.g3.title": "徒步 & 野雪向导",
    "guides.g3.text":
      "带领雪鞋徒步与 BC 野雪行程。熟悉安全路线与长野冬季地形。可用中文沟通。",
    "guides.g3.tag": "雪鞋 / 野雪 / 中文",
    "guides.g4.title": "登山向导",
    "guides.g4.text":
      "专注雪山登山：高山路线、绳索技术与冬季攀登向导。可用中文沟通。",
    "guides.g4.tag": "雪山登山 / 高山 / 中文",

    "contact.label": "联系我们",
    "contact.title": "开始规划<br>你的冬天。",
    "contact.lead": "告诉我们你的日期、团队人数和需求。我们会尽快回复方案。",
    "contact.note": "我们通常会在 24 小时内回复。欢迎中文咨询。",
    "contact.cta": "填写咨询表",

    "form.title": "填写咨询表",
    "form.lead": "告诉我们出行日期、人数和需求，我们会回复方案。",
    "form.name": "姓名",
    "form.email": "邮箱",
    "form.dates": "出行日期",
    "form.dates.placeholder": "例如 2026年12月20–27日",
    "form.group": "人数",
    "form.group.placeholder": "几位同行",
    "form.service": "想咨询的服务",
    "form.service.hint": "可多选",
    "form.service.required": "请至少选择一项。",
    "form.service.lessons": "滑雪 / 单板教学",
    "form.service.guiding": "领滑导滑",
    "form.service.hiking": "冬季徒步 / 雪鞋",
    "form.service.mountaineering": "雪山登山",
    "form.service.logistics": "住宿与交通",
    "form.service.other": "其他",
    "form.message": "留言",
    "form.message.placeholder": "简单说说行程想法或想问的问题。",
    "form.submit": "发送",
    "form.submitting": "发送中…",
    "form.success": "已收到，我们会尽快回复。",
    "form.error": "发送失败，请再试一次，或直接发邮件给我们。",

    "footer.rights": "版权所有。",
    "footer.legal": "隐私与免责",

    "legal.label": "法律信息",
    "legal.title": "隐私说明与活动免责",
    "legal.updated": "最近更新：2026年9月",
    "legal.privacy.title": "隐私说明",
    "legal.privacy.p1":
      "EVERWILD 运营 EVERWILD Snow Adventure（ESA）网站及相关冬季体验服务，业务立足日本长野。本说明解释我们如何处理您通过本网站提供的信息。",
    "legal.privacy.p2":
      "当您提交咨询表时，我们可能收集姓名、电子邮箱、出行日期、人数、意向服务及留言等内容。此外，网站会在您的浏览器本地保存语言偏好，以便记住您选择的 EN / 中文。",
    "legal.privacy.p3":
      "咨询信息仅用于回复您的需求、规划服务及与行程相关的沟通。表单提交由第三方服务 Formspree 处理并转发至我们。我们不会出售您的个人信息。",
    "legal.privacy.p4":
      "我们会在合理必要的期限内保存咨询记录，用于沟通、运营及合法业务或法律目的。您可联系我们，依法请求查阅、更正或删除您提供的个人信息。",
    "legal.privacy.p5":
      "本网站仅使用必要的浏览器存储以记录语言偏好，不使用广告追踪工具。若处理方式有重大变更，我们将更新本页内容。",

    "legal.disclaimer.title": "活动免责声明",
    "legal.disclaimer.p1":
      "滑雪与单板教学、领滑导滑、冬季徒步、雪鞋行走、登山及相关户外活动本身具有固有风险，包括但不限于跌倒、碰撞、寒冷相关伤害、雪崩或地形风险、装备故障、天气变化，以及其他自然或人为因素。",
    "legal.disclaimer.p2":
      "预订或参加由 EVERWILD 安排的活动，即表示您知悉上述风险，并同意听从教练与向导指示、使用合适装备，且仅在自身体能、技术与经验允许的范围内参与。您有责任告知可能影响安全参与的相关健康或身体状况。",
    "legal.disclaimer.p3":
      "山区条件可能迅速变化。出于安全、天气、运营或法规等原因，路线、时间、雪场及活动安排可能调整、延期或取消。本网站信息仅供一般参考，不保证雪质、特定地形开放或特定结果。",
    "legal.disclaimer.p4":
      "我们强烈建议参加者购买适合冬季山地活动的旅行及户外运动保险，覆盖医疗、救援与行程取消等。在适用法律允许的最大范围内，EVERWILD 就网站使用及所安排活动的责任受到限制；依法不得排除的责任除外。",
    "legal.disclaimer.p5":
      "若本说明任何部分被认定无效，其余条款仍然有效。如对隐私或本声明有疑问，请通过本网站咨询表与我们联系。",

    "common.placeholder": "图片",
  },
} as const;

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key];
}
