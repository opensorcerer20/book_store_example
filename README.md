# Laravel example project

## "How do I start the server?"
- Two actions are needed
  - Front end: npm run dev
  - Back end: php artisan serve

## "How do I run tests?"
- php artisan test

Make a bookstore website to demonstrate knowledge of Laravel and its systems

- [x] ORM for inventory
- [x] seeder to set database
- [ ] cart
  - [x] models
  - [x] pivot table
  - [x] migrations
  - [ ] must be logged in
  - [ ] add to cart
  - [ ] num items in cart
  - [ ] cart page
  - [ ] change quantity
  - [ ] remove from cart
- [ ] pre commit hooks
  - [ ] npm run format
  - [ ] npm run lint
- [ ] command to reset database
- [ ] queue orders
  - [ ] each item in an order takes a few seconds to process
  - [ ] show progress on front end (pipeline from front to back)
- [ ] auth: log in for order
- [ ] middleware: TBD
- [ ] web socket: (?) get book details from ISBN
- [ ] front end
  - [ ] responsive design: desktop, tablet, mobile
  - [ ] SPA?
  - [ ] SSR
- [ ] notifications: TBD
- [ ] inventory per unique user to allow reset on demand that doesnt affect others
  - [ ] main book database never changes
  - [ ] layer on top has unique user changes
  - [ ] reset button wipes unique user changes
- [ ] database transaction for order
  - [ ] demonstrate failure rollback
- [ ] task: email to admin about stock every 5 minutes (user gives admin email to see it)
- [ ] email for completed order
- [ ] events
  - [ ] order fulfilled (email)
  - [ ] book sold (adjust inventory, send message to front end)
- [ ] storage: TBD
- [ ] get something from S3
- [ ] serverless: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/php-laravel-tutorial.html
