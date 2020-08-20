//inspection 'continue' or 'break' inside 'finally' block' is ON by default

//Case1
function breakInFinallyIssue() {
    let a = 0
    for (let i = 0; i < 3; i++) {
        try {
            a = 1 / 0
        } finally {
            break
        }
    }

}

//Case2
function breakInFinallyIssue1() {
    let a = 0
    for (let i = 0; i < 3; i++) {
        try {
            a = 1 / 0
            break
        } finally {
            continue
        }

    }

}

