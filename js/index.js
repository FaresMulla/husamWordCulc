function onInit() {
    console.log("Ready");
}

var charsInArabicBig = [
    { "char": "ا", "value": "1" },
    { "char": "أ", "value": "1" },
    { "char": "إ", "value": "1" },
    { "char": "ئ", "value": "1" },
    { "char": "ؤ", "value": "1" },
    { "char": "ء", "value": "1" },
    { "char": "آ", "value": "1" },
    { "char": "ب", "value": "2" },
    { "char": "ج", "value": "3" },
    { "char": "د", "value": "4" },
    { "char": "ه", "value": "5" },
    { "char": "ة", "value": "5" },
    { "char": "و", "value": "6" },
    { "char": "ز", "value": "7" },
    { "char": "ح", "value": "8" },
    { "char": "ط", "value": "9" },
    { "char": "ي", "value": "10" },
    { "char": "ك", "value": "20" },
    { "char": "ل", "value": "30" },
    { "char": "م", "value": "40" },
    { "char": "ن", "value": "50" },
    { "char": "س", "value": "60" },
    { "char": "ع", "value": "70" },
    { "char": "ف", "value": "80" },
    { "char": "ص", "value": "90" },
    { "char": "ق", "value": "100" },
    { "char": "ر", "value": "200" },
    { "char": "ش", "value": "300" },
    { "char": "ت", "value": "400" },
    { "char": "ث", "value": "500" },
    { "char": "خ", "value": "600" },
    { "char": "ذ", "value": "4" },
    { "char": "ض", "value": "800" },
    { "char": "ظ", "value": "900" },
    { "char": "غ", "value": "1000" },
]

function culcWordlength() {
    var eTabel = document.querySelector(".charsTable");
    var myTable = ''
    var text = document.querySelector(".theWord").value;
    if (text.length === 1) {
        myTable = `
        <table class="table table-striped table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">الحرف</th>
                            <th scope="col">القيمة في الجمّل الكبير</th>
                            <th scope="col">القيمة في الجمّل الصغير</th>
                        </tr>
                    </thead>
                    <tbody class="charsRow">



                    </tbody>
                    <tbody>
                        <tr class="fw-bolder">
                            <th scope="row">@</th>
                            <td>المجموع</td>
                            <td><span class="wordCulcBig2"></span></td>
                            <td>
                                <ul>
                                    <li>قبل الإسقاط: <span class="wordCulcSmall2 text-danger"></span></li>
                                    <li>بعد الإسقاط: <span class="wordCulcSmallFinnaly2 text-success"></span></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
        `
        eTabel.innerHTML = myTable;
    } else if (text.length === 0) { 
        eTabel.innerHTML = '';
        document.querySelector(".wordCulc").innerHTML = '';
        document.querySelector(".theWordText").innerHTML = '';
        document.querySelector(".wordCulcBig").innerHTML = '';        
        document.querySelector(".wordCulcSmall").innerHTML = '';
        document.querySelector(".wordCulcSmallFinnaly").innerHTML = '';

    }

    if (text.length === 0) return

    counter = 0
    for (var i = 0; i < text.length; i++) {
        if (text[i] != " ") {
            counter++;
        }
    }
    document.querySelector(".wordCulc").innerHTML = counter;
    document.querySelector(".theWordText").innerHTML = text;

    counterBig = 0
    for (var i = 0; i < text.length; i++) {
        for (var j = 0; j < charsInArabicBig.length; j++) {
            if (text[i] == charsInArabicBig[j].char) {
                counterBig += parseInt(charsInArabicBig[j].value);
            }
        }
    }
    document.querySelector(".wordCulcBig").innerHTML = counterBig;
    document.querySelector(".wordCulcBig2").innerHTML = counterBig;

    counterSmall = 0
    for (var i = 0; i < text.length; i++) {
        for (var j = 0; j < charsInArabicBig.length; j++) {
            if (text[i] == charsInArabicBig[j].char) {
                charSmall = parseInt(charsInArabicBig[j].value)%12;
                counterSmall += charSmall;
            }
        }
    }
    document.querySelector(".wordCulcSmall").innerHTML = counterSmall;
    document.querySelector(".wordCulcSmall2").innerHTML = counterSmall;
    if(counterSmall >= 12) counterSmall = counterSmall%12;
    document.querySelector(".wordCulcSmallFinnaly").innerHTML = counterSmall;
    document.querySelector(".wordCulcSmallFinnaly2").innerHTML = counterSmall;
}


function charsToTabel() {
    var text = document.querySelector(".theWord").value;
    if (text.length === 0) return
    var eTbody = document.querySelector(".charsRow");
    var strHteml = "";
    var counter = 1;
    for (var i = 0; i < text.length; i++) {
        
        for (var j = 0; j < charsInArabicBig.length; j++) {
            if (text[i] == charsInArabicBig[j].char) {
                strHteml += "<tr><th>" + counter++ + "</th><td>"+  text[i] + "</td><td>" + charsInArabicBig[j].value + "</td><td>" + parseInt(charsInArabicBig[j].value)%12 + "</td></tr>";
            }
        }
    }
    eTbody.innerHTML = strHteml;
}

function renderTable() {
    
    var strHteml = `
    
    `;
    eTabel.innerHTML = strHteml;
}