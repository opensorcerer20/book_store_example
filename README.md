# Laravel example project

Make a bookstore website to demonstrate knowledge of Laravel and its systems

- [ ] queue orders
  - [ ] each item in an order takes a few seconds to process
  - [ ] show progress on front end (pipeline from front to back)
- [ ] auth: log in for order
- [ ] middleware: TBD
- [ ] web socket: (?) get book details from ISBN
- [ ] front end
  - [ ] responsive design: desktop, tablet, mobile
  - [ ] SPA?
- [ ] notifications: TBD
- [ ] ORM for inventory
- [ ] seeder to set/reset database
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
