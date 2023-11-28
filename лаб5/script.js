function unique(arr) {
    return Array.from(new Set(arr));
}

let strings = ["C++", "C#", "C++", "C#", "C", "C++", "JavaScript", "C++", "JavaScript"];

console.log(unique(strings));

// 2 Задание

function displayDisciplines(session) {
    const sortedSession = session.sort((a, b) => b.passed - a.passed);
    console.log("Список дисциплін:", sortedSession);
}

function addDiscipline(session, disciplineName, points) {
    const existingDiscipline = session.find(item => item.discipline === disciplineName);

    if (existingDiscipline) {
        existingDiscipline.points += points;
        if (existingDiscipline.points >= 60) {
            existingDiscipline.passed = true;
        }
    } else {
        const newDiscipline = { discipline: disciplineName, points: points, passed: points >= 60 };
        session.push(newDiscipline);
    }

    displayDisciplines(session);
}

function averageScore(session) {
    const totalPoints = session.reduce((sum, discipline) => sum + discipline.points, 0);
    return totalPoints / session.length;
}

function countFailedDisciplines(session) {
    return session.filter(discipline => !discipline.passed).length;
}

function disciplineWithHighestScore(session) {
    const highestScoreDiscipline = session.reduce((max, discipline) => (discipline.points > max.points ? discipline : max), session[0]);
    return highestScoreDiscipline;
}

function disciplinesPassedWithPoints(session, targetPoints) {
    const passedDisciplines = session.filter(discipline => discipline.points >= targetPoints);
    console.log(`Дисципліни здані на ${targetPoints} балів або більше:`, passedDisciplines);
}

let session = [
    { discipline: 'Math', points: 80, passed: true },
    { discipline: 'History', points: 55, passed: false },
];

displayDisciplines(session);
addDiscipline(session, 'Physics', 70);
console.log('Average Score:', averageScore(session));
console.log('Failed Disciplines:', countFailedDisciplines(session));
console.log('Discipline with Highest Score:', disciplineWithHighestScore(session));
disciplinesPassedWithPoints(session, 60);
