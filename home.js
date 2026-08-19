/* ========================================
GET ELEMENTS
======================================== */

const showSimilarities =
document.getElementById("showSimilarities");

const similaritiesTable =
document.getElementById("similaritiesTable");

const showDifferences =
document.getElementById("showDifferences");

const differencesTable =
document.getElementById("differencesTable");

/* ========================================
SIMILARITIES BUTTON
======================================== */

showSimilarities.addEventListener(
"click",
function () {


    similaritiesTable.classList.toggle("hidden");


    if (similaritiesTable.classList.contains("hidden")) {

        showSimilarities.textContent =
            "SHOW COMPARISON";

    } else {

        showSimilarities.textContent =
            "HIDE COMPARISON";

    }

}


);

/* ========================================
DIFFERENCES BUTTON
======================================== */

showDifferences.addEventListener(
"click",
function () {


    differencesTable.classList.toggle("hidden");


    if (differencesTable.classList.contains("hidden")) {

        showDifferences.textContent =
            "SHOW COMPARISON";

    } else {

        showDifferences.textContent =
            "HIDE COMPARISON";

    }

}


);
