# سُـلالة | Sulalah Specialty Coffee Lab & Barista Studio
> **استوديو ومختبر القهوة المختصة وتجربة الباريستا التفاعلية**
> *Interactive Specialty Coffee Studio & Precision Barista Brewing Lab*

[![GitHub Pages](https://img.shields.io/badge/Demo-GitHub%20Pages-c26d4a?style=for-the-badge&logo=github)](https://tareq0001.github.io/Sulalah-Specialty-Coffee-Lab/)
[![SCA Standards](https://img.shields.io/badge/SCA-Golden%20Cup%20Standards-d97706?style=for-the-badge)](https://sca.coffee)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)

---

## ☕ نظرة عامة | Overview

**سُـلالة (Sulalah)** هي منصة واستوديو رقمي فاخر للقهوة المختصة، مستوحاة من فلسفة التصميم الراقية (Aesop / Kinfolk / % Arabica). تجمع المنصة بين أصالة البُن الجزيري العريق (البُن الخولاني والعسيري) وأحدث علوم الاستخلاص الفيزيائية والكيميائية المعتمدة من جمعية القهوة المختصة العالمية (**SCA**).

---

## ✨ المميزات الرئيسية | Core Features

### 1. مختبر التحضير التفاعلي (Interactive Barista Extraction Lab)
- **6 طرق تحضير احترافية:**
  - قمع الترشيح V60 (Hario V60)
  - كمكس ثلاثي الفلترة (Chemex)
  - إيروبرس - الطريقة المقلوبة (AeroPress Inverted)
  - المكبس الفرنسي الغاطس (French Press - Hoffmann Technique)
  - إسبريسو احترافي 9 بار (9-Bar Specialty Espresso)
  - الترشيح البارد البطيء (Slow Cold Brew)
- **حاسبة النسب والجرعات الذكية:**
  - حساب كمية ماء الاستخلاص بدقة بناءً على الجرعة ونسبة الـ Ratio (1:14 إلى 1:18، وللإسبريسو 1:2).
  - معادلة معدل الاستخلاص التقديري (**EY%**) في النطاق الذهبي (18% - 22%).
  - توصية بدرجة حرارة الماء حسب مستوى التحميص (خفيف، متوسط-خفيف، متوسط، داكن).
- **مصفوفة معايرة المطاحن العالمية:**
  - توصيات فورية بالميكرون والنقرات لمطاحن: **Comandante C40**، **Timemore C3**، **Fellow Ode**، **DF64**، و **Baratza**.
- **مؤقت الصب التفاعلي ومحاكاة السيرفر:**
  - مؤقت رقمي للصبات النبضية (Bloom، الصبة الأولى، الصبة الثانية، النزول النهائي).
  - محاكاة بصرية تفاعلية بالسيرفر والتقطير الحي تتصاعد فيها القهوة في الوقت الحقيقي.
  - مؤثرات صوتية إجرائية بدون ملفات خارجية عبر **Web Audio API** (صوت انسياب الماء، رنين التقطير، ونغمة اكتمال الاستخلاص).

### 2. رادار النكهات وعجلة التذوق SCA (Sensory Radar & Flavor Wheel)
- مخطط رادار عنكبوتي خماسي الأبعاد مرسوم على **Canvas**:
  - الحموضة والفاكهية (Acidity & Brightness)
  - الحلاوة الطبيعية (Natural Sweetness)
  - القوام والامتلاء (Body & Mouthfeel)
  - العطرية والفوحان (Aroma & Fragrance)
  - الخاتمة وثبات النكهة (Finish & Aftertaste)
- 5 مجموعات نكهات قابلة للنقر (زهري، فاكهي، كراميل/حلاوة، مكسرات/كاكاو، بهارات/أصالة) لفرز واستعراض المحاصيل المتطابقة.

### 3. أطلس محاصيل البُن السعودي والعالمي (Origins & Terroir Atlas)
- استعراض مفصل للمحاصيل التراثية والبطولات:
  - **خولاني جازان الفاخر (فيفاء والداير):** لاهوائي بطيء، ياسمين وتين وعسل سدر (1850م).
  - **عسيري المرتفعات النبيلة (رجال ألمع):** عسلي أصفر، كراميل الدبس ومشمش مجفف (1950م).
  - **إثيوبيا يرغاتشيف شيلشيليه:** مغسولة، برغموت ودراق وشاي أزهار (2100م).
  - **كولومبيا غيشا فينكا الفردوس:** صدمة حرارية، زهر البرتقال ومانجو وحرير (1980م).
  - **اليمن حرازي العقيق الأسود:** مجففة شمسياً، شوكولاتة داكنة وهيل وتين (2250م).
  - **بنما بوكيتي باكامارا** & **كينيا نيري SL28**.
- فلترة متعددة: كافة المحاصيل، سلالات سعودية، مغسولة، مجففة، تخمير لاهوائي.
- ربط فوري بين بطاقة المحصول ومختبر التحضير ورادار النكهات.

### 4. حاسبة كيمياء ماء التحضير (Brew Water Chemistry & SCA Calculator)
- تحكم حي بـ:
  - مجموع الأملاح الذائبة (**TDS** - ppm)
  - عسر الماء الكلي (**GH** - Ca2+/Mg2+)
  - القلوية وسعة الدرء (**KH** - Bicarbonate Buffer)
  - الرقم الهيدروجيني (**pH**)
- مؤشر تشخيصي لمعدل الاستخلاص (Under-extraction risk, Golden SCA Extraction, Scale & bitterness risk).
- نماذج مياه جاهزة: SCA Standard، Third Wave Water، مياه الينابيع البركانية، ومياه الصنبور.

### 5. بوتيك المحمصة وسلة المقتنيات المستمرة (Roastery Boutique & Persistent Bag)
- محاصيل فاخرة بحبوب كاملة أو مخصصة حسب درجات طحن الأدوات (V60، إسبريسو، كمكس، مكبس، كولد برو).
- سلة مقتنيات مستمرة في المتصفح عبر `localStorage` مع درج جانبي انزلاقي.
- كوبونات خصم نشطة (`SULALAH10`, `BARISTA20`, `KHAWLANI`).
- احتساب ضريبة القيمة المضافة السعودية (15%) ورسوم الشحن.
- نظام محاكاة فوري لإصدار وطباعة **الفاتورة الضريبية الفاخرة** مع رمز التحقق الضريبي QR.

### 6. دعم الثنائية اللغوية والمظهر الداكن (Bilingual i18n & Dual Theme)
- دعم كامل للعربية (افتراضي RTL) والإنجليزية (LTR).
- سمة الصباح المشمس (Sunlit Morning Cream) وسمة المساء الداكنة (Cozy Midnight Espresso).

---

## 🛠️ التقنيات المستخدمة | Tech Stack

- **Framework / Runtime:** Pure Vanilla TypeScript (No heavy framework overhead, < 130KB bundle)
- **Bundler:** Vite 5.4 with static relative assets configuration
- **Audio:** Web Audio API Procedural Synthesis
- **Canvas:** HTML5 2D Canvas for SCA Radar rendering
- **Typography:** Google Fonts (Cairo, Tajawal, Playfair Display, Inter)
- **Deployment:** GitHub Pages (Automated branch deploy)

---

## 🚀 التشغيل والتطوير المحلي | Local Development

```bash
# تثبيت الحزم
npm install

# تشغيل خادم التطوير المحلي
npm run dev

# بناء النسخة الإنتاجية
npm run build

# معاينة النسخة الإنتاجية
npm run preview
```

---

## 📄 الترخيص والحقوق | License

تطوير وإشراف **أ. طارق ابوعشي** • 2026.
جميع الحقوق محفوظة لمنصة سُـلالة للقهوة المختصة.
