//const Telegraf = require('telegraf') ;
const { Telegraf } = require('telegraf')
const BOT_TOKEN = '5329313150:AAFSANzYyNTnFnRWjyN7Cfd5_OBSI2zF9GA'
const bot = new Telegraf(BOT_TOKEN)
bot.start((ctx) => ctx.reply('مرحبا بك عزيزي الطالب '))
bot.help((ctx) => ctx.reply('إذا احتجت إلى مساعدة خاصة تواصل معنا عبر صفحتنا في الفايسبوك '))
bot.on('sticker', (ctx) => ctx.reply('👍'))


bot.command("Doross", (ctx) => {
    ctx.reply("إختر شعبتك عزيزي الطالب ", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " شعبة الرياضيات ", callback_data: "btn-1" }, { text: " شعبة العلوم التجريبية", callback_data: "btn-2" }],

                /* One button */
                [ { text: "شعبة تقني رياضي", callback_data: "btn-3" }, { text: "شعبة تسيير و اقتصاد ", callback_data: "btn-4" } ],
                
                /* Also, we can have URL buttons. */
                [ { text: "شعبة لغات أجنبية", callback_data: "btn-5" }, { text: "شعبة آداب و فلسفة", callback_data: "btn-6" } ]
            ]
        }
    });
});

// جميع المواد حسب الشعبة

// رياضيات
bot.action('btn-1',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اي مادة تريد دراستها اليوم ؟ ", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " الرياضيات", callback_data: "btn-11" }, { text: "العلوم الطبيعية", callback_data: "btn-12" }, { text: "العلوم الفيزيائية", callback_data: "btn-13" } ],

                /* One button */
                [ { text: "اللغة العربية", callback_data: "btn-14" }, { text: "اللغة الفرنسية ", callback_data: "btn-15" }, { text: "اللغة الإنجليزية ", callback_data: "btn-16" } ],

                [ { text: "الفلسفة", callback_data: "btn-17" }, { text: "الأمازيغية ", callback_data: "btn-18" }, { text: "التاريخ و الجغرافيا ", callback_data: "btn-19" }],
                [ { text: "التكنولوجيا", callback_data: "btn-110" }, { text: "العلوم الإسلامية ", callback_data: "btn-111" }],


            ]
        }
    });
})

//العلوم التجريبية
bot.action('btn-2',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اي مادة تريد دراستها اليوم ؟ ", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " الرياضيات", callback_data: "btn-21" }, { text: "العلوم الطبيعية", callback_data: "btn-22" }, { text: "العلوم الفيزيائية", callback_data: "btn-23" } ],

                /* One button */
                [ { text: "اللغة العربية", callback_data: "btn-24" }, { text: "اللغة الفرنسية ", callback_data: "btn-25" }, { text: "اللغة الإنجليزية ", callback_data: "btn-26" } ],

                [ { text: "الفلسفة", callback_data: "btn-27" }, { text: "الأمازيغية ", callback_data: "btn-28" }],
                [ { text: "العلوم الإسلامية ", callback_data: "btn-210" },{ text: "التاريخ و الجغرافيا ", callback_data: "btn-29" }],

            ]
        }
    });
})
//تقني رياضي
bot.action('btn-3',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اي مادة تريد دراستها اليوم ؟ ", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " الرياضيات", callback_data: "btn-31" }, { text: "التكنولوجيا", callback_data: "btn-32" }, { text: "العلوم الفيزيائية", callback_data: "btn-33" } ],

                /* One button */
                [ { text: "اللغة العربية", callback_data: "btn-34" }, { text: "اللغة الفرنسية ", callback_data: "btn-35" }, { text: "اللغة الإنجليزية ", callback_data: "btn-36" } ],

                [ { text: "الفلسفة", callback_data: "btn-37" }, { text: "الأمازيغية ", callback_data: "btn-38" },  { text: "العلوم الطبيعية ", callback_data: "btn-310" } ],
                [ { text: "العلوم الإسلامية ", callback_data: "btn-310" }, { text: "التاريخ و الجغرافيا", callback_data: "btn-39" }],

            ]
        }
    });
})
//تسيير و إقتصاد
bot.action('btn-4',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اي مادة تريد دراستها اليوم ؟ ", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " الرياضيات", callback_data: "btn-41" }, { text: "الاقتصاد و الماناجمنت", callback_data: "btn-42" }, { text: "القانون", callback_data: "btn-43" } ],

                /* One button */
                [ { text: "اللغة العربية", callback_data: "btn-44" }, { text: "اللغة الفرنسية ", callback_data: "btn-45" }, { text: "اللغة الإنجليزية ", callback_data: "btn-46" } ],

                [ { text: "الفلسفة", callback_data: "btn-47" }, { text: "الأمازيغية ", callback_data: "btn-48" }, { text: "التسيير المحاسبي و المالي", callback_data: "btn-49" }],
                [ { text: "التاريخ و الجغرافيا", callback_data: "btn-410" }, { text: "العلوم الإسلامية ", callback_data: "btn-411" }],
                [ { text: " العلوم الفيزيائية ", callback_data: "btn-413" }, { text: "العلوم الطبيعية ", callback_data: "btn-412" }],

            ]
        }
    });
})
//لغات أجنبية
bot.action('btn-5',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اي مادة تريد دراستها اليوم ؟ ", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " الرياضيات", callback_data: "btn-51" }, { text: "اللغة الألمانية", callback_data: "btn-52" }, { text: "اللغة الإسبانية", callback_data: "btn-53" } ],

                /* One button */
                [ { text: "اللغة العربية", callback_data: "btn-54" }, { text: "اللغة الفرنسية ", callback_data: "btn-55" }, { text: "اللغة الإنجليزية ", callback_data: "btn-56" } ],

                [ { text: "الفلسفة", callback_data: "btn-57" }, { text: "الأمازيغية ", callback_data: "btn-58" }],
                [ { text: "تاريخ و جغرافيا", callback_data: "btn-59" }, { text: "العلوم الإسلامية ", callback_data: "btn-510" }],

                
            ]
        }
    });
})
//آداب و فلسفة

bot.action('btn-6',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اي مادة تريد دراستها اليوم ؟ ", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " الرياضيات", callback_data: "btn-61" }, { text: "اللغة الألمانية", callback_data: "btn-62" }, { text: "اللغة الإسبانية", callback_data: "btn-63" } ],

                /* One button */
                [ { text: "اللغة العربية", callback_data: "btn-64" }, { text: "اللغة الفرنسية ", callback_data: "btn-65" }, { text: "اللغة الإنجليزية ", callback_data: "btn-66" } ],

                [ { text: "الفلسفة", callback_data: "btn-67" }, { text: "الأمازيغية ", callback_data: "btn-68" }],
                [ { text: "التاريخ و الجغرافيا", callback_data: "btn-69" }, { text: "العلوم الإسلامية ", callback_data: "btn-610" }],

                
            ]
        }
    });
})

///////////////////////////////////////////////////////////////////////

//  قائمة الدروس و الإمتحانات 

// شعبة الرياضيات
bot.action('btn-18',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("الأمازيغية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1wuPKiSbtVghnyRIeDlZFcg15Ms-G5-WB?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1j4fWF50xpUnktLdGTABFtiQhVobBkZhk?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1iRk5ceTUzaXbSjpSCwW8pACXTwWLwf1G?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1wO9dy8TAZb3zQCb4bWjaX8mzKuRxF5wA?usp=sharing" }],
                
              
            ]
        }
    });
})


bot.action('btn-19',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("التاريخ و الجغرافيا", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1VdKhUzNGIEqsJXTX8Rw0UjVvYb0ZDxrt?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1NS88zFqyqER-1klN_Ctdb8kIUrex0Tj0?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/17PxK5qQ06CYD8WtaAO5PZTMD9oKt21Hp?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/11XlQd83_5p5EA8vHQ1r3b6pxx6PXUpOB?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-110',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("التكنولوجيا", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1nuN16EILUIf8LA0AeR9Z5QHUTXDqqNqq?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1RkSYrCufW720mFs11Ogq3Wfm3kFN9tNm?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1j-K_byVba6YZVTF7HJKM_4Lq2iMJruOZ?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1DkM05-a6JJ1FYKvgqf8SHpYdacG6BuKx?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-111',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("العلوم الإسلامية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/13Naemk4PVxUonpDrTi3dou_3_xeLrFFW?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1rVb2PWHstcVhIYsyg4xf603T8R2EcQQF?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/17z1Vx2FivN1XGK4C0uBl8HXOfHxSHzo3?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1fog5zymvn6dsgGVHtXTzxJS8N4ioJiEM?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-12',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("العلوم الطبيعية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1Gndio6ZbjZBZ0afR1xhi6hG3-izrqgrO?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1MOyoambiND_ZuOXIVzsrlnZ_vYAS8Js9?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1-w0pjxk6_V9OwFkowgzdEyz-NofAmyg4?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1BWFhYBG33qTdf4jSXxYOhPovtpK4TwHc?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-13',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("العلوم الفيزيائية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1egkYoacQFT9g66I2WcmsPCdpp9fMQ_Q3?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1Cy4Gf9qMSX_DMPEKerpIUsr2pZ7hyy4E?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1o-MgYZW20Ls7Wst6JbXTED4bUpZy7iOy?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1mCsmSLMoG-vdAGSun1uf83tsKTeeMzd9?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-17',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("الفلسفة", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1Md5FROLEOrPwR0WAxjYh0l4uxILj26ir?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1hoLo4nylvtTAb85HxYm68aZFfO6dXyho?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1mkfopOcbhBGViaFEqMNqND4BPYh7UGOR?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1-EW3Bm47gMBAwf9tzKxrd7fX-ixiQqqI?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-16',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة الإنجليزية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1p250Sf0r1vHnYoB3hG1-1eQb2nxaZarq?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1Rruz8-FBh3QoDpjxFd_Hhc73-wxK-aCV?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1-4kgJThCO_a-xQu5cjYXsfRn0noeQxtA?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1Kyx4A1HLJzkp_iUjzofOnMB95p43pEZ3?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-14',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة العربية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1D_ZF6VD27CgjBxLlNl2x6wbsIP7X9vnX?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/19l6ttm_B2OLCcN4IgDJBzno9R0IKM3pF?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1PM4O_mb0sWrmdjK1jSlsz1_mHlagDobI?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1mT2jvulpzugiUFA8P3lRawnpQ1olTjM1?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-15',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة الفرنسية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1YrGJPWxboYUQ2OtRt6jpmhJkeuh51bIN?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/11VL6NDNB30BNeekXwITjAOwEqzcCJ3dt?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1lEpb9sMgaKltwaFEWcXwwVHn25Rmkn54?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1LGDwsamOeZDDQrsdEWlx_65_BBaKjXKS?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-11',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("رياضيات", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1K20sbYparpbX_8Wz6rL7gfe722BnHk3_?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1yobDDI-H_hfor-OtLf_cv171TaD4xKcj?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1YRjcxaggpzMDezQJUwPtCMHjsouL_wb8?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1ZvoCIAdRuKybj5K0CSS7mGHlOOm6xcp-?usp=sharing" }],
                
              
            ]
        }
    });
})


// شعبة تقني رياضي 

bot.action('btn-38',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("الأمازيغية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1B6tTkDRauGUlIJHi5VdHlGH-d7m6SDTs?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1CY_ZXGkXHSxX5PoqOKuaamesYpFXSkgy?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1NkOdD2qwYJfBWWIVQFxD2_GrUgfK1pon?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1tEB_sUeMsHyfBFZvaOkhwgS3XSzJCOzy?usp=sharing" }],
                
              
            ]
        }
    });
})


bot.action('btn-39',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("التاريخ و الجغرافيا", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1Mmu6b3sYaswW0f8W6B8_Pd8CX4msCuIo?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1eyYjCcHvihsWPhs-HecP8GHiBzjYITRL?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1AHYB43oovUZ5MAXCBbtFM9aZ-VxYv8Mi?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1riVYpsk2HzOWY_pXWDZ3qGjcKLjFQ3fn?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-32',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("التكنولوجيا", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1GFr6jeLHVdHQWfJfFxsMxNUojFb3B5br?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1AkMINwkfGeMx7-ohU3aUr8aErzS_i-BX?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1L_NblpS_DHhtIJsX8rHKmLPZ3inmcQVu?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1ojfI2vt14hkybzT8pgwOVOtTkRB4MMVL?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-310',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("العلوم الإسلامية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1oGcBdsoNOveEoYrZbYigBEKKHBj5OWN6?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1otAoJzRKTpCnBKQWHx6FhM0iDSUnXPQn?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/16mCCt4SRu7FxPYEs9Vzynik5mY2sbtt_?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1SmDlh4T_VBlwO6OyBaPT7Eg52RTtiSjh?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-310',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("العلوم الطبيعية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1uDkXQTJgH_Y3BsWqnxMIiJVp3QgfBpbo?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/16gU2XVtKnMRRSaMtD5ZF0Nn7G2sBziPG?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1EXJSAOlupXyJYt_Q-BZc4VySDzJ6jm6X?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1RYtcX6GoSl2ukqWqRHodyfiYwfnq9Ku9?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-33',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("العلوم الفيزيائية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1o6FaL9-v9oZ_tldCjvs17MXyQ6zLbXzJ?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1ktApy3y5kas_Vdrz03QaJWONQiwlEIM0?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/18lEHBuT6it7dn4Zy8fY1B781r0QeeTho?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1BXhiBGfAvdrAgqoQvGMsROP7ykMWGTqJ?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-37',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("الفلسفة", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/17DBzkkdCynm3wnGP_yhz-iUwGO1eSCvU?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1ik_JcbGPnix6O6TibPt-KZZkjRJsdTUC?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1Qy54QuBk0lYerpLTn8ijSHQF6rBOmSj3?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1rVW6nzFvUARtsYi6qIqls4jplSaR3GSo?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-36',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة الإنجليزية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1krCTM68SL1oWzhUvYl1aB9LC8j2OZACh?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1ISiv2VI7dpBz6Y6JulC7JT-o2scComoY?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/12F8mmttQmd46cPk9h-gOWS8bDcb7ZbL8?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1Wrpw2wEXn6D94cwybakDQvt3cqisTTAQ?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-34',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة العربية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1nHdJyZm3Ct2jg-VKPvBwT8e7cyXI1_4a?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1U6OLNZCBklNtXNOl2Emakyp21tKqyUfv?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1QLPX15z-nky58otGBCqqpi7B1Cw1Pgld?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1Up0RhMGXbZo_HLjJd7zIoXgB9iEcjLid?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-35',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة الفرنسية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1_6KOcHQV2YH2GiCwqaoU1PWsUNA2K0qo?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1lq0v8ltJ3swbqPL_U5feGi41lqSyfy1D?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1iP0bZene7Q83MXFN_4gDvf1my2RlzTic?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1fyV8VZUYcp_v49vBgjK41gJDZbGFxIkB?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-31',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("رياضيات", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1cOgVc24zdDFnG9KY26Kp5W9w8iH_mlMM?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1YPLOyRJPKHBHms8CJ3a5g5O_BjEb1NCR?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1yd8Xpz90ktZVEf4Fc2kfSSy-h7Uny2gX?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1dlLLsxlqs3-VuVWrne2ljVBRheJdAIFX?usp=sharing" }],
                
              
            ]
        }
    });
})


// شعبة تسيير و إقتصاد  

bot.action('btn-48',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("الأمازيغية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1bWCmgbfd7WCQTDwWroLe7kc65yFdXpR4?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1VUHaR4vT6hNhrcu5ELh-2MRlMjjC1RzR?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/16OuLBNGHMv18b7dNSM0i9MQNsCGBSxRH?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1gGdnwZGdsl5bHUyPcs_qC88K6urA8Gzz?usp=sharing" }],
                
              
            ]
        }
    });
})


bot.action('btn-410',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("التاريخ و الجغرافيا", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1qcjH_8LLMHdM8fb_VB7KrwuLgGYoa-Tq?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1La_Ig3K86l2bZMwBKWOXw19v7ebCbN8q?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1BUP_AOw2DEz99ZU8BVTRb4LulOcF-2Hu?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1Tjq1GTII4MQhXSE8EkhZzZC0bZYrX2__?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-411',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("العلوم الإسلامية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1vhNnGkcEKKxDT_o_wrPigmttk7Cmpkws?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1kwIQWlNKE4MK-g-ydO_jPbu1sHDSODZ2?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1aEVVqvXtOd7-e10XnTn_fGvKqCbFKG58?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1a2wefnBRVHSggWsq5WZL27uEKdlBRp2a?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-412',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("العلوم الطبيعية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1pgYK_Q9XT-Qt00dLLJkB78mDjCN9Is4l?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1DWjZemycockfm91Sar_JWGH6y6cI8DKm?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1knHtkJj3xr7jygqcvufoMf8UWeXYbelj?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1rkk0Yf_5Lg9kCAPDRQhyK1LZoVPD3uH6?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-413',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("العلوم الفيزيائية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1sJIO0sklXBNOY5q_AiSnyM6uh2I-eC0G?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1yi6vwaD3DuaGiC3l60Nj2uI-HCjbTfjU?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1pwA6otQU2a47kHmxwlmsFoXqHjLf4Cvp?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1GjfdmKctQXWY76i6l-91e5fh-T2gq2IX?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-47',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("الفلسفة", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1w1hxMeWMha8NuowKSX0zE3b4LcSFbeWn?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/13B6eUpZvApYuQfYlICA3TBpn3PTNjXVm?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1E2zVGkfPN_o7bu9RGM5M0lDrhl1rB8gN?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1uOGUJt7DWc-FLgHGVB4-xn2DXQI1yLub?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-46',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة الإنجليزية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1XrgEVs2l0DCAbhRA4kdZGQ1bqlYEkUS5?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1IxSaXa8nasJC2FrWA26TW4E_S2D6BMY2?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/14fM8RuAjLCRP2tSvN_1jNFaHjh5WfzM_?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1KgmTGKQXTi0m6eEULHp7WUNHFiWNFn0R?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-44',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة العربية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1voaeZ62N4f9QurI2pzPThFtoiX2tQTje?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/19MbSDz0oCAZirs41mZNPRUpUfML8T1lC?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1fxTeJmXjjTuIvMEH1_k69mh6u1Ww4dqj?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1LBvt5Lcsscg-_MpK453IV1Rn2Iiqkpzy?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-45',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة الفرنسية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1INa56CdPPvAQFMlhrRha1WIzvdJYIb8s?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1nQbfxnbkSSmhWNNDI6O9JwUiNgjctWlm?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1udxiZwsrvLSao0bC4jjNo6a1gJ-PK-Wb?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1v6otUT2FX8e0OvX57B7S5A2N4fzPBPSQ?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-41',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("رياضيات", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1rL6qF0gaTPQmULW_MsjWeZVm8qxBK1X5?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1GRVuaS60FH49Jr7Ddb2TB_TP1LFHw4A4?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1jxQv_hdxAGCIVWCBVzhSJapbAq9zLV9I?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1_QBGbBGlLdDWyzkDDlN2MRBbPJuLlcgO?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-42',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("الإقتصاد و المناجمنت", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1br3ly0kVVkkmUpLW848ZQ89R7BdcF0W2?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1qV18ePbUDCmmM2VXg9s94y6RgyAa6yZN?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/19Lvk8qX_NppcHRCdz2xwrnzY3CxP0OsR?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1lH6eIrURZHvP8PirzFkzVDx9bRt_4igH?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-49',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("التسيير المحاسبي و المالي ", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1RvQiHhvZiM8HZR_LftyQ-C01aBO0b2aR?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1M4Jn9_x5iPclL38xBsWrY-YfU8eF42Ya?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1WJP_F51XoQP1D84i1Cv0Uy7ZKsUZVAGL?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1GYtqMHPv9kMVCW8gGTn9nEnBzq1yks_E?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-43',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("القانون", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1iI8b9MZfxeuYC3X0u2w6S__0LSZNGMab?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/13SVL2zD6dDAWG0iuJYE5e8xH_hnM08pm?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1yd8Xpz90ktZVEf4Fc2kfSSy-h7Uny2gX?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/19MqnNXoeOyuuDtm_zAAMuiEsW8AhdXyo?usp=sharing" }],
                
              
            ]
        }
    });
})


// شعبة  اللغات 

bot.action('btn-58',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("الأمازيغية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1nkp1O5h2630rBzzt6z48tnyRGJU_uS9B?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1-jD4Hy37PVgvfSxvJ1kmFmQ24P5mylD5?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1kZ4-c5weJQbuYvTMGwxENHL0UH5JGOMX?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/17_KTIGX1TgdexWGC1Se-HGYoEpuOdPlw?usp=sharing" }],
                
              
            ]
        }
    });
})


bot.action('btn-59',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("التاريخ و الجغرافيا", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1XeIcDSoojR404Re18700wo1yRyFWPaJD?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1EMuOdzgcrG412sykg6G-AHOL1X7FEyv-?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/14LZcKxKm9ClswFQOuzBs3EGPw9Lld09m?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1a3OWOm1lS5yBtsjojSLo9HTGbSaPLmuK?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-52',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة الألمانية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1rKlHZ_LQ-Zcdrd6XteA1p8rAeu0m7aZv?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1ILL2kpYFBrpwmC7CDS3KLJoMT6oea5YM?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1R3NRuR80OFsiVDjFQk0r89JvRSQBU9w1?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1DJf9SUD1hTjhovMHR3KHLR6bIpOOfYE9?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-53',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة الإسبانية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1a-UONblqveMYOLztLvYyx3-ciJ98UF4t?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1d50sf0aPxEnku-0RXU4BIyh9vcH_3TVu?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1us26SaBngEuf_3sFfJhMT5u_nSop4k3h?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1SIktsk3x_HsFN0wmGlACAEXT-iWQyfKM?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-510',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("العلوم الإسلامية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1DE79EspjPGEUKdZtrrn1SixdSSjw83E_?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1YnOxrjfx1S6GXPMWy1rQfDNA_pRGcetK?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1uk6fCXy3a4QI8ZIgOiUqjH3XsEoStRQn?usp=sharinging" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1k80anWmSXUgCRX65fISPE0Z3pOTdLmVn?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-57',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("الفلسفة", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1p8gQWR-WeVtntTYng5rhxtHtByT5WFVS?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1AKMsyes6v5ZVXcAc_xhxoaWFVawAhYIE?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1JASaeeMtweB1C4PUpq-G7PPht8WMLR1D?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1kZkeVJ4Zea6uOVl2rJzGFaeWXA0MFYoR?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-56',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة الإنجليزية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1YeSt5kCN2UoPuOt0wtBJMcCmLVAGpqxt?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1g0_LNvOTU9sZglIuxsf-8lneS1CkhuzU?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1-lyAUDHxh2k-CK2QU85hJ3O-2RgoKCEp?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1ccjE-pTkXEiKWsLba7vwugacMxTeLOcg?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-54',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة العربية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1qqd_YaC9g1bJBzLvHBwHfvrwXnHTRg7v?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1Sb6aRpi7xvsx7wlrsjNwraB4qXQQ52wA?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1td2VearNuFYwMwiOzQrFe7Gf7pcbfkqU?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1Z-KvM53vGr22S6lvH9ckjjMuJhboG-S-?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-55',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة الفرنسية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1rDDa1Y1Ir9GbVU8jnBM27ygv0hVMja1b?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1yr5PWTal2XXeyfMDpE1-IQbrSe9tGLk1?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1dkYLWNSHEg5siCQjqW1iUdPtspNM6fGS?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/12PIEs2euyJLaxzLYfAVE_NyCAO9dh3Zj?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-51',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("رياضيات", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/13J-q7dC9Ehtw7O_5I24KvWwMDqYRDsLd?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/17A_yxAxoQgJkwdNHoRBpMkRTQL_fSvLm?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1MGHGMlo0q_O6Pa3wIBePHMYRHqsf7QeG?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1ihJl6Xuv4weyKsi9BdfehRv9-_ZNeAnT?usp=sharing" }],
                
              
            ]
        }
    });
})

// شعبة العلوم التجريبية 

bot.action('btn-28',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("الأمازيغية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1th4AYaMQTFj44NA0u1o6EteKUDJ8iaFl?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1ummAiVeF-xg4KNwdrmHt6WdRCdDDHxPD?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1u_bH7d-x90U7_24E5RAI3ojuql-xMOvf?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1lC3E4RXkSxd0mwInO62RbL-VBVhJMYLN?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-29',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("التاريخ و الجغرافيا", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1WGyr9XfocCFFnECt0Ahcvds9aCkNxHAH?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1A3fZzr6rgJw6xFLuueSykYq6zmxHwEHJ?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1Hj0UxnBQjoqbNZT5qiv_Ie-LWBlr_Ugc?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1oDro8ra64OA6OfH2X6dsPqZLZnb71QqS?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-22',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("العلوم الطبيعية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/13gqhK4Lhid9E9RqWeubiYhpyKqM3bMQj?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1EZFmwtvkUkWriaWSqvyu0u1zOjvc55Al?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1HbkW9UG7UBt2FAHJ9wSbFHU2TNlRncVz?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1WZ7vsnJ7W2la1sdbGrS1s8826p7drJVX?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-210',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("العلوم الإسلامية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1KhWylhZGAUt7Ko2AlClXOiWZsn5LcNme?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1DogXS7cGt6pWd5wyGqRPyGuANTBV7VS3?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1tCo4dgSXWD-aNE2o4i9PNQDopqa81T5c?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1v0USzNzdhzTIg9lAvF54DT6QtxqJTdqr?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-23',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("العلوم الفيزيائية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/17YgQCNCPC4iLJ1DCzvWk0_GXtP6talcN?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1vQhDuhOboIGCphhDbFk2cV8MpbVYfgRV?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1QkujRmJotF1Fn2pr9NT1CQud9-zzID_i?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1oR_HmBZVzYq0tjeZJcvXbLDNfAryViTv?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-27',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("الفلسفة", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1k6u22fJGo8bilXn_sD9QuAQYfB985hqz?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1l8gZasqLkoqqW0j0MCgaMI19GiXhHFG8?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/184kPN8s_Q7Zog2Wd3UprLKqXvmwrvpKu?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1Y273JqNcUIpwUd8TB8gdey7VcreoFiHf?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-26',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة الإنجليزية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1BcIAWJzNQRZH61twCcW67Ted0el2yNB8?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/127uCPVD_mWFdjh5n2JKt9fL1mRIMaf6F?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1R-6cXtc02YRisN4g529V0md2L2gzcNzW?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1r5L9_7RAxyruKDnsudeWrHJk6SPLEIUs?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-24',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة العربية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1xJXbMiBKyzfqocfSrG8kENw1-7k2vRy0?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1WuL6_-tkItmmNqlFSl2CAdrYEgy1gITA?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1OFE4wAYgYxekSm22D1JYnS5ZkHTBnJJL?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1z98T-1GZAUaETJKbzYeWCSKps3_ES9e7?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-25',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة الفرنسية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1drOG0ast-y4f0wSb9Pk10DDmTaJTOrUA?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1n4L49e5jVGJNMbV6k9U6bpNbvumSKFtT?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/12aJ36hMfXysT6JElTLwncP1HQWE2TNys?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1DH4CQq1rnPpIzW2fQeXug2CGfpBu1Oq6?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-21',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("رياضيات", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/12XCwqYiadhYP-rvnENlSEgTWc6X3wMSR?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1WkrVSq2AvHhrrdlGtnQ0mhP87QKxsrqR?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1PFLYABRLHWgBfLvlrVgaysu_BZGM1s8e?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/12CPLm6LUt5vIdqWuXFRFaH2N3ivgIf2D?usp=sharing" }],
                
              
            ]
        }
    });
})


// شعبة آداب و فلسفة
bot.action('btn-68',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("الأمازيغية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/12EdfgDa3mJc0JzI2kVzRVgxyk2D9RdBl?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/12edZ71jtYjeI53MarwP7WHT_0QL9scPM?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1UahOaHa3pkMW7JHAa1CwioBbmHiuWsU_?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1JsZVUYs9ifssflESwm8YWdIxuTS-sJYQ?usp=sharing" }],
                
              
            ]
        }
    });
})


bot.action('btn-69',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("التاريخ و الجغرافيا", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/17A88FhHeUs1AdmvUZRQAr-kfSJlpU8Bv?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1QAs_nkAjQLE8lJSRNzsxsMbvprdiuaLj?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1zOa1Yw1Nfun-P6uYfiXtMOOOgrAUbV_B?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1KttiSAXi-XrH6CHbGOCL7PbxIzINjddK?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-610',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("العلوم الإسلامية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1hZcwtgs-_l3rmA4NZkbVu9TEnmWD5A6n?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1Q-yIv9fZdh1mjwan3NXhWqRhxdyhnjXG?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1dMZfUf3W6-MYEf-TAF-9FzgHcz621MHW?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1lTGRavGfLYPrtRVV5cpv9NMtaFY-KpQl?usp=sharing" }],
                
              
            ]
        }
    });
})



bot.action('btn-67',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("الفلسفة", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1RxTM4Yo5KbgzDaCbo0Vnp5-s3xSbccQ_?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/122Y3UW7yQDhWHUVb-jeo5Lw7Z6BXo0Oe?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1tcuGXkR_iU00OdsRdjn8WGRRdwQUkNHR?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1RgwfzWpZrllqyBQUS0XH3ZBrQIw9-XCZ?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-66',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة الإنجليزية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1Vn_AsUmxgZtzFw-cjSpSbJQUBG0UcPU0?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1I3VF5KDm6JKmIUJyQuwTOkJ8J6rghXXR?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1ZnaVIcs_AZo1bVVmo_QFtiFlfuiQ_cNk?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1WJb4T85seLwbHxlZpr-rEn0OGyybNtgE?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-64',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة العربية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1xmIKs5C30HhmERw4QI4c-aqmMSYOp62J?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1UHu2DybA92rahH9MWDYkw0jrkC5imhH0?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1qizHx0qBr-nEcHMBRYm43GnX9kwsetl8?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1ZPupLgha8JMeCoFKGw0hzCNLw0gYvGhI?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-65',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("اللغة الفرنسية", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1FR6xH2v3vvoGIqul4wZAZ_BZ4VH83Ekj?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1Urg7MjuycFspg8oI5zKuiyQatmx_qPO0?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1ae2Sf9k2_h7STG0-qbzkIkO0fuConEOL?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/198Ol91vXYdIuztu3qEOz0GqZOdaIrcqV?usp=sharing" }],
                
              
            ]
        }
    });
})

bot.action('btn-61',(ctx)=>{
    ctx.deleteMessage(),
    ctx.reply("رياضيات", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " دروس و إمتحانات", url: "https://drive.google.com/drive/folders/1khHMc4zn4jAVCeA4m2I2uArkn3Wq74CU?usp=sharing" }],

                /* One button */
                [ { text: "دروس ", url: "https://drive.google.com/drive/folders/1DFTq6hKei22tvQGbyA9lvO8yjEb0M3qq?usp=sharing" },
                 { text: "إمتحانات ", url: "https://drive.google.com/drive/folders/1aRhdA5AQZ0zsRX-By8KTEOiPhA4ol7Wc?usp=sharing" },
                  { text: "ملخصات ", url: "https://drive.google.com/drive/folders/1ocMAJ95pyeUEm6RuU1vqaCItgyDad2S5?usp=sharing" }],
                
              
            ]
        }
    });
})


bot.command("Doross", (ctx) => {
    ctx.reply("إختر شعبتك عزيزي الطالب ", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: " شعبة الرياضيات ", callback_data: "btn-1" }, { text: " شعبة العلوم التجريبية", callback_data: "btn-2" }],

                /* One button */
                [ { text: "شعبة تقني رياضي", callback_data: "btn-3" }, { text: "شعبة تسيير و اقتصاد ", callback_data: "btn-4" } ],
                
                /* Also, we can have URL buttons. */
                [ { text: "شعبة لغات أجنبية", callback_data: "btn-5" }, { text: "شعبة آداب و فلسفة", callback_data: "btn-6" } ]
            ]
        }
    });
});


bot.hears('السلام عليكم', (ctx) => ctx.reply(' و عليكم السلام و رحمة الله و بركاته'))




bot.launch()


// process.stdin.resume();//so the program will not close instantly

// // Enable graceful stop
// //process.once('SIGINT', () => bot.stop('SIGINT'))
// //process.once('SIGTERM', () => bot.stop('SIGTERM'))
// process.on('SIGINT', function () {
//     console.log('Got SIGINT.  Press Control-D to exit.');
//   });
