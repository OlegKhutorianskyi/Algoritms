// 1. Создать функцию solve, которая принимает 4 аргумента: 
//      int n (количество дисков в начале исполнения) 
//      int fromRod (стержень, с которого снимается диск)
//      int toRod (стержешь, на который должен быть положен диск в итоге)
//      int additionalRod (стержень, который используется как вспомогательный)
// 2. В функции выполнить проверку n === 1, если она выполняется, вывести, с какого стержня переносится диск и на какой и сделать return
// 3. Вызвать solve, поменяв местами toRod и additionalRod и уменьшив n на 1
// 4. Вывести номер диска, который мы переносим (n) и стержени с которого мы переносим, 
//    на который мы переносим и тот, который используется, как дополнительный
// 5. Вызвать solve, поменяв местами fromRod и additionalRod и уменьшив n на 1

// 6. Вызвать sovle с аргументами (3, 1, 3, 2)



// slove(31332)
// (n f t a) -> (n f a t)

// let solve = (n, fromRod, toRod, additionalRod) => {
//     if (n === 1) {
//          solve(fromRod, toRod)
//             return;
//     };
//     solve(n - 1, fromRod, additionalRod, toRod);
//         console.log(solve(n, fromRod, toRod, additionalRod))
//     solve(n - 1, additionalRod, fromRod, toRod);
// };
solve(3, 1, 3, 2);


function solve(n, fromRod, toRod, additionalRod) {
  if (n === 1) {
        console.log(`Move 1 to from rod ${fromRod} to rod ${toRod}`);
        return;
  }
    solve(n - 1, fromRod, additionalRod, toRod);


  console.log(solve(`Move 1 to from rod ${fromRod} to rod ${toRod} width rod ${additionalRod}`));
    solve(n - 1, additionalRod, fromRod, toRod);
};

