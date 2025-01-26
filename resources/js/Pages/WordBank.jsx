import React, { useState } from "react";
import NavBar from '../components/Navbar';
import backgroundImage from "../assets/backgroundImage.gif";

function WordBank({ user }) {
  const words = [
    {
      word: "Mahirang",
      meaning: "Mailagay sa posisyon o mataas na antas.",
      antonyms: "Hindi pinili",
      synonyms: "Mapili, Maitalaga",
      example: "Siya'y naging isang mabuting pinuno nang siya'y mahirang bilang hari.",
    },
    {
      word: "Likas",
      meaning: "Natural",
      antonyms: "Artipisyal, peke",
      synonyms: "Natural",
      example: "Ang kanyang ugali ay likas at hindi pilit.",
    },
    {
      word: "Maikakaila",
      meaning: "Maitatanggi",
      antonyms: "Tanggap, walang duda",
      synonyms: "Maitatatwa",
      example: "Hindi maikakaila na ang kanyang husay sa laro ay walang katulad.",
    },
    {
      word: "Namayani",
      meaning: "Nanguna o nangibabaw.",
      antonyms: "Natalo, nagapi",
      synonyms: "Nangibabaw, nangingibabaw",
      example: "Namayani ang kanyang lakas sa laban."
    },
    {
      word: "Tanyag",
      meaning: "Kilala at sikat sa buong bansa.",
      antonyms: "Hindi kilala, hindi sikat",
      synonyms: "Sikat, popular, kilala",
      example: "Ang artista ay tanyag sa buong mundo dahil sa kanyang mga pelikula."
    },
    {
      word: "Piging",
      meaning: "Pagdiriwang na may kasamang pagkain.",
      antonyms: "Pagkatalo, pagkatalo sa handaan",
      synonyms: "Handaan, salu-salo, kasiyahan",
      example: "Nagdaos sila ng isang piging upang ipagdiwang ang kanyang tagumpay."
    },

    // Kabanata 2: Ang Karamdaman ni Don Fernando
    {
      word: "Buhong",
      meaning: "Taong lumalabag sa batas o kriminal.",
      antonyms: "Matino, tapat",
      synonyms: "Kriminal, hindi tapat, salarin",
      example: "Ang mga buhong ay tumakas pagkatapos ng kanilang kasalanan."
    },
    {
      word: "Lunas",
      meaning: "Gamot o paggamot sa sakit.",
      antonyms: "Karagdagang sakit, hindi gumagaling",
      synonyms: "Paggamot, gamot",
      example: "Kailangan niya ng lunas upang gumaling mula sa sakit."
    },
    {
      word: "Monarka",
      meaning: "Kaharian o pinuno ng isang bansa.",
      antonyms: "Karaniwang tao, gobernador",
      synonyms: "Hari, reyna, pinuno",
      example: "Siya ang monarka ng buong kaharian."
    },
    {
      word: "Pinaslang",
      meaning: "Pinatay o inatake ng malupit.",
      antonyms: "Ipinanganak, binuhay",
      synonyms: "Pinatay, nilapastangan",
      example: "Ang lider ng bayan ay pinaslang ng mga hindi kilalang tao."
    },

    // Kabanata 3: Ang Paglalakbay ni Don Pedro
    {
      word: "Matunton",
      meaning: "Marating",
      antonyms: "Hindi mararating",
      synonyms: "Mararating, maabot",
      example: "Sa wakas, natutunan niyang matunton ang kanyang destinasyon."
    },
    {
      word: "Laksa-laksa",
      meaning: "Marami, dagsa",
      antonyms: "Kakaunti, sparse",
      synonyms: "Marami, sagana",
      example: "Ang mga tao ay nagtipon-tipon at ang laksa-laksa ng kanilang bilang."
    },
    {
      word: "Dumapo",
      meaning: "Dumikit",
      antonyms: "Lumayo, tumakas",
      synonyms: "Tumigil, dumikit",
      example: "Ang ibon ay dumapo sa kanyang balikat."
    },
    {
      word: "Namalayan",
      meaning: "Naramdaman.",
      antonyms: "Hindi napansin, nabalewala",
      synonyms: "Nararamdaman, napansin",
      example: "Namalayan niyang may nagmamasid sa kanya."
    },
    {
      word: "Isang iglap",
      meaning: "Isang sandali, isang pagkakataon",
      antonyms: "Matagal, mahaba",
      synonyms: "Paspas, mabilis",
      example: "Isang iglap lang ay natapos ang laban."
    },

    // Kabanata 4: Ang Kabiguan ni Don Pedro
    {
      word: "Inatasan",
      meaning: "Inutusan o pinakausapang gawin ang isang bagay",
      antonyms: "Walang utos",
      synonyms: "Pinag-utos, ipinagbilin",
      example: "Inatasan siya ng hari na magsagawa ng misyon."
    },
    {
      word: "Nasaksihan",
      meaning: "Nakita",
      antonyms: "Hindi nakita",
      synonyms: "Nakita, nasilayan",
      example: "Nasaksihan niya ang lahat ng pangyayari sa korte."
    },
    {
      word: "Lamyos",
      meaning: "Malambing",
      antonyms: "Malupit, magaspang",
      synonyms: "Mahal, magaan",
      example: "Ang kanyang boses ay may malamyos na tunog."
    },

    // Kabanata 5: Ang Paglalakbay ni Don Juan
    {
      word: "Lumubha",
      meaning: "Lumala",
      antonyms: "Bumuti, gumaling",
      synonyms: "Lumala, tumindi",
      example: "Lumubha ang kanyang kalagayan at kailangan ng agarang tulong."
    },
    {
      word: "Atubili",
      meaning: "Madali",
      antonyms: "Mabagal, matagal",
      synonyms: "Mabilis, hindi magpatumpik-tumpik",
      example: "Atubili niyang tinanggap ang hamon."
    },
    {
      word: "Bendisyon",
      meaning: "Basbas",
      antonyms: "Sumpa, sumpain",
      synonyms: "Pagpapala, biyaya",
      example: "Humingi siya ng bendisyon mula sa kanyang mga magulang."
    },
    {
      word: "Hangarin",
      meaning: "Nais, gusto",
      antonyms: "Walang layunin",
      synonyms: "Hangarin, layunin",
      example: "Ang kanyang hangarin ay maging matagumpay sa buhay."
    },
    {
      word: "Usal",
      meaning: "Sambit",
      antonyms: "Tahimik",
      synonyms: "Pagbulong, sinabi",
      example: "Usal niya ang mga dasal sa kanyang mga labi."
    },
    {
      word: "Leproso",
      meaning: "Taong may sakit sa balat",
      antonyms: "Malusog, walang sakit",
      synonyms: "May sakit sa balat",
      example: "Ang leproso ay pinagmumulan ng takot sa komunidad."
    },

    // Kabanata 6: Ang Leprosong Ermitanyo
    {
        word: "Limos",
        meaning: "Pera, pagkain, o ano mang uri ng pagtulong",
        antonyms: "Walang tulong",
        synonyms: "Tulong, handog",
        example: "Ang mga tao ay nagbigay ng limos sa mahihirap na pamilya."
    },
    {
        word: "Leproso",
        meaning: "Taong may sakit sa balat",
        antonyms: "Malusog, walang sakit",
        synonyms: "May sakit sa balat",
        example: "Ang leproso ay pinagmumulan ng takot sa komunidad."
    },
    {
        word: "Ermitanyo",
        meaning: "Taong nabubuhay mag-isa",
        antonyms: "Sosyal, may kasama",
        synonyms: "Nag-iisa, nag-iisa sa buhay",
        example: "Ang ermitanyo ay tahimik at malayo sa mga tao."
    },
    {
        word: "Pakay",
        meaning: "Intensyon",
        antonyms: "Walang plano, layunin",
        synonyms: "Layunin, layon",
        example: "Ang kanyang pakay ay makamit ang tagumpay."
    },
    {
        word: "Dampa",
        meaning: "Bahay kubo",
        antonyms: "Mahal na bahay, palasyo",
        synonyms: "Kubo, maliit na bahay",
        example: "Ang pamilya ay nakatira sa isang maliit na dampa sa gilid ng bundok."
    },
    {
        word: "Lunas",
        meaning: "Gamot",
        antonyms: "Sakit, karamdaman",
        synonyms: "Solusyon, kaginhawahan",
        example: "Ang mga halaman sa paligid ay ginagamit bilang lunas sa mga simpleng sakit."
    },
    {
        word: "Nasaksihan",
        meaning: "Nakita",
        antonyms: "Hindi nakita",
        synonyms: "Naranasan, natanaw",
        example: "Nasaksihan ko ang masakit na tanawin ng pagkawasak ng kanilang bahay."
    },
    {
        word: "Diwa",
        meaning: "Isip",
        antonyms: "Katawan",
        synonyms: "Isipan, pakiramdam",
        example: "Ang diwa ng bawat tao ay may malaking papel sa kanilang tagumpay."
    },
    {
        word: "Engkantado",
        meaning: "Kakaibang nilalang",
        antonyms: "Karaniwan, tao",
        synonyms: "Mistikong nilalang, diwata",
        example: "Ang engkantado ay nagtago sa kagubatan mula sa mga tao."
    },
    {
        word: "Masisilayan",
        meaning: "Makikita",
        antonyms: "Hindi makita",
        synonyms: "Masaksihan, matanaw",
        example: "Ang magandang tanawin ng bundok ay masisilayan mula sa itaas ng burol."
    },
    {
        word: "Dayap",
        meaning: "Uri ng sitrus (parang kalamansi)",
        antonyms: "Mango, papaya",
        synonyms: "Kalamansi, limon",
        example: "Ginamit nila ang dayap sa paghahanda ng masarap na sawsawan."
    },
    {
        word: "Panggapos",
        meaning: "Pangtali",
        antonyms: "Walang tali",
        synonyms: "Kadena, tali",
        example: "Ginamit ng mang-uukit ng kahoy ang panggapos para ayusin ang kanilang kagamitan."
    },

    // Kabanata 7: Ang Ibong Adarna
    {
        word: "Nasaksihan",
        meaning: "Nakita",
        antonyms: "Hindi nakita",
        synonyms: "Naranasan, natanaw",
        example: "Nasaksihan ng lahat ang kagandahan ng Ibong Adarna."
    },
    {
        word: "Gilas",
        meaning: "Sigla",
        antonyms: "Pagod, hina",
        synonyms: "Bilis, lakas",
        example: "Ang gilas ng ibon ay hindi matutularan ng iba."
    },
    {
        word: "Kariktan",
        meaning: "Kagandahan",
        antonyms: "Pangit, hindi kaakit-akit",
        synonyms: "Ganda, alindog",
        example: "Ang kariktan ng Ibong Adarna ay namutawi sa kanyang mga mata."
    },
    {
        word: "Ermitanyo",
        meaning: "Taong nabubuhay mag-isa",
        antonyms: "Sosyal, may kasama",
        synonyms: "Nag-iisa, nag-iisa sa buhay",
        example: "Ang ermitanyo sa bundok ay tumulong kay Don Juan."
    },
    {
        word: "Dayap",
        meaning: "Uri ng sitrus (parang kalamansi)",
        antonyms: "Mango, papaya",
        synonyms: "Kalamansi, limon",
        example: "Ang dayap ay ginagamit sa paggawa ng masarap na inumin."
    },
    {
        word: "Marahan",
        meaning: "Dahan-dahan",
        antonyms: "Mabilis",
        synonyms: "Tiyaga, banayad",
        example: "Marahan niyang binanggit ang pangalan ng kanyang kaibigan."
    },
    {
        word: "Dampa",
        meaning: "Bahay kubo",
        antonyms: "Mahal na bahay, palasyo",
        synonyms: "Kubo, maliit na bahay",
        example: "Ang kanilang dampa ay matatagpuan sa tabi ng ilog."
    },
    {
        word: "Hawla",
        meaning: "Kulungan",
        antonyms: "Kalayaan",
        synonyms: "Kagubatan, kulungan ng hayop",
        example: "Ang ibon ay nakulong sa hawla at hindi makalipad."
    },

    // Kabanata 8: Ang Pagligtas kay Don Diego at Don Pedro
    {
        word: "Ermitanyo",
        meaning: "Taong nabubuhay mag-isa",
        antonyms: "Sosyal, may kasama",
        synonyms: "Nag-iisa, nag-iisa sa buhay",
        example: "Ang ermitanyo ay nagbigay gabay kay Don Juan."
    },
    {
        word: "Sumalok",
        meaning: "Kumuha",
        antonyms: "Iwasan, iwas",
        synonyms: "Kunwaring kumuha, pagkuha",
        example: "Sumalok siya ng tubig mula sa batis upang magamit sa pagluluto."
    },
    {
        word: "Nagtungo",
        meaning: "Nagpunta",
        antonyms: "Bumalik, umuwi",
        synonyms: "Pumunta, naglakbay",
        example: "Nagtungo si Don Juan sa bundok upang maghanap ng solusyon."
    },
    {
        word: "Nagalak",
        meaning: "Natuwa",
        antonyms: "Nalungkot",
        synonyms: "Masaya, nagdiwang",
        example: "Nagkaroon ng kasiyahan at nagalak ang buong kaharian."
    },
    {
        word: "Dampa",
        meaning: "Bahay kubo",
        antonyms: "Mahal na bahay, palasyo",
        synonyms: "Kubo, maliit na bahay",
        example: "Ang dampa ay nagbigay ng kanlungan kay Don Pedro."
    },
    {
        word: "Piging",
        meaning: "Handaan",
        antonyms: "Pagkagutom, kakulangan",
        synonyms: "Pagdiriwang, selebrasyon",
        example: "Nagkaroon sila ng piging upang ipagdiwang ang kanilang tagumpay."
    },
    // Kabanata 9: Ang Mahiwagang Katotohanan
    {
        word: "Ermitanyo",
        meaning: "Taong nabubuhay mag-isa",
        antonyms: "Sosyal, may kasama",
        synonyms: "Nag-iisa, nag-iisa sa buhay",
        example: "Ang ermitanyo ay tumulong kay Don Juan sa kanyang misyon."
    },
    {
        word: "Ipinamalas",
        meaning: "Ipinakita",
        antonyms: "Itago",
        synonyms: "Ipinahayag, ipakita",
        example: "Ipinamalas ng ermitanyo ang tunay na layunin ni Don Juan."
    },
    {
        word: "Payapa",
        meaning: "Tahimik",
        antonyms: "Magulo, ingay",
        synonyms: "Kalma, matahimik",
        example: "Ang bayang ito ay payapa at walang alitan."
    },
    {
        word: "Paglililo",
        meaning: "Pagtataksil",
        antonyms: "Katapatan",
        synonyms: "Panlilinlang, pandaraya",
        example: "Ang paglililo ng mga prinsipe ay nagdulot ng malaking kapahamakan."
    },
    {
        word: "Manahan",
        meaning: "Manatili, tumira",
        antonyms: "Lumisan",
        synonyms: "Magtagal, magstay",
        example: "Nagdesisyon silang manahan sa isang malayong dampa."
    },
    {
        word: "Hawla",
        meaning: "Kulungan",
        antonyms: "Kalayaan",
        synonyms: "Kagubatan, kulungan ng hayop",
        example: "Ang ibon ay nakulong sa hawla ng mga manghuhuli."
    },
    {
        word: "Nakagulapay",
        meaning: "Nakahiga sa pagod, masama ang pakiramdam",
        antonyms: "Malakas, masigla",
        synonyms: "Pagod, nahirapan",
        example: "Nakagulapay siya sa sobrang pagod matapos ang mahabang paglalakbay."
    },
    {
        word: "Tangay",
        meaning: "Dala",
        antonyms: "Walang dala",
        synonyms: "Karga, bitbit",
        example: "Ang ibon ay tangay ang mahahalagang gamit na kailangan ni Don Juan."
    },

    // Kabanata 10: Ang Pagtataksil nina Don Pedro at Don Diego
    {
        word: "Nakaratay",
        meaning: "Nakahiga",
        antonyms: "Nakaupo, nakatayo",
        synonyms: "Naka-extend, higa",
        example: "Nakaratay siya sa kama dahil sa matinding karamdaman."
    },
    {
        word: "Nanlumo",
        meaning: "Nanghina",
        antonyms: "Masigla, malakas",
        synonyms: "Nagdalamhati, malungkot",
        example: "Nanlumo ang hari nang malaman ang naganap na pagtataksil."
    },
    {
        word: "Lulugo-lugo",
        meaning: "Matamlay, mahina",
        antonyms: "Masigla, malakas",
        synonyms: "Panghina, malungkot",
        example: "Ang kanyang katawan ay lulugo-lugo mula sa matinding kalungkutan."
    },
    {
        word: "Nanariwa",
        meaning: "Naalala",
        antonyms: "Nakalimutan",
        synonyms: "Bumalik sa alaala, nagbalik-loob",
        example: "Nanariwa ang mga alaalang masaya noong kabataan nila."
    },
    {
        word: "Pinaslang",
        meaning: "Pinatay",
        antonyms: "Binuhay",
        synonyms: "Pinuksa",
        example: "Ang pagtataksil ng mga prinsipe ay nagresulta sa pinaslang na hari."
    },
    {
        word: "Buhong",
        meaning: "Kriminal, lumalabag sa batas",
        antonyms: "Tapat, matuwid",
        synonyms: "Salbahe, kriminal",
        example: "Ang buhong na mga manghuhuli ay nagpapahirap sa mga tao."
    },

    // Kabanata 11: Ang Panalangin ni Don Juan
    {
        word: "Hangad",
        meaning: "Gusto",
        antonyms: "Hindi gusto",
        synonyms: "Nais, ibig",
        example: "Hangad ni Don Juan ang kanyang kaligtasan."
    },
    {
        word: "Sariwain",
        meaning: "Alalahanin",
        antonyms: "Kalimutang",
        synonyms: "Balikan, ipaliwanag muli",
        example: "Sariwain mo ang mga magagandang alaala ng inyong pagkakaibigan."
    },
    {
        word: "Pinanabikan",
        meaning: "Pagkagalak",
        antonyms: "Pagkalungkot",
        synonyms: "Pag-aasam, pananabik",
        example: "Pinanabikan niya ang pagbabalik ng kanyang mahal sa buhay."
    },
    {
        word: "Sinilangan",
        meaning: "Lugar kung saan ipinanganak",
        antonyms: "Malayo",
        synonyms: "Tahanan, bayan",
        example: "Ang sinilangan ni Don Juan ay isang maliit na nayon sa tabi ng ilog."
    },
    // Kabanata 12: Ang Pagliligtas kay Don Juan
    {
        word: "Sumulpot",
        meaning: "Lumabas",
        antonyms: "Pumasok",
        synonyms: "Nagpakita, dumating",
        example: "Sumulpot si Don Juan mula sa kakahuyan upang tulungan ang ermitanyo."
    },
    {
        word: "Ermitanyo",
        meaning: "Taong nabubuhay mag-isa",
        antonyms: "Sosyal, may kasama",
        synonyms: "Nag-iisa, nag-iisa sa buhay",
        example: "Ang ermitanyo ay nagbigay ng tulong kay Don Juan."
    },
    {
        word: "Libis",
        meaning: "Gilid ng bundok",
        antonyms: "Gitna ng bundok",
        synonyms: "Dulo, tabing-bundok",
        example: "Dumaan sila sa libis ng bundok upang makarating sa kanyang patutunguhan."
    },
    {
        word: "Nakahandusay",
        meaning: "Nakahiga",
        antonyms: "Nakaupo, nakatayo",
        synonyms: "Higa, nahulog",
        example: "Nakahandusay siya sa lupa matapos ang matinding laban."
    },
    {
        word: "Nahabag",
        meaning: "Naawa",
        antonyms: "Hindi naawa",
        synonyms: "Malungkot, nagpapakita ng awa",
        example: "Nahabag si Don Juan sa kalagayan ng mga inusente."
    },
    {
        word: "Naglaho",
        meaning: "Nawala",
        antonyms: "Lumitaw",
        synonyms: "Naubos, nagdisappear",
        example: "Naglaho ang kanyang mga alalahanin nang makita ang kanyang pamilya."
    },
    {
        word: "Tinahak",
        meaning: "Nilakad",
        antonyms: "Iwasan",
        synonyms: "Tinungo, nilapitan",
        example: "Tinahak ni Don Juan ang mahirap na daan patungo sa kaligtasan."
    },

    // Kabanata 13: Ang Pagbabalik ni Don Juan
    {
        word: "Nakaratay",
        meaning: "Nakahiga",
        antonyms: "Nakaupo, nakatayo",
        synonyms: "Naka-extend, higa",
        example: "Nakaratay siya sa kama nang siya'y magkasakit."
    },
    {
        word: "Inilahad",
        meaning: "Sinabi",
        antonyms: "Itago",
        synonyms: "Ipinahayag, ikinoento",
        example: "Inilahad ni Don Juan ang buong kwento sa kanyang mga kapatid."
    },
    {
        word: "Isinasalaysay",
        meaning: "Ikinuwento",
        antonyms: "Pagtatago",
        synonyms: "Ipinapahayag, tinatalakay",
        example: "Isinasalaysay ni Don Juan ang kanyang mga karanasan sa kanyang paglalakbay."
    },
    {
        word: "Galak",
        meaning: "Tuwa",
        antonyms: "Kalungkutan",
        synonyms: "Kaligayahan, kasiyahan",
        example: "Ang galak ni Don Juan ay makikita sa kanyang mga mata."
    },
    {
        word: "Nahabag",
        meaning: "Naawa",
        antonyms: "Walang awa",
        synonyms: "Naawa, nagdalamhati",
        example: "Nahabag si Don Juan sa mga sugatang sundalo."
    },

    // Kabanata 14: Ang Muling Pagtataksil
    {
        word: "Giliw",
        meaning: "Sinta",
        antonyms: "Kalaban",
        synonyms: "Pagmamahal, minamahal",
        example: "Ang giliw ni Don Juan ay naging dahilan ng kanyang pagtataksil."
    },
    {
        word: "Nagbalak",
        meaning: "Nagplano",
        antonyms: "Walang plano",
        synonyms: "Nag-isip, nagdisenyo",
        example: "Nagbalak si Don Pedro na makuha ang kaharian mula kay Don Juan."
    },

    // Kabanata 15: Ang Muling Paglisan ni Don Juan
    {
        word: "Batid",
        meaning: "Alam",
        antonyms: "Hindi alam",
        synonyms: "Nabatid, naisip",
        example: "Batid ni Don Juan ang hinaharap niyang hamon."
    },
    {
        word: "Nagtungo",
        meaning: "Nagpunta",
        antonyms: "Bumalik",
        synonyms: "Pumunta, naglakbay",
        example: "Nagtungo si Don Juan sa malayong lugar upang matuklasan ang katotohanan."
    },
    {
        word: "Hawla",
        meaning: "Kulungan",
        antonyms: "Kalayaan",
        synonyms: "Kagubatan, kulungan ng hayop",
        example: "Ipinakita sa kanya ang hawla kung saan siya ay itinapon."
    },
    {
        word: "Sawi",
        meaning: "Bigo",
        antonyms: "Tagumpay",
        synonyms: "Talo, hindi pinalad",
        example: "Si Don Juan ay sawi sa laban ngunit natututo mula sa kanyang pagkatalo."
    },

    // Kabanata 16: Ang Bagong Paraiso
    {
      word: "Himpapawid",
      meaning: "Atmospera.",
      antonyms: "Kalupaan, lupa.",
      synonyms: "Kalangitan, ere.",
      example: "Napakaliwanag ng himpapawid sa bagong paraiso."
    },
    {
      word: "Nahikayat",
      meaning: "Nayaya.",
      antonyms: "Tumanggi, hindi sumama.",
      synonyms: "Napilit, naengganyo.",
      example: "Nahikayat si Don Juan na tuklasin ang bagong paraiso."
    },
    {
      word: "Panukala",
      meaning: "Suggestion.",
      antonyms: "Pagtutol.",
      synonyms: "Proposisyon, mungkahi.",
      example: "Ang panukala ng ermitanyo ay sinunod ni Don Juan."
    },
    {
      word: "Tuklasin",
      meaning: "Alamin.",
      antonyms: "Balewalain.",
      synonyms: "Hanapin, diskubrehin.",
      example: "Sinabi ng hari kay Don Juan na tuklasin ang lihim ng paraiso."
    },

    // Kabanata 17: Ang Mahiwagang Balon sa Armenya
    {
      word: "Natuklasan",
      meaning: "Nakita.",
      antonyms: "Nawala.",
      synonyms: "Nalaman, nadiskubre.",
      example: "Natuklasan ni Don Juan ang mahiwagang balon sa Armenya."
    },
    {
      word: "Marmol",
      meaning: "Uri ng bato.",
      antonyms: "",
      synonyms: "Batong-marble.",
      example: "Ang marmol na hagdan ng balon ay napakaganda."
    },
    {
      word: "Dipa",
      meaning: "Isang metro.",
      antonyms: "",
      synonyms: "Metro, sukat.",
      example: "Ang lalim ng balon ay may limang dipa."
    },
    {
      word: "Magtangka",
      meaning: "Sumubok.",
      antonyms: "Umatras.",
      synonyms: "Sumubok, magbalak.",
      example: "Magtangka si Don Juan na pasukin ang mahiwagang balon."
    },

    // Kabanata 18: Ang Nakakaakit na si Donya Juana
    {
      word: "Masamyo",
      meaning: "Mabango.",
      antonyms: "Mabaho.",
      synonyms: "Mabangong simoy.",
      example: "Masamyo ang paligid ng hardin ni Donya Juana."
    },
    {
      word: "Nasilayan",
      meaning: "Nakita.",
      antonyms: "Itinago.",
      synonyms: "Namataan, nasilayan.",
      example: "Nasilayan ni Don Juan si Donya Juana sa hardin."
    },
    {
      word: "Paumanhin",
      meaning: "Patawad.",
      antonyms: "Pagkasala.",
      synonyms: "Dispensa, sorry.",
      example: "Humingi ng paumanhin si Don Juan kay Donya Juana."
    },
    {
      word: "Mapangahas",
      meaning: "Malakas ang loob, marahas.",
      antonyms: "Mahina, takot.",
      synonyms: "Matapang, agresibo.",
      example: "Mapangahas na hinarap ni Don Juan ang mga bantay ni Donya Juana."
    },
    {
      word: "Sumamo",
      meaning: "Umaasa.",
      antonyms: "Tumigil, sumuko.",
      synonyms: "Nagmakaawa, nakiusap.",
      example: "Sumamo si Don Juan sa puso ni Donya Juana."
    },
    {
      word: "Nasawi",
      meaning: "Nabigo.",
      antonyms: "Nagtagumpay.",
      synonyms: "Namatay, nalugi.",
      example: "Nasawi ang mga higanteng bantay sa kamay ni Don Juan."
    },
    
    // Kabanata 19: Ang Higanteng Bantay
    {
      word: "Nagbabala",
      meaning: "Nagsabi ng parating na panganib.",
      antonyms: "Nagpa-relax, nagbigay ng tiwala.",
      synonyms: "Nagbigay babala, nagbigay babantaan.",
      example: "Nagbabala ang higante ukol sa panganib na parating."
    },
    {
      word: "Serpyente",
      meaning: "Ahas.",
      antonyms: "",
      synonyms: "Uod, ulupong.",
      example: "Ang serpyente ay naging bantay sa mahiwagang kayamanan."
    },
    {
      word: "Tagpasin",
      meaning: "Putulin.",
      antonyms: "Iwan, buuin.",
      synonyms: "Putol, tabas.",
      example: "Kailangan tagpasin ni Don Juan ang higanteng bantay upang malampasan ito."
    },

    // Kabanata 20: Ang Prinsesang mas Kaibig-ibig
    {
      word: "Nabighani",
      meaning: "Nahulog ang loob.",
      antonyms: "Nainis, napoot.",
      synonyms: "Naakit, nagandahan.",
      example: "Nabighani si Don Juan sa kagandahan ng prinsesa."
    },
    {
      word: "Kupkupin",
      meaning: "Ampunin.",
      antonyms: "Itaboy, pabayaan.",
      synonyms: "Kalingain, alagaan.",
      example: "Kupkupin ng prinsesa si Don Juan matapos ang laban."
    },
    {
      word: "Pinapanhik",
      meaning: "Pinaakyat.",
      antonyms: "Pinababa.",
      synonyms: "Inaakyat, itinaas.",
      example: "Pinapanhik ng prinsesa ang mahalagang kayamanan mula sa ilalim ng lupa."
    },
    {
      word: "Isinalaysay",
      meaning: "Ikinuwento.",
      antonyms: "Itinago, kinimkim.",
      synonyms: "Isinaysay, iniulat.",
      example: "Isinalaysay ni Don Juan ang kanyang karanasan sa prinsesa."
    },
    {
      word: "Pagyanig",
      meaning: "Paggalaw ng lupa.",
      antonyms: "Pagkapayapa, katahimikan.",
      synonyms: "Pag-uga, pag-alog.",
      example: "Ang pagyanig ng lupa ay senyales ng galit ng higante."
    },

    // Kabanata 21: Ang Serpyenteng may Pitong Ulo
    {
      word: "Tinagpas",
      meaning: "Pinutol.",
      antonyms: "Iniwan, ibinalik.",
      synonyms: "Pinalaslas, pinutol.",
      example: "Tinagpas ni Don Juan ang pitong ulo ng serpyente."
    },
    {
      word: "Nanumbalik",
      meaning: "Bumalik.",
      antonyms: "Nawala, naglaho.",
      synonyms: "Nagbalik, bumalik.",
      example: "Nanumbalik ang sigla ng mga tao matapos mapatay ang serpyente."
    },
    {
      word: "Balsamo",
      meaning: "Likido mula sa halaman.",
      antonyms: "",
      synonyms: "Langis, gamot.",
      example: "Ginamit ni Don Juan ang balsamo upang gamutin ang sugat."
    },

    // Kabanata 22: Ang Panibagong Panlilinlang
    {
      word: "Paglilinlang",
      meaning: "Pangloloko.",
      antonyms: "Katapatan, katotohanan.",
      synonyms: "Panloloko, pandaraya.",
      example: "Ang paglilinlang ng mga prinsipe ay naging sanhi ng kapahamakan ni Don Juan."
    },
    {
      word: "Panata",
      meaning: "Isang pangako sa Diyos.",
      antonyms: "Paglabag, pagkabali.",
      synonyms: "Pangako, taimtim na dasal.",
      example: "Ginawa ni Don Juan ang kanyang panata para sa tagumpay ng kanyang misyon."
    },

    // Kabanata 23: Ang Lobong Engkantada
    {
      word: "Nagtungo",
      meaning: "Nagpunta.",
      antonyms: "Nanatili.",
      synonyms: "Pumunta, naglakbay.",
      example: "Nagtungo si Don Juan sa burol upang hanapin ang lobo."
    },
    {
      word: "Nalinlang",
      meaning: "Naloko, naisahan.",
      antonyms: "Nakaalam, nanalo.",
      synonyms: "Nadaya, nauto.",
      example: "Nalinlang siya ng engkantadong lobo sa kanyang pakay."
    },
    {
      word: "Matuklasan",
      meaning: "Malaman.",
      antonyms: "Maitago.",
      synonyms: "Madiskubre, mahanap.",
      example: "Sinubukan niyang matuklasan ang sikreto ng engkantada."
    },
    {
      word: "Burol",
      meaning: "Uri ng anyong lupa.",
      antonyms: "Kapatagan, lambak.",
      synonyms: "Bundok, mataas na lugar.",
      example: "Ang burol na tinirhan ng lobo ay puno ng misteryo."
    },
    {
      word: "Nanumbalik",
      meaning: "Bumalik.",
      antonyms: "Nawala, nawala nang tuluyan.",
      synonyms: "Nagbalik, muling dumating.",
      example: "Nanumbalik ang kanyang lakas matapos ang laban."
    },

    // Kabanata 24: Ang Muling Pagkikita ng Ibong Adarna at ni Don Juan
    {
      word: "Nagsalaysay",
      meaning: "Nagkuwento.",
      antonyms: "Tumahimik.",
      synonyms: "Naglahad, ikinuwento.",
      example: "Nagsalaysay ang ibon ng mahahalagang detalye kay Don Juan."
    },
    {
      word: "Natuklasan",
      meaning: "Nalaman.",
      antonyms: "Nakalimutan, itinago.",
      synonyms: "Nadiskubre, nahanap.",
      example: "Natuklasan ni Don Juan ang katotohanan tungkol sa kanyang mga kapatid."
    },
    {
      word: "Maglakbay",
      meaning: "Maglakad.",
      antonyms: "Manatili.",
      synonyms: "Maglibot, magbiyaheng paa.",
      example: "Napagpasyahan ni Don Juan na maglakbay papunta sa Reyno delos Cristales."
    },
    {
      word: "Tuso",
      meaning: "Taong mapanglamang.",
      antonyms: "Tapat, inosente.",
      synonyms: "Mandaraya, tusong tao.",
      example: "Ang tusong prinsipe ay laging nagbabalak laban kay Don Juan."
    },

    // Kabanata 25: Ang Bagong Mundo
    {
      word: "Parang",
      meaning: "Uri ng anyong lupa.",
      antonyms: "Lambak.",
      synonyms: "Kapatagan, damuhan.",
      example: "Nakaabot siya sa malawak na parang bago magdilim."
    },
    {
      word: "Limos",
      meaning: "Pera o tulong na binibigay sa nangangailangan.",
      antonyms: "Kasaganaan.",
      synonyms: "Abuloy, donasyon.",
      example: "Nagbigay siya ng limos sa ermitanyong nangangailangan."
    },
    {
      word: "Bukbukin",
      meaning: "Bulok.",
      antonyms: "Bago, sariwa.",
      synonyms: "Nabubulok, sirain.",
      example: "Ang lumang bumbong ay bukbukin na."
    },
    {
      word: "Pulot-pukyutan",
      meaning: "Honeybee o produkto nito.",
      antonyms: "",
      synonyms: "Pulot, honey.",
      example: "Nakita niya ang pulot-pukyutan na iniingatan ng mga pukyutan."
    },
    {
      word: "Bumbong",
      meaning: "Lalagyan na hugis silindriko.",
      antonyms: "",
      synonyms: "Silindro, lalagyan.",
      example: "Ginamit niya ang bumbong upang mag-igib ng tubig."
    },
    {
      word: "Pakay",
      meaning: "Plano o sadya.",
      antonyms: "Kalituhan.",
      synonyms: "Layunin, misyon.",
      example: "Ang kanyang pakay ay hanapin ang kayamanan sa bagong mundo."
    },

    // Kabanata 26: Ang Panangis ni Prinsesa Leonora
    {
      word: "Panangis",
      meaning: "Pag-iyak.",
      antonyms: "Pagtawa, kasiyahan.",
      synonyms: "Pagluha, pagdadalamhati.",
      example: "Ang panangis ni Prinsesa Leonora ay umantig sa damdamin ni Don Juan."
    },
    {
      word: "Paglalakbay",
      meaning: "Paglalakad.",
      antonyms: "Pamamalagi.",
      synonyms: "Pagsasapalaran, pagbibiyahe.",
      example: "Ang paglalakbay ni Don Juan ay puno ng hamon."
    },
    {
      word: "Binagtas",
      meaning: "Nilakbay.",
      antonyms: "Iniwasan.",
      synonyms: "Tinahak, nilakad.",
      example: "Binagtas niya ang mabatong daan patungo sa dampa."
    },
    {
      word: "Dampa",
      meaning: "Bahay kubo.",
      antonyms: "Palasyo.",
      synonyms: "Barung-barong, kubo.",
      example: "Dumaan siya sa dampa ng ermitanyo upang humingi ng tulong."
    },
    {
      word: "Ermitanyo",
      meaning: "Taong nabubuhay mag-isa.",
      antonyms: "Sosyal, palakaibigan.",
      synonyms: "Monghe, tagapagpayo.",
      example: "Muli niyang hiningan ng payo ang ermitanyo."
    },

    // Kabanata 27: Ang Ikapitong Bundok
    {
      word: "Nasilayan",
      meaning: "Nakita.",
      antonyms: "Naitago.",
      synonyms: "Namataan, nasilayan.",
      example: "Nasilayan niya ang kagandahan ng ikapitong bundok."
    },
    {
      word: "Olikornyo",
      meaning: "Uri ng ibon.",
      antonyms: "",
      synonyms: "Mitikal na ibon.",
      example: "Ang olikornyo ay nagbigay ng huling pahiwatig kay Don Juan."
    },
    {
      word: "Laksa-laksa",
      meaning: "Marami, dagsa.",
      antonyms: "Kakaunti.",
      synonyms: "Napakarami, napakaraming bilang.",
      example: "Laksa-laksa ang mga ibon sa paligid ng ikapitong bundok."
    },

    // Kabanata 28: Ang Higanteng Agila
    {
      word: "Ermitanyo",
      meaning: "Taong nabubuhay mag-isa.",
      antonyms: "Sosyal, palakaibigan.",
      synonyms: "Monghe, tagapagpayo.",
      example: "Nagpunta si Don Juan sa ermitanyo upang humingi ng tulong sa kanyang misyon."
    },
    {
      word: "Paumanhin",
      meaning: "Patawad.",
      antonyms: "Pananakit.",
      synonyms: "Paghingi ng tawad.",
      example: "Ang higanteng agila ay humingi ng paumanhin sa kanyang mga ginawa."
    },
    {
      word: "Isinalaysay",
      meaning: "Ikinuwento.",
      antonyms: "Itago, lihim.",
      synonyms: "Naglahad, nagkuwento.",
      example: "Isinalaysay ng ermitanyo ang kanyang mga karanasan sa bundok."
    },
    {
      word: "Nagalak",
      meaning: "Natuwa.",
      antonyms: "Nalungkot, nainis.",
      synonyms: "Nagdiwang, nagsaya.",
      example: "Nagalak si Don Juan nang matagpuan niya ang mga sagot sa kanyang paghahanap."
    },

    // Kabanata 29: Ang Reyno Delos Cristales
    {
      word: "Nagkubli",
      meaning: "Nagtago.",
      antonyms: "Lumantad.",
      synonyms: "Nagtago, nagkaila.",
      example: "Nagkubli siya upang hindi makita ng kalaban."
    },
    {
      word: "Nabihag",
      meaning: "Nahulog ang loob.",
      antonyms: "Napalayas.",
      synonyms: "Naakit, nainlove.",
      example: "Nabihag ang puso ng prinsesa kay Don Juan."
    },
    {
      word: "Nahaling",
      meaning: "Napaibig nang mabuti.",
      antonyms: "Nainis, napoot.",
      synonyms: "Nabighani, naakit.",
      example: "Nahaling si Don Juan sa kagandahan ng Reyno delos Cristales."
    },

    // Kabanata 30: Ang Prinsesang si Maria Blanca
    {
      word: "Napawi",
      meaning: "Nawala.",
      antonyms: "Nahanap, nahanap muli.",
      synonyms: "Lumipas, nawala.",
      example: "Napawi ang kanyang kalungkutan nang makatagpo siya ng bagong kaibigan."
    },
    {
      word: "Nabihag",
      meaning: "Nahulog ang loob.",
      antonyms: "Walang interes.",
      synonyms: "Nahulog sa pag-ibig, napaamo.",
      example: "Nabihag si Don Juan ng kagandahan ni Prinsesa Maria Blanca."
    },
    {
      word: "Tuso",
      meaning: "Taong mapanglamang.",
      antonyms: "Matapat, tapat.",
      synonyms: "Mapanlinlang, manloloko.",
      example: "Ang tuso ay nagplano ng masama upang makuha ang trono."
    },
    {
      word: "Palamuti",
      meaning: "Dekorasyon.",
      antonyms: "Pangunahing gamit, hindi palamuti.",
      synonyms: "Dekorasyon, ayos.",
      example: "Ang mga palamuti sa kanyang silid ay sumasalamin sa kanyang magandang panlasa."
    },

    // Kabanata 31: Ang Ika-Unang Pagsubok ng Hari
    {
      word: "Salop",
      meaning: "Ginagamit na pansukat sa bigas.",
      antonyms: "",
      synonyms: "Sukat, pangsukat.",
      example: "Ginamit nila ang salop upang sukatin ang inani nilang bigas."
    },
    {
      word: "Trigo",
      meaning: "Sinasakang damo.",
      antonyms: "Mais, ibang uri ng halaman.",
      synonyms: "Butil, halamang tinatanim.",
      example: "Ang trigo ay pangunahing inani sa kanilang bukirin."
    },
    {
      word: "Batid",
      meaning: "Alam.",
      antonyms: "Hindi alam, hindi batid.",
      synonyms: "Nalalaman, nauunawaan.",
      example: "Batid ng hari ang kahalagahan ng bawat hakbang sa pagsubok."
    },
    {
      word: "Pinawi",
      meaning: "Tinanggal, inalis.",
      antonyms: "Pinatibay, pinalakas.",
      synonyms: "Tinanggal, inalis.",
      example: "Pinawi ng hari ang lahat ng takot sa kanyang kaharian."
    },
    {
      word: "Supot",
      meaning: "Plastik.",
      antonyms: "Lata, kahon.",
      synonyms: "Bag, plastik na supot.",
      example: "Inilagay nila ang mga prutas sa supot bago umalis."
    },

    // Kabanata 32: Ang Ikalawang Utos ng Hari
    {
      word: "Prasko",
      meaning: "Bote.",
      antonyms: "Kahon, lata.",
      synonyms: "Bote, lalagyan.",
      example: "Nag-imbak sila ng alak sa prasko."
    },
    {
      word: "Isilid",
      meaning: "Ilagay.",
      antonyms: "Ihulog, ilabas.",
      synonyms: "Ilakip, ipasok.",
      example: "Isilid mo ang mga damit sa bag bago umalis."
    },
    {
      word: "Nagtungo",
      meaning: "Nagpunta.",
      antonyms: "Bumalik, nagbalik.",
      synonyms: "Naglakbay, pumaroon.",
      example: "Nagtungo si Don Juan sa kaharian ng mga higante upang maghanap ng tulong."
    },
    {
      word: "Kitilin",
      meaning: "Patayin.",
      antonyms: "Buhayin, buhayin.",
      synonyms: "Puksain, wakasan.",
      example: "Ang hari ay inutusan na kitilin ang lahat ng kalaban sa kanyang kaharian."
    },

    // Kabanata 33: Ang Paglipat sa Bundok
    {
      word: "Nais",
      meaning: "Gusto.",
      antonyms: "Ayaw, hindi gusto.",
      synonyms: "Hangad, ibig.",
      example: "Nais niyang makapagtayo ng sariling bahay sa bundok."
    },
    {
      word: "Durungawan",
      meaning: "Bintana.",
      antonyms: "Pinto, pinto ng pinto.",
      synonyms: "Bintana, siwang.",
      example: "Mula sa durungawan, nakikita ni Don Juan ang kagandahan ng kalikasan."
    },
    {
      word: "Pangamba",
      meaning: "Pag-aalala.",
      antonyms: "Kaginhawaan, kasiguruhan.",
      synonyms: "Takot, kabalisahan.",
      example: "Nararamdaman niya ang pangamba habang binabaybay ang madilim na kagubatan."
    },
    {
      word: "Tumungo",
      meaning: "Pumunta.",
      antonyms: "Bumalik, magbalik.",
      synonyms: "Nagtungo, naglakbay.",
      example: "Tumungo sila sa bundok upang magsimula ng kanilang misyon."
    },

    // Kabanata 34: Ang Paggawa ng Kastilyo
    {
      word: "Kastilyo",
      meaning: "Palasyo.",
      antonyms: "Bahay kubo, simpleng bahay.",
      synonyms: "Palasyo, matayog na tahanan.",
      example: "Itinayo nila ang isang kastilyo bilang tirahan ng hari at ng kanyang pamilya."
    },
    {
      word: "Gulod",
      meaning: "Mataas na lugar.",
      antonyms: "Lupa, kapatagan.",
      synonyms: "Burol, mataas na bundok.",
      example: "Matapos ang mahaba-habang paglalakbay, sila ay umakyat sa gulod."
    },
    {
      word: "Itinabon",
      meaning: "Itinakip.",
      antonyms: "Inalis, binuksan.",
      synonyms: "Itago, takpan.",
      example: "Itinabon nila ang mga labi ng kalaban upang hindi makita ng mga tao."
    },
    {
      word: "Muog",
      meaning: "Bahay.",
      antonyms: "Labanan, digmaan.",
      synonyms: "Tahanan, kubo.",
      example: "Sa muog ng kanyang pamilya, naramdaman ni Don Juan ang tunay na pag-ibig."
    },
    {
      word: "Anyo",
      meaning: "Itsura.",
      antonyms: "Kalooban, nilalaman.",
      synonyms: "Panlabas, hitsura.",
      example: "Ang kanyang anyo ay kaakit-akit at puno ng kabutihan."
    },

    // Kabanata 35: Ang Nawawalang Singsing
    {
      word: "Nagtungo",
      meaning: "Nagpunta.",
      antonyms: "Bumalik, magbalik.",
      synonyms: "Naglakbay, pumaroon.",
      example: "Nagtungo si Don Juan sa palasyo upang hanapin ang nawawalang singsing."
    },
    {
      word: "Tadtarin",
      meaning: "Hiwain ng maliliit.",
      antonyms: "Buo, hindi hiniwa.",
      synonyms: "Gupitin, durugin.",
      example: "Tadtarin nila ang prutas upang gawing sangkap sa kanilang pagkain."
    },
    {
      word: "Namangha",
      meaning: "Nagulat.",
      antonyms: "Hindi nagulat, sanay.",
      synonyms: "Nagulat, nagtakang mabuti.",
      example: "Namangha siya sa kagandahan ng bagong kastilyo."
    },
    {
      word: "Matagpuan",
      meaning: "Makita.",
      antonyms: "Mawala, hindi matagpuan.",
      synonyms: "Mahagilap, makita.",
      example: "Matagpuan kaya nila ang nawawalang singsing?"
    },

    // Kabanata 36: Ang Pag-Amo sa Kabayo
    {
      word: "Mailap",
      meaning: "Di sanay sa tao.",
      antonyms: "Sanay, maamo.",
      synonyms: "Walang tiwala, matatakutin.",
      example: "Ang kabayong iyon ay mailap at mahirap pakisamahan."
    },
    {
      word: "Batid",
      meaning: "Alam.",
      antonyms: "Hindi alam, hindi batid.",
      synonyms: "Nalaman, nauunawaan.",
      example: "Batid niya ang tunay na layunin ng misyon."
    },
    {
      word: "Dagukan",
      meaning: "Hampasin gamit ang kamao.",
      antonyms: "Yakapin, gawing magaan.",
      synonyms: "Suntukin, hampasin.",
      example: "Dagukan ang kalaban upang maprotektahan ang sarili."
    },
    {
      word: "Umalma",
      meaning: "Lumaban pabalik.",
      antonyms: "Sumuko, umatras.",
      synonyms: "Lumaban, naghayag ng galit.",
      example: "Umalma si Don Juan nang makita niyang inaatake ang kanyang kabayo."
    },
    {
      word: "Nakaratay",
      meaning: "Nakahiga.",
      antonyms: "Nakatayo, gumagalaw.",
      synonyms: "Nakahiga, nanghihina.",
      example: "Nakaratay siya sa kama dahil sa matinding pagod."
    },

    // Kabanata 37: Ang Pagpili sa mga Prinsesa
    {
      word: "Tuso",
      meaning: "Taong mapanglamang.",
      antonyms: "Mabait, tapat.",
      synonyms: "Tusong tao, matalino ngunit may masamang layunin.",
      example: "Ang tuso niyang plano ay magdudulot ng malaking problema."
    },
    {
      word: "Ipagkaloob",
      meaning: "Ibigay.",
      antonyms: "Kunihin, kunin.",
      synonyms: "Ibigay, itaguyod.",
      example: "Ipagkaloob sa kanya ang gantimpala bilang pasasalamat."
    },
    {
      word: "Gantimpala",
      meaning: "Reward.",
      antonyms: "Parusa, kaparusahan.",
      synonyms: "Premyo, handog.",
      example: "Makakamtan niya ang gantimpala sa kanyang tagumpay."
    },
    {
      word: "Silid",
      meaning: "Kwarto.",
      antonyms: "Bahay, sala.",
      synonyms: "Kwarto, silid-aralan.",
      example: "Ang silid ni Don Juan ay puno ng mga alahas at kayamanang mula sa kanyang misyon."
    },
    {
      word: "Nakalitaw",
      meaning: "Nakalabas, nakikita.",
      antonyms: "Nakatago, lihim.",
      synonyms: "Nakita, sumik.",
      example: "Nakalitaw ang kanyang pangalan sa mga talaan ng mga pinakamahusay na mandirigma."
    },

    // Kabanata 38: Ang Pagtakas sa Reyno Delos Cristales
    {
      word: "Tulin",
      meaning: "Bilis.",
      antonyms: "Bagal, katamaran.",
      synonyms: "Dali, bilis ng galaw.",
      example: "Ang tulin ng kabayo ay hindi kayang pantayan ng sinumang mangangabayo."
    },
    {
      word: "Mahawi",
      meaning: "Matanggal.",
      antonyms: "Paghawi, magtaglay.",
      synonyms: "Alisin, mag-alis.",
      example: "Mahawi ang mga ulap upang lumabas ang araw."
    },
    {
      word: "Patag",
      meaning: "Pantay.",
      antonyms: "Mataas, mabundok.",
      synonyms: "Lantad, makinis.",
      example: "Ang patag na lupa ay madali para magtanim ng palay."
    },
    {
      word: "Kohe",
      meaning: "Bote na nilalagyan ng tubig.",
      antonyms: "Wala.",
      synonyms: "Bote, lalagyan.",
      example: "Magdala ng kohe upang mapanatiling sariwa ang tubig sa paglalakbay."
    },

    // Kabanata 39: Ang Sumpaan
    {
      word: "Nayon",
      meaning: "Komunidad na mas malaki sa nayon.",
      antonyms: "Bayan, lungsod.",
      synonyms: "Pamayanan, komunidad.",
      example: "Ang kanilang nayon ay matatagpuan sa tabi ng ilog."
    },
    {
      word: "Magarbo",
      meaning: "Engrande, bongga.",
      antonyms: "Simple, payak.",
      synonyms: "Mahalaga, marangya.",
      example: "Magarbo ang kasal na ipinagdiwang ng prinsipe at prinsesa."
    },
    {
      word: "Tutol",
      meaning: "Hindi sang-ayon.",
      antonyms: "Sang-ayon, pabor.",
      synonyms: "Kontra, ayaw.",
      example: "Tutol siya sa plano ng hari na magtayo ng bagong kastilyo."
    },
    {
      word: "Bendisyun",
      meaning: "Basbas.",
      antonyms: "Pagka-curse, sumpa.",
      synonyms: "Panalangin, basbas.",
      example: "Humingi siya ng bendisyun sa matandang ermitanyo bago maglakbay."
    },
    {
      word: "Natuklasan",
      meaning: "Nalaman.",
      antonyms: "Naitago, hindi alam.",
      synonyms: "Nakita, nalaman.",
      example: "Natuklasan niya na may lihim na plano ang kanyang mga kapatid."
    },

    // Kabanata 40: Ang Paglimot sa Sumpaan
    {
      word: "Pag-iisang dibdib",
      meaning: "Pagpapakasal.",
      antonyms: "Pagkakawatak-watak, paghihiwalay.",
      synonyms: "Kasalan, pag-aasawa.",
      example: "Ang pag-iisang dibdib nila ay isang mahalagang okasyon sa buong kaharian."
    },
    {
      word: "Natuklasan",
      meaning: "Nalaman.",
      antonyms: "Naitago, hindi alam.",
      synonyms: "Nakita, nalaman.",
      example: "Natuklasan niyang hindi na niya kayang magpatuloy sa kanilang sumpaan."
    },
    {
      word: "Karosa",
      meaning: "Sasakyan na hila-hila ng kabayo.",
      antonyms: "Sasakyang de-motor, kotse.",
      synonyms: "Kalesa, karu.",
      example: "Puno ng bulaklak ang karosa na ginamit sa kasal."
    },
    {
      word: "Emperatris",
      meaning: "Babaeng tagapamahala ng isang imperyo.",
      antonyms: "Emperador, hari.",
      synonyms: "Reina, reyna ng imperyo.",
      example: "Ang emperatris ay may malawak na kapangyarihan sa kanyang nasasakupan."
    },

    // Kabanata 41: Ang Pagbawi kay Don Juan
    {
      word: "Emperatris",
      meaning: "Babaeng tagapamahala ng isang imperyo.",
      antonyms: "Emperador, hari.",
      synonyms: "Reina, reyna ng imperyo.",
      example: "Ang emperatris ay nagdesisyon na tulungan si Don Juan."
    },
    {
      word: "Parangalan",
      meaning: "Bigyang galang.",
      antonyms: "Hamakin, baliwalain.",
      synonyms: "Igalang, itanghal.",
      example: "Parangalan natin ang mga bayani na nag-alay ng buhay para sa ating kalayaan."
    },
    {
      word: "Pighati",
      meaning: "Sakit sa damdamin.",
      antonyms: "Kaligayahan, kasiyahan.",
      synonyms: "Lumbay, kalungkutan.",
      example: "Dama ng buong kaharian ang pighati ng hari sa pagkawala ng kanyang anak."
    },
    {
      word: "Nasisilayan",
      meaning: "Nakikita.",
      antonyms: "Hindi nakikita, natatago.",
      synonyms: "Nakikita, nasusumpungan.",
      example: "Ang kabutihang ipinakita ni Don Juan ay nasisilayan ng buong bayan."
    },
    {
      word: "Nakatuon",
      meaning: "Bigyang atensyon.",
      antonyms: "Iwasan, baliwalain.",
      synonyms: "Nakafocus, nakatutok.",
      example: "Nakatuon ang lahat ng atensyon kay Don Juan at sa kanyang misyon."
    },
    {
      word: "Pakay",
      meaning: "Balak.",
      antonyms: "Walang layunin, walang plano.",
      synonyms: "Layunin, intensyon.",
      example: "Ang pakay ni Don Juan ay mahanap ang kanyang nawawalang kapatid."
    },
    {
      word: "Handog",
      meaning: "Regalo.",
      antonyms: "Pagkakait, hindi pagbibigay.",
      synonyms: "Regalo, alay.",
      example: "Ang handog ng hari sa kanyang mga nasasakupan ay isang pagdiriwang ng pasasalamat."
    },
    {
      word: "Prasko",
      meaning: "Bote.",
      antonyms: "Walang lalagyan, hindi nakatago.",
      synonyms: "Bote, lalagyan.",
      example: "Ang prasko ay puno ng mahiwagang tubig mula sa kabundukan."
    },
    {
      word: "Sumulpot",
      meaning: "Lumabas, lumitaw.",
      antonyms: "Nagtago, nanatili.",
      synonyms: "Lumitaw, sumik.",
      example: "Sumulpot si Don Juan mula sa dilim upang harapin ang kanyang mga kalaban."
    },

    // Kabanata 42: Ang Dula-Dulaan
    {
      word: "Prasko",
      meaning: "Bote.",
      antonyms: "Walang lalagyan, hindi nakatago.",
      synonyms: "Bote, lalagyan.",
      example: "Ang prasko ay puno ng mahiwagang tubig mula sa kabundukan."
    },
    {
      word: "Dula",
      meaning: "Palabas.",
      antonyms: "Tunay, hindi kathang-isip.",
      synonyms: "Palabas, pagtatanghal.",
      example: "Ang dula ay tungkol sa buhay ng isang bayani."
    },
    {
      word: "Isinasalaysay",
      meaning: "Ikinukwento.",
      antonyms: "Hindi ikinukwento, itinatago.",
      synonyms: "Ikwento, ikino-chronicle.",
      example: "Isinasalaysay ng mang-uukit ng mga kwento ang buhay ni Don Juan."
    },
    {
      word: "Trigo",
      meaning: "Sinasakang damo.",
      antonyms: "Butil ng palay.",
      synonyms: "Pananim na trigo, bigas.",
      example: "Ang mga magsasaka ay nagtanim ng trigo sa malawak na bukirin."
    },
    {
      word: "Durungawan",
      meaning: "Bintana.",
      antonyms: "Pader, pintuan.",
      synonyms: "Bintana, salamin.",
      example: "Bumangon siya at tumanaw sa durungawan ng kanyang kwarto."
    },
    {
      word: "Kastilyo",
      meaning: "Palasyo.",
      antonyms: "Maliit na bahay, kubo.",
      synonyms: "Palasyo, fort.",
      example: "Ang kastilyo ay isang simbolo ng kapangyarihan ng hari."
    },

    // Kabanata 43: Ang Pagpaparusa kay Don Juan
    {
      word: "Dula",
      meaning: "Palabas.",
      antonyms: "Tunay, hindi kathang-isip.",
      synonyms: "Palabas, pagtatanghal.",
      example: "Ang dula ay tungkol sa buhay ng isang bayani."
    },
    {
      word: "Isinalaysay",
      meaning: "Ikinukwento.",
      antonyms: "Hindi ikinukwento, itinatago.",
      synonyms: "Ikwento, ikino-chronicle.",
      example: "Isinalaysay ng mang-uukit ng mga kwento ang buhay ni Don Juan."
    },
    {
      word: "Batid",
      meaning: "Alam.",
      antonyms: "Hindi alam, walang kaalaman.",
      synonyms: "Alam, nakakalaman.",
      example: "Batid ng hari na may lihim na misyon si Don Juan."
    },
    {
      word: "Prasko",
      meaning: "Bote.",
      antonyms: "Walang lalagyan, hindi nakatago.",
      synonyms: "Bote, lalagyan.",
      example: "Ang prasko ay puno ng mahiwagang tubig mula sa kabundukan."
    },

    // Kabanata 44: Ang Pagbabalik ng Alaala ni Don Juan
    {
      word: "Iglap",
      meaning: "Pikit-mata.",
      antonyms: "Bukas mata.",
      synonyms: "Pikit, pasara.",
      example: "Sa iglap ng mata, siya ay nawawala sa kanyang harapan."
    },
    {
      word: "Arsobispo",
      meaning: "Pari.",
      antonyms: "Hindi relihiyoso.",
      synonyms: "Bishop, pari.",
      example: "Ang arsobispo ay nagsagawa ng seremonya para kay Don Juan."
    },
    {
      word: "Prasko",
      meaning: "Bote.",
      antonyms: "Walang lalagyan, hindi nakatago.",
      synonyms: "Bote, lalagyan.",
      example: "Ang prasko ay naglalaman ng likidong may mahiwagang kapangyarihan."
    },
    {
      word: "Laan",
      meaning: "Bigay.",
      antonyms: "Walang handog.",
      synonyms: "Regalo, alay.",
      example: "Ang laan na ito ay inihandog ng hari para sa kabutihan ng bayan."
    },
    {
      word: "Ninais",
      meaning: "Ginusto.",
      antonyms: "Ayaw, hindi ninanais.",
      synonyms: "Nais, pinili.",
      example: "Ninais ni Don Juan na magbalik sa kanyang bayan pagkatapos ng kanyang misyon."
    },

    // Kabanata 45: Ang Masayang Yugto
    {
      word: "Kapasyahan",
      meaning: "Desisyon.",
      antonyms: "Pag-aalinlangan, hindi tiyak.",
      synonyms: "Desisyon, pagtanggap.",
      example: "Ang kapasyahan ng hari ay magbibigay direksyon sa buong kaharian."
    },
    {
      word: "Nais",
      meaning: "Gusto.",
      antonyms: "Ayaw, hindi ninanais.",
      synonyms: "Hangad, pangarap.",
      example: "Nais niyang makamit ang tunay na kaligayahan."
    },
    {
      word: "Ipagkaloob",
      meaning: "Ibigay.",
      antonyms: "Kunin, bawiin.",
      synonyms: "Alay, itanyag.",
      example: "Ang hari ay ipinagkaloob ang kaharian kay Don Juan bilang tanda ng tiwala."
    },
    {
      word: "Arsobispo",
      meaning: "Pari.",
      antonyms: "Hindi relihiyoso.",
      synonyms: "Bishop, pari.",
      example: "Ang arsobispo ay nagsagawa ng seremonya upang pag-isahin ang magkasunod na hari at reyna."
    },

    // Kabanata 46: Ang Hari at Reyna ng Reyno Delos Cristales
    {
      word: "Paglalakbay",
      meaning: "Paglalakad.",
      antonyms: "Pag-uwi, hindi paggalaw.",
      synonyms: "Pagbiyahe, pamamasyal.",
      example: "Ang kanilang paglalakbay ay puno ng mga pagsubok at tagumpay."
    },
    {
      word: "Yumao",
      meaning: "Namatay.",
      antonyms: "Buhay, buhay na buhay.",
      synonyms: "Pumanaw, sumakabilang-buhay.",
      example: "Yumao na ang kanyang ama at iniwan ang isang malungkot na alaala."
    },
    {
      word: "Piging",
      meaning: "Salu-salo, selebrasyon.",
      antonyms: "Pagdadalamhati, kalungkutan.",
      synonyms: "Pagdiriwang, kasiyahan.",
      example: "Ang piging na ito ay ginanap bilang pasasalamat sa tagumpay."
    },
    {
      word: "Pamamalakad",
      meaning: "Pamumuno.",
      antonyms: "Pag-aabandona, pagwawakas.",
      synonyms: "Pamahalaan, pangangasiwa.",
      example: "Ang pamamalakad ng hari at reyna ay nagbigay ng kaayusan sa buong kaharian."
    }
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleNextWord = () => {
    // Reset the flipped state to show the front side first
    setFlipped(false);

    // Choose the next word with a small delay to show the front first
    setTimeout(() => {
      const nextIndex = Math.floor(Math.random() * words.length);
      setCurrentCardIndex(nextIndex);
    }, 300);
  };

  const card = words[currentCardIndex];

  return (
    <>
      <NavBar user={user} />
      <div
        className="h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className={`relative w-80 h-96 cursor-pointer transform-style-preserve-3d transition-transform duration-500 ${
            flipped ? "rotate-y-180" : ""
          }`}
          onClick={handleFlip}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 text-white border border-gray-300 rounded-lg shadow-lg flex flex-col justify-center p-6 backface-hidden"
            style={{
              background: "linear-gradient(to bottom right, #007b8f, #5a8f94)", // Bluish gradient
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // 3D effect
            }}
          >
            <h3 className="font-extrabold text-3xl mb-4 text-center">{card.word}</h3>
            <p className="text-lg mb-4 text-center italic">{card.meaning}</p>
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 text-white border border-gray-300 rounded-lg shadow-lg flex flex-col justify-center p-6 transform rotate-y-180 backface-hidden"
            style={{
              background: "linear-gradient(to bottom right, #5a8f94, #3b6b71)", // Bluish gradient
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // 3D effect
            }}
          >
            
            <h3 className="font-extrabold text-2xl text-center">Gamit sa Pangungusap</h3>
            <p className="text-lg text-center italic">"{card.example}"</p>

            <div className="my-4 border-t border-white opacity-50"></div> {/* Divider */}

            {/* Synonyms and Antonyms */}
            <div className="text-center">
              <h4 className="font-semibold text-xl mb-2">Mga Kasingkahulugan</h4>
              <p className="text-lg">{card.synonyms}</p>

              <div className="my-4 border-t border-white opacity-50"></div> {/* Divider */}

              <h4 className="font-semibold text-xl mb-2">Mga Kasalungat</h4>
              <p className="text-lg">{card.antonyms}</p>
            </div>
          </div>
        </div>

        <button
          className="mt-8 px-8 py-3 bg-teal-700 text-white rounded-lg shadow-lg hover:bg-teal-600 active:bg-teal-500 transition-all duration-700 transform hover:opacity-100 active:scale-500 opacity-90"
          onClick={handleNextWord}
        >
          Susunod na Salita
        </button>
      </div>
    </>
  );
}

export default WordBank;