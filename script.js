// script.js

document.addEventListener('DOMContentLoaded', function() {
    updateDaysUntil();
    setInterval(updateDaysUntil, 86400000); // Update every day

    updateDaysSince();
    setInterval(updateDaysSince, 86400000); // Update every day

    loadAssignmentCount();
    loadLongestStreak();
    updateCurrentStreak(); // Initialize current streak
});


function updateDaysUntil() {
    let now = new Date();
    let year = now.getFullYear();
    let december24 = new Date(year, 11, 24); // Month is 0-indexed
    if (now > december24) {
        december24.setFullYear(year + 1);
    }
    let daysUntil = Math.ceil((december24 - now) / (1000 * 60 * 60 * 24));
    document.getElementById('daysUntil').innerText = daysUntil;
}

let assignmentCount = 39;

function loadAssignmentCount() {
    // Load from local storage or something similar
    // For now, it's set to 0
    document.getElementById('assignmentCount').innerText = assignmentCount;
}




let daysSinceLastReset = 0;

function updateDaysSince() {
    daysSinceLastReset++;
    document.getElementById('daysSince').innerText = daysSinceLastReset;
}

function resetDaysSince() {
    daysSinceLastReset = 0;
    document.getElementById('daysSince').innerText = daysSinceLastReset;
}



let longestStreak = 40;

function loadLongestStreak() {
    // Load from local storage or something similar
    // For now, it's set to 0
    document.getElementById('longestStreak').innerText = longestStreak;
}

function updateStreak() {
    if (daysSinceLastReset > longestStreak) {
        longestStreak = daysSinceLastReset;
        document.getElementById('longestStreak').innerText = longestStreak;
    }
}
