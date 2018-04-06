

    ejs_box2_message = new Array;
    ejs_box2_message[0] = 'Paris, Vendredi 6 Avril 2018. Le black out est total. Paris était complètement englouti dans les ténèbres. De nombreux citoyens restèrent bloqués. Parmis eux, 3 formatrices de renom';

    ejs_box2_actual = 0;
    ejs_box2_html_flag = 0;

    function ejs_box2_go() {
        if (document.getElementById) {
            ejs_box2_char = 1;
            ejs_box2_affich(ejs_box2_actual)
            ejs_box2_actual++;
            if (ejs_box2_actual >= ejs_box2_message.length) ejs_box2_actual = 0;
        }
    }

    function ejs_box2_affich(lactual) {
        let pix = ejs_box2_message[lactual].charAt(ejs_box2_char);
        if (pix == "<") ejs_box2_html_flag = 1;
        if (pix == ">") ejs_box2_html_flag = 0;
        let texte = ejs_box2_message[lactual].substring(0, ejs_box2_char);
        document.getElementById("ejs_box2_box").innerHTML = texte;
        if (ejs_box2_char < ejs_box2_message[lactual].length) {
            ejs_box2_char++;
            if (ejs_box2_html_flag == 1) ejs_box2_affich(lactual);
            else setTimeout("ejs_box2_affich(" + lactual + ")", 70)
        } else setTimeout("ejs_box2_go()", 300000)
    }

    window.onload = ejs_box2_go;
