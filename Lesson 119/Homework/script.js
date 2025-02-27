function createScoreMap(students) {
    const scoreMap = new Map();
    students.forEach(student => {
      scoreMap.set(student.name, student.score);
    });
    return scoreMap;
  }
  const students = [
    { name: "John", score: 75 },
    { name: "Jane", score: 85 },
    { name: "John", score: 75 }
  ];
  const scoreMap = createScoreMap(students);
  console.log(scoreMap);
  
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  const arrayWithDuplicates = [1, 2, 3, 3, 4, 4, 5];
  const uniqueArray = removeDuplicates(arrayWithDuplicates);
  console.log(uniqueArray);
  function increaseScores(scoreMap) {
    const updatedMap = new Map(scoreMap);
    scoreMap.forEach((score, name) => {
      updatedMap.set(name, score + 5);
    });
    return updatedMap;
  }
    const updatedScores = increaseScores(scoreMap);
  console.log(updatedScores);
  