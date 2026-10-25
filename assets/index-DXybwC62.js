var J=Object.defineProperty;var Z=(d,t,e)=>t in d?J(d,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[t]=e;var g=(d,t,e)=>Z(d,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=e(a);fetch(a.href,s)}})();const X={ar:{brandName:"سُـلالة | Sulalah",brandTagline:"استوديو ومختبر القهوة المختصة وتجربة الباريستا التفاعلية",navLab:"مختبر التحضير",navRadar:"رادار النكهات SCA",navAtlas:"أطلس المحاصيل",navWater:"كيمياء الماء",navBoutique:"بوتيك المحمصة",toggleTheme:"تغيير السمة",toggleLang:"English",cart:"السلة",heroTitle:"فنون الاستخلاص وعبق السلالات العريقة",heroSubtitle:"تجربة تفاعلية تستلهم أرقى معايير القهوة المختصة العالمية (SCA) وتجمع بين أصالة البُن الخولاني والعسيري وأحدث علوم الاستخلاص الحرفي.",heroCtaLab:"دخول مختبر الباريستا",heroCtaBoutique:"تصفح محاصيل البوتيك",methodSelector:"اختر طريقة التحضير الاحترافية",doseWaterRatio:"معايير الجرعة والنسبة الذهبية",coffeeDose:"كمية البُن (جم)",waterRatio:"نسبة الاستخلاص (Ratio)",waterYield:"كمية الماء المستهدفة",roastLevel:"درجة التحميص",recommendedTemp:"الحرارة الموصى بها",grinderMatrix:"دليل معايرة المطاحن العالمية",brewSchedule:"جدول الصب النبضي والمؤقت التفاعلي",startTimer:"بدء الاستخلاص",pauseTimer:"إيقاف مؤقت",resetTimer:"إعادة ضبط",completed:"اكتمل التحضير بنجاح! رشفة ماتعة",sensoryWheelTitle:"عجلة التذوق ورادار النكهات التفاعلي (SCA Wheel)",sensoryWheelSubtitle:"تحليل بياني خماسي الأبعاد يربط بين المحاصيل وسلالاتها ونوتاتها الحسية النادرة.",matchedBeans:"محاصيل تطابق هذا النمط الحسي:",atlasTitle:"أطلس محاصيل البُن السعودي والعالمي",atlasSubtitle:"رحلة جغرافية بين مدرجات فيفاء العتيقة، قمم عسير، ومزارع القهوة الاستثنائية حول العالم.",filterAll:"كافة المحاصيل",filterSaudi:"سلالات سعودية أصيلة",filterWashed:"مغسولة (Washed)",filterNatural:"مجففة (Natural)",filterAnaerobic:"تخمير لاهوائي (Anaerobic)",waterTitle:"حاسبة كيمياء ماء التحضير ومعايير SCA",waterSubtitle:"الماء يمثل 98.5% من كوب القهوة؛ عاير الأملاح والكالسيوم والبيكربونات لاستخلاص مثالي.",waterTDS:"مجموع الأملاح الذائبة (TDS - ppm)",waterGH:"عسر الماء الكلي (General Hardness - Ca/Mg)",waterKH:"القلوية ودرء الأحماض (Alkalinity - KH)",waterPH:"الرقم الهيدروجيني (pH)",waterStatus:"تقييم كفاءة الاستخلاص:",boutiqueTitle:"بوتيك سُلالة للمحاصيل الفاخرة وأدوات الباريستا",boutiqueSubtitle:"محاصيل نادرة منتقاة بالحب ومحمصة بحرفية، مع إمكانية تحديد درجة الطحن حسب أداتك المفضلة.",addToCart:"إضافة إلى السلة",selectGrind:"تحديد درجة الطحن:",cartEmpty:"سلة المقتنيات فارغة حالياً",cartTotal:"إجمالي الحساب",subtotal:"المجموع الفرعي",vat:"ضريبة القيمة المضافة (15%)",discount:"الخصم المطبق",couponCode:"رمز القسيمة / الخصم",applyCoupon:"تطبيق الرمز",checkout:"إتمام الطلب وطباعة الفاتورة الفاخرة",soundOn:"تشغيل المؤثرات الصوتية",soundOff:"كتم الصوت",printReceipt:"طباعة الفاتورة الضريبية",close:"إغلاق",sar:"ر.س",grams:"جم",seconds:"ثانية",altitudeMeter:"متر فوق سطح البحر",viewInLab:"معايرة في المختبر",exploreSensory:"استعراض في رادار النكهات"},en:{brandName:"سُـلالة | Sulalah",brandTagline:"Specialty Coffee Studio & Interactive Barista Brewing Lab",navLab:"Brewing Lab",navRadar:"SCA Flavor Radar",navAtlas:"Origins Atlas",navWater:"Water Chemistry",navBoutique:"Boutique Store",toggleTheme:"Switch Theme",toggleLang:"العربية",cart:"Bag Cart",heroTitle:"The Art of Extraction & Revered Terroirs",heroSubtitle:"An interactive sanctuary harmonizing international SCA standards, ancient Saudi Khawlani terroirs, and the precision science of artisan barista craft.",heroCtaLab:"Enter Barista Lab",heroCtaBoutique:"Explore Boutique Beans",methodSelector:"Select Professional Brewing Method",doseWaterRatio:"Golden Dose & Brew Ratio Parameters",coffeeDose:"Coffee Dose (g)",waterRatio:"Extraction Ratio",waterYield:"Target Water Yield",roastLevel:"Roast Profile",recommendedTemp:"Recommended Water Temp",grinderMatrix:"Global Grinder Calibration Matrix",brewSchedule:"Pulse Pour Schedule & Real-Time Timer",startTimer:"Start Extraction",pauseTimer:"Pause",resetTimer:"Reset",completed:"Extraction complete! Enjoy your artisan cup",sensoryWheelTitle:"Interactive SCA Sensory Wheel & Radar",sensoryWheelSubtitle:"A 5-dimensional sensory spider graph mapping distinct terroir notes to heirloom origins.",matchedBeans:"Crops matching this flavor spectrum:",atlasTitle:"Saudi Terroir & World Origins Atlas",atlasSubtitle:"A cartographic journey from ancient mist-shrouded terraces of Jazan to iconic world micro-lots.",filterAll:"All Micro-Lots",filterSaudi:"Saudi Terroirs",filterWashed:"Washed",filterNatural:"Natural",filterAnaerobic:"Anaerobic",waterTitle:"Brew Water Chemistry & SCA Mineral Calculator",waterSubtitle:"Water comprises 98.5% of your cup. Fine-tune TDS, GH, and KH for peak extraction yield (18%-22%).",waterTDS:"Total Dissolved Solids (TDS - ppm)",waterGH:"General Hardness (GH - Ca/Mg)",waterKH:"Alkalinity & Buffer (KH - CaCO3)",waterPH:"Acidity Index (pH)",waterStatus:"Extraction Diagnostic:",boutiqueTitle:"Sulalah Roastery Boutique & Barista Equipment",boutiqueSubtitle:"Exceptional micro-lots and precision barista tools, customized with your preferred grind size.",addToCart:"Add to Bag",selectGrind:"Select Grind Customization:",cartEmpty:"Your boutique bag is currently empty",cartTotal:"Grand Total",subtotal:"Subtotal",vat:"VAT (15%)",discount:"Discount",couponCode:"Promo Voucher Code",applyCoupon:"Apply",checkout:"Checkout & Generate Boutique Invoice",soundOn:"Procedural Audio On",soundOff:"Mute Audio",printReceipt:"Print Tax Invoice",close:"Close",sar:"SAR",grams:"g",seconds:"sec",altitudeMeter:"meters MASL",viewInLab:"Calibrate in Lab",exploreSensory:"View Sensory Radar"}};let B="ar";const L=[];function w(){return B}function _(d){B=d,document.documentElement.lang=d,document.documentElement.dir=d==="ar"?"rtl":"ltr",L.forEach(t=>t(d))}function ee(){const d=B==="ar"?"en":"ar";return _(d),d}function te(d){return L.push(d),()=>{const t=L.indexOf(d);t>-1&&L.splice(t,1)}}function l(d){return X[B][d]||d}function ae(){const t=w()==="ar";return`
    <header class="studio-hero">
      <div class="hero-backdrop-grain"></div>
      <div class="hero-content">
        <div class="hero-badge-pill">
          <span class="pulse-amber-dot"></span>
          <span>${t?"مختبر الباريستا التفاعلي • معايير SCA الدولية":"Interactive Barista Lab • SCA Gold Standards"}</span>
        </div>

        <h1 class="hero-title">${l("heroTitle")}</h1>
        <p class="hero-lead">${l("heroSubtitle")}</p>

        <div class="hero-cta-group">
          <a href="#brewing-lab" class="btn btn-primary">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16l-5 9v5l-3 2v-7L4 4z"/></svg>
            ${l("heroCtaLab")}
          </a>
          <a href="#origins-atlas" class="btn btn-outline">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            ${t?"أطلس المحاصيل السعودية":"Saudi Terroirs"}
          </a>
          <a href="#boutique" class="btn btn-secondary">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            ${l("heroCtaBoutique")}
          </a>
        </div>

        <!-- Ambient Studio Indicators -->
        <div class="hero-metrics-strip">
          <div class="metric-item">
            <span class="metric-val">1:15 - 1:16</span>
            <span class="metric-lbl">${t?"النسبة الذهبية للترشيح":"Golden Brew Ratio"}</span>
          </div>
          <div class="metric-divider"></div>
          <div class="metric-item">
            <span class="metric-val">18% - 22%</span>
            <span class="metric-lbl">${t?"معدل الاستخلاص المستهدف (EY)":"Optimal Extraction Yield"}</span>
          </div>
          <div class="metric-divider"></div>
          <div class="metric-item">
            <span class="metric-val">1850م+</span>
            <span class="metric-lbl">${t?"ارتفاع مدرجات خولان وعسير":"Khawlan Terraces Elevation"}</span>
          </div>
          <div class="metric-divider"></div>
          <div class="metric-item">
            <span class="metric-val">150 ppm</span>
            <span class="metric-lbl">${t?"أملاح ماء التحضير (SCA TDS)":"Target Water TDS"}</span>
          </div>
        </div>
      </div>
    </header>
  `}const k=[{id:"v60",nameAr:"قمع الترشيح V60",nameEn:"Hario V60 Pour-Over",category:"pourover",taglineAr:"صفاء فائق وإبراز دقيق للإيحاءات الزهرية والفاكهية",taglineEn:"Pristine clarity highlighting delicate florals & bright acids",iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16l-5 9v5l-3 2v-7L4 4z"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="8" y1="2" x2="8" y2="4"/><line x1="16" y1="2" x2="16" y2="4"/></svg>',defaultDose:18,doseRange:[12,30],defaultRatio:15,ratioRange:[14,18],ratioOptions:[14,15,16,17],targetTimeSec:165,grindMicrons:[650,780],grindDescriptionAr:"متوسطة النعومة (رمل شاطئي خفيف)",grindDescriptionEn:"Medium-Fine (Fine sea sand)",grinders:{"Comandante C40":"23 - 26 نقرة (Clicks)","Timemore C3":"14 - 16 نقرة (Clicks)","Fellow Ode Gen 2":"4.1 - 5.0 Dial","DF64 Gen 2":"45 - 55 مؤشر","Baratza Encore":"13 - 15 رقم"},tempByRoast:{light:94,"medium-light":92,medium:90,dark:88},steps:[{id:"v60-bloom",nameAr:"الترطيب الأولي (Bloom)",nameEn:"Bloom & Degassing",startSec:0,endSec:45,waterPctOfTotal:.2,cumulativePct:.2,descriptionAr:"صب دائري هادئ من المركز للخارج لترطيب كامل القهوة وطرد غاز CO2.",descriptionEn:"Gentle spiral pour from center outward to saturate bed and release CO2.",techniqueTipAr:"حرك القمع بحركة دائرية خفيفة (Swirl) لضمان تبلل كافة جزيئات القهوة بالتساوي.",techniqueTipEn:"Perform a gentle swirl of the dripper to ensure zero dry pockets."},{id:"v60-pour1",nameAr:"الصبة الأولى - بناء القوام",nameEn:"First Pulse - Body & Acidity",startSec:45,endSec:75,waterPctOfTotal:.35,cumulativePct:.55,descriptionAr:"صب عمودي منتظم بتدفق ثابت (4-5 مل/ثانية) بحلقات دائرية متحدة المركز.",descriptionEn:"Steady vertical stream in concentric rings without touching filter paper.",techniqueTipAr:"حافظ على ارتفاع الإبريق منخفضاً لتفادي تكسير قاع القهوة وتكوين قنوات مائية.",techniqueTipEn:"Keep kettle spout 2-3 inches above bed to prevent turbulent channeling."},{id:"v60-pour2",nameAr:"الصبة الثانية - التوازن والوضوح",nameEn:"Second Pulse - Balance",startSec:75,endSec:105,waterPctOfTotal:.25,cumulativePct:.8,descriptionAr:"صب ناعم في المنتصف للحفاظ على مستوى الماء ودرجة الحرارة المثالية.",descriptionEn:"Smooth center pour maintaining steady thermal mass and gentle extraction.",techniqueTipAr:"ركز في الثلث الأوسط من السطح للمحافظة على معدل استخلاص متزن.",techniqueTipEn:"Focus on center third of the bed to maintain balanced flow rate."},{id:"v60-finish",nameAr:"الصبة الختامية والنزول الأخير",nameEn:"Final Pour & Drawdown",startSec:105,endSec:165,waterPctOfTotal:.2,cumulativePct:1,descriptionAr:"إكمال إجمالي وزن الماء بحركة دائرية خفيفة وترك القهوة تترشح حتى يستقر السطح المستوي.",descriptionEn:"Complete target water weight, single swirl, and allow drawdown to finish flat.",techniqueTipAr:"هزة دائرية أخيرة (Rao Swirl) تعطي قاعاً مسطحاً كالمرآة واستخلاصاً شاملاً.",techniqueTipEn:"A light finishing swirl settles a flat bed ensuring even extraction."}],baristaNotesAr:"قمع V60 يبرز نقاء المحصول وحمضيته العطرية. التزم بمعدل تدفق متزن 4-5 مل/ثانية واستخدم فلاتر أصلية مغسولة بماء مغلي قبل التحضير.",baristaNotesEn:"V60 demands precision flow rate (4-5 ml/s). Always rinse filter thoroughly with near-boiling water to eliminate paper taste."},{id:"chemex",nameAr:"كمكس ثلاثي الفلترة (Chemex)",nameEn:"Chemex Classic 6-Cup",category:"pourover",taglineAr:"نقاء بلوري، ملمس كالحرير، وخلو تام من الرواسب والزيوت الثقيلة",taglineEn:"Crystalline cup purity with rich sweetness and zero sediment",iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l-4 8 4 10H6l4-10-4-8z"/><line x1="8" y1="12" x2="16" y2="12"/><path d="M12 3v2"/></svg>',defaultDose:30,doseRange:[20,50],defaultRatio:16,ratioRange:[15,17],ratioOptions:[15,16,17],targetTimeSec:240,grindMicrons:[800,950],grindDescriptionAr:"متوسطة الخشونة (ملح كوشير خشن)",grindDescriptionEn:"Medium-Coarse (Coarse kosher salt)",grinders:{"Comandante C40":"28 - 32 نقرة (Clicks)","Timemore C3":"18 - 21 نقرة (Clicks)","Fellow Ode Gen 2":"6.1 - 7.0 Dial","DF64 Gen 2":"65 - 75 مؤشر","Baratza Encore":"18 - 21 رقم"},tempByRoast:{light:95,"medium-light":93,medium:91,dark:89},steps:[{id:"chemex-bloom",nameAr:"ترطيب عميق (Bloom)",nameEn:"Extended Bloom",startSec:0,endSec:50,waterPctOfTotal:.18,cumulativePct:.18,descriptionAr:"صب كمية وفيرة من الماء لترطيب القهوة وتفتيح ألياف الفلتر الورقي السميك.",descriptionEn:"Pour generous bloom to saturate deep bed through thick bond filter.",techniqueTipAr:"تأكد من وضع الجانب الثلاثي الطبقات من الفلتر في اتجاه ميزاب الصب لمنع انحباس الهواء.",techniqueTipEn:"Position 3-layer fold towards the spout to prevent air lock seal."},{id:"chemex-pour1",nameAr:"الصبة الأولى - تيار حلزوني هادئ",nameEn:"First Main Pour",startSec:50,endSec:110,waterPctOfTotal:.37,cumulativePct:.55,descriptionAr:"صب حلزوني واسع يتجنب ملامسة حواف الفلتر بمقدار 1 سم.",descriptionEn:"Broad spiral pour keeping 1cm away from paper wall.",techniqueTipAr:"حافظ على تيار عمودي مستمر يقلل من فقاعات الهواء العشوائية.",techniqueTipEn:"Maintain smooth column of water to prevent agitation of fines."},{id:"chemex-pour2",nameAr:"الصبة الثانية - استخلاص الحلاوة",nameEn:"Second Main Pour",startSec:110,endSec:170,waterPctOfTotal:.27,cumulativePct:.82,descriptionAr:"رفع منسوب المياه لتعزيز الضغط الهيدروستاتيكي فوق طبقة البُن.",descriptionEn:"Elevate water level gently to maintain constant hydrostatic head.",techniqueTipAr:"صب بحركة إهليلجية لطيفة لتحفيز استخلاص السكريات المتأخرة.",techniqueTipEn:"Pour gently in ellipses to extract lingering natural sugars."},{id:"chemex-drawdown",nameAr:"الصبة الأخيرة والترشيح البلوري",nameEn:"Final Pour & Clarification",startSec:170,endSec:240,waterPctOfTotal:.18,cumulativePct:1,descriptionAr:"إكمال الوزن الكلي، والسماح للترشيح بالنزول البطيء عبر الفلتر السميك.",descriptionEn:"Finish water target, observe sparkling transparent coffee stream.",techniqueTipAr:"ارفع الفلتر مباشرة عند انتهاء الترشيح لتجنب نزول المرارة الأخيرة.",techniqueTipEn:"Discard filter as soon as flow turns to separate drips."}],baristaNotesAr:"فلتر كمكس أثخن بنسبة 30% من الفلاتر العادية؛ يحبس الزيوت والشوائب ليعطيك كوباً بلورياً براقاً بحلاوة نقية تشبه الشاي الفاخر.",baristaNotesEn:"Chemex specialty bonded filters remove all bitter sediment and oils, producing a remarkably clean, sweet, and articulate cup."},{id:"aeropress",nameAr:"إيروبرس - الطريقة المقلوبة (Inverted)",nameEn:"AeroPress Inverted Method",category:"immersion",taglineAr:"مرونة مطلقة، تحكم كامل بالاستخلاص، وقوام حريري غني بالسكريات",taglineEn:"Unrivaled versatility, total immersion control & juicy sweetness",iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="4" width="10" height="12" rx="1"/><line x1="9" y1="2" x2="15" y2="2"/><line x1="12" y1="2" x2="12" y2="4"/><path d="M5 16h14v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2z"/><line x1="12" y1="16" x2="12" y2="20"/></svg>',defaultDose:16,doseRange:[13,22],defaultRatio:14,ratioRange:[12,16],ratioOptions:[12,13,14,15],targetTimeSec:120,grindMicrons:[550,700],grindDescriptionAr:"ناعمة-متوسطة (أخشن قليلاً من الإسبريسو)",grindDescriptionEn:"Medium-Fine (Slightly coarser than espresso)",grinders:{"Comandante C40":"18 - 22 نقرة (Clicks)","Timemore C3":"12 - 14 نقرة (Clicks)","Fellow Ode Gen 2":"3.0 - 4.0 Dial","DF64 Gen 2":"35 - 45 مؤشر","Baratza Encore":"11 - 13 رقم"},tempByRoast:{light:92,"medium-light":90,medium:88,dark:85},steps:[{id:"aero-pour",nameAr:"الصب الكامل والتقليب (Infusion)",nameEn:"Full Pour & Stir",startSec:0,endSec:30,waterPctOfTotal:1,cumulativePct:1,descriptionAr:"صب سريع لكامل كمية الماء، ثم تقليب البُن بملعقة مسطحة 4 مرات برفق.",descriptionEn:"Rapid pour of total water, followed by 4 gentle back-and-forth paddle stirs.",techniqueTipAr:"الطريقة المقلوبة تمنع تسرب أي قطرة غير مستخلصة إلى الكوب.",techniqueTipEn:"Inverted orientation guarantees 100% controlled immersion time."},{id:"aero-steep",nameAr:"النقع الهادئ (Steep & Lock)",nameEn:"Immersion & Cap Lock",startSec:30,endSec:85,waterPctOfTotal:0,cumulativePct:1,descriptionAr:"ترك القهوة تنقع، وتركيب غطاء الفلتر المغسول بإحكام مع تفريغ الهواء الزائد.",descriptionEn:"Rest coffee bed. Fasten pre-rinsed cap securely and purge remaining air.",techniqueTipAr:"الفترة الزمنية هنا تبرز الحلاوة الطبيعية وتذيب المركبات العطرية الرقيقة.",techniqueTipEn:"This resting window develops luscious sweetness without astringency."},{id:"aero-flip-press",nameAr:"القلب والكبس الهوائي (Flip & Press)",nameEn:"Flip & Gentle Press",startSec:85,endSec:120,waterPctOfTotal:0,cumulativePct:1,descriptionAr:"قلب الأداة بثبات فوق السيرفر، والكبس بوزن الذراع ببطء لمدة 30-35 ثانية.",descriptionEn:"Carefully flip onto decanter. Press steadily using arm weight over 30-35s.",techniqueTipAr:"توقف فور سماع صوت الفحيح الهوائي (Hiss) لمنع استخلاص المرارة.",techniqueTipEn:"Halt the plunge as soon as you hear the first hiss of escaping air."}],baristaNotesAr:"طريقة تجمع بين عمق غمر القهوة (Immersion) والضغط الهوائي اللطيف. مثالية لاستخلاص إيحاءات السكر والكراميل العصيرية.",baristaNotesEn:"Combines the best of full immersion body and gentle air pressure clarification. Produces a remarkably syrupy, sweet brew."},{id:"frenchpress",nameAr:"المكبس الفرنسي (French Press)",nameEn:"French Press Classic Immersion",category:"immersion",taglineAr:"قوام كلاسيكي ممتلئ، إحساس مخملي بالزيوت الطبيعية، وحلاوة عميقة",taglineEn:"Full-bodied richness retaining velvety natural oils & dark cocoa notes",iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="16" rx="2"/><line x1="6" y1="9" x2="18" y2="9"/><line x1="12" y1="2" x2="12" y2="4"/><circle cx="12" cy="14" r="1.5"/></svg>',defaultDose:25,doseRange:[18,50],defaultRatio:15,ratioRange:[14,16],ratioOptions:[14,15,16],targetTimeSec:300,grindMicrons:[950,1150],grindDescriptionAr:"خشنة متجانسة (حبات الملح الصخري)",grindDescriptionEn:"Coarse & Uniform (Coarse rock salt)",grinders:{"Comandante C40":"32 - 36 نقرة (Clicks)","Timemore C3":"22 - 25 نقرة (Clicks)","Fellow Ode Gen 2":"8.0 - 9.0 Dial","DF64 Gen 2":"75 - 85 مؤشر","Baratza Encore":"26 - 30 رقم"},tempByRoast:{light:95,"medium-light":93,medium:91,dark:88},steps:[{id:"fp-pour",nameAr:"صب سريع وكامل (Total Immersion)",nameEn:"Total Immersion Pour",startSec:0,endSec:30,waterPctOfTotal:1,cumulativePct:1,descriptionAr:"صب قوي وشامل لكامل كمية الماء لضمان غمر حبيبات القهوة وتكوين القشرة.",descriptionEn:"Vigorous pour of total water ensuring all grounds rise into a floating crust.",techniqueTipAr:"لا تقلب الآن؛ دع القشرة العائمة تحتفظ بدرجة الحرارة وثاني أكسيد الكربون.",techniqueTipEn:"Do not stir yet; let crust form naturally to insulate the brew."},{id:"fp-steep4m",nameAr:"النقع العميق (4 دقائق)",nameEn:"4-Minute Resting Steep",startSec:30,endSec:240,waterPctOfTotal:0,cumulativePct:1,descriptionAr:"انتظار صامت يتيح للماء الساخن استخلاص كافة الزيوت والسكريات الثقيلة.",descriptionEn:"Undisturbed steeping allowing water to extract rich lipids and body.",techniqueTipAr:"غطِ الإبريق بالمكبس دون إنزاله للحفاظ على حرارة المحلول.",techniqueTipEn:"Rest plunger on top without pressing to retain radiant heat."},{id:"fp-break-skim",nameAr:"كسر القشرة وقشط الرغوة (Break & Skim)",nameEn:"Crust Break & Skim (Hoffmann Technique)",startSec:240,endSec:270,waterPctOfTotal:0,cumulativePct:1,descriptionAr:"كسر القشرة بملعقة برفق؛ معظم البُن سيهبط للقاع. ازل الرغوة البيضاء الطافية.",descriptionEn:"Gently break crust; grounds sink. Skim floating white foam and silt with 2 spoons.",techniqueTipAr:"قشط الرغوة يزيل المرارة غير المرغوبة ويجعل الكوب نظيفاً جداً.",techniqueTipEn:"Skimming removes astringent micro-fines, dramatically clarifying flavor."},{id:"fp-plunge",nameAr:"إنزال المصفاة التصفية",nameEn:"Surface Plunge & Pour",startSec:270,endSec:300,waterPctOfTotal:0,cumulativePct:1,descriptionAr:"إنزال المكبس فقط حتى سطح السائل (دون كبس القاع) والصب الهادئ في الأكواب.",descriptionEn:"Insert filter just below surface level. Pour gently without agitating bottom bed.",techniqueTipAr:"لا تكبس القاع أبداً! فقط اجعل المصفاة تعمل كحاجز أثناء الصب.",techniqueTipEn:"Never press to the floor. Use mesh merely as a baffle to trap grounds."}],baristaNotesAr:"طريقة كلاسيكية ممتازة للمحاصيل ذات القوام الشوكولاتي كالبُن اليمني والعسيري. تكنيك قشط الرغوة يرفع جودة المكبس الفرنسي إلى مستوى استثنائي.",baristaNotesEn:"Ideal for chocolate and molasses-heavy origins (Yemeni and Asiri). The crust-break and skimming technique elevates this brew to cafe quality."},{id:"espresso",nameAr:"إسبريسو احترافي 9 بار (Espresso 9-Bar)",nameEn:"9-Bar Specialty Espresso",category:"pressure",taglineAr:"تركيز مكثف، كريما عسلية مخملية، وانفجار سكري متناغم في 28 ثانية",taglineEn:"Dense syrupy concentration, golden crema & explosive tactile sensation",iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',defaultDose:18,doseRange:[16,22],defaultRatio:2,ratioRange:[1.8,2.5],ratioOptions:[1.8,2,2.2,2.5],targetTimeSec:28,grindMicrons:[220,320],grindDescriptionAr:"ناعمة جداً حريرية (بودرة دقيقة متماسكة)",grindDescriptionEn:"Ultra-Fine (Powdery consistency with slight clump)",grinders:{"Comandante C40 (Red Clix)":"12 - 16 نقرة (Clicks)","Timemore C3 ESP":"7 - 9 نقرات (Clicks)","Fellow Opus":"1.5 - 2.5 Dial","DF64 Gen 2":"11 - 16 مؤشر","Baratza Sette 270":"5 - 7 رقم"},tempByRoast:{light:94,"medium-light":93,medium:92,dark:90},steps:[{id:"esp-preinfusion",nameAr:"الترطيب الأولي منخفض الضغط (Pre-Infusion)",nameEn:"Low Pressure Pre-Infusion (2-3 Bar)",startSec:0,endSec:7,waterPctOfTotal:.15,cumulativePct:.15,descriptionAr:"ترطيب قرص البُن بضغط منخفض لتمديد الجزيئات ومنع تشكل القنوات (Channeling).",descriptionEn:"Soaking the coffee puck under 2-3 bars to swell grounds and seal micro-fissures.",techniqueTipAr:"استخدم أداة تفكيك التكتلات (WDT) ومكبس معاير (Calibrated Tamper) لتوزيع مثالي.",techniqueTipEn:"Employ needle WDT distribution and level 30lb calibrated tamp."},{id:"esp-peak-pressure",nameAr:"ذروة الاستخلاص 9 بار (Peak 9-Bar Flow)",nameEn:"Peak 9-Bar Extraction",startSec:7,endSec:20,waterPctOfTotal:.6,cumulativePct:.75,descriptionAr:"تدفق كستنائي متصل كذيل الفأر (Mouse Tail)، تتشكل فيه الكريما العسلية المعقدة.",descriptionEn:"Rich mahogany mouse-tail stream building dense tigered crema and body.",techniqueTipAr:"إذا سال الاستخلاص في أقل من 20 ثانية، صغّر درجة الطحن. إذا تجاوز 35، كبّرها.",techniqueTipEn:"If flow exceeds 35s, coarsen grind. If below 20s, grind finer."},{id:"esp-drawout",nameAr:"نهاية الاستخلاص وقطع التدفق (Cutoff)",nameEn:"Cutoff & Blonde Phase",startSec:20,endSec:28,waterPctOfTotal:.25,cumulativePct:1,descriptionAr:"وصول المستخلص إلى الوزن المستهدف (36 جم) وقطع التدفق قبل تحول الكريما للون الشاحب.",descriptionEn:"Reach 36g liquid target weight on precision scale and cut pump immediately.",techniqueTipAr:"حرك فنجان الإسبريسو بالملعقة لمزج طبقة الكريما العلوية مع سوائل القاع السكرية.",techniqueTipEn:"Stir with a demitasse spoon before sipping to harmonize layered density."}],baristaNotesAr:"معيار الإسبريسو الحديث: 18 جم بُن ينتج 36 جم قهوة سائلة خلال 26-30 ثانية عند ضغط 9 بار وحرارة 93° مئوية.",baristaNotesEn:"Golden modern ratio: 18g dry dose yields 36g liquid output in 26-30 seconds under 9-bar pump pressure."},{id:"coldbrew",nameAr:"الترشيح البارد البطيء (Slow Cold Brew)",nameEn:"Artisan Slow Cold Brew",category:"cold",taglineAr:"حلاوة طبيعية استثنائية، خلو كامل من الحموضة الحادة، وانتعاش صيفي لا يُنسى",taglineEn:"Naturally sweet, low-acidity elixir steeped slowly over 18 hours",iconSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6"/><path d="M12 18v4"/><path d="M4.93 4.93l4.24 4.24"/><path d="M14.83 14.83l4.24 4.24"/><path d="M2 12h6"/><path d="M18 12h4"/><path d="M4.93 19.07l4.24-4.24"/><path d="M14.83 9.17l4.24-4.24"/></svg>',defaultDose:60,doseRange:[30,100],defaultRatio:8,ratioRange:[7,10],ratioOptions:[7,8,9,10],targetTimeSec:64800,grindMicrons:[1100,1400],grindDescriptionAr:"خشنة جداً (حبيبات البرغل أو الفلفل الأسود المجروش)",grindDescriptionEn:"Extra-Coarse (Coarse cracked peppercorns)",grinders:{"Comandante C40":"35 - 40 نقرة (Clicks)","Timemore C3":"24 - 28 نقرة (Clicks)","Fellow Ode Gen 2":"9.0 - 11.0 Dial","DF64 Gen 2":"85 - 95 مؤشر","Baratza Encore":"30 - 35 رقم"},tempByRoast:{light:20,"medium-light":18,medium:15,dark:12},steps:[{id:"cb-steep-start",nameAr:"الغمر بالماء البارد المفلتر",nameEn:"Cold Filtered Immersion",startSec:0,endSec:60,waterPctOfTotal:1,cumulativePct:1,descriptionAr:"صب ماء بارد نقي بدرجة حرارة الغرفة (أو ماء مثلج) بنسبة 1:8 على البُن الخشن.",descriptionEn:"Pour pure chilled water at 1:8 ratio over extra-coarse grounds.",techniqueTipAr:"استخدم ماءً بدرجة حرارة 18-20° مئوية للحصول على توازن سكري مثالي.",techniqueTipEn:"Ambient 18-20°C water yields the richest sweetness extraction."},{id:"cb-steep-chill",nameAr:"التخمير البطيء بالثلاجة (18 ساعة)",nameEn:"Slow 18-Hour Refrigerated Steep",startSec:60,endSec:64800,waterPctOfTotal:0,cumulativePct:1,descriptionAr:"حفظ الوعاء محكم الإغلاق في الثلاجة عند درجة 4° مئوية لمدة تتراوح بين 16-18 ساعة.",descriptionEn:"Sealed cold steep at 4°C for 16-18 hours in complete dark chilled environment.",techniqueTipAr:"لا تتجاوز 22 ساعة لتفادي استخلاص النكهات الخشبية والسيليلوزية.",techniqueTipEn:"Do not exceed 22 hours to prevent woody cellulose extraction."},{id:"cb-filtration",nameAr:"التصفية الدقيقة والتقديم",nameEn:"Double Filtration & Serving",startSec:64800,endSec:65100,waterPctOfTotal:0,cumulativePct:1,descriptionAr:"تصفية القهوة عبر فلتر ورقي أو قماش لإزالة الزيوت وحبيبات البُن الدقيقة، وتقديمها فوق مكعب ثلج نقي.",descriptionEn:"Filter through paper or linen mesh. Serve chilled over a single clear ice block.",techniqueTipAr:"المستخلص الناتج مركز (Concentrate)؛ يمكنك تخفيفه بماء نقي أو حليب بنسبة 1:1.",techniqueTipEn:"Dilute this rich concentrate 1:1 with pure mineral water or whole milk."}],baristaNotesAr:"استخلاص الماء البارد لا يذيب المركبات الحمضية المسببة للحرقان، مما يمنحك مشروباً حريراً حلواً كالشوكولاتة الباردة.",baristaNotesEn:"Cold water extraction leaves behind harsh acidic oils, delivering an ultra-smooth, naturally sweet, cocoa-forward chilled beverage."}];function ie(d,t,e,i){let a=Math.round(t*e);d.id==="espresso"&&(a=Math.round(t*e));const s=d.id==="espresso"?t>=16?2:1:Math.max(1,Math.round(a/180)),r=d.tempByRoast[i]||92;let n=0;const c=d.steps.map((u,v)=>{const A=v===d.steps.length-1;let p=Math.round(a*u.waterPctOfTotal);return n+=p,u.cumulativePct>=.99&&A&&(p=Math.max(0,a-(n-p)),n=a),{id:u.id,nameAr:u.nameAr,nameEn:u.nameEn,startSec:u.startSec,endSec:u.endSec,durationSec:u.endSec-u.startSec,stageWaterGrams:p,cumulativeWaterGrams:Math.min(a,Math.round(a*u.cumulativePct)),descriptionAr:u.descriptionAr,descriptionEn:u.descriptionEn,techniqueTipAr:u.techniqueTipAr,techniqueTipEn:u.techniqueTipEn}}),o=d.id==="espresso"?1.1:2.1,h=Math.max(1,a-t*o);let m=1.35;d.id==="espresso"?m=9.2:d.id==="coldbrew"?m=2.1:d.id==="chemex"&&(m=1.28),i==="dark"?m*=1.08:i==="light"&&(m*=.96);let f=m/100*(d.id==="espresso"?a:h)/t*100;return f=Math.round(f*10)/10,{coffeeDoseGrams:t,ratio:e,totalWaterGrams:a,cupCount:s,recommendedTempC:r,grindMicronRange:d.grindMicrons,grinderSettings:d.grinders,stages:c,estimatedTdsPct:Math.round(m*100)/100,estimatedExtractionYieldPct:f}}class re{constructor(){g(this,"ctx",null);g(this,"isMuted",!1);g(this,"streamNode",null);g(this,"streamGain",null);const t=localStorage.getItem("sulalah_sound_muted");this.isMuted=t==="true"}initCtx(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}getIsMuted(){return this.isMuted}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("sulalah_sound_muted",String(this.isMuted)),this.isMuted&&this.stopPouringStream(),this.isMuted}playDrip(){if(this.isMuted)return;const t=this.initCtx();if(t)try{const e=t.createOscillator(),i=t.createGain(),a=800+Math.random()*400;e.type="sine",e.frequency.setValueAtTime(a,t.currentTime),e.frequency.exponentialRampToValueAtTime(180,t.currentTime+.08),i.gain.setValueAtTime(.08,t.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.08),e.connect(i),i.connect(t.destination),e.start(),e.stop(t.currentTime+.08)}catch{}}playStageChime(){if(this.isMuted)return;const t=this.initCtx();if(t)try{[587.33,880].forEach((i,a)=>{const s=t.createOscillator(),r=t.createGain();s.type="sine",s.frequency.setValueAtTime(i,t.currentTime+a*.04);const n=t.currentTime+a*.04;r.gain.setValueAtTime(.12,n),r.gain.exponentialRampToValueAtTime(1e-4,n+.8),s.connect(r),r.connect(t.destination),s.start(n),s.stop(n+.8)})}catch{}}startPouringStream(){if(this.isMuted||this.streamNode)return;const t=this.initCtx();if(t)try{const e=t.sampleRate*2,i=t.createBuffer(1,e,t.sampleRate),a=i.getChannelData(0);let s=0,r=0,n=0,c=0,o=0,h=0,m=0;for(let A=0;A<e;A++){const p=Math.random()*2-1;s=.99886*s+p*.0555179,r=.99332*r+p*.0750759,n=.969*n+p*.153852,c=.8665*c+p*.3104856,o=.55*o+p*.5329522,h=-.7616*h-p*.016898,a[A]=(s+r+n+c+o+h+m+p*.5362)*.04,m=p*.115926}const f=t.createBufferSource();f.buffer=i,f.loop=!0;const u=t.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(950,t.currentTime),u.Q.setValueAtTime(2.2,t.currentTime);const v=t.createGain();v.gain.setValueAtTime(.001,t.currentTime),v.gain.linearRampToValueAtTime(.08,t.currentTime+.3),f.connect(u),u.connect(v),v.connect(t.destination),f.start(0),this.streamNode=f,this.streamGain=v}catch{}}stopPouringStream(){if(!this.streamGain||!this.ctx){this.streamNode=null;return}try{const t=this.ctx;this.streamGain.gain.linearRampToValueAtTime(1e-4,t.currentTime+.4),setTimeout(()=>{if(this.streamNode){try{this.streamNode.stop()}catch{}this.streamNode=null,this.streamGain=null}},420)}catch{this.streamNode=null,this.streamGain=null}}playBrewCompleteChord(){if(this.isMuted)return;const t=this.initCtx();if(t)try{this.stopPouringStream(),[523.25,659.25,783.99,987.77,1046.5].forEach((i,a)=>{const s=t.createOscillator(),r=t.createGain();s.type="triangle",s.frequency.setValueAtTime(i,t.currentTime+a*.08);const n=t.currentTime+a*.08;r.gain.setValueAtTime(.18,n),r.gain.exponentialRampToValueAtTime(1e-4,n+1.8),s.connect(r),r.connect(t.destination),s.start(n),s.stop(n+1.8)})}catch{}}}const $=new re;class se{constructor(){g(this,"selectedMethodId","v60");g(this,"doseGrams",18);g(this,"selectedRatio",15);g(this,"selectedRoast","light");g(this,"isTimerRunning",!1);g(this,"timerInterval",null);g(this,"elapsedSeconds",0);g(this,"currentStageIndex",0);const t=this.getCurrentMethod();this.doseGrams=t.defaultDose,this.selectedRatio=t.defaultRatio}setBeanQuickBrew(t,e,i){k.some(s=>s.id===t)&&(this.selectedMethodId=t);const a=this.getCurrentMethod();this.doseGrams=Math.min(a.doseRange[1],Math.max(a.doseRange[0],e)),this.selectedRatio=a.defaultRatio,this.selectedRoast=i,this.resetTimer(),this.reRender()}getCurrentMethod(){return k.find(t=>t.id===this.selectedMethodId)||k[0]}getPlan(){const t=this.getCurrentMethod();return ie(t,this.doseGrams,this.selectedRatio,this.selectedRoast)}render(){const e=w()==="ar",i=this.getCurrentMethod(),a=this.getPlan(),s=a.stages[this.currentStageIndex]||a.stages[0],r=i.targetTimeSec,n=Math.min(100,Math.round(this.elapsedSeconds/r*100)),c=Math.min(85,Math.max(5,this.elapsedSeconds/r*85));return`
      <section id="brewing-lab" class="lab-section">
        <div class="section-header">
          <div class="header-pre">${e?"المعمل الحرفي التفاعلي":"Artisan Interactive Lab"}</div>
          <h2 class="section-title">${l("navLab")}</h2>
          <p class="section-desc">
            ${e?"معايرة دقيقة لجرام البُن ونسبة الاستخلاص، مع مؤقت تدفق حي وجدول صبات ومحاكاة فورية لتنقيط القهوة.":"Precision dose & ratio calibration with real-time pulse pour schedule and animated carafe extraction."}
          </p>
        </div>

        <!-- Method Navigation Bar -->
        <div class="method-tabs-grid" role="tablist">
          ${k.map(o=>`
              <button type="button" class="method-tab-btn ${o.id===this.selectedMethodId?"active":""}" data-method-id="${o.id}">
                <span class="tab-icon">${o.iconSvg}</span>
                <span class="tab-name">${e?o.nameAr:o.nameEn}</span>
                <span class="tab-category">${o.category}</span>
              </button>
            `).join("")}
        </div>

        <div class="lab-layout-grid">
          <!-- Control Panel Column -->
          <div class="lab-controls-card">
            <div class="card-inner-header">
              <h3 class="card-title">${l("doseWaterRatio")}</h3>
              <span class="badge badge-accent">${e?i.nameAr:i.nameEn}</span>
            </div>

            <!-- Coffee Dose Input & Slider -->
            <div class="input-control-group">
              <div class="label-row">
                <label for="dose-range">${l("coffeeDose")}</label>
                <div class="value-display">
                  <span id="dose-val-display" class="highlight-number">${this.doseGrams}</span>
                  <span class="unit-text">${l("grams")}</span>
                </div>
              </div>
              <input type="range" id="dose-range" 
                min="${i.doseRange[0]}" 
                max="${i.doseRange[1]}" 
                step="0.5" 
                value="${this.doseGrams}" 
                class="lab-range-slider" />
              <div class="range-presets-row">
                ${[15,18,20,24,30].filter(o=>o>=i.doseRange[0]&&o<=i.doseRange[1]).map(o=>`
                  <button type="button" class="preset-pill ${this.doseGrams===o?"active":""}" data-set-dose="${o}">${o}g</button>
                `).join("")}
              </div>
            </div>

            <!-- Extraction Ratio -->
            <div class="input-control-group">
              <div class="label-row">
                <label for="ratio-range">${l("waterRatio")}</label>
                <div class="value-display">
                  <span class="highlight-number">1:${this.selectedRatio}</span>
                </div>
              </div>
              <input type="range" id="ratio-range" 
                min="${i.ratioRange[0]}" 
                max="${i.ratioRange[1]}" 
                step="0.5" 
                value="${this.selectedRatio}" 
                class="lab-range-slider" />
              <div class="range-presets-row">
                ${i.ratioOptions.map(o=>`
                  <button type="button" class="preset-pill ${this.selectedRatio===o?"active":""}" data-set-ratio="${o}">1:${o}</button>
                `).join("")}
              </div>
            </div>

            <!-- Roast Profile Selector -->
            <div class="input-control-group">
              <div class="label-row">
                <label>${l("roastLevel")}</label>
                <span class="temp-badge">${a.recommendedTempC}°C</span>
              </div>
              <div class="roast-pill-group">
                ${[{id:"light",ar:"خفيف (Light)",en:"Light",color:"#c26d4a"},{id:"medium-light",ar:"متوسط خفيف",en:"Med-Light",color:"#a0522d"},{id:"medium",ar:"متوسط (Medium)",en:"Medium",color:"#6f3b1e"},{id:"dark",ar:"داكن (Dark)",en:"Dark",color:"#381e0f"}].map(o=>`
                  <button type="button" class="roast-select-btn ${this.selectedRoast===o.id?"active":""}" data-roast="${o.id}">
                    <span class="roast-dot" style="background-color: ${o.color}"></span>
                    <span>${e?o.ar:o.en}</span>
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- Calculated Summary Cards -->
            <div class="calc-metrics-row">
              <div class="calc-metric-box">
                <span class="calc-label">${l("waterYield")}</span>
                <span class="calc-val">${a.totalWaterGrams} <small>${l("grams")}</small></span>
              </div>
              <div class="calc-metric-box">
                <span class="calc-label">${e?"عدد الأكواب التقديري":"Approx Cups"}</span>
                <span class="calc-val">${a.cupCount} <small>${e?"كوب":"cups"}</small></span>
              </div>
              <div class="calc-metric-box">
                <span class="calc-label">${e?"معدل الاستخلاص (EY)":"Target Yield"}</span>
                <span class="calc-val text-amber">${a.estimatedExtractionYieldPct}%</span>
              </div>
            </div>

            <!-- Grinder Settings Guide -->
            <div class="grinders-guide-box">
              <div class="grinders-header">
                <svg class="box-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                <span>${l("grinderMatrix")} (${a.grindMicronRange[0]} - ${a.grindMicronRange[1]} µm)</span>
              </div>
              <p class="grind-desc">${e?i.grindDescriptionAr:i.grindDescriptionEn}</p>
              <div class="grinder-items-grid">
                ${Object.entries(a.grinderSettings).map(([o,h])=>`
                  <div class="grinder-item">
                    <span class="grinder-brand">${o}</span>
                    <span class="grinder-val">${h}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- Interactive Barista Timer & Animated Carafe Column -->
          <div class="lab-timer-card">
            <div class="timer-top-bar">
              <div class="timer-stage-title">
                <span class="stage-tag">${e?"المرحلة الحالية":"Current Stage"}</span>
                <h4 id="active-stage-name">${e?s.nameAr:s.nameEn}</h4>
              </div>
              <button type="button" id="audio-toggle-btn" class="icon-toggle-btn" title="${l("soundOn")}">
                <svg id="audio-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  ${$.getIsMuted()?'<line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>':'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>'}
                </svg>
              </button>
            </div>

            <!-- Animated SVG Coffee Carafe & Dripper Simulation -->
            <div class="carafe-stage-wrapper">
              <svg class="brewing-svg-canvas" viewBox="0 0 320 380" aria-label="Animated Carafe">
                <defs>
                  <!-- Gradient for rich specialty coffee liquid -->
                  <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#8a4422" stop-opacity="0.95" />
                    <stop offset="60%" stop-color="#4d2210" stop-opacity="0.98" />
                    <stop offset="100%" stop-color="#210f07" stop-opacity="1.0" />
                  </linearGradient>
                  <!-- Filter paper texture -->
                  <linearGradient id="filterPaperGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#fdfbf7" />
                    <stop offset="50%" stop-color="#f5ede3" />
                    <stop offset="100%" stop-color="#e8dccf" />
                  </linearGradient>
                  <!-- Crema surface reflection -->
                  <linearGradient id="cremaReflect" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#d97706" stop-opacity="0.4" />
                    <stop offset="50%" stop-color="#f59e0b" stop-opacity="0.8" />
                    <stop offset="100%" stop-color="#d97706" stop-opacity="0.4" />
                  </linearGradient>
                  <clipPath id="carafeClip">
                    <path d="M 105 170 L 80 325 Q 80 345 105 345 L 215 345 Q 240 345 240 325 L 215 170 Z" />
                  </clipPath>
                </defs>

                <!-- Water Kettle Stream Line (Animated during timer) -->
                <path id="water-stream-path" class="water-stream ${this.isTimerRunning?"active":""}" 
                  d="M 160 30 Q 160 55 160 90" stroke="rgba(186, 230, 253, 0.85)" stroke-width="3" stroke-linecap="round" fill="none" />

                <!-- Dripper Cone (V60 / Chemex / Filter) -->
                <path d="M 90 85 L 230 85 L 180 160 L 140 160 Z" fill="url(#filterPaperGrad)" stroke="#c26d4a" stroke-width="2.5" />
                <!-- Coffee grounds inside cone -->
                <path d="M 105 100 Q 160 115 215 100 L 175 155 L 145 155 Z" fill="#3b2012" opacity="0.9" />

                <!-- Dripping droplets from bottom of cone -->
                <g id="dripping-group" class="drips-animation ${this.isTimerRunning?"dripping":""}">
                  <circle cx="160" cy="170" r="3.5" fill="#4d2210" class="drip-drop drip-1" />
                  <circle cx="160" cy="195" r="3" fill="#4d2210" class="drip-drop drip-2" />
                  <circle cx="160" cy="225" r="2.5" fill="#4d2210" class="drip-drop drip-3" />
                </g>

                <!-- Glass Carafe Decanter Body -->
                <!-- Spout and Handle -->
                <path d="M 105 170 Q 75 165 72 178 Q 78 190 98 185" fill="none" stroke="rgba(194, 109, 74, 0.45)" stroke-width="3" stroke-linecap="round" />
                <path d="M 225 200 Q 268 230 255 285 Q 248 310 220 315" fill="none" stroke="rgba(194, 109, 74, 0.55)" stroke-width="4" stroke-linecap="round" />

                <!-- Decanter Glass outline -->
                <path d="M 105 170 L 80 325 Q 80 345 105 345 L 215 345 Q 240 345 240 325 L 215 170 Z" 
                  fill="rgba(255, 255, 255, 0.08)" stroke="rgba(194, 109, 74, 0.6)" stroke-width="3" />

                <!-- Dynamic Liquid Body inside Carafe -->
                <g clip-path="url(#carafeClip)">
                  <!-- Liquid Rectangle with dynamic height -->
                  <rect id="carafe-liquid-rect" x="60" 
                    y="${345-c*2}" 
                    width="200" 
                    height="${c*2.2}" 
                    fill="url(#coffeeGradient)" />
                  <!-- Crema surface line -->
                  <ellipse id="crema-surface" cx="160" 
                    cy="${345-c*2}" 
                    rx="62" ry="7" 
                    fill="url(#cremaReflect)" />
                </g>

                <!-- Glass Measurement Markings on Carafe Wall -->
                <line x1="88" y1="285" x2="98" y2="285" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" />
                <text x="103" y="288" fill="rgba(255,255,255,0.6)" font-size="9" font-family="Inter, sans-serif">150 ml</text>
                
                <line x1="84" y1="245" x2="94" y2="245" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" />
                <text x="100" y="248" fill="rgba(255,255,255,0.6)" font-size="9" font-family="Inter, sans-serif">300 ml</text>

                <line x1="82" y1="205" x2="92" y2="205" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" />
                <text x="98" y="208" fill="rgba(255,255,255,0.6)" font-size="9" font-family="Inter, sans-serif">450 ml</text>
              </svg>

              <!-- Central Digital Time Display -->
              <div class="digital-timer-display">
                <div class="time-main" id="timer-text">${this.formatTime(this.elapsedSeconds)}</div>
                <div class="time-target">${e?"المدة المستهدفة:":"Target Time:"} ${this.formatTime(r)}</div>
              </div>
            </div>

            <!-- Stage Progress Bar -->
            <div class="timer-progress-track">
              <div id="timer-progress-fill" class="timer-progress-fill" style="width: ${n}%"></div>
            </div>

            <!-- Live Stage Technique Guidance -->
            <div class="stage-instructions-box">
              <div class="target-water-row">
                <span class="lbl">${e?"الماء المطلوب لهذه المرحلة:":"Target Stage Water:"}</span>
                <span id="stage-water-target" class="val-pill">${s.stageWaterGrams}g (${e?"الإجمالي":"Total"}: ${s.cumulativeWaterGrams}g)</span>
              </div>
              <p id="stage-description" class="stage-desc-text">${e?s.descriptionAr:s.descriptionEn}</p>
              <div class="tip-row">
                <svg class="tip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <span id="stage-tip" class="stage-tip-text">${e?s.techniqueTipAr:s.techniqueTipEn}</span>
              </div>
            </div>

            <!-- Timer Action Buttons -->
            <div class="timer-actions-row">
              <button type="button" id="timer-start-btn" class="btn btn-primary btn-large">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  ${this.isTimerRunning?'<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>':'<polygon points="5 3 19 12 5 21 5 3"/>'}
                </svg>
                <span id="start-btn-label">${this.isTimerRunning?l("pauseTimer"):l("startTimer")}</span>
              </button>
              <button type="button" id="timer-reset-btn" class="btn btn-outline" title="${l("resetTimer")}">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                <span>${l("resetTimer")}</span>
              </button>
            </div>

            <!-- Detailed Pulse Schedule Timeline -->
            <div class="timeline-stages-list">
              <h5 class="timeline-heading">${l("brewSchedule")}</h5>
              <div class="stages-scroll-row">
                ${a.stages.map((o,h)=>{const m=h===this.currentStageIndex,f=this.elapsedSeconds>=o.endSec;return`
                    <div class="stage-step-card ${m?"current":""} ${f?"past":""}">
                      <div class="step-num">${h+1}</div>
                      <div class="step-meta">
                        <span class="step-title">${e?o.nameAr:o.nameEn}</span>
                        <span class="step-time">${this.formatTime(o.startSec)} - ${this.formatTime(o.endSec)}</span>
                      </div>
                      <div class="step-water">${o.cumulativeWaterGrams}g</div>
                    </div>
                  `}).join("")}
              </div>
            </div>

            <!-- Barista Master Notes -->
            <div class="barista-notes-callout">
              <span class="callout-badge">${e?"توجيه الخبير":"Barista Note"}</span>
              <p>${e?i.baristaNotesAr:i.baristaNotesEn}</p>
            </div>
          </div>
        </div>
      </section>
    `}formatTime(t){const e=Math.floor(t/60),i=t%60;return`${e}:${i<10?"0":""}${i}`}bindEvents(t){t.querySelectorAll(".method-tab-btn").forEach(n=>{n.addEventListener("click",c=>{const o=c.currentTarget.getAttribute("data-method-id");if(o&&o!==this.selectedMethodId){this.selectedMethodId=o;const h=this.getCurrentMethod();this.doseGrams=h.defaultDose,this.selectedRatio=h.defaultRatio,this.resetTimer(),this.reRender()}})});const e=t.querySelector("#dose-range");e&&e.addEventListener("input",n=>{this.doseGrams=parseFloat(n.target.value),this.updatePlanState()}),t.querySelectorAll("[data-set-dose]").forEach(n=>{n.addEventListener("click",c=>{const o=parseFloat(c.currentTarget.getAttribute("data-set-dose")||"18");this.doseGrams=o,this.updatePlanState()})});const i=t.querySelector("#ratio-range");i&&i.addEventListener("input",n=>{this.selectedRatio=parseFloat(n.target.value),this.updatePlanState()}),t.querySelectorAll("[data-set-ratio]").forEach(n=>{n.addEventListener("click",c=>{const o=parseFloat(c.currentTarget.getAttribute("data-set-ratio")||"15");this.selectedRatio=o,this.updatePlanState()})}),t.querySelectorAll("[data-roast]").forEach(n=>{n.addEventListener("click",c=>{const o=c.currentTarget.getAttribute("data-roast");o&&(this.selectedRoast=o,this.updatePlanState())})});const a=t.querySelector("#timer-start-btn");a&&a.addEventListener("click",()=>{this.toggleTimer()});const s=t.querySelector("#timer-reset-btn");s&&s.addEventListener("click",()=>{this.resetTimer(),this.reRender()});const r=t.querySelector("#audio-toggle-btn");r&&r.addEventListener("click",()=>{$.toggleMute(),this.reRender()})}toggleTimer(){this.isTimerRunning?this.pauseTimer():this.startTimer(),this.updateTimerControlsUI()}startTimer(){this.isTimerRunning=!0,$.startPouringStream(),this.elapsedSeconds===0&&$.playStageChime(),this.timerInterval=window.setInterval(()=>{this.elapsedSeconds++,this.onTimerTick()},1e3)}pauseTimer(){this.isTimerRunning=!1,this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null),$.stopPouringStream()}resetTimer(){this.pauseTimer(),this.elapsedSeconds=0,this.currentStageIndex=0}onTimerTick(){const t=this.getCurrentMethod(),e=this.getPlan(),i=t.targetTimeSec;let a=0;for(let s=0;s<e.stages.length;s++){if(this.elapsedSeconds>=e.stages[s].startSec&&this.elapsedSeconds<e.stages[s].endSec){a=s;break}s===e.stages.length-1&&this.elapsedSeconds>=e.stages[s].startSec&&(a=s)}a!==this.currentStageIndex?(this.currentStageIndex=a,$.playStageChime()):this.elapsedSeconds%3===0&&$.playDrip(),this.elapsedSeconds>=i&&(this.pauseTimer(),$.playBrewCompleteChord(),this.updateTimerControlsUI()),this.updateTimerLiveUI()}updateTimerLiveUI(){const t=document.querySelector("#timer-text");t&&(t.textContent=this.formatTime(this.elapsedSeconds));const e=this.getCurrentMethod(),i=this.getPlan(),a=e.targetTimeSec,s=Math.min(100,Math.round(this.elapsedSeconds/a*100)),r=document.querySelector("#timer-progress-fill");r&&(r.style.width=`${s}%`);const n=Math.min(85,Math.max(5,this.elapsedSeconds/a*85)),c=document.querySelector("#carafe-liquid-rect"),o=document.querySelector("#crema-surface");if(c&&o){const y=345-n*2,E=n*2.2;c.setAttribute("y",String(y)),c.setAttribute("height",String(E)),o.setAttribute("cy",String(y))}const h=i.stages[this.currentStageIndex]||i.stages[0],m=w()==="ar",f=document.querySelector("#active-stage-name");f&&(f.textContent=m?h.nameAr:h.nameEn);const u=document.querySelector("#stage-water-target");u&&(u.textContent=`${h.stageWaterGrams}g (${m?"الإجمالي":"Total"}: ${h.cumulativeWaterGrams}g)`);const v=document.querySelector("#stage-description");v&&(v.textContent=m?h.descriptionAr:h.descriptionEn);const A=document.querySelector("#stage-tip");A&&(A.textContent=m?h.techniqueTipAr:h.techniqueTipEn);const p=document.querySelector("#water-stream-path");p&&(this.isTimerRunning?p.classList.add("active"):p.classList.remove("active"));const b=document.querySelector("#dripping-group");b&&(this.isTimerRunning?b.classList.add("dripping"):b.classList.remove("dripping"))}updateTimerControlsUI(){const t=document.querySelector("#start-btn-label");t&&(t.textContent=this.isTimerRunning?l("pauseTimer"):l("startTimer"));const e=document.querySelector("#water-stream-path");e&&(this.isTimerRunning?e.classList.add("active"):e.classList.remove("active"));const i=document.querySelector("#dripping-group");i&&(this.isTimerRunning?i.classList.add("dripping"):i.classList.remove("dripping"))}updatePlanState(){this.reRender()}reRender(){const t=document.querySelector("#brewing-lab-container");t&&(t.innerHTML=this.render(),this.bindEvents(t))}}const M=new se,C=[{id:"saudi-khawlani",nameAr:"خولاني جازان الفاخر",nameEn:"Saudi Khawlani Special Reserve",originAr:"المملكة العربية السعودية",originEn:"Saudi Arabia",regionAr:"جبال فيفاء والداير - جازان",regionEn:"Fifa & Al Dair Mountains, Jazan",farmAr:"مزارع السلالة الخولانية العريقة (تراث اليونسكو)",farmEn:"Khawlani Heritage Farms (UNESCO Listed)",altitude:1850,processingAr:"تجفيف لاهوائي بطيء (Anaerobic Natural)",processingEn:"Slow Anaerobic Natural",processingType:"anaerobic",varietalAr:"خولاني أصيل (Coffea Arabica Khawlani)",varietalEn:"Ancient Heirloom Khawlani",roastLevel:"light",roastLevelAr:"تحميص خفيف فلتر (Light Filter)",roastLevelEn:"Light Filter Roast",price:95,isSaudi:!0,featured:!0,badgeAr:"محصول وطني مميز",badgeEn:"National Heritage",descriptionAr:"من أعالي مدرجات جازان الخضراء، تجربة استثنائية تجسد أصالة البُن الخولاني العريق بمعالجة لاهوائية مبتكرة تبرز أريج الياسمين وحلاوة التين وعسل السدر الطبيعي.",descriptionEn:"Harvested from high-altitude misty terraces of Jazan. An exceptional ancestral cup with an innovative anaerobic processing that highlights fragrant jasmine, dried fig, and wild Sidr honey.",tastingNotesAr:["أزهار الياسمين","تين مجفف","عسل السدر","حلاوة مشمش"],tastingNotesEn:["Jasmine Floral","Dried Fig","Sidr Honey","Sweet Apricot"],primaryFlavorGroup:"floral",sensoryScores:{acidity:4.2,sweetness:4.9,body:4,aroma:5,aftertaste:4.8},recommendedMethods:["v60","chemex","aeropress"]},{id:"saudi-asiri",nameAr:"عسيري المرتفعات النبيلة",nameEn:"Asiri Highlands Gold",originAr:"المملكة العربية السعودية",originEn:"Saudi Arabia",regionAr:"مرتفعات رجال ألمع وعسير",regionEn:"Rijal Almaa & Asir Peaks",farmAr:"مدرجات وادي حسوة التراثية",farmEn:"Hiswah Valley Terraces",altitude:1950,processingAr:"عسلي أصفر (Yellow Honey)",processingEn:"Yellow Honey Process",processingType:"honey",varietalAr:"أرابيكا جبلية عسيرية",varietalEn:"Asiri Mountain Arabica",roastLevel:"medium-light",roastLevelAr:"تحميص متوسط-خفيف",roastLevelEn:"Medium-Light Roast",price:88,isSaudi:!0,featured:!0,badgeAr:"إصدار محدود",badgeEn:"Limited Reserve",descriptionAr:"محصول فاخر من قمم عسير الشاهقة، قوام ممتلئ غني بكراميل الدبس والمشمش المجفف مع خاتمة كاكاو ناعمة تناسب أدوات الترشيح والإسبريسو الفاخر.",descriptionEn:"Highland harvest from misty Asir peaks. Offers a velvety mouthfeel laced with rich date-caramel, dried apricot, and a prolonged smooth cocoa finish.",tastingNotesAr:["كراميل الدبس","مشمش مجفف","لوز محمص","كاكاو خام"],tastingNotesEn:["Date Caramel","Dried Apricot","Roasted Almond","Raw Cocoa"],primaryFlavorGroup:"sweet",sensoryScores:{acidity:3.7,sweetness:4.7,body:4.4,aroma:4.5,aftertaste:4.6},recommendedMethods:["v60","espresso","frenchpress"]},{id:"ethiopia-yirgacheffe",nameAr:"إثيوبيا يرغاتشيف شيلشيليه",nameEn:"Ethiopia Yirgacheffe Chelchele",originAr:"إثيوبيا",originEn:"Ethiopia",regionAr:"غيديو - يرغاتشيف (Gedeo)",regionEn:"Gedeo Zone, Yirgacheffe",farmAr:"محطة معالجة شيلشيليه الحرفية",farmEn:"Chelchele Artisan Washing Station",altitude:2100,processingAr:"مغسولة كلاسيكية (Fully Washed)",processingEn:"Fully Washed",processingType:"washed",varietalAr:"سلالات إرث كوروومي (Kurume / Heirloom)",varietalEn:"Kurume Heirloom",roastLevel:"light",roastLevelAr:"تحميص خفيف أومني (Light)",roastLevelEn:"Light Nordic Style",price:74,isSaudi:!1,featured:!0,descriptionAr:"أيقونة القهوة الإثيوبية المغسولة بأنقى مياه المرتفعات؛ انطباع شاي الإيرل غراي مع حمضيات البرغموت الزاهية والدراق الأبيض العطري.",descriptionEn:"The benchmark of delicate washed Ethiopian coffees. Earl grey tea notes infused with sparkling bergamot, white peach, and jasmine florals.",tastingNotesAr:["برغموت زاهٍ","دراق أبيض","شاي أسود معطر","عسل خفيف"],tastingNotesEn:["Sparkling Bergamot","White Peach","Black Floral Tea","Light Honey"],primaryFlavorGroup:"fruity",sensoryScores:{acidity:4.9,sweetness:4.2,body:3.3,aroma:4.9,aftertaste:4.5},recommendedMethods:["v60","chemex","aeropress"]},{id:"colombia-geisha-finca",nameAr:"كولومبيا غيشا فينكا الفاخرة",nameEn:"Colombia Geisha Finca Paraiso",originAr:"كولومبيا",originEn:"Colombia",regionAr:"كاوكا - بييندامو (Cauca)",regionEn:"Cauca, Piendamó",farmAr:"مزرعة الفردوس - إكوانيا ريفيرا",farmEn:"Finca El Paraiso",altitude:1980,processingAr:"تخمير لاهوائي مزدوج مع صدمة حرارية",processingEn:"Double Anaerobic Thermal Shock",processingType:"anaerobic",varietalAr:"غيشا نقية 100% (Green Tip Geisha)",varietalEn:"100% Green Tip Geisha",roastLevel:"light",roastLevelAr:"تحميص خفيف تنافسي (Competition Light)",roastLevelEn:"Competition Light Roast",price:130,isSaudi:!1,featured:!0,badgeAr:"محصول بطولات",badgeEn:"Championship Lot",descriptionAr:"تحفة بستانية حائزة على جوائز دولية بمعالجة الصدمة الحرارية المعقدة. تعبير نقي عن زهر البرتقال، المانجو الاستوائي، وقوام حريري يأسرك.",descriptionEn:"An international award winner featuring precision thermal shock processing. Unveils notes of orange blossom, lush tropical mango, and a silky tea-like structure.",tastingNotesAr:["زهر البرتقال","مانجو استوائي","مشمش أحمر","ملمس حريري"],tastingNotesEn:["Orange Blossom","Tropical Mango","Red Peach","Silky Body"],primaryFlavorGroup:"floral",sensoryScores:{acidity:4.8,sweetness:4.8,body:3.6,aroma:5,aftertaste:4.9},recommendedMethods:["v60","chemex"]},{id:"yemen-harazi",nameAr:"اليمن حرازي العقيق الأسود",nameEn:"Yemen Harazi Black Agate",originAr:"اليمن السعيد",originEn:"Yemen",regionAr:"جبال حراز الشاهقة - صنعاء",regionEn:"Haraz High Mountains, Sana'a",farmAr:"مدرجات آل حراز القديمة",farmEn:"Ancient Harazi Terraces",altitude:2250,processingAr:"مجففة طبيعياً على الأسِرّة المرفوعة",processingEn:"Natural Sun-Dried on Raised Beds",processingType:"natural",varietalAr:"عديني وجعدي تراثي (Udaini & Jaadi)",varietalEn:"Udaini & Jaadi Heirloom",roastLevel:"medium",roastLevelAr:"تحميص متوسط متوازن",roastLevelEn:"Balanced Medium Roast",price:110,isSaudi:!1,featured:!0,badgeAr:"تراث أسطوري",badgeEn:"Mythical Heritage",descriptionAr:"من مهد القهوة التاريخي في جبال حراز المعلقة بين السحاب. قوام مخملي مكثف مع نكهات الشوكولاتة الداكنة المعتقة، حب الهيل، والتين المجفف.",descriptionEn:"From ancient cliff-hanging stone terraces at 2250 meters. Features a decadent velvet body layered with bittersweet dark chocolate, green cardamom, and rich fig.",tastingNotesAr:["شوكولاتة داكنة 85%","هيل أخضر","تين مجفف","سكر بني"],tastingNotesEn:["85% Dark Chocolate","Green Cardamom","Dried Figs","Brown Muscovado"],primaryFlavorGroup:"spiced",sensoryScores:{acidity:3.4,sweetness:4.4,body:4.9,aroma:4.7,aftertaste:4.8},recommendedMethods:["espresso","v60","frenchpress"]},{id:"panama-boquete-pacamara",nameAr:"بنما بوكيتي باكامارا",nameEn:"Panama Boquete Pacamara",originAr:"بنما",originEn:"Panama",regionAr:"وادي بوكيتي - بركان بارو",regionEn:"Boquete Valley, Volcán Barú",farmAr:"مزرعة السحاب البركانية",farmEn:"Hacienda La Nube",altitude:1750,processingAr:"مجففة لاهوائية بطيئة (Slow Natural)",processingEn:"Slow Natural Anaerobic",processingType:"natural",varietalAr:"باكامارا عملاقة (Giant Pacamara)",varietalEn:"Giant Pacamara",roastLevel:"medium-light",roastLevelAr:"تحميص متوسط-خفيف",roastLevelEn:"Medium-Light Roast",price:98,isSaudi:!1,featured:!1,descriptionAr:"حبات باكامارا عملاقة من تربة بركان بارو الخصبة. حلاوة مكثفة تحاكي التفاح الأحمر المكرمل والقرفة مع قوام كريمي أنيق.",descriptionEn:"Giant Pacamara beans grown in rich volcanic soils. Intense sweetness of caramelised red apple, sweet cinnamon stick, and a creamy rounded finish.",tastingNotesAr:["تفاح أحمر مكرمل","قرفة دافئة","فانيليا طبيعية","قوام كريمي"],tastingNotesEn:["Caramel Red Apple","Warm Cinnamon","Natural Vanilla","Creamy Body"],primaryFlavorGroup:"nutty",sensoryScores:{acidity:4.1,sweetness:4.6,body:4.3,aroma:4.4,aftertaste:4.4},recommendedMethods:["aeropress","v60","espresso"]},{id:"kenya-nyeri-sl28",nameAr:"كينيا نيري قمم الرواندو",nameEn:"Kenya Nyeri SL28 Reserve",originAr:"كينيا",originEn:"Kenya",regionAr:"منحدرات جبل كينيا - نيري (Nyeri)",regionEn:"Mount Kenya Slopes, Nyeri",farmAr:"تعاونية الرواندو الفلاحية",farmEn:"Rwandu Farmers Cooperative",altitude:1880,processingAr:"غسيل كيني كلاسيكي مزدوج (Double Washed)",processingEn:"Traditional Double Washed (72h)",processingType:"washed",varietalAr:"سلالة SL28 و SL34 الأصيلة",varietalEn:"SL28 & SL34 Varietals",roastLevel:"light",roastLevelAr:"تحميص خفيف ناصع",roastLevelEn:"Crisp Light Roast",price:82,isSaudi:!1,featured:!1,descriptionAr:"حموضة فسفورية مميزة وانفجار نكهات التوت الأسود الكشمش والجريب فروت الوردي مع حلاوة السكر البني اللذيذ.",descriptionEn:"Electric phosphoric acidity showcasing classic blackcurrant, pink grapefruit, and crisp sweet red berries balanced by raw brown sugar.",tastingNotesAr:["توت أسود (كشمش)","جريب فروت وردي","سكر قصب خام","حمضيات متلألئة"],tastingNotesEn:["Blackcurrant","Pink Grapefruit","Raw Cane Sugar","Sparkling Citrus"],primaryFlavorGroup:"fruity",sensoryScores:{acidity:5,sweetness:4.1,body:3.8,aroma:4.7,aftertaste:4.6},recommendedMethods:["v60","chemex","coldbrew"]}],O=[{id:"floral",nameAr:"زهري وعطري (Floral)",nameEn:"Floral & Delicate",color:"#d97706",lightColor:"rgba(217, 119, 6, 0.12)",subdescriptorsAr:["ياسمين ندي","زهر البرتقال","ورد بلدي","أزهار البنفسج","شاي البرغموت"],subdescriptorsEn:["Fresh Jasmine","Orange Blossom","Garden Rose","Sweet Violet","Bergamot Tea"],descriptionAr:"نوتات عطرية راقية ناتجة عن مركبات اللينالول والغيرانيول، تميز محاصيل المرتفعات العالية كالبُن الخولاني الإرث والغيشا الكولومبية.",descriptionEn:"Exquisite aromatic compounds (linalool & geraniol) characteristic of high elevation terroirs like Khawlani and Geisha lots.",associatedOrigins:["saudi-khawlani","colombia-geisha-finca","ethiopia-yirgacheffe"]},{id:"fruity",nameAr:"فاكهي وحمضي زاهٍ (Fruity)",nameEn:"Fruity & Vibrant",color:"#c26d4a",lightColor:"rgba(194, 109, 74, 0.12)",subdescriptorsAr:["توت أسود وكشمش","دراق أبيض","مانجو استوائي","جريب فروت وردي","تين مجفف"],subdescriptorsEn:["Blackcurrant","White Peach","Lush Mango","Pink Grapefruit","Sun-Dried Fig"],descriptionAr:"حموضة حيوية نظيفة (حمض الماليك وحمض الستريك) تمنح الكوب إحساس العصير المنعش والفاكهة الاستوائية الناضجة.",descriptionEn:"Sparkling organic malic and citric acidity imparting juicy stone fruit and crisp berry clarity to the palate.",associatedOrigins:["ethiopia-yirgacheffe","kenya-nyeri-sl28","colombia-geisha-finca"]},{id:"sweet",nameAr:"حلاوة وكراميل (Sweet & Caramel)",nameEn:"Sweet & Caramel",color:"#b45309",lightColor:"rgba(180, 83, 9, 0.12)",subdescriptorsAr:["كراميل الدبس","عسل السدر","سكر بني خام","حلاوة الفانيليا","سكر القصب"],subdescriptorsEn:["Date Caramel","Sidr Honey","Brown Muscovado","Madagascar Vanilla","Cane Sugar"],descriptionAr:"تكرمل سكريات السكروز الطبيعية أثناء النضج والتحميص الحرفي؛ تمنح فنجان القهوة حلاوة ممتدة ومستساغة دون أي مرارة.",descriptionEn:"Natural sucrose caramelisation that provides lingering sweetness and round tactile softness across every sip.",associatedOrigins:["saudi-asiri","saudi-khawlani","panama-boquete-pacamara"]},{id:"nutty",nameAr:"مكسرات وكاكاو (Nutty & Cocoa)",nameEn:"Nutty & Cocoa",color:"#78350f",lightColor:"rgba(120, 53, 15, 0.12)",subdescriptorsAr:["لوز محمص","شوكولاتة الحليب","بندق محلى","كاكاو خام نقي","حلاوة جوز الهند"],subdescriptorsEn:["Roasted Almond","Milk Chocolate","Praline Hazelnut","Raw Cocoa Nibs","Toasted Coconut"],descriptionAr:"مركبات البيرازين الناتجة عن تفاعلات مايلارد المتزنة؛ قوام مخملي دافئ ونكهات كلاسيكية محببة ومريحة في كل الأوقات.",descriptionEn:"Warm pyrazine-driven nuances from balanced Maillard reactions, producing a comforting nutty and milk chocolate finish.",associatedOrigins:["panama-boquete-pacamara","saudi-asiri"]},{id:"spiced",nameAr:"توابل وأصالة (Spiced & Heritage)",nameEn:"Spiced & Heritage",color:"#5b6e60",lightColor:"rgba(91, 110, 96, 0.12)",subdescriptorsAr:["هيل أخضر بلدي","قرفة سيلانية","قرنفل دافئ","شوكولاتة داكنة 85%","عسل معتق"],subdescriptorsEn:["Green Cardamom","Ceylon Cinnamon","Warm Clove","85% Bittersweet Cacao","Aged Wild Honey"],descriptionAr:"عبق الشرق وتاريخ القهوة الجزيرية؛ نكهات ترابية بهارية أصيلة مع الشوكولاتة الداكنة الكثيفة كالمحاصيل اليمنية الجبلية.",descriptionEn:"The mythical soul of ancient Arabian coffee terroirs; exotic cardamom, cinnamon spice, and dense bittersweet cocoa.",associatedOrigins:["yemen-harazi","saudi-asiri"]}],q=[{key:"acidity",nameAr:"الحموضة والفاكهية",nameEn:"Acidity & Brightness",descriptionAr:"حيوية الكوب وانتعاشه الفاكهي النظيف المشابه للتفاح والحمضيات النبيلة.",descriptionEn:"The sparkling, refreshing fruit-like quality that enlivens the cup."},{key:"sweetness",nameAr:"الحلاوة الطبيعية",nameEn:"Natural Sweetness",descriptionAr:"تركيز السكريات المكرملة وعسل السدر التي توازن الحموضة وتمنح رضى تاماً.",descriptionEn:"The perception of sweet caramel, honey and fruit sucrose on the tongue."},{key:"body",nameAr:"القوام والامتلاء",nameEn:"Body & Mouthfeel",descriptionAr:"ملمس القهوة على اللسان وثقلها اللمسي، من الحريري الخفيف حتى الكثيف المخملي.",descriptionEn:"The tactile weight and viscosity of the beverage on the palate."},{key:"aroma",nameAr:"العطرية والفوحان",nameEn:"Aroma & Fragrance",descriptionAr:"المركبات الطيارة الفائقة التي تملأ الأجواء عند الطحن والترطيب، كالياسمين والزهور.",descriptionEn:"Volatile aromatics sensed by the olfactory bulb during brewing and sipping."},{key:"aftertaste",nameAr:"الخاتمة وثبات النكهة",nameEn:"Finish & Aftertaste",descriptionAr:"طول وجمال انطباع النكهة المتبقية في الفم بعد بلع الرشفة وثباتها العطري.",descriptionEn:"The length, pleasantness and resonant echo lingering after the sip is swallowed."}];class ne{constructor(){g(this,"selectedBeanId","saudi-khawlani");g(this,"activeCategoryFilter",null)}setBean(t){C.some(e=>e.id===t)&&(this.selectedBeanId=t,this.reRender())}getSelectedBean(){return C.find(t=>t.id===this.selectedBeanId)||C[0]}render(){const e=w()==="ar",i=this.getSelectedBean(),a=this.activeCategoryFilter?C.filter(r=>r.primaryFlavorGroup===this.activeCategoryFilter):C,s=O.find(r=>r.id===this.activeCategoryFilter);return`
      <section id="flavor-radar" class="flavor-radar-section">
        <div class="section-header">
          <div class="header-pre">${e?"التحليل الحسي والتقييم العالمي":"SCA Sensory Analytics"}</div>
          <h2 class="section-title">${l("sensoryWheelTitle")}</h2>
          <p class="section-desc">${l("sensoryWheelSubtitle")}</p>
        </div>

        <!-- Flavor Clusters Filter Pills -->
        <div class="flavor-clusters-row">
          <button type="button" class="cluster-pill ${this.activeCategoryFilter?"":"active"}" data-cat="all">
            <span>${e?"كافة المجموعات":"All Clusters"}</span>
          </button>
          ${O.map(r=>`
            <button type="button" class="cluster-pill ${this.activeCategoryFilter===r.id?"active":""}" data-cat="${r.id}" style="--cat-accent: ${r.color}">
              <span class="cluster-dot" style="background-color: ${r.color}"></span>
              <span>${e?r.nameAr:r.nameEn}</span>
            </button>
          `).join("")}
        </div>

        ${s?`
          <div class="cat-callout-banner" style="border-right-color: ${s.color}; border-left-color: ${s.color};">
            <h4 style="color: ${s.color}">${e?s.nameAr:s.nameEn}</h4>
            <p>${e?s.descriptionAr:s.descriptionEn}</p>
            <div class="subdescriptors-tags">
              ${(e?s.subdescriptorsAr:s.subdescriptorsEn).map(r=>`
                <span class="subtag">${r}</span>
              `).join("")}
            </div>
          </div>
        `:""}

        <div class="radar-content-grid">
          <!-- Canvas Spider Radar -->
          <div class="radar-canvas-card">
            <div class="radar-card-top">
              <div class="crop-select-row">
                <label for="radar-crop-select">${e?"المحصول المعروض بالرادار:":"Visualized Crop:"}</label>
                <select id="radar-crop-select" class="luxury-select">
                  ${C.map(r=>`
                    <option value="${r.id}" ${r.id===this.selectedBeanId?"selected":""}>
                      ${e?r.nameAr:r.nameEn} (${r.altitude}m)
                    </option>
                  `).join("")}
                </select>
              </div>
            </div>

            <div class="canvas-container">
              <canvas id="scaRadarCanvas" width="500" height="420" class="radar-canvas" aria-label="SCA Radar Chart"></canvas>
            </div>

            <!-- Sensory Axis Metric Values -->
            <div class="axes-badges-row">
              ${q.map(r=>{const n=i.sensoryScores[r.key];return`
                  <div class="axis-badge">
                    <span class="axis-badge-title">${e?r.nameAr:r.nameEn}</span>
                    <span class="axis-badge-val">${n} / 5</span>
                  </div>
                `}).join("")}
            </div>
          </div>

          <!-- Bean Sensory Profile Details -->
          <div class="bean-sensory-card">
            <div class="bean-meta-header">
              <div class="meta-tag-pill">${e?i.regionAr:i.regionEn}</div>
              <h3 class="bean-title">${e?i.nameAr:i.nameEn}</h3>
              <div class="farm-line">${e?i.farmAr:i.farmEn}</div>
            </div>

            <p class="bean-desc-text">${e?i.descriptionAr:i.descriptionEn}</p>

            <div class="tasting-notes-box">
              <div class="box-heading">${e?"الإيحاءات الحسية البارزة":"Prominent Cup Notes"}</div>
              <div class="notes-pills-row">
                ${(e?i.tastingNotesAr:i.tastingNotesEn).map(r=>`
                  <span class="cup-note-pill">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="pill-icon"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    ${r}
                  </span>
                `).join("")}
              </div>
            </div>

            <div class="bean-specs-grid">
              <div class="spec-cell">
                <span class="spec-label">${e?"الارتفاع":"Elevation"}</span>
                <span class="spec-value">${i.altitude} ${l("altitudeMeter")}</span>
              </div>
              <div class="spec-cell">
                <span class="spec-label">${e?"المعالجة":"Processing"}</span>
                <span class="spec-value">${e?i.processingAr:i.processingEn}</span>
              </div>
              <div class="spec-cell">
                <span class="spec-label">${e?"السلالة":"Varietal"}</span>
                <span class="spec-value">${e?i.varietalAr:i.varietalEn}</span>
              </div>
              <div class="spec-cell">
                <span class="spec-label">${e?"طرق التحضير الموصى بها":"Brewing Match"}</span>
                <span class="spec-value text-amber">${i.recommendedMethods.map(r=>r.toUpperCase()).join(" • ")}</span>
              </div>
            </div>

            <!-- Quick Action Buttons -->
            <div class="bean-actions-row">
              <button type="button" class="btn btn-primary" data-radar-brew="${i.id}">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16l-5 9v5l-3 2v-7L4 4z"/></svg>
                ${l("viewInLab")}
              </button>
              <a href="#origins-atlas" class="btn btn-outline">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
                ${e?"استعراض في الأطلس":"View in Atlas"}
              </a>
            </div>
          </div>
        </div>

        <!-- Matched Crops Carousel / Grid -->
        <div class="matched-crops-block">
          <h4 class="matched-crops-title">
            ${this.activeCategoryFilter?e?`محاصيل تنتمي إلى تصنيف: ${s?s.nameAr:""}`:`Crops in ${s?s.nameEn:""} Cluster`:e?"استكشف كافة السلالات عبر الرادار":"Explore All Heirlooms on the Radar"}
          </h4>
          <div class="matched-beans-scroll">
            ${a.map(r=>`
              <div class="matched-bean-chip ${r.id===this.selectedBeanId?"active":""}" data-select-bean="${r.id}">
                <div class="chip-flag">${r.isSaudi?"🇸🇦":"🌍"}</div>
                <div class="chip-info">
                  <div class="chip-name">${e?r.nameAr:r.nameEn}</div>
                  <div class="chip-notes">${(e?r.tastingNotesAr:r.tastingNotesEn).slice(0,2).join(" • ")}</div>
                </div>
                <div class="chip-score">${Math.round((r.sensoryScores.acidity+r.sensoryScores.sweetness+r.sensoryScores.aroma+r.sensoryScores.body+r.sensoryScores.aftertaste)/5*10)/10}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `}bindEvents(t,e){const i=t.querySelector("#radar-crop-select");i&&i.addEventListener("change",a=>{this.selectedBeanId=a.target.value,this.reRender()}),t.querySelectorAll(".cluster-pill").forEach(a=>{a.addEventListener("click",s=>{const r=s.currentTarget.getAttribute("data-cat");if(r==="all")this.activeCategoryFilter=null;else{this.activeCategoryFilter=r;const n=C.filter(c=>c.primaryFlavorGroup===r);n.length>0&&!n.some(c=>c.id===this.selectedBeanId)&&(this.selectedBeanId=n[0].id)}this.reRender()})}),t.querySelectorAll("[data-select-bean]").forEach(a=>{a.addEventListener("click",s=>{const r=s.currentTarget.getAttribute("data-select-bean");r&&(this.selectedBeanId=r,this.reRender())})}),t.querySelectorAll("[data-radar-brew]").forEach(a=>{a.addEventListener("click",s=>{const r=s.currentTarget.getAttribute("data-radar-brew"),n=C.find(c=>c.id===r);if(n&&e){e(n);const c=document.querySelector("#brewing-lab");c&&c.scrollIntoView({behavior:"smooth"})}})}),this.drawRadarChart()}drawRadarChart(){const t=document.querySelector("#scaRadarCanvas");if(!t)return;const e=t.getContext("2d");if(!e)return;const i=window.devicePixelRatio||1,a=500,s=420;t.width=a*i,t.height=s*i,t.style.width=`${a}px`,t.style.height=`${s}px`,e.scale(i,i);const r=a/2,n=s/2+10,c=135,o=this.getSelectedBean(),h=w()==="ar";e.clearRect(0,0,a,s);const m=5,f=q.length,u=Math.PI*2/f;for(let p=1;p<=m;p++){const b=c/m*p;e.beginPath();for(let y=0;y<f;y++){const E=y*u-Math.PI/2,T=r+Math.cos(E)*b,x=n+Math.sin(E)*b;y===0?e.moveTo(T,x):e.lineTo(T,x)}e.closePath(),e.strokeStyle=p===m?"rgba(194, 109, 74, 0.35)":"rgba(194, 109, 74, 0.15)",e.lineWidth=p===m?1.5:1,e.stroke(),e.fillStyle="rgba(194, 109, 74, 0.55)",e.font="10px Inter, sans-serif",e.fillText(String(p),r+4,n-b+3)}for(let p=0;p<f;p++){const b=p*u-Math.PI/2,y=r+Math.cos(b)*c,E=n+Math.sin(b)*c;e.beginPath(),e.moveTo(r,n),e.lineTo(y,E),e.strokeStyle="rgba(194, 109, 74, 0.25)",e.lineWidth=1,e.stroke();const T=q[p],x=c+28,U=r+Math.cos(b)*x,Q=n+Math.sin(b)*x;e.fillStyle="#1c140e";const Y=document.body.classList.contains("theme-dark");e.fillStyle=Y?"#f3eee8":"#1c140e",e.font="bold 12px Cairo, Tajawal, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(h?T.nameAr:T.nameEn,U,Q)}e.beginPath();const v=[o.sensoryScores.acidity,o.sensoryScores.sweetness,o.sensoryScores.body,o.sensoryScores.aroma,o.sensoryScores.aftertaste];for(let p=0;p<f;p++){const b=v[p],y=c/5*b,E=p*u-Math.PI/2,T=r+Math.cos(E)*y,x=n+Math.sin(E)*y;p===0?e.moveTo(T,x):e.lineTo(T,x)}e.closePath();const A=e.createRadialGradient(r,n,10,r,n,c);A.addColorStop(0,"rgba(217, 119, 6, 0.45)"),A.addColorStop(1,"rgba(194, 109, 74, 0.2)"),e.fillStyle=A,e.fill(),e.strokeStyle="#c26d4a",e.lineWidth=2.5,e.stroke();for(let p=0;p<f;p++){const b=v[p],y=c/5*b,E=p*u-Math.PI/2,T=r+Math.cos(E)*y,x=n+Math.sin(E)*y;e.beginPath(),e.arc(T,x,5,0,Math.PI*2),e.fillStyle="#d97706",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=2,e.stroke()}}reRender(){const t=document.querySelector("#flavor-radar-container");t&&(t.innerHTML=this.render(),this.bindEvents(t))}}const P=new ne,R=[{id:"whole-bean",nameAr:"حبوب كاملة (Whole Bean)",nameEn:"Whole Bean"},{id:"v60",nameAr:"طحنة ترشيح V60 (متوسطة النعومة)",nameEn:"V60 Pour-Over"},{id:"espresso",nameAr:"طحنة إسبريسو احترافية (ناعمة جداً)",nameEn:"Espresso (Fine)"},{id:"chemex",nameAr:"طحنة كمكس (متوسطة الخشونة)",nameEn:"Chemex (Med-Coarse)"},{id:"aeropress",nameAr:"طحنة إيروبرس (متوسطة ناعمة)",nameEn:"AeroPress"},{id:"frenchpress",nameAr:"طحنة مكبس فرنسي (خشنة)",nameEn:"French Press"},{id:"coldbrew",nameAr:"طحنة ترشيح بارد (خشنة جداً)",nameEn:"Cold Brew"}],H=[{id:"prod-khawlani",type:"beans",nameAr:"محصول خولاني جازان الفاخر (250 جم)",nameEn:"Khawlani Reserve 250g",categoryAr:"محاصيل البُن التراثي",categoryEn:"Heritage Coffee Lot",price:95,imageSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"/><path d="M12 9a3 3 0 0 0-3 3c0 2 3 5 3 5s3-3 3-5a3 3 0 0 0-3-3z"/></svg>',descriptionAr:"محصول ياسمين وتين وعسل سدر من قمم فيفاء والداير في جازان، محمص حرفياً في محمصة سُلالة.",descriptionEn:"Fragrant jasmine, dried fig and Sidr honey from high peaks of Jazan, micro-roasted with care.",badgeAr:"الأكثر طلباً",badgeEn:"Best Seller",inStock:!0,beanId:"saudi-khawlani",grindOptionsAvailable:!0},{id:"prod-asiri",type:"beans",nameAr:"محصول عسيري المرتفعات النبيلة (250 جم)",nameEn:"Asiri Highlands Gold 250g",categoryAr:"محاصيل البُن التراثي",categoryEn:"Heritage Coffee Lot",price:88,imageSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="9" x2="12" y2="15"/></svg>',descriptionAr:"معالجة عسلية برائحة كراميل الدبس والمشمش المجفف ولمسة الكاكاو الفاخر.",descriptionEn:"Honey processed high altitude cup bursting with date caramel, dried apricot and cocoa.",badgeAr:"إصدار موسمي",badgeEn:"Seasonal Lot",inStock:!0,beanId:"saudi-asiri",grindOptionsAvailable:!0},{id:"prod-geisha",type:"beans",nameAr:"محصول كولومبيا غيشا فينكا الفاخرة (250 جم)",nameEn:"Colombia Geisha Finca Paraiso 250g",categoryAr:"محاصيل البطولات الدولية",categoryEn:"Competition Lot",price:130,imageSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"/><path d="M12 8l2 3 3 1-2.5 2.5.5 3.5-3-1.8-3 1.8.5-3.5L7 12l3-1z"/></svg>',descriptionAr:"صدمة حرارية تخمير لاهوائي مزدوج، إيحاءات زهر البرتقال والمانجو وقوام حريري مذهل.",descriptionEn:"Thermal shock double anaerobic process. Notes of orange blossom, tropical mango, and silk.",badgeAr:"تقييم 91+ SCA",badgeEn:"SCA 91+ Cup",inStock:!0,beanId:"colombia-geisha-finca",grindOptionsAvailable:!0},{id:"prod-yemen",type:"beans",nameAr:"محصول اليمن حرازي العقيق الأسود (250 جم)",nameEn:"Yemen Harazi Black Agate 250g",categoryAr:"محاصيل البُن التراثي",categoryEn:"Heritage Coffee Lot",price:110,imageSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"/><path d="M9 10h6v6H9z"/></svg>',descriptionAr:"من مدرجات حراز الأسطورية على ارتفاع 2250 متر؛ شوكولاتة داكنة وهيل وتين مجفف.",descriptionEn:"Historic stone terraces at 2250m. Pure dark chocolate, wild cardamom and dried fig.",inStock:!0,beanId:"yemen-harazi",grindOptionsAvailable:!0},{id:"prod-flight-box",type:"sample_box",nameAr:"صندوق تذوق سُلالة الرباعي الفاخر (4 × 100 جم)",nameEn:"Sulalah Discovery Tasting Flight (4 x 100g)",categoryAr:"مجموعات التذوق",categoryEn:"Tasting Collections",price:155,imageSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="12" y1="4" x2="12" y2="20"/><line x1="3" y1="12" x2="21" y2="12"/></svg>',descriptionAr:"رحلة حسية كاملة تضم 4 عبوات تجريبية: خولاني جازان، عسيري، غيشا كولومبيا، ويرغاتشيف إثيوبيا مع دليل التذوق والحصاد.",descriptionEn:"The ultimate sensory discovery flight: Khawlani, Asiri, Geisha, and Yirgacheffe with custom tasting guide.",badgeAr:"هدية الباريستا المثالية",badgeEn:"Barista Gift Choice",inStock:!0,grindOptionsAvailable:!0},{id:"prod-gear-scale",type:"gear",nameAr:"ميزان سُلالة الذكي فائق الدقة (0.1 جم + مؤقت تلقائي)",nameEn:"Sulalah Precision Smart Barista Scale",categoryAr:"معدات الباريستا الاحترافية",categoryEn:"Barista Precision Gear",price:185,imageSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="12" cy="12" r="5"/><line x1="12" y1="9" x2="12" y2="12"/></svg>',descriptionAr:"استجابة فائقة السرعة بدون أي تأخير، مؤقت صب تلقائي، شحن تايب سي، وسطح مضاد لرذاذ الماء والحرارة.",descriptionEn:"Ultra-fast 0.1g resolution, auto-flow timer, USB-C recharge, water and heat resistant silicon pad.",badgeAr:"معدات مختبر",badgeEn:"Lab Equipment",inStock:!0,grindOptionsAvailable:!1},{id:"prod-gear-kettle",type:"gear",nameAr:"إبريق الترشيح الإلكتروني عنق الإوزة (تحكم رقمي بالحرارة)",nameEn:"Precision Gooseneck Variable Temp Kettle",categoryAr:"معدات الباريستا الاحترافية",categoryEn:"Barista Precision Gear",price:260,imageSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 8h14l-2 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 8z"/><path d="M5 8a4 4 0 0 1-4-4V3h5"/><path d="M19 11a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4"/></svg>',descriptionAr:"عنق إوزة مائل بتدفق عمودي 90 درجة، تثبيت للحرارة حتى 60 دقيقة بدقة نصف درجة، سعة 900 مل.",descriptionEn:"Precision 90-degree laminar gooseneck spout, +/-0.5°C digital PID stability, 900ml capacity.",inStock:!0,grindOptionsAvailable:!1},{id:"prod-gear-wdt",type:"gear",nameAr:"طقم استخلاص الإسبريسو (أداة WDT إبرية + مكبس نابض)",nameEn:"Espresso Extraction Tuning Kit (WDT + Tamper)",categoryAr:"معدات الباريستا الاحترافية",categoryEn:"Barista Precision Gear",price:120,imageSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="7" r="4"/><path d="M8 11v8a4 4 0 0 0 8 0v-8"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',descriptionAr:"إبر ستانلس ستيل فائقة النحافة 0.35 مم لتفتيت التكتلات مع مكبس ميكانيكي بقوة كبس ثابتة 30 رطلاً لمنع القنوات المائية.",descriptionEn:"0.35mm ultra-fine needles for clump declumping paired with a calibrated 30lb spring tamper.",inStock:!0,grindOptionsAvailable:!1}];class oe{constructor(){g(this,"activeFilter","all")}render(){const e=w()==="ar",i=C.filter(a=>this.activeFilter==="saudi"?a.isSaudi:this.activeFilter==="washed"?a.processingType==="washed":this.activeFilter==="natural"?a.processingType==="natural":this.activeFilter==="anaerobic"?a.processingType==="anaerobic":!0);return`
      <section id="origins-atlas" class="origins-atlas-section">
        <div class="section-header">
          <div class="header-pre">${e?"رحلة الجغرافيا والتضاريس":"Terroir & Provenance"}</div>
          <h2 class="section-title">${l("atlasTitle")}</h2>
          <p class="section-desc">${l("atlasSubtitle")}</p>
        </div>

        <!-- Filter Tabs -->
        <div class="atlas-filters-bar">
          <button type="button" class="filter-btn ${this.activeFilter==="all"?"active":""}" data-atlas-filter="all">
            ${l("filterAll")}
          </button>
          <button type="button" class="filter-btn ${this.activeFilter==="saudi"?"active":""}" data-atlas-filter="saudi">
            <span class="flag-icon">🇸🇦</span>
            ${l("filterSaudi")}
          </button>
          <button type="button" class="filter-btn ${this.activeFilter==="washed"?"active":""}" data-atlas-filter="washed">
            ${l("filterWashed")}
          </button>
          <button type="button" class="filter-btn ${this.activeFilter==="natural"?"active":""}" data-atlas-filter="natural">
            ${l("filterNatural")}
          </button>
          <button type="button" class="filter-btn ${this.activeFilter==="anaerobic"?"active":""}" data-atlas-filter="anaerobic">
            ${l("filterAnaerobic")}
          </button>
        </div>

        <!-- Crops Cards Grid -->
        <div class="atlas-cards-grid">
          ${i.map(a=>{const s=H.find(r=>r.beanId===a.id);return`
              <article class="crop-atlas-card ${a.isSaudi?"saudi-highlight":""}">
                <div class="crop-card-top">
                  <div class="top-badges-row">
                    ${a.isSaudi?`
                      <span class="badge-heritage">
                        <span class="star-icon">★</span>
                        ${e?"تراث وطني أصيل":"Saudi Heirloom"}
                      </span>
                    `:`
                      <span class="badge-origin">${e?a.originAr:a.originEn}</span>
                    `}
                    ${a.badgeAr?`
                      <span class="badge-accent">${e?a.badgeAr:a.badgeEn}</span>
                    `:""}
                  </div>
                  <span class="altitude-pill">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="alt-icon"><path d="M2 20h20L12 4z"/></svg>
                    ${a.altitude}m
                  </span>
                </div>

                <div class="crop-header-block">
                  <span class="crop-region-label">${e?a.regionAr:a.regionEn}</span>
                  <h3 class="crop-name">${e?a.nameAr:a.nameEn}</h3>
                  <div class="crop-farm">${e?a.farmAr:a.farmEn}</div>
                </div>

                <p class="crop-summary">${e?a.descriptionAr:a.descriptionEn}</p>

                <!-- Sensory Notes Chips -->
                <div class="tasting-tags-wrap">
                  ${(e?a.tastingNotesAr:a.tastingNotesEn).map(r=>`
                    <span class="atlas-note-tag">${r}</span>
                  `).join("")}
                </div>

                <!-- Technical Specs Row -->
                <div class="crop-specs-strip">
                  <div class="spec-node">
                    <span class="spec-k">${e?"المعالجة":"Process"}</span>
                    <span class="spec-v">${e?a.processingAr:a.processingEn}</span>
                  </div>
                  <div class="spec-node">
                    <span class="spec-k">${e?"السلالة":"Varietal"}</span>
                    <span class="spec-v">${e?a.varietalAr:a.varietalEn}</span>
                  </div>
                  <div class="spec-node">
                    <span class="spec-k">${e?"التحميص":"Roast"}</span>
                    <span class="spec-v">${e?a.roastLevelAr:a.roastLevelEn}</span>
                  </div>
                </div>

                <!-- Footer Action Buttons -->
                <div class="crop-card-actions">
                  <button type="button" class="btn btn-outline btn-sm" data-atlas-brew="${a.id}">
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16l-5 9v5l-3 2v-7L4 4z"/></svg>
                    ${l("viewInLab")}
                  </button>
                  <button type="button" class="btn btn-outline btn-sm" data-atlas-radar="${a.id}">
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
                    ${l("exploreSensory")}
                  </button>
                  ${s?`
                    <button type="button" class="btn btn-primary btn-sm" data-atlas-buy="${s.id}">
                      <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                      ${a.price} ${l("sar")}
                    </button>
                  `:""}
                </div>
              </article>
            `}).join("")}
        </div>
      </section>
    `}bindEvents(t,e,i,a){t.querySelectorAll("[data-atlas-filter]").forEach(s=>{s.addEventListener("click",r=>{const n=r.currentTarget.getAttribute("data-atlas-filter");n&&(this.activeFilter=n,this.reRender(t,e,i,a))})}),t.querySelectorAll("[data-atlas-brew]").forEach(s=>{s.addEventListener("click",r=>{const n=r.currentTarget.getAttribute("data-atlas-brew"),c=C.find(o=>o.id===n);if(c){e(c);const o=document.querySelector("#brewing-lab");o&&o.scrollIntoView({behavior:"smooth"})}})}),t.querySelectorAll("[data-atlas-radar]").forEach(s=>{s.addEventListener("click",r=>{const n=r.currentTarget.getAttribute("data-atlas-radar");if(n){i(n);const c=document.querySelector("#flavor-radar");c&&c.scrollIntoView({behavior:"smooth"})}})}),t.querySelectorAll("[data-atlas-buy]").forEach(s=>{s.addEventListener("click",r=>{const n=r.currentTarget.getAttribute("data-atlas-buy");n&&a(n)})})}reRender(t,e,i,a){const s=document.querySelector("#origins-atlas-container");s&&(s.innerHTML=this.render(),this.bindEvents(s,e,i,a))}}const N=new oe,I={sca_ideal:{nameAr:"معيار الجمعية العالمية للقهوة (SCA Gold Standard)",nameEn:"SCA Benchmark Target",profile:{tds:150,gh:68,kh:40,ph:7}},third_wave:{nameAr:"مياه ويف ثيرد كلاسيك (Third Wave Mineral Blend)",nameEn:"Third Wave Mineral Water",profile:{tds:145,gh:75,kh:35,ph:7.1}},soft_volcanic:{nameAr:"مياه ينابيع بركانية ناعمة (Soft Highland Spring)",nameEn:"Soft Highland Spring Water",profile:{tds:85,gh:48,kh:28,ph:6.8}},tap_water:{nameAr:"مياه الصنبور غير المفلترة (Municipal Tap Water)",nameEn:"Unfiltered Municipal Tap",profile:{tds:320,gh:190,kh:110,ph:7.8}},ro_distilled:{nameAr:"مياه التناضح العكسي الخالية (Zero RO / Distilled)",nameEn:"Pure Zero RO / Distilled",profile:{tds:8,gh:4,kh:4,ph:6.2}}};function le(d){const{tds:t,gh:e,kh:i,ph:a}=d;let s=0;t<75?s+=Math.min(35,(75-t)*.5):t>250?s+=Math.min(35,(t-250)*.25):s+=Math.abs(t-150)*.08,e<50?s+=Math.min(25,(50-e)*.5):e>175?s+=Math.min(30,(e-175)*.3):s+=Math.abs(e-68)*.12,i<30?s+=Math.min(25,(30-i)*.6):i>75?s+=Math.min(35,(i-75)*.5):s+=Math.abs(i-40)*.15,a<6.5?s+=(6.5-a)*20:a>7.5&&(s+=(a-7.5)*25);const r=Math.max(10,Math.min(100,Math.round(100-s)));let n="ideal",c="ماء متوازن ومثالي (SCA Golden Extraction)",o="SCA Golden Extraction Zone",h="status-ideal",m="محتوى أملاح وعسر متناسق جداً؛ يذيب الأحماض الفاكهية والسكريات العطرية بأعلى كفاءة دون ترسبات.",f="Exceptional mineral harmony. Maximizes floral and citric extraction yield with optimal sweetness.";const u=[],v=[];t<40||e<25?(n="flat_empty",c="ماء مفرغ / فقير بالأملاح (Flat & Under-Extracting)",o="Flat & Mineral-Deficient",h="status-warning",m="نقص حاد في أيونات الكالسيوم والمغنيسيوم؛ الماء يفتقر للقدرة على التقاط مركبات النكهة، مما ينتج كوباً باهتاً وحاد الحموضة المزعجة.",u.push("أضف أملاح مغنيسيوم (كبريتات المغنيسيوم Epsom Salt) لتعزيز الإيحاءات الفاكهية."),u.push("ارفع القلوية قليلاً عبر كمية ضئيلة من بيكربونات الصوديوم."),v.push("Dose food-grade magnesium sulfate (Epsom salt) to bind bright fruit acids."),v.push("Add a pinch of sodium bicarbonate to lift alkalinity buffer.")):i>85||a>7.6?(n="sour_risk",c="قلوية مرتفعة تمحو النكهات (High Alkalinity Buffer)",o="Excess Buffer / Muted Acidity",h="status-danger",m="القلوية العالية (KH) تعمل كدرع إسفنجي يبتلع ويحيّد حموضة القهوة الزاهية، مما يحول المحاصيل الفاخرة إلى مذاق طباشيري مسطح وممل.",u.push("خفف الماء بنسبة 40% من مياه منزوعة المعادن (RO) لخفض القلوية."),u.push("استخدم فلاتر تقليل العسر الكربوني (Ion Exchange Filters)."),v.push("Dilute brew water 40% with pure RO water to reduce bicarbonate."),v.push("Deploy decarbonizing weak-acid ion-exchange filter.")):t>260||e>180?(n="bitter_risk",c="عسر زائد وخطر مرارة وترسبات (Over-Extraction Risk)",o="Excess Hardness & Bitterness",h="status-danger",m="كثرة الأملاح تعوق تدفق الماء وتستخلص المركبات الثقيلة المرة غير المحببة، كما تهدد بتكوين كلس وترسبات داخل الغلايات.",u.push("قم بتركيب وحدة تناضح عكسي (RO) مع صمام خلط (Remineralization Blending)."),u.push("نظف أدوات وغلايات التحضير بانتظام لإزالة ترسبات الكالسيوم."),v.push("Install a reverse osmosis unit with blending bypass."),v.push("Perform periodic descaling of kettle heating elements.")):(u.push("درجة مثالية! حافظ على استقرار فلتر الكربون ومصدر المياه الحالي."),u.push("مثالي لجميع محاصيل الفلتر والإسبريسو الحرفي."),v.push("Optimal calibration. Maintain filter cartridges regularly."),v.push("Suited for competition pour-overs and specialty espresso."));const A=e>0?Math.round(i/e*100)/100:.5;return{score:r,status:n,statusAr:c,statusEn:o,badgeClass:h,explanationAr:m,explanationEn:f,recommendationsAr:u,recommendationsEn:v,calciumPct:Math.round(e*.6*10)/10,magnesiumPct:Math.round(e*.4*10)/10,bufferRatio:A}}class ce{constructor(){g(this,"currentProfile",{tds:150,gh:68,kh:40,ph:7})}render(){const e=w()==="ar",i=le(this.currentProfile);return`
      <section id="water-chemistry" class="water-chem-section">
        <div class="section-header">
          <div class="header-pre">${e?"علوم المذيبات والمعادن":"Extraction Solvent Chemistry"}</div>
          <h2 class="section-title">${l("waterTitle")}</h2>
          <p class="section-desc">${l("waterSubtitle")}</p>
        </div>

        <!-- Presets Row -->
        <div class="water-presets-bar">
          <span class="preset-label">${e?"نماذج مياه شائعة:":"Quick Benchmark Profiles:"}</span>
          ${Object.entries(I).map(([a,s])=>`
              <button type="button" class="water-preset-btn ${this.currentProfile.tds===s.profile.tds&&this.currentProfile.gh===s.profile.gh?"active":""}" data-water-preset="${a}">
                ${e?s.nameAr:s.nameEn}
              </button>
            `).join("")}
        </div>

        <div class="water-layout-grid">
          <!-- Parameter Sliders Card -->
          <div class="water-controls-card">
            <h3 class="card-title">${e?"معايرة أيونات الماء الحالية":"Water Mineral Ion Controls"}</h3>

            <!-- TDS Slider -->
            <div class="water-slider-group">
              <div class="label-row">
                <label for="tds-slider">${l("waterTDS")}</label>
                <div class="val-pill">${this.currentProfile.tds} ppm</div>
              </div>
              <input type="range" id="tds-slider" min="0" max="450" step="1" value="${this.currentProfile.tds}" class="water-range" />
              <div class="scale-benchmark">
                <span>0</span>
                <span class="target-marker">${e?"هدف SCA: 150":"SCA: 150"}</span>
                <span>450</span>
              </div>
            </div>

            <!-- GH Slider -->
            <div class="water-slider-group">
              <div class="label-row">
                <label for="gh-slider">${l("waterGH")}</label>
                <div class="val-pill">${this.currentProfile.gh} ppm</div>
              </div>
              <input type="range" id="gh-slider" min="0" max="250" step="1" value="${this.currentProfile.gh}" class="water-range" />
              <div class="scale-benchmark">
                <span>0</span>
                <span class="target-marker">${e?"هدف SCA: 68":"SCA: 68"}</span>
                <span>250</span>
              </div>
            </div>

            <!-- KH Slider -->
            <div class="water-slider-group">
              <div class="label-row">
                <label for="kh-slider">${l("waterKH")}</label>
                <div class="val-pill">${this.currentProfile.kh} ppm</div>
              </div>
              <input type="range" id="kh-slider" min="0" max="150" step="1" value="${this.currentProfile.kh}" class="water-range" />
              <div class="scale-benchmark">
                <span>0</span>
                <span class="target-marker">${e?"هدف SCA: 40":"SCA: 40"}</span>
                <span>150</span>
              </div>
            </div>

            <!-- pH Slider -->
            <div class="water-slider-group">
              <div class="label-row">
                <label for="ph-slider">${l("waterPH")}</label>
                <div class="val-pill">${this.currentProfile.ph}</div>
              </div>
              <input type="range" id="ph-slider" min="5.5" max="8.5" step="0.1" value="${this.currentProfile.ph}" class="water-range" />
              <div class="scale-benchmark">
                <span>5.5</span>
                <span class="target-marker">${e?"متعادل: 7.0":"Neutral: 7.0"}</span>
                <span>8.5</span>
              </div>
            </div>
          </div>

          <!-- Diagnostic Results Card -->
          <div class="water-results-card">
            <div class="score-display-block">
              <div class="score-circle-wrap">
                <svg viewBox="0 0 120 120" class="score-svg-circle">
                  <circle cx="60" cy="60" r="50" stroke="rgba(194, 109, 74, 0.15)" stroke-width="10" fill="none" />
                  <circle cx="60" cy="60" r="50" 
                    stroke="${i.score>=80?"#10b981":i.score>=50?"#f59e0b":"#ef4444"}" 
                    stroke-width="10" 
                    stroke-dasharray="314.15" 
                    stroke-dashoffset="${314.15-314.15*i.score/100}" 
                    stroke-linecap="round" 
                    fill="none" 
                    transform="rotate(-90 60 60)" />
                </svg>
                <div class="score-center-text">
                  <span class="score-num">${i.score}</span>
                  <span class="score-denom">/ 100</span>
                </div>
              </div>

              <div class="score-verdict">
                <span class="verdict-label">${l("waterStatus")}</span>
                <h4 class="verdict-title ${i.badgeClass}">
                  ${e?i.statusAr:i.statusEn}
                </h4>
                <p class="verdict-desc">${e?i.explanationAr:i.explanationEn}</p>
              </div>
            </div>

            <!-- Mineral Composition Breakdown -->
            <div class="mineral-breakdown-box">
              <h5 class="box-sub">${e?"توزيع الأيونات التقديري":"Estimated Ion Distribution"}</h5>
              <div class="mineral-bars-list">
                <div class="m-bar-row">
                  <span class="m-name">${e?"أيونات الكالسيوم (Ca2+) - القوام":"Calcium (Ca2+) - Body"}</span>
                  <div class="m-track">
                    <div class="m-fill" style="width: ${Math.min(100,i.calciumPct/100*100)}%; background-color: #d97706;"></div>
                  </div>
                  <span class="m-val">${i.calciumPct} ppm</span>
                </div>
                <div class="m-bar-row">
                  <span class="m-name">${e?"أيونات المغنيسيوم (Mg2+) - الحموضة":"Magnesium (Mg2+) - Acidity"}</span>
                  <div class="m-track">
                    <div class="m-fill" style="width: ${Math.min(100,i.magnesiumPct/100*100)}%; background-color: #c26d4a;"></div>
                  </div>
                  <span class="m-val">${i.magnesiumPct} ppm</span>
                </div>
                <div class="m-bar-row">
                  <span class="m-name">${e?"نسبة الدرء القلوي (KH / GH)":"Buffer Ratio (KH/GH)"}</span>
                  <div class="m-track">
                    <div class="m-fill" style="width: ${Math.min(100,i.bufferRatio*100)}%; background-color: #5b6e60;"></div>
                  </div>
                  <span class="m-val">${i.bufferRatio}</span>
                </div>
              </div>
            </div>

            <!-- Barista Lab Recommendations -->
            <div class="recommendations-box">
              <h5 class="rec-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="rec-icon"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                ${e?"توصيات خبير كيمياء القهوة":"Master Chemist Recommendations"}
              </h5>
              <ul class="rec-list">
                ${(e?i.recommendationsAr:i.recommendationsEn).map(a=>`
                  <li>${a}</li>
                `).join("")}
              </ul>
            </div>
          </div>
        </div>
      </section>
    `}bindEvents(t){const e=t.querySelector("#tds-slider"),i=t.querySelector("#gh-slider"),a=t.querySelector("#kh-slider"),s=t.querySelector("#ph-slider"),r=()=>{this.currentProfile={tds:parseFloat(e.value),gh:parseFloat(i.value),kh:parseFloat(a.value),ph:parseFloat(s.value)},this.reRender()};e&&e.addEventListener("input",r),i&&i.addEventListener("input",r),a&&a.addEventListener("input",r),s&&s.addEventListener("input",r),t.querySelectorAll("[data-water-preset]").forEach(n=>{n.addEventListener("click",c=>{const o=c.currentTarget.getAttribute("data-water-preset");o&&I[o]&&(this.currentProfile={...I[o].profile},this.reRender())})})}reRender(){const t=document.querySelector("#water-chem-container");t&&(t.innerHTML=this.render(),this.bindEvents(t))}}const W=new ce,D={SULALAH10:{code:"SULALAH10",discountPct:10,descriptionAr:"خصم ترحيبي 10% لرواد سُلالة",descriptionEn:"10% Welcome Studio Discount"},BARISTA20:{code:"BARISTA20",discountPct:20,minSpend:200,descriptionAr:"خصم الباريستا 20% للطلبات فوق 200 ر.س",descriptionEn:"20% Barista Discount on orders 200+ SAR"},KHAWLANI:{code:"KHAWLANI",discountPct:15,descriptionAr:"خصم خاص 15% احتفاءً بالبُن الخولاني",descriptionEn:"15% Khawlani Heritage Honor"}};class de{constructor(){g(this,"items",[]);g(this,"coupon",null);g(this,"listeners",[]);this.loadFromStorage()}loadFromStorage(){try{const t=localStorage.getItem("sulalah_cart_items");t&&(this.items=JSON.parse(t));const e=localStorage.getItem("sulalah_cart_coupon");e&&D[e]&&(this.coupon=D[e])}catch{this.items=[],this.coupon=null}}saveToStorage(){try{localStorage.setItem("sulalah_cart_items",JSON.stringify(this.items)),this.coupon?localStorage.setItem("sulalah_cart_coupon",this.coupon.code):localStorage.removeItem("sulalah_cart_coupon")}catch{}this.notify()}subscribe(t){return this.listeners.push(t),()=>{const e=this.listeners.indexOf(t);e>-1&&this.listeners.splice(e,1)}}notify(){this.listeners.forEach(t=>t())}getItems(){return[...this.items]}getCoupon(){return this.coupon}addItem(t,e,i,a,s=1){const r=`${t.id}_${e}`,n=this.items.find(c=>c.id===r);n?n.quantity+=s:this.items.push({id:r,productId:t.id,product:t,grindId:e,grindNameAr:i,grindNameEn:a,quantity:s,unitPrice:t.price}),this.saveToStorage()}updateQuantity(t,e){const i=this.items.find(a=>a.id===t);if(i){if(i.quantity+=e,i.quantity<=0){this.removeItem(t);return}this.saveToStorage()}}removeItem(t){this.items=this.items.filter(e=>e.id!==t),this.saveToStorage()}clearCart(){this.items=[],this.coupon=null,this.saveToStorage()}applyCoupon(t){const e=t.trim().toUpperCase(),i=D[e];if(!i)return{success:!1,messageAr:"رمز القسيمة غير صالح، جرب SULALAH10 أو KHAWLANI",messageEn:"Invalid coupon code. Try SULALAH10 or KHAWLANI"};const a=this.getItems().reduce((s,r)=>s+r.unitPrice*r.quantity,0);return i.minSpend&&a<i.minSpend?{success:!1,messageAr:`يتطلب هذا الكود طلباً بقيمة ${i.minSpend} ر.س على الأقل`,messageEn:`Requires minimum order of ${i.minSpend} SAR`}:(this.coupon=i,this.saveToStorage(),{success:!0,messageAr:`تم تفعيل ${i.descriptionAr}`,messageEn:`Applied: ${i.descriptionEn}`})}removeCoupon(){this.coupon=null,this.saveToStorage()}getTotals(){const t=this.items.reduce((c,o)=>c+o.unitPrice*o.quantity,0);let e=0;this.coupon&&(!this.coupon.minSpend||t>=this.coupon.minSpend)&&(e=Math.round(t*(this.coupon.discountPct/100)*100)/100);const i=Math.max(0,t-e),a=Math.round(i*.15*100)/100,s=i>200||i===0?0:25,r=Math.round((i+s)*100)/100,n=this.items.reduce((c,o)=>c+o.quantity,0);return{subtotal:t,discountAmount:e,vatAmount:a,shipping:s,grandTotal:r,itemCount:n}}}const S=new de;class pe{constructor(){g(this,"selectedProductModal",null);g(this,"selectedGrindId","whole-bean")}openProductModal(t){const e=H.find(i=>i.id===t);e&&(this.selectedProductModal=e,this.selectedGrindId=e.grindOptionsAvailable?"v60":"whole-bean",this.renderModal())}render(){const e=w()==="ar";return`
      <section id="boutique" class="boutique-section">
        <div class="section-header">
          <div class="header-pre">${e?"المحمصة الحرفية والمقتنيات":"Curated Roastery & Gear"}</div>
          <h2 class="section-title">${l("boutiqueTitle")}</h2>
          <p class="section-desc">${l("boutiqueSubtitle")}</p>
        </div>

        <div class="boutique-products-grid">
          ${H.map(i=>`
            <article class="boutique-card">
              <div class="card-media">
                <div class="product-svg-icon">${i.imageSvg}</div>
                ${i.badgeAr?`
                  <span class="product-badge">${e?i.badgeAr:i.badgeEn}</span>
                `:""}
              </div>

              <div class="card-details">
                <span class="product-category">${e?i.categoryAr:i.categoryEn}</span>
                <h3 class="product-name">${e?i.nameAr:i.nameEn}</h3>
                <p class="product-description">${e?i.descriptionAr:i.descriptionEn}</p>

                <div class="price-action-row">
                  <div class="product-price">
                    <span class="amount">${i.price}</span>
                    <span class="currency">${l("sar")}</span>
                  </div>

                  <button type="button" class="btn btn-primary btn-sm" data-open-product="${i.id}">
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                    ${e?"تخصيص وإضافة":"Customize & Add"}
                  </button>
                </div>
              </div>
            </article>
          `).join("")}
        </div>

        <!-- Product Customization Modal Container -->
        <div id="product-modal-container"></div>
      </section>
    `}renderModal(){const t=document.querySelector("#product-modal-container");if(!t||!this.selectedProductModal)return;const e=this.selectedProductModal,a=w()==="ar";t.innerHTML=`
      <div class="modal-backdrop">
        <div class="modal-dialog">
          <button type="button" class="modal-close-btn" id="close-prod-modal" aria-label="${l("close")}">✕</button>

          <div class="modal-header-block">
            <span class="modal-cat">${a?e.categoryAr:e.categoryEn}</span>
            <h3 class="modal-title">${a?e.nameAr:e.nameEn}</h3>
          </div>

          <p class="modal-desc">${a?e.descriptionAr:e.descriptionEn}</p>

          ${e.grindOptionsAvailable?`
            <div class="modal-form-group">
              <label class="form-label">${l("selectGrind")}</label>
              <div class="grind-options-grid">
                ${R.map(n=>`
                  <label class="grind-radio-card ${this.selectedGrindId===n.id?"active":""}">
                    <input type="radio" name="grind-choice" value="${n.id}" ${this.selectedGrindId===n.id?"checked":""} class="sr-only" />
                    <span class="radio-indicator"></span>
                    <span class="grind-name">${a?n.nameAr:n.nameEn}</span>
                  </label>
                `).join("")}
              </div>
            </div>
          `:""}

          <div class="modal-footer-row">
            <div class="modal-price">
              <span class="num">${e.price}</span>
              <span class="cur">${l("sar")}</span>
            </div>

            <button type="button" class="btn btn-primary" id="confirm-add-cart">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              ${l("addToCart")}
            </button>
          </div>
        </div>
      </div>
    `;const s=t.querySelector("#close-prod-modal");s&&s.addEventListener("click",()=>{this.closeModal()}),t.querySelectorAll('input[name="grind-choice"]').forEach(n=>{n.addEventListener("change",c=>{this.selectedGrindId=c.target.value,this.renderModal()})});const r=t.querySelector("#confirm-add-cart");r&&r.addEventListener("click",()=>{const n=R.find(c=>c.id===this.selectedGrindId)||R[0];S.addItem(e,this.selectedGrindId,n.nameAr,n.nameEn,1),this.closeModal(),this.showToast(a?`تمت إضافة "${e.nameAr}" إلى السلة`:`Added "${e.nameEn}" to bag`)})}closeModal(){this.selectedProductModal=null;const t=document.querySelector("#product-modal-container");t&&(t.innerHTML="")}showToast(t){const e=document.createElement("div");e.className="studio-toast",e.innerHTML=`
      <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${t}</span>
    `,document.body.appendChild(e),setTimeout(()=>{e.classList.add("show")},10),setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>e.remove(),300)},2800)}bindEvents(t){t.querySelectorAll("[data-open-product]").forEach(e=>{e.addEventListener("click",i=>{const a=i.currentTarget.getAttribute("data-open-product");a&&this.openProductModal(a)})})}}const G=new pe;class ue{constructor(){g(this,"isOpen",!1);g(this,"receiptModalData",null);S.subscribe(()=>{this.updateBadge(),this.isOpen&&this.renderDrawer()})}toggle(){this.isOpen=!this.isOpen,this.renderDrawer()}open(){this.isOpen=!0,this.renderDrawer()}close(){this.isOpen=!1,this.renderDrawer()}updateBadge(){const t=document.querySelector("#cart-count-badge");if(t){const e=S.getTotals();t.textContent=String(e.itemCount),t.className=e.itemCount>0?"cart-badge active":"cart-badge"}}renderDrawer(){const t=document.querySelector("#cart-drawer-container");if(!t)return;if(!this.isOpen){t.innerHTML="";return}const e=S.getItems(),i=S.getTotals(),a=S.getCoupon(),r=w()==="ar";t.innerHTML=`
      <div class="drawer-backdrop" id="drawer-backdrop">
        <aside class="cart-slide-drawer">
          <div class="drawer-header">
            <div class="drawer-title-row">
              <svg class="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <h3>${l("cart")}</h3>
              <span class="items-count-pill">${i.itemCount}</span>
            </div>
            <button type="button" class="drawer-close-btn" id="close-drawer-btn" aria-label="${l("close")}">✕</button>
          </div>

          <div class="drawer-body">
            ${e.length===0?`
              <div class="empty-cart-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="empty-icon"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
                <p class="empty-text">${l("cartEmpty")}</p>
                <a href="#boutique" class="btn btn-outline btn-sm" id="empty-shop-now">
                  ${r?"تصفح محاصيل البوتيك":"Browse Boutique"}
                </a>
              </div>
            `:`
              <div class="cart-items-list">
                ${e.map(n=>`
                  <div class="cart-item-row">
                    <div class="item-img-box">${n.product.imageSvg}</div>
                    <div class="item-info">
                      <div class="item-title">${r?n.product.nameAr:n.product.nameEn}</div>
                      ${n.product.grindOptionsAvailable?`
                        <div class="item-grind-tag">${r?n.grindNameAr:n.grindNameEn}</div>
                      `:""}
                      <div class="item-price-unit">${n.unitPrice} ${l("sar")}</div>
                    </div>
                    <div class="item-quantity-ctrl">
                      <button type="button" class="qty-btn" data-qty-delta="-1" data-cart-id="${n.id}">-</button>
                      <span class="qty-number">${n.quantity}</span>
                      <button type="button" class="qty-btn" data-qty-delta="1" data-cart-id="${n.id}">+</button>
                    </div>
                  </div>
                `).join("")}
              </div>

              <!-- Coupon Code Input -->
              <div class="drawer-coupon-box">
                <label class="coupon-lbl">${l("couponCode")}</label>
                <div class="coupon-input-row">
                  <input type="text" id="coupon-input" placeholder="e.g. SULALAH10" value="${a?a.code:""}" class="coupon-field" />
                  <button type="button" id="apply-coupon-btn" class="btn btn-sm btn-outline">
                    ${a?r?"إزالة":"Remove":l("applyCoupon")}
                  </button>
                </div>
                ${a?`
                  <div class="coupon-applied-msg">
                    <span class="check-icon">✓</span>
                    <span>${r?a.descriptionAr:a.descriptionEn}</span>
                  </div>
                `:`
                  <div class="coupon-hint-text">${r?"جرّب: SULALAH10 لخصم 10% أو KHAWLANI":"Try: SULALAH10 or KHAWLANI"}</div>
                `}
              </div>

              <!-- Totals Breakdown -->
              <div class="cart-summary-box">
                <div class="summary-line">
                  <span>${l("subtotal")}</span>
                  <span>${i.subtotal} ${l("sar")}</span>
                </div>
                ${i.discountAmount>0?`
                  <div class="summary-line text-amber">
                    <span>${l("discount")}</span>
                    <span>-${i.discountAmount} ${l("sar")}</span>
                  </div>
                `:""}
                <div class="summary-line">
                  <span>${r?"الشحن والتوصيل":"Shipping"}</span>
                  <span>${i.shipping===0?r?"مجاني للطلبات فوق 200":"Free":`${i.shipping} ${l("sar")}`}</span>
                </div>
                <div class="summary-line text-muted">
                  <span>${l("vat")}</span>
                  <span>${i.vatAmount} ${l("sar")}</span>
                </div>
                <div class="summary-total-line">
                  <span>${l("cartTotal")}</span>
                  <span class="grand-total-val">${i.grandTotal} ${l("sar")}</span>
                </div>
              </div>
            `}
          </div>

          ${e.length>0?`
            <div class="drawer-footer">
              <button type="button" id="checkout-btn" class="btn btn-primary btn-large btn-block">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                ${l("checkout")}
              </button>
            </div>
          `:""}
        </aside>
      </div>
    `,this.bindDrawerEvents(t)}bindDrawerEvents(t){const e=t.querySelector("#drawer-backdrop");e&&e.addEventListener("click",c=>{c.target===e&&this.close()});const i=t.querySelector("#close-drawer-btn");i&&i.addEventListener("click",()=>{this.close()});const a=t.querySelector("#empty-shop-now");a&&a.addEventListener("click",()=>{this.close()}),t.querySelectorAll("[data-qty-delta]").forEach(c=>{c.addEventListener("click",o=>{const h=o.currentTarget.getAttribute("data-cart-id"),m=parseInt(o.currentTarget.getAttribute("data-qty-delta")||"0",10);h&&m&&S.updateQuantity(h,m)})});const s=t.querySelector("#apply-coupon-btn"),r=t.querySelector("#coupon-input");s&&r&&s.addEventListener("click",()=>{if(S.getCoupon())S.removeCoupon(),this.renderDrawer();else{const c=S.applyCoupon(r.value);alert(w()==="ar"?c.messageAr:c.messageEn),this.renderDrawer()}});const n=t.querySelector("#checkout-btn");n&&n.addEventListener("click",()=>{this.triggerCheckout()})}triggerCheckout(){const t=S.getItems(),e=S.getTotals(),i="SLH-"+Math.floor(1e5+Math.random()*9e5),a=new Date().toLocaleDateString(w()==="ar"?"ar-SA":"en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});this.receiptModalData={orderNumber:i,dateStr:a,items:t,totals:e},this.close(),this.renderReceiptModal()}renderReceiptModal(){const t=document.querySelector("#receipt-modal-container");if(!t||!this.receiptModalData)return;const e=this.receiptModalData,a=w()==="ar";t.innerHTML=`
      <div class="modal-backdrop">
        <div class="receipt-dialog" id="printable-receipt">
          <button type="button" class="modal-close-btn" id="close-receipt-btn" aria-label="${l("close")}">✕</button>

          <div class="receipt-brand-header">
            <div class="receipt-logo">سُـلالة | Sulalah</div>
            <div class="receipt-sub">${a?"استوديو ومحمصة القهوة المختصة - أبها والرياض":"Specialty Coffee Studio & Micro-Roastery"}</div>
            <div class="receipt-tax-no">${a?"الرقم الضريبي:":"VAT ID:"} 31094827100003</div>
          </div>

          <div class="receipt-meta-box">
            <div class="meta-line">
              <span>${a?"رقم الفاتورة:":"Invoice No:"}</span>
              <strong>${e.orderNumber}</strong>
            </div>
            <div class="meta-line">
              <span>${a?"التاريخ والوقت:":"Date & Time:"}</span>
              <span>${e.dateStr}</span>
            </div>
          </div>

          <!-- Items Table -->
          <table class="receipt-table">
            <thead>
              <tr>
                <th>${a?"الصنف / درجة الطحن":"Item / Grind"}</th>
                <th>${a?"الكمية":"Qty"}</th>
                <th>${a?"السعر":"Price"}</th>
              </tr>
            </thead>
            <tbody>
              ${e.items.map(c=>`
                <tr>
                  <td>
                    <div class="r-item-name">${a?c.product.nameAr:c.product.nameEn}</div>
                    ${c.product.grindOptionsAvailable?`
                      <div class="r-item-grind">${a?c.grindNameAr:c.grindNameEn}</div>
                    `:""}
                  </td>
                  <td>${c.quantity}</td>
                  <td>${c.unitPrice*c.quantity} ${l("sar")}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>

          <!-- Financial Breakdown -->
          <div class="receipt-totals-list">
            <div class="r-total-line">
              <span>${l("subtotal")}</span>
              <span>${e.totals.subtotal} ${l("sar")}</span>
            </div>
            ${e.totals.discountAmount>0?`
              <div class="r-total-line text-amber">
                <span>${l("discount")}</span>
                <span>-${e.totals.discountAmount} ${l("sar")}</span>
              </div>
            `:""}
            <div class="r-total-line">
              <span>${a?"رسوم الشحن":"Shipping"}</span>
              <span>${e.totals.shipping===0?a?"مجاني":"Free":`${e.totals.shipping} ${l("sar")}`}</span>
            </div>
            <div class="r-total-line">
              <span>${l("vat")}</span>
              <span>${e.totals.vatAmount} ${l("sar")}</span>
            </div>
            <div class="r-grand-total">
              <span>${l("cartTotal")}</span>
              <span>${e.totals.grandTotal} ${l("sar")}</span>
            </div>
          </div>

          <!-- Barista Quality Stamp & Simulated QR -->
          <div class="receipt-stamp-block">
            <div class="simulated-qr">
              <svg viewBox="0 0 100 100" class="qr-svg">
                <rect width="100" height="100" fill="#ffffff" />
                <rect x="10" y="10" width="25" height="25" fill="#1c140e" />
                <rect x="15" y="15" width="15" height="15" fill="#ffffff" />
                <rect x="65" y="10" width="25" height="25" fill="#1c140e" />
                <rect x="70" y="15" width="15" height="15" fill="#ffffff" />
                <rect x="10" y="65" width="25" height="25" fill="#1c140e" />
                <rect x="15" y="70" width="15" height="15" fill="#ffffff" />
                <rect x="45" y="20" width="10" height="10" fill="#1c140e" />
                <rect x="40" y="45" width="20" height="20" fill="#1c140e" />
                <rect x="70" y="55" width="15" height="15" fill="#1c140e" />
                <rect x="25" y="45" width="10" height="10" fill="#1c140e" />
                <rect x="55" y="75" width="15" height="15" fill="#1c140e" />
              </svg>
              <span>${a?"رمز التحقق الضريبي المعتمد":"ZATCA Tax Verification QR"}</span>
            </div>
            <div class="barista-blessing">
              <p>${a?"تم التحميص والتجهيز وفق أرقى معايير SCA. استمتع بتجربة تحضير استثنائية!":"Micro-roasted to perfection. Enjoy an elevated sensory ritual."}</p>
            </div>
          </div>

          <!-- Actions -->
          <div class="receipt-actions-row">
            <button type="button" class="btn btn-primary" id="print-receipt-btn">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              ${l("printReceipt")}
            </button>
            <button type="button" class="btn btn-outline" id="finish-receipt-btn">
              ${a?"إتمام ومسح السلة":"Finish & Clear Bag"}
            </button>
          </div>
        </div>
      </div>
    `;const s=t.querySelector("#close-receipt-btn");s&&s.addEventListener("click",()=>{t.innerHTML=""});const r=t.querySelector("#print-receipt-btn");r&&r.addEventListener("click",()=>{window.print()});const n=t.querySelector("#finish-receipt-btn");n&&n.addEventListener("click",()=>{S.clearCart(),t.innerHTML=""})}}const F=new ue;function V(){(localStorage.getItem("sulalah_theme")||"light")==="dark"?document.body.classList.add("theme-dark"):document.body.classList.remove("theme-dark");const t=localStorage.getItem("sulalah_lang")||"ar";_(t),z(),he(),te(e=>{localStorage.setItem("sulalah_lang",e),K(),z()}),window.addEventListener("keydown",e=>{if(e.key==="Escape"){F.close();const i=document.querySelector("#product-modal-container");i&&(i.innerHTML="");const a=document.querySelector("#receipt-modal-container");a&&(a.innerHTML="")}})}function z(){const d=document.querySelector("#hero-container");d&&(d.innerHTML=ae());const t=document.querySelector("#brewing-lab-container");t&&(t.innerHTML=M.render(),M.bindEvents(t));const e=document.querySelector("#flavor-radar-container");e&&(e.innerHTML=P.render(),P.bindEvents(e,r=>{M.setBeanQuickBrew(r.recommendedMethods[0]||"v60",18,r.roastLevel==="omni"?"light":r.roastLevel)}));const i=document.querySelector("#origins-atlas-container");i&&(i.innerHTML=N.render(),N.bindEvents(i,r=>{M.setBeanQuickBrew(r.recommendedMethods[0]||"v60",18,r.roastLevel==="omni"?"light":r.roastLevel)},r=>{P.setBean(r)},r=>{G.openProductModal(r)}));const a=document.querySelector("#water-chem-container");a&&(a.innerHTML=W.render(),W.bindEvents(a));const s=document.querySelector("#boutique-container");s&&(s.innerHTML=G.render(),G.bindEvents(s)),F.updateBadge()}function he(){const d=document.querySelector("#theme-toggle-btn");d&&d.addEventListener("click",()=>{const i=document.body.classList.toggle("theme-dark");localStorage.setItem("sulalah_theme",i?"dark":"light"),j(i);const a=document.querySelector("#flavor-radar-container");a&&P.bindEvents(a)});const t=document.querySelector("#lang-toggle-btn");t&&t.addEventListener("click",()=>{ee()});const e=document.querySelector("#nav-cart-btn");e&&e.addEventListener("click",()=>{F.toggle()}),K(),j(document.body.classList.contains("theme-dark"))}function j(d){const t=document.querySelector("#theme-icon-svg");t&&(d?t.innerHTML='<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>':t.innerHTML='<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>')}function K(){const d=w(),t=document.querySelector("#lang-label");t&&(t.textContent=d==="ar"?"English":"العربية"),document.querySelectorAll("[data-i18n]").forEach(e=>{const i=e.getAttribute("data-i18n");i&&(e.textContent=l(i))})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",V):V();
