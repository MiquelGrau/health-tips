
# Well.ch Frontend Engineer Assignment
You have applied for an Frontend Engineering position at Well and therefore, we would like you to write some code.
Take your time to implement this and make sure, it's production ready (whatever that means to you). Nevertheless, we expect to hear back from you within two weeks. If you have any questions or if something is unclear, please let us know.

# Project description
We are going to implement a basic Angular health-tip application that shows health tips to the user.  

- The backend has a list of health tips. Each health tip contains some text. The data is randomly generated (for the purpose of this exercise).
- There are different types of HealthTips: `DoctorHealthTip`, `PsychoHealthTip`, `FamilyHealthTip`, `FitnessHealthTip` and `InsuranceHealthTip`

You can run the backend with the command

    docker run -p 8080:8080 europe-west6-docker.pkg.dev/wellch-ops/well-hiring/health-tips-backend:latest

The backend exposes the following Rest API:

- `GET /api/tips/random` returns a list of 14 random health tips (out of around 100 health tips in the backend's database). Each health tip has a type, an id, a title, a text, a datetime and a number of up-votes and a number of down-votes.

- `GET /api/tips/{id}` returns a single health tip, with the same attributes as above

- `PUT /api/tips/{id}/vote/{vote}` where `{vote}` is `UP` or `DOWN`. Increases the number of up- or down- votes.

## Task
We would like to see a frontend that visualizes this data:
- It should be **responsive** and adapt to the screen size
- An **overview page** that shows health tips (the data should be coming from the `/api/tips/random` endpoint). It should **only show the title and the amount of up- and downvotes**.
- On the overview page, the health tips should be **grouped in 3 groups**: "Today" (for health tips with date of today),
"This week" (for health tips with date time of this week, excluding today), and "Earlier" (for health tips with date time earlier than this week)
- Each type of health tip (e.g. InsuranceHealthTip, FitnessHealthTip, etc.) should be shown in a **different color** on the overview page
- When you click on one health tip, the browser should navigate to a **specific view** that renders the details and you can up- and downvote the healthtip. Make sure, the user can also navigate back.

## Technical requirements
- For this exercise, we won't implement any security and don't expect it from you for simplicity reason.
- Use the Angular framework
- Use NgRx for state management