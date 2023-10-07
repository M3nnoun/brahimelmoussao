setTimeout("$('.body').css('transform','translateY(0)');", 1e3), setTimeout("$('.main-desc').addClass('b-show')", 1500), setTimeout("$('body').addClass('add-scroll')", 3e3), setTimeout("$('html').addClass('add-scroll')", 3e3), $(".glow-button").on("click", function() {
    $(".comment-item").addClass("comment-item-show"), $(".glow-button").addClass("hide"), $(".shine-button").addClass("show")
});
const OFFER = "«Nokta Slim»";
let now = new Date,
    mm = now.getMonth() + 1,
    day = now.getDate(),
    year = now.getFullYear(),
    date = day + "." + mm + "." + year;
const massange = [{
    m: "مرحبا، اسمي سارة بناني. أنا اختصاصي تغذية وأخصائي تغذية وغدد صماء. مرحبا بكم في موقع الويب الخاص بي."
}, {
    m: "أقدم هنا تشخيصات مجانية عبر الإنترنت وتوصيات شخصية ساعدت الآلاف من مرضاي على التخلص من الوزن الزائد."
}, {
    m: "للحصول على نصائحي حول فقدان الوزن، أجب عن بعض الأسئلة."
}, {
    m: '<p class="quest">كم كيلو تريد أن تخسر؟</p>'
}, {
    m: '<p class="quest">ما هي أجزاء جسمك التي تحتاج إلى تصحيح؟</p>'
}, {
    m: '<p class="quest">ما مدى نشاط نمط حياتك؟</p>'
}, {
    m: '<p class="quest">هل تأكل جيدا؟</p>'
}, {
    m: '<p class="quest">عمرك؟</p>'
}, {
    m: '<p class="quest">ما هو وزنك الحالي؟</p>'
}, {
    m: '<p class="quest">طول قامته؟</p>'
  }, {
      m: "شكرا. من المؤكد أنك تعاني من زيادة الوزن، ولكنك قادر تمامًا على تحقيق هدفك المنشود في إنقاص الوزن. السبب الرئيسي لزيادة الوزن هو بطء عملية التمثيل الغذائي. وهذا ما يميز بشكل خاص الدهون الحشوية التي تتراكم حول الجانبين والبطن."
  }, {
      m: "توصية لك شخصيا. اشرب القهوة والسبيرولينا والغوارانا والكارنيتين"
  }, {
      m: "سبيرولينا يزيل المعادن الثقيلة ويعيد عمليات التمثيل الغذائي في الجسم"
  }, {
      m: "القهوة هي أحد مضادات الأكسدة الطبيعية، وتحفز جهاز المناعة وتزيل السموم"
  }, {
      m: "تزيد الجوارانا من عملية التمثيل الغذائي ولها تأثير قوي في حرق الدهون"
  }, {
      m: "يعزز L-carnitine عمل المكونات الأخرى وهو أحد أقوى محارق الدهون"
  }, {
      m: "يمكن استهلاك المكونات المدرجة بشكل فردي، ولكن استخدامها كجزء من المجمع أكثر ملاءمة وفعالية " + OFFER + ". وهي موجودة في شكل مستخلصات مكثفة مع أقصى تركيز للمواد المفيدة."
  }, {
      m: 'لفقدان الوزن بشكل واضح، يكفي تناوله ثلاث مرات في اليوم: في الصباح، أثناء تناول الطعام، وفي الليل. في شهر واحد فقط، يمكنك الوصول إلى هدفك.'
  }, {
      m: 'هذا هو ما يبدو:'
  }, {
      m: ' <img src="assets/img/product.webp" class="product-img" style="width: 100%; max-width: 240px;">'
  },{
      m: "يحتوي المنتج على مستخلصات مركزة إلى أقصى حد من محارق الدهون الطبيعية، والتي تؤدي إلى عملية حرق الدهون وتبقيها قيد التشغيل."
  }, {
      m: "لذلك، " + OFFER + " إنه يكسر ويزيل بشكل فعال الدهون الحشوية التي تغطي جدران الأعضاء الداخلية ويمنعها من العمل بشكل صحيح، ويفتح عملية التمثيل الغذائي، وينظف الجسم من السموم والشوائب."
  }, {
      m: "ونتيجة لذلك، يتخلص جسمك من الدهون الزائدة من تلقاء نفسه، ويستخدمها كمصدر للطاقة. ستبدأ في تناول كميات أقل ولن تشعر بالجوع، مما يزيد من تأثير فقدان الوزن."
  }, {
      m: 'فيما يلي نتائج عملائي الذين نجحوا في فقدان الوزن بمساعدة توصياتي:'
  }, {
      m: ' <img src="assets/img/comm2-92a-arb.jpg" style="border-radius: 0px 10px 10px 10px"> '
  },{
      m: '<img src="assets/img/comm-photo3-135-arb.jpg" style="border-radius: 0px 10px 10px 10px">'
  },{
      m: '<img src="assets/img/comm6-abb-arb.jpg" style="border-radius: 0px 10px 10px 10px"> '
  },{
      m: "المدة المثالية للدورة، والتي تأخذ في الاعتبار عمرك ومؤشر كتلة جسمك الحالي ونمط حياتك، ستكون حوالي 60 يومًا في المتوسط"
  }, {
      m: "خلال هذا الوقت، سيتم تنظيف الجسم بعمق وسيتم تطبيع عملية التمثيل الغذائي."
  }, {
      m: "لدي أيضًا أخبار رائعة لك. لقد تم تشخيصك عبر الإنترنت وأصبحت مريضي رقم 2000."
  }, {
      m: "اضغط على زر التدوير أدناه، وإذا كنت محظوظًا، فستتمكن من الطلب" + OFFER + " بسعر أقل من المعتاد. عدد العبوات الترويجية محدود، لذا أنصحك بالإسراع وتقديم طلبك."
  }];
var mass_id = 0,
    length_mass = 0,
    lengt_num_mas = 0,
    text = "",
    speedtext = 75,
    process = !0;

function app() {
    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2),
        t = ("0" + e.getHours()).slice(-2) + ":" + s;
    if ($(".chat").height() + 100 > $(".content").height()) {
        $("#scroll_id").removeClass("hide");
        var n = $(".inp").val();
        $(".inp").val(++n)
    }
    const c = '<div class="chat-content-item manager "><div class="img-doc"><img src="assets/img/header-ava-eac-arb.png" alt=""> </div><div class="chat-content-desc"><span class="doc-name">ماريا جونزاليس</span><div class="chat-content-desc-item manager ch1"><p class="text text_img" id="mass' + mass_id + '"></p></div><p class="message-time" id="time">' + t + '</p></div></div>';
    $(".chat-content-list").append(c), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
}

function myMassange(e) {
    var s = new Date,
        t = ("0" + s.getMinutes()).slice(-2);
        let n = '<div class="chat-content-item user item-active"><div class="chat-content-desc"><span class="doc-name doc-dir">أنت</span><div class="chat-content-desc-item user"><p class="text" class="users_mass">' + e + "</p></div>"+ '<p className="message-time new_time" id="time">' + (("0" + s.getHours()).slice(-2) + ':' + t) + '</p></div></div>';
    $(".chat-content-list").append(n), $(".content").animate({
        scrollTop: $(".chat-content-list").height()
    }, 700), $("#scroll_id").addClass("hide")
}

function question1() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">ما يصل إلى 5 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">من 5 إلى 10 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">10 a 15 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">أكثر من 15 كجم</span></div></div>')
}

function choise1() {
    $(".question1M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("ما يصل إلى 5 كجم"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 5 إلى 10 كجم"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 10 إلى 15 كجم"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 15 كجم"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question2() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">الخصر والبطن</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">الفخذين والأرداف</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">الذراعين أو الساقين</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">أريد أن أفقد الوزن في كل مكان</span></div></div>')
}

function choise2() {
    $(".question2M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("الخصر والبطن"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("الفخذين والأرداف"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("الذراعين أو الساقين"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أريد أن أفقد الوزن في كل مكان"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question3() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">أتدرب 3 إلى 5 مرات في الأسبوع</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">أتدرب 1 إلى 3 مرات في الأسبوع</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">لا تمارس الرياضة، بل حاول المشي</span></div><div class="chat-content-buttons-gender-block"><span class="question3T">نمط الحياة المستقرة</span></div></div>')
}

function choise3() {
    $(".question3M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أتدرب 3 إلى 5 مرات في الأسبوع"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أتدرب 1 إلى 3 مرات في الأسبوع"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا تمارس الرياضة، بل حاول المشي"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نمط الحياة المستقرة"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question4() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">نعم، احسبي السعرات الحرارية، لا حلويات أو معجنات</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">حوالي 50/50</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">أحب الوجبات السريعة والوجبات السريعة والحلويات</span></div><div class="chat-content-buttons-gender-block"><span class="question4T">تناول الأطعمة الخاطئة</span></div></div>')
}

function choise4() {
    $(".question4M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم، احسبي السعرات الحرارية، لا حلويات أو معجنات"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("حوالي 50/50"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أحب الوجبات السريعة والوجبات السريعة والحلويات"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("تناول الأطعمة الخاطئة"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question5() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">ما يصل إلى 20 عاما</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">20-30 سنة</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">31-40 سنة</span></div><div class="chat-content-buttons-gender-block"><span class="question5T">41-50 سنة</span></div><div class="chat-content-buttons-gender-block"><span class="question5G">أكثر من 50 سنة</span></div></div>')
}

function choise5() {
    $(".question5M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("ما يصل إلى 20 عاما"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("20-30 سنة"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("31-40 سنة"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("41-50 سنة"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5G").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 50 سنة"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question6() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">ما يصل إلى 60 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">60 إلى 70 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question6P">71 إلى 80 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question6T">من 81 إلى 90 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question6O">أكثر من 90 كجم</span></div></div>')
}

function choise6() {
    $(".question6M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("ما يصل إلى 60 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("60 إلى 70 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("71 إلى 80 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 81 إلى 90 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6O").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 90 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question7() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">أقل من 150 سم</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">150-160 سم</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">161-170 سم</span></div><div class="chat-content-buttons-gender-block"><span class="question7T">171-180 سم</span></div><div class="chat-content-buttons-gender-block"><span class="question7G">أكثر من 180 سم</span></div></div>')
}

function choise7() {
    $(".question7M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أقل من 150 سم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("150-160 سم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("161-170 سم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("171-180 سم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7G").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 180 سم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

setTimeout(() => {
    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2);
    const t = '<div class="chat-content-item manager "><div class="img-doc"><img src="assets/img/header-ava-eac-arb.png" alt=""> </div><div class="chat-content-desc"><span class="doc-name">ماريا جونزاليس</span><div class="chat-content-desc-item manager ch1"><p class="text" id="mass' + mass_id + '"></p></div><p class="message-time" id="time">' + (("0" + e.getHours()).slice(-2) + ":" + s) + '</p></div></div>';
    $(".chat-content-list").append(t), $("#scroll_id").click(function(e) {
        $(this).removeClass("hide-q"), $(".content").animate({
            scrollTop: $(".chat").height()
        }, 700)
    });
    const n = setInterval(function() {
        if (1 == process)
            if (lengt_num_mas != massange.length) {
                if (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#mass" + lengt_num_mas).html(text), 3 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question1(), process = !1, choise1(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 4 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question2(), process = !1, choise2(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 5 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question3(), process = !1, choise3(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 6 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question4(), process = !1, choise4(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 7 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question5(), process = !1, choise5(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 8 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question6(), process = !1, choise6(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 9 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question7(), process = !1, choise7(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length) {
                    lengt_num_mas++, mass_id++, length_mass = 0, text = "", app()
                }
            } else clearInterval(n), $("#mass" + lengt_num_mas).parent().parent().parent().css("display", "none"), $(".iframe-form").addClass("show"), $(".btn-top").addClass("show")
    }, speedtext)
}, 1e3), $(".content").scroll(function() {
    "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
});
var $marker = $("#down-box");
$(".content").scroll(function() {
    $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
});

function viewDiv(){
    document.getElementById("div1").style.display = "block";
    document.querySelector(".content").style.opacity = "0.5";
  };

  function viewDiv2(){
    document.getElementById("div1").style.display = "none";
    document.querySelector(".content").style.opacity = "1";

  };
  function viewDiv3(){
    document.getElementById("div1").style.display = "none";
    document.querySelector(".content").style.opacity = "1";

  };
  function viewDiv4(){
    document.getElementById("div1").style.display = "block";
    document.querySelector(".content").style.opacity = "0.5";

  };
