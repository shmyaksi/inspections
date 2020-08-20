// inspection 'Unreachable 'case' branch of a 'switch' statement' is ON by default


//Case1
enum Boo123 {
    A, B, C
}

function qqq(p: Boo123.A | Boo123.B) {
    switch (p) {
        case Boo123.A :
            break;
        case Boo123.B :
            break;
        case Boo123.C :
            break;
    }
}

//Case2
enum AnimalJournalDetailValueType {
    PLAIN = "PLAIN",
    I18N = "I18N",
    DATE = "DATE",
    DATEDATE = 'datedate'

}


let parseValue = (detail: AnimalJournalDetailValueType.PLAIN | AnimalJournalDetailValueType.DATE | AnimalJournalDetailValueType.I18N) => {
    switch (detail) {
        case AnimalJournalDetailValueType.I18N:

            break;
        case AnimalJournalDetailValueType.DATE:
            break;
        case AnimalJournalDetailValueType.PLAIN:

            break;
        case AnimalJournalDetailValueType.DATEDATE:
            break;


    }
}
