import react from 'react';

const topMovies = [
    "?t=wonder+woman+1984&plot=full&apikey=38795606",
    "?t=tenet&plot=full&apikey=38795606",
    "?t=the+king+of+staten+island&plot=full&apikey=38795606",
    "?t=sound+of+metal&plot=full&apikey=38795606&=",
    "?t=raya+and+the+last+dragon&plot=full&apikey=38795606",
    "?t=the+marksman&plot=full&apikey=38795606",
    "?t=monster+hunter&plot=full&apikey=38795606&y=2020",
    "?t=the+gentlemen&plot=full&apikey=38795606&=",
    "?t=justice+league&plot=full&apikey=38795606&y=2021",
    "?t=crisis&plot=full&apikey=38795606&y=2021",
    "?t=run+hide+fight&plot=full&apikey=38795606&=",
    "?t=the+seventh+day&plot=full&apikey=38795606&=",
    "?t=honest+thief&plot=full&apikey=38795606&=",
    "?t=the+vigil&plot=full&apikey=38795606&=",
    "?t=greenland&plot=full&apikey=38795606&=",
    "?t=cosmic+sin&plot=full&apikey=38795606&=",
    "?t=the+little+things&plot=full&apikey=38795606&=",
    "?t=1917&plot=full&apikey=38795606&=",
    "?t=knives+out&plot=full&apikey=38795606&=",
    "?t=after+we+collided&plot=full&apikey=38795606&="
]

const comedyMovies = [
    "?t=step+brothers&plot=full&apikey=38795606&=",
    "?t=happy+gilmore&plot=full&apikey=38795606&=",
    "?t=soul&plot=full&apikey=38795606&=",
    "?t=the+wolf+of+wall+street&plot=full&apikey=38795606&=",
    "?t=the+big+short&plot=full&apikey=38795606&=",
    "?t=deadpool&plot=full&apikey=38795606&=",
    "?t=despicable+me+3&plot=full&apikey=38795606&=",
    "?t=zombieland+double+tap&plot=full&apikey=38795606&=",
    "?t=superbad&plot=full&apikey=38795606&=",
    "?t=palm+springs&plot=full&apikey=38795606&=",
    "?t=jojo+rabbit&plot=full&apikey=38795606&=",
    "?t=fear+and+loathing+in+las+vegas&plot=full&apikey=38795606&=",
    "?t=tag&plot=full&apikey=38795606&=",
    "?t=tropic+thunder&plot=full&apikey=38795606&=",
    "?t=talladega+nights&plot=full&apikey=38795606&=",
    "?t=twins&plot=full&apikey=38795606&=",
    "?t=fargo&plot=full&apikey=38795606&=",
    "?t=home+alone&plot=full&apikey=38795606&=",
    "?t=billy+madison&plot=full&apikey=38795606&=",
    "?t=this+is+the+end&plot=full&apikey=38795606&="
]

const actionMovies = [
    "?t=john+wick&plot=full&apikey=38795606&=",
    "?t=aquaman&plot=full&apikey=38795606&=",
    "?t=avatar&plot=full&apikey=38795606&=",
    "?t=the+lord+of+the+rings+the+two+towers&plot=full&apikey=38795606&=",
    "?t=interstellar&plot=full&apikey=38795606&=",
    "?t=kong+skull+island&plot=full&apikey=38795606&=",
    "?t=terminator+2&plot=full&apikey=38795606&=",
    "?t=hacksaw+ridge&plot=full&apikey=38795606&=",
    "?t=the+nice+guys&plot=full&apikey=38795606&=",
    "?t=the+meg&plot=full&apikey=38795606&=",
    "?t=maze+runner&plot=full&apikey=38795606&=",
    "?t=ready+player+one&plot=full&apikey=38795606&=",
    "?t=spectre&plot=full&apikey=38795606&=",
    "?t=avengers+endgame&plot=full&apikey=38795606&=",
    "?t=rampage&plot=full&apikey=38795606&=",
    "?t=armageddon&plot=full&apikey=38795606&=",
    "?t=the+rock&plot=full&apikey=38795606&=",
    "?t=con+air&plot=full&apikey=38795606&=",
    "?t=rambo&plot=full&apikey=38795606&=",
    "?t=skyfall&plot=full&apikey=38795606&=",
    "?t=iron+man&plot=full&apikey=38795606&y=2008"
]

const documentayMovies = [
    "?t=free+solo&plot=full&apikey=38795606&=",
    "?t=blackfish&plot=full&apikey=38795606&=",
    "?t=the+summit&plot=full&apikey=38795606&=",
    "?t=the+biggest+little+farm&plot=full&apikey=38795606&=",
    "?t=some+kind+of+heaven&plot=full&apikey=38795606&=",
    "?t=apollo+11&plot=full&apikey=38795606&=",
    "?t=the+mole+agent&plot=full&apikey=38795606&=",
    "?t=inside+job&plot=full&apikey=38795606&=",
    "?t=an+inconvenient+truth&plot=full&apikey=38795606&=",
    "?t=grizzly+man&plot=full&apikey=38795606&=",
    "?t=searching+for+sugar+man&plot=full&apikey=38795606&=",
    "?t=messi&plot=full&apikey=38795606&=",
    "?t=amy&plot=full&apikey=38795606&=",
    "?t=lost+boys&plot=full&apikey=38795606&="
]

const animatedMovies = [
    "?t=toy+story&plot=full&apikey=38795606&=",
    "?t=up&plot=full&apikey=38795606&=",
    "?t=lion+king&plot=full&apikey=38795606&=",
    "?t=toy+story+2&plot=full&apikey=38795606&=",
    "?t=toy+story+3&plot=full&apikey=38795606&=",
    "?t=toy+story+4&plot=full&apikey=38795606&=",
    "?t=wall+e&plot=full&apikey=38795606&=",
    "?t=the+little+mermaid&plot=full&apikey=38795606&=",
    "?t=aladdin&plot=full&apikey=38795606&y=1992",
    "?t=bee+movie&plot=full&apikey=38795606&=",
    "?t=spirited+away&plot=full&apikey=38795606&=",
    "?t=shrek&plot=full&apikey=38795606&=",
    "?t=shrek+2&plot=full&apikey=38795606&=",
    "?t=cars&plot=full&apikey=38795606&="
]

const dramaMovies = [
    "?t=titanic&plot=full&apikey=38795606&=",
    "?t=gilbert+grape&plot=full&apikey=38795606&=",
    "?t=forrest+gump&plot=full&apikey=38795606&=",
    "?t=bohemian+rhapsody&plot=full&apikey=38795606&=",
    "?t=the+greatest+showman&plot=full&apikey=38795606&=",
    "?t=good+will+hunting&plot=full&apikey=38795606&=",
    "?t=joker&plot=full&apikey=38795606&=",
    "?t=warrior&plot=full&apikey=38795606&=",
    "?t=wonder&plot=full&apikey=38795606&=",
    "?t=silver+linings+playbook&plot=full&apikey=38795606&=",
    "?t=american+sniper&plot=full&apikey=38795606&=",
    "?t=remember+the+titans&plot=full&apikey=38795606&=",
    "?t=fury&plot=full&apikey=38795606&=",
    "?t=the+imitation+game&plot=full&apikey=38795606&=",
    "?t=the+founder&plot=full&apikey=38795606&=",
    "?t=whiplash&plot=full&apikey=38795606&=",
    "?t=the+godfather&plot=full&apikey=38795606&=",
    "?t=thelma+%26+louise&plot=full&apikey=38795606&="
]

const familyMovies = [
    "?t=ratatouille&plot=full&apikey=38795606&=",
    "?t=hook&plot=full&apikey=38795606&=",
    "?t=narnia&plot=full&apikey=38795606&=",
    "?t=harry+potter&plot=full&apikey=38795606&=",
    "?t=jumanji&plot=full&apikey=38795606&=",
    "?t=home+alone&plot=full&apikey=38795606&=",
    "?t=my+girl&plot=full&apikey=38795606&=",
    "?t=pirates+of+the+caribbean&plot=full&apikey=38795606&=",
    "?t=minions&plot=full&apikey=38795606&=",
    "?t=shrek+the+third&plot=full&apikey=38795606&=",
    "?t=national+treasure&plot=full&apikey=38795606&=",
    "?t=mrs+doubtfire&plot=full&apikey=38795606&y=1993",
    "?t=gremlins&plot=full&apikey=38795606&=",
    "?t=paddington&plot=full&apikey=38795606&=",
    "?t=the+parent+trap&plot=full&apikey=38795606&=",
    "?t=the+mighty+ducks&plot=full&apikey=38795606&=",
    "?t=ice+age&plot=full&apikey=38795606&="
]

const horrorMovies = [
    "?t=the+vigil&plot=full&apikey=38795606&=",
    "?t=the+ring&plot=full&apikey=38795606&=",
    "?t=the+grudge&plot=full&apikey=38795606&=",
    "?t=it&plot=full&apikey=38795606&=",
    "?t=relic&plot=full&apikey=38795606&=",
    "?t=alien&plot=full&apikey=38795606&=",
    "?t=get+out&plot=full&apikey=38795606&=",
    "?t=the+nun&plot=full&apikey=38795606&=",
    "?t=midsommar&plot=full&apikey=38795606&=",
    "?t=the+shining&plot=full&apikey=38795606&=",
    "?t=insidious&plot=full&apikey=38795606&=",
    "?t=saw&plot=full&apikey=38795606&=",
    "?t=lights+out&plot=full&apikey=38795606&=",
    "?t=the+rental&plot=full&apikey=38795606&=",
    "?t=jaws&plot=full&apikey=38795606&=",
    "?t=split&plot=full&apikey=38795606&=",
    "?t=blair+witch&plot=full&apikey=38795606&="
]

export default { topMovies, comedyMovies, actionMovies, documentayMovies, animatedMovies,
                 dramaMovies, familyMovies, horrorMovies };