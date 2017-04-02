"use strict";
var m = require("mithril");

module.exports = {
    view: function() {
        return [
            m("div", [
                m("h1.text-center", "Reports"),
                m("p", "Bellow you will see all my reports"),
                m("ul#report-list", [
                    m("li", [
                        m("h2.lead", "kmom01"),
                        m("ul#report-list", [
                            m("li", [
                                m("h3", "Är du sedan tidigare bekant med utveckling av mobila appar?")
                            ]),
                                m("p", "Jo, men det är jag."),
                                m("p", "Jag kan knappast säga att jag har betydligt mycket erfarenhet av utveckling av mobila appar, men jag har rört vid ett gäng olika ramverk\
                                så som Android, Xamarin och iOS."),
                                m("p", "Dock inga större projekt. Så jag ser dock fram emot att lära mig lite mer av MVC och SPA utveckling i kursen!\
                                Jag har aldrig tidigare använt mig av Mithril heller, så jag hoppas på att lära mig mycket nytt som jag kan överföra mot antingen React eller Angular."),
                            m("li", [
                                m("h3", "Är du bekant med Mithril?")
                            ]),
                                m("p", "Nej. Innan denna kursen hade jag inte ens hört om ramverket"),
                                m("p", "Som ni kanske hört på forumet så bad jag Mikael att förklara varför vi valt att använda oss av Mithril i kursen"),
                                m("p", "Detta huvudsakligen för att jag inte förstod varför man valt att använda ett sådant oanvänt ramverk. \
                                Dock så förklarade Mikael sin resonering rätt väl. Men jag ser denna kursen som ett steg i rätt riktning, då jag antagligen kommer \
                                använda den för att börja lära mig React."),
                            m("li", [
                                m("h3", "Hur känns det att jobba med Mithril?")
                            ]),
                                m("p", "Det känns förhållandevis bra nu..."),
                                m("p", "Jag hoppade lite mellan att antingen använda mig av bootstrap eller ej. Men efter att ha snackat med folket i Mithril's egna \
                                gitter-kanal så valde jag att skippa det. Det ger mig även lite mer frihet i hur jag utvecklar min kodbas."),
                            m("li", [
                                m("h3", "Var det något som krånglade eller tog extra mycket tid?")
                            ]),
                                m("p", "Jo, det var det."),
                                m("p", "När jag skulle få bootstrap att fungera så var det lite krångligt att få rätt på CSP:n."),
                                m("p", "Sen var det lite halvkrångligt att få koll på hur man skulle använda sig av CSS-klasser och liknande. Men det löste sig till slut!"),
                                m("p", "Överlag har det varit en rätt bekväm uppgift. Jag ska dock se till att jag stylar om min redovisningssida lite mer till nästa kmom!")
                            ])
                        ]),
                    m("li", [
                        m("h2.lead", "kmom02")
                    ])
                ])
                ])
        ];
    }
};
