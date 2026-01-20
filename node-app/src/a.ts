// type keyword = "up" | "down" | "left" | "right"; //hard coded  const value
//enum is used to combined const  values

enum Direction {
  Left = "left",
  Right = "right",
  Up = "up",
  Down = "down",
}

function dosomthing(keyPressed: Direction) {
  if (keyPressed == Direction.Up) console.log("up");
}

dosomthing(Direction.Up);
dosomthing(Direction.Down);
console.log(Direction.Up);
console.log(Direction.Down);
// dosomthing("leftword");
