# SafeBronc
An app designed to help prevent sexual assault at SCU parties
## Inspiration
Sexual assault is a rampant issue around the world, and has become increasingly present in our Santa Clara University community. We wanted to build an app that helps prevent sexual assault by keeping track of events and parties both on and around campus, and providing users with features to get help should the need arise, including an authenticated login, panic button, and a list of resources.

## What it does
SafeBronc is a mobile app that allows hosts to create events, and uses a QR code system (work in progress) to track attendees. If someone feels uncomfortable at a gathering, they can use the panic button, which immediately notifies event organizers and leaders on campus, using Twilio. The app also includes an authenticated Google login (work in progress) to ensure that all users are verified members of the SCU community, and helps hold users accountable. It also provides a list of resources that users can use in the case of an emergency or to receive support.

## How we built it
We used React Native to build the front-end mobile application, using the Expo CLI and Expo Go app to test our app. Our back-end was developed with JavaScript. We used Twilio's service to implement the texting feature for the panic button. We used Digital Ocean to host our database.

## Challenges we ran into
We struggled with setting up our database to connect our front-end with our back-end, but ultimately found Digital Ocean to be a perfect fit for the app. Initially, we came across the challenge of keeping track of event and user locations (with permission from users). However, we found the Geolocation API to efficiently provide us with location information that we are able to store in our database (this feature is still in development).

## Accomplishments that we're proud of
We are proud of our final product. The mobile application is user-friendly and provides users with the important features that we believe will help reduce sexual assault on campus.

## What we learned
Through this project, we learned how to use new technologies and softwares, such as React Native to build our front-end. We also learned more about setting up databases, as well as implementing APIs such as Twilio and Geolocation on our back-end.

## What's next for SafeBronc
Our next step is to develop a user-friendly web-interface. This can help make setting up events easier and more efficient, as well as open up opportunities to implement features that are better suited for a web application.
