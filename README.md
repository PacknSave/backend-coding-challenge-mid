# PacknSave Coding Challenge

Thank you for taking the time to face this coding challenge.
It should take less than one hour to complete this challenge, however there is no time limit so take as much time as you need.
Good luck!

Task: Implement the getSalesByWeek function.

## Background

The function basically implements the concept of "group by" present in most databases.
The sampleData.json file attached includes a sample of orders,
each order having 2 fields: date, and value. The "date" field is a timestamp of order creation date and "value" is the
amount paid.
The getSalesByWeek functions takes 3 arguments:
- orders: a list of orders to aggregate
- startDate: starting date
- endDate: end date

Your task is to group orders by week and return the sum of order values for each week within the date range given, and return 0 if no orders have been made in the week
Example: if startDate is 1 Dec 2021 and endDate is 29 Dec 2021,
  then the getSalesByWeek function should return an array with 4 elements corresponding to the 4 weeks
   1/12/2021 to 8/12/2021, 8/12/2021 to 15/12/2021, 15/12/2021 to 22/12/2021, and 22/12/2021 to 29/12/2021
   each element containing the sum of order values for orders created in the week

The index file contains a simple test to validate the code, you can use it to make sure your logic is sound

## Restrictions

You are not allowed to use external libraries, the challenge is meant to evaluate your ability to manipulate data, work with dates, and write an efficient algorithm.

## Deliverables

- Use Github or Bitbucket to share your code
