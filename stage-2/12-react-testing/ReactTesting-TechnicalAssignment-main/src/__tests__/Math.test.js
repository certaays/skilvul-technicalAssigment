import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const a = 45, b = 25, result = 70 

  // Act
  const act = Add(a,b)

  // Assert
  expect(act).toBe(result)

})

test('Return substraction of a - b', () => {
  // Arrange
  const a = 45, b = 25, result = 20

  // Act
  const act = Substract(a,b)

  // Assert
  expect(act).toBe(result)

})

test('Return multiplication of two arguments', () => {
  // Arrange
  const a = 45, b = 25, result = 1125

  // Act
  const act = Multiplication(a,b)

  // Assert
  expect(act).toBe(result)

})