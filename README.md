# schoolPaymentsTracker
Objective:
This Repository is meant to be a handy Single-Page-Aplication for all low-budget schools, the concept is easy and simple, Custmers (parents) will load the payment information on the simplest form with the basic data only, so the Treasury Clerk can fetch it and do the match with the Bank data. 

Nowadays, sowftware that can do this automatycally are just too expensive for most schools.


Steps for use:

1. Customer opens the web page to load some few data, for example, name, mail, amount paid, date of payment and "notes". This will feed a DataBase and trigger an email to the mail account provided with the data loaded plus an ID.

2. The school's Treasury Clerk downloads the data from the DB and the data from the school's Bank Account and starts matching payments with Clients.

3. After the school's Treasury Clerk finished the account reconciliation he/she changes the value FALSE to the value TRUE on the "Recieved" field on the DB for each payment recieved, sorting by ID.

4. Customers can use the ID for checking on the web page if the payment was already recieved and conciliated on books.


Extra step:

If all previous requirements reach complition, the next step will be, on the same web page but on another route, with only entering the Customer's ID, being able to trigger an email (to an email address provided previously) with the account balance for that Customer ID.