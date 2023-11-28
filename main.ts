/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sophie
 * Created on: Nov 2023
 * This program turns a 2 - 28BYJ-48 DC 5V until a sonar sensor senses an object 10cm away
*/

let distanceToObject: number = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Heart)

while (true) {
  if (input.buttonIsPressed(Button.A) === true) {
    while (true) {
      // find distance from sonar
      basic.clearScreen()
      distanceToObject = sonar.ping(
          DigitalPin.P1,
          DigitalPin.P2,
          PingUnit.Centimeters
      )

      // turn if distance < 10
      if (distanceToObject < 10) {
          robotbit.StpCarMove(-10, 48)
          basic.pause(500)
          robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
          basic.pause(500)
          robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)
          basic.pause(500)
          robotbit.StpCarMove(10, 48)
      } else {
          // move forward
          robotbit.StpCarMove(10, 48)
      }
    }
  }
}
