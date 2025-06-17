# Laravel example project

Make a bookstore website to demonstrate knowledge of Laravel and its systems

- [x] ORM for inventory
- [x] seeder to set database
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
