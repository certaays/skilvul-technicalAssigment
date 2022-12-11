import { AddTodo } from '../components/helper';

test('Should add todo to the list', () => {
  // Arrange
  const defaultTodo = [{
    id: 1,
    name: "Learn JSX",
    isComplete: false,
  },
  {  
    id: 2,
    name: "Build awesome react app",
    isComplete: false,
  },
  { 
    id: 3,
    name: "Ship it",
    isComplete: false,
  }
  ]

  const newTodo = {
    id: 3,
    name: "New",
    isComplete: false,
  }

  const list = [newTodo, ...defaultTodo]
  const expected = JSON.stringify(list)

  // Act
  const act = AddTodo(defaultTodo, newTodo)
  const result = JSON.stringify(act)

  // Assert
  expect(result).toBe(expected)
})

test('should not mutate the existing todo array', () => {
  // Arrange
  const todo = [{
      id: 1,
      name: "Learn JSX",
      isComplete: false,
    },
    {
      id: 2,
      name: "Build awesome react app",
      isComplete: false,
    },
  ]

  const newTodo = {
      id: 3, 
      name: "New",
      isComplete: false,
  }

  const expectTodo = [{
      id: 1,
      name: "Learn JSX",
      isComplete: false,
    },
    {
      id: 2,
      name: "Build awesome react app",
      isComplete: false,
    },
  ]

  // Act
  AddTodo(todo, newTodo)
  const act = todo
  const compare = JSON.stringify(expectTodo) === JSON.stringify(act)

  // Assert
  expect(true).toBe(compare)

})