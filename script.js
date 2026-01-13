document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Translation Engine --- */
    const translations = {
        en: {
            nav_home: "Home",
            nav_system: "The Method",
            nav_programs: "Programs",
            nav_about: "Mission",
            nav_contact: "Contact",
            hero_eyebrow: "Revolutionize Your Potential",
            hero_title_1: "Mastery,",
            hero_title_2: "Powered by Science",
            hero_desc: "Stop struggling. Start mastering. We decode the neuroscience of learning to make education accessible, efficient, and permanent for everyone, everywhere.",
            btn_system: "Discover the Science",
            btn_start: "Start Your Journey",
            video_placeholder: "Watch the Revolution",
            system_title: "The Scientifier Method",
            card_neuro_title: "Neuroscience",
            card_neuro_desc: "We don't guess; we optimize. Utilizing protocols like Spaced Repetition and NSDR to hack your brain's retention centers for permanent memory.",
            card_psych_title: "Psychology",
            card_psych_desc: "Relevance is fuel. We align learning with your deepest ambitions—career, heritage, life goals—creating an unstoppable drive to succeed.",
            card_tech_title: "Technology",
            card_tech_desc: "Adaptive AI that evolves with you. Our technology molds to your unique learning curve, ensuring you're always in the flow state.",
            card_exp_title: "Cognitive Bridging",
            card_exp_desc: "Leverage your legacy. We bridge your new goals with your existing knowledge (e.g., using French to master Spanish), creating intelligent shortcuts to fluency.",
            programs_title: "Elite Learning Programs",
            prog_1on1_title: "1-on-1 Precision Coaching",
            prog_1on1_desc: "Your goals, your pace, our experts. Get hyper-personalized feedback via private video sessions to shatter plateaus and accelerate fluency.",
            prog_feat_1: "Customized Success Roadmap",
            prog_feat_2: "Real-time Expert Correction",
            prog_feat_3: "On-Demand Scheduling",
            prog_group_title: "Global Immersion Labs",
            prog_group_desc: "Join the global arena. Connect, compete, and converse in high-energy weekly labs. Master English, French, Spanish, Turkish, Arabic, or Mandenkan with peers worldwide.",
            prog_feat_4: "Dynamic Social Learning",
            prog_feat_5: "Structured Weekly Sprints",
            prog_feat_6: "6 Language Ecosystems",
            testi_title: "Real Results",
            testi_1_quote: "\"Scientifier didn't just teach me Spanish; it rewired how I learn. The retention techniques are borderline magic.\"",
            testi_2_quote: "\"The Arabic labs are intense and incredibly effective. I'm finally speaking with confidence and connecting to my roots.\"",
            testi_3_quote: "\"Precision coaching was the game-changer. I walked into my French interview with zero fear and got the job.\"",
            about_title: "Our Mission",
            about_desc: "Scientifier is not just a platform; it's a movement. We are dismantling outdated education models by fusing cutting-edge Neuroscience, Psychology, and AI. Our goal is to make autonomy in learning the new standard for the human experience.",
            goal_title: "The Goal: Total Autonomy",
            goal_desc: "Empowering you to learn anything, anywhere, independently using:",
            goal_point_1: "Adaptive Artificial Intelligence",
            goal_point_2: "Neuro-Protocols (NSDR, Spaced Repetition)",
            goal_point_3: "Associative Learning (Cognitive Bridging)",
            contact_title: "Join the Revolution",
            form_name: "Your Name",
            form_email: "Your Email",
            form_message: "How can we help you evolve?",
            btn_send: "Ignite Potential",
            contact_direct: "Or email our team directly:"
        },
        fr: {
            nav_home: "Accueil",
            nav_system: "La Méthode",
            nav_programs: "Programmes",
            nav_about: "Mission",
            nav_contact: "Contact",
            hero_eyebrow: "Révolutionnez Votre Potentiel",
            hero_title_1: "L'Excellence,",
            hero_title_2: "Propulsée par la Science",
            hero_desc: "Arrêtez de lutter. Commencez à maîtriser. Nous décodons les neurosciences de l'apprentissage pour rendre l'éducation accessible, efficace et durable pour tous.",
            btn_system: "Découvrir la Science",
            btn_start: "Commencer l'Aventure",
            video_placeholder: "Regarder la Révolution",
            system_title: "La Méthode Scientifier",
            card_neuro_title: "Neurosciences",
            card_neuro_desc: "Nous ne devinons pas ; nous optimisons. Utilisation de la Répétition Espacée et du NSDR pour pirater les centres de rétention de votre cerveau.",
            card_psych_title: "Psychologie",
            card_psych_desc: "La pertinence est un carburant. Nous lions l'apprentissage à vos ambitions profondes (carrière, héritage) pour une motivation inarrêtable.",
            card_tech_title: "Technologie",
            card_tech_desc: "Une IA adaptative qui évolue avec vous. Notre technologie s'ajuste à votre courbe d'apprentissage unique pour vous maintenir dans le 'flow'.",
            card_exp_title: "Ponts Cognitifs",
            card_exp_desc: "Exploitez vos acquis. Nous relions vos nouveaux objectifs à vos connaissances existantes (ex. utiliser le français pour maîtriser l'espagnol), créant des raccourcis intelligents.",
            programs_title: "Programmes d'Élite",
            prog_1on1_title: "Coaching de Précision 1-à-1",
            prog_1on1_desc: "Vos objectifs, votre rythme. Recevez un feedback hyper-personnalisé via des sessions vidéo privées pour briser les plafonds de verre et accélérer la fluidité.",
            prog_feat_1: "Feuille de Route Personnalisée",
            prog_feat_2: "Correction Experte en Temps Réel",
            prog_feat_3: "Planification à la Demande",
            prog_group_title: "Laboratoires d'Immersion Globaux",
            prog_group_desc: "Rejoignez l'arène mondiale. Connectez-vous, rivalisez et conversez dans des labos hebdomadaires dynamiques. Maîtrisez l'Anglais, le Français, l'Espagnol, le Turc, l'Arabe ou le Mandenkan.",
            prog_feat_4: "Apprentissage Social Dynamique",
            prog_feat_5: "Sprints Hebdomadaires Structurés",
            prog_feat_6: "Écosystème de 6 Langues",
            testi_title: "Résultats Réels",
            testi_1_quote: "\"Scientifier n'a pas juste enseigné l'espagnol ; il a recâblé ma façon d'apprendre. Les techniques de rétention sont presque magiques.\"",
            testi_2_quote: "\"Les labos d'arabe sont intenses et incroyablement efficaces. Je parle enfin avec confiance et renoue avec mes racines.\"",
            testi_3_quote: "\"Le coaching de précision a tout changé. Je suis allé à mon entretien en français sans aucune peur et j'ai eu le poste.\"",
            about_title: "Notre Mission",
            about_desc: "Scientifier n'est pas juste une plateforme ; c'est un mouvement. Nous démantelons les modèles éducatifs obsolètes en fusionnant Neurosciences, Psychologie et IA. Notre but : faire de l'autonomie d'apprentissage la nouvelle norme.",
            goal_title: "L'Objectif : Autonomie Totale",
            goal_desc: "Vous donner le pouvoir d'apprendre n'importe quoi, n'importe où, indépendamment grâce à :",
            goal_point_1: "Intelligence Artificielle Adaptative",
            goal_point_2: "Neuro-Protocoles (NSDR, Répétition Espacée)",
            goal_point_3: "Apprentissage Associatif (Ponts Cognitifs)",
            contact_title: "Rejoignez la Révolution",
            form_name: "Votre Nom",
            form_email: "Votre Email",
            form_message: "Comment pouvons-nous vous aider à évoluer ?",
            btn_send: "Libérer le Potentiel",
            contact_direct: "Ou écrivez directement à notre équipe :"
        },
        tr: {
            nav_home: "Ana Sayfa",
            nav_system: "Yöntem",
            nav_programs: "Programlar",
            nav_about: "Misyon",
            nav_contact: "İletişim",
            hero_eyebrow: "Potansiyelinizde Devrim Yaratın",
            hero_title_1: "Ustalık,",
            hero_title_2: "Bilimle Güçlendirildi",
            hero_desc: "Çabalamayı bırakın. Ustalaşmaya başlayın. Eğitimi herkes için erişilebilir, verimli ve kalıcı kılmak adına öğrenmenin nörobilimini çözümlüyoruz.",
            btn_system: "Bilimi Keşfet",
            btn_start: "Yolculuğa Başla",
            video_placeholder: "Devrimi İzle",
            system_title: "Scientifier Yöntemi",
            card_neuro_title: "Nörobilim",
            card_neuro_desc: "Tahmin etmiyoruz; optimize ediyoruz. Kalıcı hafıza için beyninizin tutma merkezlerini 'hack'lemek adına Aralıklı Tekrar ve NSDR gibi protokolleri kullanıyoruz.",
            card_psych_title: "Psikoloji",
            card_psych_desc: "Alaka düzeyiniz yakıtınızdır. Öğrenmeyi en derin hedeflerinizle (kariyer, miras) hizalayarak durdurulamaz bir başarı dürtüsü yaratıyoruz.",
            card_tech_title: "Teknoloji",
            card_tech_desc: "Sizinle gelişen Adaptif Yapay Zeka. Teknolojimiz, sizi her zaman 'akış' durumunda tutmak için benzersiz öğrenme eğrinize şekil verir.",
            card_exp_title: "Bilişsel Köprüleme",
            card_exp_desc: "Mirasınızdan yararlanın. Yeni hedeflerinizi mevcut bilgilerinizle (örn. İspanyolca öğrenmek için Fransızca kullanmak) birleştirerek akıllı kısayollar oluşturuyoruz.",
            programs_title: "Elit Öğrenme Programları",
            prog_1on1_title: "Birebir Hassas Koçluk",
            prog_1on1_desc: "Sizin hedefleriniz, sizin hızınız. Engelleri aşmak ve akıcılığı hızlandırmak için özel video oturumlarıyla hiper-kişiselleştirilmiş geri bildirim alın.",
            prog_feat_1: "Özelleştirilmiş Başarı Haritası",
            prog_feat_2: "Gerçek Zamanlı Uzman Düzeltmesi",
            prog_feat_3: "İsteğe Bağlı Planlama",
            prog_group_title: "Küresel İmmersiyon Laboratuvarları",
            prog_group_desc: "Küresel arenaya katılın. Yüksek enerjili haftalık laboratuvarlarda bağlanın, rekabet edin ve konuşun. İngilizce, Fransızca, İspanyolca, Türkçe, Arapça veya Mandenkan'da ustalaşın.",
            prog_feat_4: "Dinamik Sosyal Öğrenme",
            prog_feat_5: "Yapılandırılmış Haftalık Sprintler",
            prog_feat_6: "6 Dil Ekosistemi",
            testi_title: "Gerçek Sonuçlar",
            testi_1_quote: "\"Scientifier bana sadece İspanyolca öğretmedi; öğrenme şeklimi yeniden yapılandırdı. Hafıza teknikleri neredeyse sihir gibi.\"",
            testi_2_quote: "\"Arapça laboratuvarları yoğun ve inanılmaz etkili. Sonunda güvenle konuşuyor ve köklerimle bağ kuruyorum.\"",
            testi_3_quote: "\"Hassas koçluk oyunun kurallarını değiştirdi. Fransızca mülakatıma sıfır korkuyla girdim ve işi aldım.\"",
            about_title: "Misyonumuz",
            about_desc: "Scientifier sadece bir platform değil; bir harekettir. En son Nörobilim, Psikoloji ve Yapay Zekayı birleştirerek eski eğitim modellerini yıkıyoruz. Hedefimiz: Öğrenmede özerkliği insan deneyimi için yeni standart haline getirmek.",
            goal_title: "Hedef: Tam Özerklik",
            goal_desc: "Şunları kullanarak herhangi bir şeyi, herhangi bir yerde, bağımsız olarak öğrenmeniz için sizi güçlendiriyoruz:",
            goal_point_1: "Adaptif Yapay Zeka",
            goal_point_2: "Nöro-Protokoller (NSDR, Aralıklı Tekrar)",
            goal_point_3: "Çağrışımsal Öğrenme (Bilişsel Köprüleme)",
            contact_title: "Devrime Katılın",
            form_name: "Adınız",
            form_email: "E-postanız",
            form_message: "Gelişiminize nasıl yardımcı olabiliriz?",
            btn_send: "Potansiyeli Ateşle",
            contact_direct: "Veya ekibimize doğrudan e-posta gönderin:"
        },
        ar: {
            nav_home: "الرئيسية",
            nav_system: "المنهجية",
            nav_programs: "البرامج",
            nav_about: "المهمة",
            nav_contact: "اتصل بنا",
            hero_eyebrow: "أحدث ثورة في إمكانياتك",
            hero_title_1: "الإتقان،",
            hero_title_2: "بدعم من العلم",
            hero_desc: "توقف عن المعاناة. ابدأ بالإتقان. نحن نفك شفرة علم أعصاب التعلم لجعل التعليم متاحاً، فعالاً، وراسخاً للجميع في كل مكان.",
            btn_system: "اكتشف العلم",
            btn_start: "ابدأ رحلتك",
            video_placeholder: "شاهد الثورة",
            system_title: "منهجية Scientifier",
            card_neuro_title: "علم الأعصاب",
            card_neuro_desc: "نحن لا نخمن؛ نحن نُحسّن. نستخدم بروتوكولات مثل التكرار المتباعد و NSDR لاختراق مراكز الذاكرة في دماغك من أجل حفظ دائم.",
            card_psych_title: "علم النفس",
            card_psych_desc: "الملاءمة هي الوقود. نربط التعلم بأعمق طموحاتك - المهنة، التراث، أهداف الحياة - مما يخلق دافعاً لا يمكن إيقافه للنجاح.",
            card_tech_title: "التكنولوجيا",
            card_tech_desc: "ذكاء اصطناعي متكيف يتطور معك. تقنيتنا تتشكل لتناسب منحنى التعلم الفريد الخاص بك، لضمان بقائك دائماً في حالة 'الانسجام'.",
            card_exp_title: "الجسور المعرفية",
            card_exp_desc: "استفد من إرثك. نبني جسوراً بين أهدافك الجديدة ومعرفتك الحالية (مثلاً استخدام الفرنسية لإتقان الإسبانية)، لخلق اختصارات ذكية للطلاقة.",
            programs_title: "برامج تعليم النخبة",
            prog_1on1_title: "تدريب دقيق 1-على-1",
            prog_1on1_desc: "أهدافك، وتيرتك، خبراؤنا. احصل على ملاحظات فائقة التخصيص عبر جلسات فيديو خاصة لكسر الحواجز وتسريع الطلاقة.",
            prog_feat_1: "خارطة طريق مخصصة للنجاح",
            prog_feat_2: "تصحيح فوري من الخبراء",
            prog_feat_3: "جدولة حسب الطلب",
            prog_group_title: "مختبرات الانغماس العالمية",
            prog_group_desc: "انضم إلى الساحة العالمية. تواصل، نافس، وتحاور في مختبرات أسبوعية عالية الطاقة. أتقن الإنجليزية، الفرنسية، الإسبانية، التركية، العربية، أو الماندينكان مع أقران حول العالم.",
            prog_feat_4: "تعلم اجتماعي ديناميكي",
            prog_feat_5: "سباقات أسبوعية منظمة",
            prog_feat_6: "نظام بيئي لـ 6 لغات",
            testi_title: "نتائج حقيقية",
            testi_1_quote: "\"Scientifier لم يعلمني الإسبانية فقط؛ بل أعاد تشكيل كيفية تعلمي. تقنيات الذاكرة تكاد تكون سحراً.\"",
            testi_2_quote: "\"مختبرات العربية مكثفة وفعالة بشكل لا يصدق. أخيراً أتحدث بثقة وأتواصل مع جذوري.\"",
            testi_3_quote: "\"التدريب الدقيق غيّر قواعد اللعبة. دخلت مقابلة العمل بالفرنسية بدون أي خوف وحصلت على الوظيفة.\"",
            about_title: "مهمتنا",
            about_desc: "Scientifier ليست مجرد منصة؛ إنها حركة. نحن نفكك نماذج التعليم القديمة من خلال دمج أحدث ما توصل إليه علم الأعصاب، علم النفس، والذكاء الاصطناعي. هدفنا هو جعل الاستقلالية في التعلم المعيار الجديد للتجربة البشرية.",
            goal_title: "الهدف: الاستقلالية التامة",
            goal_desc: "تمكينك من تعلم أي شيء، في أي مكان، بشكل مستقل باستخدام:",
            goal_point_1: "الذكاء الاصطناعي المتكيف",
            goal_point_2: "البروتوكولات العصبية (NSDR، التكرار المتباعد)",
            goal_point_3: "التعلم الترابطي (الجسور المعرفية)",
            contact_title: "انضم إلى الثورة",
            form_name: "اسمك",
            form_email: "بريدك الإلكتروني",
            form_message: "كيف يمكننا مساعدتك في التطور؟",
            btn_send: "أشعل قدراتك",
            contact_direct: "أو راسل فريقنا مباشرة:"
        },
        es: {
            nav_home: "Inicio",
            nav_system: "El Método",
            nav_programs: "Programas",
            nav_about: "Misión",
            nav_contact: "Contacto",
            hero_eyebrow: "Revoluciona Tu Potencial",
            hero_title_1: "Dominio,",
            hero_title_2: "Impulsado por la Ciencia",
            hero_desc: "Deja de luchar. Empieza a dominar. Decodificamos la neurociencia del aprendizaje para hacer que la educación sea accesible, eficiente y permanente para todos.",
            btn_system: "Descubre la Ciencia",
            btn_start: "Inicia Tu Viaje",
            video_placeholder: "Mira la Revolución",
            system_title: "El Método Scientifier",
            card_neuro_title: "Neurociencia",
            card_neuro_desc: "No adivinamos; optimizamos. Utilizamos protocolos como la Repetición Espaciada y NSDR para 'hackear' los centros de retención de tu cerebro para una memoria permanente.",
            card_psych_title: "Psicología",
            card_psych_desc: "La relevancia es combustible. Alineamos el aprendizaje con tus ambiciones más profundas (carrera, herencia) creando un impulso imparable hacia el éxito.",
            card_tech_title: "Tecnología",
            card_tech_desc: "IA adaptativa que evoluciona contigo. Nuestra tecnología se amolda a tu curva de aprendizaje única, asegurando que siempre estés en el estado de 'flow'.",
            card_exp_title: "Puentes Cognitivos",
            card_exp_desc: "Aprovecha tu legado. Unimos tus nuevos objetivos con tu conocimiento existente (ej. usar francés para dominar el español), creando atajos inteligentes hacia la fluidez.",
            programs_title: "Programas de Aprendizaje de Élite",
            prog_1on1_title: "Coaching de Precisión 1-a-1",
            prog_1on1_desc: "Tus metas, tu ritmo, nuestros expertos. Recibe retroalimentación hiper-personalizada vía sesiones de video privadas para romper estancamientos y acelerar la fluidez.",
            prog_feat_1: "Hoja de Ruta Personalizada",
            prog_feat_2: "Corrección Experta en Tiempo Real",
            prog_feat_3: "Programación a la Carta",
            prog_group_title: "Laboratorios de Inmersión Global",
            prog_group_desc: "Únete a la arena global. Conecta, compite y conversa en laboratorios semanales de alta energía. Domina Inglés, Francés, Español, Turco, Árabe o Mandenkan con compañeros de todo el mundo.",
            prog_feat_4: "Aprendizaje Social Dinámico",
            prog_feat_5: "Sprints Semanales Estructurados",
            prog_feat_6: "Ecosistema de 6 Idiomas",
            testi_title: "Resultados Reales",
            testi_1_quote: "\"Scientifier no solo me enseñó español; reprogramó cómo aprendo. Las técnicas de retención son casi mágicas.\"",
            testi_2_quote: "\"Los laboratorios de árabe son intensos e increíblemente efectivos. Finalmente hablo con confianza y conecto con mis raíces.\"",
            testi_3_quote: "\"El coaching de precisión cambió el juego. Entré a mi entrevista en francés sin miedo y conseguí el trabajo.\"",
            about_title: "Nuestra Misión",
            about_desc: "Scientifier no es solo una plataforma; es un movimiento. Estamos desmantelando modelos educativos obsoletos fusionando Neurociencia, Psicología e IA. Nuestra meta: hacer de la autonomía en el aprendizaje el nuevo estándar.",
            goal_title: "La Meta: Autonomía Total",
            goal_desc: "Empoderándote para aprender cualquier cosa, en cualquier lugar, independientemente usando:",
            goal_point_1: "Inteligencia Artificial Adaptativa",
            goal_point_2: "Neuro-Protocolos (NSDR, Repetición Espaciada)",
            goal_point_3: "Aprendizaje Asociativo (Puentes Cognitivos)",
            contact_title: "Únete a la Revolución",
            form_name: "Tu Nombre",
            form_email: "Tu Correo",
            form_message: "¿Cómo podemos ayudarte a evolucionar?",
            btn_send: "Encender Potencial",
            contact_direct: "O escribe directamente a nuestro equipo:"
        }
    };

    /* --- 2. Language Switching Logic --- */
    const langSelect = document.getElementById('language-select');

    function updateLanguage(lang) {
        // Update Text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });

        // RTL Support for Arabic
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.lang = 'ar';
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.lang = lang;
        }
    }

    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });
    }

    /* --- 3. Light/Dark Mode Logic --- */
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check localStorage preference or system preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    let isLight = savedTheme === 'light';

    // Apply saved theme immediately
    if (isLight) {
        body.classList.add('light-mode');
        if (themeToggle) {
            const icon = themeToggle.querySelector('svg');
            icon.style.transform = 'rotate(180deg)';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            isLight = !isLight;
            if (isLight) {
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            }
            // Rotate icon
            const icon = themeToggle.querySelector('svg');
            icon.style.transform = isLight ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    }


    /* --- 4. Animations & Visuals (Restored) --- */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.about-card, .program-card, .section-title, .hero-content').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        el.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.innerHTML = `
        .visible { opacity: 1 !important; transform: translateY(0) !important; }
    `;
    document.head.appendChild(style);

    const canvas = document.getElementById('neural-bg');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        const particleCount = 60;
        const connectionDistance = 150;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.size = Math.random() * 2 + 1;
                // Adapting color for light mode support would require dynamic check, keeping generic gold/green for now
                this.color = Math.random() > 0.5 ? 'rgba(16, 185, 129, ' : 'rgba(251, 191, 36, ';
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color + '0.5)';
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                p.update();
                p.draw();
                for (let j = i; j < particles.length; j++) {
                    let p2 = particles[j];
                    let dx = p.x - p2.x;
                    let dy = p.y - p2.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        let opacity = 1 - (distance / connectionDistance);
                        // Check theme for line color
                        if (document.body.classList.contains('light-mode')) {
                            ctx.strokeStyle = 'rgba(16, 185, 129, ' + (opacity * 0.4) + ')';
                        } else {
                            ctx.strokeStyle = 'rgba(16, 185, 129, ' + (opacity * 0.2) + ')';
                        }
                        ctx.lineWidth = 1;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            resize();
            initParticles();
        });

        resize();
        initParticles();
        animate();
    }
    /* --- 5. Contact Form Logic (EmailJS) --- */
    // Initialize EmailJS
    (function () {
        emailjs.init("YavoYlqtomBUxbpMr");
    })();

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            btn.disabled = true;

            const serviceID = 'scientiservice';
            const templateID = 'contact_form'; // Make sure to create a template with this ID in your EmailJS dashboard

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.innerText = 'Message Sent!';
                    btn.style.backgroundColor = 'var(--color-primary)';
                    contactForm.reset();
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.disabled = false;
                        btn.style.backgroundColor = '';
                    }, 3000);
                }, (err) => {
                    btn.innerText = 'Error!';
                    btn.style.backgroundColor = 'red'; // Simple error indication
                    console.log('FAILED...', err);
                    alert("Failed to send message. Please check the console or try again later. (Did you update the API keys?)");
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.disabled = false;
                        btn.style.backgroundColor = '';
                    }, 3000);
                });
        });
    }

});
