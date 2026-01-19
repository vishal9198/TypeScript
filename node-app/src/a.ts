interface manager {
  name: string;
}

interface User {
  age: string;
}
interface bigperson extends manager, User {
  mob: number;
}
