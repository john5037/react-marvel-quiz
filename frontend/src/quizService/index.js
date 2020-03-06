const qBank = [
    {
        question: "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
        answers: ["2005", "2008", "2006", "2009"],
        correct: "2008",
        questionId: "01"
    },
    {
        question: "Which Avenger does Thor team up with in Thor: Ragnarok?",
        answers: ["Hulk", "Iron Man", "Hawkeye", "Natasha"],
        correct: "Hulk",
        questionId: "02"
    },
    {
        question: "In which fictional country is Black Panther set?",
        answers: ["Wakanda", "Gotham", "Latveria", "AssGuard"],
        correct: "Wakanda",
        questionId: "03"
    },
    {
        question: "In which film did Spider-Man make his first appearance in the MCU?",
        answers: ["Thor", "Age of Ultron", "Civil War"],
        correct: "Civil War",
        questionId: "04"
    },
    {
        question: "What is the Falcon’s real name",
        answers: ["Sam Pierce", "Sam Wilson", "Sam Drenn", "Alexander Pierce"],
        correct: "Sam Wilson",
        questionId: "05"
    },
    {
        question: "Who is Bucky Barnes better known as?",
        answers: ["Red Skull", "Winter Soldier", "Baron Zemo"],
        correct: "Winter Soldier",
        questionId: "06"
    },
    {
        question: "What is the name of the British agent Cap teams up with in World War II?",
        answers: ["Peggy Carter","Liz Allen", "Maria Hill"],
        correct: "Peggy Carter",
        questionId: "07"
    },
    {
        question: "Which of these is not a member of the Guardians of the Galaxy?",
        answers: ["Ronan", "Groot", "Star Lord"],
        correct: "Ronan",
        questionId: "08"
    },
    {
        question: "What is Ant Man’s real name?",
        answers: ["Scott Lang", "Scott Stark", "1Peter Quill"],
        correct: "Scott Lang",
        questionId: "09"
    },
    {
        question: "What is the name of Dr Strange’s mentor?",
        answers: ["Ancient One", "Nameless One", "Ageless One"],
        correct: "Ancient One",
        questionId: "010"
    }
];

export default (n = 3) => Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));